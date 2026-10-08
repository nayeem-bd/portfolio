<template>
  <main class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
    <header class="flex flex-col gap-6 border-b border-gray-700 pb-8 md:flex-row md:items-start md:justify-between">
      <div class="flex flex-col gap-5 min-w-0">
        <div class="flex items-center gap-4 sm:gap-5">
          <img
            :src="profileSrc"
            alt=""
            width="1200"
            height="1200"
            class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-cyan-400/40 shrink-0"/>
          <div class="min-w-0">
            <h1 class="text-3xl md:text-4xl font-bold leading-tight">Md. Nimuzzaman</h1>
            <p class="mt-1 text-gray-500 text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>
        <p class="text-gray-300 leading-relaxed max-w-2xl">
          Backend-focused full-stack engineer at
          <a href="https://pathao.com" target="_blank" rel="noopener noreferrer"
             class="underline decoration-gray-500 hover:decoration-white">Pathao</a>.
          I build the Go and Laravel APIs and services behind parcel, payout and notification flows (PostgreSQL,
          Redis, RabbitMQ), and the Vue merchant panel that uses them.
        </p>
      </div>
      <div class="shrink-0 self-start">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-gray-800 text-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-(--good) animate-pulse"></span>
          Available for collaboration
        </span>
      </div>
    </header>

    <section class="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <article class="lg:col-span-2 bg-gray-800/60 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
        <h2 class="text-xl font-semibold">About</h2>
        <p class="text-gray-300 leading-relaxed max-w-prose">
          Backend-focused full-stack engineer at Pathao Ltd. Most of my work is on the backend — Go and Laravel
          services for notification scheduling, slab-based SKU pricing, merchant payouts and internal parcel
          inventory — with Vue as a second strength for the merchant and ops panels. I care about code that's straightforward to operate — clear logs, sensible metrics,
          predictable failure modes.
        </p>

        <div class="flex flex-wrap gap-3 mt-2">
          <a href="mailto:nimuzzamanj@gmail.com"
             class="px-4 py-2.5 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium">Email</a>
          <a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
             class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
             class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">LinkedIn</a>
        </div>

        <div class="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-gray-400 text-sm">
          <div>Email</div>
          <div><a href="mailto:nimuzzamanj@gmail.com" class="hover:underline break-all">nimuzzamanj@gmail.com</a></div>
          <div>LinkedIn</div>
          <div><a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
                  class="hover:underline break-all">linkedin.com/in/nimuzzaman</a></div>
          <div>GitHub</div>
          <div><a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
                  class="hover:underline break-all">github.com/nayeem-bd</a></div>
        </div>
      </article>

      <aside class="bg-gray-800/60 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
        <h2 class="text-xl font-semibold">Skills</h2>
        <div v-for="group in SKILL_GROUPS" :key="group.label" class="flex flex-col gap-2">
          <h3 class="text-sm text-gray-400">{{ group.label }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in group.skills" :key="skill"
                  class="px-2 py-1 border border-gray-600 rounded-full text-sm">{{ skill }}</span>
          </div>
        </div>

        <h2 class="text-xl font-semibold mt-4">Certifications</h2>
        <ul class="list-disc list-inside text-gray-300 space-y-1">
          <li>DevOps Career Path, Batch 3 — Interactive Cares (Jan 2026)</li>
          <li>Career Development Program — Spring Rain (Apr 2023)</li>
          <li>AR/VR/MR — SHOVA Software Solutions (Sep 2022)</li>
          <li>Ethical Hacking (CEH course) — Team Matrix - Elite Hackers (Feb 2022)</li>
          <li>Introduction to Cybersecurity — Cisco (Dec 2021)</li>
        </ul>

        <h2 class="text-xl font-semibold mt-4">Education</h2>
        <ul class="list-disc list-inside text-gray-300 space-y-1">
          <li>Rajshahi University — BE, Information &amp; Communication Engineering (2018–2023)</li>
        </ul>
      </aside>
    </section>

    <section class="mt-12 lg:mt-16">
      <div class="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
        <h2 class="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
        <span class="text-sm text-gray-500">Built at Pathao unless noted</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article v-for="project in PROJECTS" :key="project.slug"
                 class="relative bg-gray-800/60 border border-gray-700 rounded-xl p-6 flex flex-col gap-3 transition-colors hover:border-gray-500 hover:bg-gray-800/80 focus-within:border-gray-500">
          <div class="flex items-baseline justify-between gap-2 flex-wrap">
            <h3 class="text-lg font-semibold">
              <NuxtLink v-if="hasCaseStudy(project)" :to="`/projects/${project.slug}`"
                        class="after:absolute after:inset-0 after:rounded-xl">
                {{ project.title }}
              </NuxtLink>
              <template v-else>{{ project.title }}</template>
              <span v-if="project.personal"
                    class="ml-2 align-middle text-xs font-normal px-2 py-0.5 rounded-full border border-cyan-400/40 text-cyan-300">personal</span>
            </h3>
            <span class="text-xs text-gray-500">{{ project.stack }}</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">{{ project.description }}</p>
          <div class="flex gap-2 flex-wrap mt-1">
            <span v-for="tag in project.tags" :key="tag"
                  class="text-xs px-2 py-0.5 rounded border border-gray-700 text-gray-400">{{ tag }}</span>
          </div>
          <div v-if="!hasCaseStudy(project) && project.links?.length" class="flex gap-3 flex-wrap text-sm">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
               rel="noopener noreferrer" class="text-gray-300 underline decoration-gray-500 hover:decoration-white">
              {{ link.label }} <span aria-hidden="true" class="text-xs">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="mt-12 lg:mt-16">
      <h2 class="text-2xl md:text-3xl font-semibold mb-4">Experience</h2>
      <div class="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
        <p class="text-gray-400 text-sm mb-4">Pathao Ltd · Jan 2024 – Present · Dhaka</p>
        <div class="flex flex-col gap-4">
          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Software Engineer I</span>
              <span class="text-gray-400 text-sm">Jan 2025 – Present</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Added scheduled delivery to the Go notification service: ops targeting by role, hub and agent, a cron sender over RabbitMQ and status tracking so nothing is sent twice.</li>
              <li>Built the &quot;No Entry&quot; parcel flow: temporary-ID parcels, linking to the real order, bulk sorting and image upload across the ops panel, API and merchant panel.</li>
              <li>Shipped merchant payout features: on-demand withdrawals with OTP verification, advance pay, reconciliation and invoice bounce-back.</li>
              <li>Published trip-event notifications over RabbitMQ from a Go service, and added return-slip PDF generation to the order service.</li>
              <li>Built an internal parcel-inventory module (hub consignment, handover, transfer) across the ops panel, API and a Go service.</li>
              <li>Worked on slab-based pricing and introduced SKU as an item type with pricing and discount logic, with transactional migration commands for existing data.</li>
              <li>Migrated the merchant panel from Vue 2 to Vue 3 (Vuex 4, Vite 5, Jest → Vitest) and shipped its v6 dashboard redesign.</li>
              <li>Extended thermal label printing: SPRT printers, Bangla QR codes, lot numbers and Nepal labels.</li>
              <li>Supported API merchants with integration, debugging and webhook setup.</li>
            </ul>
          </div>

          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Associate Software Engineer</span>
              <span class="text-gray-400 text-sm">May 2024 – Dec 2024</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Improved the Developer API UI/UX and added new webhook event handling.</li>
              <li>Redesigned the merchant panel's left sidebar and rebuilt the Help Center (tabs, tooltips, content).</li>
              <li>Reworked merchant password reset and revamped role-based permissions across the ops admin panel and API.</li>
              <li>Added Bangla support to Zebra label printers (ZPL) and published unicode2ascii, an open-source npm package for Bengali Unicode → Bijoy conversion, now used by the printer module.</li>
            </ul>
          </div>

          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Intern Software Engineer</span>
              <span class="text-gray-400 text-sm">Jan 2024 – May 2024</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Improved the merchant panel landing page: price calculation, FAQ, order-tracking UI and a top-merchants showcase, all responsive.</li>
              <li>Started R&amp;D on thermal sticker printing for Zebra printers, later extended to Bangla support.</li>
            </ul>
          </div>
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
           class="px-5 py-2.5 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium">nimuzzamanj@gmail.com</a>
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

const year = new Date().getFullYear()

// baseURL comes back without a trailing slash, so normalise before joining.
const profileSrc = `${useRuntimeConfig().app.baseURL.replace(/\/?$/, '/')}profile.jpg`
</script>
