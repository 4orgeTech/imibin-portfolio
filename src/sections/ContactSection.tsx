import { siteConfig } from '@/data/siteConfig';
import SectionHeading from '@/components/layout/SectionHeading';
import { Mail, Github, Linkedin, FileDown, ArrowUpRight } from 'lucide-react';

interface ContactItem {
  label: string;
  value: string;
  url: string;
  icon: typeof Mail;
  external: boolean;
}

export default function ContactSection() {
  const hasGithub = siteConfig.github && !siteConfig.github.includes('your-username');
  const hasLinkedin =
    siteConfig.linkedin && !siteConfig.linkedin.includes('your-username');
  const hasEmail = siteConfig.email && !siteConfig.email.includes('example.com');
  const hasCv = siteConfig.cvPath !== null;

  const contactItems: ContactItem[] = [];

  if (hasEmail) {
    contactItems.push({
      label: 'Email',
      value: siteConfig.email,
      url: `mailto:${siteConfig.email}`,
      icon: Mail,
      external: false,
    });
  }

  if (hasGithub) {
    contactItems.push({
      label: 'GitHub',
      value: siteConfig.github.replace('https://', ''),
      url: siteConfig.github,
      icon: Github,
      external: true,
    });
  }

  if (hasLinkedin) {
    contactItems.push({
      label: 'LinkedIn',
      value: siteConfig.linkedin.replace('https://', ''),
      url: siteConfig.linkedin,
      icon: Linkedin,
      external: true,
    });
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-canvas-50/30 border-t border-border"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="Whether you have a question, a collaboration idea, or just want to connect — I'd be happy to hear from you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {contactItems.length > 0 ? (
            contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.url}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-4 p-5 bg-canvas-elevated border border-border rounded-xl hover:border-border-hover transition-all duration-300 focus-ring"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary-300 flex-shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-accent mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-text-secondary truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-text-muted group-hover:text-primary-300 transition-colors duration-200 flex-shrink-0"
                    aria-hidden="true"
                  />
                </a>
              );
            })
          ) : (
            <div className="col-span-full p-8 rounded-xl border border-dashed border-border bg-canvas-elevated/50 text-center">
              <p className="text-sm text-text-secondary">
                Contact links will appear here once configured. Update your
                email, GitHub, and LinkedIn in{' '}
                <code className="font-mono text-primary-300">
                  src/data/siteConfig.ts
                </code>
                .
              </p>
            </div>
          )}

          {hasCv && (
            <a
              href={siteConfig.cvPath ?? undefined}
              download
              className="group flex items-center gap-4 p-5 bg-canvas-elevated border border-border rounded-xl hover:border-border-hover transition-all duration-300 focus-ring"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary-300 flex-shrink-0">
                <FileDown className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-accent mb-0.5">
                  Curriculum Vitae
                </p>
                <p className="text-sm text-text-secondary">Download PDF</p>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-text-muted group-hover:text-primary-300 transition-colors duration-200 flex-shrink-0"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
