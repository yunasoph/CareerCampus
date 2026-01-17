'use client';

import { useProgress } from '@/context/ProgressContext';
import { globalAchievements } from '@/data/careerPaths';
import { Achievement } from '@/types';

interface AchievementBadgeProps {
  achievement: Achievement;
  earned: boolean;
  small?: boolean;
}

function AchievementBadge({ achievement, earned, small = false }: AchievementBadgeProps) {
  return (
    <div
      className={`relative flex flex-col items-center rounded-xl p-3 transition-all ${
        earned
          ? 'bg-gradient-to-br from-amber-900/40 to-yellow-900/40 border border-amber-600/50 trophy-shine'
          : 'bg-purple-900/30 border border-purple-800/30 opacity-50 grayscale'
      } ${small ? 'p-2' : 'p-4'}`}
      title={achievement.description}
    >
      <div className="relative">
        <span className={small ? 'text-2xl' : 'text-4xl'}>{achievement.icon}</span>
        {earned && (
          <div className="absolute -inset-2 bg-amber-500/20 rounded-full blur-md" />
        )}
      </div>
      <span
        className={`mt-1 text-center font-medium ${
          earned ? 'text-amber-400' : 'text-purple-400'
        } ${small ? 'text-xs' : 'text-sm'}`}
      >
        {achievement.title}
      </span>
      {earned && !small && (
        <span className="mt-1 text-xs text-emerald-400">
          +{achievement.xpBonus} XP
        </span>
      )}
      {earned && (
        <div className="absolute -right-1 -top-1 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-1 shadow-lg">
          <svg
            className={small ? 'h-2 w-2' : 'h-3 w-3'}
            fill="white"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

interface AchievementsPanelProps {
  milestoneAchievements?: Achievement[];
}

export default function AchievementsPanel({ milestoneAchievements = [] }: AchievementsPanelProps) {
  const { hasAchievement } = useProgress();

  const allAchievements = [...globalAchievements, ...milestoneAchievements];
  const earnedCount = allAchievements.filter((a) => hasAchievement(a.id)).length;

  return (
    <div className="quest-card rounded-2xl border border-purple-800/50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <span className="text-amber-400">Trophy Hall</span>
        </h3>
        <span className="text-sm px-3 py-1 rounded-full bg-amber-900/30 border border-amber-700/30 text-amber-400">
          {earnedCount} / {allAchievements.length}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {globalAchievements.map((achievement) => (
          <AchievementBadge
            key={achievement.id}
            achievement={achievement}
            earned={hasAchievement(achievement.id)}
            small
          />
        ))}
      </div>

      {milestoneAchievements.length > 0 && (
        <>
          <div className="my-4 border-t border-purple-700/30" />
          <h4 className="mb-3 text-sm font-medium text-purple-400 flex items-center gap-2">
            <span>📜</span> Quest Rewards
          </h4>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {milestoneAchievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                earned={hasAchievement(achievement.id)}
                small
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
