import { createRouter, createWebHashHistory } from 'vue-router'
import shoppingList from '/src/plugins/lib@shopping-list/shopping-lists/shopping-lists.vue'
import shoppingDetail from '/src/plugins/lib@shopping-list/shopping-list-detail/shopping-list-detail.vue'
import notFound from '/src/plugins/app/views/not-found.vue'

const routes = [
    {
        path: '/shopping-list',
        name: 'Shopping List - List',
        component: shoppingList
    },
    {
        path: '/shopping-list-detail',
        name: 'Shopping List - Detail',
        component: shoppingDetail
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router