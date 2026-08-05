import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** One-line summary. Shown in the hero, listing cards and meta description. */
    dek: z.string(),
    /** Sort key and displayed date. */
    date: z.coerce.date(),
    /** Shown when the published date is still unconfirmed, e.g. an unissued release. */
    dateLabel: z.string().optional(),
    kicker: z.string().default('News'),
    category: z.enum(['Press release', 'Project update', 'Company']).default('Company'),
    image: z.string(),
    imageAlt: z.string().default(''),
    /** Pins this entry to the top of the listing and the homepage. */
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
    /** Key/value pairs rendered in the article meta rail. */
    meta: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /** Rendered as a capacity card row. */
    awards: z
      .array(
        z.object({
          capacity: z.string(),
          unit: z.string().default('MW'),
          name: z.string(),
          place: z.string(),
          partner: z.string().optional(),
        }),
      )
      .default([]),
    /** Rendered as pull quotes. `lead` is the display line, `body` the full quote. */
    quotes: z
      .array(
        z.object({
          lead: z.string(),
          body: z.string(),
          name: z.string(),
          role: z.string(),
        }),
      )
      .default([]),
    contacts: z
      .array(
        z.object({
          name: z.string(),
          org: z.string(),
          address: z.string().optional(),
          email: z.string().optional(),
          note: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { news };
