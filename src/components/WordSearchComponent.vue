<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "WordSearchComponent",
    setup() {
        
    },
    props: {
        title:{
            type:String,
            required:true
        },
        modelValue:{
            type:[String, Number],
            required:true,
            default:""
        },
        items:{
            type:[Array,String],
            required:true,
            default:() => []
        },
        toggleShow:{
            type:Boolean,
            default:false,
            validator: (value) => {
            return typeof value === "boolean";
            }
        }
    }
})
</script>

<template>
    <div class="container">
    <p>{{title}}</p>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
    <p v-for="item in items" :key="item.index" v-show="toggleShow">{{ item }}</p>
    </div>
</template>

<style>
.container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    border-radius: 20px;
    border: 1px solid gray;
    padding: 20px;
    font-size: 20px;
    font-weight: 800;
    width: 80%;
    border: 2px ridge black;

}
</style>
