<template>
  <div class="good">
    <Header/>
      <div class="goods-nav">
        <span :class="{'active':active}" @click="toFind('/good/find')">发现</span>
        <span :class="{'active':!active}" @click="toFind('/good/item')">甄选家</span>
      </div>
      <router-view/>
     
  </div>
</template>

<script>
import BSroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['tj'])
  },
  data(){
    return {
      active:true
    }
  },
  methods:{
    toFind(url){
      this.$router.push({
        path:url
      })
      this.active=!this.active
    }
  },
  mounted(){
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll=new BSroll('.good-swiper-conter',{
              scrollX: true,
              scrollY: false,
              click:'true'
            })
          }
    });
    
    
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scope>
$rem=37.5
.good
  width (375/$rem)rem
  height (667/$rem)rem
  position relative
  overflow hidden
  .goods-nav
    width (160/$rem)rem
    height (44/$rem)rem
    position relative
    top -(44/$rem)rem
    left 50%
    margin-left -(80/$rem)rem
    display flex
    align-items center
    justify-content center
    span 
      display block
      font-size (16/$rem)rem
      padding 0 (8/$rem)rem
      &.active
        color #b4282b
        font-weight bold
        font-size (22/$rem)rem
      
  
</style>
