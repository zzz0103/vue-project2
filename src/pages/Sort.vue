<template>
  <div class="sort-content">
    <div class="sort-header-search">
      <div class="sort-search-on">
        <div class="sort-on">
          <span class="sort-icon-top"></span>
          <span>搜索商品, 共22672款好物</span>
        </div>
      </div>
    </div>
    <div class="conent-swiper">
      <div class="left-list">
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="right-list"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=75
.sort-content
  position relative
  width (750/$rem)rem
  .sort-header-search
    height (88/$rem)rem
    background-color #ffffff
    position fixed
    top 0
    left 0
    width (750/$rem)rem
    .sort-search-on
      margin (15/$rem)rem (30/$rem)rem
      height (56/$rem)rem
      background-color #f4f4f4
      border-radius 5px
      display flex
      align-items center
      justify-content center
      .sort-on
        .sort-icon-top
          display inline-block
          width (28/$rem)rem
          height (28/$rem)rem
          background-image url('../../public/images/topsearch.png') 
          margin (16/$rem)rem (30/$rem)rem
          margin-right .13333rem
          vertical-align middle
          background-size cover
          background-position center 
        span 
          color: #666;
          font-size (28/$rem)rem
</style>
