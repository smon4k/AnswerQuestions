<template>
    <div class="container">
        <div class="main" :style="{backgroundSize:isMobel ? '100% 100%' : ''}">
            <div class="score-page">
                <!-- <p class="line1">您答对了{{score / 20}}题</p> -->
                <vue-arc-text class="line1" ref="arctext" :text="$t('question:answerResult-01', {num: score / 20})" :arc="300" :direction="1"></vue-arc-text>
                <vue-arc-text class="line2" ref="arctext" :text="$t('question:answerResult-02', {num: score})" :arc="300" :direction="1"></vue-arc-text>
                <p class="line3">{{ $t('question:answerResult-03', {num: times }) }}</p>
            </div>
            <div class="score-income">
                <!-- <span>本次答题总收益{{ capped_num }} SCT，您获得{{ award_rate }}%的收益{{ toFixed(award_num, 2) }}SCT</span> -->
                <span>{{ $t('question:answerResult-04', {capped_num: toFixed(capped_num, 2)}) }}</span>
                <br>
                <span>{{ $t('question:answerResult-05', {award_rate: award_rate, award_num: toFixed(award_num, 2)}) }}</span>
            </div>
            <br>
            <div class="resurrection" v-if="score < 100 && is_possible_resurrection"> 
                <div class="content">
                    <!-- <img src="@/assets/answer/esurgence-bg.png" class="image"> -->
                    <div>{{ toFixed(consumeNumber, 2) }}SCT{{ $t('question:buyToRevive') }}</div>
                    <!-- <van-row>
                        <van-col :span="12"></van-col>
                        <van-col :span="12"><div class="grid-content bg-purple-light"></div></van-col>
                    </van-row> -->
                    <div class="buy-button">
                        <van-button class="abandon" type="info" @click="giveUpResurrection()">{{ $t('question:abandon') }}</van-button>
                        <van-button class="buy" type="primary" @click="buyResurrection()">{{ $t('question:buy') }}</van-button>
                    </div>
                    <!-- <div class="buy-button"></div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { Dialog } from 'vant';
import { get, post } from "@/common/axios.js";
import VueArcText from '@/utils/vue-arc-text.js';
export default {
    name: 'home',
    data() {
        return {
            correct_num: '',
            score: 0,
            times: 0,
            is_possible_resurrection: 1,
            consumeNumber: 0,
            capped_num: 0, //总收益
            award_num: 0, //分配奖励数量
            award_rate: 0, //分配奖励比例
        }
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            userId:state=>state.base.userId,
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
        this.is_possible_resurrection = params.is_possible_resurrection;
        this.consumeNumber = params.consumeNumber;
        this.capped_num = params.capped_num;
        this.award_num = params.award_num;
        this.award_rate = params.award_rate;
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
        VueArcText
    },
    methods: {
        startAnswer() { //跳转我的订单也
            this.$router.push('/answer');
        },
        buyResurrection() {
            Dialog.confirm({
                title: '提示',
                message: '消耗 '+this.consumeNumber+' SCT 购买 1 次复活机会。',
            })
            .then(() => {
                const loading = this.$loading({
                    lock: true,
                    text: '支付中...',
                    spinner: 'van-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                get(this.apiUrl + "/Api/question/buyResurrection", {
                    userId: this.userId,
                }, (json) => {
                    if (json.code == 10000) {
                        console.log(json);
                        setTimeout(() => {
                            loading.close();
                            this.$router.push({
                                name: 'answer',
                                params: {
                                    is_relive: 1,
                                }
                            });
                        }, 2000);
                    } else {
                        this.$message.error("加载数据失败");
                    }
                });
            })
            .catch(() => {
                // on cancel
            });
        },
        giveUpResurrection() {
            this.$router.push('/');
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
                background-image: url("../../assets/answer/result-bg.png");
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
                    line-height: 10px;
                    margin-top: 100px;
                    // width: 100%;
                    // height: 100%;
                    // overflow: hidden;
                    // background: #fff url(../assets/home-bg.png) no-repeat center center/auto 100%;
                    span {
                        text-shadow: -3px 4px 0 #2230BE;
                        font-weight: 800;
                        color: #fff;
                        // font-size: 50px;
                        text-align: center;
                        font-size: 40px;
                        // transform-origin: center 5em !important;
                    }
                    // .line1,.line2 {
                    //     text-shadow: -3px 4px 0 #2230BE;
                    //     font-weight: 800;
                    // }
                    p {
                        color: #fff;
                        font-size: 40px;
                        text-align: center;
                        // padding: 5px 0;
                        // text-shadow: 1px 1px #005ece,2px 2px 005ece,3px 3px #005ece,4px 4px #005ece,5px 5px #005ece,6px 6px #005ece;
                    }
                    .line3 {
                        font-size: 20px;
                        font-weight: normal;
                        color: #fff;
                        font-weight: 800;
                        margin-top: 50px;
                        font-family: 'YS-HelloFont-BangBangTi';
                        text-shadow: -1px -1px 0 #F4DF6C, 1px 1px 0 #F4DF6C;
                    }
                    .line2 {
                        margin-top: 60px;
                    }
                }
                .score-income {
                    line-height: 30px;
                    text-align: center;
                    width: 80%;
                    margin: 0 auto;
                    span {
                        color: #fff;
                        font-size: 15px;
                    }
                }
                .resurrection {
                    text-align: center;
                    margin: 0 auto;
                    color: #fff;
                    font-size: 18px;
                    width: 70%;
                    height: 130px;
                    background: url("../../assets/answer/esurgence-bg.png") no-repeat center;
                    background-size: contain;
                    text-align: center;
                    position: relative;
                    .content {
                        position: relative;
                        top: 50%;
                        left: 50%;
                        right: 0;
                        transform: translate(-50%, -50%);
                    }
                    .buy-button {
                        margin-top: 10px;
                        .buy {
                            background: url("../../assets/answer/buy-bt-bg.png") no-repeat center;
                            background-size: contain;
                            text-align: center;
                            // background-color: #8C1AF5;
                            border: 0;
                            font-weight: 800;
                        }
                        .abandon {
                            width: 80px;
                            background-color: #3DBBE8;
                            border-radius: 5px;
                            color: #185DDA;
                            font-weight: 800;
                        }
                        button {
                            width: 100px;
                            height: 30px;
                            line-height: 5px;
                        }
                    }
                }
            }

        }
    }
</style>
