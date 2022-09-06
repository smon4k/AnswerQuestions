<template>
    <div class="container">
        <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            title="银行"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onReturnLeft"
        />
        <div class="generalStatistics">
            <img src="@/assets/answer/ranking.png" class="image">
            <div class="box">
                <van-row>
                    <van-col span="8" align="center">
                        <img src="@/assets/usdt.png" alt="" width="25">
                        <br>
                        <span>{{ toFixed(USDTPlatformBalance, 4) }} USDT</span>
                    </van-col>
                    <van-col span="8" align="center">
                        <img src="@/assets/sct.png" alt="" width="25">
                        <br>
                        <span>{{ toFixed(SCTPlatformBalance, 4) }} SCT</span>
                    </van-col>
                    <van-col span="8" align="center">
                        <img src="@/assets/sst.png" alt="" width="25">
                        <br>
                        <span>{{ toFixed(SSTPlatformBalance, 4) }} SST</span>
                    </van-col>
                </van-row>
            </div>
        </div>
        <van-tabs type="card" v-model="tabActiveOne">
            <van-tab :title="$t('question:charging')">
                <van-tabs v-model="tabActiveTwo">
                    <van-tab :title="'USDT' + $t('question:charging')">
                        <VanUsdt />
                    </van-tab>
                    <van-tab :title="'SCT' + $t('question:charging')">
                        <VanSct />
                    </van-tab>
                    <van-tab :title="'SST' + $t('question:charging')">
                        <VanSst />
                    </van-tab>
                </van-tabs>
            </van-tab>
            <van-tab :title="$t('question:Swap')">
                <Swap />
            </van-tab>
            <!-- <van-tab :title="$t('liquidity:Liquidity')">
                <Liquidity />
            </van-tab> -->
            <van-tab :title="$t('question:DepositMoney')">
                <Deposit />
            </van-tab>
        </van-tabs>


        <van-overlay :show="trading">
            <div class="wrapper">
                <van-loading type="spinner" color="#1989fa" />
            </div>
        </van-overlay>

        <van-overlay :show="loadingShow" @click="loadingShow = false">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="24px" vertical color="#0094ff">{{ $t('question:DataLoading') }}</van-loading>
            </div>
        </van-overlay>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
