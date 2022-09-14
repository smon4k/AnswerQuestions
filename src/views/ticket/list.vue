<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="$t('nav:tickets')"
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
            <van-tabs v-model="cardActive">
                <van-tab :title="$t('question:buyTickets')">
                    <van-cell-group inset v-for="(item,index) in tableData" :key="index">
                        <div class="list-bg"></div>
                        <!-- <img src="@/assets/answer/list-bg.png" alt="" > -->
                        <van-cell class="top-title">
                            <template #title>
                                <span style="color:#FDD95B;font-style:italic;font-weight: 800;">{{ item.name }}</span>
                                <!-- <van-tag type="danger">标签</van-tag> -->
                                <!-- 限时折扣 -->
                                <div class="tag" v-if="item.is_discount && (item.discount_status == 2 || item.discount_status == 1)">{{ $t('question:LimitDiscounts') }}</div>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <div class="custom-title">
                                    <van-row>
                                        <van-col span="12" align=”left“>
                                            <van-row>
                                                <van-col align="right" span="10" class="left">{{ $t('question:denomination') }}</van-col>
                                                <!-- <br> -->
                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.denomination, 2) }} USDT</van-col>
                                            </van-row>
                                        </van-col>
                                        <van-col span="12" align=”left“>
                                            <van-row>
                                                <van-col align="right" span="10" class="left">{{ $t('question:nominalInterestRate') }}</van-col>
                                                <!-- <br> -->
                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.annualized, 2) }} %</van-col>
                                            </van-row>
                                        </van-col>
                                    </van-row>
                                    <van-row>
                                        <van-col span="12" align="right">
                                            <van-row>
                                                <van-col align="right" span="10" class="left">{{ $t('question:buyPrice') }}</van-col>
                                                <!-- <br> -->
                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ toFixed(item.price, 2) }} USDT</van-col>
                                            </van-row>
                                        </van-col>
                                        <van-col span="12" align="left">
                                            <van-row>
                                                <van-col align="right" span="10" class="left">{{ $t('question:realInterestRate') }}</van-col>
                                                <!-- <br> -->
                                                <van-col align="left" span="14" class="right">&nbsp;&nbsp;{{ getRealInterestRate(item) }}</van-col>
                                            </van-row>
                                        </van-col>
                                    </van-row>
                                </div>

                                <!-- 折扣价 -->
                                 <div class="custom-discount-title" v-if="item.is_discount && (item.discount_status == 2 || item.discount_status == 1)">
                                    <van-divider style="width:100%;margin:0 auto;height:10px;" />
                                    <!-- <br> -->
                                    <van-row style="padding-top:15px;">
                                        <van-col span="12" align="center">
                                            <van-row>
                                                <van-col align="center" class="left">{{ $t('question:DiscountStartTime') }}</van-col>
                                                <br>
                                                <van-col align="center" class="right">{{ item.start_time }}</van-col>
                                            </van-row>
                                        </van-col>
                                        <van-col span="12" align="center">
                                            <van-row>
                                                <van-col align="right" class="left">{{ $t('question:DiscountEndTime') }}</van-col>
                                                <br>
                                                <van-col align="right" class="right">{{ item.end_time }}</van-col>
                                            </van-row>
                                        </van-col>
                                    </van-row>
                                    <br>
                                    <van-row style="padding-bottomo:15px;">
                                        <van-col span="12" align="left">
                                            <van-row>
                                                <van-col span="10" align="right" class="left">{{ $t('question:DiscountPrice') }}</van-col>
                                                <!-- <br> -->
                                                <van-col span="14" align="left" class="right">&nbsp;&nbsp;{{ toFixed(item.discount_price, 2) }} USDT</van-col>
                                            </van-row>
                                        </van-col>
                                        <van-col span="12" align="left">
                                            <van-row>
                                                <van-col span="10" align="right" class="left">{{ $t('question:Discount') }}</van-col>
                                                <!-- <br> -->
                                                <van-col span="14" align="left" class="right">&nbsp;&nbsp;{{ toFixed(item.discount, 2) }} 折</van-col>
                                            </van-row>
                                        </van-col>
                                    </van-row>
                                 </div>
                                <!-- <div class="custom-title">{{$t('question:rewardCap')}}：{{ toFixed(item.capped, 2)}} SCT</div> -->
                            </template>
                        </van-cell>
                        <van-cell align="right">
                            <template #title>
                                <div>
                                    <van-button class="buy-button" type="primary" @click="startBuy(item)">{{$t('question:buy')}}</van-button>
                                </div>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
                <!-- <van-tab :title="$t('question:award')" to="/award/list"></van-tab> -->
                <van-tab :title="$t('question:myTicket')" to="/ticket/my/list"></van-tab>
            </van-tabs>
        </div>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#fff">{{ $t('question:DataLoading') }}</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
