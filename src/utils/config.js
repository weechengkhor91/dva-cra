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
    {
        id: 'contact',
        name: 'contact',
        path: '/contact',
        models: () => [import('../models/contact')],
        component: () => import('../routes/contact'),
    },
]

export default menu