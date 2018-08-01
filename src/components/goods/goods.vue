<template>
    <div class="goods">
        <div class="menu-wrapper" v-if="goods">
            <li class="menu-item" v-for="item in goods" :key="item.index">
                <div class="menu-type">
                    <span v-show="item.type!=-1" class="menu-icon" :class="classMap[item.type]"></span>
                    <span class="menu-name">{{item.name}}</span>
                </div>
            </li>
        </div>
        <div class="food-wrapper"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import constant from "../../common/constant/constant";
export default {
    name: 'goods',
    data(){
        return{
            goods: {},
            classMap:["decrease","discount","special","invoice","guarantee"]
        }
    },
    created:function(){
        var that = this;
        this.$axios.get("/api/goods").then(function(response){
            var res = response.data;
            if(res != null){
                if(res.errCode == constant.errApi.REQUEST_SUCCESS){
                    that.goods = res.data;
                }
            }
        })
    }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'

.goods
    display flex
    width 100%
    .menu-wrapper
        flex 0 0 80px
        font-size 0px
        background-color #f3f5f7
        .menu-item
            position relative
            margin 0 12px
            height 54px
            .menu-type
                position absolute
                top 50%
                transform translate(0,-50%)
                .menu-icon
                    display inline-block
                    vertical-align bottom
                    width 12px
                    height 12px
                    background-size 12px 12px
                    background-repeat no-repeat
                    &.decrease
                        bg-image('decrease_3')
                    &.discount
                        bg-image('discount_3')
                    &.special
                        bg-image('special_3')
                    &.invoice
                        bg-image('invoice_3')
                    &.guarantee
                        bg-image('guarantee_3')
                .menu-name
                    font-size 12px
                    line-height 14px
    .food-wrapper
        flex auto
</style>
