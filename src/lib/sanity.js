import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'tskp4en0',   // من ملف sanity.config.js بمجلد الـ Studio
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})

export function urlFor(image) {
  return `https://cdn.sanity.io/images/tskp4en0/production/${image.asset._ref
    .replace('image-', '')
    .replace('-jpg', '.jpg')
    .replace('-png', '.png')
    .replace('-webp', '.webp')}`
}