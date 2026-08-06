/**
 * Date formatting for content dates.
 *
 * Frontmatter dates are date-only strings ("2026-04-09"), which Zod coerces to
 * midnight UTC. Formatting those in the build machine's local timezone shifts
 * them backwards anywhere west of Greenwich — April 9 renders as April 8 in
 * Toronto. Always format in UTC so the date shown is the date written.
 */
export function formatDate(date: Date, withDay = false): string {
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    ...(withDay ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}
