<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            title="P2E"
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
                <van-tab :title="$t('question:tickets')">
                    <van-cell-group inset v-for="(item,index) in tableData" :key="index">
                        <van-cell>
                            <template #title>
                                <span class="custom-title">{{ item.name }}</span>
                                <!-- <van-tag type="danger">标签</van-tag> -->
                            </template>
                        </van-cell>
                        <van-cell>
                        <template #title>
                                <div class="custom-title">{{$t('question:sellingPrice')}}：{{ toFixed(item.price, 2) }} USDT</div>
                                <div class="custom-title">{{$t('question:annualized')}}：{{ toFixed(item.annualized, 2) }} %</div>
                                <!-- <div class="custom-title">{{$t('question:realTimePaybackCycle')}}：{{ cealPaybackPeriod(item) }} 天</div> -->
                                <div class="custom-title">{{$t('question:rewardCap')}}：{{ toFixed(item.capped, 2)}} H2O</div>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <van-button class="buy-button" type="primary" @click="startBuy(item)">{{$t('question:buy')}}</van-button>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-tab>
                <van-tab :title="$t('question:award')" to="/award/list"></van-tab>
                <van-tab :title="$t('question:myTicket')" to="/ticket/my/list"></van-tab>
            </van-tabs>
        </div>
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
            H2OPrice: 0,
        }
    },
    created() {
        this.getListData();
        this.getH2OPrice();
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
            axios.get(this.apiUrl + "/Answer/Ticket/getTicketList", {
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
            }).catch((error) => {
                this.$notify({ type: 'warning', message: error });
            });
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        cealPaybackPeriod(row) { //实时计算回本周期
            let num = Number(row.price) / (row.capped * this.H2OPrice);
            return this.keepDecimalNotRounding(num, 1, true);
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
