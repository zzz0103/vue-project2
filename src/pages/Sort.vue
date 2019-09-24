<template>
  <div class="sort-content">
    <div class="header-content">
      <div class="sort-header-search">
        <div class="sort-search-on">
          <div class="sort-on">
            <span class="sort-icon-top"></span>
            <span>搜索商品, 共22672款好物</span>
          </div>
        </div>
      </div>
    </div>
    <div class="conent-swiper">
      <div class="left-list-content">
        <ul class="left-lists">
          <li class="left-list" :class="{'active':catindex===index,'on':catindex===index}" v-for="(sort,index) in sortlist" :key="index" @click="changeSort(index)">{{sort.title}}</li>
        </ul>
      </div>
      <div class="right-list-content">
        <div class="right-better-scroll">
          <div class="right-my-smallswiper">
          <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="../../public/images/lunbo1.jpg" alt="">
                      </div>
                      <div class="swiper-slide">
                        <img src="../../public/images/lunbo2.jpg" alt="">
                      </div>
                  </div>
                  <!-- 如果需要滚动条 -->
                  <div class="swiper-pagination"></div>
          </div>
        </div>
        <ul class="cateList" v-for="(rsort,index) in sortlist" v-show="catindex===index" :key="index">
          <li class="cate-list" v-for="(rlist,index) in rsort.list" :key="index">
            <img class="cate-list-img" :src="rlist.img" alt="">
            <span class="cate-list-text">{{rlist.title}}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqSortlist} from '../api/api'
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      sortlist:[],
      cat:0
    }
  },
  computed:{
    catindex(){
      let cat = this.cat
      cat=this.$route.query.categoryId*1
      return cat
    }
  },
  async mounted(){
    let sortlist=await reqSortlist()
    if(sortlist.code===0){
      console.log(sortlist.data)
      this.sortlist=sortlist.data
    }
    this.scroll1=new BScroll('.left-list-content',{
        scrollY: true,
        click: true
    }),
    this.scroll2=new BScroll('.right-list-content',{
        scrollY: true,
        click: true
    })
    
  },
  methods:{
    changeSort(id){
      this.$router.replace({
        path:'/sort',
        query:{
          categoryId:id
        }
      })
    }
  },
  beforeMount(){
     this.$router.replace({
        path:'/sort',
        query:{
          categoryId:0
        }
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem = 75
.sort-content
  .header-content
    position relative
    height (88/$rem)rem
    .sort-header-search
        z-index 1
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
  .conent-swiper
    position relative
    background-color #fff
    width (750/$rem)rem
    height (1148/$rem)rem
    overflow hidden
    .left-list-content
      position absolute
      height (1148/$rem)rem
      width (162/$rem)rem
      .left-lists
        padding (40/$rem)rem 0
        width (162/$rem)rem
        height (1148/$rem)rem
        .left-list
          position relative
          width (162/$rem)rem
          height (50/$rem)rem
          text-align center
          line-height (50/$rem)rem
          margin-top (40/$rem)rem
          font-size (28/$rem)rem
          &:first-child
            margin 0
          &.on
            color #ab2b2b;
          &.active:before
            content ''
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: (6/$rem)rem;
            background-color: #ab2b2b;
    .right-list-content
      position absolute
      right 0
      top 0
      height (1097/$rem)rem
      overflow hidden
      padding (30/$rem)rem (30/$rem)rem (21/$rem)rem
      .right-better-scroll
        height (1150/$rem)rem
        .right-my-smallswiper
          position relative
          top (30/$rem)rem
          margin-bottom  (30/$rem)rem
          width (528/$rem)rem
          height (192/$rem)rem  
          .swiper-container
            .swiper-wrapper
              .swiper-slide 
                img 
                  width: (528/$rem)rem
                  height: (192/$rem)rem
        .cateList 
          position relative
          width (528/$rem)rem
          height (192/$rem)rem  
          .cate-list
            float left
            width (144/$rem)rem
            margin-right (34/$rem)rem
            &:nth-child(3n)
              margin-right 0
            .cate-list-img
              width (144/$rem)rem
              height (144/$rem)rem
            .cate-list-text
              display block
              width (144/$rem)rem
              height (72/$rem)rem
              text-align center


</style>