import {getBalance, getGameFillingBalance} from "@/wallet/serve";
import { keepDecimalNotRounding } from "@/utils/tools";
import Address from '@/wallet/address.json'
import VanUsdt from "../depositWithdrawal/usdt.vue";
import VanSct from "../depositWithdrawal/sct.vue";
import VanSst from "../depositWithdrawal/sst.vue";
import Swap from "../swap/index.vue";
import Liquidity from "../liquidity/index.vue";
import Deposit from "../deposit/index.vue";
export default {
  name: "Index",
  data() {
    return {
        trading: false,
        tabActiveOne: 0,
        tabActiveTwo: 0,
        USDTPlatformBalance: 0, //USDT平台总余额
        SCTPlatformBalance: 0, //SCT平台总余额
        SSTPlatformBalance: 0, //SST平台总余额
        loadingShow: true,
    };
  },
  activated() { //页面进来
    if(this.$route.params.tabActiveOne) {
        this.tabActiveOne = this.$route.params.tabActiveOne;
    }
    // this.refreshData();
    // this.getUserInfo();
  },
  components: {
    VanUsdt,
    VanSct,
    VanSst,
    Swap,
    Liquidity,
    Deposit
  },
  beforeRouteLeave(to, from, next){ //页面离开
      if (this.balanceTimeInterval) {
        clearInterval(this.balanceTimeInterval);
          this.balanceTimeInterval = null;
      }
      next();
  },
  created() {
  },
  watch: {
        isConnected: {
            immediate: true,
            async handler(val) {
                if (val && !this.approve) {
                    // this.getIsApprove();
                }
            },
        },
        changeData: {
            immediate: true,
            async handler(val){
                if(val.address) {
                    await this.getUserInfo();
                }
            }
        }
  },
  computed: {
      ...mapState({
        isConnected:state=>state.base.isConnected,
        address:state=>state.base.address,
        gamesFillingAddress:state=>state.base.usdtFillingAddress,
        gamesSCTFillingAddress:state=>state.base.sctFillingAddress,
        gamesSSTFillingAddress:state=>state.base.sstFillingAddress,
        apiUrl:state=>state.base.apiUrl,
        userId:state=>state.base.userId,
        isMobel:state=>state.comps.isMobel,
    }),
    changeData() {
      const {apiUrl, address} = this
      return {
        apiUrl, address
      };
    }
  },
  methods: {
    async getUserInfo(isHint=false) { //获取用户信息
        axios.get(this.apiUrl + "/Api/Depositwithdrawal/getFillingRecordUserInfo", {
            params: {
              address: this.address,
            }
        }).then(async (json) => {
            console.log(json);
            if (json.code == 10000) {
                this.localBalance = keepDecimalNotRounding(json.data.local_balance, 4, true);
                let SCTLocalBalance = keepDecimalNotRounding(json.data.sct_local_balance, 4, true);
                let SSTLocalBalance = keepDecimalNotRounding(json.data.sst_local_balance, 4, true);
                // this.csBalance = json.data.csBalance;
                this.isGame = json.data.isGame;
                if(!isHint && json.data.isGame) {
                    this.$notify({
                        showClose: true,
                        message: '正在打赏中，无法进行操作', //正在打赏中
                        type: 'warning'
                    });
                }
                console.log('是否打赏中：', this.isGame);
                this.walletBalance = await getGameFillingBalance(18, this.gamesFillingAddress); //获取合约余额
                let SCTWalletBalance = await getGameFillingBalance(18, this.gamesSCTFillingAddress); //获取SCT合约余额
                let SSTWalletBalance = await getGameFillingBalance(18, this.gamesSSTFillingAddress); //获取SST合约余额
                console.log('链上余额：', this.walletBalance);
                this.USDTPlatformBalance = Number(this.localBalance) + Number(this.walletBalance);
                this.SCTPlatformBalance = Number(SCTLocalBalance) + Number(SCTWalletBalance);
                this.SSTPlatformBalance = Number(SSTLocalBalance) + Number(SSTWalletBalance);
                console.log("USDT总余额:", this.USDTPlatformBalance);
                console.log("SCT总余额:", this.SCTPlatformBalance);
                console.log("SST总余额:", this.SSTPlatformBalance);

                this.isStatus = json.data.dw_status == 1 ? true : false;
                this.isWithdraw = json.data.isDeWith; //是否充提中
                console.log('是否充提中：', this.isStatus, this.isWithdraw);
                this.usdtBalance = await getBalance(Address.BUSDT, 18); //获取H2O余额
                console.log('USDT钱包余额：', this.usdtBalance);
            } else {
                console.log("get Data error");
            }
            setTimeout(() => {
                this.loadingShow = false;
            }, 100)
        }).catch((error) => {
            console.log(error);
            this.$notify({ type: 'danger', message: error });(error);
        });
    },
    onReturnLeft() { //返回上一页
        // this.$router.go(-1);
        this.$router.push("/");
    },
    selectCurrencyClick() {
        this.selectCurrencyShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
    /deep/ {
        height: auto !important;
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
        .generalStatistics {
            position: relative;
            width: 90%;
            // height: 80vh;
            margin: 0 auto;
            // background-color: #fff;
            margin-top: 10px;
            font-size: 14px;
            .image {
                // padding: 0 3%;
                position: relative;
                width: 100%;
                // height: 100%;
                height: 80px;
                border-radius: 20px;
            }
            .box {
                width: 100%;
                position: absolute;
                padding: 10px;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: #fff;
                font-weight: 500;
                .van-divider {
                    margin: 10px 0;;
                }
            }
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
        .van-tab {
            color: #7f8285;
        }
        .van-tabs__nav--card {
            border: 1px solid #05D2FA;
            .van-tab--active {
                color: #fff;
                background-color: #05D2FA;
            }
            .van-tab {
                border-right: 1px solid #05D2FA;
            }
        }
        .van-tabs__nav {
            background-color: transparent;
            .van-tab--active {
                color: #fff;
            }
        }
        div {
            min-height: 0;
        }
        input[type=number] {
            -moz-appearance:textfield;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        height: 100vh;
        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    }
}
</style>
