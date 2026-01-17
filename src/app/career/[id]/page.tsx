'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getCareerPath, getAllSteps } from '@/data/careerPaths';
import { useProgress } from '@/context/ProgressContext';
import MilestoneCard from '@/components/MilestoneCard';
import StatsPanel from '@/components/StatsPanel';
import AchievementsPanel from '@/components/AchievementsPanel';

export default function CareerPathPage() {
  const params = useParams();
  const id = params.id as string;
  const careerPath = getCareerPath(id);
  const { selectCareerPath, getProgressPercentage, resetProgress } = useProgress();

  useEffect(() => {
    if (careerPath) {
      selectCareerPath(careerPath.id);
    }
  }, [careerPath, selectCareerPath]);

  if (!careerPath) {
    notFound();
  }

  const allSteps = getAllSteps(careerPath);
  const totalHours = allSteps.reduce((sum, step) => sum + step.estimatedHours, 0);
  const milestoneAchievements = careerPath.milestones.map((m) => m.achievement);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to all paths
      </Link>

      {/* Header */}
      <div
        className="relative mb-8 overflow-hidden rounded-3xl p-8"
        style={{
          background: `linear-gradient(135deg, ${careerPath.color}20 0%, ${careerPath.color}10 100%)`,
        }}
      >
        <div
          className="absolute right-0 top-0 h-full w-1/3 opacity-10"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${careerPath.color} 100%)`,
          }}
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 text-6xl">{careerPath.icon}</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              {careerPath.title}
            </h1>
            <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
              {careerPath.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800/80 dark:text-gray-300">
                📚 {careerPath.milestones.length} Milestones
              </span>
              <span className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800/80 dark:text-gray-300">
                📋 {allSteps.length} Steps
              </span>
              <span className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800/80 dark:text-gray-300">
                ⏱️ ~{totalHours}h total
              </span>
              <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400">
                ✨ {careerPath.totalXP} XP
              </span>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="min-w-[200px] rounded-2xl bg-white/80 p-6 dark:bg-gray-800/80">
            <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">Your Progress</div>
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {getProgressPercentage()}%
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content - Milestones */}
        <div className="space-y-8 lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Learning Roadmap
          </h2>
          {careerPath.milestones.map((milestone, index) => (
            <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <StatsPanel />
          <AchievementsPanel milestoneAchievements={milestoneAchievements} />

          {/* Reset Progress */}
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
            <h3 className="mb-2 font-semibold text-red-800 dark:text-red-400">
              Reset Progress
            </h3>
            <p className="mb-4 text-sm text-red-700 dark:text-red-300">
              This will clear all your progress, XP, and achievements. This action cannot be undone.
            </p>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                  resetProgress();
                }
              }}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
