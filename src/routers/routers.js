import { lazy } from 'react'

const routers = [
    {
        path: '/',
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        components: lazy(() => import('@components/Blog/Blog'))
    }
]

export default routers