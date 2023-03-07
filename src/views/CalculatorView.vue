<script>
import CalcComponent from '@/components/CalcComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CalculatorView",
    components: {
        CalcComponent,
    },
    props:{
        Title: String
    },
})
</script>


<template>
    <div>
        <h1>{{Title}}</h1>
        <div><CalcComponent/></div>
    </div>
</template>
