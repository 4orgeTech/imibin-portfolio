import { siteConfig } from '@/data/siteConfig';
import { ArrowDown, Github, FileDown } from 'lucide-react';

export default function HeroSection() {
  const hasGithub = siteConfig.github && !siteConfig.github.includes('your-username');
  const hasCv = siteConfig.cvPath !== null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F4F4F4 1px, transparent 1px), linear-gradient(to bottom, #F4F4F4 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Glow accent */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none blur-3xl"
        style={{ backgroundColor: '#006BDF' }}
        aria-hidden="true"
      />

      <div className="container-content relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-primary-300 mb-4 animate-fade-in tracking-wide">
            {siteConfig.role}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-[1.1] mb-6 animate-slide-up">
            {siteConfig.headline}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl animate-slide-up">
            {siteConfig.supportingText}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-accent font-medium rounded-lg hover:bg-primary-600 focus-ring transition-all duration-200"
            >
              Explore My Projects
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>

            {hasGithub ? (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-hover text-accent font-medium rounded-lg hover:bg-white/5 focus-ring transition-all duration-200"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                View My GitHub
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-muted font-medium rounded-lg cursor-not-allowed"
                title="Configure your GitHub URL in siteConfig.ts"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                View My GitHub
              </span>
            )}

            {hasCv && (
              <a
                href={siteConfig.cvPath ?? undefined}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-hover text-accent font-medium rounded-lg hover:bg-white/5 focus-ring transition-all duration-200"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
