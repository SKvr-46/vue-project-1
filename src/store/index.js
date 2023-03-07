import { createStore } from 'vuex'


const store = createStore({
        state: {
        pageVisitCount: 0
        },
        mutations: {
        increment(state) {
            state.pageVisitCount++
        }
        },
        actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
            commit('increment')
            }, 1000)
        }
        },
        getters: {
        getCount(state) {
            return state.count
        }
        }
    })

export default store

//main.jsに、import store from './store';、app.use(store);が必要

// stateプロパティは、アプリケーションの状態を保持。countという名前の数値データが定義。
// mutationsプロパティは、状態を変更するための関数を定義。incrementという名前の関数が定義されており、呼び出されるとcountの値が1増える。
// actionsプロパティは、非同期処理を含む操作を定義。incrementAsyncという名前のアクションが定義されており、1秒後にincrementミューテーションを呼び出す。
// gettersプロパティは、状態の一部分を取得するための関数を定義。getCountという名前のゲッターが定義されており、現在のcountの値を返す。
