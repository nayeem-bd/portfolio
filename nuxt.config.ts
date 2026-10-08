import tailwindcss from '@tailwindcss/vite'
import { SITE_URL } from './app/constants/site'

// GitHub Pages serves project sites under /<repo>/, so every public asset URL
// has to carry the base. Normalised to always end in a slash.
const BASE_URL = (process.env.NUXT_APP_BASE_URL || '/').replace(/\/?$/, '/')
const SITE_TITLE = 'Md. Nimuzzaman — Backend Software Engineer (Go, Laravel, Vue) at Pathao'
const SITE_DESC =
  'Backend-focused full-stack engineer at Pathao. I build Go and Laravel APIs and event-driven services for parcel, payout and notification flows, and the Vue front-ends merchants use.'

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
    preset: 'github_pages',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    baseURL: BASE_URL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: SITE_TITLE,
      meta: [
        { name: 'description', content: SITE_DESC },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'author', content: 'Md. Nimuzzaman' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${SITE_URL}/` },
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
        { rel: 'canonical', href: `${SITE_URL}/` },
        { rel: 'icon', type: 'image/x-icon', href: `${BASE_URL}favicon.ico` }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Md. Nimuzzaman',
            jobTitle: 'Backend Software Engineer',
            worksFor: { '@type': 'Organization', name: 'Pathao Ltd', url: 'https://pathao.com' },
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/profile.jpg`,
            email: 'nimuzzamanj@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dhaka',
              addressCountry: 'BD'
            },
            knowsAbout: [
              'Go',
              'Laravel',
              'PostgreSQL',
              'RabbitMQ',
              'Redis',
              'REST APIs',
              'Microservices',
              'Event-driven architecture',
              'Docker',
              'Vue.js',
              'Tailwind CSS'
            ],
            sameAs: [
              'https://www.linkedin.com/in/nimuzzaman',
              'https://github.com/nayeem-bd',
              'https://www.npmjs.com/package/unicode2ascii'
            ]
          })
        }
      ]
    }
  }
})
