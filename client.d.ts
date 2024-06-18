declare module 'vue-router/auto-routes' {
  import type { RouteRecordRaw } from 'vue-router'

  /**
   * Array of routes generated by unplugin-vue-router
   */
  export const routes: RouteRecordRaw[]
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto-routes'

  export interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}

declare module 'vue-router/auto' {
  // reexport all types that are not augmented by unplugin-vue-router
  export * from 'vue-router'

  // TODO: deprecate vue-router/auto
  export {
    // Experimental Data Fetching
    definePage,
    DataLoaderPlugin,
    NavigationResult,
  } from 'unplugin-vue-router/runtime'
  // must be added to the virtual vue-router/auto
  // FIXME: is there a way to achieve this without losing the types?
  // export { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'
  // export { defineColadaLoader } from 'unplugin-vue-router/data-loaders/pinia-colada'
}

// Make the macros globally available
declare global {
  const definePage: (typeof import('unplugin-vue-router/runtime'))['definePage']
}

export {}
