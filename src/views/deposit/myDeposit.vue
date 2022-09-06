<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="'我的存币'"
            left-text=""
            left-arrow
            right-text=""
            @click-left="backClinke"
        />
        <div class="main">
            <el-descriptions :colon="false" :border="false" :column="1" title="" v-for="(item, index) in tableData" :key="index">
                <el-descriptions-item label="产品名称">{{ item.name }}</el-descriptions-item>
                <el-descriptions-item label="总结余(USDT)">{{ toFixed(item.total_balance || 0, 4) }}</el-descriptions-item>
                <el-descriptions-item label="购买份数">{{ toFixed(item.total_number || 0, 4) }}</el-descriptions-item>
                <!-- <el-descriptions-item label="购    买时间">{{ item.time }}</el-descriptions-item> -->
                <el-descriptions-item label="净值">{{ keepDecimalNotRounding(item.networth || 0, 4) }}</el-descriptions-item>
                <el-descriptions-item label="昨日收益(USDT)">{{ toFixed(item.yest_income || 0, 2) }}</el-descriptions-item>
                <el-descriptions-item label="总收益率">{{ toFixed(item.total_rate || 0, 2) }}%</el-descriptions-item>
                <el-descriptions-item label="年化收益率">{{ toFixed(item.year_rate || 0, 2) }}%</el-descriptions-item>
                <el-descriptions-item>
                    <div class="operate">
                        <el-button size="mini" type="primary" @click="buyClick(item, 1)">购买</el-button>
                        <el-button size="mini" type="primary" @click="buyClick(item, 2)">赎回</el-button>
                        <el-button size="mini" type="primary" @click="incomeClick(item)">历史净值</el-button>
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </div>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#0094ff">{{ $t('question:DataLoading') }}</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { get } from "@/common/axios.js";
import Page from "@/components/Page.vue";
export default {
    name: '',
    data() {
        return {
            tableData: [],
            currPage: 1, //当前页
            pageSize: 20, //每页显示条数
            total: 100, //总条数
            loadingShow: false,
        }
    },
    computed: {
        ...mapState({
            address:state=>state.base.address,
            isConnected:state=>state.base.isConnected,
            isMobel:state=>state.comps.isMobel,
            mainTheme:state=>state.comps.mainTheme,
            apiUrl:state=>state.base.apiUrl,
        }),

    },
    created() {
    },
    watch: {
        isConnected: {
            immediate: true,
            handler(val){
                console.log(val);
                if(val) {
                    this.loadingShow = true;
                    this.getMyProductList();
                }
            }
        }
    },
    components: {
        "wbc-page": Page, //加载分页组件
    },
    methods: {
        buyClick(row, type) {
            this.$router.push({
                name:'/deposit',
                query: {
                    type: type,
                    product_id: row.product_id,
                }
            })
        },
        incomeClick(row) {
            this.$router.push({
                path:'/my/deposit/list',
                query: {
                    product_id: row.product_id,
                }
            })
        },
        getMyProductList(ServerWhere) {
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.pageSize,
                    page: this.currPage,
                    address: this.address,
                };
            }
            get(this.apiUrl + "/Answer/Product/getMyProductList", ServerWhere, json => {
                if (json.code == 10000) {
                    this.tableData = json.data.lists;
                    this.total = json.data.count;
                } else {
                    this.$message.error("加载数据失败");
                }
                this.loadingShow = false;
            });
        },
        limitPaging(limit) {
            //赋值当前条数
            this.pageSize = limit;
            if (
                this.PageSearchWhere.limit &&
                this.PageSearchWhere.limit !== undefined
            ) {
                this.PageSearchWhere.limit = limit;
            }
            this.getMyProductList(this.PageSearchWhere); //刷新列表
        },
        skipPaging(page) {
            //赋值当前页数
            this.currPage = page;
            if (
                this.PageSearchWhere.page &&
                this.PageSearchWhere.page !== undefined
            ) {
                this.PageSearchWhere.page = page;
            }
            this.getMyProductList(this.PageSearchWhere); //刷新列表
        },
        backClinke() { //返回流动性列表
            this.$router.go(-1);
            // this.$router.push({name:'bank', params:{tabActiveOne: 3}});
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
                filter: blur(2px);
            }
            .van-nav-bar {
                background-color: transparent;
                .van-icon {
                    color: #fff;
                }
            }
            .van-nav-bar__title {
                color: #fff;
            }
            .el-table {
                font-size: 16px;
            }
            .main {
                margin-top: 50px;
                .el-descriptions {
                    margin-bottom: 20px;
                    width: 90%;
                    margin: 0 auto;
                    .el-descriptions__body {
                        background-color: #05D2FA;
                        padding: 20px;
                        border-radius: 20px;
                        color: #fff;
                        .el-descriptions-item__container {
                            .el-descriptions-item__content {
                                display: unset;
                                text-align: right;
                                .operate {
                                    text-align: center;
                                    button {
                                        width: 80px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
