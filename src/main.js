import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createHead } from '@vueuse/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub);

const app = createApp(App)
const head = createHead()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store);
app.use(head)
app.mount('#app')

//githubアイコンを使うのには、
//npm install @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons を実行
//font-awesome-iconをグローバルに登録しているので、import {FontAwesomeIcon}...や、
//components:{}は記述の必要はない
