<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
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
import info from "./components/header/info";
import constant from "./common/constant/constant";
export default {
  name: "App",
  components: {
    "v-header": info
  },
  data() {
    return {
      seller: {}
    };
  },
  created: function() {
    var that = this;
    this.$axios.get("/api/seller").then(function(response) {
      var res = response.data;
      if (res != null) {
        if (res.errCode == constant.errApi.REQUEST_SUCCESS) {
          that.seller = res.data;
        }
      }
    });
  }
};
</script>

<style lang="stylus">
@import './common/stylus/index.styl'
#app
  .tab
    display flex
    position relative
    width 100%
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      text-align center
      flex 1
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
.header
  position relative
  width 100%
  height 40%
</style>
