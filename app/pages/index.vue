<template>
  <main class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
    <header class="flex flex-col gap-6 border-b border-gray-700 pb-8 md:flex-row md:items-start md:justify-between">
      <div class="flex flex-col gap-5 min-w-0">
        <div class="flex items-center gap-4 sm:gap-5">
          <img
            src="/profile.jpg"
            alt=""
            width="1200"
            height="1200"
            class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-cyan-400/40 shrink-0"/>
          <div class="min-w-0">
            <h1 class="text-3xl md:text-4xl font-bold leading-tight">Md. Nimuzzaman</h1>
            <p class="mt-1 text-gray-500 text-sm">Jessore, Khulna, Bangladesh</p>
          </div>
        </div>
        <p class="text-gray-300 leading-relaxed max-w-2xl">
          I build merchant-facing services at
          <a href="https://pathao.com" target="_blank" rel="noopener noreferrer"
             class="underline decoration-gray-500 hover:decoration-white">Pathao</a>
          — Bangladesh's largest on-demand delivery platform. My recent work spans Go-based notification and pricing
          systems, Laravel APIs, and Vue dashboards used across Pathao's merchant network.
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
          Full-stack engineer at Pathao Ltd. I ship across the stack — Go, Laravel, Vue — but most of my recent work
          is on the backend: scheduling-aware notifications, slab-based pricing for SKUs, and merchant-facing
          inventory and APIs. I care about code that's straightforward to operate — clear logs, sensible metrics,
          predictable failure modes.
        </p>

        <div class="flex flex-wrap gap-3 mt-2">
          <a href="mailto:nimuzzamanj@gmail.com"
             class="px-4 py-2.5 rounded-lg bg-linear-to-br from-(--accent) to-(--accent2) text-black font-medium">Email</a>
          <a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
             class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
             class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">LinkedIn</a>
          <a href="tel:+8801912986866"
             class="px-4 py-2.5 rounded-lg border border-gray-600 hover:border-gray-400">Call</a>
        </div>

        <div class="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-gray-400 text-sm">
          <div>Email</div>
          <div><a href="mailto:nimuzzamanj@gmail.com" class="hover:underline break-all">nimuzzamanj@gmail.com</a></div>
          <div>Mobile</div>
          <div><a href="tel:+8801912986866" class="hover:underline">+880 1912-986866</a></div>
          <div>LinkedIn</div>
          <div><a href="https://www.linkedin.com/in/nimuzzaman" target="_blank" rel="noopener noreferrer"
                  class="hover:underline break-all">linkedin.com/in/nimuzzaman</a></div>
          <div>GitHub</div>
          <div><a href="https://github.com/nayeem-bd" target="_blank" rel="noopener noreferrer"
                  class="hover:underline break-all">github.com/nayeem-bd</a></div>
        </div>
      </article>

      <aside class="bg-gray-800/60 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
        <h2 class="text-xl font-semibold">Top Skills</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Go</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Laravel</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Vue.js</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">PostgreSQL</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Docker</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Kubernetes</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">REST APIs</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Microservices</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">AWS</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Bash</span>
          <span class="px-2 py-1 border border-gray-600 rounded-full text-sm">Monitoring</span>
        </div>

        <h2 class="text-xl font-semibold mt-4">Certifications</h2>
        <ul class="list-disc list-inside text-gray-300 space-y-1">
          <li>Certified Ethical Hacker (CEH)</li>
          <li>DevOps Career Path Batch - 3</li>
          <li>Career Development Program</li>
          <li>Introduction to Cybersecurity</li>
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
              <NuxtLink :to="`/projects/${project.slug}`"
                        class="after:absolute after:inset-0 after:rounded-xl">
                {{ project.title }}
              </NuxtLink>
            </h3>
            <span class="text-xs text-gray-500">{{ project.stack }}</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">{{ project.description }}</p>
          <div class="flex gap-2 flex-wrap mt-1">
            <span v-for="tag in project.tags" :key="tag"
                  class="text-xs px-2 py-0.5 rounded border border-gray-700 text-gray-400">{{ tag }}</span>
          </div>
        </article>
      </div>
      <p class="text-xs text-gray-500 mt-4">Click any project for the full writeup.</p>
    </section>

    <section class="mt-12 lg:mt-16">
      <h2 class="text-2xl md:text-3xl font-semibold mb-4">Experience</h2>
      <div class="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
        <p class="text-gray-400 text-sm mb-4">Pathao Ltd · 2 years 4 months · Dhaka</p>
        <div class="flex flex-col gap-4">
          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Software Engineer I</span>
              <span class="text-gray-400 text-sm">Jan 2025 – Present</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Designed and shipped a scheduling-aware notification service that lets merchants queue updates for
                future delivery.
              </li>
              <li>Built an on-demand payment request feature so merchants can trigger payouts outside the regular
                settlement cycle.
              </li>
              <li>Designed and shipped the internal Inventory module — stock-level tracking and merchant-facing UI.
              </li>
              <li>Designed the parcel-handling flow for "No Entry" cases, smoothing out a class of failed-delivery
                edge cases.
              </li>
              <li>Introduced SKU as a first-class item type, with slab-based pricing and discount logic that powers
                merchant-defined promotions.
              </li>
              <li>Maintained and extended public merchant APIs, including webhook reliability work.</li>
            </ul>
          </div>

          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Associate Software Engineer</span>
              <span class="text-gray-400 text-sm">May 2024 – Dec 2024</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Improved the merchant Developer API UI/UX and webhook event handling.</li>
              <li>Redesigned the merchant panel sidebar and rebuilt the Help Center with new tab structure and
                content.
              </li>
              <li>Reworked password reset and role-based permissions for the merchant panel.</li>
            </ul>
          </div>

          <div class="p-4 border border-gray-700 rounded-lg">
            <div class="flex justify-between flex-wrap">
              <span class="font-semibold">Intern Software Engineer</span>
              <span class="text-gray-400 text-sm">Jan 2024 – May 2024</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Improved the merchant landing page, FAQ, and order tracking UI.</li>
              <li>Built a JS package adding Bangla script support for Zebra label printers — closed a longstanding gap
                in localized printing.
              </li>
              <li>Assisted with database migrations for the Issue Resolution Panel.</li>
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
import { PROJECTS } from '~/constants/projects'

const year = new Date().getFullYear()
</script>
