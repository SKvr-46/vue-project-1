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
        props: {Title: "Calculator"}
        },
        {
        path: '/textanalyzer',
        name: 'TextAnalyzerView',
        component: TextAnalyzerView,
        props: {Title: "Text Analyzer"}
        }
    ]
})

export default router


