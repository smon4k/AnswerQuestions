<template>
    <div class="container">
        <!-- <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div> -->
        <!-- <van-nav-bar
            :title="$t('question:DepositMoney')"
            left-text=""
            left-arrow
            right-text=""
            @click-left="backClinke"
        /> -->
        <div class="item">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <img src="@/assets/sct.png" width="30" height="30" alt="">
                    <span>SCT 活期理财</span>
                    <!-- <el-button style="float: right; padding: 3px 0;color:#fff;" type="text" @click="roterMyDeposit()">我的存币</el-button> -->
                </div>
                <div class="buy-box">
                    <el-row>
                        <el-col :span="12" align="center">
                            <p class="annualized-income desc">年化收益率</p>
                            <p class="balance">{{ toFixed(annualized_income || 0, 4) }}%</p>
                        </el-col>
                        <el-col :span="12" align="center">
                            <p class="annualized-income desc">可用余额</p>
                            <p class="balance">{{ toFixed(balance || 0, 4) }} SCT</p>
                        </el-col>
                        <el-col :span="12" align="center">
                            <p class="annualized-income desc">存款余额</p>
                            <p class="balance">{{ toFixed(total_invest || 0, 4) }} SCT</p>
                        </el-col>
                        <el-col :span="12" align="center">
                            <p class="annualized-income desc">利息</p>
                            <p class="balance">{{ toFixed(interest || 0, 4) }}</p>
                        </el-col>
                    </el-row>
                    <el-row class="content" :style="'width:'+isMobel ? '100%' : '80%'">
                        <!-- <el-col :span="12">
                            <p class="desc">可用余额</p>
                            <p class="balance">{{ toFixed(balance || 0, 4) }} SCT</p>
                        </el-col>
                        <el-col :span="8">
                            <p class="desc">净值</p>
                            <p class="balance">{{ keepDecimalNotRounding(networth || 0, 4) }}</p>
                        </el-col>
                        <el-col :span="12">
                            <p class="desc">日收益率</p>
                            <p class="balance gree">{{ toFixed(annualized_income / 365 || 0, 2) }}%</p>
                        </el-col>
                        <div v-if="type == 2">
                            <el-col :span="8">
                                <p class="desc">在投数量</p>
                                <p class="balance">{{ toFixed(total_invest | 0, 4) }} SCT</p>
                            </el-col>
                            <el-col :span="8">
                                <p class="desc">购买总份数</p>
                                <p class="balance">{{ toFixed(total_number || 0, 2) }} 份</p>
                            </el-col>
                        </div> -->
                        <el-col :span="24">
                            <el-input v-model="shareValue" placeholder="请输入SCT数量">
                                <el-select v-model="type" slot="prepend" placeholder="请选择">
                                    <el-option label="存款" value="1"></el-option>
                                    <el-option label="赎回" value="2"></el-option>
                                </el-select>
                                <template slot="append">
                                    <el-button v-if="type == 1" type="primary" @click="allfunBetClick()">全投</el-button>
                                    <el-button v-else type="primary" @click="allfunRedClick()">全部</el-button>
                                    <!-- <el-button type="primary" @click="allfunRedClick()">全部</el-button> -->
                                </template>
                            </el-input>
                        </el-col>
                        <el-col :span="24" align="left" style="margin-top:10px;margin-left:70px;">{{ getCountAmount() }} SCT</el-col>
                        <!-- <el-col :span="24" class="protocol">
                            <span>继续代表你同意</span>
                            <a href="/page/agreement.html#/?agreement=financing_market_stakingprotocol" target="_blank">《活期宝产品服务协议》</a>
                        </el-col> -->
                        <el-col :span="24">
                            <el-button v-if="type == 1" class="invest-but" type="primary" :loading="loading" @click="startInvestNow()" :disabled="is_bet">立即投资</el-button>
                            <el-button v-else class="invest-but" type="primary" :loading="loading" @click="startInvestNow()">立即赎回</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </div>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#0094ff">{{ $t('question:DataLoading') }}</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import { get, post, upload } from "@/common/axios.js";
