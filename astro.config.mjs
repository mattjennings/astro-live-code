import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import liveCode from './src/lib/index.js'
import path from 'path'
import { fileURLToPath } from 'url'
import svelte from '@astrojs/svelte'
import preact from '@astrojs/preact'
import vue from '@astrojs/vue'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: [
        {
          find: 'astro-live-code',
          replacement: '/src/lib',
        },
      ],
    },
  },
  integrations: [
    starlight({
      title: 'Astro Live Code',
      social: {
        github: 'https://github.com/mattjennings/astro-live-code',
      },

      tableOfContents: {
        minHeadingLevel: 1,
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: {
            directory: 'guides',
          },
        },
      ],
    }),
    liveCode({}),
    svelte(),
    preact(),
    vue(),
  ],
})
