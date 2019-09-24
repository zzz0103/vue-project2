<template>
     <div class="good-content">
        <div class='good-swiper-conter'>
          <ul class='good-swiper-nav'>
            <li class="good-lis" :class="{'on':currentIndex===index}"  v-for="(nav,index) in findnav" :key="index" @click="tofindIndex(nav.id)">{{nav.title}}</li>
          </ul>
        </div>
         <router-view></router-view>   
      </div> 

</template>

<script>

import {reqFindNav} from '../../../api/api.js'
export default {
  data(){
    return{
      findnav:[],
      cont:0
    }
  },
  computed:{
    
    currentIndex(){
      const cont=this.$route.params.id*1
      return cont
    }
  },
  methods:{

    tofindIndex(id){
      this.$router.push(`/good/find/${id}`)
    }
  },
 async mounted(){
    let obj=await reqFindNav()
    // console.log(obj)
    if(obj.code===0){
      this.findnav=obj.data
    }
    // console.log(this.findnav)
 },
  beforeMount(){
    this.$router.push('/good/find/0')
  }
   
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=37.5

.good-content
    border-top 1px solid #ccc
    position relative 
    top -(44/$rem)rem 
    .good-swiper-conter  
      height (36/$rem)rem
      border-bottom 1px solid #ccc
      width (375/$rem)rem
      position relative
      .good-swiper-nav
        position absolute
        list-style nono 
        margin 0
        padding 0
        display flex
        .good-lis
          list-style none
          padding 0 (8/$rem)rem
          margin 0 (10/$rem)rem
          white-space nowrap
          height (34/$rem)rem
          line-height (34/$rem)rem
          &.on
            color #B4282D
            font-weight 700
            border-bottom (2/$rem)rem solid #B4282D;
          


</style>
