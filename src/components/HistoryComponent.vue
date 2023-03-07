<script>
import {defineComponent} from "vue";

export default defineComponent({
    setup() {
    },
    props:{
        formulaSet:{
            type: Array
        }
    }

})
</script>

<template>
        <div>
            <div class="log"><span>LOG</span></div>
        <ul class="history-wrapper" >
            <li v-for="(expression, index) in formulaSet" :key="index" >{{ expression }}</li>
        </ul>
        </div>
</template>
    

<style scoped>  
    .log {
        font-weight: 800;
        font-size: 28px;
        background-color: rgb(179, 117, 117);
        display: grid;
        place-items: center;
        margin-top: 10px;
        border: 2px ridge black;
    }
    .history-wrapper {
        background-color: gray;
        width: 300px;
        height: 680px;
        border: 2px ridge black;
        overflow: hidden;
    }

    .history-wrapper li {
        color: black;
        list-style: none;
        font-weight: 700;
        font-size: 28px;
    }
</style>
    