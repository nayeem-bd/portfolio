export type ProjectLink = {
  label: string
  url: string
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  stack: string
  description: string
  tags: string[]
  heroImage?: ProjectImage
  problem?: string
  approach?: string
  outcome?: string
  links?: ProjectLink[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'sku-pricing-engine',
    title: 'Slab-based SKU Pricing Engine',
    stack: 'Go · PostgreSQL',
    description:
      'Designed pricing for SKU items as a first-class concept on the merchant platform. Replaced flat per-item rates with slab-based rules that handle merchant-defined discounts, quantity tiers, and promotion windows. Powers all SKU-tier promotions in the merchant panel.',
    tags: ['Pricing', 'Backend']
  },
  {
    slug: 'notification-scheduler',
    title: 'Scheduling-aware Notification Service',
    stack: 'Go · Queue · Cron',
    description:
      'Extended the merchant notification service with future-time delivery. Merchants can now queue updates to fire at a chosen time instead of immediately, with retries and dedupe handled at the queue layer. Designed for graceful degradation when the scheduler lags.',
    tags: ['Distributed systems', 'Reliability']
  },
  {
    slug: 'bangla-zebra-printers',
    title: 'Bangla Support for Zebra Printers',
    stack: 'JavaScript · Open source',
    description:
      "Wrote a JS package that renders Bangla script onto Zebra ZPL label printers — closing a longstanding gap in localized printing for Bangladeshi merchants. Worked around ZPL's lack of native Bengali glyph support by rasterizing on the client side.",
    tags: ['Localization', 'Hardware']
  },
  {
    slug: 'no-entry-parcels',
    title: '"No Entry" Parcel-Handling Flow',
    stack: 'Go · Operations',
    description:
      'Designed the in-system flow for parcels stuck in "no entry" zones — clarifying ownership, courier next steps, and merchant notifications. Smoothed out a class of failed-delivery edge cases that previously required manual operator intervention.',
    tags: ['Workflow', 'Operations']
  }
]

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
