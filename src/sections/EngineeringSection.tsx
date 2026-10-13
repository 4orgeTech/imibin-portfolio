import { engineeringPrinciples } from '@/data/engineering';
import SectionHeading from '@/components/layout/SectionHeading';
import {
  Layers,
  Repeat,
  ShieldCheck,
  CheckCircle,
  Server,
  FileText,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  repeat: Repeat,
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle,
  server: Server,
  'file-text': FileText,
};

export default function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="py-20 sm:py-24 bg-canvas-50/30 border-y border-border"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Approach"
          title="Engineering Approach"
          description="The principles I'm learning to apply. These are development goals — not claims that every practice has been implemented in a project yet."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => {
            const Icon = iconMap[principle.icon] ?? Layers;
            return (
              <div
                key={principle.title}
                className="group bg-canvas-elevated border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-300 animate-slide-up"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary-300 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
