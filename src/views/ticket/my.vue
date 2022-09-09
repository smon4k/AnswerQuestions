<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="$t('question:myTicket')"
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
            <div v-if="list.length">
                <van-tabs v-model="active">
                    <van-tab :title="$t('question:bought')">
                        <div v-for="(item,index) in list" :key="index">
                            <van-cell-group inset v-if="item.is_ransom == 1">
                                <div class="list-bg"></div>
                                <!-- <img src="@/assets/answer/list-bg.png" alt="" class="list-bg"> -->
                                    <van-cell title="" value="" label="" class="top-title">
                                        <template #icon>
                                            <van-row>
                                                <van-col span="24" align="left">
                                                    <span style="font-weight: 800;">ID:{{item.id}}</span>
                                                    &nbsp;
                                                    <span style="color:#FDD95B;font-style:italic;font-weight: 800;">{{ item.name }}</span>
                                                </van-col>
                                                <van-col span="24" align="left">{{ item.time }}</van-col>
                                            </van-row>
                                        </template>
                                        <!-- <template #title>
                                            <div>{{ item.name }}</div>
                                        </template> -->
                                        <template #right-icon>
                                            <div v-if="item.is_activation" style="align-items: center;display: flex;">
                                                <!-- 开启门票 -->
                                                <img v-if="item.is_start == 0 && item.is_ransom == 1" src="@/assets/answer/start-ticket.png" alt="" width="50" @click="startTicket(item)">
                                                <!-- <van-button v-if="item.is_start == 0 && item.is_ransom == 1" :disabled="!item.is_activation" class="ticket-button" type="primary" @click="startTicket(item)" style="height:20px;">{{ $t('question:startTicket') }}</van-button> -->
                                                <!-- 已赎回 -->
                                                <!-- <van-tag plain v-else-if="item.is_ransom == 2" type="primary" style="height:20px" color="#7232dd">{{ $t('question:redeemed') }}</van-tag> -->
                                                <!-- 使用中 -->
                                                <img v-else src="@/assets/answer/using.png" alt="" width="40">
                                                <!-- <van-tag plain v-else type="primary" style="height:20px">{{ $t('question:using') }}</van-tag> -->
                                                <!-- &nbsp; -->
                                                <!-- 未作答 -->
                                                <img v-if="item.is_answer == 1" src="@/assets/answer/no-answer.png" alt="" width="50">
                                                <!-- 已作答 -->
                                                <img v-else src="@/assets/answer/answered.png" alt="" width="53">
                                                <!-- <van-tag plain color="#969799" text-color="#969799" style="height:20px"> -->
                                                    <!-- 未作答 -->
                                                    <!-- <span v-if="item.is_answer == 1">{{ $t('question:noAnswer') }}</span> -->
                                                    <!-- 已作答 -->
                                                    <!-- <span v-if="item.is_answer == 3">{{ $t('question:answered') }}</span> -->
                                                <!-- </van-tag> -->
                                            </div>
                                            <div v-else>
                                                <!-- 待激活 -->
                                                <span>{{ $t('question:hoursActivation', {time: item.activation_time}) }}</span>
                                                <img src="@/assets/answer/to-be-activated.png" alt="" width="50" style="vertical-align: middle;">
                                                <!-- <van-tag plain type="primary" style="height:20px" color="#7232dd">{{ $t('question:toBeActivated') }}</van-tag> -->
                                                <!-- <br> -->
                                                <!-- 24小时激活 -->
                                            </div>
                                            <!-- <van-switch v-model="ticketStatus" size="24" /> -->
                                        </template>
                                    </van-cell>
                                    <van-cell class="center-content">
                                        <template #title>
                                                <div>
                                                    <van-row class="item">
                                                        <van-col span="12" align="left">
                                                            <van-row>
                                                                <!-- <br> -->
                                                                <van-col align="right" span="10" class="left">{{$t('question:denomination')}}</van-col>
                                                                <!-- <br> -->
                                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.denomination, 2)}} USDT</van-col>
                                                            </van-row>
                                                        </van-col>
                                                        <van-col span="12" align="left">
                                                            <van-row>
                                                                <van-col align="right" span="10" class="left">{{$t('question:nominalInterestRate')}}</van-col> 
                                                                <!-- <br> -->
                                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.annualized, 2) }}%</van-col>
                                                            </van-row>
                                                        </van-col>
                                                        <!-- <van-col span="8">{{$t('question:rewardCap')}}</van-col> -->
                                                        <van-col span="12" align="right">
                                                            <van-row>
                                                                <!-- <br> -->
                                                                <van-col align="right" span="10" class="left">{{$t('question:buyPrice')}}</van-col>
                                                                <!-- <br> -->
                                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.price, 2)}} USDT</van-col>
                                                            </van-row>
                                                        </van-col>
                                                        <van-col span="12" align="right">
                                                            <van-row>
                                                                <van-col align="right" span="10" class="left">{{$t('question:realInterestRate')}}</van-col>
                                                                <!-- <br> -->
                                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ getRealInterestRate(item) }}</van-col>
                                                            </van-row>
                                                        </van-col>
                                                    </van-row>
                                                </div>
                                                <!-- <van-divider /> -->
                                            </template>
                                    </van-cell>
                                    <van-cell class="bottom-button">
                                        <template #title>
                                            <div>
                                                <van-row>
                                                    <van-col span="24" align="right">
                                                        <van-button v-if="item.is_ransom == 1" class="redeemed-button" type="primary" :disabled="item.insurance_amount <= 0" @click="startRansom(item)">{{ $t('question:redemption') }}</van-button>
                                                        <van-button v-else class="redeemed-button-disabled" disabled type="primary">{{ $t('question:redeemed') }}</van-button>
                                                        <van-button class="view-rewards" type="primary" @click="showTicketAward(item)">{{ $t('question:viewRewards') }}</van-button>
                                                    </van-col>
                                                </van-row>
                                            </div>
                                        </template>
                                    </van-cell>
                            </van-cell-group>
                        </div>
                    </van-tab>
                    <van-tab :title="$t('question:redeemed')">
                        <div v-for="(item,index) in list" :key="index">
                            <van-cell-group inset v-if="item.is_ransom == 2" >
                                <div class="list-bg"></div>
                                    <van-cell title="">
                                        <template #icon>
                                            <van-row>
                                                <van-col span="24" align="left">
                                                    <span style="font-weight: 800;">ID:{{item.id}}</span>
                                                    &nbsp;
                                                    <span style="color:#FDD95B;font-style:italic;font-weight: 800;">{{ item.name }}</span>
                                                </van-col>
                                                <van-col span="24" align="left">{{ item.time }}</van-col>
                                            </van-row>
                                        </template>
                                        <!-- <template #right-icon>
                                            <van-tag plain type="primary" style="height:20px" color="#7232dd">{{ $t('question:redeemed') }}</van-tag>
                                        </template> -->
                                    </van-cell>
                                    <van-cell class="center-content">
                                        <template #title>
                                                <div>
                                                    <van-row>
                                                        <!-- <van-col span="8">{{$t('question:annualized')}}</van-col> -->
                                                        <!-- <van-col span="8">{{$t('question:rewardCap')}}</van-col> -->
                                                        <van-col span="24">{{$t('question:denomination')}} {{ toFixed(item.price, 2)}} USDT</van-col>
                                                    </van-row>
                                                    <van-row>
                                                        <!-- <van-col span="8">{{ item.annualized }}</van-col> -->
                                                        <!-- <van-col span="8">{{ toFixed(item.capped, 2)}} SCT</van-col> -->
                                                        <!-- <van-col span="24">{{ toFixed(item.price, 2)}} USDT</van-col> -->
                                                    </van-row>
                                                </div>
                                            </template>
                                    </van-cell>
                                    <van-cell class="bottom-button">
                                        <template #title>
                                                <div>
                                                    <van-row>
                                                        <van-col span="24" align="right">
                                                            <van-button class="redeemed-button-disabled" disabled type="primary">{{ $t('question:redeemed') }}</van-button>
                                                            <van-button class="view-rewards" type="primary" @click="showTicketAward(item)">{{ $t('question:viewRewards') }}</van-button>
                                                        </van-col>
                                                    </van-row>
                                                </div>
                                            </template>
                                    </van-cell>
                            </van-cell-group>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <!-- <van-empty v-else description="还没有门票，快去购买吧" /> -->
            <van-empty v-else :description="$t('question:noTicket')">
                <van-button class="ticket-button"  type="info" @click="buyTicket()">{{ $t('question:ticketBuy') }}</van-button>
            </van-empty>
        </div>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#0094ff">{{ $t('question:DataLoading') }}</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