import { mapGetters, mapState } from "vuex";
export default {
    name: '',
    data() {
        return {
            input: '0.000000',
            type: '1',
            product_id: 1,
            shareValue: '',
            shareValueName: '1',
            loading: false,
            networth: 0,
            is_bet: false,
            balance: 0,
            daily_income: 0.0000,
            total_number: 0.0000, //投资总份数
            total_invest: 0.0000, //投资数量
            interest: 0, //利息
            annualized_income: 0.0000, //预计年化收益
            loadingShow: false,
        }
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            isConnected:state=>state.base.isConnected,
            isMobel:state=>state.comps.isMobel,
            mainTheme:state=>state.comps.mainTheme,
            apiUrl:state=>state.base.apiUrl,
            isMobel:state=>state.comps.isMobel,
        }),
        changeData() {
            const {address, product_id} = this
            return {
                address, product_id
            };
        },

    },
    created() {
        try {
            let type = this.$route.query.type;
            if(type && type !== undefined) {
                this.type = type;
            }
            // let product_id = this.$route.query.product_id;
            // console.log(product_id);
            // if(product_id && product_id > 0) {
            //     this.product_id = product_id;
            // }
        } catch (err) {}
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                if(val.address && val.product_id) {
                    this.loadingShow = true;
                    this.getProductDetail();
                }
            }
        }
    },
    components: {

    },
    methods: {
        allfunBetClick() { //计算最大投注份额
            let num = 0;
            if(this.balance > 0) {
                num = this.balance / this.networth;
            }
            this.shareValue = num;
        },
        allfunRedClick() { //赎回 全部事件
            this.shareValue = this.total_number;
        },
        startInvestNow() { //立即投资或者赎回
            if(!this.address || this.address == undefined) {
                return false;
            }
            if(this.type == 1) { //投资的话
                if(this.balance <= 0) {
                    this.$message({
                        message: '余额不足',
                        type: 'warning'
                    });
                    return false;
                }
                let amount = this.getCountAmount();
                if(amount > this.balance) {
                    this.$message({
                        message: '超出可用余额',
                        type: 'warning'
                    });
                    return false;
                }
            }
            if(this.type == 2) { //赎回的话
                if(this.total_number <= 0) {
                    this.$message({
                        message: '投资份数不足',
                        type: 'warning'
                    });
                    return false;
                }
                if(this.shareValue > this.total_number) {
                    this.$message({
                        message: '已超过最大投资份数',
                        type: 'warning'
                    });
                    return false;
                }
            } 
            if(this.shareValue <= 0) {
                this.$message({
                    message: '请输入投资数量',
                    type: 'warning'
                });
                return false;
            }
            this.loading = true;
            setTimeout(() => {
                post(this.apiUrl + '/Answer/Product/startInvestNow', { 
                        address: this.address, 
                        product_id: this.product_id, 
                        number: this.shareValue,
                        type: this.type
                    }, (json) => {
                    this.loading = false;
                    console.log(json);
                    if (json && json.code == 10000) {
                        this.shareValue = 0;
                        this.$message({
                            type: 'success',
                            message: this.type == 1 ? '投资成功!' : '赎回成功!'
                        });
                        setTimeout(() => {
                            this.$router.push({path:'/my/deposit'})
                        }, 2000)
                    } else {
                        this.$message.error(json.msg);
                    }
                })
            }, 2000)
        },
        getProductDetail() { //获取产品详情数据
            get(this.apiUrl + "/Answer/Product/getProductDetail", {
                product_id: this.product_id,
                address: this.address
            }, json => {
                console.log(json);
                if (json.code == 10000) {
                    this.networth = json.data.networth;
                    this.balance = json.data.balance;
                    this.daily_income = json.data.daily_income;
                    this.total_number = json.data.total_number;
                    this.total_invest = json.data.total_invest;
                    this.annualized_income = json.data.annualized_income;
                    this.interest = json.data.interest;
                    // this.is_bet = json.data.is_bet ? true : false;
                } else {
                    this.$message.error("加载数据失败");
                }
                 this.loadingShow = false;
            });
        },
        getCountAmount() { //获取投资数量
           return this.toFixed(Number(this.shareValue) * Number(this.networth) || 0, 4);
        },
        backClinke() { //返回流动性列表
            this.$router.push({name:'bank', params:{tabActiveOne: 3}});
        },
        roterMyDeposit() {
            this.$router.push({path:'/my/deposit'});
        }
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .container {
        // padding-top: 50px;
        /deep/ {
            .bg {
                background-image: url("../../assets/answer/home-bg.png");
                background-repeat: no-repeat;
                background-attachment: fixed;  /*关键*/
                background-position: center;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -10;
                position: fixed;
                filter: blur(2px);
            }
            .van-nav-bar {
                background-color: transparent;
                .van-icon {
                    color: #fff;
                }
            }
            .van-nav-bar__title {
                color: #fff;
            }
            .el-breadcrumb {
                height: 25px;
                font-size: 16px;
            }
            .item {
                width: 90%;
                margin: 0 auto;
                margin-top: 20px;
                .box-card {
                    color: #fff;
                    background-color: #05D2FA;
                    border-radius: 24px;
                    border-color: #05D2FA;
                    .clearfix {
                        img {
                          vertical-align: middle;  
                        }
                    }
                    .el-card__body {
                        padding: 10px;
                    }
                    .el-card__header {
                        padding: 10px 20px;
                        // text-align: center;
                        // padding-bottom: 0;
                        border-color: #7f7f80;
                        color: #fff;
                    }
                    // max-width: 374px;
                    border-radius: 30px;
                    .desc {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 400;
                    }
                    .gree {
                        color: #F8D247;
                    }
                    .buy-box {
                        .annualized-income {
                            margin: 0;
                            // width: 380px;
                        }
                        .content {
                            text-align: center;
                            margin: 0 auto;
                            .el-input__inner {
                                height: 60px;
                                // border-top-left-radius: 30px;
                                // border-bottom-left-radius: 30px;
                            }
                            .el-input__inner:focus {
                                border-color: #a0abc0;
                            }
                            .protocol {
                                font-size: 12px;
                                line-height: 50px;
                                text-align: center;
                                // width: 50%;
                                span {
                                    color: #a0abc0;
                                }
                            }
                            .invest-but {
                                margin-top: 20px;
                                font-size: 16px;
                                font-weight: 600;
                                height: 48px;
                                width: 80%;
                                border-radius: 30px;
                                background-color: #8C1AF5;
                                border-color: #8C1AF5;
                            }
                            .el-input-group__prepend {
                                width: 35px;
                                // border-radius: 30px;
                                border-top-right-radius: 0;
                                border-bottom-right-radius: 0;
                            }
                            .el-input-group__append {
                                // border-radius: 30px;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                            }
                        }
                        .balance {
                            font-size: 13px;
                        }
                        .rate {
                            border-bottom: 1px solid #eceef2;
                            color: #F8D247;
                            font-size: 20px;
                            font-weight: 700;
                            margin: 0 auto;
                            padding-bottom: 10px;
                            // width: 380px;
                        }
                    }
                }
            }
        }
    }
</style>
<style>
    .el-scrollbar {
        background-color: #fff;
    }

</style>
