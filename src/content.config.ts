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
    category: z.enum(['Press release', 'Project update', 'Company', 'Explainer']).default('Company'),
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
    /**
     * Rendered as pull quotes. `body` is the full quotation and is the only
     * required text: omit `lead` unless the source actually contains a short
     * standalone line worth pulling out. Never paraphrase into `lead` — it is
     * rendered inside quotation marks and attributed to `name`.
     */
    quotes: z
      .array(
        z.object({
          lead: z.string().optional(),
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

/**
 * Marketing pages.
 *
 * Each page is a markdown file whose frontmatter lists an ordered array of
 * blocks. Every block needs a `type` that exists in the registry in
 * src/components/Blocks.astro; the remaining keys are passed to that block's
 * component as props. Reordering a page means reordering the array.
 *
 * The schema stays permissive on purpose — each block validates its own shape
 * through its component's Props interface, so this only enforces what every
 * block has in common.
 */
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** 'sunrise' runs the scroll-driven retint; 'day' locks the page to daylight. */
    palette: z.enum(['sunrise', 'day']).default('sunrise'),
    /** Selector for the first daylight section. */
    pivot: z.string().default('#daylight'),
    /** Fires when the pivot is this fraction of a viewport from the top. */
    triggerAt: z.number().default(0.55),
    blocks: z
      .array(z.object({ type: z.string() }).passthrough())
      .default([]),
  }),
});

export const collections = { news, pages };
