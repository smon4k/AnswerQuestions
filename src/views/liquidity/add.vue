<template>
  <div class="container">
    <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
    <van-nav-bar
        :title="$t('liquidity:AddLiquidity')"
        left-text=""
        left-arrow
        right-text=""
        @click-left="backClinke"
    />
    <div class="item" style="margin-top: 50px;">
      <el-card shadow="hover" v-loading="receiveLoading">
        <div slot="header" class="clearfix">
            <el-row>
                <el-col :span="3">
                    <span class="icon-back" @click="backClinke"><i class="el-icon-back"></i></span>
                </el-col>
                <el-col :span="21">
                    <span>{{ $t('liquidity:AddLiquidity') }}</span>
                    <p class="tips">
                        <el-tooltip placement="top-start">
                            <div slot="content" style="line-height: 20px">
                                {{ $t('liquidity:AddLiquidity-01') }} <br/>
                                {{ $t('liquidity:AddLiquidity-02') }} <br/>
                                {{ $t('liquidity:AddLiquidity-03') }} <br/>
                                {{ $t('liquidity:AddLiquidity-04') }} <br/>
                            </div>
                            <span>&nbsp;<i class="el-icon-question"></i></span> 
                        </el-tooltip>
                        {{ $t('liquidity:AddLiquidityTokens') }}
                    </p>
                </el-col>
            </el-row>
        </div>
        <div class="info">
            <!-- 中间输入框内容 -->
            <SwapExchange
                @childSwapPoolsClick="childSwapPoolsClick"
                @childApprovedArrStatus="childApprovedArrStatus"
                @updateChildExchangeMoney="updateChildExchangeMoney"
                @updateChildValuationState="updateChildValuationState"
                :childExchangeArray="exchangeArray"
                :swapPools="swapPools"
                :key="timeRefusr"
            />
            <div class="priceName" v-show="exchangeArray.OUTPUT >= 0 && exchangeArray.INPUT >= 0">
                <el-row class="priceNameContent">
                    <el-col :span="24" class="priceNameContentText">{{ $t('liquidity:PricesPoolShare') }}</el-col>
                </el-row>
                <el-row class="priceNameContentTo">
                    <el-col :span="8">
                        <div>{{calculateValuation(getFilersSwapPoolsArr(exchangeArray.INPUT).tokenBalanceUsd)}}</div>
                        <div>{{getFilersSwapPoolsArr(exchangeArray.INPUT).name}} {{ $t('liquidity:Per') }} {{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</div>
                    </el-col>
                    <el-col :span="8">
                        <div>{{calculateValuation(getFilersSwapPoolsArr(exchangeArray.OUTPUT).tokenBalanceUsd)}}</div>
                        <div>{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}} {{ $t('liquidity:Per') }} {{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</div>
                    </el-col>
                    <el-col :span="8">
                        <div>{{calculationShareNumber(getFilersSwapPoolsArr(exchangeArray.INPUT))}}%</div>
                        <div>{{ $t('liquidity:SharePool') }}</div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-divider style="width: 100vh;margin-left: -20px;"></el-divider>
        <div class="btn" style="padding-top: 0;">
            <button class="exchangeButton" v-loading="btnLoading" :disabled="confirmExchangeHtml().disabled || btnLoading" :onClick="confirmExchangeHtml().funName">{{confirmExchangeHtml().text}}</button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SwapExchange from "@/components/SwapExchange.vue";
import configAddress from '@/wallet/swap_pools';
const publicAddress = configAddress.publicAddress;
import Address from '@/wallet/address.json'
import { keepDecimalNotRounding, byDecimals, replaceParamVal, getUrlParams, changeURLPar} from '@/utils/tools'
import { clickApprove, addLiquidity } from '@/wallet/swap'

export default {
  data() {
    return {
        btnLoading: false,
        receiveLoading: false,
        selectTokenOpen: false,
        valuationState: 'OUTPUT',
        exchangeArray: {
            INPUT: undefined,
            OUTPUT: undefined,
        },
        exchangeMoney: {},
        approvedArrStatus: { //是否批准
            INPUT: false,
            OUTPUT: false,
        },
        priceRefreshState: true, //价格刷新状态
        timeRefusr: new Date().getTime(),
        isFirstEnter: true, //是否首次加载
    };
  },
  activated() { //页面进来
    // this.paramsUrlAddress();
  },
  created(){
    // this.paramsUrlAddress();
  },
  components: {
      SwapExchange
  },
  computed: {
    ...mapState({
      isConnected: (state) => state.base.isConnected,
      swapPools: (state) => state.base.swapPoolsList,
      isMobel:state=>state.comps.isMobel,
    }),
  },
  watch: {
    isConnected: {
      immediate: true,
      handler(val) {
        if (val && !this.swapPools.length) {
          setTimeout(() => {
            this.$store.dispatch("swapPoolsTokenList");

            if(this.timeInterval) clearInterval(this.timeInterval)
            setInterval(()=>{
                // this.isFirstEnter = false;
                this.$store.dispatch('refreshSwapPoolsList')
            },10000)

            console.log(this.swapPools);
          }, 300);
        }
      },
      deep: true
    },
    swapPools: {
        immediate: true,
        handler(val) {
            if(this.isFirstEnter) { //第一次刷新页面获取一次
                this.paramsUrlAddress();
            }
            if(val && val.length > 0) {
                this.isFirstEnter = false;
            }
            let inputAllowance;
            let outputAllowance;
            if(this.exchangeArray.INPUT >= 0) {
                const inputAllowanceNum = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT).allowance;
                // console.log(inputAllowanceNum);
                if(inputAllowanceNum && inputAllowanceNum > 0) {
                    inputAllowance = true;
                }
            }
            if(this.exchangeArray.OUTPUT >= 0) {
                const inputAllowanceNum = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT).allowance;
                if(inputAllowanceNum && inputAllowanceNum > 0) {
                    outputAllowance = true;
                }
            }

            this.approvedArrStatus = {
                INPUT: inputAllowance,
                OUTPUT: outputAllowance,
            };
            // this.isFirstEnter = false;
            // console.log(this.approvedArrStatus); 
            // this.timeRefusr = new Date().getTime();
        },
        deep: true
    }
  },
  mounted() {
      window.clickGuruApprove = this.clickGuruApprove;
      window.confirmExchange = this.confirmExchange;
  },
  methods: {
    //接受子组件传过来的值
    childSwapPoolsClick(data, exchangeMoney, valuationState) {
      // console.log(data);
      this.exchangeArray = data;
      // setFetchVaultsDataDone(fetchVaults);
      // setExchangeMoney(exchangeMoney);
      // setValuationState(valuationState);
    },
    updateChildExchangeMoney(exchangeMoney) {
        this.exchangeMoney = exchangeMoney;
    },
    updateChildValuationState(val) {
        this.valuationState = val;
    },
    childApprovedArrStatus(value, str) {
      //更像子组件批准状态
    //   console.log(value);
      if (str === "INPUT") {
        this.approvedArrStatus.INPUT = value;
      } else {
        this.approvedArrStatus.OUTPUT = value;
      }
    },
    //获取地址栏对应值
    paramsUrlAddress() {
        const inputCurrency = this.$route.query.inputCurrency;
        const outputCurrency = this.$route.query.outputCurrency;
        // console.log(inputCurrency);
        let inputSerchData = [];
        let outputSerchData = [];
        let input = undefined;
        let ouput = undefined;
        let inputAllowance = false;
        let ouputAllowance = false;
        if (inputCurrency && inputCurrency !== undefined) {
            if (inputCurrency === publicAddress.DEFANT_CURRENCY) {
                // console.log(this.swapPools);
                inputSerchData = this.swapSearchProps(this.swapPools, inputCurrency, 'name');
            } else {
                inputSerchData = this.swapSearchProps(this.swapPools, inputCurrency, 'tokenAddress');
            }
            // console.log(inputSerchData);
            if (inputSerchData && inputSerchData[0]) {
                input = inputSerchData[0].poolId;
                inputAllowance = Number(inputSerchData[0].allowance) > 0 ? true : false
                // console.log(inputAllowance);
            }
        }
        else {
            changeURLPar(window.location.href, "inputCurrency", Address.USDT);
            inputSerchData = this.swapSearchProps(this.swapPools, Address.USDT, 'tokenAddress');
            if (inputSerchData && inputSerchData[0]) {
                input = inputSerchData[0].poolId;
                inputAllowance = Number(inputSerchData[0].allowance) > 0 ? true : false
                // console.log(inputAllowance);
            }
        }
        if (outputCurrency && outputCurrency !== undefined) {
            // console.log("111");
            if (outputCurrency === publicAddress.DEFANT_CURRENCY) {
                outputSerchData = this.swapSearchProps(this.swapPools, outputCurrency, 'name');
            } else {
                outputSerchData = this.swapSearchProps(this.swapPools, outputCurrency, 'tokenAddress');
            }
            if (outputSerchData && outputSerchData[0]) {
                ouput = outputSerchData[0].poolId;
                ouputAllowance = Number(outputSerchData[0].allowance > 0) ? true : false;
            }
        }
        // console.log(input);
        this.exchangeArray = {
            INPUT: input, 
            OUTPUT: ouput
        };
        this.approvedArrStatus = {
            INPUT: inputAllowance, 
            OUTPUT: ouputAllowance
        };
        this.timeRefusr = new Date().getTime();
        // console.log(inputAllowance);
    },
    //打开选择币种弹框
    handleClickOpen() {
        this.selectTokenOpen = true;
    },
    //关闭选择币种弹窗事件
    handleClose() {
        this.selectTokenOpen = false;
    },
    //模糊搜索
    swapSearchProps(list, keyWord, name) {
        let arr = [];
        for (let i = 0; i < list.length; i++) {
            let flag = false
            if (list[i][name] && list[i][name].indexOf(keyWord) >= 0) {
                flag = true
            }
            if (flag) {
                arr.push(list[i])
            }
        }
        return arr;
    },
    //筛选指定选择币种事件
    filersSwapPoolsArr(poolId) {
        // return 0.0001;
        // console.log(poolId);
        let swapPoolsArrIndex = {};
        if (this.swapPools.length > 0) {
            this.swapPools.map((pool, index) => {
                if (poolId == pool.poolId) {
                    swapPoolsArrIndex = index;
                }
            });
        }
        // console.log(swapPoolsArrIndex);
        return swapPoolsArrIndex;
    },
    //获取指定币种对应数据
    getFilersSwapPoolsArr(putKey) {
        let arr = {
            poolId: '',
            address: '',
            name: '',
            logo: '',
            logo2: '',
            tokenBalance: 0,
            // tokenBalance: tokenBalance,
            tokenBalanceUsd: 0,
        };
        if (putKey >= 0) {
            const filesArray = this.filersSwapPoolsArr(putKey);
            arr = this.swapPools[filesArray]
        }
        // console.log(arr);
        return arr;
    },
    //单独计算估值
    calculateValuation(price) {
        let newPrice = 0;
        if (price > 0) {
            // console.log(price);
            // newPrice = (price * (100 - liquidityCoonfig.SLIPOINT)/100).toFixed(6);
            newPrice = (price / 100).toFixed(8);
        }
        return newPrice;
    },
    //计算总的LP数量值 total = totalsupply * in1 / t1
    calculationLpNumber(inputArray) {
        let total = 0;
        const totalSupply = this.computeTokenBalanceChange(inputArray.totalSupply, inputArray.tokenDecimals, 18);
        const reserves = this.computeTokenBalanceChange(inputArray.reserves[0], inputArray.tokenDecimals, 18);
        if (inputArray) {
            total = totalSupply > 0 && reserves > 0 ? totalSupply * this.exchangeMoney.INPUT / reserves : 0;
            // total = inputArray.totalSupply > 0 && inputArray.reserves[0] > 0 ? inputArray.totalSupply * exchangeMoney.INPUT / inputArray.reserves[0] : 0;
        }
        return total > 0 ? total.toFixed(10) : 0;
    },
    //计算流动性份额值 in1 / t1
    calculationShareNumber(inputArray) {
        let total = 0;
        if (inputArray && inputArray.reserves) {
            const reserves = this.computeTokenBalanceChange(inputArray.reserves[0], inputArray.tokenDecimals, 18);
            total = this.exchangeMoney.INPUT > 0 && reserves > 0 ? this.exchangeMoney.INPUT / reserves : 0;
        }
        // console.log(keepDecimalNotRounding(total, 10))
        return total > 0 ? total.toFixed(10) : 0;
    },
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
            number =    (byDecimals(tokenBalance, tokenDecimals), num);
        }
        // console.log(tokenBalance, tokenDecimals);
        return number;
    },
    confirmExchangeHtml() { //按钮判断
        const inputArray = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT);
        const outputArray = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT);
        let _html = '';
        let obj = {};
        if(inputArray && outputArray) {
            const inputBlance = inputArray.tokenBalance > 0 ? keepDecimalNotRounding(inputArray.tokenBalance, 18) : 0;
            const outputBlance = outputArray.tokenBalance > 0 ? keepDecimalNotRounding(outputArray.tokenBalance, 18) : 0;
            // console.log(exchangeMoney.INPUT);
            // console.log(inputBlance, outputBlance);
            // console.log(exchangeMoney.INPUT, exchangeMoney.OUTPUT);
            if(this.exchangeMoney.INPUT > 0) {
                if(this.exchangeArray.OUTPUT >= 0) {
                    if(inputBlance > 0 && this.exchangeMoney.INPUT <= inputBlance) { //如果 INPUT 输入的大于余额
                        if(outputBlance > 0 && this.exchangeMoney.OUTPUT <= outputBlance) {//如果 OUTPUT 输入的大于余额
                            if(this.approvedArrStatus.INPUT) { //判断INPUT是否批准
                                if(this.approvedArrStatus.OUTPUT) {
                                    obj = {
                                        disabled: false,
                                        text: this.$t('liquidity:Supply'),
                                        funName: 'confirmExchange()',
                                    };
                                } else {
                                    obj = {
                                        disabled: false,
                                        text: this.$t('public:Approve') + ' ' + outputArray.name,
                                        funName: 'clickGuruApprove('+'`'+outputArray.tokenAddress+'`'+', `OUTPUT`)',
                                    };
                                    // return (
                                    //     <Button variant="contained" size="medium" color="primary" className={classes.exchangeButton} onClick={() => clickGuruApprove(outputArray.tokenAddress, 'OUTPUT')}>{isLanguageZh ? '批准' : 'Approve'} {outputArray.name}</Button>
                                    // );
                                }
                            } else {
                                obj = {
                                    disabled: false,
                                    text: this.$t('public:Approve') + ' ' + inputArray.name,
                                    funName: 'clickGuruApprove('+'`'+inputArray.tokenAddress+'`'+', `INPUT`)',
                                };
                            }
                        } else {
                            obj = {
                                disabled: true,
                                text: outputArray.name + ' ' + this.$t('liquidity:InsufficientBalance'),
                                funName: '',
                            };                        }
                    } else { //余额不足
                        obj = {
                            disabled: true,
                            text: inputArray.name + ' ' + this.$t('liquidity:InsufficientBalance'),
                            funName: '',
                        };
                    }
                } else { //选择币种
                        obj = {
                            disabled: true,
                            text: this.$t('liquidity:SelectAmount'),
                            funName: '',
                        };
                }
            } else { //输入金额
                obj = {
                    disabled: true,
                    text: this.$t('liquidity:EnterAmount'),
                    funName: '',
                };
            }
        }
        // console.log(obj);
        return obj;
    },
    //用户批准额度操作
    clickGuruApprove(addr, approveKey) {
        this.btnLoading = true
        clickApprove(addr).then((result)=> {
            if(approveKey == 'INPUT') {
                this.approvedArrStatus.INPUT = true;
            } else {
                this.approvedArrStatus.OUTPUT = true;
            }
        }).finally(()=>{
            this.btnLoading = false
        })
    },
    //用户确认供应事件
    confirmExchange() {
        this.btnLoading = true
        const TK1_CONTRACT_ADDR = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT).tokenAddress;
        const TK2_CONTRACT_ADDR = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT).tokenAddress;
        // console.log(TK1_CONTRACT_ADDR);
        addLiquidity(this.exchangeMoney.INPUT, this.exchangeMoney.OUTPUT, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR).then((result)=> {
            console.log(result);
            this.exchangeMoney = {
              INPUT: '',
              OUTPUT: '',
            };
        }).finally(()=>{
            this.btnLoading = false
        })
    },
    backClinke() { //返回流动性列表
        this.$router.push({path:'/liquidity'});
    }
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/color.scss';
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
    flex-grow: 1;
    align-items: center;
    //   padding-top: 50px;
    width: 100%;
    margin: 0 auto;
    .icon-back {
        cursor:pointer;
        font-size: 30px;
        line-height: 50px;
    }
    .item {
        // margin-top: 50px;
        border-radius: 24px;
        max-width: 436px;
        width: 90%;
        cursor: default;
        margin: 0 auto;
        border: 1px solid #0096ff;
        .el-card {
            background-color: #05D2FA;
            border-radius: 24px;
            border-color: #05D2FA;
        }
        .el-card__body {
            padding: 10px;
        }
        .el-card__header {
            padding: 10px 20px;
            // text-align: center;
            // padding-bottom: 0;
            border-color: #7f7f80;
            color: #fff;
        }
        .tips {
            color: #fff;
            // color: #B0B0DD;
            // font-size: 0.875rem;
        }
        .info {
            color: #fff;
            /deep/ {
                .el-collapse {
                    border-top: 0;
                }
                img {
                    vertical-align: middle;
                }
                .priceName {
                    margin-top: 30px;
                    border: solid 1px #0096ff;
                    // padding-top: 16px;
                    border-radius: 20px;
                    .priceNameContent {
                        .priceNameContentText {
                            padding: 15px;
                            font-size: 14px;
                        }
                    }
                    .priceNameContentTo {
                        border: solid 1px #0096ff;
                        padding: 20px;
                        text-align: center;
                        border-radius: 20px;
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            }
        }
        .el-divider {
            width: 100vh;
            margin-left: -20px;
            @include swapDividerBgc($swapDivider-dark);
            // background-color: #7f7f80;
            // #EBEEF5
        }
        .btn {
        padding-top: 30px;
        text-align: center;
        button {
            background: linear-gradient(90deg, #0096ff, #8C1AF5);
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
            /deep/ .el-loading-mask {
                background-color: rgba(0, 0, 0, 0.8);
            }
        }
        button:disabled {
            background: #8b8b9b;
        }
        }
    }
    .textRight {
        color: #fff;
        text-align: right;
        // padding: 0 16px;
    }
    .textCenter {
        color: #fff;
        text-align: center;
    }
    }
}
</style>