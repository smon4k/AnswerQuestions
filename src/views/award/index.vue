<template>
    <div class="app-container">
        <van-nav-bar
            title="我的奖励"
            left-text=""
            left-arrow
            right-text=""
            @click-left="onClickLeft"
        />
        <div class="attContainer">
            <van-tabs v-model="active" @change="tabsChange">
                <van-tab title="观看奖励">
                    <van-pull-refresh class="refresh" v-model="loading" @refresh="onRefresh">
                        <van-collapse v-model="activeName" accordion>
                                <van-list
                                    v-model="loading"
                                    :finished="finished"
                                    finished-text="没有更多了"
                                    v-if="list"
                                >
                                    <van-collapse-item :title="index" :name="index" v-for="(item, index) in list" :key="index">
                                        <!-- <template #title>
                                            <div>
                                                <span>{{index}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <span>参与人数：{{item.number_user}}</span> &nbsp;&nbsp;
                                                <span>奖励：{{toFixed(item.count_amount, 2)}} H2O</span> 
                                            </div>
                                        </template> -->
                                        <div class="attent-list">
                                            <ul>
                                                <li v-for="(items,indexs) in item.list" class="attent-item" :key="indexs">
                                                    <div class="left">
                                                        <!-- <img :src="items.avatar" alt="" width="30" @click="pushMyHomepage(items)"> -->
                                                        <span style="font-size:18px;font-weight:800;">{{items.ticket_name ? items.ticket_name : ''}}</span>
                                                        <!-- &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span>总数量：{{ items.count_num}}</span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span>总奖励：{{ items.count_award}} H2O</span> -->
                                                    </div>
                                                    <div class="list-item">
                                                        <!-- <div class="date">
                                                            <span>{{ item.date }}</span>
                                                        </div> -->
                                                        <div class="num-item">
                                                            <van-row>
                                                                <van-col span="12">浏览作品数量: {{items.info.browse_num}}</van-col>
                                                                <van-col span="12">奖励：{{toFixed(items.info.browse_amount, 2)}} H2O</van-col>
                                                            </van-row>
                                                            <van-row>
                                                                <van-col span="12">评论作品数量: {{ items.info.comment_num }}</van-col>
                                                                <van-col span="12">奖励：{{ toFixed(items.info.comment_amount, 2) }} H2O</van-col>
                                                            </van-row>
                                                            <van-row>
                                                                <van-col span="12">点赞作品数量: {{ items.info.like_num }}</van-col>
                                                                <van-col span="12">奖励：{{ toFixed(items.info.like_amount, 2) }} H2O</van-col>
                                                            </van-row>
                                                            <van-row>
                                                                <van-col span="12">打赏作品数量: {{ items.info.reward_num }}</van-col>
                                                                <van-col span="12">奖励：{{ toFixed(items.info.reward_amount, 2) }} H2O</van-col>
                                                            </van-row>
                                                        </div>
                                                    </div>
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
                <van-tab title="作品奖励">
                    <van-pull-refresh class="refresh" v-model="notesAwardLoading" @refresh="onNotesAwardRefresh">
                        <van-collapse v-model="activeName" accordion>
                                <van-list
                                    v-model="notesAwardLoading"
                                    :finished="notesAwardFinished"
                                    finished-text="没有更多了"
                                    v-if="list"
                                >
                                <van-collapse-item :title="index" :name="index" v-for="(item, index) in notesList" :key="index">
                                    <template #title>
                                        <div>
                                            <span>{{index}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>总分数：{{item.user_count_amount}}</span> &nbsp;&nbsp;
                                            <span>奖励：{{keepDecimalNotRounding(item.ave_award || 0, 2)}} H2O</span> 
                                        </div>
                                    </template>
                                    <div class="attent-list">
                                        <ul>
                                            <li v-for="(items,indexs) in item.list" class="attent-item" :key="indexs">
                                                <!-- <div class="left">
                                                    <img :src="items.cover" alt="" width="30" @click="pushHomepage(items)">
                                                    <span>{{items.title ? items.title : ''}}</span>
                                                </div> -->
                                                <van-row class="list-item" type="flex">
                                                    <!-- <div class="date">
                                                        <span>{{ item.date }}</span>
                                                    </div> -->
                                                    <van-col span="4" style="display:flex;">
                                                        <div class="left">
                                                            <img :src="items.cover" alt="" width="30" @click="pushHomepage(items)">
                                                            <!-- <div>{{items.title ? items.title : ''}}</div> -->
                                                        </div>
                                                    </van-col>
                                                    <van-col span="20" class="num-item">
                                                        <van-row>
                                                            <van-col span="12">浏览次数: {{items.browse_num}}</van-col>
                                                            <van-col span="12">分数：{{toFixed(items.browse_amount_award, 2)}}</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">评论次数: {{ items.comment_num }}</van-col>
                                                            <van-col span="12">分数：{{ toFixed(items.comment_amount_award, 2) }}</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">点赞次数: {{ items.like_num }}</van-col>
                                                            <van-col span="12">分数：{{ toFixed(items.like_amount_award, 2) }}</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">打赏数量: {{ items.reward_num }}</van-col>
                                                            <van-col span="12">分数：{{ toFixed(items.reward_amount_award, 2) }}</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">奖励</van-col>
                                                            <van-col span="12">{{ toFixed(items.ave_award || 0, 2) }} H2O</van-col>
                                                        </van-row>
                                                        <van-row>
                                                            <van-col span="12">是否结算</van-col>
                                                            <van-col span="12">{{ items.status == 1 ? '已结算' : '未结算' }}</van-col>
                                                        </van-row>
                                                    </van-col>
                                                </van-row>
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
            </van-tabs>
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
            activeName1: '1',
            notesLimit: 20,
            notesPage: 1,
            notesTotal: 0,
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
            const {userId, apiUrl} = this
            return {
                userId, apiUrl
            };
        },
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val.userId > 0) {
                    this.getAwardList();
                }
            }
        },
    },
    components: {
        
    },
    methods: {
        tabsChange(name, title) {
            console.log(name, title);
            this.finished = false;
            if(name == 0) {
                if(this.list.length <= 0) {
                    this.page = 1;
                    this.loading = true;
                    setTimeout(() => {
                        this.getAwardList();
                    }, 300)
                }
            }
            if(name == 1) {
                if(this.notesList.length <= 0) {
                    this.notesPage = 1;
                    this.notesAwardLoading = true;
                    setTimeout(() => {
                        this.getUserNotesAwardList();
                    }, 300)
                }
            }
        },
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
                };
            }
            if(this.userId) {
                axios.get(this.apiUrl + "/api/Award/getUserAwardList", {
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
                        } else {
                            this.finished = true;
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
        async getUserNotesAwardList(ServerWhere) { //获取我的作品奖励数据
            this.notesAwardFinished = true;
            console.log(new Date().getFullYear());
            if (this.notesAwardFinished) { //下拉刷新状态
                this.notesList = [];
                this.notesAwardFinished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.notesLimit,
                    page: this.notesPage,
                    userId: this.userId,
                };
            }
            axios.get(this.apiUrl + "/api/Award/getUserNotesAwardList", {
                params: ServerWhere
            }).then((json) => {
                console.log(json);
                if (json.code == 10000) {
                    if (json.data.lists) {
                        let list = (json.data && json.data.lists) || [];
                        if (this.notesPage <= 1) {
                            // console.log('首次加载');
                            this.notesList = list;
                            this.$forceUpdate();
                        } else {
                            // console.log('二次加载');
                            if (ServerWhere.page <= json.data.allpage) {
                                // console.log(ServerWhere.page, json.data.allpage);
                                this.notesList = [...this.notesList, ...list];
                                this.$forceUpdate();
                            }
                        }
                        if (ServerWhere.page >= json.data.allpage) {
                            // console.log(ServerWhere.page, json.data.allpage);
                            this.notesAwardFinished = true;
                        } else {
                            this.notesAwardFinished = false;
                        }
                        this.notesTotal = json.data.count;
                        this.notesPage += 1;
                    } else {
                        this.notesAwardFinished = true;
                    }
                    // console.log(this.notesList);
                } else {
                    this.$message.error("加载数据失败");
                }
                this.notesAwardLoading = false;
            }).catch((error) => {
                console.log(error);
                // this.$notify({ type: 'warning', message: error });
            });
            this.notesAwardLoading = false;
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
        onNotesAwardRefresh() {
            // 清空列表数据
            this.finished = false;
            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.notesPage = 1;
            this.notesAwardLoading = true;
            setTimeout(() => {
                this.getUserNotesAwardList();
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
    .app-container {
        /deep/ {
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
                background-color: #ebedf0;
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
                    width: 100%;
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
                        background: #fff; 
                        .list-item {
                            width: 90%;
                            text-align: center;
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
