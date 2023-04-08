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
        },
        base: "/"
        },
        {
        path: '/textanalyzer',
        name: 'TextAnalyzerView',
        component: TextAnalyzerView,
        props: {Title: "Text Analyzer"},
        meta: {
            title: 'Text Analyzer',
            description: 'This is a text analyzer app'
        },
        base: "/textanalyzer"
        }
    ]
})

router.beforeEach((to, from, next) => {
    const { title, description } = to.meta
    document.title = title
    const descriptionMetaTag = document.querySelector('meta[name="description"]')
    if (descriptionMetaTag) {
        descriptionMetaTag.setAttribute('content', description)
    }
        next() 
        }
    )

export default router




