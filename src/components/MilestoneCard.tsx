'use client';

import { Milestone } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import StepCard from './StepCard';

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

export default function MilestoneCard({ milestone, index }: MilestoneCardProps) {
  const { isStepCompleted, isMilestoneCompleted, hasAchievement } = useProgress();
  
  const completedSteps = milestone.steps.filter((step) => isStepCompleted(step.id)).length;
  const totalSteps = milestone.steps.length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);
  const milestoneComplete = isMilestoneCompleted(milestone.id);

  return (
    <div className="relative">
      {/* Quest header */}
      <div
        className={`quest-card relative rounded-2xl border-2 p-6 ${
          milestoneComplete
            ? 'border-emerald-600/50 bg-gradient-to-br from-emerald-900/30 to-green-900/30'
            : 'border-purple-800/50'
        }`}
      >
        {/* Quest number badge */}
        <div
          className={`absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold border-2 ${
            milestoneComplete
              ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400 text-white shadow-lg shadow-emerald-500/30'
              : 'bg-gradient-to-br from-purple-600 to-indigo-600 border-purple-400 text-white shadow-lg shadow-purple-500/30'
          }`}
        >
          {milestoneComplete ? '✓' : `Q${index + 1}`}
        </div>

        <div className="ml-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📜</span>
              <span className="text-xs text-purple-400 uppercase tracking-wider">Quest {index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-amber-400">
              {milestone.title}
            </h3>
            <p className="mt-1 text-purple-300/80">
              {milestone.description}
            </p>
          </div>

          {/* Quest reward preview */}
          <div
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
              hasAchievement(milestone.achievement.id)
                ? 'border-amber-600/50 bg-gradient-to-br from-amber-900/40 to-yellow-900/40'
                : 'border-purple-700/30 bg-purple-900/30'
            }`}
          >
            <div className="relative">
              <span className="text-3xl">{milestone.achievement.icon}</span>
              {hasAchievement(milestone.achievement.id) && (
                <div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-md" />
              )}
            </div>
            <div>
              <div className="text-xs text-purple-400">Quest Reward</div>
              <div className="text-sm font-medium text-amber-400">
                {milestone.achievement.title}
              </div>
              <div className="text-xs text-emerald-400">
                +{milestone.achievement.xpBonus} XP
              </div>
            </div>
          </div>
        </div>

        {/* Quest progress bar */}
        <div className="ml-6 mt-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-purple-400 flex items-center gap-2">
              <span>⚔️</span> {completedSteps} of {totalSteps} challenges completed
            </span>
            <span className="font-bold text-amber-400">
              {progressPercent}%
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-purple-900/50 border border-purple-700/30">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                milestoneComplete
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                  : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Challenges list */}
      <div className="relative ml-8 mt-4 space-y-4 border-l-2 border-purple-700/50 pl-6">
        {milestone.steps.map((step, stepIndex) => (
          <StepCard key={step.id} step={step} index={stepIndex} />
        ))}
      </div>
    </div>
  );
}
