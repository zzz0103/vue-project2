<template>
  <div>
    <div class="car-header">
      <div class="car-header-top">
        <span class="car-title">购物车</span>
        <span class="car-text">领劵</span>
      </div>
      <ul class="car-header-bottom">
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
      </ul>
    </div>
    <div class="car-center">
      <div class="carBig">
        <img class="carimg" src="../../public/images/bigcar.png">
        <div class="car-img-text">去添加点吧</div>
      </div>
      <button class="btn">登录</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=75
.car-header
  .car-header-top
    background-color #fff
    height (88/$rem)rem
    line-height (88/$rem)rem
    padding 0 (30/$rem)rem
    .car-title
      font-size .48rem
      color #333
    .car-text
      color #B4282D
      font-size .4rem
      float right
      margin-right (30/$rem)rem
  .car-header-bottom
    background-color #eee
    padding 0 (30/$rem)rem
    display flex
    height (70/$rem)rem
    align-items center
    justify-content center
    li
      flex-grow 1
      text-align center
.car-center
  position: fixed;
  left 0
  top (80/$rem)rem
  right 0
  bottom 0
  .carBig
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    height (248/$rem)rem
    margin auto
    .carimg
      width (248/$rem)rem
      margin-left (248/$rem)rem   
    .car-img-text
      font-size (28/$rem)rem
      width (248/$rem)rem
      height (28/$rem)rem
      text-align center
      margin auto
  .btn
    width (480/$rem)rem
    height (92/$rem)rem
    position absolute
    top (480/$rem)rem
    right 0
    left 0
    bottom 0
    margin auto
    color #fff
    background-color #b4282d
    border 0
    outline 0


</style>
