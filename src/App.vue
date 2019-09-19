<template>
  <div>
    <router-view></router-view>
    <FootVav v-show="$route.meta.isShow"></FootVav>
  </div>
</template>

<script>
import FootVav from './component/FootNav/footnav'
export default {
  components:{
    FootVav
  },
  data() { 
    return {

    }
  }
 }
</script>

<style scoped>
</style>