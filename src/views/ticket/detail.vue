<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="type == 1 ? $t('question:ticketBuy') : $t('question:ticketRedemption')"
            left-text=""
            left-arrow
            right-text=""
            @click-left="onClickLeft"
        />
        <div class="main">
            <!-- <van-row class="header" @click="cardClick()">
                <van-col :span="24">
                    <div class="title">强力推荐</div>
                </van-col>
            </van-row> -->
            <van-cell-group inset>
                <van-cell>
                    <template #title>
                        <span class="custom-title">{{ ticketDetail.name }}</span>
                        <!-- <van-tag type="danger">标签</van-tag> -->
                    </template>
                </van-cell>
                <van-cell>
                   <template #title>
                        <div>
                            <van-row>
                                <van-col span="12">{{ $t('question:nominalInterestRate') }}</van-col>
                                <!-- <van-col span="12">奖励封顶</van-col> -->
                                <van-col span="12">{{ $t('question:realInterestRate') }}</van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12">{{ toFixed(ticketDetail.annualized, 2) }}%</van-col>
                                <!-- <van-col span="12">{{ toFixed(ticketDetail.capped, 2)}} H2O</van-col> -->
                                <van-col span="12">{{ getRealInterestRate(ticketDetail)}}</van-col>
                            </van-row>
                        </div>
                        <van-divider style="width:80%;margin:0 auto;height:10px;border-color:#A79BA9;" />
                        <div v-if="type == 1">
                            <van-row>
                                <van-col span="12">
                                    <span v-if="ticketDetail.is_discount && ticketDetail.discount_status == 2">{{ $t('question:DiscountPrice') }}</span>
                                    <span v-else>{{ $t('question:denomination') }}</span>
                                </van-col>
                                <van-col span="12">USDT {{ $t('question:Balance') }}</van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12">
                                    <div v-if="ticketDetail.is_discount &&  ticketDetail.discount_status == 2">{{ toFixed(ticketDetail.discount_price, 2) }} USDT</div>
                                    <div v-else>{{ toFixed(ticketDetail.price, 2) }} USDT</div>
                                </van-col>
                                <van-col span="12">{{ toFixed(swanlakeBalance, 2) }} USDT</van-col>
                            </van-row>
                        </div>
                        <div v-else>
                            <van-row>
                                <van-col span="12">{{ $t('question:buyPrice') }}</van-col>
                                <van-col span="12">{{ $t('question:denomination') }}</van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12">
                                    <div>{{ toFixed(ticketDetail.buy_price, 2) }} USDT</div>
                                </van-col>
                                <van-col span="12">{{ toFixed(ticketDetail.denomination, 2) }} USDT</van-col>
                            </van-row>
                        </div>
                    </template>
                </van-cell>
                <van-cell :border="false">
                    <template #title>
                        <span>{{ $t('question:Insurance') }}</span>
                        <van-radio-group v-if="type == 1" v-model="insurance_amount">
                            <van-cell-group class="insurance_cell_group">
                                <van-cell title="" clickable @click="insurance_amount = 7" :border="false">
                                    <template #title>
                                        <span>{{ $t('question:Insurance-Premium') }}{{ cealBenefits(7) }} U(7% {{$t('question:Insurance-fare')}} )</span><br>
                                        <span>{{ $t('question:Insurance-02-70') }}</span>
                                    </template>
                                    <template #right-icon>
                                        <van-radio :name="7" />
                                    </template>
                                </van-cell>
                                <van-cell title="" clickable @click="insurance_amount = 10">
                                    <template #title>
                                        <span>{{ $t('question:Insurance-Premium') }}{{ cealBenefits(10) }} U(10%{{$t('question:Insurance-fare')}})</span><br>
                                        <span>{{ $t('question:Insurance-02-100') }}</span>
                                    </template>
                                    <template #right-icon>
                                        <van-radio :name="10" />
                                    </template>
                                </van-cell>
                                <van-cell title="" clickable @click="insurance_amount = 0" :border="false">
                                    <template #title>
                                        <span>{{ $t('question:Insurance-03') }}</span>
                                    </template>
                                    <template #right-icon>
                                        <van-radio :name="0" />
                                    </template>
                                </van-cell>
                            </van-cell-group>
                        </van-radio-group>
                        <div v-else style="height:30px;">
                            {{$t('question:redemptionPrice')}}：
                            <span v-if="ticketDetail.insurance_amount === 7">70% {{$t('question:repo')}}</span>
                            <span v-if="ticketDetail.insurance_amount === 10 || ticketDetail.insurance_amount === 0">{{$t('question:guaranteedRedemption')}}</span>
                        </div>
                        <br>
                        <van-button class="buy-button" v-if="type == 1" :loading="loading" :disabled="loading" type="primary" @click="startBuyClick()">{{$t('question:buyNow')}}</van-button>
                        <van-button class="buy-button" v-else :loading="loading" :disabled="ticketDetail.insurance_amount <= 0 || loading" type="info" @click="startRedemptionClick()">{{$t('question:redeemNow')}}</van-button>
                    </template>
                </van-cell>
            </van-cell-group>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
