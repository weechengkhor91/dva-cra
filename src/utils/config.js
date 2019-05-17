const menu = [
    {
        id: 'home',
        name: 'home',
        path: '/',
        models: () => [import('../models/home')],
        component: () => import('../routes/home'),
    },
    {
        id: 'about',
        name: 'about',
        path: '/about',
        models: () => [import('../models/about')],
        component: () => import('../routes/about'),
    },
]

export default menu