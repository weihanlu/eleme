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
        <div class="goods-wrapper" v-if="goods">
            <div class="goods-menu" v-for="good in goods" :key="good.index">
                <div class="goods-type" v-if="good.foods">{{good.name}}</div>
                <div class="food-wrapper" v-if="good.foods" v-for="item in good.foods" :key="item.index">
                    <img class="food-icon" :src="item.icon"/>
                    <div class="content">
                        <div class="food-name">{{item.name}}</div>
                        <div class="food-description" v-if="item.description">{{item.description}}</div>
                        <div class="status">
                            <span class="food-sellcount">月售{{item.sellCount}}份</span>
                            <span class="food-rating">好评率{{item.rating}}%</span>
                        </div>
                        <div class="price">
                            <span class="food-price">{{item.price}}</span>
                            <span class="food-old-price" v-if="item.oldPrice">{{item.oldPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            border-1px(rgba(7,17,27,0.1))
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
    .goods-wrapper
        flex auto
        font-size 0px
        .goods-menu
            width 100%
            .goods-type
                padding-left 14px
                height 26px
                font-size 12px
                line-height 26px
                border-left 2px solid #d9dde1
                color rgb(147,153,159)
                background-color #f3f5f7
            .food-wrapper
                display flex
                padding 18px 0
                margin 0 18px
                border-bottom 1px solid rgba(7,17,27,0.1)
                .food-icon
                    display inline-block
                    flex none    
                    padding-right 10px
                    width 60px
                    height 60px
                .content
                    flex auto
                    .food-name
                        padding-top 2px
                        font-size 14px
                        color rgb(7,17,27)
                    .food-description, .status, .price
                        padding-top 8px
                        font-size 10px
                        color rgb(147,153,159)
                        .food-sellcount
                            padding-right 6px
                    .price
                        font-size 10px
                        & *:before
                            content "¥"
                            font-size 10px
                        .food-price
                            font-size 14px
                            padding-right 8px
                            color rgb(240,20,20)
                            font-weight 700
                        .food-old-price
                            text-decoration line-through
                            
</style>
