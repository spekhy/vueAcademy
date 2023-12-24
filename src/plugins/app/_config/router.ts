import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/src/plugins/lib@shopping-list/shopping-lists/shopping-lists.vue',
        name: 'Shopping List - List',
        component: ''
    },
    {
        path: '/src/plugins/lib@shopping-list/shopping-list-detail/shopping-list-detail.vue',
        name: 'Shopping List - Detail',
        component: ''
    },
    {
        path: '/src/plugins/app/views/not-found.vue',
        name: 'NotFound',
        component: ''
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router