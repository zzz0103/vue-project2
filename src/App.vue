<template>
  <div>
    <router-view></router-view>
    <FootVav v-show="$route.meta.isShow"></FootVav>
  </div>
</template>

<script>
// import axios from 'axios'
import FootVav from './component/FootNav/footnav'

export default {
  components:{
    FootVav
  },
  data() { 
    return {

    }
  },
  mounted(){
    this.$store.dispatch('findtj')
  }
 }
</script>

<style scoped>
</style>