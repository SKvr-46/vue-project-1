<script>

import CalcComponent from '@/components/CalcComponent.vue'

export default {
    name: "HomeView",
    components: {
        CalcComponent,
    },
    props:{
        Title: String
    },
}
</script>


<template>
    <div>
        <h1>{{Title}}</h1>
        <div><CalcComponent/></div>
    </div>
</template>
