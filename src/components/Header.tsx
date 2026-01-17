'use client';

import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';

export default function Header() {
  const { progress, stats } = useProgress();

  // Character class based on level
  const getCharacterClass = () => {
    if (stats.level >= 20) return { title: 'Legendary Hero', icon: '👑' };
    if (stats.level >= 15) return { title: 'Master', icon: '🏆' };
    if (stats.level >= 10) return { title: 'Expert', icon: '⚔️' };
    if (stats.level >= 5) return { title: 'Adventurer', icon: '🛡️' };
    return { title: 'Apprentice', icon: '📜' };
  };

  const characterClass = getCharacterClass();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/50 bg-gradient-to-r from-[#0f0f1a]/95 via-[#1a1a2e]/95 to-[#0f0f1a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-4xl filter drop-shadow-lg">⚔️</span>
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md group-hover:bg-purple-500/30 transition-all" />
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              CareerQuest
            </span>
            <div className="text-xs text-purple-400 tracking-wider">FORGE YOUR DESTINY</div>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-purple-300 hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>🏰</span> Guild Hall
          </Link>
          
          {progress.currentCareerPath && (
            <Link
              href={`/career/${progress.currentCareerPath}`}
              className="text-sm font-medium text-purple-300 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <span>📜</span> Quest Log
            </Link>
          )}

          {/* Character Status */}
          <div className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-purple-900/50 border border-purple-700/50 px-5 py-3">
            {/* Character Class */}
            <div className="flex items-center gap-2 pr-4 border-r border-purple-700/50">
              <span className="text-2xl">{characterClass.icon}</span>
              <div className="text-xs">
                <div className="text-purple-400">Rank</div>
                <div className="font-semibold text-amber-400">{characterClass.title}</div>
              </div>
            </div>

            {/* Level */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="text-2xl">⭐</span>
                <div className="absolute -inset-1 bg-yellow-500/30 rounded-full blur-sm" />
              </div>
              <div className="text-xs">
                <div className="text-purple-400">Level</div>
                <div className="font-bold text-lg text-amber-400">{stats.level}</div>
              </div>
            </div>

            {/* XP */}
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <div className="text-xs">
                <div className="text-purple-400">Experience</div>
                <div className="font-semibold text-emerald-400">{progress.totalXP} XP</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
