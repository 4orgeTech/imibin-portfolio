import type { SkillCategory } from '@/types';
import {
  Code,
  Brain,
  GitBranch,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  brain: Brain,
  'git-branch': GitBranch,
  database: Database,
  wrench: Wrench,
};

const proficiencyLabels: Record<string, string> = {
  learning: 'Learning',
  familiar: 'Familiar',
  proficient: 'Proficient',
  advanced: 'Advanced',
};

const proficiencyColors: Record<string, string> = {
  learning: 'text-text-muted',
  familiar: 'text-text-secondary',
  proficient: 'text-primary-300',
  advanced: 'text-primary-200',
};

export default function SkillGroup({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon] ?? Code;

  return (
    <div className="bg-canvas-elevated border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-300 animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary-300">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-accent">{category.name}</h3>
      </div>

      <ul className="space-y-2.5">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-sm text-text-primary">{item.name}</span>
            {item.proficiency && (
              <span
                className={`text-xs font-mono ${proficiencyColors[item.proficiency] ?? 'text-text-muted'}`}
              >
                {proficiencyLabels[item.proficiency]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
