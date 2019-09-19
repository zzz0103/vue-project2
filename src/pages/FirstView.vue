<template>
<div>
  <div class="content">
        <div class="head-content">
          <div class="header-w">
          <div class="header">
            <div class="header-top">
              <a class="logo" href="javascript:;"></a>
              <div class="topsearch" @click="toSearch">
                <span class="icon-top"></span>
                <span>搜索商品, 共22672款好物</span>
              </div>
              <div class="logobtn">登录</div>
            </div>
            <div class="header-bottom">
              <!-- nav -->
              <div class="header-list1" v-show="isShow">
                <ul class="header-list">
                  <li class="lis">推荐</li>
                  <li class="lis">居家生活</li>
                  <li class="lis">服饰箱包</li>
                  <li class="lis">美食酒水</li>
                  <li class="lis">全部频道</li>
                  <li class="lis">全部频道</li>
                  <li class="lis">全部频道</li>
                  <li class="lis">全部频道</li>
                  <li class="lis">全部频道</li>
                </ul>
              </div>
              <!-- 三角 -->
              <div class="icon" @click="showAllList">
                  <i class="icon-bg"></i>
              </div>
              <!-- 隐藏全部频道 -->
              <div class="AllShow" v-show="!isShow">
                <h2 class="allheader">全部频道</h2>
                <div class="allList">          
                <ul>
                  <li>推荐</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                  <li>全部频道</li>
                </ul>
              </div>
              </div>
            </div>
            <div class="cover" v-show="!isShow" @click.prevent="showAllList"></div>
          </div>
        </div>
        </div>
        <div class="my-Swiper1">
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo4.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="../../public/images/lunbo6.jpg" alt="">
                    </div>
                </div>
                <!-- 如果需要滚动条 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="three-nav">
          <ul class="three-list">
            <li class="item">
              <a href="javascript:;">
                <span class="icon icon1"></span>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <span class="icon icon2"></span>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <span class="icon icon3"></span>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="newgoods">
          <ul class="new-list">
            <li>
              <a href="javascript:;">
                <img src="../../public/images/xpsf.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/smjd.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/xpsf.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/qqts.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/jjsh.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/fsxb.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/msjs.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/ghqj.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/myqz.png" alt="">
                <span>新品首发</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/images/hhmd.gif" alt="">
                <span>新品首发</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="limit-time">
          <img src="../../public/images/xsqg.gif" alt="">
        </div>
        <ul class="chaozhi">
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
        </ul>
        <ul class="chaozhi">
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
        </ul>
        <ul class="chaozhi">
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
        </ul>
        <ul class="chaozhi">
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
          <li class="zhi-list">
            <a href="javascript:;">
              <p class='title'>9.9超值区</p>
              <p class='text'>190款商品定价直降</p>
              <div>
                <img src="../../public/images/chabei.png" alt="">
                <img src="../../public/images/chabei.png" alt="">
              </div>
            </a>
          </li>
        </ul>
  </div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css' 
