<template>
  <div class="person">
    <Header>
        <slot name="left">
      </slot>
      <div class="logo" slot="center">
        <img src="../../../public/images/logo.png" alt="">
      </div>
      <slot name="right">
      </slot>

    </Header>  
    <div class="person-page-conter" v-show="shownum===1">
      <div class="person-title">
      <img class="person-title" src="../../../public/images/person-title.png" alt="">
      </div>
      <div class="person-login">
        <div class="phone some" @click="shownum=2">手机号登录</div>
        <div class="email some" @click="shownum=3">邮箱账号登录</div>
        <div class="zhuce" >
          <span @click="shownum=4">手机号快捷注册></span>
        </div>
      </div>
      <div class="person-link">
        <div class="person-link-conter ">
          <div class="link">微信</div>
          <div class="link">QQ</div>
          <div class="link">微博</div>
        </div>
      </div>
    </div>
    <div class='phone-login' v-show="shownum===2">
        <div class="top">
          <img src="../../../public/images/person-title.png" alt="">
        </div>
        <div class="center">
          <form class="formTo" action="">
            <div class="infophone iphone">
              <input type="text" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required|phone'"/>
              <span style="color:red" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
            </div>
            <div class="phonepws iphone">
              <input type="text" placeholder="输入密码" v-model="pwd" name="pwd" v-validate="'required|pwd'"/>
              <span style="color:red" v-show="errors.has(('pwd'))">{{errors.first('pwd')}}</span>
            </div>
            <div class="error" style="color:red" v-show="mark" @click="closemark">账号或密码错误</div>
            <div class="dl-btn" @click="denglu">登录</div>
            
          </form>
        </div>
        <div class="bottom">
          <span class="otherway" @click="shownum=1">其他方式登录></span>
        </div>
    </div>
    <div class="email-login" v-show="shownum===3">
      <div class="top">
          <img src="../../../public/images/person-title.png" alt="">
        </div>
        <div class="center">
          <form class="formTo" action="">
            <div class="infophone iphone">
              <input type="text" placeholder="邮箱账号"/>
            </div>
            <div class="phonepws iphone">

              <input type="text" placeholder="输入密码"/>
            </div>
            <div class="phonemes iphone">
              <input type="text" placeholder="注册账号"/>
            </div>
            <div class="dl-btn ">登录</div>
          </form>
        </div>
        <div class="bottom">
          <span class="otherway" @click="shownum=1">其他方式登录></span>
        </div>
    </div>
    <div class='zhuce' v-show="shownum===4">
        <div class="top">
          <img src="../../../public/images/person-title.png" alt="">
        </div>
        <div class="center">
          <form class="formTo" action="">
            <div class="infophone iphone">
              <input type="text" placeholder="请输入手机号"/>
            </div>
            <div class="phonepws iphone">

              <input type="text" placeholder="输入短信密码"/>
            </div>
            <div class="phonemes iphone">
              <input type="text" placeholder="输入密码"/>
            </div>
            <div class="dl-btn ">注册</div>
          </form>
        </div>
        <div class="bottom">
          <span class="otherway" @click="shownum=1">其他方式登录></span>
        </div>
    </div>
  </div>   
</template>

<script>
import {reqLogin} from '../../api/api'
export default {
  data(){
    return{
      shownum:1,
      phone:'',
      pwd:'',
      mark:false
    }
  },
  methods:{
    async denglu(){
      let names
      const {phone,pwd} = this
      const resultLogin = await reqLogin()
      console.log(resultLogin)
      if(resultLogin.code===0){
        console.log(resultLogin.data.phone)
        console.log(phone)
        if(phone===resultLogin.data.phone&&pwd===resultLogin.data.pwd){
          console.log(111)
          names=[phone,pwd]
          const success=await this.$validator.validateAll(names)
          if(success){
            this.$router.replace('/')
          }
        }else{
          this.mark=true
        }
      }
  
    },
    closemark(){
      this.mark=false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
$rem =37.5
.person
  width (375/$rem)rem
  height (667/$rem)$rem
  overflow hidden
  //position relative
  .person-page-conter
    box-sizing border-box   
    .person-title
      position relative
      padding  (80/$rem)rem 0 (116/$rem)rem
      display flex
      justify-content center
      .person-title
        width (134/$rem)rem
        height (45/$rem)rem
        padding 0
    .person-login
      padding 0 (20/$rem)rem
      height (114/$rem)rem
      .some
        width (335/$rem)rem
        height (47/$rem)rem
        border 1px solid red
        margin-bottom (16/$rem)rem
        text-align center
        font-size (12/$rem)rem
        line-height (47/$rem)rem
      .phone
        background-color #DD1A21
        color #fff
      .email
        color red
      .zhuce
        text-align center
    .person-link
      position absolute
      bottom (44/$rem)rem
      width (375/$rem)rem
      height (20/$rem)rem
      display flex
      justify-content center
      .person-link-conter
        display flex  
        .link
          width (50/$rem)rem
          height (20/$rem)rem
          padding 0 (20/$rem)rem
          text-align center
          line-height (20/$rem)rem
          &:nth-child(2)
            border-left  1px solid #979797
            border-right  1px solid #979797
  .phone-login 
  .email-login
  .zhuce  
    .top
      width (375/$rem)rem
      height (32/$rem)rem
      margin-top (28/$rem)rem 
      display flex
      justify-content center
      align-items center
      img 
        width (96/$rem)rem
        height (32/$rem)rem 
    .center
      width (375/$rem)rem
      height (258/$rem)rem
      margin-top (20/$rem)rem 
      position relative
      .formTo
        width (375/$rem)rem
        height (258/$rem)rem
        display flex
        flex-direction column
        padding 0 (20/$rem)rem
        .iphone
          width (335/$rem)rem
          height (45.5/$rem)rem    
          border-bottom 1px solid #fff  
          input 
            list-style none 
            outline 0
            width (335/$rem)rem
            height (21.5/$rem)rem
            background-color #f6f6f6
            margin (12/$rem )rem 0
            font-size (16/$rem)rem      
        .dl-btn
          position absolute
          bottom (60/$rem)rem
          left 0
          width (335/$rem)rem
          height (45.5/$rem)rem
          background-color #DD1A21
          color #fff
          line-height (45.5/$rem)rem
          text-align center 
          margin  0 (20/$rem)rem
        .error
          width (335/$rem)rem
          height (21.5/$rem)rem
          background #ccc
          line-height (21.5/$rem)rem
          text-align center
          font-size (20/$rem)rem
    .bottom
      width (335/$rem)rem
      height (19/$rem)rem
      padding 0 (20/$rem)rem
      display flex
      align-items center
      justify-content center
      .otherway
        display block
        width (100/$rem)rem
        height (18/$rem)rem
        font-size (12/$rem)rem


</style>
