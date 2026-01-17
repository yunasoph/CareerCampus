import Link from 'next/link';
import { CareerPath } from '@/types';

interface CareerCardProps {
  careerPath: CareerPath;
  isSelected?: boolean;
  progressPercentage?: number;
}

// RPG class icons and descriptions
const classThemes: Record<string, { icon: string; title: string; subtitle: string }> = {
  'web-development': { icon: '🧙‍♂️', title: 'Web Mage', subtitle: 'Master of the Digital Arts' },
  'data-science': { icon: '🔮', title: 'Data Oracle', subtitle: 'Seer of Hidden Patterns' },
  'ai-ml': { icon: '🤖', title: 'AI Architect', subtitle: 'Creator of Intelligent Beings' },
  'cybersecurity': { icon: '🛡️', title: 'Cyber Guardian', subtitle: 'Defender of Digital Realms' },
  'mobile-development': { icon: '📱', title: 'Mobile Ranger', subtitle: 'Crafter of Pocket Worlds' },
  'cloud-devops': { icon: '☁️', title: 'Cloud Summoner', subtitle: 'Commander of Infinite Servers' },
};

export default function CareerCard({ careerPath, isSelected, progressPercentage = 0 }: CareerCardProps) {
  const totalSteps = careerPath.milestones.reduce(
    (sum, milestone) => sum + milestone.steps.length,
    0
  );

  const theme = classThemes[careerPath.id] || { icon: careerPath.icon, title: careerPath.title, subtitle: 'Unknown Class' };

  return (
    <Link href={`/career/${careerPath.id}`}>
      <div
        className={`quest-card group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 ${
          isSelected
            ? 'border-amber-500/70 rpg-gold-glow'
            : 'border-purple-800/50 hover:border-purple-600/70'
        }`}
      >
        {/* Magical glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Color accent bar with glow */}
        <div
          className="absolute left-0 top-0 h-1 w-full"
          style={{ 
            backgroundColor: careerPath.color,
            boxShadow: `0 0 10px ${careerPath.color}` 
          }}
        />

        {/* Selected badge */}
        {isSelected && (
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-3 py-1 text-xs font-bold text-gray-900 shadow-lg">
            ⚔️ Active Quest
          </div>
        )}

        {/* Class Icon with glow */}
        <div className="relative mb-4">
          <span className="text-6xl filter drop-shadow-lg">{theme.icon}</span>
          <div 
            className="absolute -inset-2 rounded-full blur-lg opacity-30"
            style={{ backgroundColor: careerPath.color }}
          />
        </div>

        {/* Class Title */}
        <h3 className="mb-1 text-xl font-bold text-amber-400">
          {theme.title}
        </h3>
        <p className="mb-2 text-xs text-purple-400 italic">
          {theme.subtitle}
        </p>

        <p className="mb-4 text-sm text-purple-200/70">
          {careerPath.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-900/50 border border-purple-700/50 px-3 py-1 text-xs font-medium text-purple-300">
            📜 {careerPath.milestones.length} Quests
          </span>
          <span className="rounded-full bg-purple-900/50 border border-purple-700/50 px-3 py-1 text-xs font-medium text-purple-300">
            ⚔️ {totalSteps} Challenges
          </span>
          <span className="rounded-full bg-amber-900/30 border border-amber-700/50 px-3 py-1 text-xs font-medium text-amber-400">
            ✨ {careerPath.totalXP} XP
          </span>
        </div>

        {/* Progress bar */}
        {progressPercentage > 0 && (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-purple-400">Quest Progress</span>
              <span className="font-medium text-amber-400">
                {progressPercentage}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-purple-900/50 border border-purple-700/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 xp-bar-animated transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
