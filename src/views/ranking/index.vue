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
        <div class="attContainer">
            <div class="title">{{ $t('question:ranking') }}</div>
            <!-- <van-tabs @click="selectPage" v-model="tabIndex">
                <van-tab title="我的邀请"> -->
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
                                                        <van-col span="24">{{ $t('question:Score') }}: {{ item.score }}</van-col>
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
            invitemePage: 0,
            iinvitePage: 0,
            total: 0,
            tabIndex: 0,
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
            const {address, apiUrl} = this
            return {
                address, apiUrl
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
                if(val.address) {
                    this.getDataList();
                }
            }
        },
    },
    components: {
        
    },
    methods: {
        async getDataList(ServerWhere) { //获取我邀请的数据
            if (this.finished) { //下拉刷新状态
                this.tableData = [];
                this.finished = false;
            }
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.limit,
                    page: this.iinvitePage + 1,
                    address: this.address,
                };
            }
            if(this.address) {
                axios.get(this.apiUrl + "/Answer/question/getUserTodayLeaderboardList", {
                    params: ServerWhere
                }).then((json) => {
                    this.loading = false;
                    console.log(json);
                    // console.log(this.address);
                    if (json.code == 10000) {
                        if(json.data && json.data.lists && json.data.lists.length > 0) {
                            if(this.iinvitePage <= 1) {
                                this.tableData = json.data.lists;
                            } else {
                                if(ServerWhere.page <= json.data.allpage) {
                                    // console.log(ServerWhere.page, json.data.allpage);
                                    this.tableData.push(json.data.lists);
                                }
                            }
                        }
                        if(ServerWhere.page >= json.data.allpage) {
                            this.finished = true;
                        }
                        this.total = json.data.count;
                        this.iinvitePage += 1;
                        // console.log(this.invitemeList);
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
            this.invitemePage = 0;
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
            .attContainer {
                // width: 100%;
                // min-height: 100vh;
                // background-color: #ebedf0;
                // padding-top: 10px;
                width: 90%;
                height: 80vh;
                margin: 0 auto;
                background-color: #fff;
                margin-top: 80px;
                // border-radius: 30px;
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
            }
        }
    }
</style>
