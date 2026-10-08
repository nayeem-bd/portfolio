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
  // Side project, not built at Pathao.
  personal?: boolean
  heroImage?: ProjectImage
  problem?: string
  approach?: string
  outcome?: string
  links?: ProjectLink[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'notification-scheduler',
    title: 'Notification Scheduling',
    stack: 'Go · RabbitMQ · Cron · Vue',
    description:
      "Added scheduled delivery to Pathao's Go notification service: an ops UI to target roles, hubs and agents with attachments; a cron job that picks up due notices and publishes them over RabbitMQ; status tracking (active → processing → sent) so nothing is sent twice.",
    tags: ['Backend', 'Messaging']
  },
  {
    slug: 'no-entry-parcels',
    title: 'No Entry Parcel Flow',
    stack: 'Laravel · Vue',
    description:
      'Parcels that arrive at a hub without an order get a temporary ID, are sorted and processed in bulk, and are linked to the real order once the merchant creates it; merchants see and act on them in the merchant panel.',
    tags: ['Workflow', 'Operations']
  },
  {
    slug: 'sku-pricing-engine',
    title: 'Slab-based SKU Pricing',
    stack: 'Laravel · Vue · PostgreSQL',
    description:
      'Introduced SKU as an item type with SKU-level discounts, plus weight/price-plan slabs and merchant slab-wise discounts in the ops panel. Wrote transactional migration commands to move existing price plans onto the new slab tables.',
    tags: ['Pricing', 'Backend']
  },
  {
    slug: 'merchant-panel-v6',
    title: 'Merchant Panel v6',
    stack: 'Vue 3 · Vite · Tailwind',
    description:
      'Migrated the merchant panel from Vue 2 to Vue 3 (Vuex 4, Vite 5, Jest → Vitest) and Tailwind 1.2 → 3.4, and shipped the v6 redesign: a new dashboard, sidebar and header driven by live APIs.',
    tags: ['Frontend', 'Migration']
  },
  {
    slug: 'todo-app',
    title: 'Todo-App',
    stack: 'Go · Redis · RabbitMQ · K3s',
    description:
      'Clean-architecture Go REST API with Redis cache, a RabbitMQ worker and unit tests. Infrastructure with Terraform, Ansible to K3s, GitHub Actions, and Prometheus + Grafana.',
    tags: ['Backend', 'DevOps'],
    personal: true
  },
  {
    slug: 'spendwise',
    title: 'spendwise',
    stack: 'React Native · Expo · Supabase',
    description:
      'Offline-first finance app built with Expo/React Native and Supabase: an outbox-based sync engine with push/pull RPC and last-write-wins, plus shared wallets.',
    tags: ['Mobile', 'Sync'],
    personal: true
  },
  {
    slug: 'bangla-zebra-printers',
    title: 'Bangla Support for Zebra Printers',
    stack: 'JavaScript · ZPL · npm',
    description:
      'Text is converted to Bijoy encoding with unicode2ascii and printed with a Bangla font loaded onto the printer; a canvas measures text width for line wrapping. The printer integration was built at Pathao; unicode2ascii is my personal open-source package.',
    tags: ['Localization', 'Hardware']
  },
  {
    slug: 'unicode2ascii',
    title: 'unicode2ascii',
    stack: 'JavaScript · npm',
    description:
      "npm package for Bengali Unicode ↔ Bijoy conversion. Used in production in Pathao's label-printer module.",
    tags: ['Open source', 'Localization'],
    personal: true,
    links: [{ label: 'npm', url: 'https://www.npmjs.com/package/unicode2ascii' }]
  }
]

// Detail pages are only linked and generated once a project has a written case study.
export function hasCaseStudy(project: Project): boolean {
  return Boolean(project.problem || project.approach || project.outcome)
}

export const CASE_STUDIES: Project[] = PROJECTS.filter(hasCaseStudy)

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
