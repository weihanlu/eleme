<template>
  <div id="app">
    <v-header></v-header>
    <img src="./assets/logo.png">
    <div class="tab">
      <div class="tab-item">
        <router-link to='/goods'>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from "./components/header/header";
export default {
  name: "App",
  components: {
    "v-header": header
  }
};
</script>

<style lang="stylus">
#app
  .tab
    display: flex
    width: 100%
    line-height: 40px
    .tab-item
      text-align: center
      flex: 1
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
          
  .content
    width:100%
    height:auto
</style>
