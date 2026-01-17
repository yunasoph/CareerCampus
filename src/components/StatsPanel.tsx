'use client';

import { useProgress } from '@/context/ProgressContext';

export default function StatsPanel() {
  const { progress, stats, getProgressPercentage } = useProgress();
  const progressPercentage = getProgressPercentage();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Your Progress
      </h3>

      {/* Level Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Level {stats.level}
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {stats.xpToNextLevel} XP to next level
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500"
            style={{ width: `${stats.progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {progress.totalXP}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total XP</div>
        </div>

        <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/30">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {progress.completedSteps.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Steps Done</div>
        </div>

        <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-950/30">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {progress.completedMilestones.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Milestones</div>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/30">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {progress.earnedAchievements.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
        </div>
      </div>

      {/* Path Progress */}
      {progress.currentCareerPath && (
        <div className="mt-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/50">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Path Progress
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {progressPercentage}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
