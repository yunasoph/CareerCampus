export interface Step {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  xp: number;
  estimatedHours: number;
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'course' | 'book' | 'tool';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  steps: Step[];
  achievement: Achievement;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpBonus: number;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  milestones: Milestone[];
  totalXP: number;
}

export interface UserProgress {
  completedSteps: string[];
  completedMilestones: string[];
  earnedAchievements: string[];
  totalXP: number;
  currentCareerPath: string | null;
  startedAt: string | null;
  lastActivityAt: string | null;
}

export interface UserStats {
  level: number;
  currentLevelXP: number;
  xpToNextLevel: number;
  progressPercentage: number;
  streakDays: number;
}
