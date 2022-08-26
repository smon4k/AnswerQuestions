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
                                    <van-cell title="" value="" :label="item.time">
                                        <template #icon>ID: {{item.id}}</template>
                                        <template #title>
                                            <div>{{ item.name }}</div>
                                        </template>
                                        <template #right-icon>
                                            <van-button v-if="item.is_start == 0 && item.is_ransom == 1" class="ticket-button" type="primary" @click="startTicket(item)" style="height:20px;">{{ $t('question:startTicket') }}</van-button>
                                            <van-tag plain v-else-if="item.is_ransom == 2" type="primary" style="height:20px" color="#7232dd">{{ $t('question:redeemed') }}</van-tag>
                                            <van-tag plain v-else type="primary" style="height:20px">{{ $t('question:using') }}</van-tag>
                                            &nbsp;
                                            <van-tag plain color="#969799" text-color="#969799" style="height:20px">
                                                <span v-if="item.is_answer == 1">未作答</span>
                                                <span v-if="item.is_answer == 3">已作答</span>
                                            </van-tag>
                                            <!-- <van-switch v-model="ticketStatus" size="24" /> -->
                                        </template>
                                    </van-cell>
                                    <van-cell>
                                        <template #title>
                                                <div>
                                                    <van-row>
                                                        <van-col span="12">
                                                            <span>{{$t('question:nominalInterestRate')}}</span> 
                                                            <br>
                                                            <span>{{ toFixed(item.annualized, 2) }}%</span>
                                                        </van-col>
                                                        <!-- <van-col span="8">{{$t('question:rewardCap')}}</van-col> -->
                                                        <van-col span="12">
                                                            <span>{{$t('question:realInterestRate')}}</span>
                                                            <br>
                                                            <span>{{ getRealInterestRate(item) }}</span>
                                                        </van-col>
                                                        <van-col span="12">
                                                            <br>
                                                            <span>{{$t('question:denomination')}}</span>
                                                            <br>
                                                            <span>{{ toFixed(item.denomination, 2)}} USDT</span>
                                                        </van-col>
                                                        <van-col span="12">
                                                            <br>
                                                            <span>{{$t('question:buyPrice')}}</span>
                                                            <br>
                                                            <span>{{ toFixed(item.price, 2)}} USDT</span>
                                                        </van-col>
                                                    </van-row>
                                                </div>
                                                <van-divider />
                                                <div>
                                                    <van-row>
                                                        <van-col span="12">
                                                            <van-button v-if="item.is_ransom == 1" class="ticket-button" round type="info" :disabled="item.insurance_amount <= 0" @click="startRansom(item)">{{ $t('question:redemption') }}</van-button>
                                                            <van-button v-else class="ticket-button" disabled round type="info">{{ $t('question:redeemed') }}</van-button>
                                                        </van-col>
                                                        <van-col span="12">
                                                            <van-button class="ticket-button" round type="info" @click="showTicketAward(item)">{{ $t('question:viewRewards') }}</van-button>
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
                                    <van-cell title="" value="" :label="item.time">
                                        <template #icon>ID: {{item.id}}</template>
                                        <template #title>
                                            <div>{{ item.name }}</div>
                                        </template>
                                        <template #right-icon>
                                            <van-tag plain type="primary" style="height:20px" color="#7232dd">{{ $t('question:redeemed') }}</van-tag>
                                        </template>
                                    </van-cell>
                                    <van-cell>
                                        <template #title>
                                                <div>
                                                    <van-row>
                                                        <!-- <van-col span="8">{{$t('question:annualized')}}</van-col> -->
                                                        <!-- <van-col span="8">{{$t('question:rewardCap')}}</van-col> -->
                                                        <van-col span="24">{{$t('question:denomination')}}</van-col>
                                                    </van-row>
                                                    <van-row>
                                                        <!-- <van-col span="8">{{ item.annualized }}</van-col> -->
                                                        <!-- <van-col span="8">{{ toFixed(item.capped, 2)}} H2O</van-col> -->
                                                        <van-col span="24">{{ toFixed(item.price, 2)}} USDT</van-col>
                                                    </van-row>
                                                </div>
                                                <van-divider />
                                                <div>
                                                    <van-row>
                                                        <van-col span="12">
                                                            <van-button v-if="item.is_ransom == 1" class="ticket-button" round type="info" @click="startRansom(item)">{{ $t('question:redemption') }}</van-button>
                                                            <van-button v-else class="ticket-button" disabled round type="info">{{ $t('question:redeemed') }}</van-button>
                                                        </van-col>
                                                        <van-col span="12">
                                                            <van-button class="ticket-button" round type="info" @click="showTicketAward(item)">{{ $t('question:viewRewards') }}</van-button>
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
            H2OPrice: 0,
            active: '1',
        }
    },
    created() {
        this.getH2OPrice();
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
        async getH2OPrice() {
            const Gwei1 = 1000000000;
            let H2OPrice = await getSwapPoolsAmountsOut(
                Address.routerContractAddress,
                Address.H2O,
                Address.BUSDT
            );
            // console.log(H2OPrice);
            this.H2OPrice = this.keepDecimalNotRounding(H2OPrice, 4);
            // this.H2OPrice = 1;
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
            let num = 10 / (row.capped * this.H2OPrice);
            return this.keepDecimalNotRounding(num, 1, true);
        },
        getRealInterestRate(row) { //计算实际利率 实际利率=（封顶Token * Token价格 * 365）/购票价格
            // console.log(row);
            let num = 0;
            num = (Number(row.capped) * this.H2OPrice * 365) / Number(row.buy_price);
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
            .van-tabs__nav {
                background-color: transparent;
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
                .ticket-button {
                    width: 80px;
                    height: 30px;
                    font-size: 10px;
                    // border-radius: 20px;
                }
                .buy-button {
                    width: 100px;
                    height: 30px;
                    font-size: 10px;
                    border-radius: 20px;
                }
                .van-cell-group--inset {
                    margin-top: 10px;
                    .van-cell {
                        text-align: center;
                        .van-cell__value {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>
