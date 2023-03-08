<!--ルートコンポーネント-->
<!--アプリケーション全体のレイアウトやナビゲーションなど、共通する要素を担当するコンポーネント-->

<script>
import { defineComponent } from 'vue'


import router from './router'

export default defineComponent({
  name: 'App',
  router //ルーティング機能
})
</script>

<template>
  <div>
    <header class="header">
      <div class="top-container">
        <div class="logo"><router-link to="/" class="logo-link">My Vue3 App</router-link></div>
        <div>
          <ul>
            <li>
              <router-link to="/" class="link">Calclator</router-link>
            </li>
            <li>
              <router-link to="/textanalyzer" class="link">Text Analyzer</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main class="main-container">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <address>koeich4@gmail.com</address>  
      <a href="https://github.com/SKvr-46/vue-project-1.git">
      <font-awesome-icon :icon="['fab', 'github']" :size="'lg'" class="font"/>
      </a>
    </footer>
  </div>
</template>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(hover :hover){
  .link{
  text-decoration: none;
  transition: all .4s;
}
  .link:hover {
      color: aqua;
}
}

.header {
  position: relative;
  width: 100%;
  height: auto;
  background-color: gray;
  margin: 0 auto;
  
}


.logo-link {
  text-decoration: none;
}

a {
  color: black;
}


.top-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  margin: 0 auto;
}

.header .top-container .logo {
  font-size: 24px;
  background-color: aqua;
  padding: 30px;
  display: grid;
  place-items: center;
  font-weight: bold;
}


.top-container ul {
  display: flex;
  flex-direction: row;
}

.top-container ul li {
  padding: 20px;
  list-style: none;
  font-size: 20px;
  font-weight: 800;
  color: black;
}

.main-container {
  width: 92%;
  margin: 0 auto;
}

.footer {
  margin-top: 100px;
  width: 100%;
  background-color: gray;
  height: 300px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  padding: calc(1vw + 20px);
}

.footer address {
  margin-bottom: 20px;
}

.font {
  transition: all .4s;
}
.font:hover {
  opacity: 0.5;
}

@media(hover:none) {
  .link {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  .link:active {
    color: aqua;
  }
}

@media(max-width:767px){
  .top-container ul li{
    font-size: 16px;
  }
  .header .top-container .logo {
      font-size: 18px;
      text-align: center;
}
  .link {
    display: grid;
    text-align: center;
  }
}


</style>


<!-- 
  defineComponent関数を使用して、Vueコンポーネントを定義しています。
  routerオブジェクトをコンポーネントに設定し、ルーターがアプリケーションの遷移を管理するようにしています。
  また、<router-view>を使用して、ルーターによってレンダリングされるコンポーネントを表示しています。
-->