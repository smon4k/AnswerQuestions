<template>
    <div class="app-wrapper">
        <!-- <sidebar /> -->
        <!-- <headerNav /> -->
        <div class="appmain-container">
            <AppMain/>
        </div>
        <!-- <footerNav v-if="$route.meta.isBottomNav" /> -->
        <div v-if="$route.path !== '/home'">
            <img style="width: 4rem;height: 4rem;position: fixed;bottom: 5rem;right: 0.5rem;z-index: 9999;" @click="pushShare()" src="@/assets/answer/share.png" />
            <img style="width: 4rem;height: 4rem;position: fixed;bottom: 1rem;right: 0.5rem;z-index: 9999;" @click="pushHomePage()" src="@/assets/answer/home-page.png" />
        </div>
        <div v-else>
            <img style="width: 4rem;height: 4rem;position: fixed;bottom: 1rem;right: 0.5rem;z-index: 9999;" @click="pushShare()" src="@/assets/answer/share.png" />
        </div>
    </div>
</template>
<script>
import sidebar from './components/sidebar.vue'
import headerNav from './components/headerNav.vue'
import AppMain from './components/AppMain.vue'
import footerNav from './components/footer'
import { mapGetters, mapState } from 'vuex'
import NativeShare from 'nativeshare'
export default {
    name:'Layout',
    components:{sidebar , headerNav, AppMain, footerNav},
    created(){
        this.$store.commit('copyDefaultState')
    },
    computed:{
        ...mapGetters([
            'pendingOrderAmount',
            'successOrderAmount',
            'failedOrderAmount'
        ]),
        ...mapState({
            SuccessHash:state=>state.base.tradeStatus.SuccessHash,
            FailedHash:state=>state.base.tradeStatus.FailedHash,
            userDenyId:state=>state.base.tradeStatus.userDenyId,
            domainHostAddress:state=>state.base.domainHostAddress,
            errMessage:state=>state.base.errMessage,
        })
    },
    watch:{
        pendingOrderAmount:{
            handler(val){
                console.log(val);
                if(val){
                    this.$notify({
                        type: 'primary',
                        dangerouslyUseHTMLString:true,  
                        title: 'Trading...',
                        message: `${val} Processing`,
                        duration: 6000
                    });
                }
            }
        },
        SuccessHash:{
            handler(val){
                console.log(val);
                if(val){
                    this.$notify({
                        title: 'Success!',
                        dangerouslyUseHTMLString:true,  
                        message: `<a href="${this.domainHostAddress + '' + val}" target="_blank">View on Explorer</a>`,
                        type: 'success',
                        duration: 6000
                    });
                }
            }
        },
        FailedHash:{
            handler(val){
                console.log(val);
                if(val){
                    this.$notify({
                        title: 'Failed!',
                        dangerouslyUseHTMLString:true,  
                        message: this.errMessage || `<a href="${this.domainHostAddress + '' + val}" target="_blank">View on Explorer</a>`,
                        type: 'warning',
                        duration: 6000
                    });
                    if(this.errMessage){
                        this.$store.commit('setErrMessage' , '')
                    }
                }
            }
        },
        userDenyId:{
            handler(val){
                console.log('userDenyId' , val);
                if(val){
                    
                    this.$notify({
                        title: 'Failed!',
                        message: `Refuse`,
                        type: 'warning',
                        duration: 6000
                    });
                    
                }
            }
        }
    },
    methods: {
        pushHomePage() {
            this.$router.push("/"); 
        },
        pushShare() { //分享功能
          const self = this
            var nativeShare = new NativeShare({
                appId: '',
                timestamp: '',
                nonceStr: '',
                signature: '',
            });
            // 设置分享文案
            nativeShare.setShareData({
                icon: 'https://www.futu.win/log.png',
                link: 'https://www.futu.win',
                title: '一站到底',
                desc: '一站到底',
            })
            // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
            try {
              nativeShare.call('wechatFriend')
              // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
              // 类似的命令下面有介绍
              console.log('支持')
            } catch(err) {
              // 如果不支持，你可以在这里做降级处理
              self.$toast('不支持该浏览器自动分享,请您手动分享')
            }
        },
    }
}
</script>