<template>
    <div class="star-wrapper" :class="sizeType">
        <span v-for="starType in starTypes" :key="starType.index" :class="starType" class="star-item"></span>
    </div>
</template>

<script>
const STAR_LENGTH = 5; //5星制评分
const STAR_ON = "on"; //全星
const STAR_HALF = "half"; //半星
const STAR_OFF = "off"; //无星

export default {
  name: "star",
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    sizeType: function() {
      return "star-" + this.size;
    },
    starTypes: function(){
      let result = [];
      let formatScore = Math.floor(this.score * 2)/2; //格式化为0.5的倍数
      let integer = Math.floor(formatScore); //整数部分
      let hasDecimal = (formatScore/1 != 0); //小数部分
      for(let i=0; i<integer; i++){
        result.push(STAR_ON);
      }
      if(hasDecimal){
        result.push(STAR_HALF);
      }
      while(result.length< STAR_LENGTH){
        result.push(STAR_OFF);
      }
      return result;
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.star-wrapper
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image('star48_on')
      &.half
        bg-image('star48_half')
      &.off
        bg-image('star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('star36_on')
      &.half
        bg-image('star36_half')
      &.off
        bg-image('star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('star24_on')
      &.half
        bg-image('star24_half')
      &.off
        bg-image('star24_off')
</style>


