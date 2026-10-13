import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/layout/SectionHeading';
import { Info } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-canvas-50/30 border-y border-border"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Project Roadmap"
          description="A roadmap of the problems I'm working on. Some projects are in progress; most are planned. I'll update statuses and add real links as work is completed."
        />

        <div className="mb-8 flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <Info
            className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-text-secondary leading-relaxed">
            These are roadmap entries, not claims of completed work. Projects
            marked <span className="text-warning font-medium">In Progress</span>{' '}
            are actively being developed. Projects marked{' '}
            <span className="text-text-secondary font-medium">Planned</span>{' '}
            represent work I intend to tackle next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
