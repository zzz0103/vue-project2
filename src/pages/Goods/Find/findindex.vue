<template>
  <div class="hcontent" >
      <div v-show="showObj==0">0</div>  
      <div class="hswiper">
        <div v-show="showObj==1" class="tuijian">
           <div class="ceng1" v-for="(tjpage,index) in tj" :key="index">
             <div class="ceng2" v-for="(data,index) in tjpage.topics" :key="index">
              <div class="small" v-if='data.type===2'>
                <a :href="`http://m.you.163.com`+data.schemeUrl">
                  <div class="info-left">
                      <div class="s-name">
                        <div></div>
                        <span>{{data.nickname}}</span>
                      </div>
                      <div class="s-title">{{data.title}}</div>
                      <div class="s-see">{{data.readCount}}看过</div>
                  </div>
                  <img class="pic-right" :src="data.picUrl"/>
                </a>
              </div>
              <div class="big" v-else>
                <div class="u-name">
                  <div></div>
                  <span>{{data.nickname}}</span>
                </div>
                <div class="u-title">{{data.title}}</div>
                <img class="u-pic" :src="data.picUrl"/>
                <div class="u-see">{{data.readCount}}看过</div>
              </div>
             </div>
           </div>
        
      </div>
      </div>
      <div v-show="showObj==2">2</div>  
  </div>
</template>

<script>

import BSroll from 'better-scroll'
import {reqFindNav} from '../../../api/api.js'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['tj'])
  },
  data(){
    return{
      showObj:0,
      findnav:[],
    }
  },
  async mounted(){
    let obj=await reqFindNav()
    if(obj.code===0){
      this.findnav=obj.data
    }
    this._showIndex(this.$route)
    this.$nextTick(() => {
      if (!this.scrollsee) {
        this.scrollsee=new BSroll('.hswiper',{
          scrollY:true,
          click:'true'
        })
      }
    })
  },
    watch:{
      $route(val){
        this._showIndex(val)
      }
    },
  methods:{
    _showIndex(val){
      this.showObj=val.params.id
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem=37.5
.hcontent
  position fixed
  width (375/$rem)rem
  height (532/$rem)rem
  overflow hidden
  .hswiper
    width (375/$rem)rem
    height (532/$rem)rem
    position absolute
    .tuijian
      position relative
      .ceng1
        .ceng2
          .small
            width (345/$rem)rem
            height (136/$rem)rem
            padding (15/$rem)rem (16/$rem)rem
            margin (10/$rem)rem 0
            background-color #fff
            a
              position relative
              .info-left   
                float left     
                width (200/$rem)rem
                height (136/$rem)rem  
                .s-name
                  height (28/$rem)rem
                  margin-bottom (12/$rem)rem
                  //background-color blue
                .s-title
                  height (44/$rem)rem
                  margin (-4/$rem)rem 0 (8/$rem)rem
                  font-size (18/$rem)rem
                  //background-color blue
                .s-see
                  height (16/$rem)rem
                  //background-color blue
              .pic-right   
                float right     
                width (136/$rem)rem
                height (136/$rem)rem
                //background-color blue
          .big
            width (345/$rem)rem
            height (302/$rem)rem
            padding (15/$rem)rem (18/$rem)rem
            margin (10/$rem)rem 0
            background-color #fff
            .u-name
              height (28/$rem)rem
              margin-bottom (12/$rem)rem
              //background-color blue
            .u-title
              height (52/$rem)rem
              margin (-4/$rem)rem 0 (8/$rem)rem
              font-size (18/$rem)rem
              //background-color blue
            .u-pic
              height (188/$rem)rem
              margin-bottom (10/$rem)rem
              //background-color blue
            .u-see
              height (16/$rem)rem
              //background-color blue



</style>
