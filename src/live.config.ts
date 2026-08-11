import { defineLiveCollection } from 'astro:content';
import { emdashLoader } from 'emdash/runtime';

/*
  Registers EmDash as a live (runtime-resolved) content source.

  This sits alongside src/content.config.ts, it does not replace it. The
  file-based `news` and `pages` collections defined there keep working exactly
  as before and are still resolved at build time. The `_emdash` collection
  below is the runtime channel that getEmDashCollection() and getEmDashEntry()
  route through, and it is the only way the project microsites can read their
  content out of D1.

  Without this file those helpers have no live collection to resolve against
  and fail at runtime rather than at build.
*/
export const collections = {
  _emdash: defineLiveCollection({ loader: emdashLoader() }),
};
