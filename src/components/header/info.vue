<template>
    <div class="info">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64px" height="64px">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="delivery">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="support-type"></span>
                    <span class="support-description">
                        {{seller.supports[0].description}}
                    </span>
                </div>
            </div>
        </div>

        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "info",
  data: function() {
    return {
      msg: "mHeader!"
    };
  },
  props: {
    seller: {}
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'

.info
    width 100%
    color #fff
    background #000
    .content-wrapper
        padding 24px 12px 18px 24px
        font-size 0px
        .avatar
            display inline-block
        .content
            display inline-block
            margin-left 16px
            .title
                margin 2px 0 8px 0
                line-height 18px
                .brand
                    display inline-block   
                    width 30px
                    height 18px
                    bg-image('brand')
                    background-size 30px 18px
                    background-repeat no-repeat
                .name
                    vertical-align top
                    margin-left 6px
                    font-size 16px
                    font-weight bold
            .delivery
                font-size 12px
                font-weight 200
                line-height 12px
            .support
                margin-top 10px 
                .support-description
                    font-size 10px
                    font-weight 200
                    line-height 12px
</style>
