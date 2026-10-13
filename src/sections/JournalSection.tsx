import { journalEntries, journalEmptyState } from '@/data/journal';
import SectionHeading from '@/components/layout/SectionHeading';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export default function JournalSection() {
  const hasEntries = journalEntries.length > 0;

  return (
    <section id="journal" className="py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Journal"
          title="Learning Journal"
          description="Technical articles, project notes, and lessons learned — published as I progress through projects and coursework."
        />

        {hasEntries ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalEntries.map((entry) => (
              <article
                key={entry.id}
                className="group bg-canvas-elevated border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <time className="font-mono text-xs text-text-muted">
                    {entry.date}
                  </time>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-xs font-mono text-text-secondary border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2 group-hover:text-primary-200 transition-colors duration-200">
                  {entry.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {entry.summary}
                </p>
                {entry.link && (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-300 hover:text-primary-200 focus-ring transition-colors duration-200"
                  >
                    Read more
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-xl border border-dashed border-border bg-canvas-elevated/50">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-text-muted mb-5">
              <BookOpen className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-accent mb-2">
              {journalEmptyState.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              {journalEmptyState.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
