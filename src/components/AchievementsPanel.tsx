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
          ? 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30'
          : 'bg-gray-100 opacity-50 grayscale dark:bg-gray-800'
      } ${small ? 'p-2' : 'p-4'}`}
      title={achievement.description}
    >
      <span className={small ? 'text-2xl' : 'text-4xl'}>{achievement.icon}</span>
      <span
        className={`mt-1 text-center font-medium text-gray-900 dark:text-white ${
          small ? 'text-xs' : 'text-sm'
        }`}
      >
        {achievement.title}
      </span>
      {earned && !small && (
        <span className="mt-1 text-xs text-yellow-600 dark:text-yellow-400">
          +{achievement.xpBonus} XP
        </span>
      )}
      {earned && (
        <div className="absolute -right-1 -top-1 rounded-full bg-green-500 p-1">
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
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Achievements
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
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
          <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
          <h4 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            Milestone Achievements
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
