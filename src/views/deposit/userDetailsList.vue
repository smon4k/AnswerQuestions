<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            :title="'我的历史净值'"
            left-text=""
            left-arrow
            right-text=""
            @click-left="backClinke"
        />
        <div class="main">
            <div v-if="tableData.length">
                <el-descriptions :colon="false" :border="false" :column="1" title="" v-for="(item, index) in tableData" :key="index">
                    <el-descriptions-item label="日期">{{ item.date }}</el-descriptions-item>
                    <el-descriptions-item label="账户余额(USDT)">{{ toFixed(item.account_balance || 0, 4) }}</el-descriptions-item>
                    <el-descriptions-item label="净值">{{ keepDecimalNotRounding(item.networth || 0, 4) }}</el-descriptions-item>
                    <el-descriptions-item label="总收益(USDT)">{{ toFixed(item.total_revenue || 0, 4) }}</el-descriptions-item>
                    <el-descriptions-item label="日收益(USDT)">{{ toFixed(item.daily_income || 0, 4) }}</el-descriptions-item>
                    <el-descriptions-item label="日收益率">{{ toFixed(item.daily_rate_return || 0, 2) }}%</el-descriptions-item>
                    <el-descriptions-item label="总收益率">{{ toFixed(item.total_revenue_rate || 0, 2) }}%</el-descriptions-item>
                    <el-descriptions-item label="日均收益率">{{ toFixed(item.daily_arg_rate || 0, 2) }}%</el-descriptions-item>
                    <el-descriptions-item label="日均年化收益">{{ toFixed(item.daily_arg_annualized || 0, 2) }}%</el-descriptions-item>
                </el-descriptions>
            </div>
            <div v-else>
                <el-empty description="没有数据"></el-empty>
            </div>
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
            product_id: 0,
            currPage: 1, //当前页
            pageSize: 20, //每页显示条数
            total: 1, //总条数
            loading: false,
            finished: false,
            PageSearchWhere: [],
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
        changeData() {
            const {address, product_id} = this
            return {
                address, product_id
            };
        },

    },
    created() {
        try {
            let product_id = this.$route.query.product_id;
            if(product_id && product_id > 0) {
                this.product_id = product_id;
            }
        } catch (err) {}
    },
    watch: {
        changeData: {
            immediate: true,
            handler(val){
                if(val.address && val.product_id) {
                    this.loadingShow = true;
                    this.getMyProductDetailsList();
                }
            }
        }
    },
    components: {

    },
    methods: {
        buyClick(row, type) {
            this.$router.push({
                path:'/financial/currentDetail',
                query: {
                    type: type
                }
            })
        },
        getMyProductDetailsList(ServerWhere) {
            if (!ServerWhere || ServerWhere == undefined || ServerWhere.length <= 0) {
                ServerWhere = {
                    limit: this.pageSize,
                    page: this.currPage,
                    address: this.address,
                    product_id: this.product_id,
                };
            }
            get(this.apiUrl + "/Answer/Product/getMyProductUserDetailsList", ServerWhere, json => {
                if (json.code == 10000) {
                    this.tableData = json.data.lists;
                    this.total = json.data.count;
                } else {
                    this.$message.error("加载数据失败");
                }
            });
            this.loadingShow = false;
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
            .el-breadcrumb {
                height: 25px;
                font-size: 16px;
            }
            .el-table {
                font-size: 16px;
            }
            .el-descriptions {
                margin-bottom: 20px;
                .el-descriptions__body {
                    background-color: #05D2FA;
                    padding: 20px;
                    border-radius: 20px;
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
</style>
