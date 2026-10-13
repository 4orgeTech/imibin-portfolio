import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: 'code',
    items: [
      { name: 'Python', proficiency: 'familiar' },
      { name: 'SQL', proficiency: 'familiar' },
      { name: 'Java', proficiency: 'learning' },
    ],
  },
  {
    name: 'Data Science & ML',
    icon: 'brain',
    items: [
      { name: 'NumPy', proficiency: 'learning' },
      { name: 'pandas', proficiency: 'familiar' },
      { name: 'scikit-learn', proficiency: 'learning' },
    ],
  },
  {
    name: 'Software Engineering',
    icon: 'git-branch',
    items: [
      { name: 'Git', proficiency: 'familiar' },
      { name: 'GitHub', proficiency: 'familiar' },
      { name: 'REST APIs', proficiency: 'learning' },
      { name: 'Testing', proficiency: 'learning' },
      { name: 'Software Architecture', proficiency: 'learning' },
    ],
  },
  {
    name: 'Backend & Databases',
    icon: 'database',
    items: [
      { name: 'FastAPI', proficiency: 'learning' },
      { name: 'PostgreSQL', proficiency: 'learning' },
    ],
  },
  {
    name: 'Tools & Deployment',
    icon: 'wrench',
    items: [
      { name: 'Docker', proficiency: 'learning' },
      { name: 'GitHub Actions', proficiency: 'learning' },
      { name: 'Cloud Platforms', proficiency: 'learning' },
    ],
  },
];
