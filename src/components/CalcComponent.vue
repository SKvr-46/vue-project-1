<script>
import { ref } from "vue";

export default {
    setup() {

        const display = ref("");
    let currentNumber = "";
    let currentOperator = null;
    let previousNumber = null;
    let prevResult = 0;

    const handleButton = (button) => {
        switch (button.type) {
            case "number":
            currentNumber += button.label;
            display.value = currentNumber;
            break;

            case "decimal":
            if (!String(currentNumber).includes(".")) {
                currentNumber += button.label;
                display.value = currentNumber;
            }
            break;

            case "operator":
            if (previousNumber !== null && currentOperator !== null) {
                // すでに前の数値と演算子がセットされている場合は計算する
                currentNumber = calculate(previousNumber, currentOperator, currentNumber);
                previousNumber = parseFloat(currentNumber);
                display.value = currentNumber;
                currentNumber = "";
                currentOperator = button.label;
            } else {
                previousNumber = parseFloat(currentNumber);
                currentNumber = "";
                currentOperator = button.label;
            }
            break;

            case "equals":
            if (previousNumber !== null && currentOperator !== null) {
                // 前の数値と演算子がセットされている場合は計算する
                currentNumber = calculate(previousNumber, currentOperator, currentNumber);
                previousNumber = null;
                currentOperator = null;
                display.value = currentNumber;
            }
            break;

            case "clear":
            display.value = "";
            currentNumber = "";
            currentOperator = null;
            previousNumber = null;
            break;
        }
        };

        const calculate = (num1, operator, num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (operator === "+") {
            return n1 + n2;
        } else if (operator === "-") {
            return n1 - n2;
        } else if (operator === "*") {
            return n1 * n2;
        } else if (operator === "/") {
            return n1 / n2;
        }
    };

        const buttons = [
        { label: "C", type: "clear" },
        { label: "7", type: "number" },
        { label: "8", type: "number" },
        { label: "9", type: "number" },
        { label: "/", type: "operator" },
        { label: "4", type: "number" },
        { label: "5", type: "number" },
        { label: "6", type: "number" },
        { label: "*", type: "operator" },
        { label: "1", type: "number" },
        { label: "2", type: "number" },
        { label: "3", type: "number" },
        { label: "-", type: "operator" },
        { label: "0", type: "number" },
        { label: ".", type: "decimal" },
        { label: "=", type: "equals" },
        { label: "+", type: "operator" },
    ];
        return {
        display,
        currentNumber,
        currentOperator,
        previousNumber,
        buttons,
        prevResult,
        handleButton
    }
    },
}
</script>

<template>
    <div>
        <div class="display">{{ display }}</div>
        <div class="buttons">
        <button v-for="button in buttons" v-bind:key="button.label" @click="handleButton(button)">{{ button.label }}</button>
        </div>
    </div>
</template>


<style scoped>
    .display {
        background-color: gray;
        opacity: 0.8;
        width: 400px;
        height: 200px;
        color: black;
        font-size: 30px;
    }

    .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 200px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    }

    button  {
        background: blue;
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 100%;
        color: white;
        cursor: pointer;
        font-size: 60px;
        border: 2px solid gray;
        border-bottom: 4px solid gray;
    }

    button:hover {
        opacity: 0.5;
    }
</style>
