<template>
  <div>
    <div class="person-header">
      <div class="home" slot="left">
        <router-link class="iconfont iconhome" to="/"></router-link>
      </div>
      <slot name="center">
        <!-- <img src="../../../public/images/logo.png" alt=""> -->
      </slot>
      <div class="search-car" slot="right">
  
        <router-link class="iconfont iconsousuo1" to="/search"></router-link>
  
        <router-link class="iconfont iconcart_icon" to="/car"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=37.5
  .person-header
    position relative
    width (355/$rem)rem
    height (44/$rem)rem
    padding 0 (8/$rem)rem 0 (12/$rem)rem
    background-color #fff
    display flex
    align-items center
    justify-content center
    .home
      position absolute
      left (12/$rem)rem
      top (11/$rem)rem
      //margin-left (12/$rem)rem
      width (24/$rem)rem
      height (22/$rem)rem
      line-height (22/$rem)rem
      .iconfont
        font-size 24px
    .logo
      display flex
      justify-content center
      img 
        width (86/$rem)rem
        height (27/$rem)rem
    .search-car
      position absolute
      right  (12/$rem)rem
      top (11/$rem)rem
      //margin-right (12/$rem)rem
      width (74/$rem)rem
      height (32/$rem)rem
      display flex
      align-items center
      .iconfont
        font-size 24px
        margin-right (20/$rem)rem

</style>
