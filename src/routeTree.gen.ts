import { Route as rootRoute } from './routes/__root'
import { Route as DLayoutImport } from './routes/_d-layout'
import { Route as ALayoutImport } from './routes/_a-layout'
import { Route as DLayoutIndexImport } from './routes/_d-layout.index'
import { Route as DLayoutSettingsImport } from './routes/_d-layout.settings'
import { Route as ALayoutRegisterImport } from './routes/_a-layout.register'
import { Route as ALayoutLoginImport } from './routes/_a-layout.login'

const DLayoutRoute = DLayoutImport.update({
  id: '/_d-layout',
  getParentRoute: () => rootRoute,
} as any)

const ALayoutRoute = ALayoutImport.update({
  id: '/_a-layout',
  getParentRoute: () => rootRoute,
} as any)

const DLayoutIndexRoute = DLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => DLayoutRoute,
} as any)

const DLayoutSettingsRoute = DLayoutSettingsImport.update({
  path: '/settings',
  getParentRoute: () => DLayoutRoute,
} as any)

const ALayoutRegisterRoute = ALayoutRegisterImport.update({
  path: '/register',
  getParentRoute: () => ALayoutRoute,
} as any)

const ALayoutLoginRoute = ALayoutLoginImport.update({
  path: '/login',
  getParentRoute: () => ALayoutRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_a-layout': {
      preLoaderRoute: typeof ALayoutImport
      parentRoute: typeof rootRoute
    }
    '/_d-layout': {
      preLoaderRoute: typeof DLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_a-layout/login': {
      preLoaderRoute: typeof ALayoutLoginImport
      parentRoute: typeof ALayoutImport
    }
    '/_a-layout/register': {
      preLoaderRoute: typeof ALayoutRegisterImport
      parentRoute: typeof ALayoutImport
    }
    '/_d-layout/settings': {
      preLoaderRoute: typeof DLayoutSettingsImport
      parentRoute: typeof DLayoutImport
    }
    '/_d-layout/': {
      preLoaderRoute: typeof DLayoutIndexImport
      parentRoute: typeof DLayoutImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  ALayoutRoute.addChildren([ALayoutLoginRoute, ALayoutRegisterRoute]),
  DLayoutRoute.addChildren([DLayoutSettingsRoute, DLayoutIndexRoute]),
])
