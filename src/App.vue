<template>
  <div id="app">
    <div class="home" :style="{backgroundSize:isMobel ? '100% 100%' : ''}">
      <router-view  />
    </div>
  </div>
</template>

<script>
import { connectInfo,fetchAccountData } from '@/wallet/connect/metaMask'
import { mapState } from "vuex";
export default {
  name: 'App',
  // data(){
  //   return {
  //   }
  // },
  // computed:{
  //   key() {
  //     return this.$route.fullPath
  //   }
  // },
  mounted(){
    setTimeout(async()=>{
      await fetchAccountData()
      // connectInfo()
    }, 300)
  },
  computed: {
        ...mapState({
            isMobel:state=>state.comps.isMobel,
        }),
    },
}
</script>
<style lang="scss" scoped>
  .home {
    // background-image: url("./assets/answer/2.jpg");
    // background-repeat: no-repeat;
    // background-attachment: fixed;  /*关键*/
    // background-position: center;
    // top:0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // z-index: -10;
    // position: fixed;
  }
</style>
