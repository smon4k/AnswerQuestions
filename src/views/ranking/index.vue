<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="$t('question:TodayLeaderboard')"
            left-text=""
            left-arrow
            right-text=""
            @click-left="onClickLeft"
        />
        <div class="generalStatistics">
            <div class="box">
                <van-row>
                    <van-col span="12" align="center">
                        <span>TVL</span><br>
                        <span>{{ count_sell_number }} USDT</span>
                    </van-col>
                    <van-col span="12" align="center">
                        <span>APR</span><br>
                        <span>{{ annualized_avg * 100 }}%</span>
                    </van-col>
                </van-row>
                <van-divider />
                <van-row>
                    <van-col span="8" align="center">
                        <span>参与答题用户数</span><br>
                        <span>{{ answer_count_user }}</span>
                    </van-col>
                    <van-col span="8" align="center">
                        <span>共完成答题总数</span><br>
                        <span>{{ answer_count }}</span>
                    </van-col>
                    <van-col span="8" align="center">
                        <span>共答对总数</span><br>
                        <span>{{ answer_correct_count }}</span>
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="attContainer">
            <div class="title">{{ $t('question:ranking') }}</div>
            <!-- <van-tabs @click="selectPage" v-model="tabIndex">
                <van-tab title="我的邀请"> -->
                    <van-row class="sort">
                        <van-col span="6" align="center">
                            <span @click="getActiveTime('d')" :class="[{'active':activeTime === 'd'}]">今日</span>
                        </van-col>
                        <van-col span="6" align="center">
                            <span @click="getActiveTime('w')" :class="[{'active':activeTime === 'w'}]">本周</span>
                        </van-col>
                        <van-col span="6" align="center">
                            <span @click="getActiveTime('m')" :class="[{'active':activeTime === 'm'}]">本月</span>
                        </van-col>
                        <van-col span="6" align="center">
                            <span @click="getActiveTime('1')" :class="[{'active':activeTime === '1'}]">总榜</span>
                        </van-col>
                    </van-row>
                    <van-pull-refresh class="refresh" v-model="loading" @refresh="onRefresh">
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            :finished-text="$t('question:noMore')"
                            v-if="tableData.length"
                        >
                            <div class="attent-list">
                                <ul>
                                    <li v-for="(item,index) in tableData" class="attent-item" :key="index">
                                        <div class="list-item">
                                            <div class="num-item">
                                                <van-row type="flex" justify="center">
                                                    <van-col span="4" style="display: flex;align-items: center;">
                                                        <span>{{ index + 1 }}</span>&nbsp;&nbsp;
                                                        <img :src="item.avatar" alt="" width="30" @click="pushHomepage(item)">
                                                        &nbsp;&nbsp;
                                                        <span>{{ item.nickname ? item.nickname : 'Unnamed'}}</span>
                                                    </van-col>
                                                    <van-col span="20" class="score" align="right">
                                                        <van-col span="24">
                                                            <div>{{ $t('question:NumberOfAnswers') }}: {{ item.number_answers }}</div>
                                                            <div>{{ $t('question:Score') }}: {{ item.score }} 分</div>
                                                            <div>{{ $t('question:TotalRevenue') }}: {{ item.award_num }} H2O</div>
                                                        </van-col>
                                                    </van-col>
                                                </van-row>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </van-list>
                        <van-empty v-else :description="$t('question:nothing')" />
                    </van-pull-refresh>
                <!-- </van-tab> -->
                 <!-- <van-tab title="邀请我的">

                 </van-tab> -->
            <!-- </van-tabs> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: '',
    data() {
        return {
            invitemeList: [],
            tableData: [],
            loading: false,
            finished: false,
            limit: 20,
            invitemePage: 1,
            iinvitePage: 1,
            total: 0,
            tabIndex: 0,
            activeTime: 'd',
            count_sell_number: 0,
            annualized_avg: 0,
            answer_count_user: 0,
            answer_count: 0,
            answer_correct_count: 0
        }
    },
    created() {

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
            const {address, userId, apiUrl} = this
            return {
                address, userId, apiUrl
            };
        },
        reAddress(){
            return window.origin + `/#/regist?re=${this.address}`
        }
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.address || val.userId) {
                    this.getDataList();
                    this.getCountRankingData();
                }
            }
        },
    },
    components: {
        
    },
    methods: {
        getActiveTime(name) { //按照本周本月排序
            this.activeTime = name;
            this.iinvitePage = 1;
            let ServerWhere = {
                limit: this.limit,
                page: this.iinvitePage,
                userId: this.userId,
                times: name,
            };
            this.getDataList(ServerWhere);
        },
        getCountRankingData() {
            axios.get(this.apiUrl + "/Answer/question/getCountRankingData", {
                params: {
                    userId: this.userId,
                }
            }).then((json) => {
                console.log(json);
                if (json.code == 10000) {
                    this.count_sell_number = json.data.count_sell_number;
                    this.annualized_avg = json.data.annualized_avg;
                    this.answer_count_user = json.data.answer_count_user;
                    this.answer_count = json.data.answer_count;
                    this.answer_correct_count = json.data.answer_correct_count;
                }
            }).catch((error) => {
                this.$notify({ type: 'warning', message: error });
            });
        },
        async getDataList(ServerWhere) { //获取我邀请的数据
            this.finished = true;
            if (this.finished) { //下拉刷新状态
                this.tableData = [];
                this.finished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.iinvitePage,
                    userId: this.userId,
                    times: this.activeTime,
                };
            }
            if(this.userId) {
                axios.get(this.apiUrl + "/Answer/question/getUserTodayLeaderboardList", {
                    params: ServerWhere
                }).then((json) => {
                    console.log(json);
                    // console.log(this.address);
                    if (json.code == 10000) {
                        if (json.data.lists) {
                            let list = (json.data && json.data.lists) || [];
                            if(this.iinvitePage <= 1) {
                                this.tableData = list;
                            } else {
                                if(ServerWhere.page <= json.data.allpage) {
                                    // console.log(ServerWhere.page, json.data.allpage);
                                    // this.tableData = [...this.tableData, ...list];
                                    this.tableData.push(list);
                                }
                            }
                            if(ServerWhere.page <= json.data.allpage) {
                                this.finished = true;
                            } else {
                                this.finished = false;
                            }
                            this.total = json.data.count;
                            this.iinvitePage += 1;
                        }
                        // console.log(this.invitemeList);
                    } else {
                        this.$notify({ type: 'warning', message: '加载数据失败' });
                    }
                    this.loading = false;
                }).catch((error) => {
                    this.$notify({ type: 'warning', message: error });
                });
            }
            this.loading = false;
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.iinvitePage = 1;
            this.loading = true;
            setTimeout(() => {
                this.getDataList();
            }, 300)
        },
        getAddressString(address) {
            return address.substring(0, 7) + "***" + address.substring(address.length - 3)
        },
        selectPage(name, title) {
            console.log(name, title);
            let ServerWhere = [];
            this.list = [];
            if(name == 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.iinvitePage,
                    userId: this.userId,
                    is_reward: 1
                };
                if(this.iinviteList.length <= 0) {
                    this.getDataList(ServerWhere);
                }
            }
        },
        copySuccess(){
            this.$notify({ type: 'success', message: '复制成功' });
        },
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .container {
        /deep/ {
            position: fixed;
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
            // padding: 0 10px 0 10px;
            .van-nav-bar {
                position: fixed;
                top: 0;
                width: 100%;
            }
            .van-tabs__nav {
                // background-color: transparent;
            }
            .van-tabs__wrap {
                // top: 50px;
                position: fixed;
                z-index: 1;
                width: 100%;
            }
            .van-tabs__content {
                padding-top: 50px;
            }
            width: 100%;
            // position: absolute;
            // overflow: hidden;
            .generalStatistics {
                width: 90%;
                // height: 80vh;
                margin: 0 auto;
                background-color: #fff;
                margin-top: 80px;
                border-radius: 10px;
                font-size: 14px;
                .box {
                    padding: 10px;
                    .van-divider {
                        margin: 10px 0;;
                    }
                }
            }
            .attContainer {
                // width: 100%;
                // min-height: 100vh;
                // background-color: #ebedf0;
                // padding-top: 10px;
                width: 90%;
                height: 65vh;
                margin: 0 auto;
                background-color: #fff;
                margin-top: 10px;
                border-radius: 10px;
                overflow: auto;
                // padding-bottom: 50px;
                .refresh {
                    // height: 100vh;
                    // padding-bottom: 50px;
                    .van-pull-refresh__track {
                        width: 100%;
                    }
                }
                .content {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title {
                    // width: 90%;
                    // margin: 0 auto;
                    height: 30px;
                    line-height: 30px;
                    font-size: 0.26rem;
                    color: #9c9d9e;
                    // margin-left: 0.39rem;
                    background-color: #ebedf0;
                    padding-left: 20px;
                }
                .attent-list {
                    width: 90%;
                    font-size: 13px;
                    margin: 0 auto;
                    ul > li {
                        list-style: none;
                    }
                    .attent-item {
                        padding: 10px;
                        margin-bottom: 10px;
                        margin-top: 10px;
                        // padding-right: 15px;
                        // display: flex;
                        flex-direction: row;
                        background: #fff; 
                        border-bottom: 0.5px solid #969799;
                        .list-item {
                            .date {
                                font-weight: 500;
                                line-height: 30px;
                                height: 30px;
                            }
                            .num-item {
                                line-height: 20px;
                                .score {
                                    display: flex;
                                    justify-content: space-around;
                                    flex-direction: column;
                                }
                            }
                        }
                        .van-divider {
                            line-height: 15px;
                            margin: 5px 0;
                        }
                    }
                }
                .sort {
                    padding-top: 10px;
                    span {
                        padding: 10px;
                        color: #646566;
                    }
                    .active {
                        color: #323233;
                        font-weight:500;
                    }
                }
            }
        }
    }
</style>
