import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://nayeem.app'
const SITE_TITLE = 'Md. Nimuzzaman | Software Engineer'
const SITE_DESC =
  'Full-stack engineer at Pathao. I build merchant-facing services in Go, Laravel, and Vue — pricing engines, notification systems, and the APIs they sit behind.'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: SITE_TITLE,
      meta: [
        { name: 'description', content: SITE_DESC },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'author', content: 'Md. Nimuzzaman' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESC },
        { property: 'og:image', content: `${SITE_URL}/profile.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '1200' },
        { property: 'og:image:alt', content: 'Md. Nimuzzaman' },
        { property: 'og:locale', content: 'en_US' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESC },
        { name: 'twitter:image', content: `${SITE_URL}/profile.jpg` }
      ],
      link: [
        { rel: 'canonical', href: SITE_URL },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Md. Nimuzzaman',
            jobTitle: 'Software Engineer',
            worksFor: { '@type': 'Organization', name: 'Pathao Ltd', url: 'https://pathao.com' },
            url: SITE_URL,
            image: `${SITE_URL}/profile.jpg`,
            email: 'nimuzzamanj@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jessore',
              addressRegion: 'Khulna',
              addressCountry: 'BD'
            },
            knowsAbout: ['Go', 'Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Microservices', 'REST APIs'],
            sameAs: ['https://www.linkedin.com/in/nimuzzaman']
          })
        }
      ]
    }
  }
})
