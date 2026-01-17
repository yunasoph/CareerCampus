'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode, useCallback } from 'react';
import { UserProgress, UserStats } from '@/types';
import { careerPaths, globalAchievements, getAllSteps } from '@/data/careerPaths';

const STORAGE_KEY = 'career-campus-progress';

const XP_PER_LEVEL = 500;

const initialProgress: UserProgress = {
  completedSteps: [],
  completedMilestones: [],
  earnedAchievements: [],
  totalXP: 0,
  currentCareerPath: null,
  startedAt: null,
  lastActivityAt: null,
};

type Action =
  | { type: 'LOAD_PROGRESS'; payload: UserProgress }
  | { type: 'SELECT_CAREER_PATH'; payload: string }
  | { type: 'COMPLETE_STEP'; payload: { stepId: string; xp: number } }
  | { type: 'COMPLETE_MILESTONE'; payload: { milestoneId: string; xpBonus: number } }
  | { type: 'EARN_ACHIEVEMENT'; payload: { achievementId: string; xpBonus: number } }
  | { type: 'RESET_PROGRESS' };

function progressReducer(state: UserProgress, action: Action): UserProgress {
  const now = new Date().toISOString();
  
  switch (action.type) {
    case 'LOAD_PROGRESS':
      return action.payload;
    
    case 'SELECT_CAREER_PATH':
      return {
        ...state,
        currentCareerPath: action.payload,
        startedAt: state.startedAt || now,
        lastActivityAt: now,
      };
    
    case 'COMPLETE_STEP':
      if (state.completedSteps.includes(action.payload.stepId)) {
        return state;
      }
      return {
        ...state,
        completedSteps: [...state.completedSteps, action.payload.stepId],
        totalXP: state.totalXP + action.payload.xp,
        lastActivityAt: now,
      };
    
    case 'COMPLETE_MILESTONE':
      if (state.completedMilestones.includes(action.payload.milestoneId)) {
        return state;
      }
      return {
        ...state,
        completedMilestones: [...state.completedMilestones, action.payload.milestoneId],
        totalXP: state.totalXP + action.payload.xpBonus,
        lastActivityAt: now,
      };
    
    case 'EARN_ACHIEVEMENT':
      if (state.earnedAchievements.includes(action.payload.achievementId)) {
        return state;
      }
      return {
        ...state,
        earnedAchievements: [...state.earnedAchievements, action.payload.achievementId],
        totalXP: state.totalXP + action.payload.xpBonus,
        lastActivityAt: now,
      };
    
    case 'RESET_PROGRESS':
      return initialProgress;
    
    default:
      return state;
  }
}

interface ProgressContextType {
  progress: UserProgress;
  stats: UserStats;
  selectCareerPath: (pathId: string) => void;
  completeStep: (stepId: string, xp: number) => void;
  isStepCompleted: (stepId: string) => boolean;
  isMilestoneCompleted: (milestoneId: string) => boolean;
  hasAchievement: (achievementId: string) => boolean;
  getProgressPercentage: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(progressReducer, initialProgress);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const hasInitialized = React.useRef(false);

  // Load progress from localStorage (client-side only)
  useEffect(() => {
    // Only access localStorage on the client and only run once
    if (typeof window === 'undefined' || hasInitialized.current) return;
    hasInitialized.current = true;
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        dispatch({ type: 'LOAD_PROGRESS', payload: parsed });
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
    // Schedule state update for next frame to avoid synchronous setState in effect
    requestAnimationFrame(() => setIsLoaded(true));
  }, []);

  // Save progress to localStorage (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Calculate user stats
  const stats: UserStats = React.useMemo(() => {
    const level = Math.floor(progress.totalXP / XP_PER_LEVEL) + 1;
    const currentLevelXP = progress.totalXP % XP_PER_LEVEL;
    const xpToNextLevel = XP_PER_LEVEL - currentLevelXP;
    const progressPercentage = (currentLevelXP / XP_PER_LEVEL) * 100;
    
    // Calculate streak (simplified - just based on last activity)
    let streakDays = 0;
    if (progress.lastActivityAt) {
      const lastActivity = new Date(progress.lastActivityAt);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - lastActivity.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      streakDays = diffDays <= 1 ? 1 : 0;
    }
    
    return { level, currentLevelXP, xpToNextLevel, progressPercentage, streakDays };
  }, [progress.totalXP, progress.lastActivityAt]);

  const selectCareerPath = useCallback((pathId: string) => {
    dispatch({ type: 'SELECT_CAREER_PATH', payload: pathId });
  }, []);

