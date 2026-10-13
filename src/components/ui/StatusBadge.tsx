import type { ProjectStatus } from '@/types';
import { Circle, CircleDot, CheckCircle2 } from 'lucide-react';

interface StatusBadgeProps {
  status: ProjectStatus;
}

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    classes: string;
    icon: typeof Circle;
  }
> = {
  planned: {
    label: 'Planned',
    classes: 'bg-white/5 text-text-secondary border-border-hover',
    icon: Circle,
  },
  'in-progress': {
    label: 'In Progress',
    classes: 'bg-warning/10 text-warning border-warning/30',
    icon: CircleDot,
  },
  completed: {
    label: 'Completed',
    classes: 'bg-success/10 text-success border-success/30',
    icon: CheckCircle2,
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.classes}`}
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      {config.label}
    </span>
  );
}
