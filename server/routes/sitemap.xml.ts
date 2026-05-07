import { PROJECTS } from '~/constants/projects'

const SITE_URL = 'https://nayeem.app'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const lastmod = new Date().toISOString().slice(0, 10)

  const entries = [
    { loc: `${SITE_URL}/`, priority: '1.0' },
    ...PROJECTS.map((p) => ({
      loc: `${SITE_URL}/projects/${p.slug}`,
      priority: '0.8'
    }))
  ]

  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
