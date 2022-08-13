<template>
    <div class="container">
        <div class="main" :style="{backgroundSize:isMobel ? '100% 100%' : ''}">
            <div class="score-page">
                <p class="line1">您答对了{{score / 20}}题</p>
                <p class="line2">得到{{score}}分！</p>
                <p class="line3">用时{{times}}秒</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'home',
    data() {
        return {
            correct_num: '',
            score: 0,
            times: 0,
        }
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            isConnected:state=>state.base.isConnected,
            isMobel:state=>state.comps.isMobel,
            mainTheme:state=>state.comps.mainTheme,
            apiUrl:state=>state.base.apiUrl,
            userInfo:state=>state.base.userInfo,
        }),
        changeData() {
            const {address} = this
            return {
                address
            };
        },
    },
    created() {
        let params = this.$route.params;
        if(Object.keys(params).length==0) {
            this.$router.push('/');
        }
        this.correct_num = params.correct_num;
        this.score = params.score;
        this.times = params.times;
    },
    watch: {
        address: {
            immediate: true,
            async handler(val){
                if(val) {
                }
            }
        }
    },
    components: {

    },
    methods: {
        startAnswer() { //跳转我的订单也
            this.$router.push('/answer');
        }
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .container {
        /deep/ {
            .main {
                background-image: url("../../assets/answer/2.jpg");
                background-repeat: no-repeat;
                background-attachment: fixed;  /*关键*/
                background-position: center;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -10;
                position: fixed;
                .score-page {
                    line-height: 20px;
                    // width: 100%;
                    // height: 100%;
                    // overflow: hidden;
                    // background: #fff url(../assets/2.jpg) no-repeat center center/auto 100%;
                    p {
                        color: #fff;
                        font-size: 27px;
                        text-align: center;
                        // padding: 5px 0;
                        text-shadow: 2px 2px 2px #005ece;
                        font-weight: bold;
                    }
                    .line3 {
                        font-size: 20px;
                        font-weight: normal;
                        text-shadow: 1px 1px 0 #005ece;
                    }
                    .line1 {
                        margin-top: 180px;
                    }
                }
            }

        }
    }
</style>
