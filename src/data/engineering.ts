import type { EngineeringPrinciple } from '@/types';

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    title: 'Modular Architecture',
    description:
      'Designing systems with clear separation of responsibilities — data, logic, and presentation layers kept independent so each can evolve without disrupting the others.',
    icon: 'layers',
  },
  {
    title: 'Reproducible Experiments',
    description:
      'Tracking data versions, model parameters, and training configurations so that any experiment can be recreated and results can be verified independently.',
    icon: 'repeat',
  },
  {
    title: 'Data Validation & Model Evaluation',
    description:
      'Validating inputs at every stage and evaluating models with honest, well-chosen metrics rather than chasing numbers without understanding.',
    icon: 'shield-check',
  },
  {
    title: 'Automated Testing & CI',
    description:
      'Writing tests for critical paths and using continuous integration to catch regressions early, before they reach production or a notebook export.',
    icon: 'check-circle',
  },
  {
    title: 'API Design & Database Modelling',
    description:
      'Designing clean, predictable APIs and modeling data thoughtfully so that systems remain queryable, extensible, and easy to reason about.',
    icon: 'server',
  },
  {
    title: 'Documentation & Version Control',
    description:
      'Maintaining clear documentation and meaningful commit history so that future collaborators — including my future self — can understand decisions and context.',
    icon: 'file-text',
  },
];
