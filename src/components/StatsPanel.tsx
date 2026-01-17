'use client';

import { useProgress } from '@/context/ProgressContext';

export default function StatsPanel() {
  const { progress, stats, getProgressPercentage } = useProgress();
  const progressPercentage = getProgressPercentage();

  // Get character title based on level
  const getTitle = () => {
    if (stats.level >= 20) return 'Legendary Hero';
    if (stats.level >= 15) return 'Master';
    if (stats.level >= 10) return 'Expert';
    if (stats.level >= 5) return 'Adventurer';
    return 'Apprentice';
  };

  return (
    <div className="quest-card rounded-2xl border border-purple-800/50 p-6">
      <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
        <span className="text-2xl">📊</span>
        <span className="text-amber-400">Hero Stats</span>
      </h3>

      {/* Character Level Display */}
      <div className="mb-6 relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-amber-500/20 to-purple-600/20 rounded-xl blur-md" />
        <div className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl p-4 border border-purple-700/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="text-4xl">⭐</span>
                <div className="absolute -inset-2 bg-yellow-500/30 rounded-full blur-md" />
              </div>
              <div>
                <div className="text-xs text-purple-400">Character Level</div>
                <div className="text-2xl font-bold text-amber-400">Level {stats.level}</div>
                <div className="text-xs text-purple-300">{getTitle()}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-purple-400">Next Level</div>
              <div className="text-sm font-semibold text-emerald-400">{stats.xpToNextLevel} XP</div>
            </div>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-purple-900/50 border border-purple-700/30">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 xp-bar-animated transition-all duration-500"
              style={{ width: `${stats.progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-700/30 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">✨</span>
            <span className="text-xs text-emerald-400">Total XP</span>
          </div>
          <div className="text-2xl font-bold text-emerald-400">
            {progress.totalXP}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-700/30 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">⚔️</span>
            <span className="text-xs text-blue-400">Challenges</span>
          </div>
          <div className="text-2xl font-bold text-blue-400">
            {progress.completedSteps.length}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-purple-700/30 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📜</span>
            <span className="text-xs text-purple-400">Quests</span>
          </div>
          <div className="text-2xl font-bold text-purple-400">
            {progress.completedMilestones.length}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-700/30 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🏆</span>
            <span className="text-xs text-amber-400">Trophies</span>
          </div>
          <div className="text-2xl font-bold text-amber-400">
            {progress.earnedAchievements.length}
          </div>
        </div>
      </div>

      {/* Active Quest Progress */}
      {progress.currentCareerPath && (
        <div className="mt-4 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/30 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-purple-300 flex items-center gap-2">
              <span>🗺️</span> Active Quest Progress
            </span>
            <span className="text-sm font-bold text-amber-400">
              {progressPercentage}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-purple-900/50 border border-purple-700/30">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
