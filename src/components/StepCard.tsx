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
    article: '📄',
    video: '🎬',
    course: '📚',
    book: '📖',
    tool: '🔧',
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30"
    >
      <span>{typeIcons[resource.type] || '🔗'}</span>
      <span className="text-gray-700 dark:text-gray-300">{resource.title}</span>
      <svg
        className="ml-auto h-4 w-4 text-gray-400"
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
      className={`relative rounded-xl border-2 transition-all ${
        completed
          ? 'border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
          : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
      }`}
    >
      {/* Step number indicator */}
      <div
        className={`absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
          completed
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
        }`}
      >
        {completed ? '✓' : index + 1}
      </div>

      <div className="p-5 pl-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                +{step.xp} XP
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                ~{step.estimatedHours}h
              </span>
            </div>
          </div>

          <button
            onClick={handleComplete}
            disabled={completed}
            className={`ml-4 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              completed
                ? 'cursor-default bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
            }`}
          >
            {completed ? '✓ Completed' : 'Mark Complete'}
          </button>
        </div>

        {/* Resources toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          <span>{isExpanded ? 'Hide' : 'Show'} Resources</span>
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
