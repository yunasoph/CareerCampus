'use client';

import { useState } from 'react';
import { Step, Resource } from '@/types';
import { useProgress } from '@/context/ProgressContext';

interface StepCardProps {
  step: Step;
  index: number;
}

function ResourceLink({ resource }: { resource: Resource }) {
  const typeIcons: Record<string, string> = {
    article: '📜',
    video: '🎬',
    course: '📚',
    book: '📖',
    tool: '⚒️',
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-purple-700/30 bg-purple-900/30 px-3 py-2 text-sm transition-colors hover:border-amber-600/50 hover:bg-amber-900/20"
    >
      <span>{typeIcons[resource.type] || '🔗'}</span>
      <span className="text-purple-200">{resource.title}</span>
      <svg
        className="ml-auto h-4 w-4 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}

export default function StepCard({ step, index }: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isStepCompleted, completeStep } = useProgress();
  const completed = isStepCompleted(step.id);

  const handleComplete = () => {
    if (!completed) {
      completeStep(step.id, step.xp);
    }
  };

  return (
    <div
      className={`quest-card relative rounded-xl border-2 transition-all ${
        completed
          ? 'border-emerald-600/50 bg-gradient-to-br from-emerald-900/30 to-green-900/30'
          : 'border-purple-800/50'
      }`}
    >
      {/* Challenge number indicator */}
      <div
        className={`absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold border ${
          completed
            ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400 text-white'
            : 'bg-purple-900 border-purple-600 text-purple-300'
        }`}
      >
        {completed ? '✓' : index + 1}
      </div>

      <div className="p-5 pl-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">⚔️</span>
              <span className="text-xs text-purple-400 uppercase tracking-wider">Challenge {index + 1}</span>
            </div>
            <h4 className="text-lg font-semibold text-amber-400">
              {step.title}
            </h4>
            <p className="mt-1 text-sm text-purple-300/80">
              {step.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-amber-900/30 border border-amber-700/30 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                ✨ +{step.xp} XP
              </span>
              <span className="rounded-full bg-blue-900/30 border border-blue-700/30 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                ⏱️ ~{step.estimatedHours}h
              </span>
            </div>
          </div>

          <button
            onClick={handleComplete}
            disabled={completed}
            className={`ml-4 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              completed
                ? 'cursor-default bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 hover:from-amber-400 hover:to-yellow-400 active:scale-95 shadow-lg shadow-amber-500/30'
            }`}
          >
            {completed ? '✓ Victory!' : '⚔️ Complete'}
          </button>
        </div>

        {/* Resources toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-amber-400 transition-colors"
        >
          <span>📜</span>
          <span>{isExpanded ? 'Hide' : 'Show'} Ancient Scrolls</span>
          <svg
            className={`h-4 w-4 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Resources list */}
        {isExpanded && (
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {step.resources.map((resource, i) => (
              <ResourceLink key={i} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
