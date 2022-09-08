<template>
  <div class="container">
    <div class="item">
      <el-card shadow="hover" v-loading="receiveLoading">
        <div slot="header" class="clearfix">
          <span>{{ $t('swap:Exchange') }}</span>
          <p class="tips">{{ $t('swap:TradeInstant') }}</p>
        </div>
        <div class="info">
          <!-- 中间输入框内容 -->
          <SwapExchange
            @childSwapPoolsClick="childSwapPoolsClick"
            @updateChildApprovedArrStatus="updateChildApprovedArrStatus"
            @updateChildExchangeMoney="updateChildExchangeMoney"
            @updateChildValuationState="updateChildValuationState"
            :childExchangeArray="exchangeArray"
            :childApprovedArrStatus="approvedArrStatus"
            :swapPools="swapPools"
            :key="timeRefusr"
            :pageState="1"
          />

          <!-- :swapPools="swapPools"
                :fetchVaultsSwapDataDone="fetchVaultsSwapDataDone"
                :childApprovedArrStatus="approvedArrStatus"
                @childApprovedArrStatus="childApprovedArrStatus" -->

          <div
            class="price"
            v-show="exchangeMoney.INPUT > 0 && exchangeArray.OUTPUT >= 0 && exchangeArray.INPUT >= 0"
          >
            <el-row>
              <el-col :span="4">Price</el-col>
              <el-col :span="20" style="text-align: right">
                    <span v-if="priceRefreshState">
                        <!-- <span>{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).tokenBalanceUsd}} </span> -->
                        <span>{{ outputPricePer }} </span>
                        <span>{{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</span>
                        <span> {{ $t('swap:Per') }} {{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</span>
                    </span>
                    <span v-else>
                        <!-- <span>{{getFilersSwapPoolsArr(exchangeArray.INPUT).tokenBalanceUsd}} </span> -->
                        <span>{{ inputPricePer }} </span>
                        <span>{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</span>
                        <span> {{ $t('swap:Per') }} {{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</span>
                    </span>
                    <span class="refresh">
                        <el-button size="small" circle @click="savePriceRefreshState">
                            <i class="el-icon-refresh"></i>
                        </el-button>
                    </span>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="btn">
            <!-- <div v-html="confirmExchangeHtml()"></div> -->
          <!-- :class="{ disabled: !Number(receiveNum) }" -->
          <button class="exchangeButton" v-loading="btnLoading" :disabled="confirmExchangeHtml().disabled || btnLoading" :onClick="confirmExchangeHtml().funName">{{confirmExchangeHtml().text}}</button>
          <!-- {{confirmExchangeHtml()}} -->
        </div>
      </el-card>
    </div>
    <div class="item-bottom" style="margin-top: 20px" v-show="exchangeMoney.INPUT > 0 && exchangeArray.OUTPUT >= 0 && exchangeArray.INPUT >= 0">
      <div class="item-bottom-box">
        <el-row>
            <el-col :span="8">
                <div class="tooltip">
                    {{ $t('swap:MinimumReceived') }}
                    <el-tooltip placement="right-start">
                        <div slot="content">{{ $t('swap:MinimumReceived-01') }} <br/> {{ $t('swap:MinimumReceived-02') }} <br/> {{ $t('swap:MinimumReceived-03') }}</div>
                        <span>&nbsp;<i class="el-icon-question"></i></span> 
                    </el-tooltip>
                </div>
            </el-col>
          <!-- <el-col :sm="16" class="textRight">{{computeAcquiredQuantity(getFilersSwapPoolsArr(exchangeArray[valuationState]))}} {{getFilersSwapPoolsArr(exchangeArray[valuationState]).name}}</el-col> -->
            <el-col :span="16" class="textRight">{{computeAcquiredQuantity(getFilersSwapPoolsArr(exchangeArray['INPUT']))}} {{getFilersSwapPoolsArr(exchangeArray[valuationState]).name}}</el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                {{ $t('swap:PriceImpact') }}
                <el-tooltip placement="right-start">
                    <div slot="content">{{ $t('swap:PriceImpact-01') }} <br/> {{ $t('swap:PriceImpact-02') }}</div>
                    <span>&nbsp;<i class="el-icon-question"></i></span> 
                </el-tooltip>
            </el-col>
            <el-col :span="16" class="textRight">
                <!-- <span :style="'color:'+computePriceImpact(getFilersSwapPoolsArr(exchangeArray[valuationState])).color">{{computePriceImpact(getFilersSwapPoolsArr(exchangeArray[valuationState])).value}}</span> -->
                <span :style="'color:'+computePriceImpact(getFilersSwapPoolsArr(exchangeArray['INPUT'])).color">{{computePriceImpact(getFilersSwapPoolsArr(exchangeArray['INPUT'])).value}}</span>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
                {{ $t('swap:LiquidityProviderFee') }}
                <el-tooltip placement="right-start">
                    <div slot="content">
                        {{ $t('swap:LiquidityProviderFee-01') }} <br/><br/>
                        {{ $t('swap:LiquidityProviderFee-02') }} <br/>
                        {{ $t('swap:LiquidityProviderFee-03') }} <br/>
                        <!-- - 0.05% towards CAKE buyback and burn <br/><br/> -->
                        {{ $t('swap:LiquidityProviderFee-05') }}
                    </div>
                    <span>&nbsp;<i class="el-icon-question"></i></span> 
                </el-tooltip>
          </el-col>
          <el-col :span="12" class="textRight">{{exchangeMoney.INPUT > 0 ? keepDecimalNotRounding(exchangeMoney.INPUT * 0.0025, 8) : 0}} {{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</el-col>
        </el-row>
      </div>
    </div>

    <!-- 确认交换弹框 -->
    <el-dialog
      title="You will receive"
      :visible.sync="selectTokenOpen"
      :before-close="handleSelectTokenClose"
      class="dialogClass"
      center>
        <div class="content">
            <el-row>
                <el-col :span="20">
                    <img :src="getFilersSwapPoolsArr(exchangeArray.INPUT).logo" alt="" width="25" />
                    <span>{{exchangeMoney.INPUT}}</span>
                </el-col>
                <el-col :span="4" class="textRight">{{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</el-col>
            </el-row>

            <el-row>
                <el-col :span="24" class="arrow">
                    <i class="el-icon-bottom"></i>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="20">
                    <img :src="getFilersSwapPoolsArr(exchangeArray.OUTPUT).logo" alt="" width="25" />
                    <span style="color:#0096ff;">{{exchangeMoney.OUTPUT}}</span>
                </el-col>
                <el-col :span="4" class="textRight">{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</el-col>
            </el-row>

            <el-row>
                <el-col :span="24" class="desc">
                    {{ $t('swap:outputEstimate') }} 
                    {{valuationState === 'INPUT' ? $t('swap:sellMost') : $t('swap:receiveLeast')}} {{exchangeMoney[valuationState]}} {{getFilersSwapPoolsArr(exchangeArray[valuationState]).name}} {{ $t('swap:transactionWithdrawn') }}
                </el-col>
            </el-row>

            <div class="item-bottom-two" style="margin-top: 20px" v-show="exchangeMoney.INPUT > 0 && exchangeArray.OUTPUT >= 0 && exchangeArray.INPUT >= 0">
                <div class="item-bottom-box">
                    <el-row class="price" style="margin-top:0;">
                        <el-col :span="4">{{ $t('swap:Price') }}</el-col>
                        <el-col :span="20" style="text-align: right">
                            <span v-if="priceRefreshState">
                                <!-- <span>{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).tokenBalanceUsd}} </span> -->
                                <span>{{ outputPricePer }} </span>
                                <span>{{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</span>
                                <span> {{ $t('swap:Per') }} {{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</span>
                            </span>
                            <span v-else>
                                <!-- <span>{{getFilersSwapPoolsArr(exchangeArray.INPUT).tokenBalanceUsd}} </span> -->
                                <span>{{ inputPricePer }} </span>
                                <span>{{getFilersSwapPoolsArr(exchangeArray.OUTPUT).name}}</span>
                                <span> {{ $t('swap:Per') }} {{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</span>
                            </span>
                            <span class="refresh" @click="savePriceRefreshState">
                            <i class="el-icon-refresh"></i>
                            </span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div class="tooltip">
                                {{ $t('swap:MinimumReceived') }}
                                <el-tooltip placement="right-start">
                                    <div slot="content">{{ $t('swap:MinimumReceived-01') }} <br/> {{ $t('swap:MinimumReceived-02') }} <br/> {{ $t('swap:MinimumReceived-03') }}.</div>
                                    <span><i class="el-icon-question"></i></span> 
                                </el-tooltip>
                            </div>
                        </el-col>
                        <!-- <el-col :span="13" class="textRight">{{computeAcquiredQuantity(getFilersSwapPoolsArr(exchangeArray[valuationState]))}} {{getFilersSwapPoolsArr(exchangeArray[valuationState]).name}}</el-col> -->
                        <el-col :span="12" class="textRight">{{computeAcquiredQuantity(getFilersSwapPoolsArr(exchangeArray['INPUT']))}} {{getFilersSwapPoolsArr(exchangeArray[valuationState]).name}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            {{ $t('swap:PriceImpact') }}
                            <el-tooltip placement="right-start">
                                <div slot="content">{{ $t('swap:PriceImpact-01') }} <br/> {{ $t('swap:PriceImpact-02') }}</div>
                                <span><i class="el-icon-question"></i></span> 
                            </el-tooltip>
                        </el-col>
                        <el-col :span="14" class="textRight">
                            <span :style="'color:'+computePriceImpact(getFilersSwapPoolsArr(exchangeArray['INPUT'])).color">{{computePriceImpact(getFilersSwapPoolsArr(exchangeArray['INPUT'])).value}}</span>
                        </el-col>
                    </el-row>
                    <el-row>
                    <el-col :span="14">
                            {{ $t('swap:LiquidityProviderFee') }}
                            <el-tooltip placement="right-start">
                                <div slot="content">
                                    {{ $t('swap:LiquidityProviderFee-01') }} <br/><br/>
                                    {{ $t('swap:LiquidityProviderFee-02') }} <br/>
                                    {{ $t('swap:LiquidityProviderFee-03') }} <br/>
                                    {{ $t('swap:LiquidityProviderFee-04') }} <br/><br/>
                                    {{ $t('swap:LiquidityProviderFee-05') }}
                                </div>
                                <span><i class="el-icon-question"></i></span> 
                            </el-tooltip>
                    </el-col>
                    <el-col :span="10" class="textRight">{{exchangeMoney.INPUT > 0 ? keepDecimalNotRounding(exchangeMoney.INPUT * 0.0025, 8) : 0}} {{getFilersSwapPoolsArr(exchangeArray.INPUT).name}}</el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="btn">
          <el-button v-loading="btnLoading" class="exchangeButton" style="margin-top:30px" @click="confirmExchange" :disabled="btnLoading">{{ $t('swap:ConfirmSwap') }}</el-button>
        </div>
    </el-dialog>

    <van-overlay :show="loadingShow" @click="loadingShow = false">
        <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
            <van-loading size="24px" vertical color="#0094ff">{{ $t('question:DataLoading') }}</van-loading>
        </div>
    </van-overlay>

  </div>
</template>
<script>
import { mapState } from "vuex";
import SwapExchange from "@/components/SwapExchange.vue";
import configAddress from '@/wallet/swap_pools';
const publicAddress = configAddress.publicAddress;
import Address from '@/wallet/address.json'
import { keepDecimalNotRounding, byDecimals, replaceParamVal, getUrlParams, changeURLPar} from '@/utils/tools'
import { clickApprove, swapExactTokensForTokens, swapExactETHForTokens } from '@/wallet/swap'
import { getTokenAmountsoutPrice } from "@/wallet/Inquire";
import merge from 'webpack-merge';
export default {
  data() {
    return {
      receiveNum: "--",
      btnLoading:false,
      receiveLoading: false,
      exchangeArray: {
        INPUT: "",
        OUTPUT: "",
      },
      exchangeMoney: {},
      valuationState: 'OUTPUT',
      approvedArrStatus: {
        ////是否批准
        INPUT: false,
        OUTPUT: false,
      },
      priceRefreshState: true, //价格刷新状态
      selectTokenOpen: false, //显示确认交换弹框
      timeRefusr: new Date().getTime(),
      isFirstEnter: true, ////是否首次加载
      inputPricePer: 0, //input Price
      outputPricePer: 0, //output Price
      loadingShow: true,
    };
  },
  created(){
  },
  components: {
    SwapExchange,
  },
  computed: {
    ...mapState({
      isConnected: (state) => state.base.isConnected,
      swapPools: (state) => state.base.swapPoolsList,
    }),
  },
  watch: {
    isConnected: {
      immediate: true,
      handler(val) {
        console.log(val);
        if (val && !this.swapPools.length) {
          setTimeout(() => {
            this.$store.dispatch("swapPoolsTokenList");

            if(this.timeInterval) clearInterval(this.timeInterval)
            setInterval(()=>{
                this.$store.dispatch('refreshSwapPoolsList')
            },10000)

            console.log(this.swapPools);
          }, 300);
        }
      },
    },
    swapPools: {
        immediate: true,
        handler(val) {
          if(this.isFirstEnter) { //第一次刷新页面获取一次
                this.paramsUrlAddress();
            }
            if(val && val.length > 0) {
                this.loadingShow = false;
                this.isFirstEnter = false;
            }
            // let inputAllowance;
            // let outputAllowance;
            // if(this.exchangeArray.INPUT >= 0) {
            //     const inputAllowanceNum = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT).allowance;
            //     console.log(inputAllowanceNum);
            //     if(inputAllowanceNum && inputAllowanceNum > 0) {
            //         inputAllowance = true;
            //     }
            // }
            // if(this.exchangeArray.OUTPUT >= 0) {
            //     const inputAllowanceNum = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT).allowance;
            //     if(inputAllowanceNum && inputAllowanceNum > 0) {
            //         outputAllowance = true;
            //     }
            // }
            // this.approvedArrStatus = {
            //     INPUT: inputAllowance,
            //     OUTPUT: outputAllowance,
            // };
            // this.timeRefusr = new Date().getTime();
        },
        deep: true
    }
  },
  mounted() {
      window.clickGuruApprove = this.clickGuruApprove;
      window.handleClickOpen = this.handleClickOpen;
    //   window.confirmExchange = this.confirmExchange;
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
     /**
     * 获取input 、output 单价
     * per H2O 表示H2O单价
     * per USDT 表示USDT单价
     */
    async updateChildExchangeMoney(exchangeMoney) {
        // console.log(exchangeMoney);
        this.exchangeMoney = exchangeMoney;

        //获取 output 价格
        // let outputArr = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT);
        // console.log(this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT));
        // let intPrice = await getTokenAmountsoutPrice(exchangeMoney.INPUT, outputArr.tk0Address, outputArr.tk1Address);
        // let outPrice = await getTokenAmountsoutPrice(exchangeMoney.OUTPUT, outputArr.tk1Address, outputArr.tk0Address);
        // this.inputPricePer = intPrice / exchangeMoney.INPUT; //input price = 总价钱(获取估值) / input数量
        this.inputPricePer = exchangeMoney.OUTPUT / exchangeMoney.INPUT; //input price = 总价钱(获取估值) / input数量
        this.outputPricePer = exchangeMoney.INPUT / exchangeMoney.OUTPUT;//output price  = input数量(也可以说是总价钱去买output) / output数量
        // this.getInputPrice();
        // console.log(intPrice, exchangeMoney.INPUT, exchangeMoney.OUTPUT, this.outputPricePer, this.inputPricePer);
    },
    updateChildValuationState(val) {
        this.valuationState = val;
    },
    async updateChildApprovedArrStatus(approvedArrStatus) {
      //更像子组件批准状态
    //   console.log(approvedArrStatus);
      this.approvedArrStatus = approvedArrStatus
      // if (str === "INPUT") {
      //   this.approvedArrStatus.INPUT = value;
      // } else {
      //   this.approvedArrStatus.OUTPUT = value;
      // }
    },
    //获取地址栏对应值
    paramsUrlAddress() {
        const inputCurrency = this.$route.query.inputCurrency;
        const outputCurrency = this.$route.query.outputCurrency;
        let inputSerchData = [];
        let outputSerchData = [];
        let input = undefined;
        let ouput = undefined;
        let inputAllowance = false;
        let ouputAllowance = false;
        if (inputCurrency && inputCurrency !== undefined) {
            //   console.log(inputCurrency, publicAddress.DEFANT_CURRENCY);
            if (inputCurrency === publicAddress.DEFANT_CURRENCY) {
            inputSerchData = this.swapSearchProps(this.swapPools, inputCurrency, "name");
            } else {
                inputSerchData = this.swapSearchProps(
                    this.swapPools,
                    inputCurrency,
                    "tokenAddress"
                );
            }
        // console.log(inputSerchData);
        } else {
            // inputSerchData = this.swapSearchProps(this.swapPools, publicAddress.DEFANT_CURRENCY, "name");
            inputSerchData = this.swapSearchProps(this.swapPools, Address.BUSDT, "tokenAddress");
            // changeURLPar(window.location.href, "inputCurrency", publicAddress.DEFANT_CURRENCY);
            // this.$router.push({
            //     query:merge(this.$route.query,{'inputCurrency':Address.BUSDT})
            // })
        }
        if (inputSerchData && inputSerchData[0]) {
            input = inputSerchData[0].poolId;
            inputAllowance = inputSerchData[0].allowance > 0 ? true : false;
        }

        if (outputCurrency && outputCurrency !== undefined) {
            // console.log("111");
            if (outputCurrency === publicAddress.DEFANT_CURRENCY) {
                outputSerchData = this.swapSearchProps(this.swapPools, outputCurrency, "name");
            } else {
                outputSerchData = this.swapSearchProps(this.swapPools, outputCurrency,"tokenAddress");
            }
        } else {
            // outputSerchData = this.swapSearchProps(this.swapPools, publicAddress.DEFANT_CURRENCY, "name");
            // changeURLPar(window.location.href, "outputCurrency", Address.BUSDT);
            // this.$router.push({
            //     query:merge(this.$route.query,{'outputCurrency':publicAddress.DEFANT_CURRENCY})
            // })
        }
        if (outputSerchData && outputSerchData[0]) {
            ouput = outputSerchData[0].poolId;
            ouputAllowance = Number(outputSerchData[0].allowance > 0) ? true : false;
        }
        //   console.log(input, ouput);
        this.exchangeArray = {
            INPUT: input, 
            OUTPUT: ouput
        };
        // console.log(inputAllowance, ouputAllowance);
        this.approvedArrStatus = {
            INPUT: inputAllowance, 
            OUTPUT: ouputAllowance
        };
        this.timeRefusr = new Date().getTime();
    },
     //模糊搜索
    swapSearchProps(list, keyWord, name) {
        let arr = [];
        for (let i = 0; i < list.length; i++) {
            let flag=false
            if(list[i][name] && list[i][name].indexOf(keyWord) >= 0){
                flag = true
            }
            if(flag) {
                arr.push(list[i])
            }
        }
        return arr;  
    },
    //修改刷新价格事件
    savePriceRefreshState() {
        this.priceRefreshState = this.priceRefreshState ? false : true;
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
        if(putKey >= 0) {
            const filesArray = this.filersSwapPoolsArr(putKey);
            arr = this.swapPools[filesArray]
        }
        // console.log(arr);
        return arr;
    },
    //筛选指定选择币种事件
    filersSwapPoolsArr(poolId) {
        // return 0.0001;
        // console.log(poolId);
        let swapPoolsArrIndex = {};
        if(this.swapPools.length > 0) {
            this.swapPools.map((pool, index) => {
                if(poolId == pool.poolId) {
                    swapPoolsArrIndex = index;
                }
            });
        }
        // console.log(swapPoolsArrIndex);
        return swapPoolsArrIndex;
    },
    /**
     * 价格影响计算 dx / (x + dx)
     * 如果用0.2个bnb，兑换20个Guru，如果池子里有1个bnb和40个Guru；
     * x*y=1*40=40;dx=0.2,y=40;
     * 那么滑点就是0.2/40=1/200;
     * 最小获得量：（估值 - 最小值）* 2 * 100
     * @param {*} result 
     * @returns 
     */ 
    computePriceImpact(result) {
        let num = 0;
        let supplierFees = 0;
        // console.log(result);
        // keepDecimalNotRounding(exchangeMoney.INPUT * 0.0025, 8)
        num = this.SlipPointValue(result);
        // console.log(exchangeMoney.INPUT, "supplierFees:"+supplierFees, "num:"+num);
        let color = '';
        if(num <= 0.01) {
            // return (
            //     <span style="color:rgb(49, 208, 170)">{'<'}0.01%</span>
            // );
            return {
                color: "rgb(49, 208, 170)",
                value: "<0.01%"
            };
        } else {
            if(num <= 1) {
                color = "rgb(49, 208, 170)";
            } else if(num > 1 && num <= 3) {
                color = "rgb(244, 238, 255)";
            } else if(num > 3 && num <= 5) {
                color = "rgb(255, 178, 55)";
            } else {
                color = "rgb(237, 75, 158)";
            }
            // return (
            //     <span style="color:">{'<'}0.01%</span>
            //     // <Typography variant="subtitle1" style={{color:color}}>{num}%</Typography>
            // );
            return {
                color: color,
                value: num + "%"
            };
        }
    },
    // 滑点值计算
    SlipPointValue(result) {
        let num = 0;
        // let supplierFees = 0
        let fixedPrice = this.exchangeMoney.INPUT * result.tokenBalanceUsd;
        // console.log(fixedPrice, exchangeMoney.OUTPUT)
        let priceImpact = (fixedPrice - Number(this.exchangeMoney.OUTPUT)) / fixedPrice * 100
        num = priceImpact.toFixed(2);
        return num;
        // return publicAddress.SLIPOINT;
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
            number = keepDecimalNotRounding(byDecimals(tokenBalance, tokenDecimals), num);
        }
        // console.log(tokenBalance, tokenDecimals);
        return number;
    },
    /**
     * 获得量计算
     * 最小获得量：估值 * （1 - 滑点值）
     * 最大出售量：估值 * （1 + 滑点数）
     * @param {*} result 
     * @returns 
     */ 
    computeAcquiredQuantity(result) {
        let salesVolume = 0;
        if(result) {
            // let pointValue = this.SlipPointValue(result) / 100; //获取滑点值
            let pointValue = publicAddress.SLIPOINT; //获取滑点值
            if(this.valuationState === 'INPUT') { //最大出售量
                // salesVolume = this.exchangeMoney[this.valuationState] > 0 ? this.exchangeMoney[this.valuationState] * (1 + publicAddress.SLIPOINT) : 0;
                salesVolume = this.exchangeMoney[this.valuationState] > 0 ? this.exchangeMoney[this.valuationState] * (1 + pointValue) : 0;
            } else { //最小获得量
                salesVolume = this.exchangeMoney[this.valuationState] > 0 ? this.exchangeMoney[this.valuationState] * (1 - pointValue) : 0;
            }
        }
        // console.log(keepDecimalNotRounding(salesVolume));
        return keepDecimalNotRounding(salesVolume, 10, true);
    },
    confirmExchangeHtml() { //按钮判断
        const inputArray = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT);
        const outputArray = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT);
        let _html = '';
        let obj = {};
        if(inputArray) {
            const inputBlance = Number(inputArray.tokenBalance) > 0 ? keepDecimalNotRounding(inputArray.tokenBalance, 18) : 0;
            // const outputBlance = outputArray.tokenBalance > 0 ? keepDecimalNotRounding(outputArray.tokenBalance, 18) : 0;
            // console.log(exchangeMoney.INPUT);
            // console.log(inputBlance, outputBlance);
            // console.log(exchangeMoney.INPUT, exchangeMoney.OUTPUT);
            // console.log(this.approvedArrStatus);
            if(Number(this.exchangeMoney.INPUT) > 0) {
                if(Number(this.exchangeArray.OUTPUT) >= 0) {
                    if(Number(inputBlance) > 0 && Number(this.exchangeMoney.INPUT) <= Number(inputBlance)) { //如果 INPUT 输入的大于余额
                        // if(outputBlance > 0 && exchangeMoney.OUTPUT <= outputBlance) {//如果 OUTPUT 输入的大于余额
                            if(this.approvedArrStatus.INPUT) { //判断INPUT是否批准
                                // if(this.approvedArrStatus.OUTPUT) {
                                    obj = {
                                        disabled: false,
                                        text: this.$t('swap:Exchange'),
                                        funName: 'handleClickOpen()',
                                    };
                                // } else {
                                //     obj = {
                                //         disabled: false,
                                //         text: this.$t('swap:Approve') + ' ' + outputArray.name,
                                //         funName: 'clickGuruApprove('+'`'+outputArray.tokenAddress+'`'+', `OUTPUT`)',
                                //     };
                                //     // return (
                                //     //     <Button variant="contained" size="medium" color="primary" className={classes.exchangeButton} onClick={() => clickGuruApprove(outputArray.tokenAddress, 'OUTPUT')}>{isLanguageZh ? '批准' : 'Approve'} {outputArray.name}</Button>
                                //     // );
                                // }
                            } else {
                                obj = {
                                    disabled: false,
                                    text: this.$t('swap:Approve') + ' ' + inputArray.name,
                                    funName: 'clickGuruApprove('+'`'+inputArray.tokenAddress+'`'+', `INPUT`)',
                                };
                            }
                        // } else {
                        //    _html `<button disabled class="exchangeButton">` + outputArray.name + ` Insufficient balance</button>`;
                        // }
                    } else { //余额不足
                        obj = {
                            disabled: true,
                            text: inputArray.name + ' ' + this.$t('swap:InsufficientBalance'),
                            funName: '',
                        };
                    }
                } else { //选择币种
                        obj = {
                            disabled: true,
                            text: this.$t('swap:SelectAmount'),
                            funName: '',
                        };
                }
            } else { //输入金额
                obj = {
                    disabled: true,
                    text: this.$t('swap:EnterAmount'),
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
    //用户开始兑换操作
    confirmExchange() {
        this.btnLoading = true
        const TK1_CONTRACT_ADDR = this.getFilersSwapPoolsArr(this.exchangeArray.INPUT).tokenAddress;
        const TK2_CONTRACT_ADDR = this.getFilersSwapPoolsArr(this.exchangeArray.OUTPUT).tokenAddress;
        // console.log(TK1_CONTRACT_ADDR);
        let methodsFunName = 'swapExactTokensForTokens';
        let isContainETH = false; //是否包含ETH
        if(TK1_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase() || TK2_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) {
          isContainETH = true;
        }
        if(isContainETH) {
          if(TK1_CONTRACT_ADDR.toUpperCase() === publicAddress.BNB_ADDR.toUpperCase()) { //如果是用BNB兑换的话
              methodsFunName = swapExactETHForTokens;
          } else {
              methodsFunName = swapExactTokensForTokens;
          }
        } else {
          methodsFunName = swapExactTokensForTokens;
        }
        let minimumReceived = this.computeAcquiredQuantity(this.getFilersSwapPoolsArr(this.exchangeArray['INPUT']));
        methodsFunName(this.exchangeMoney.INPUT, this.exchangeMoney.OUTPUT, TK1_CONTRACT_ADDR, TK2_CONTRACT_ADDR, minimumReceived).then((result)=> {
            console.log(result);
            this.exchangeMoney = {
              INPUT: '',
              OUTPUT: '',
            };
            this.handleSelectTokenClose();
        }).finally(()=>{
            this.btnLoading = false
        })
    },
    handleClickOpen() {
        this.selectTokenOpen = true;
    },
    handleSelectTokenClose() {
        this.selectTokenOpen = false;
    }
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/color.scss';
.container {
  flex-grow: 1;
  align-items: center;
  padding-top: 20px;
  width: 90%;
  margin: 0 auto;
  .item {
    border-radius: 24px;
    margin-top: 20px;
    max-width: 436px;
    width: 100%;
    cursor: default;
    margin: 0 auto;
    // border: 1px solid #0096ff;
    /deep/ {
      .el-card {
        background: linear-gradient(#00C3E9, #2D50D2); /* 标准语法*/
        // background-color: #05D2FA;
        border: 2px solid #fff;
        border-radius: 20px;
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
        // color: #B0B0DD;
        // font-size: 0.16px;
      }
    }
    .info {
        color: #fff;
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
        width: 90%;
        margin: 0 auto;
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
        background: #8b8b9b;
      }
    }
  }
  .price {
    margin-top: 10px;
    line-height: 40px;
    .refresh {
        padding: 2px;
        button {
            background-color: #05D2FA;
            color: #fff;
        }
        i {
            font-weight: 800;
            font-size: 15px;
        }
    }
  }
  .item-bottom {
    border-radius: 24px;
    margin-top: 10px;
    max-width: 436px;
    // width: 100%;
    cursor: default;
    margin: 0 auto;
    // padding: 15px;
    background-color: #8ED4FB;
    color: #fff;
    .item-bottom-box {
      padding: 15px;
    //   line-height: 25px;
      .tooltip {
          span {
              position: absolute;
          }
        //   position: relative;
      }
    }
  }
  .item-bottom-two {
    border-radius: 24px;
    margin-top: 10px;
    // max-width: 436px;
    width: 100%;
    cursor: default;
    margin: 0 auto;
    font-size: 13px;
    // padding: 15px;
    background-color: rgb(8, 6, 11);
    color: #fff;
    .item-bottom-box {
      padding: 15px;
      line-height: 25px;
      .tooltip {
          span {
              position: absolute;
          }
        //   position: relative;
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

    .dialogClass {
        /deep/ {
            .el-dialog--center {
                width: 95%;
                max-width: 500px;
                min-height: 60vh;
                border-radius: 32px;
                background-color: #05D2FA;
                // @include sideBarSwapInputBgc($claimCardSwapInput-dark);
                margin: 0 auto;
                // margin-left: 45%;
            }
            .el-dialog__title{
                @include mainFont($color-mainFont-dark);
                // float: left;
            }
            .content {
                @include mainFont($color-mainFont-dark);
                font-size: 16px;
                img {
                    vertical-align:middle;
                }
                .arrow {
                    margin: 20px 0 20px 25px;
                    i {
                        font-weight: 800;
                        font-size: 15px;
                    }
                }
                .desc {
                    margin-top: 40px;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
<style lang="scss">
    .exchangeButton {
        background: linear-gradient(90deg, #0096ff, #0024ff);
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
    .exchangeButton:disabled {
        background: #8b8b9b;
    }
</style>