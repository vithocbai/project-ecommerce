import { lazy } from 'react'

const routers = [
    {
        path: '/',
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        components: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        components: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        components: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        components: lazy(() => import('@pages/DetailProduct/'))
    },
    {
        path: '/about-us',
        components: lazy(() => import('@pages/AboutUs'))
    },
    {
        path: '/contacts',
        components: lazy(() => import('@pages/Contacts'))
    },
]

export default routers
