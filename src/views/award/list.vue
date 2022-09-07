<template>
    <div class="container">
        <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            title="P2E"
            left-text=""
            right-text=""
            @click-left="onClickLeft"
        />
        <div class="attContainer">
            <van-tabs v-model="cardActive">
                <van-tab :title="$t('question:tickets')" to="/ticket/list"></van-tab>
                <van-tab :title="$t('question:award')">
                    <van-pull-refresh class="refresh" v-model="loading" @refresh="onRefresh">
                        <van-collapse v-model="activeName" accordion>
                                <van-list
                                    v-model="loading"
                                    :finished="finished"
                                    :finished-text="$t('question:noMore')"
                                    v-if="list"
                                >
                                <van-collapse-item :title="index" :name="index" v-for="(item, index) in list" :key="index">
                                    <template #title>
                                        <div>
                                            <span>{{index}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>{{$t('question:userNumber')}}：{{item.number_user}}</span> &nbsp;&nbsp;
                                            <span>{{$t('question:award')}}：{{toFixed(item.count_amount, 2)}} SCT</span> 
                                        </div>
                                    </template>
                                    <div class="attent-list">
                                        <ul>
                                            <li v-for="(items,indexs) in item.list" class="attent-item" :key="indexs">
                                                <van-cell center title="" :value="$t('question:award')+ ': ' + items.count_award + ' SCT'">
                                                    <template #title>
                                                        <div style="display: flex;align-items: center;">
                                                            <img style="border-radius: 10%;height: 40px;width: 40px;" :src="items.avatar" alt="" width="30" @click="pushMyHomepage(itemss)">
                                                            <span>&nbsp;&nbsp;{{ items.nickname ? items.nickname : 'Unnamed'}}</span>
                                                        </div>
                                                    </template>
                                                </van-cell>
                                                <!-- <div class="left">
                                                    <span style="font-size:18px;font-weight:800;">{{items.ticket_name ? items.ticket_name : 'Unnamed'}}</span>
                                                </div>
                                                <div class="list-item">
                                                    <div class="date">
                                                        <span>{{ item.date }}</span>
                                                    </div>
                                                    <div class="num-item">
                                                        <van-row>
                                                            <van-col span="12">浏览作品数量: {{items.info.browse_num}}</van-col>
                                                            <van-col span="12">奖励：{{toFixed(items.info.browse_award, 2)}} SCT</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">评论作品数量: {{ items.info.comment_num }}</van-col>
                                                            <van-col span="12">奖励：{{ toFixed(items.info.comment_award, 2) }} SCT</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">点赞作品数量: {{ items.info.like_num }}</van-col>
                                                            <van-col span="12">奖励：{{ toFixed(items.info.like_award, 2) }} SCT</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">打赏作品数量: {{ items.info.reward_num }}</van-col>
                                                            <van-col span="12">奖励：{{ toFixed(items.info.reward_award, 2) }} SCT</van-col>
                                                        </van-row>
                                                    </div>
                                                </div> -->
                                                <van-divider :style="{ borderColor: '#c8c9cc' }" />
                                            </li>
                                        </ul>
                                    </div>
                                </van-collapse-item>
                                </van-list>
                                <van-empty v-else description="没有任何奖励哦" />
                        </van-collapse>
                    </van-pull-refresh>
                </van-tab>
                <van-tab :title="$t('question:myTicket')" to="/ticket/my/list"></van-tab>
            </van-tabs>
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
            notesLoading: false,
            finished: false,
            notesFinished: false,
            limit: 100000,
            page: 1,
            notesPage: 1,
            notesTotal: 0,
            activeName: '1',
            active: 0,
            cardActive: 1,
        }
    },
    created() {
        this.getDate();
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
            const {apiUrl, userId} = this
            return {
                apiUrl, userId
            };
        },
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                this.getAwardList();
            }
        },
    },
    components: {
        
    },
    methods: {
        tabsChange(name, title) {
            // console.log(name, title);
            if(name == 0) {
                if(this.list.length <= 0) {
                    this.finished = false;
                    this.page = 1;
                    this.loading = true;
                    setTimeout(() => {
                        this.getAwardList();
                    }, 300)
                }
            }
            if(name == 1) {
                if(this.notesList.length <= 0) {
                    this.notesFinished = false;
                    this.notesPage = 1;
                    this.notesAwardLoading = true;
                    setTimeout(() => {
                        this.getNotesAwardList();
                    }, 300)
                }
            }
        },
        async getAwardList(ServerWhere) { //获取总的消费者奖励排行
            this.finished = true;
            console.log(new Date().getFullYear());
            if (this.finished) { //下拉刷新状态
                this.list = [];
                this.finished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.page,
                };
            }
            axios.get(this.apiUrl + "/Answer/Award/getMiningRankingAwardList", {
                params: ServerWhere
            }).then((json) => {
                console.log(json);
                if (json.code == 10000) {
                    if (json.data && json.data.lists) {
                        let list = (json.data && json.data.lists) || [];
                        if (this.page <= 1) {
                            // console.log('首次加载');
                            this.list = list;
                            this.$forceUpdate();
                        } else {
                            // console.log('二次加载');
                            if (ServerWhere.page <= json.data.allpage) {
                                // console.log(ServerWhere.page, json.data.allpage);
                                this.list = [...this.list, ...list];
                                this.$forceUpdate();
                            }
                        }
                        if (ServerWhere.page >= json.data.allpage) {
                            // console.log(ServerWhere.page, json.data.allpage);
                            this.finished = true;
                        } else {
                            this.finished = false;
                        }
                        this.total = json.data.count;
                        this.page += 1;
                    } else {
                        this.list = [];
                        this.finished = true;
                    }
                    // console.log(this.list);
                } else {
                    this.$message.error("加载数据失败");
                }
                this.loading = false;
            }).catch((error) => {
                console.log(error);
                // this.$notify({ type: 'warning', message: error });
            });
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
        pushMyHomepage(item) {
            this.$router.push({
                name: 'my',
                params: {
                    userId: item.user_id
                }
            })
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
            // .van-nav-bar {
            //     position: fixed;
            //     top: 0;
            //     width: 100%;
            // }
            .van-tabs__wrap {
                height: 40px;
            }
            .van-tabs__content {
                width: 90%;
                margin: 0 auto;
                margin-top: 15px;
                .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
                    border-width: 0;
                }
            }
            .van-tabs__nav {
                background-color: transparent;
                .van-tabs__nav--card {
                    margin: 0;
                    height: 40px;
                }
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
            width: 100%;
            // position: absolute;
            // overflow: hidden;
            .attContainer {
                width: 100%;
                height: 80vh;
                margin: 0 auto;
                // background-color: #fff;
                // margin-top: 50px;
                // border-radius: 30px;
                overflow: auto;
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
                    font-size: 18px;
                    color: #9c9d9e;
                    // margin-left: 0.39rem;
                    background-color: #f5f8fa;
                    padding-left: 10px;
                }
                .avatar-item {
                    .left {
                        display: flex;
                        align-items: center;
                        span {
                            margin-left: 10px;
                        }
                        img {
                            border-radius: 10%;
                            height: 40px;
                            width: 40px;
                        }
                    }
                }
                .attent-list {
                    width: 100%;
                    font-size: 13px;
                    margin: 0 auto;
                    ul > li {
                        list-style: none;
                    }
                    .attent-item {
                        // padding: 10px;
                        // margin-bottom: 10px;
                        // display: flex;
                        flex-direction: row;
                        background: #fff; 
                        // margin-top: 10px;
                        .list-item {
                            // padding: 10px;
                            font-size: 13px;
                            width: 90%;
                            text-align: center;
                            margin: 0 auto;
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
                        }
                        .van-divider {
                            line-height: 15px;
                            margin: 5px 0;
                        }
                        .left {
                            display: flex;
                            align-items: center;
                            vertical-align: middle;
                            img {
                                border-radius: 10%;
                                height: 35px;
                                width: 35px;
                            }
                            span {
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
