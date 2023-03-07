<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ButtonComponent",
    setup() {
        
    },
    props: {
        label:{
            type:String,
            required:true
        },
        handleClick: {
            type:Function,
            required:true
        }
    }
})
</script>

<template>
    <button @click="handleClick" class="btn">{{label}}</button>
</template>

<style>
    .btn {
        margin-bottom: 10px;
        background-color: rgba(152, 52, 223, 0.7); 
        border: 4px ridge gray;
        width: 100%;
        height: auto;
        padding: 10px;
        border-radius: 0%;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        transition: all .2s;
    }

    .btn:hover {
        opacity: 0.5;
        cursor: pointer;
    }
</style>