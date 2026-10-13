# Ibn Amin — ML Engineer Portfolio

A professional personal portfolio website showcasing progression toward becoming an Applied Machine Learning Engineer. Built with a modular, data-driven architecture so new projects, skills, and articles can be added without touching layout code.

## Technology Stack

- **Frontend framework:** React 18
- **Language:** TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS with centralized CSS custom properties (design tokens)
- **Icons:** Lucide React
- **Fonts:** Inter (sans) and JetBrains Mono (mono) via Google Fonts

No backend, database, authentication, or paid external services are used in this phase. The site is fully static.

## Repository Structure

```text
project/
├── public/
│   ├── favicon.svg              # Site favicon (initials "IA")
│   ├── images/                  # Place image assets here
│   └── documents/               # Place CV.pdf here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive navigation with mobile menu
│   │   │   ├── Footer.tsx       # Footer with social links
│   │   │   └── SectionHeading.tsx  # Reusable section title component
│   │   └── ui/
│   │       ├── Button.tsx       # Reusable button (primary/secondary/ghost)
│   │       ├── ProjectCard.tsx  # Renders a project from typed data
│   │       ├── SkillGroup.tsx   # Renders a skill category from typed data
│   │       └── StatusBadge.tsx  # Planned / In Progress / Completed badge
│   ├── data/
│   │   ├── siteConfig.ts        # Name, bio, social links, nav items
│   │   ├── projects.ts          # Project roadmap entries
│   │   ├── skills.ts            # Skill categories and items
│   │   ├── journal.ts           # Journal entries (empty by default)
│   │   └── engineering.ts       # Engineering principle cards
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing area with headline and CTAs
│   │   ├── AboutSection.tsx     # Professional introduction
│   │   ├── ProjectsSection.tsx  # Project card grid
│   │   ├── SkillsSection.tsx    # Skill category grid
│   │   ├── EngineeringSection.tsx  # Engineering principle cards
│   │   ├── JournalSection.tsx   # Learning journal with empty state
│   │   └── ContactSection.tsx   # Contact links
│   ├── types/
│   │   └── index.ts             # All TypeScript interfaces
│   ├── App.tsx                  # App shell: Navbar + sections + Footer
│   ├── main.tsx                 # React entry point
│   └── index.css                # Design tokens, base styles, utilities
├── index.html                   # HTML shell with meta tags
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Production Build

```bash
npm run build
```

The built site will be in the `dist/` directory. You can preview it with:

```bash
npm run preview
```

## Type Checking

```bash
npm run typecheck
```

## How to Update Personal Information

All personal details live in **`src/data/siteConfig.ts`**. Edit this file to change:

- **Name:** Update the `name` field.
- **Role/tagline:** Update the `role` field.
- **Headline and supporting text:** Update `headline` and `supportingText`.
- **About paragraphs:** Edit the `about` array (each string is a paragraph).
- **Email:** Update the `email` field.
- **GitHub:** Update the `github` field with your profile URL.
- **LinkedIn:** Update the `linkedin` field with your profile URL.
- **CV:** Place your PDF in `public/documents/cv.pdf` and keep `cvPath` as `'/documents/cv.pdf'`. If you don't have a CV yet, set `cvPath` to `null` and the download button will be hidden.
- **Social links in footer:** These are derived from the `socialLinks` array — update the URLs there.

**Important:** The contact and hero sections automatically detect placeholder values (e.g., `your-username`, `example.com`) and hide those links. Replace placeholders with your real URLs to make links appear.

## How to Add a Project

Projects are rendered from **`src/data/projects.ts`**. Adding a new project requires only adding a new entry to the `projects` array — no component changes needed.

### Step-by-step: Adding Project 4

1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array following this structure:

```typescript
{
  slug: 'my-new-project',                    // Unique URL-safe identifier
  title: 'My New Project Title',
  problemStatement: 'What problem does this project solve?',
  status: 'planned',                         // 'planned' | 'in-progress' | 'completed'
  technologies: ['Python', 'scikit-learn'],  // Tech tags shown on the card
  mainContribution: 'What you are building or contributing',
  keyFeatures: [
    'Feature one',
    'Feature two',
    'Feature three',
  ],
  links: [
    // Add links only when they exist. Leave empty array [] until then.
    // { label: 'Source Code', url: 'https://github.com/...', type: 'source' },
    // { label: 'Live Demo', url: 'https://...', type: 'demo' },
    // { label: 'Documentation', url: 'https://...', type: 'docs' },
  ],
},
```

3. Save the file. The project card will appear automatically in the Projects section.
4. When the project progresses, update the `status` field. When repositories or demos become available, add entries to the `links` array — they will appear as clickable links on the card.

### Project statuses

- **`planned`** — Shown with a neutral "Planned" badge. No links expected.
- **`in-progress`** — Shown with an amber "In Progress" badge.
- **`completed`** — Shown with a green "Completed" badge. Links should be populated.

## How to Add a Skill

Skills are organized into categories in **`src/data/skills.ts`**.

To add a new skill item, find the appropriate category in the `skillCategories` array and add an object to its `items` list:

```typescript
{ name: 'New Skill', proficiency: 'learning' }
```

Proficiency levels: `'learning'` | `'familiar'` | `'proficient'` | `'advanced'`

To add an entirely new category, add a new object to the `skillCategories` array with a `name`, `icon` (one of: `code`, `brain`, `git-branch`, `database`, `wrench`), and `items` list. You may need to add the icon to the icon map in `src/components/ui/SkillGroup.tsx`.

## How to Add a Journal Entry

Journal entries are stored in **`src/data/journal.ts`**.

Add a new object to the `journalEntries` array:

```typescript
{
  id: 'my-first-article',
  title: 'My First Article Title',
  date: '2026-01-15',
  summary: 'A brief summary of what this article covers.',
  tags: ['machine-learning', 'python'],
  link: 'https://...',  // Optional: URL to the full article
}
```

When `journalEntries` is empty, the section displays a clear empty state. As soon as you add entries, they render as cards.

## How to Configure GitHub, LinkedIn, Email, and CV

All of these are in **`src/data/siteConfig.ts`**:

| Field      | Property in siteConfig | Notes                                      |
| ---------- | ---------------------- | ------------------------------------------ |
| Email      | `email`                | Used in contact section and footer         |
| GitHub     | `github`               | Full URL to your GitHub profile            |
| LinkedIn   | `linkedin`             | Full URL to your LinkedIn profile          |
| CV         | `cvPath`               | Path to PDF in `public/` or `null` to hide |

Placeholder values (`your-username`, `example.com`) are automatically detected — links using them will not be shown. Replace them with your real details to activate the links.

## Design System

Colors, typography, spacing, and shadows are defined as CSS custom properties at the top of `src/index.css` and mapped to Tailwind theme extensions in `tailwind.config.js`. The palette:

| Token           | Value     | Usage                                    |
| --------------- | --------- | ---------------------------------------- |
| `canvas`        | `#040F49` | Page background (midnight indigo)        |
| `canvas-elevated` | `#0A1546` | Cards and elevated surfaces            |
| `primary`       | `#006BDF` | Accent color, buttons, links             |
| `secondary`     | `#241446` | Analytical depth                         |
| `accent`        | `#F4F4F4` | Primary text color (light gray / white)  |

## Accessibility

- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Logical heading hierarchy (h1 in hero, h2 for sections, h3 for cards)
- Keyboard navigation with visible focus rings
- ARIA labels for interactive controls
- Reduced-motion preferences respected via media query
- Sufficient color contrast on all text

## Current Limitations

- All content is static — no backend or CMS integration yet.
- Project detail pages are not implemented; the architecture is prepared for them (each project has a `slug` that can serve as a route parameter).
- The learning journal has no articles published yet.
- No contact form — contact is via external links only.
- Social meta images use a default placeholder until a custom OG image is created.

## Future Extension Points

- **Project detail pages:** Each project has a `slug` field. When you add a router (e.g., React Router), you can create a `ProjectDetail` page that uses the slug to look up the full project data.
- **Deployed ML applications:** Add a `demo` link to a project's `links` array once an app is deployed — the card will display it automatically.
- **Technical articles:** The journal data structure supports tags, dates, and external links. This can grow into dedicated article pages with full content.
- **Proficiency evidence:** The `SkillItem` type has an optional `evidenceUrl` field — add links to projects or certifications that demonstrate a skill.
