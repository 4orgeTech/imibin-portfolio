import { skillCategories } from '@/data/skills';
import SkillGroup from '@/components/ui/SkillGroup';
import SectionHeading from '@/components/layout/SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="The tools and technologies I'm actively learning. Proficiency labels reflect my current stage — I'll update these as I gain real experience."
        />

        <div className="mb-8 flex flex-wrap gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-muted" />
            <span className="text-text-muted">Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text-secondary" />
            <span className="text-text-secondary">Familiar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-300" />
            <span className="text-primary-300">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-200" />
            <span className="text-primary-200">Advanced</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillGroup key={category.name} category={category} />
          ))}
        </div>

        <p className="mt-8 text-sm text-text-muted max-w-2xl">
          These categories and proficiency levels are starting points. I avoid
          arbitrary progress bars or percentages — the labels reflect honest
          self-assessment and will be updated as I build real evidence through
          projects.
        </p>
      </div>
    </section>
  );
}
