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
      <div className="mb-12 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-gradient-radial from-purple-500 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Choose Your Class
            </span>
          </h1>
          <p className="text-purple-300 text-xl mb-4">Begin Your Epic Journey</p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-purple-200/70">
            Select your character class and embark on an epic quest to master the skills you need.
            Complete challenges, earn XP, and unlock legendary achievements!
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content - Career Cards */}
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">🏰</span>
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Character Classes
            </span>
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
        <h2 className="mb-8 text-center text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⚡ Power-Ups & Features ⚡
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon="🗡️"
            title="Epic Quests"
            description="Embark on structured quests with clear objectives and rewards"
          />
          <FeatureCard
            icon="⚡"
            title="Level Up System"
            description="Gain XP, level up, and unlock new ranks and titles"
          />
          <FeatureCard
            icon="🏆"
            title="Legendary Trophies"
            description="Collect rare achievements as you conquer challenges"
          />
          <FeatureCard
            icon="📜"
            title="Ancient Scrolls"
            description="Access curated knowledge from the realm's best teachers"
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
    <div className="quest-card rounded-xl border border-purple-800/50 p-6 text-center">
      <div className="relative inline-block mb-3">
        <span className="text-4xl">{icon}</span>
        <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md" />
      </div>
      <h3 className="mb-2 font-semibold text-amber-400">{title}</h3>
      <p className="text-sm text-purple-300/80">{description}</p>
    </div>
  );
}
