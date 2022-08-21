import Link from 'next/link'
import { useRouter } from 'next/router'

export type RouteData = {
  name: string,
  path: string,
  pathnameMatch?: string
}

type RoutesKeys = 'home' | 'convert' | 'connect'

export type Routes = Record<RoutesKeys, RouteData>

export const routes: Routes = {
  home: {
    name: 'All Time',
    path: '/'
  },
  convert: {
    name: 'By Date',
    path: '/byDate',
    pathnameMatch: '/byDate/[[...date]]'
  },
  connect: {
    name: 'Users',
    path: '/users'
  }
}

export function Header () {
  const { pathname } = useRouter()
  const navRoutes = Object.values(routes)
  return (
    <header className='flex justify-center pt-5'>
      <nav>
        {navRoutes.map((route, index) => {
          const isLastNavRoute = index === navRoutes.length - 1
          const isActive = pathname === route.pathnameMatch || pathname === route.path
          return (
            <span key={route.name}>
              <Link href={route.path}>
                <a className={`${isActive ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>{route.name}</a>
              </Link>{' '}
              {isLastNavRoute || '| '}
            </span>
          )
        })}
      </nav>
    </header>
  )
}
