import tailwindcss from '@tailwindcss/vite'

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
      title: 'Md. Nimuzzaman | Software Engineer',
      meta: [
        {
          name: 'description',
          content:
            'Md. Nimuzzaman — Software Engineer at Pathao. Expertise in Go, Laravel, Vue.js, Microservices, Docker, Kubernetes, and Monitoring.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  }
})
