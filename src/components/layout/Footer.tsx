import { siteConfig } from '@/data/siteConfig';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container-content py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold text-accent mb-2">
              {siteConfig.name}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {siteConfig.role} — focused on applied machine learning and
              software engineering.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {siteConfig.socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel={
                    link.icon !== 'mail'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-text-secondary hover:text-accent hover:bg-white/10 focus-ring transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            {siteConfig.cvPath && (
              <a
                href={siteConfig.cvPath}
                download
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-text-secondary hover:text-accent hover:bg-white/10 focus-ring transition-colors duration-200"
                aria-label="Download CV"
              >
                <FileDown className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {year} {siteConfig.name}. Built with React, TypeScript, and
            Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
