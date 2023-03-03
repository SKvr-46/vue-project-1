<script>
import { ref } from 'vue'

export default {
    name: "TestComponent",
    props: {
    count: {
        type: Number,
        required: true
    }
    },
    setup(){
        const message = ref("Hello world")
        return {
        message
        }
    },
}
</script>

<template>
    <div>
        {{message}}
    </div>
    <h1>{{count}}</h1>
</template>

<style scoped>
    div {
        color: red;
    }
</style>