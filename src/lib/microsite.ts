import { getEmDashCollection, getEmDashEntry } from 'emdash';

/*
  Data access for the project microsites.

  Everything here reads from D1 at request time. That is not a stylistic
  choice: a D1 binding only exists inside a running Worker, so this content
  cannot be resolved during `astro build` the way the file-based collections
  can. The /sites routes are therefore SSR, sitting behind the Workers edge
  cache configured in astro.config.mjs.
*/

export interface ProjectEvent {
  date: string;
  date_label?: string;
  title: string;
  venue?: string;
  address?: string;
  details?: string;
  url?: string;
}

export interface ProjectUpdate {
  date: string;
  title: string;
  body: string;
  link_label?: string;
  link_url?: string;
}

/** Fetch a single published project by its slug. */
export async function getProject(slug: string) {
  const { entry, error } = await getEmDashEntry('projects', slug);
  if (error) throw error;
  return entry ?? null;
}

/** Every published project — used for the Worker's hostname map and listings. */
export async function getProjects() {
  const { entries, error } = await getEmDashCollection('projects', { status: 'published' });
  if (error) throw error;
  return entries ?? [];
}

/**
 * Documents belonging to one project, newest first.
 *
 * Filtered in memory rather than through `where`, which targets taxonomy terms
 * rather than reference fields. A project has tens of documents, not
 * thousands, so the cost is irrelevant and the semantics are obvious. Revisit
 * only if a document library gets genuinely large.
 */
export async function getProjectDocuments(projectId: string) {
  const { entries, error } = await getEmDashCollection('project_documents', {
    status: 'published',
  });
  if (error) throw error;

  return (entries ?? [])
    .filter((d: any) => d.data.project === projectId)
    .sort(
      (a: any, b: any) =>
        new Date(b.data.document_date).valueOf() - new Date(a.data.document_date).valueOf(),
    );
}

/**
 * Split events into upcoming and past, newest-first within each.
 *
 * The admin keeps one list; editors should never have to move an event between
 * two fields when a date passes. Anything from today onward counts as
 * upcoming — comparison is against the start of the current day so an event
 * doesn't disappear from "upcoming" partway through the day it's held.
 */
export function splitEvents(events: ProjectEvent[] = []) {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const sorted = [...events].sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  return {
    upcoming: sorted
      .filter((e) => new Date(e.date).valueOf() >= startOfToday.valueOf())
      .reverse(),
    past: sorted.filter((e) => new Date(e.date).valueOf() < startOfToday.valueOf()),
  };
}

/** Key/value rows for the project fact table, skipping anything unset. */
export function projectFacts(data: Record<string, any>) {
  return [
    ['Project name', data.title],
    ['Proponent', data.legal_name],
    ['Technology', data.technology],
    ['Nameplate capacity (AC)', data.capacity_ac],
    ['Capacity (DC)', data.capacity_dc],
    ['Community partner', data.partner],
    ['Target commercial operation', data.cod_target],
  ].filter(([, value]) => Boolean(value)) as [string, string][];
}
