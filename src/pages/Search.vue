<template>
  <div class="searchpage">
    <div class="search">
      <form class="forms">
        <div class="searchcont">
          <img class="img1" src="../../public/images/topsearch.png" alt="">
          <input type="text" placeholder="请输入搜索内容" v-model='searchabout' @keydown="search">
          <img class="img2" src="../../public/images/chacha.png" alt="" v-show="false">
        </div>
      </form>
      <router-link class="quexiao" to="/" >取消</router-link>
    </div>
      <ul class="aboutlist" v-if="searchabout.length">
         <li class="about" v-for="(about,index) in searchAbout" :key="index">{{about}}</li>
      </ul>
    <div class="hotSearch" v-else>
      <h3 class="hottitle">热门搜索</h3>
      <ul class="hot-list">
        <li class="hotli" v-for="(hot,index) in hotSearch" :key="index"><a :href="hot.schemeUrl">{{hot.keyword}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['searchAbout','hotSearch'])
  },
  data(){
    return{
      searchabout:'',
    }
  },
  methods:{
    search(){
        const searchabout=this.searchabout.trim()
        this.$store.dispatch('serAbout',searchabout)
        //this.searchabout=''  
              
    } 
  },
    beforeMount(){
        this.$store.dispatch('serHot')
    }

}
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
.aboutlist
  background-color #fff
  width (720/$rem)rem
  padding-left (30/$rem)rem
  .about
    width (720/$rem)rem
    height (104/$rem)rem
    font-size (30/$rem)$rem
    line-height (104/$rem)rem
    border-bottom 1px solid #ccc
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
