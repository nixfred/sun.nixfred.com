// Content collections, mapped 1:1 from the build pack's suggested
// content architecture (11_CLAUDE_CODE_EXECUTION_PLAN). Every repeatable
// page shape is a collection; layout code never gets duplicated.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    phase: z.string(),
    order: z.number(),
    icon: z.string(),
    summary: z.string(),
    milestones: z.array(z.string()),
    keyObstacle: z.string().optional(),
    cta: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Solar Science',
      'Foundation Updates',
      'Policy and Advocacy',
      'Donor Impact',
      'Corporate Leadership',
      'Future Generations',
      'Big Dark Watch',
      'From the Field',
    ]),
    date: z.coerce.date(),
    author: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    readingMinutes: z.number(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().default('ATLANTA'),
    excerpt: z.string(),
    contact: z.string().default('Office of Public Awareness'),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    type: z.enum(['Annual Report', 'Strategic Framework', 'Policy Brief', 'Methodology', 'Accountability']),
    program: z.string().optional(),
    pages: z.number(),
    cover: z.string().optional(),
    summary: z.string(),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leadership' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    portrait: z.string().optional(),
    tenure: z.string(),
    quote: z.string(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    industry: z.string(),
    level: z.enum(['Dawn Circle', 'Zenith Partner', 'Horizon Ally', 'First Light Member']),
    yearJoined: z.number(),
    logo: z.string().optional(),
    statement: z.string(),
    executiveQuote: z.string(),
    executiveName: z.string(),
  }),
});

const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    title: z.string(),
    effective: z.string(),
    lastReviewed: z.string(),
    summary: z.string(),
  }),
});

export const collections = { programs, blog, press, reports, leadership, partners, policies };
