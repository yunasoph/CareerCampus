'use client';

import { careerPaths } from '@/data/careerPaths';
import { useProgress } from '@/context/ProgressContext';
import CareerCard from '@/components/CareerCard';
import StatsPanel from '@/components/StatsPanel';
import AchievementsPanel from '@/components/AchievementsPanel';

export default function Home() {
  const { progress, getProgressPercentage } = useProgress();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Choose Your <span className="text-indigo-600 dark:text-indigo-400">Career Path</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Select a career path and follow a structured roadmap to master the skills you need.
          Track your progress, earn XP, and unlock achievements along the way!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content - Career Cards */}
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Available Career Paths
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {careerPaths.map((path) => (
              <CareerCard
                key={path.id}
                careerPath={path}
                isSelected={progress.currentCareerPath === path.id}
                progressPercentage={
                  progress.currentCareerPath === path.id ? getProgressPercentage() : 0
                }
              />
            ))}
          </div>
        </div>

        {/* Sidebar - Stats & Achievements */}
        <div className="space-y-6">
          <StatsPanel />
          <AchievementsPanel />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Why CareerCampus?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon="🎯"
            title="Structured Learning"
            description="Follow curated roadmaps with clear milestones and steps"
          />
          <FeatureCard
            icon="⚡"
            title="Gamified Progress"
            description="Earn XP, level up, and track your journey visually"
          />
          <FeatureCard
            icon="🏆"
            title="Achievements"
            description="Unlock badges as you complete milestones and challenges"
          />
          <FeatureCard
            icon="📚"
            title="Quality Resources"
            description="Access curated tutorials, courses, and documentation"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
      <span className="mb-3 block text-4xl">{icon}</span>
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