import Address from '@/wallet/address.json'
import {getSwapPoolsAmountsOut} from "@/wallet/serve";
export default {
    name: '',
    data() {
        return {
            tableData: [],
            pageSize: 1000,
            currPage: 1,
            total: 0,
            cardActive: 0,
            SCTPrice: 0,
            loadingShow: false,
        }
    },
    created() {
        this.getListData();
        this.getSCTPrice();
    },
    async mounted() {
        console.log("111");
    },
    activated() {
        this.cardActive = 0;
    },
    watch: {

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
            const {address} = this
            return {
                address
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
            console.log("SCTPrice", this.SCTPrice);
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
        getListData() {
            let ServerWhere = {
                limit: this.pageSize,
                page: this.currPage,
            };
            this.loadingShow = true;
            axios.get(this.apiUrl + "/Api/Ticket/getTicketList", {
                params: ServerWhere
            }).then((json) => {
                this.loading = false;
                console.log(json);
                // console.log(this.address);
                if (json.code == 10000) {
                    if(json.data && json.data.lists && json.data.lists.length > 0) {
                        if(this.currPage <= 1) {
                            this.tableData = json.data.lists;
                        } else {
                            if(ServerWhere.page <= json.data.allpage) {
                                // console.log(ServerWhere.page, json.data.allpage);
                                this.tableData.push(json.data.lists);
                            }
                        }
                    }
                    console.log(this.tableData);
                } else {
                    this.$notify({ type: 'warning', message: '加载数据失败' });
                }
                this.loadingShow = false;
            }).catch((error) => {
                this.$notify({ type: 'warning', message: error });
            });
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        cealPaybackPeriod(row) { //实时计算回本周期
            let num = Number(row.price) / (row.capped * this.SCTPrice);
            return this.keepDecimalNotRounding(num, 1, true);
        },
        getRealInterestRate(row) { //计算实际利率 实际利率=（封顶Token * Token价格 * 365）/购票价格
            console.log(row);
            let num = 0;
            let price = row.price;
            if(row.is_discount && (row.discount_status == 2 || row.discount_status == 1)) {
                price = row.discount_price;
            }
            num = ((Number(row.capped) * this.SCTPrice * 365) / Number(price)) * 100;
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
                // filter: blur(2px);
            }
            .van-tab {
                // color: #fff;
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
            .van-tabs__wrap {
                height: 40px;
            }
            .van-tabs__nav {
                background-color: transparent;
                .van-tabs__nav--card {
                    margin: 0;
                    height: 40px;
                }
                .van-tab--active {
                    color: #fff;
                }
                .van-tabs__line {
                    background-color: #FDD95B !important;
                }
            }
            .van-empty__description {
                color: #fff;
            }
            // background-color: #f5f7f8;
            // min-height: 90vh;
            .main {
                width: 100%;
                height: 100vh;
                margin: 0 auto;
                // background-color: #fff;
                // margin-top: 80px;
                // border-radius: 30px;
                overflow: auto;
                // padding-bottom: 60px;
                .list-bg {
                    background: linear-gradient(#00C3E9, #2D50D2); /* 标准语法*/
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .van-cell-group--inset {
                    margin-top: 10px;
                    border: 2px solid #fff;
                    border-radius: 20px;
                    .van-cell {
                        // text-align: center;
                        // background: linear-gradient(#00C3E9, #2D50D2);
                        background-color: transparent;
                        color: #fff;
                        border-bottom: 0;
                        .van-cell__value {
                            display: none;
                        }
                    }
                    .van-cell::after {
                        // border-bottom: 0;
                    }
                }
                .custom-title {
                    line-height: 60px;
                    .left {
                        font-size: 15px;
                        // text-shadow: 1px 1px 0 #146092;
                        color: #f8f5ea; 
                        // border: 1px solid red;
                    }
                    .right {
                        font-size: 14px;
                        // margin-left: 1px;
                        color: #fff; 
                        // border: 1px solid red;
                    } 
                }
                .custom-discount-title {
                    .left {
                        font-size: 16px;
                        // text-shadow: 1px 1px 0 #146092;
                        color: #f8f5ea; 
                        // border: 1px solid red;
                    }
                    .right {
                        font-size: 14px;
                        // margin-left: 10px;
                        color: #fff; 
                        // border: 1px solid red;
                    }
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
                    height: 134px;   
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
                .bottom-button {
                    position: absolute;
                    bottom: 15px;
                }

                .buy-button {
                    width: 90px;
                    height: 40px;
                    background: url("../../assets/answer/redeemed-button.png") no-repeat center;
                    background-size: contain;
                    text-align: center;
                    // width: 100px;
                    // height: 30px;
                    // font-size: 10px;
                    // border-radius: 20px;
                    // background-color: #8C1AF5;
                    border: 0;
                }
            }
            .tag{
                position: absolute;
                right: 0;
                top: 0;
                border-radius: 0px 5px 0px 15px;
                color: #fff;
                padding: 2px 15px;
                font-size: 15px;
                line-height: 30px;
                background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), transparent) var(--bg, #EA3447);
                background-blend-mode: soft-light;
            }
        }
    }
</style>