import { post } from "@/common/axios.js";
import { mapState } from "vuex";
import {getBalance, getGameFillingBalance, getSwapPoolsAmountsOut} from "@/wallet/serve";
import Address from '@/wallet/address.json'
import { Dialog } from 'vant';
export default {
    name: '',
    data() {
        return {
            loading: false,
            ticketDetail: [],
            pageSize: 1000,
            currPage: 1,
            total: 0,
            type: 1,
            ticketId: 0,
            purchas_insurance: false, //是否购买保险
            showPopover: false,
            insurance_amount: 0,
            usdtBalance: 0, //usdt 钱包余额
            swanlakeBalance: 0, //usdt可用余额 天鹅湖 平台余额 + 本地余额
            userTicketId: 0,
            H2OPrice: 0,
        }
    },
    created() {
        try {
            let type = this.$route.query.type;
            if(type && type !== undefined) {
                this.type = type;
            }
            const ticketId = this.$route.query.ticket_id;
            if(ticketId) {
                this.ticketId = ticketId;
            }
            const userTicketId = this.$route.query.user_ticket_id;
            if(userTicketId) {
                this.userTicketId = userTicketId;
            }
            this.getH2OPrice();
        } catch (err) {}
    },
    async mounted() {
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId && val.ticketId > 0) {
                    this.getTicketDetail();
                    this.getUserInfo();
                }
            }
        },
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            userId:state=>state.base.userId,
            isConnected:state=>state.base.isConnected,
            apiUrl:state=>state.base.apiUrl,
            gamesFillingAddress:state=>state.base.usdtFillingAddress,
            isMobel:state=>state.comps.isMobel,
        }),
        changeData() {
            const {address, userId, ticketId} = this
            return {
                address, userId, ticketId
            };
        },
    },
    components: {

    },
    methods: {
        async getH2OPrice() {
            const Gwei1 = 1000000000;
            let H2OPrice = await getSwapPoolsAmountsOut(
                Address.routerContractAddress,
                Address.H2O,
                Address.BUSDT
            );
            // console.log(H2OPrice);
            this.H2OPrice = this.keepDecimalNotRounding(H2OPrice, 4);
            console.log("H2OPrice", this.H2OPrice);
            // this.H2OPrice = 1;
        },
        getTicketDetail() {
            let url = this.apiUrl + "/Answer/Ticket/getTicketDetail";
            if(this.type == 1) {
                url = this.apiUrl + "/Answer/Ticket/getTicketDetail";
            } else {
                url = this.apiUrl + "/Answer/Ticket/getUserTicketDetail";
            }
            axios.get(url, {
                params: {
                    userId: this.userId,
                    ticketId: this.ticketId,
                    userTicketId: this.userTicketId,
                }
            }).then((json) => {
                console.log(json);
                // console.log(this.address);
                if (json.code == 10000) {
                    this.ticketDetail = json.data;
                } else {
                    this.$notify({ type: 'warning', message: '加载数据失败' });
                }
            }).catch((error) => {
                this.$notify({ type: 'warning', message: error });
            });
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        async getUserInfo() { //获取用户信息
            axios.get(this.apiUrl + "/Api/Depositwithdrawal/getFillingRecordUserInfo", {
                params: {
                    userId: this.userId,
                }
            }).then(async (json) => {
                console.log(json);
                if (json.code == 10000) {
                    let walletBalance = 0;
                    if(this.address) {
                        walletBalance = await getGameFillingBalance(18, this.gamesFillingAddress); //获取合约余额
                        console.log('链上USDT余额：', walletBalance);
                    }
                    this.swanlakeBalance = Number(json.data.local_balance) + Number(walletBalance);
                    console.log('平台USDT可用余额：', this.swanlakeBalance);
                    // this.usdtBalance = await getBalance(Address.BUSDT, 18); //获取USDT余额
                    // console.log('USDT 余额：', this.usdtBalance);
                } else {
                    console.log("get Data error");
                }
            }).catch((error) => {
                console.log(error);
                this.$notify({ type: 'danger', message: error });(error);
            });
        },
        startBuyClick() { //开始购买
            if(this.swanlakeBalance < this.ticketDetail.price) {
                Dialog.confirm({
                    message: 'USDT余额不足，请先充值！',
                })
                .then(() => {
                    this.$router.push('/usdt');
                })
                .catch(() => {
                    return false;
                });
                // this.$notify({ type: 'warning', message: 'USDT 余额不足' });
                return false;
            }
            if(this.userId <= 0) {
                this.$notify({ type: 'warning', message: '获取用户信息失败' });
                return false;
            }
            if(this.ticketId <= 0) {
                this.$notify({ type: 'warning', message: '获取门票信息失败' });
                return false;
            }
            // if(this.insurance_amount <= 0) {
            //     this.$notify({ type: 'warning', message: '请选择保险' });
            //     return false;
            // }
            this.loading = true;
            setTimeout(() => {
                post(this.apiUrl + '/Answer/Ticket/startBuyTicket', { 
                        userId: this.userId,
                        ticket_id: this.ticketId, 
                        insurance_amount: this.insurance_amount,
                        type: this.type
                }, (json) => {
                    this.loading = false;
                    console.log(json);
                    if (json && json.code == 10000) {
                        if(json.data) {
                            this.insurance_amount = '';
                            this.$notify({ type: 'success', message: '购买成功!' });
                            setTimeout(() => {
                                this.$router.push({path:'/ticket/my/list'})
                            }, 1500)
                        } else {
                            this.$notify({ type: 'warning', message: '购买失败'});
                        }
                    } else {
                        this.$notify({ type: 'warning', message: json.msg});
                    }
                })
            }, 2000)
        },
        startRedemptionClick() { //立即赎回
            if(this.userTicketId <= 0) {
                this.$notify({ type: 'warning', message: 'Error' });
                return false;
            }
            this.loading = true;
            setTimeout(() => {
                post(this.apiUrl + '/Answer/Ticket/startRedemptionTicket', { 
                        userId: this.userId,
                        ticket_id: this.ticketId, 
                        user_ticket_id: this.userTicketId,
                }, (json) => {
                    this.loading = false;
                    console.log(json);
                    if (json && json.code == 10000) {
                        this.insurance_amount = '';
                        this.$notify({ type: 'success', message: '赎回成功!' });
                        setTimeout(() => {
                            this.$router.push({path:'/ticket/my/list'})
                        }, 1500)
                    } else {
                        this.$notify({ type: 'warning', message: json.msg});
                    }
                })
            }, 2000)
        },
        cealBenefits(insurance_amount) {
            let num = Number(this.ticketDetail.price) * (Number(insurance_amount) / 100);
            return this.toFixed(num, 2);
        },
        getRealInterestRate(row) { //计算实际利率 实际利率=（封顶Token * Token价格 * 365）/购票价格
            // console.log(row);
            let num = 0;
            num = ((Number(row.capped) * this.H2OPrice * 365) / Number(row.buy_price)) * 100;
            return this.toFixed(num, 2) + "%";
        }
    },
    mounted() {

    },
}
</script>
<style>
    .van-popover {
        /* top: 200px !important;
        left: 20px !important; */
    }
    .van-popover__content {
        width: 60%;
        font-size: 15px;
    }
