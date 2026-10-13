import { siteConfig } from '@/data/siteConfig';
import SectionHeading from '@/components/layout/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="A brief introduction to my background, interests, and goals."
        />

        <div className="max-w-3xl space-y-5">
          {siteConfig.about.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          <div className="bg-canvas-elevated border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-primary-300 mb-1 uppercase tracking-wide">
              Focus
            </p>
            <p className="text-sm text-text-primary">
              Applied ML & Software Engineering
            </p>
          </div>
          <div className="bg-canvas-elevated border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-primary-300 mb-1 uppercase tracking-wide">
              Interest
            </p>
            <p className="text-sm text-text-primary">
              Predictive Modelling
            </p>
          </div>
          <div className="bg-canvas-elevated border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-primary-300 mb-1 uppercase tracking-wide">
              Goal
            </p>
            <p className="text-sm text-text-primary">
              Reliable End-to-End Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
