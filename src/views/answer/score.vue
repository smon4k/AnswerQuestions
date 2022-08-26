<template>
    <div class="container">
        <div class="main" :style="{backgroundSize:isMobel ? '100% 100%' : ''}">
            <div class="score-page">
                <!-- <p class="line1">您答对了{{score / 20}}题</p> -->
                <p class="line1">{{ $t('question:answerResult-01', {num: score / 20}) }}</p>
                <p class="line2">{{ $t('question:answerResult-02', {num: score }) }}</p>
                <p class="line3">{{ $t('question:answerResult-03', {num: times }) }}</p>
            </div>
            <div class="score-income">
                <!-- <span>本次答题总收益{{ capped_num }} H2O，您获得{{ award_rate }}%的收益{{ toFixed(award_num, 2) }}H2O</span> -->
                <span>{{ $t('question:answerResult-04', {capped_num: capped_num, award_rate: award_rate, award_num: toFixed(award_num, 2)}) }}</span>
            </div>
            <div class="resurrection" v-if="score < 100 && is_possible_resurrection"> 
                <div>{{ toFixed(consumeNumber, 2) }} H2O {{ $t('question:buyToRevive') }}</div>
                <!-- <el-row>
                    <el-col :span="12"></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row> -->
                <div class="buy-button">
                    <el-button type="primary" round @click="buyResurrection()">{{ $t('question:buy') }}</el-button>
                    <el-button type="info" round @click="giveUpResurrection()">{{ $t('question:abandon') }}</el-button>
                </div>
                <!-- <div class="buy-button"></div> -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { Dialog } from 'vant';
import { get, post } from "@/common/axios.js";
export default {
    name: 'home',
    data() {
        return {
            correct_num: '',
            score: 0,
            times: 0,
            is_possible_resurrection: 0,
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

    },
    methods: {
        startAnswer() { //跳转我的订单也
            this.$router.push('/answer');
        },
        buyResurrection() {
            Dialog.confirm({
                title: '提示',
                message: '消耗 '+this.consumeNumber+' H2O 购买 1 次复活机会。',
            })
            .then(() => {
                const loading = this.$loading({
                    lock: true,
                    text: '支付中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                get(this.apiUrl + "/Answer/question/buyResurrection", {
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
                    line-height: 18px;
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
                        margin-top: 100px;
                    }
                }
                .score-income {
                    line-height: 20px;
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
                    width: 80%;
                    .buy-button {
                        margin-top: 10px;
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
