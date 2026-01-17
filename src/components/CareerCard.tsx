import Link from 'next/link';
import { CareerPath } from '@/types';

interface CareerCardProps {
  careerPath: CareerPath;
  isSelected?: boolean;
  progressPercentage?: number;
}

export default function CareerCard({ careerPath, isSelected, progressPercentage = 0 }: CareerCardProps) {
  const totalSteps = careerPath.milestones.reduce(
    (sum, milestone) => sum + milestone.steps.length,
    0
  );

  return (
    <Link href={`/career/${careerPath.id}`}>
      <div
        className={`group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
          isSelected
            ? 'border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/30'
            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'
        }`}
      >
        {/* Color accent bar */}
        <div
          className="absolute left-0 top-0 h-1 w-full"
          style={{ backgroundColor: careerPath.color }}
        />

        {/* Selected badge */}
        {isSelected && (
          <div className="absolute right-4 top-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white">
            Current Path
          </div>
        )}

        <div className="mb-4 text-5xl">{careerPath.icon}</div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {careerPath.title}
        </h3>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {careerPath.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            {careerPath.milestones.length} Milestones
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            {totalSteps} Steps
          </span>
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            {careerPath.totalXP} XP
          </span>
        </div>

        {/* Progress bar */}
        {progressPercentage > 0 && (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">Progress</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
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
    </Link>
  );
}
