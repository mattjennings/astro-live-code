import remark from './remark.js'
import vite from './vite.js'

/**
 * @typedef {{
 * layout?: string
 * wrapper?: string
 * defaultProps?: Record<string, any>
 * }} LiveCodeOptions
 */

/**
 *
 * @param {LiveCodeOptions} options
 * @returns {import('astro').AstroIntegration}
 */
export default function (options = {}) {
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
