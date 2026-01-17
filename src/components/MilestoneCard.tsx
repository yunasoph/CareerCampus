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
      {/* Milestone header */}
      <div
        className={`relative rounded-2xl border-2 p-6 ${
          milestoneComplete
            ? 'border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-800 dark:from-green-950/20 dark:to-emerald-950/20'
            : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
        }`}
      >
        {/* Milestone number badge */}
        <div
          className={`absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
            milestoneComplete
              ? 'bg-green-500 text-white'
              : 'bg-indigo-600 text-white'
          }`}
        >
          {milestoneComplete ? '✓' : index + 1}
        </div>

        <div className="ml-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {milestone.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {milestone.description}
            </p>
          </div>

          {/* Achievement badge preview */}
          <div
            className={`flex items-center gap-2 rounded-xl border px-4 py-2 ${
              hasAchievement(milestone.achievement.id)
                ? 'border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950/30'
                : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50'
            }`}
          >
            <span className="text-2xl">{milestone.achievement.icon}</span>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {milestone.achievement.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                +{milestone.achievement.xpBonus} XP
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="ml-4 mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              {completedSteps} of {totalSteps} steps completed
            </span>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {progressPercent}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                milestoneComplete
                  ? 'bg-green-500'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Steps list */}
      <div className="relative ml-8 mt-4 space-y-4 border-l-2 border-gray-200 pl-6 dark:border-gray-700">
        {milestone.steps.map((step, stepIndex) => (
          <StepCard key={step.id} step={step} index={stepIndex} />
        ))}
      </div>
    </div>
  );
}
