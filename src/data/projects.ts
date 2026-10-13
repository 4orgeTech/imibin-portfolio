import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'paddy-fertilizer-recommendation',
    title: 'Paddy Fertilizer Recommendation and Cost Optimization System',
    problemStatement:
      'Explore machine learning-based paddy yield prediction and constrained fertilizer cost optimization to help farmers make data-driven decisions about fertilizer usage.',
    status: 'in-progress',
    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'FastAPI',
      'PostgreSQL',
      'Optimization',
    ],
    mainContribution:
      'Designing a predictive model for paddy yield and an optimization layer that recommends fertilizer combinations within cost constraints.',
    keyFeatures: [
      'Yield prediction from agricultural and environmental inputs',
      'Fertilizer recommendation based on predicted yield and soil data',
      'Estimated cost comparison across recommendation strategies',
      'Interactive decision-support interface for end users',
    ],
    links: [],
  },
  {
    slug: 'ml-classification-service',
    title: 'End-to-End Machine Learning Classification Service',
    problemStatement:
      'Demonstrate a complete classification workflow, including preprocessing, evaluation, API inference, and deployment — covering the full lifecycle from data to deployed service.',
    status: 'planned',
    technologies: ['Python', 'scikit-learn', 'FastAPI', 'Docker'],
    mainContribution:
      'Building a production-style classification service with proper preprocessing, model evaluation, and API-based inference.',
    keyFeatures: [
      'Data preprocessing and feature engineering pipeline',
      'Model training with structured evaluation metrics',
      'REST API for real-time inference',
      'Containerized deployment configuration',
    ],
    links: [],
  },
  {
    slug: 'data-quality-ml-toolkit',
    title: 'Data Quality and ML Pipeline Toolkit',
    problemStatement:
      'Demonstrate reusable data validation, preprocessing, and model evaluation components that can be dropped into different ML projects to reduce boilerplate and improve consistency.',
    status: 'planned',
    technologies: ['Python', 'pandas', 'scikit-learn', 'Pytest'],
    mainContribution:
      'Creating a modular toolkit of reusable components for data validation, preprocessing, and evaluation that work across projects.',
    keyFeatures: [
      'Configurable data validation rules with clear error reporting',
      'Reusable preprocessing transforms with consistent interfaces',
      'Model evaluation utilities with standardized metric reporting',
      'Tested components with documented usage examples',
    ],
    links: [],
  },
];