import Swiper from 'swiper' 
import BScroll from 'better-scroll' 
export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    toSearch(){
      this.$router.push({
        path:'/search'
      })
    },
    showAllList(){
      this.isShow=!this.isShow
    }
  },
  mounted(){
     this.$nextTick(()=>{
     new Swiper ('.swiper-container', {
       click:true,
      loop: true,
      // 如果需要滚动条  
        pagination: {
      el: '.swiper-pagination',
      
      },   
      })     
     })
    this.scroll = new BScroll('.header-list1',{
    scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical',
    click: true
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem = 75;
html,body
  margin 0 
  padding 0
  .head-content
    position relative
    height (148/$rem)rem
    .header-w
      position fixed
      z-index 99
      //width (750/$rem)rem
      height (148/$rem)rem 
      .header
        width (750/$rem)rem
        position fixed
        top 0
        left 0
        .header-top
          position relative
          z-index 11
          display flex
          width (690/$rem)rem
          height (55.9/$rem)rem
          padding (16/$rem)rem (30/$rem)rem
          background-color #fff
        .logo
            width (138/$rem)rem
            height (40/$rem)rem
            background-image url('../../public/images/logo.png')
            display: inline-block;
            margin-top (8/$rem)rem
            margin-right: .26667rem;
            background-size: cover;
            background-position: center;
          .topsearch
            width (442/$rem)rem
            height (56/$rem)rem
            background-color: #ededed;
            border-radius 5px
            .icon-top
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
          .logobtn
            width (74/$rem)rem
            height (40/$rem)rem
            border 1px solid red
            color red
            font-size .32rem;
            margin-left: .21333rem 
            text-align center
            line-height (40/$rem)rem
            margin-top (6/$rem)rem
        .header-bottom
          width (750/$rem)rem
          position: relative;
          left 0 
          top 0
          z-index: 10;
          background: #fff;
          box-sizing border-box
          padding-right (100/$rem)rem
          .header-list1
            position relative
            width 100%
            box-sizing border-box
            height 100%
            background: #fff
            overflow hidden
            .header-list
              position: relative;
              height: 100%;
              width: (1460/$rem)rem;
              overflow: hidden;
              display flex
              flex-shrink: 0;
              padding: 0 .4rem;
              .lis
                font-family: PingFangSC-Light,helvetica,'Heiti SC'
                white-space nowrap
                color #333
                height (60/$rem)rem
                padding 0 (16/$rem)rem
                font-size (28/$rem)rem
                line-height (60/$rem)rem 
                margin-left (20/$rem)rem 
                &:first-child
                  margin-left 0
          .icon
            position absolute
            right 0
            top 0
            width (160/$rem)rem
            height (60/$rem)rem
            background-color #fff
            z-index 999
            box-sizing: border-box;
            .icon-bg
              position absolute
              right 0
              top 0
              width (30/$rem)rem
              height (30/$rem)rem
              margin (15/$rem)rem (30/$rem)rem
              display block
              background-image url('../../public/images/list01.png')
              background-size cover
              background-color #fff
          .AllShow
            position relative
            z-index 99
            .allheader
              position relative
              z-index 50
              width (720/$rem)rem
              height (60/$rem)rem
              padding 0 (30/$rem)rem
              line-height (60/$rem)rem
              font-size: .37333rem
            .allList
              z-index 50
              position relative
              background-color #fff
              ul
                width (750/$rem)rem
                height (288/$rem)rem
                padding-top (24/$rem)rem
                li
                  float left
                  width (148/$rem)rem
                  height (54/$rem)rem
                  line-height (54/$rem)rem
                  text-align center
                  margin-left (30/$rem)rem
                  margin-bottom (40/$rem)rem
                  border 1px solid #ccc
                  color #333
                  background-color #fafafa
                  border-radius: .05333rem
  .cover
      z-index 2
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background-color rgba(0,0,0,0.6)
  .my-Swiper1
    position relative
    .swiper-container
      .swiper-wrapper
        .swiper-slide 
          img 
            width: (750/$rem)rem
            height: (370/$rem)rem
        .swiper-pagination
          height height (4/$rem)rem
          
  .three-nav
    // position relative
    background-color #fff
    .three-list
      box-sizing border-box
      width 100%
      padding 0 (30/$rem)rem
      display flex
      height (72/$rem)rem
      .item
        flex-grow 1
        display flex
        justify-content center
        align-items center
        font-size .32rem
        .icon
          width (32/$rem)rem
          height (32/$rem)rem
          display inline-block
          background-size cover
          background-color #fff
          vertical-align middle
        .icon1
          background-image url('../../public/images/wy.png')
        .icon2
          background-image url('../../public/images/baozheng.png')
        .icon3
          background-image url('../../public/images/48h.png')
        span 
          color #333
  .newgoods
    // position relative
    background-color #fff
    padding-bottom (32/$rem)rem
    .new-list
      height (340/$rem)rem
      li
        background-color #fff
        float left
        width (110/$rem)rem
        height (156/$rem)rem
        margin (10/$rem)rem (20/$rem)rem (9/$rem)rem
        a
          img 
            width (110/$rem)rem
            height (116/$rem)rem
          span 
            margin-top .13333rem
            text-align center
            font-size .32rem
            color: #333
            line-height .48rem
            white-space nowrap
  .limit-time
    // position relative
    box-sizing border-box
    margin -1px 0
    img 
      width 100%
  .chaozhi
    box-sizing border-box
    padding (10/$rem)rem (30/$rem)rem (30/$rem)rem (26/$rem)rem
    margin-bottom (20/$rem)rem
    overflow hidden
    .zhi-list
      float left
      background-color: #F0F0F0
      width (323/$rem)rem
      margin: .05333rem 0 0 .05333rem;
      padding: .26667rem 0 0 .26667rem;
      .title
        padding-left: (10/$rem)rem;
        font-size: .42667rem;
        font-family: PingFangSC-Medium;
        color #333
      .text
        padding-left: (10/$rem)rem;
        font-size: .32rem
        color #7f7f7f
      img 
        width (150/$rem)rem
        height (150/$rem)rem
</style>
<style>
  
</style>
