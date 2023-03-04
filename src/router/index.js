import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        props: {Title: "Calculator"}
        },
        {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
        props: {Title: "About"}
        }
    ]
})

export default router
