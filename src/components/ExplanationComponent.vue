<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ExplanationComponent",
    setup() {
        
    },
})
</script>

<template>
    <div class="explanation-container">
        <ul>
            <li>
                Please enter English text in the text area
            </li>
            <li>
                Enter a numerical value and it will search for words that occur more than that number in the English text.
            </li>
            <li>
                Enter a word and  it will return the words containing that string and the number of occurrences.
            </li>
            <li>
                Displays a list of all words and their number of occurrences in an English sentence.
            </li>
        </ul>
    </div>
</template>

<style>
    .explanation-container {
        background-color: rgba(0, 128,0, 0.6);
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 10px;
        border: 2px ridge lightseagreen;
    }

    .explanation-container li:nth-child(2)::before {
        content: "Word Counter: ";
        font-weight: 900;
        color: purple;
    }
    .explanation-container li:nth-child(3)::before {
        content: "Find Words: ";
        font-weight: 900;
        color: purple;
    }
    .explanation-container li:nth-child(4)::before {
        content: "See All Words: ";
        font-weight: 8\900;
        color: purple;
    }

    .explanation-container li {
        font-size: 16px;
        line-height: 28px;
        font-weight: 600;
        list-style: circle;
    } 
</style>