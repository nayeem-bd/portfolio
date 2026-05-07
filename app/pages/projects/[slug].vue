<template>
  <main class="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
    <NuxtLink to="/"
              class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
      <span aria-hidden="true">←</span> Back to portfolio
    </NuxtLink>

    <article class="mt-8">
      <header class="border-b border-gray-700 pb-6">
        <p class="text-sm text-gray-500 uppercase tracking-wide">Project</p>
        <h1 class="mt-2 text-3xl md:text-4xl font-bold leading-tight">{{ project.title }}</h1>
        <p class="mt-2 text-gray-400">{{ project.stack }}</p>
        <div class="flex gap-2 flex-wrap mt-4">
          <span v-for="tag in project.tags" :key="tag"
                class="text-xs px-2 py-0.5 rounded border border-gray-700 text-gray-400">{{ tag }}</span>
        </div>
      </header>

      <figure v-if="project.heroImage" class="mt-8">
        <img
          :src="project.heroImage.src"
          :alt="project.heroImage.alt"
          class="w-full rounded-xl border border-gray-700 bg-gray-800"/>
      </figure>

      <p class="mt-6 text-gray-300 leading-relaxed text-lg">{{ project.description }}</p>

      <section v-if="project.problem" class="mt-10">
        <h2 class="text-xl font-semibold mb-3">Problem</h2>
        <p class="text-gray-300 leading-relaxed max-w-prose">{{ project.problem }}</p>
      </section>

      <section v-if="project.approach" class="mt-10">
        <h2 class="text-xl font-semibold mb-3">Approach</h2>
        <p class="text-gray-300 leading-relaxed max-w-prose">{{ project.approach }}</p>
      </section>

      <section v-if="project.outcome" class="mt-10">
        <h2 class="text-xl font-semibold mb-3">Outcome</h2>
        <p class="text-gray-300 leading-relaxed max-w-prose">{{ project.outcome }}</p>
      </section>

      <section v-if="project.links?.length" class="mt-10">
        <h2 class="text-xl font-semibold mb-3">Links</h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="link in project.links" :key="link.url">
            <a :href="link.url" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-600 text-sm text-gray-200 hover:border-gray-400 hover:text-white transition-colors">
              {{ link.label }}
              <span aria-hidden="true" class="text-xs">↗</span>
            </a>
          </li>
        </ul>
      </section>

      <section v-if="!project.problem && !project.approach && !project.outcome && !project.links?.length"
               class="mt-10 text-sm text-gray-500 italic">
        Full case study coming soon.
      </section>
    </article>

    <nav class="mt-12 pt-6 border-t border-gray-700 flex flex-wrap justify-between gap-4 text-sm">
      <NuxtLink v-if="prevProject" :to="`/projects/${prevProject.slug}`"
                class="text-gray-400 hover:text-white transition-colors">
        ← {{ prevProject.title }}
      </NuxtLink>
      <span v-else></span>
      <NuxtLink v-if="nextProject" :to="`/projects/${nextProject.slug}`"
                class="text-gray-400 hover:text-white text-right transition-colors">
        {{ nextProject.title }} →
      </NuxtLink>
    </nav>

    <footer class="mt-12 mb-4 flex flex-wrap justify-between items-center text-gray-400 text-sm gap-2">
      <NuxtLink to="/" class="hover:underline">All projects</NuxtLink>
      <a href="mailto:nimuzzamanj@gmail.com" class="hover:underline">Get in touch</a>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { PROJECTS, findProject } from '~/constants/projects'

const route = useRoute()
const slug = route.params.slug as string

const project = findProject(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug)
const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

const SITE_URL = 'https://nayeem.app'
const pageTitle = `${project.title} — Md. Nimuzzaman`
const pageUrl = `${SITE_URL}/projects/${project.slug}`

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: project.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: pageUrl },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: project.description },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: project.description }
  ],
  link: [{ rel: 'canonical', href: pageUrl }]
})
</script>
