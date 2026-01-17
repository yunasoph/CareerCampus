'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getCareerPath, getAllSteps } from '@/data/careerPaths';
import { useProgress } from '@/context/ProgressContext';
import MilestoneCard from '@/components/MilestoneCard';
import StatsPanel from '@/components/StatsPanel';
import AchievementsPanel from '@/components/AchievementsPanel';

// RPG class themes
const classThemes: Record<string, { icon: string; title: string; subtitle: string }> = {
  'web-development': { icon: '🧙‍♂️', title: 'Web Mage', subtitle: 'Master of the Digital Arts' },
  'data-science': { icon: '🔮', title: 'Data Oracle', subtitle: 'Seer of Hidden Patterns' },
  'ai-ml': { icon: '🤖', title: 'AI Architect', subtitle: 'Creator of Intelligent Beings' },
  'cybersecurity': { icon: '🛡️', title: 'Cyber Guardian', subtitle: 'Defender of Digital Realms' },
  'mobile-development': { icon: '📱', title: 'Mobile Ranger', subtitle: 'Crafter of Pocket Worlds' },
  'cloud-devops': { icon: '☁️', title: 'Cloud Summoner', subtitle: 'Commander of Infinite Servers' },
};

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
  const theme = classThemes[careerPath.id] || { icon: careerPath.icon, title: careerPath.title, subtitle: 'Unknown Class' };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-amber-400 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>🏰</span> Return to Guild Hall
      </Link>

      {/* Header */}
      <div
        className="relative mb-8 overflow-hidden rounded-3xl p-8 border border-purple-800/50"
        style={{
          background: `linear-gradient(135deg, ${careerPath.color}20 0%, rgba(15, 15, 26, 0.9) 50%, ${careerPath.color}10 100%)`,
        }}
      >
        {/* Magical glow effect */}
        <div 
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: careerPath.color }}
        />
        <div 
          className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: careerPath.color }}
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            {/* Class Icon */}
            <div className="relative mb-4 inline-block">
              <span className="text-7xl filter drop-shadow-lg">{theme.icon}</span>
              <div 
                className="absolute -inset-4 rounded-full blur-xl opacity-40"
                style={{ backgroundColor: careerPath.color }}
              />
            </div>
            
            <div className="text-xs text-purple-400 uppercase tracking-wider mb-1">
              Character Class
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                {theme.title}
              </span>
            </h1>
            <p className="text-purple-300 italic mb-2">{theme.subtitle}</p>
            <p className="mt-2 max-w-2xl text-purple-200/70">
              {careerPath.description}
            </p>
            
            {/* Stats */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-purple-900/50 border border-purple-700/50 px-4 py-1.5 text-sm font-medium text-purple-300">
                📜 {careerPath.milestones.length} Quests
              </span>
              <span className="rounded-full bg-purple-900/50 border border-purple-700/50 px-4 py-1.5 text-sm font-medium text-purple-300">
                ⚔️ {allSteps.length} Challenges
              </span>
              <span className="rounded-full bg-purple-900/50 border border-purple-700/50 px-4 py-1.5 text-sm font-medium text-purple-300">
                ⏱️ ~{totalHours}h journey
              </span>
              <span className="rounded-full bg-amber-900/30 border border-amber-700/50 px-4 py-1.5 text-sm font-medium text-amber-400">
                ✨ {careerPath.totalXP} XP
              </span>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="min-w-[220px] rounded-2xl bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-700/50 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🗺️</span>
              <span className="text-sm text-purple-400">Quest Progress</span>
            </div>
            <div className="mb-3 text-4xl font-bold text-amber-400">
              {getProgressPercentage()}%
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-purple-900/50 border border-purple-700/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 xp-bar-animated transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content - Quests */}
        <div className="space-y-8 lg:col-span-2">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">📜</span>
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Quest Log
            </span>
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
          <div className="quest-card rounded-2xl border border-red-800/50 bg-gradient-to-br from-red-900/30 to-rose-900/30 p-6">
            <h3 className="mb-2 font-semibold flex items-center gap-2 text-red-400">
              <span>⚠️</span> Abandon Quest
            </h3>
            <p className="mb-4 text-sm text-red-300/80">
              This will reset all progress, XP, and trophies. Your hero will start anew.
            </p>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to abandon your quest? All progress will be lost forever!')) {
                  resetProgress();
                }
              }}
              className="rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-sm font-medium text-white hover:from-red-500 hover:to-rose-500 transition-all"
            >
              🔥 Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
