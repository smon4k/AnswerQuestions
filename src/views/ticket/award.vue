<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="tickerName + $t('question:award')"
            left-text=""
            left-arrow
            right-text=""
            @click-left="onClickLeft"
        />
        <div class="attContainer">
            <van-pull-refresh class="refresh" v-model="loading" @refresh="onRefresh">
                <!-- <van-collapse v-model="activeName" accordion> -->
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            :finished-text="$t('question:noMore')"
                            v-if="list"
                        >
                            <!-- <van-collapse-item :title="item.date" :name="item.date" v-for="(item, index) in list" :key="index">
                                <template #title>
                                    <div>
                                        <span>{{index}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>参与人数：{{item.number_user}}</span> &nbsp;&nbsp;
                                        <span>奖励：{{toFixed(item.count_amount, 2)}} SCT</span>
                                    </div>
                                </template> -->
                                <div class="attent-list" v-for="(item, index) in list" :key="index">
                                    <ul>
                                        <li class="attent-item">
                                            <div class="list-item">
                                                <div class="date">
                                                    <span>{{ item.date }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span style="float:right;">{{ $t('question:award')}}：{{toFixed(item.award_num, 2)}} SCT</span>
                                                </div>
                                            </div>
                                            <!-- <van-divider :style="{ borderColor: '#c8c9cc' }" /> -->
                                        </li>
                                    </ul>
                                </div>
                            <!-- </van-collapse-item> -->
                        </van-list>
                        <van-empty v-else :description="$t('question:noReward')" />
                <!-- </van-collapse> -->
            </van-pull-refresh>
            <!-- <div class="title">每日奖励</div> -->
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
            list: [],
            notesList: [],
            loading: false,
            notesAwardLoading: false,
            notesAwardFinished: false,
            finished: false,
            limit: 20,
            page: 1,
            total: 0,
            active: 0,
            activeName: '1',
            notesLimit: 20,
            notesPage: 1,
            notesTotal: 0,
            userTicketId: 0,
            tickerName: '',
        }
    },
    created() {
        this.getDate();
        const userTicketId = this.$route.query.user_ticket_id;
        if(userTicketId) {
            this.userTicketId = userTicketId;
        }
        const ticketName = this.$route.query.ticket_name;
        if(ticketName) {
            this.tickerName = ticketName;
        }
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
            const {userId, apiUrl, userTicketId} = this
            return {
                userId, apiUrl, userTicketId
            };
        },
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId && val.userTicketId > 0) {
                    this.getAwardList();
                }
            }
        },
    },
    components: {
        
    },
    methods: {
        async getAwardList(ServerWhere) { //获取奖励列表
            if (this.finished) { //下拉刷新状态
                this.list = [];
                this.finished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.page,
                    userId: this.userId,
                    user_ticket_id: this.userTicketId,
                };
            }
            if(this.userId) {
                axios.get(this.apiUrl + "/Api/Ticket/getUserTicketTodayAward", {
                    params: ServerWhere
                }).then((json) => {
                    this.loading = false;
                    console.log(json);
                    // console.log(this.address);
                    if (json.code == 10000) {
                        if(json.data && json.data.lists) {
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
        onRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.page = 1;
            this.loading = true;
            setTimeout(() => {
                this.getAwardList();
            }, 300)
        },
        pushHomepage(item) { //跳转用户个人主页
            console.log(item);
            if (item.note_type == 1) {
                this.$router.push({
                name: "detailNotes",
                params: item,
                query: {
                    id: item.note_id,
                },
                });
            } else {
                this.$router.push({
                name: "detailVideo",
                params: item,
                query: {
                    id: item.note_id,
                },
                });
            }
        },
        getDate() {
            const nowDate = new Date();
            const date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth() + 1,
                date: nowDate.getDate(),
                hour: nowDate.getHours(),
                minute: nowDate.getMinutes(),
                second: nowDate.getSeconds(),
            }
            const newmonth = date.month>=10?date.month:'0'+date.month
            const day = date.date>=10?date.date:'0'+date.date
            this.activeName = date.year + "-" + newmonth + "-" + day;
        },
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
            .van-list {
                margin-top: 10px;
            }
            .van-nav-bar {
                position: fixed;
                top: 0;
                width: 100%;
            }
            width: 100%;
            // position: absolute;
            // overflow: hidden;
            .attContainer {
                margin-top: 50px;
                width: 100%;
                // height: calc(100vh - 50px);
                // padding-bottom: 50px;
                min-height: 100vh;
                // background-color: #ebedf0;
                .refresh {
                    // height: 100vh;
                    padding-bottom: 50px;
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
                    // width: 100%;
                    height: 30px;
                    line-height: 30px;
                    font-size: 0.26rem;
                    color: #9c9d9e;
                    // margin-left: 0.39rem;
                    background-color: #f5f8fa;
                    padding-left: 10px;
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
                        // display: flex;
                        flex-direction: row;
                        background: #05D2FA; 
                        color: #fff;
                        border-radius: 25px;
                        .list-item {
                            // width: 90%;
                            // text-align: center;
                            .date {
                                font-weight: 500;
                                line-height: 30px;
                                height: 30px;
                            }
                            .num-item {
                                line-height: 20px;
                            }
                            .left {
                                display: flex;
                                align-items: center;
                            }
                            // .van-col {
                            //     display: flex;
                            // }
                        }
                        .van-divider {
                            line-height: 15px;
                            margin: 5px 0;
                        }
                    }
                }
            }
        }
    }
</style>
