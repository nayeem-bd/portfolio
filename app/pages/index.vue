<template>
  <main class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
    <header class="flex flex-col gap-6 border-b border-gray-700 pb-10">
      <div class="flex items-center gap-4 sm:gap-5">
        <img
          :src="profileSrc"
          alt=""
          width="1200"
          height="1200"
          class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-cyan-400/40 shrink-0"/>
        <div class="min-w-0">
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">Md. Nimuzzaman</h1>
          <p class="mt-1 text-gray-400 text-sm">Backend Software Engineer · Dhaka, Bangladesh</p>
        </div>
      </div>
      <p class="text-gray-300 text-lg leading-relaxed max-w-2xl">
        Backend-focused full-stack engineer at
        <a href="https://pathao.com" target="_blank" rel="noopener noreferrer"
           class="underline decoration-gray-500 hover:decoration-white">Pathao</a>.
        I build the Go and Laravel APIs and services behind parcel, payout and notification flows (PostgreSQL,
        Redis, RabbitMQ), and the Vue merchant panel that uses them.
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="mailto:nimuzzamanj@gmail.com"
           class="px-4 py-2.5 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium">Email me</a>
        <a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
           class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">GitHub</a>
        <a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
           class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">LinkedIn</a>
      </div>
    </header>

    <section class="mt-12 lg:mt-16">
      <div class="flex items-baseline justify-between mb-5 gap-4 flex-wrap">
        <h2 class="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
        <span class="text-sm text-gray-400">Built at Pathao unless marked personal</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article v-for="project in featuredProjects" :key="project.slug"
                 :class="['relative bg-gray-800/60 border border-gray-700 border-t-2 border-t-cyan-400/60 rounded-xl p-6 flex flex-col gap-3',
                          hasCaseStudy(project) && 'transition-colors hover:border-gray-500 hover:bg-gray-800/80 focus-within:border-gray-500']">
          <h3 class="text-xl font-semibold leading-snug">
            <NuxtLink v-if="hasCaseStudy(project)" :to="`/projects/${project.slug}`"
                      class="after:absolute after:inset-0 after:rounded-xl">
              {{ project.title }}
            </NuxtLink>
            <template v-else>{{ project.title }}</template>
          </h3>
          <p class="text-sm font-mono text-cyan-300">{{ project.stack }}</p>
          <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>
        </article>
      </div>

      <h3 class="mt-10 mb-4 text-lg font-semibold text-gray-200">More work</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article v-for="project in otherProjects" :key="project.slug"
                 :class="['relative bg-gray-800/40 border border-gray-700/70 rounded-xl p-5 flex flex-col gap-2 md:odd:last:col-span-2',
                          hasCaseStudy(project) && 'transition-colors hover:border-gray-500 hover:bg-gray-800/80 focus-within:border-gray-500']">
          <h4 class="font-semibold flex items-center gap-2 flex-wrap">
            <NuxtLink v-if="hasCaseStudy(project)" :to="`/projects/${project.slug}`"
                      class="after:absolute after:inset-0 after:rounded-xl">
              {{ project.title }}
            </NuxtLink>
            <template v-else>{{ project.title }}</template>
            <span v-if="project.personal"
                  class="text-xs font-normal px-2 py-0.5 rounded-full border border-cyan-400/40 text-cyan-300">personal</span>
          </h4>
          <p class="text-sm font-mono text-cyan-300/90">{{ project.stack }}</p>
          <p class="text-gray-300 text-sm leading-relaxed">{{ project.description }}</p>
          <div v-if="!hasCaseStudy(project) && project.links?.length" class="flex gap-3 flex-wrap text-sm">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
               rel="noopener noreferrer" class="text-gray-200 underline decoration-gray-500 hover:decoration-white">
              {{ link.label }} <span aria-hidden="true" class="text-xs">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="mt-12 lg:mt-16">
      <div class="flex items-baseline justify-between mb-6 gap-4 flex-wrap">
        <h2 class="text-2xl md:text-3xl font-semibold">Experience</h2>
        <span class="text-sm text-gray-400">Pathao Ltd · Jan 2024 – Present · Dhaka</span>
      </div>
      <ol class="border-l border-gray-700 ml-1.5 flex flex-col gap-10">
        <li v-for="role in ROLES" :key="role.title" class="relative pl-6 sm:pl-8">
          <span aria-hidden="true"
                class="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gray-950 border-2 border-cyan-400"></span>
          <div class="flex justify-between items-baseline gap-x-4 flex-wrap">
            <h3 class="text-lg font-semibold">{{ role.title }}</h3>
            <span class="text-gray-400 text-sm">{{ role.dates }}</span>
          </div>
          <ul class="list-disc pl-5 marker:text-gray-500 text-gray-300 mt-3 space-y-2 leading-relaxed">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>
          <details v-if="role.more?.length" class="group mt-3">
            <summary class="cursor-pointer text-sm text-cyan-300 hover:text-cyan-200 select-none">
              <span class="group-open:hidden">Show {{ role.more.length }} more</span>
              <span class="hidden group-open:inline">Show less</span>
            </summary>
            <ul class="list-disc pl-5 marker:text-gray-500 text-gray-300 mt-2 space-y-2 leading-relaxed">
              <li v-for="item in role.more" :key="item">{{ item }}</li>
            </ul>
          </details>
        </li>
      </ol>
    </section>

    <section class="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-gray-700 pt-12">
      <div class="md:col-span-2">
        <h2 class="text-2xl font-semibold mb-5">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="group in SKILL_GROUPS" :key="group.label" class="flex flex-col gap-2">
            <h3 class="text-sm text-gray-400">{{ group.label }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in group.skills" :key="skill"
                    class="px-2 py-1 border border-gray-600 rounded-full text-sm">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <div>
          <h2 class="text-2xl font-semibold mb-5">Certifications</h2>
          <ul class="flex flex-col gap-3">
            <li v-for="cert in CERTIFICATIONS" :key="cert.name">
              <div class="text-gray-200">{{ cert.name }}</div>
              <div class="text-sm text-gray-400">{{ cert.issuer }} · {{ cert.date }}</div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-5">Education</h2>
          <div class="text-gray-200">BE, Information &amp; Communication Engineering</div>
          <div class="text-sm text-gray-400">Rajshahi University · 2018–2023</div>
        </div>
      </div>
    </section>

    <section class="mt-12 lg:mt-16 bg-gray-800/60 border border-gray-700 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
      <h2 class="text-2xl md:text-3xl font-semibold mb-2">Want to work together?</h2>
      <p class="text-gray-300 mb-5 max-w-xl mx-auto">
        I'm open to interesting backend, full-stack, and platform-engineering work — both full-time and
        project-based.
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <a href="mailto:nimuzzamanj@gmail.com"
           class="px-5 py-2.5 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium break-all">nimuzzamanj@gmail.com</a>
        <a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
           class="px-5 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">GitHub</a>
        <a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
           class="px-5 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">LinkedIn</a>
      </div>
    </section>

    <footer class="mt-10 mb-4 flex flex-wrap justify-between items-center text-gray-400 text-sm gap-2">
      <div>Built with Nuxt + Tailwind.</div>
      <div>© {{ year }} Md. Nimuzzaman</div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { PROJECTS, hasCaseStudy } from '~/constants/projects'

const featuredProjects = PROJECTS.filter((p) => p.featured)
const otherProjects = PROJECTS.filter((p) => !p.featured)

type Role = {
  title: string
  dates: string
  highlights: string[]
  // Collapsed behind "Show more" to keep the list scannable.
  more?: string[]
}

const ROLES: Role[] = [
  {
    title: 'Software Engineer I',
    dates: 'Jan 2025 – Present',
    highlights: [
      'Added scheduled delivery to the Go notification service: ops targeting by role, hub and agent, a cron sender over RabbitMQ and status tracking so nothing is sent twice.',
      'Built the "No Entry" parcel flow: temporary-ID parcels, linking to the real order, bulk sorting and image upload across the ops panel, API and merchant panel.',
      'Shipped merchant payout features: on-demand withdrawals with OTP verification, advance pay, reconciliation and invoice bounce-back.',
      'Published trip-event notifications over RabbitMQ from a Go service, and added return-slip PDF generation to the order service.',
      'Built an internal parcel-inventory module (hub consignment, handover, transfer) across the ops panel, API and a Go service.'
    ],
    more: [
      'Worked on slab-based pricing and introduced SKU as an item type with pricing and discount logic, with transactional migration commands for existing data.',
      'Migrated the merchant panel from Vue 2 to Vue 3 (Vuex 4, Vite 5, Jest → Vitest) and shipped its v6 dashboard redesign.',
      'Extended thermal label printing: SPRT printers, Bangla QR codes, lot numbers and Nepal labels.',
      'Supported API merchants with integration, debugging and webhook setup.'
    ]
  },
  {
    title: 'Associate Software Engineer',
    dates: 'May 2024 – Dec 2024',
    highlights: [
      'Improved the Developer API UI/UX and added new webhook event handling.',
      "Redesigned the merchant panel's left sidebar and rebuilt the Help Center (tabs, tooltips, content).",
      'Reworked merchant password reset and revamped role-based permissions across the ops admin panel and API.',
      'Added Bangla support to Zebra label printers (ZPL) and published unicode2ascii, an open-source npm package for Bengali Unicode → Bijoy conversion, now used by the printer module.'
    ]
  },
  {
    title: 'Intern Software Engineer',
    dates: 'Jan 2024 – May 2024',
    highlights: [
      'Improved the merchant panel landing page: price calculation, FAQ, order-tracking UI and a top-merchants showcase, all responsive.',
      'Started R&D on thermal sticker printing for Zebra printers, later extended to Bangla support.'
    ]
  }
]

const SKILL_GROUPS = [
  {
    label: 'Backend (at Pathao)',
    skills: ['Go', 'Laravel/Lumen', 'PostgreSQL', 'Redis', 'RabbitMQ', 'REST APIs', 'Webhooks']
  },
  { label: 'Frontend (at Pathao)', skills: ['Vue 2/3', 'Vuex/Pinia', 'Vite', 'Tailwind', 'Vitest'] },
  { label: 'Tooling (at Pathao)', skills: ['Docker', 'Nginx', 'Kong', 'GitLab CI'] },
  {
    label: 'Personal & DevOps practice',
    skills: ['Kubernetes (K3s, Helm)', 'Terraform', 'Ansible', 'AWS', 'Prometheus/Grafana', 'React Native/Expo', 'Supabase']
  }
]

const CERTIFICATIONS = [
  { name: 'DevOps Career Path, Batch 3', issuer: 'Interactive Cares', date: 'Jan 2026' },
  { name: 'Career Development Program', issuer: 'Spring Rain', date: 'Apr 2023' },
  { name: 'AR/VR/MR', issuer: 'SHOVA Software Solutions', date: 'Sep 2022' },
  { name: 'Ethical Hacking (CEH course)', issuer: 'Team Matrix - Elite Hackers', date: 'Feb 2022' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Dec 2021' }
]

const year = new Date().getFullYear()

// baseURL comes back without a trailing slash, so normalise before joining.
const profileSrc = `${useRuntimeConfig().app.baseURL.replace(/\/?$/, '/')}profile.jpg`
</script>
