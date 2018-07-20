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
                <span class="support-type" :class="classMap[seller.supports[0].type]"></span>
                    <span class="support-description">
                        {{seller.supports[0].description}}
                    </span>
                </div>
            </div>
            <div class="support-count">
                <div class="count">{{seller.supports.length}}个</div>
                <i class="arrow-icon"></i>
            </div>
        </div>

        <div class="bulletin-wrapper">
            <span class="bulletin-icon"></span>
            <span class="bulletin">{{seller.bulletin}}</span>
        </div>
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
  },
  created: function(){
      this.classMap = ["decrease","discount","special","invoice","guarantee"]
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'

.info
    width 100%
    color #fff
    background #999
    .content-wrapper
        position relative
        padding 24px 12px 18px 24px
        font-size 0px
        .avatar
            display inline-block
            vertical-align top
            img
                border-radius 4px
        .content
            display inline-block
            margin-left 16px
            .title
                margin 2px 0 8px 0
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
                margin 10px 0 2px 0
                .support-type
                    display inline-block
                    vertical-align top
                    margin-right 4px
                    width 12px
                    height 12px
                    background-size 12px 12px
                    background-repeat no-repeat
                    &.decrease
                        bg-image('decrease_1')
                    &.discount
                        bg-image('discount_1')
                    &.special
                        bg-image('special_1')
                    &.invoice
                        bg-image('invoice_1')
                    &.guarantee
                        bg-image('guarantee_1')
                .support-description
                    display inline-block
                    font-size 10px
                    font-weight 200
                    line-height 12px
        .support-count
            position absolute
            right 12px
            bottom 18px
            padding 7px 8px
            border-radius 14px
            color #fff
            background-color #000
            .count
                font-size 10px
                font-weight 200
                line-height 12px
    .bulletin-wrapper
        width 100%
        height 28px
        background-color #000
        .bulletin-icon
            display inline-block
            vertical-align middle
            margin 9px 4px 9px 12px
            width 22px
            height 12px
            background-size 22px 12px
            bg-image('bulletin')
            background-repeat no-repeat
        .bulletin
            font-size 10px
            color #fff

</style>
