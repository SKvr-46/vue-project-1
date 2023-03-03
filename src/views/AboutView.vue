<script>
import { defineComponent, ref } from 'vue'
import TestComponent from "@/components/TestComponent.vue"
import router from '../router'

export default defineComponent({
    name: 'AboutView',
    router, //ルーティング機能
    components: {
        TestComponent
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
    }
})
</script>

<template>
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <router-link to="/">Home</router-link>
        <button @click="addCount">+</button>
        <TestComponent :count="countUp"/>
    </div>
</template>

