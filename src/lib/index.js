import remark from './remark.js'
import vite from './vite.js'

/**
 * @type {import('./index.js').default}
 */
export default function liveCode(options = {}) {
  Object.assign(
    options,
    {
      layout: 'astro-live-code/components/LiveCodeLayout.astro',
    },
    { ...options },
  )

  return {
    name: 'astro-live-code',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [[remark, options]],
          },
          vite: {
            plugins: [vite(options)],
          },
        })
      },
    },
  }
}