import { Dialog } from 'vant';
import Address from '@/wallet/address.json'
import {getSwapPoolsAmountsOut} from "@/wallet/serve";
export default {
    name: '',
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            limit: 20,
            page: 1,
            total: 0,
            radio: 0,
            ticketStatus: false,
            SCTPrice: 0,
            active: '1',
            loadingShow: true,
        }
    },
    created() {
        this.getSCTPrice();
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId) {
                    this.getMyTicketList();
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
            isMobel:state=>state.comps.isMobel,
        }),
        changeData() {
            const {address, userId} = this
            return {
                address, userId
            };
        },
    },
    components: {

    },
    methods: {
        async getSCTPrice() {
            const Gwei1 = 1000000000;
            let SCTPrice = await getSwapPoolsAmountsOut(
                Address.routerContractAddress,
                Address.SCT,
                Address.BUSDT
            );
            // console.log(SCTPrice);
            this.SCTPrice = this.keepDecimalNotRounding(SCTPrice, 4);
            // this.SCTPrice = 1;
        },
        startBuy(row) {
            this.$router.push({
                path:'/ticket/detail',
                query: {
                    type: 1,
                    ticket_id: row.id,
                }
            })
        },
        async getMyTicketList(ServerWhere) { //获取我的门票列表
            if (this.finished) { //下拉刷新状态
                this.list = [];
                this.finished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.page,
                    userId: this.userId,
                };
            }
            if(this.userId) {
                axios.get(this.apiUrl + "/Answer/Ticket/getMyTicketList", {
                    params: ServerWhere
                }).then((json) => {
                    this.loading = false;
                    console.log(json);
                    // console.log(this.address);
                    if (json.code == 10000) {
                        if(json.data && json.data.lists && json.data.lists.length > 0) {
                            if(this.page <= 1) {
                                this.list = json.data.lists;
                            } else {
                                if(ServerWhere.page <= json.data.allpage) {
                                    // console.log(ServerWhere.page, json.data.allpage);
                                    this.list.push(json.data.lists);
                                }
                            }
                        }
                        if(ServerWhere.page >= json.data.allpage) {
                            this.finished = true;
                        }
                        this.total = json.data.count;
                        this.page += 1;
                        console.log(this.list);
                    } else {
                        this.$notify({ type: 'warning', message: '加载数据失败' });
                    }
                    this.loadingShow = false;
                }).catch((error) => {
                    this.$notify({ type: 'warning', message: error });
                });
            }
            this.loading = false;
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        startTicket(row) {
            Dialog.confirm({
                title: '',
                message: '门票只能开启一张，确认切换吗？',
            })
            .then(() => {
                axios.get(this.apiUrl + "/Answer/Ticket/startTicket", {
                    params: {
                        userId: this.userId,
                        ticket_id: row.ticket_id,
                        user_ticket_id: row.id
                    }
                }).then((json) => {
                    if (json.code == 10000) {
                        this.$notify({ type: 'success', message: '门票开启成功' });
                        setTimeout(() => {
                            this.list = [];
                            this.page = 1;
                            this.getMyTicketList();
                        }, 1000)
                    } else {
                        this.$notify({ type: 'warning', message: '开启失败' });
                    }
                }).catch((error) => {
                    this.$notify({ type: 'warning', message: error });
                });
            }).catch(() => {
                // on cancel
                console.log('已取消切换');
            });
        },
        showTicketAward(row) { //查看奖励
            this.$router.push({
                path:'/ticket/my/award',
                query: {
                    type: 1,
                    user_ticket_id: row.id,
                    ticket_name: row.name,
                }
            })
        },
        startRansom(row) { //赎回
            console.log(row);
            this.$router.push({
                path:'/ticket/detail',
                query: {
                    type: 2,
                    ticket_id: row.ticket_id,
                    user_ticket_id: row.id,
                }
            })
        },
        buyTicket() { //门票购买
            this.$router.push('/ticket/list');
        },
        cealPaybackPeriod(row) { //实时计算回本周期
            let num = 10 / (row.capped * this.SCTPrice);
            return this.keepDecimalNotRounding(num, 1, true);
        },
        getRealInterestRate(row) { //计算实际利率 实际利率=（封顶Token * Token价格 * 365）/购票价格
            // console.log(row);
            let num = 0;
            num = ((Number(row.capped) * this.SCTPrice * 365) / Number(row.buy_price)) * 100;
            return this.toFixed(num, 2) + "%";
        }
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .container {
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
            .van-tabs__nav {
                background-color: transparent;
                .van-tab {
                    // color: #fff;
                }
                .van-tabs__line {
                    background-color: #FDD95B !important;
                }
                .van-tab--active {
                    color: #fff;
                }
            }
            .van-empty__description {
                color: #fff;
            }
            // background-color: #f5f7f8;
            // min-height: 100vh;
            .main {
                padding-bottom: 60px;
                .van-cell-group--inset {
                    height: 250px;
                    margin-top: 10px;
                    border: 2px solid #fff;
                    border-radius: 20px;
                    .van-cell {
                        // background-color: #05D2FA;
                        background-color: transparent;
                        // text-align: center;
                        color: #fff;
                        .van-cell__value {
                            display: none;
                        }
                        .van-cell__label {
                            color: #fff;
                        }
                    }
                    .van-cell::after {
                        // border-bottom: 0;
                    }
                }
                .van-button--primary {
                    border: 0;
                }
                .list-bg {
                    background: linear-gradient(#00C3E9, #2D50D2); /* 标准语法*/
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .top-title {
                    height: 63px;
                    .van-cell__title {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        flex-direction: column;
                        .van-row {
                            line-height: 45px;
                        }
                    }
                }
                .center-content {
                    height: 110px;
                    .van-cell__title {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        flex-direction: column;
                        .van-row {
                            line-height: 45px;
                        }
                    }
                    .left {
                        font-size: 16px;
                        // text-shadow: 1px 1px 0 #146092;
                        color: #f8f5ea; 
                    }
                    .right {
                        font-size: 14px;
                        // margin-left: 10px;
                        color: #fff; 
                    }
                }
                .bottom-button {
                    position: absolute;
                    bottom: 8px;
                }
                .ticket-button {
                    width: 90px;
                    height: 30px;
                    font-size: 10px;
                    border-radius: 20px;
                    background-color: #8C1AF5;
                    border: 0;
                }
                .redeemed-button {
                    width: 90px;
                    height: 40px;
                    background: url("../../assets/answer/redeemed-button.png") no-repeat center;
                    background-size: contain;
                    text-align: center;
                    // display: table;
                }
                .redeemed-button-disabled {
                    width: 90px;
                    height: 40px;
                    background: url("../../assets/answer/redeemed-button-disabled.png") no-repeat center;
                    background-size: contain;
                    text-align: center;
                    // display: table;
                }
                .view-rewards {
                    height: 40px;
                    background: url("../../assets/answer/view-rewards.png") no-repeat center;
                    background-size: contain;
                    text-align: center;
                    // display: table;
                }
                .buy-button {
                    width: 100px;
                    height: 30px;
                    font-size: 10px;
                    border-radius: 20px;
                    background-color: #8C1AF5;
                    border: 0;
                }
                .van-tag--primary.van-tag--plain {
                    color: #8C1AF5;
                }
            }
        }
    }
</style>
