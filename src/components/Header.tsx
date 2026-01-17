'use client';

import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';

export default function Header() {
  const { progress, stats } = useProgress();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            CareerCampus
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Paths
          </Link>
          
          {progress.currentCareerPath && (
            <Link
              href={`/career/${progress.currentCareerPath}`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              My Roadmap
            </Link>
          )}

          <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white">
            <div className="flex items-center gap-1">
              <span className="text-lg">⭐</span>
              <span className="text-sm font-semibold">Level {stats.level}</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <div className="flex items-center gap-1">
              <span className="text-lg">✨</span>
              <span className="text-sm font-semibold">{progress.totalXP} XP</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
