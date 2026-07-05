import { MetadataRoute } from 'next'
import { labSeriesList } from '@/lib/data'
import { getPostsByCategory } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.phatsimopheko.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/labs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/other-work`, // update this if you keep it as /projects
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // One entry per lab series, e.g. /labs/wazuh-labs
  const seriesRoutes: MetadataRoute.Sitemap = labSeriesList.map((series) => ({
    url: `${baseUrl}${series.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // One entry per individual lab activity, e.g. /labs/wazuh-labs/getting-started
  const labRoutes: MetadataRoute.Sitemap = labSeriesList.flatMap((series) => {
    const category = series.link.split('/').pop()!
    const posts = getPostsByCategory(category)
    return posts.map((post) => ({
      url: `${baseUrl}/labs/${post.category}/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  })

  return [...staticRoutes, ...seriesRoutes, ...labRoutes]
}