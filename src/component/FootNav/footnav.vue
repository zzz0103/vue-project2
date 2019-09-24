<template>
  <div class="footnav">
    <router-link class="icc" to='/'>
      <span class="icon first" :class="{'on':this.$route.path==='/'}"></span>
      <span class="text" :class="{'onc':this.$route.path==='/'}">首页</span>
    </router-link>
    <router-link class="icc" to='/sort'>
      <span class="icon second" :class="{'on':this.$route.path==='/sort'}"></span>
      <span class="text" :class="{'onc':this.$route.path==='/sort'}">分类</span>
    </router-link>
    <router-link class="icc" to='/good' >
      <span class="icon three" :class="{'on':$route.path.indexOf('/good')!==-1}"></span>
      <span class="text" :class="{'onc':$route.path.indexOf('/good')!==-1}">识物</span>
    </router-link>
    <router-link class="icc" to='/car'>
      <span class="icon four" :class="{'on':this.$route.path==='/car'}"></span>
      <span class="text" :class="{'onc':this.$route.path==='/car'}">购物车</span>
    </router-link>
    <router-link class="icc" to='/person'>
      <span class="icon five" :class="{'on':this.$route.path==='/person'}"></span>
      <span class="text" :class="{'onc':this.$route.path==='/person'}">个人</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      first:true
    }
  },
  methods:{
    changeImg(){
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem = 75;
.footnav
  position fixed
  bottom 0
  left 0
  width (750/$rem)rem
  height (98/$rem)rem
  // background-color #ccc
  display flex
  background-color #fff
  .icc
    flex-grow 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    .icon
      width (39/$rem)rem
      height (39/$rem)rem
      background-image url('../../../public/images/footnav.png')
      display inline-block
      background-size cover
    .first
      background-position 0 346px
      &.on
        background-position 0 370px
    .second
      background-position 0 170px
      &.on
        background-position 0 0
    .three
      background-position 0 299px
      &.on
        background-position 0 0
    .four
      background-position 0 220px
      &.on
        background-position 0 0
    .five
      background-position 0 252px
      &.on
        background-position 0 0 
    .text
      height (24/$rem)rem
      margin-top (7/$rem)rem
      display block
      &.onc
        color red
</style>
