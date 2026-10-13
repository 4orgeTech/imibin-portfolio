import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-content flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="font-mono text-sm font-semibold text-accent tracking-tight focus-ring"
          onClick={closeMenu}
        >
          {siteConfig.name}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-accent rounded-md focus-ring transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-accent rounded-lg hover:bg-primary-600 focus-ring transition-colors duration-200"
        >
          Get in touch
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-accent focus-ring rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-canvas-elevated border-b border-border animate-slide-down"
        >
          <ul className="container-content py-4 space-y-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2.5 text-sm text-text-secondary hover:text-accent hover:bg-white/5 rounded-md focus-ring transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block px-3 py-2.5 text-sm font-medium text-center bg-primary text-accent rounded-lg focus-ring transition-colors duration-200"
                onClick={closeMenu}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
