<script>
import { defineComponent, ref } from 'vue'
import TextComponent from "@/components/TextComponent.vue"
import router from '../router'

export default defineComponent({
    name: 'TextAnalyzerView',
    router, //ルーティング機能
    components: {
        TextComponent
    },
    setup(){
        const countUp = ref(0)

        const addCount = () => {
            countUp.value = countUp.value + 1
        }

        return {
            countUp,
            addCount
        }
    },
    props: {
        Title: String
    },
})
</script>

<template>
    <div>
        <h1>{{Title}}</h1>
        <TextComponent/>
    </div>
</template>

