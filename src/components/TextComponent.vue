<script>
import { ref, computed, reactive, watch, defineComponent, onMounted } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import ExplanationComponent from './ExplanationComponent.vue'
import WordSearchComponent from './WordSearchComponent.vue'
import { useStore } from 'vuex'


export default defineComponent({
    name: "TextComponent",
    components: {
        ButtonComponent,
        WordSearchComponent,
        ExplanationComponent
    },

    setup() {
        const text = ref("")
        const words = reactive([])
        const counts = reactive({})
        const modeCountSet = reactive([])
        const showAll = ref(false)
        const foundWordsList = reactive([])
        const word = ref("")
        const n = ref(0)
        const store = useStore()

        //マウントされたらコミット
        onMounted(() => {
            store.commit("increment")
        })
        
        //"increment"によってカウントが+1される
        const pageVisitCount = computed(() => {
            return store.state.pageVisitCount
        })

        const toggleShowAllWords = () => {
            if(showAll.value) {
                showAll.value = false
            }else {
                showAll.value = true
                 //オブジェクト内のすべてのプロパティを削除する（初期化）
                 //textの中の単語とその数を数える
                Object.keys(counts).forEach(key => delete counts[key])
                for (let i = 0; i < words.length; i++) {
                const item = words[i];
                counts[item] = counts[item] ? counts[item] + 1 : 1;
            }
        }
    }


        const  textLength = computed(() => {
            return text.value.trim().length
        })

            //入力されたテキストをwordsにスペースで区切って格納
        watch(text, (newValue) => {
            //trimしてから格納
            const trimmedValue = newValue.trim()
            words.splice(0, words.length, ...trimmedValue.split(/[ ,.]+/i).filter(Boolean))
        })

        //モードを求める
        const modeCount = (n) => {
            //空集合にする
            modeCountSet.splice(0, modeCountSet.length)
            Object.keys(counts).forEach(key => delete counts[key])
                for (let i = 0; i < words.length; i++) {
                const item = words[i];
                counts[item] = counts[item] ? counts[item] + 1 : 1;
            }
            modeCountSet.value = counts
            for(const key in counts) {
                if(counts[key] >= n){
                    modeCountSet.push(`${key} : ${counts[key]}`)
                }
            }
            }

            //ワードを見つける
        const findWord = (word) => {
            foundWordsList.splice(0, foundWordsList.length) 
            Object.keys(counts).forEach(key => delete counts[key])
                for (let i = 0; i < words.length; i++) {
                const item = words[i];
                counts[item] = counts[item] ? counts[item] + 1 : 1;
            }
                for(const key in counts) {
                    if(key.includes(word)){
                        foundWordsList.push(`${key} : ${counts[key]}`)
                    }
                }
        }

            return {
            toggleShowAllWords,
            text,
            words,
            showAll,
            textLength,
            counts,
            modeCount,
            modeCountSet,
            findWord,
            foundWordsList,
            word,
            n, 
            pageVisitCount
        }
        },


    })


</script>

<template>
    <p>{{pageVisitCount >= 2 ? `You have mounted this application's page ${pageVisitCount} times` : `You have mounted this application's page ${pageVisitCount} time`}}</p>
    <ExplanationComponent/>
    <div class="top-container">
        <div class="input-container">
            <p>English Ver.</p>
            <textarea cols="30" rows="10" v-model="text"></textarea>
            <p>Number of characters: {{ textLength }}</p>
            <p>Word count: {{words.length}}</p>
        </div>

        <div class="result-container">
            <div class="searchword-container">
                <ButtonComponent :handleClick="() => modeCount(n)" label="Word Counter"/>
                <WordSearchComponent
                title="Put in number"
                v-model="n"
                :items="modeCountSet"
                :toggleShow="modeCountSet.length > 0"
                />
            </div>
            
            <div class="findword-container">
                <ButtonComponent :handleClick="() => findWord(word)" label="Find Words"/>
                <WordSearchComponent
                title="Find words"
                v-model="word"
                :items="foundWordsList.length > 0 ? foundWordsList : ['No result']"
                :toggleShow="true"
                />
            </div>
        </div>
        <div class="showall-container">
                <ButtonComponent :handleClick="toggleShowAllWords" :label='showAll ? "閉じる" : "See All Words"'/>
                <p v-for="(value, key) in counts" :key="key" v-show="showAll===true">{{ key }}: {{ value }}</p>
        </div>
    </div>


</template>

<style scoped>
    p {
        font-size: 20px;
        font-weight: 800;
    }
    .top-container {
        background-color: rgba(9, 237, 85,0.4);
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,255,255,0.6);
        border-radius: 20px;
        margin-bottom: 20px;
        border: 2px ridge black;
    }

    .input-container textarea {
        max-width: 80%;
    }

    .searchword-container,
    .findword-container{
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        max-width: 40%;
        
    }

    .result-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
        
    }

    .showall-container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 60%;
        max-width: 70%;
    }

</style>