import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import TextAnalyzerView from '../views/TextAnalyzerView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'CalculatorView',
        component: CalculatorView,
        props: {Title: "Calculator"},
        meta: {
            title: 'Calculator',
            description: 'This is a calculator app'
        }
        },
        {
        path: '/textanalyzer',
        name: 'TextAnalyzerView',
        component: TextAnalyzerView,
        props: {Title: "Text Analyzer"},
        meta: {
            title: 'Text Analyzer',
            description: 'This is a text analyzer app'
        }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const { title, description } = to.meta
    document.title = title
    document.description = description
        next() 
        }
    )

export default router




