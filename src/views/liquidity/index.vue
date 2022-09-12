<template>
  <div class="container">
    <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
    <van-nav-bar
        :title="$t('liquidity:Liquidity')"
        left-text=""
        left-arrow
        right-text=""
        @click-left="backClinke"
    />
    <div class="item">
      <el-card shadow="hover" v-loading="receiveLoading">
        <div slot="header" class="clearfix">
          <span>{{ $t('liquidity:title') }}</span>
          <p class="tips">{{ $t('liquidity:RemoveLiquidity') }}</p>
        </div>
        <div class="info">
            <el-collapse class="collapse" :key="index" v-for="(pool, index) in liquidityPools">
                <el-collapse-item :name="index" v-if="pool.tokenBalance > 0" v-loading="pool.loading">
                    <!-- <div> -->
                        <template slot="title">
                            <el-row>
                                <el-col :span="24">
                                    <img size="small" :src="pool.logo" width="20" />
                                    <img size="small" :src="pool.logo2" width="20" style="margin-left: 5px;" />
                                    <span style="margin-left: 5px;font-weight: 800;">{{pool.name + '/' + pool.name2}}</span>
                                </el-col>
                                <el-col :span="24">{{computeTokenBalanceChange(pool.tokenBalance, pool.tokenDecimals)}}</el-col>
                            </el-row>
                        </template>
                        <el-row>
                            <el-col :span="12">
                                <img size="small" :src="pool.logo" width="20" />
                                <span style="margin-left: 5px;">{{ $t('liquidity:Pooled') }} {{pool.name}}</span>
                            </el-col>
                            <el-col :span="12" align="right">{{computeSingleCurrencyBalance(pool, 1)}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <img size="small" :src="pool.logo2" width="20" />
                                <span style="margin-left: 5px;">{{ $t('liquidity:Pooled') }} {{pool.name2}}</span>
                            </el-col>
                            <el-col :span="12" align="right">{{computeSingleCurrencyBalance(pool, 0)}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <span style="margin-left: 5px;">{{ $t('liquidity:SharePool') }}</span>
                            </el-col>
                            <el-col :span="12" align="right">{{calculationShareNumber(pool)}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="btn" style="padding-top: 10px;">
                                    <button class="exchangeButton" @click="removeHrefRouter(pool)">{{ $t('liquidity:Remove') }}</button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24" align="center" style="padding-top: 15px;padding-bottom: 10px;">
                                <el-link :underline="false" type="primary" @click="pushAddLiquidity"> + {{ $t('liquidity:AddLiquidityInstead') }}</el-link>
                            </el-col>
                        </el-row>
                    <!-- </div> -->
                </el-collapse-item>
                <!-- <br /><br /> -->
            </el-collapse>
            <el-row>
                <el-col :span="24" align="center">
                    <span class="add-liquidity">{{ $t('liquidity:AddLiquidityInstead') }}</span> 
                </el-col>
            </el-row>
        </div>
        <el-divider style="width: 100vh;margin-left: -20px;"></el-divider>
        <div class="btn" style="padding-top: 0;">
          <button class="exchangeButton" @click="pushAddLiquidity">+ {{ $t('liquidity:AddLiquidity') }}</button>
        </div>
      </el-card>
    </div>

    <van-overlay :show="loadingShow" @click="loadingShow = false">
        <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
            <van-loading size="24px" vertical color="#fff">{{ $t('question:DataLoading') }}</van-loading>
        </div>
    </van-overlay>
  </div>
</template>
<script>
import { mapState } from "vuex";
import configAddress from '@/wallet/swap_pools';
const publicAddress = configAddress.publicAddress;
import { keepDecimalNotRounding, byDecimals, replaceParamVal, getUrlParams, changeURLPar} from '@/utils/tools'
import { clickApprove, swapExactTokensForTokens, swapExactETHForTokens } from '@/wallet/swap'
import Address from '@/wallet/address.json'
export default {
  data() {
    return {
        receiveLoading: false,
        loadingShow: true,
    };
  },
  created(){
  },
  components: {
  },
  computed: {
    ...mapState({
      isConnected: (state) => state.base.isConnected,
      liquidityPools: (state) => state.base.liquidityPoolsList,
      isMobel:state=>state.comps.isMobel,
    }),
  },
  watch: {
    isConnected: {
      immediate: true,
      handler(val) {
        console.log(this.liquidityPools);
        if (val && !this.liquidityPools.length) {
          setTimeout(() => {
            this.$store.dispatch("liquidityPoolsTokenList");

            if(this.timeInterval) clearInterval(this.timeInterval)
            setInterval(()=>{
                this.$store.dispatch('refreshLiquidityPoolsList')
            },10000)

            console.log(this.liquidityPools);
          }, 300);
        }
      },
    },
    liquidityPools: {
        immediate: true,
        handler(val) {
          if(val && val.length > 0) {
            this.loadingShow = false;
          }
        }
    }
  },
  mounted() {
      window.clickGuruApprove = this.clickGuruApprove;
      window.handleClickOpen = this.handleClickOpen;
    //   window.confirmExchange = this.confirmExchange;
  },
  methods: {
    /**
     * 金额转换
     * @param {*} tokenBalance 
     * @param {*} tokenDecimals 
     * @returns 
     */
    computeTokenBalanceChange(tokenBalance, tokenDecimals, length) {
        let number = 0;
        const num = length && length > 0 ? length : 8;
        if (tokenBalance && tokenDecimals) {
          number = keepDecimalNotRounding(tokenBalance, num);
        }
        return number;
    },
    /**
     * 计算单币余额
     * lp 余额 / lp 总数 * 成分币的数量
     */
    computeSingleCurrencyBalance(pool, index) {
        let tokenBlance = 0;
        if (pool) {
            if (pool.totalSupply > 0 && pool.tokenBalance > 0 && pool.reserves[index] > 0) {
                tokenBlance = this.computeTokenBalanceChange(pool.tokenBalance / pool.totalSupply * pool.reserves[index], pool.tokenDecimals, 10);
            }
            return tokenBlance;
        }
    },
    /**
     * 计算流动性份额值 LP数量 / LP总数
     * @param {*} pool 
     * @returns 
     */
    calculationShareNumber(pool) {
        //  console.log(pool);
        let total = 0;
        if (pool.tokenBalance) {
            const totalSupply = this.computeTokenBalanceChange(pool.totalSupply, pool.tokenDecimals, 10);
            // console.log(totalSupply);
            const tokenBalance = this.computeTokenBalanceChange(pool.tokenBalance, pool.tokenDecimals, 10);
            total = ((tokenBalance / totalSupply) * 100).toFixed(10);
        }
        if(total <= 0.01) {
            return "<0.01%";
        } else {
            return "<" + total + "%";
        }
    },
    pushAddLiquidity() { //跳转添加流动性页面
      this.$router.push({path:'/liquidity/add'});
    },
    removeHrefRouter(pool) { //跳转删除流动性页面
      // let inputCurrency = pool.tk0Address == Address.SCT ? 'H2O' : pool.tk0Address;
      // let outputCurrency = pool.tk1Address == publicAddress.H2O_ADDRESS ? 'H2O' : pool.tk1Address;
      // this.$router.push({path:'/liquidity/remove', query: {inputCurrency:inputCurrency, outputCurrency: outputCurrency}});
      this.$router.push({
        name:'LiquidityRemove',
        params: {
          inputCurrency: pool.tk0Address,
          outputCurrency: pool.tk1Address,
        }
      });
    },
    backClinke() { //返回流动性列表
        this.$router.push({name:'bank', params:{tabActiveOne: 2}});
    }
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/color.scss';
.container {
  /deep/ {
  flex-grow: 1;
  align-items: center;
  // padding-top: 20px;
  width: 100%;
  margin: 0 auto;
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
  .item {
    border-radius: 24px;
    margin-top: 20px;
    max-width: 436px;
    width: 90%;
    cursor: default;
    margin: 0 auto;
    // border: 1px solid #0096ff;
      .el-card {
        margin-top: 50px;
        background: linear-gradient(#00C3E9, #2D50D2); /* 标准语法*/
        border-radius: 24px;
        border-color: #05D2FA;
      }
      .el-card__header {
        padding: 10px 20px;
        // text-align: center;
        // padding-bottom: 0;
        border-color: #7f7f80;
        color: #fff;
      }
      .tips {
        // color: #B0B0DD;
        // font-size: 16px;
        color: #fff;
      }
    
    .info {
        color: #fff;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
            .el-collapse {
                border-top: 0;
            }
            img {
                vertical-align: middle;
            }
            .el-collapse-item {
                margin-bottom: 40px;
            }
            .el-collapse-item__header {
                background-color: #76D6FF;
                color: #fff;
                border-bottom: 0;
                min-height: 60px;
                padding: 15px;
                font-size: 15px;
                border-radius: 20px;
                margin-bottom: -20px;
                line-height: 30px;
                img {
                    vertical-align: middle;
                }
            }
            .el-collapse-item__wrap {
                background-color: #76D6FF;
                color: #fff;
                // @include sideBarSwapInputBgc($claimCardSwapInput-light);
                // margin-top: -20px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                border-bottom: 0;
                .el-collapse-item__content {
                    color: #fff;
                    padding: 15px;
                    font-size: 15px;
                } 
            }
            .el-collapse {
                border-bottom: 0;
            }
            .add-liquidity {
                color: #fff;
            }
        
    }
    .el-divider {
        width: 100vh;
        margin-left: -20px;
        background-color: #7f7f80;
    }
    .btn {
      padding-top: 30px;
      text-align: center;
      button {
        // background: linear-gradient(90deg, #0096ff, #0024ff);
        background: transparent;
        background: url("../../assets/answer/swap-submit-bg.png") no-repeat center;
        background-size: contain;
        text-align: center;
        color: #fff;
        line-height: 26px;
        margin-right: 23px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 48px;
        border: none;
        border-radius: 19px;
        outline: none;
        cursor: pointer;
      }
      .el-loading-mask {
          background-color: rgba(0, 0, 0, 0.8);
      }
      button:disabled {
        background: transparent;
        background: url("../../assets/answer/swap-submit-bg.png") no-repeat center;
        background-size: contain;
        text-align: center;
        opacity: 0.5;
      }
    }
  }
  .textRight {
    text-align: right;
    // padding: 0 16px;
  }
  .textCenter {
      text-align: center;
  }
  }
}
</style>