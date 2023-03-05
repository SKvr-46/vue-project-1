<script>
import {ref, reactive} from "vue";
import HistoryComponent from './HistoryComponent.vue';

export default {
    components: {
        HistoryComponent,
    },
    setup() {

    const display = ref("");
    let currentNumber = "";
    let currentOperator = null;
    let previousNumber = null;

    //formulaSetの最大数
    const maxCount = 10
    const formulaSet = reactive([])

    //formulaSetに履歴を入れる。10を超えると最初の式は消える
    const addToFormulaSet = (formula) => {
    if (formulaSet.length >= maxCount) {
        formulaSet.shift() // 最初の要素を削除
    }
    formulaSet.push(formula) // 新しい要素を末尾に追加
    }  

    //リアクティブなデータは、= []では変えられない。spliceも使える
    const clearAll = () => {
        formulaSet.length = 0
        display.value = ""
        currentNumber = ""
        currentOperator = null;
        previousNumber = null;
    }

    const handleButton = (button) => { 
        switch (button.type) {
            case "number":
                //10桁以上は入らないようにする
                if(String(currentNumber.length) > 9){
                    return
                }
                else {
                    currentNumber += button.label;
                    display.value = currentNumber;
                }
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
                //subCurrentNumberにcurrentNumberを一時保存してexpressに代入
                const subCurrentNumber = currentNumber
                currentNumber = calculate(previousNumber, currentOperator, currentNumber);
                const expression = `${previousNumber} ${currentOperator} ${parseFloat(subCurrentNumber)} = ${currentNumber}`;
                addToFormulaSet(expression)
                previousNumber = null;
                currentOperator = null;
                display.value = currentNumber;
                // display.value = expression;
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
        } else if (operator === "×") {
            return n1 * n2;
        } else if (operator === "÷") {
            return n1 / n2;
        }
    };

        const buttons = [
        { label: "C", type: "clear" },
        { label: "7", type: "number" },
        { label: "8", type: "number" },
        { label: "9", type: "number" },
        { label: "÷", type: "operator" },
        { label: "4", type: "number" },
        { label: "5", type: "number" },
        { label: "6", type: "number" },
        { label: "×", type: "operator" },
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
        formulaSet,
        addToFormulaSet,
        handleButton,
        clearAll
    }
    },

}
</script>




<template>
    <div class="container">
        <div class="calculator">
            <div class="display">{{ display }}</div>
            <div class="buttons">
                <button v-for="button in buttons" v-bind:key="button.label" @click="handleButton(button)">{{ button.label }}</button>
            </div>
        </div>
        <div class="history-area">
            <HistoryComponent :formulaSet="formulaSet"/>
            <button @click="clearAll" class="clear-btn">Clear All</button>
        </div>
    </div>
    
</template>


<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(14, 144, 23, 0.339);
    }

    .calculator {
        background-color: black;
        width: 500px;
        height: 750px;
        display: grid;
        place-items: center;
        border-radius: 20px;
    }

    .display {
        background-color: rgba(128,128,128,0.7);
        margin-top: 10px;
        opacity: 1;
        width: 400px;
        height: 200px;
        color: black;
        font-size: 50px;
        font-weight: 800;
        overflow: hidden;
        display: flex;
        justify-content: right;
        align-items: center;
        border-radius: 10px;
    }

    .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 200px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center; /* 列を中央寄りに配置する */
    align-content: center; /* 行を中央寄りに配置する */
    margin-top: 20px;
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

    .history-area .clear-btn {
        margin-bottom: 10px;
        background-color: rgba(152, 52, 223, 0.7);
        border: 4px ridge gray;
        width: 100%;
        height: auto;
        padding: 10px;
        border-radius: 0%;
        font-size: 28px;
    }

</style>
