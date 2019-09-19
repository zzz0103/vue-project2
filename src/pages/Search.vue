<template>
  <div class="searchpage">
    <div class="search">
      <form class="forms">
        <div class="searchcont">
          <img class="img1" src="../../public/images/topsearch.png" alt="">
          <input type="text" placeholder="请输入搜索内容">
          <img class="img2" src="../../public/images/chacha.png" alt="" v-show="false">
        </div>
      </form>
      <span class="quexiao">取消</span>
    </div>
    <div class="hotSearch">
      <h3 class="hottitle">热门搜索</h3>
      <ul class="hot-list">
        <li class="hotli"><a href="javascript:;">99%好评 懒人拖把</a></li>
        <li class="hotli"><a href="javascript:;">电动牙刷69元起</a></li>
        <li class="hotli"><a href="javascript:;">女式牛仔裤仅99.9</a></li>
        <li class="hotli"><a href="javascript:;">按摩电器</a></li>
        <li class="hotli"><a href="javascript:;">拖鞋</a></li>
        <li class="hotli"><a href="javascript:;">扫地机 限时降400</a></li>
        <li class="hotli"><a href="javascript:;">行李箱</a></li>
        <li class="hotli"><a href="javascript:;">牛仔裤85折起</a></li>
        <li class="hotli"><a href="javascript:;">扫地机 限时降400</a></li>
        <li class="hotli"><a href="javascript:;">女式牛仔裤仅99.9</a></li>
        <li class="hotli"><a href="javascript:;">按摩电器</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=75
.search
  width (690/$rem)rem
  height (88/$rem)rem
  padding 0 (30/$rem)rem
  background-color #fff
  display flex
  align-items center
  background-color #fff
  .forms
    background-color #f4f4f4
    .searchcont
      width (564/$rem)rem
      height (56/$rem)rem
      padding 0 (20/$rem)rem
      display flex
      align-items center
      .img1
        width (28/$rem)rem
        height (28/$rem)rem
        margin-right (16/$rem)rem
      input 
        width (518/$rem)rem
        height (39/$rem)rem
        padding-left (2/$rem)rem
        background-color: transparent;
        box-shadow: none;
        outline 0
      .img2
        width (50/$rem)rem
        height (50/$rem)rem
  .quexiao
    margin-left: (30/$rem)rem
    font-size: .37333rem; 
.hotSearch
  background-color #fff
  padding 0 (30/$rem)rem (30/$rem)rem (30/$rem)rem
  .hottitle
    height (90/$rem)rem
    color #999
    line-height (90/$rem)rem
  .hot-list 
    overflow hidden
    .hotli
      float left
      margin 0 (32/$rem)rem (32/$rem)rem 0
      padding 0 (15/$rem)rem
      border 1px solid #ccc
      font-size (24/$rem)rem
      height (45/$rem)rem
      line-height (45/$rem)rem
      a
        color #333

  

</style>