</style>
<style lang="scss" scoped>
    .container {
        /deep/ {
            .bg {
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
                filter: blur(2px);
            }
             .van-nav-bar {
                background-color: transparent;
                .van-nav-bar__left {
                    i {
                        color: #fff;
                        font-size: 20px;
                    }
                }
                .van-nav-bar__title {
                    color: #fff;;
                }
            }
            // background-color: #f5f7f8;
            // min-height: 100vh;
            // position: fixed;
            .main {
                padding-bottom: 60px;
                .buy-button {
                    width: 150px;
                    height: 35px;
                    font-size: 15px;
                    border-radius: 20px;
                    background-color: #8C1AF5;
                    border: 0;
                }
                .van-cell-group--inset {
                    margin-top: 10px;
                    .insurance_cell_group {
                        background-color: unset !important;
                        position: unset !important;
                        .van-cell-group {
                        }
                        .van-cell {
                            text-align: left !important;
                        }
                    }
                    .van-cell {
                        background-color: #AE8BF5;
                        color: #fff;
                        // padding: 20px;
                        text-align: center;
                        .van-cell__value {
                            // display: none;
                        }
                        .van-checkbox {
                            display: inline-flex;
                        }
                    }
                    .van-cell::after {
                        border-bottom: unset;
                    }
                }
            }
        }
    }
</style>
