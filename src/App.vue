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
    <div class="header">
      <div class="logo"><router-link to="/" class="link">My App</router-link></div>
        <ul>
          <li>
            <router-link to="/" class="link">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="link">About</router-link>
          </li>
        </ul>
    </div>
    <router-view></router-view>
  </div>
</template>


<style scoped>

.header {
  width: 100%;
  height: 100px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header .logo {
  background-color: aqua;
  padding: 20px;
  display: grid;
  place-items: center;
  margin-left: 30px;
  font-weight: bold;
}
  .link{
  text-decoration: none;
}

ul {
  display: flex;
  flex-direction: row;
}

ul li {
  padding: 20px;
  list-style: none;
}



</style>


<!-- 
  defineComponent関数を使用して、Vueコンポーネントを定義しています。
  routerオブジェクトをコンポーネントに設定し、ルーターがアプリケーションの遷移を管理するようにしています。
  また、<router-view>を使用して、ルーターによってレンダリングされるコンポーネントを表示しています。
-->