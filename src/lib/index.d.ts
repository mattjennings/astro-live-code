export interface LiveCodeOptions {
  layout?: string
  wrapper?: string
  defaultProps?: Record<string, any>
}

declare function liveCode(
  options: LiveCodeOptions,
): import('astro').AstroIntegration

export default liveCode
