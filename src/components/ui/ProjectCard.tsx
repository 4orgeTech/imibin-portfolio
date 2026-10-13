import type { Project } from '@/types';
import StatusBadge from './StatusBadge';
import { ArrowUpRight, FileText, ExternalLink, Github } from 'lucide-react';

const linkIconMap = {
  source: Github,
  demo: ExternalLink,
  docs: FileText,
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col bg-canvas-elevated border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-border-hover transition-all duration-300 animate-slide-up">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-semibold text-accent leading-snug group-hover:text-primary-200 transition-colors duration-200">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      {/* Problem Statement */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {project.problemStatement}
      </p>

      {/* Main Contribution */}
      <div className="mb-5">
        <p className="font-mono text-xs text-primary-300 mb-1.5 uppercase tracking-wide">
          Main Contribution
        </p>
        <p className="text-sm text-text-primary leading-relaxed">
          {project.mainContribution}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-5">
        <p className="font-mono text-xs text-primary-300 mb-2 uppercase tracking-wide">
          Planned Capabilities
        </p>
        <ul className="space-y-1.5">
          {project.keyFeatures.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <span
                className="mt-1.5 w-1 h-1 rounded-full bg-primary-400 flex-shrink-0"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-text-secondary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3 pt-2 border-t border-border">
          {project.links.map((link) => {
            const Icon = linkIconMap[link.type] ?? ArrowUpRight;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary-300 hover:text-primary-200 focus-ring transition-colors duration-200"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      {project.links.length === 0 && (
        <p className="mt-auto pt-4 border-t border-border text-xs text-text-muted italic">
          Links will be added as the project progresses.
        </p>
      )}
    </article>
  );
}
