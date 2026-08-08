import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'f47dktv5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  // Off deliberately: pages are cached by ISR (see `revalidate` in the
  // talent-perspectives routes), so a fetch only happens when a page is
  // regenerating and must return fresh content. The Sanity CDN would add its
  // own staleness window on top of that.
  useCdn: false,
})