  const checkAndAwardAchievements = (totalCompletedSteps: number) => {
    // First Step achievement - awarded when completing the very first step
    if (totalCompletedSteps === 1 && !progress.earnedAchievements.includes('first-step')) {
      const firstStep = globalAchievements.find(a => a.id === 'first-step');
      if (firstStep) {
        dispatch({ type: 'EARN_ACHIEVEMENT', payload: { achievementId: firstStep.id, xpBonus: firstStep.xpBonus } });
      }
    }

    // Dedicated achievement (10 steps)
    if (totalCompletedSteps >= 10 && !progress.earnedAchievements.includes('dedicated')) {
      const dedicated = globalAchievements.find(a => a.id === 'dedicated');
      if (dedicated) {
        dispatch({ type: 'EARN_ACHIEVEMENT', payload: { achievementId: dedicated.id, xpBonus: dedicated.xpBonus } });
      }
    }
  };

  const checkMilestoneCompletion = (stepId: string) => {
    if (!progress.currentCareerPath) return;
    
    const careerPath = careerPaths.find(p => p.id === progress.currentCareerPath);
    if (!careerPath) return;

    for (const milestone of careerPath.milestones) {
      if (progress.completedMilestones.includes(milestone.id)) continue;
      
      const milestoneStepIds = milestone.steps.map(s => s.id);
      const allStepsComplete = milestoneStepIds.every(
        id => progress.completedSteps.includes(id) || id === stepId
      );
      
      if (allStepsComplete) {
        dispatch({
          type: 'COMPLETE_MILESTONE',
          payload: { milestoneId: milestone.id, xpBonus: milestone.achievement.xpBonus },
        });
        dispatch({
          type: 'EARN_ACHIEVEMENT',
          payload: { achievementId: milestone.achievement.id, xpBonus: 0 }, // XP already added in milestone
        });
      }
    }

    // Check for halfway achievement
    const allSteps = getAllSteps(careerPath);
    const completedCount = progress.completedSteps.filter(id => 
      allSteps.some(s => s.id === id)
    ).length + 1; // +1 for the step just completed
    
    if (completedCount >= allSteps.length / 2 && !progress.earnedAchievements.includes('halfway-there')) {
      const halfway = globalAchievements.find(a => a.id === 'halfway-there');
      if (halfway) {
        dispatch({ type: 'EARN_ACHIEVEMENT', payload: { achievementId: halfway.id, xpBonus: halfway.xpBonus } });
      }
    }

    // Check for path completion
    if (completedCount >= allSteps.length && !progress.earnedAchievements.includes('path-master')) {
      const pathMaster = globalAchievements.find(a => a.id === 'path-master');
      if (pathMaster) {
        dispatch({ type: 'EARN_ACHIEVEMENT', payload: { achievementId: pathMaster.id, xpBonus: pathMaster.xpBonus } });
      }
    }
  };

  const completeStep = (stepId: string, xp: number) => {
    if (progress.completedSteps.includes(stepId)) return;
    
    dispatch({ type: 'COMPLETE_STEP', payload: { stepId, xp } });
    
    // Count total completed steps including the one just completed
    const totalCompletedSteps = progress.completedSteps.length + 1;
    checkAndAwardAchievements(totalCompletedSteps);
    checkMilestoneCompletion(stepId);
  };

  const isStepCompleted = useCallback((stepId: string) => progress.completedSteps.includes(stepId), [progress.completedSteps]);
  const isMilestoneCompleted = useCallback((milestoneId: string) => progress.completedMilestones.includes(milestoneId), [progress.completedMilestones]);
  const hasAchievement = useCallback((achievementId: string) => progress.earnedAchievements.includes(achievementId), [progress.earnedAchievements]);

  const getProgressPercentage = useCallback(() => {
    if (!progress.currentCareerPath) return 0;
    
    const careerPath = careerPaths.find(p => p.id === progress.currentCareerPath);
    if (!careerPath) return 0;
    
    const allSteps = getAllSteps(careerPath);
    const completedCount = progress.completedSteps.filter(id => 
      allSteps.some(s => s.id === id)
    ).length;
    
    return Math.round((completedCount / allSteps.length) * 100);
  }, [progress.currentCareerPath, progress.completedSteps]);

  const resetProgress = useCallback(() => {
    dispatch({ type: 'RESET_PROGRESS' });
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        stats,
        selectCareerPath,
        completeStep,
        isStepCompleted,
        isMilestoneCompleted,
        hasAchievement,
        getProgressPercentage,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
