<template>
  <div class="container">
    <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
    <van-nav-bar
        :title="$t('liquidity:removeLiquidity')"
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
                    <span>{{ $t('liquidity:Remove') }} {{currentPools && currentPools.name + '-' + currentPools.name2}} {{ $t('liquidity:Liquidity') }}</span>
                    <p class="tips">{{ $t('liquidity:ToReceive') }} {{currentPools && currentPools.name}} {{ $t('liquidity:and') }} {{currentPools && currentPools.name2}}</p>
                </el-col>
            </el-row>
        </div>
        <div class="info">
            <el-row class="amount">
                <el-col :span="12">{{ $t('liquidity:Amount') }}</el-col>
                <el-col :span="12" align="right">
                    <el-button type="text" @click="onDetailedChange" style="padding: 0;">{{isDetailedState ? $t('liquidity:Simple') : $t('liquidity:Detailed')}}</el-button>
                </el-col>
            </el-row>
            <div v-if="isDetailedState">
                <el-row>
                    <SwapExchange
                        @childSwapPoolsClick="childSwapPoolsClick"
                        @childApprovedArrStatus="childApprovedArrStatus"
                        @updateChildExchangeMoney="updateChildExchangeMoney"
                        @updateChildValuationState="updateChildValuationState"
                        @childFormTokenBlance="childFormTokenBlance"
                        :childExchangeArray="exchangeArray"
                        :childExchangeMoney="exchangeMoney"
                        :swapPools="swapPools"
                        :currentPools="currentPools"
                        :formTokenBlance="formTokenBlance"
                        :key="timeRefusr"
                    />
                    <br />
                </el-row>
            </div>

            <div v-else>
                <!-- 滑动条 -->
                <div class="block" v-show="!isDetailedState">
                    <span class="demonstration">{{amountPercentage}}%</span>
                    <el-slider v-model="amountPercentage" :show-tooltip="false" @change="handleSliderChange"></el-slider>
                    <el-row :gutter="10">
                        <el-col :span="6"><el-button type="primary" round @click="handleSliderChange(25)">25%</el-button></el-col>
                        <el-col :span="6"><el-button type="primary" round @click="handleSliderChange(50)">50%</el-button></el-col>
                        <el-col :span="6"><el-button type="primary" round @click="handleSliderChange(75)">75%</el-button></el-col>
                        <el-col :span="6"><el-button type="primary" round @click="handleSliderChange(100)">Max</el-button></el-col>
                    </el-row>
                </div>

                <div class="icon-bottom">
                    <i class="el-icon-bottom"></i>
                </div>

                <div class="will-receive">
                    <div :span="24" class="row-text">{{ $t('liquidity:YouWillReceive') }}</div>
                    <div class="row-box">
                        <el-row>
                            <el-col :span="12">
                                <img size="small" :src="currentPools && currentPools.logo && currentPools.logo" width="20" />
                                <span style="margin-left: 5px;font-weight: 800;">{{currentPools && currentPools.name}}</span>
                            </el-col>
                            <el-col :span="12" align="right">{{exchangeMoney.INPUT}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <img size="small" :src="currentPools && currentPools.logo2" width="20" />
                                <span style="margin-left: 5px;font-weight: 800;">{{currentPools && currentPools.name2}}</span>
                            </el-col>
                            <el-col :span="12" align="right">{{exchangeMoney.OUTPUT}}</el-col>
                        </el-row>
                    </div>
                </div>
                <br />
            </div>
            <div class="will-receive">
                <div :span="24" class="row-text">{{ $t('public:Price') }}</div>
                <div class="row-box">
                    <el-row>
                        <el-col :span="12">
                            <span>1 {{currentPools && currentPools.name}} =</span>
                        </el-col>
                        <el-col :span="12" align="right">{{currentPools && currentPools.tokenOneBalanceUsd}} {{currentPools && currentPools.name2}}</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <span>1 {{currentPools && currentPools.name2}} =</span>
                        </el-col>
                        <el-col :span="12" align="right">{{currentPools && currentPools.tokenTwoBalanceUsd}} {{currentPools && currentPools.name}}</el-col>
                    </el-row>
                </div>
            </div>
            
        </div>
        <el-divider style="width: 100vh;margin-left: -20px;"></el-divider>
        <div class="btn" style="padding-top: 0;">
          <!-- <button class="exchangeButton">+ Add Liquidity</button> -->
            <el-row :gutter="20">
                <el-col :span="12" align="center">
                    <button v-loading="btnLoading" :disabled="enableButton().disabled || btnLoading" :onClick="enableButton().funName" class="exchangeButton">{{enableButton().text}}</button>
                </el-col>
                <el-col :span="12" align="center">
                    <!-- :disabled="removeButton().disabled || btnLoading" -->
                    <button  :onClick="removeButton().funName" :disabled="removeButton().disabled || btnLoading" class="exchangeButton">{{removeButton().text}}</button>
                </el-col>
            </el-row>
        </div>
      </el-card>
    </div>

    <div class="item-bottom" style="margin-top: 20px">
      <div class="item-bottom-box">
        <el-row class="lp-desc">
            <el-col :sm="24">{{ $t('liquidity:LPTokensWallet') }}</el-col>
        </el-row>
        <el-row class="lp">
            <el-col :sm="12">
                <img size="small" :src="currentPools && currentPools.logo && currentPools.logo" width="20" />
                <img size="small" :src="currentPools && currentPools.logo2" width="20" />
                <span> {{currentPools && currentPools.name}}-{{currentPools && currentPools.name2}} LP</span>
            </el-col>
          <el-col :sm="12" class="textRight">{{currentPools && currentPools.tokenBalance && computeTokenBalanceChange(currentPools.tokenBalance, currentPools.tokenDecimals, 10)}}</el-col>
        </el-row>
        <el-row>
            <el-col :sm="8">{{ $t('liquidity:SharePool') }}:</el-col>
            <el-col :sm="16" class="textRight">
                <span>{{currentPools && calculationShareNumber(currentPools)}}%</span>
            </el-col>
        </el-row>
        <el-row>
          <el-col :sm="12">Pooled {{currentPools && currentPools.name}}:</el-col>
          <el-col :sm="12" class="textRight">{{currentPools && currentPools.tokenBalance && computeSingleCurrencyBalance(currentPools.tokenBalance, currentPools.totalSupply, currentPools.reserves[0], currentPools.tokenDecimals)}}</el-col>
        </el-row>
        <el-row>
          <el-col :sm="12">Pooled {{currentPools && currentPools.name2}}:</el-col>
          <el-col :sm="12" class="textRight">{{currentPools && currentPools.tokenBalance && computeSingleCurrencyBalance(currentPools.tokenBalance, currentPools.totalSupply, currentPools.reserves[1], currentPools.tokenDecimals)}}</el-col>
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
                <el-col :span="12">
                    <span>{{exchangeMoney.INPUT}}</span>
                </el-col>
                <el-col :span="12" class="textRight">
                    <img :src="currentPools && currentPools.logo" alt="" width="25" />
                    <span style="color:#0096ff;">&nbsp;&nbsp;{{currentPools && currentPools.name}}</span>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24" class="arrow">
                    <i class="el-icon-plus"></i>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <span>{{exchangeMoney.OUTPUT}}</span>
                </el-col>
                <el-col :span="12" class="textRight">
                    <img :src="currentPools && currentPools.logo2" alt="" width="25" />
                    <span style="color:#0096ff;">&nbsp;&nbsp;{{currentPools && currentPools.name2}}</span>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24" class="desc">
                    {{ $t('liquidity:OutputTransactionDesc') }}  
                </el-col>
            </el-row>
            <br />
            <el-row>
                <el-col :span="12">
                    <span>{{ $t('liquidity:Deposited') }} {{currentPools && currentPools.name}}/{{currentPools && currentPools.name2}}</span>
                </el-col>
                <el-col :span="12" class="textRight">
                    <img :src="currentPools && currentPools.logo" alt="" width="25" />
                    <img :src="currentPools && currentPools.logo2" alt="" width="25" />
                    <span style="color:#0096ff;">&nbsp;{{formTokenBlance && formTokenBlance}}</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5">
                    <span>{{ $t('liquidity:Price') }}</span>
                </el-col>
                <el-col :span="19" align="right">
                    <p>1 {{currentPools && currentPools.name}} = {{currentPools && currentPools.tokenOneBalanceUsd}} {{currentPools && currentPools.name2}}</p>
                    <p>1 {{currentPools && currentPools.name2}} = {{currentPools && currentPools.tokenTwoBalanceUsd}} {{currentPools && currentPools.name}}</p>
                </el-col>
            </el-row>

        </div>
        <div class="btn">
          <el-button v-loading="btnLoading" class="exchangeButton" style="margin-top:30px" :disabled="btnLoading" @click="removeLiquidity">{{ $t('liquidity:Confirm') }}</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import swapABI from '@/wallet/abis/swapABI.json'
import SwapExchange from "@/components/SwapExchange.vue";
import configAddress from '@/wallet/swap_pools';
const publicAddress = configAddress.publicAddress;
import { keepDecimalNotRounding, byDecimals, replaceParamVal, getUrlParams, changeURLPar} from '@/utils/tools'
import { clickApprove, removeLiquidityPermit, getEthSignTypedData } from '@/wallet/swap'


export default {
  data() {
    return {
        receiveLoading: false,
        btnLoading: false,
        exchangeArray: {
            INPUT: undefined,
            OUTPUT: undefined,
        },
        exchangeMoney: {},
        valuationState: 'OUTPUT',
        amountPercentage: 100, //金额百分比值
        isDetailedState: false, //是否详细
        approvedArrStatus: {
            INPUT: false,
            OUTPUT: false,
        },
        currentPools: {}, //当前选择的数据
        formTokenBlance: '', //输入值 计划删除的数量金额
        enableAutographState: false, //启用这次删除状态 默认没有启用 需要签名验证
        signatureData: {}, //授权签名
        isFirstEnter: true,
        timeRefusr: new Date().getTime(),
        selectTokenOpen: false,
    };
  },
  created(){
  },
  components: {
      SwapExchange
  },
  computed: {
    ...mapState({
      isConnected: (state) => state.base.isConnected,
      swapPools: (state) => state.base.swapPoolsList,
      liquidityPools: (state) => state.base.liquidityPoolsList,
      isMobel:state=>state.comps.isMobel,
    }),
  },
  watch: {
    isConnected: {
      immediate: true,
      handler(val) {
        if (val && (!this.liquidityPools.length && !this.swapPools.length)) {
          setTimeout(() => {
              this.$store.dispatch("swapPoolsTokenList");
            this.$store.dispatch("liquidityPoolsTokenList");

            // if(this.timeInterval) clearInterval(this.timeInterval)
            // setInterval(()=>{
            //     this.$store.dispatch('refreshSwapPoolsList')
            //     this.$store.dispatch('refreshLiquidityPoolsList')
            // },10000)

            console.log(this.swapPools, this.liquidityPools);
          }, 300);
        }
      },
    },
    liquidityPools: {
        immediate: true,
        handler(val) {
            this.paramsUrlAddress();
        },
        deep: true
    }
  },
  mounted() {
      window.getEthSignTypedData = this.getEthSignTypedData;
      window.handleClickOpen = this.handleClickOpen;
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
        let inputSerchData = [];
        let outputSerchData = [];
        let input = undefined;
        let ouput = undefined;
        let inputAllowance = false;
        let ouputAllowance = false;
        if (inputCurrency && inputCurrency !== undefined) {
            // console.log(this.swapPools);
            if (inputCurrency === publicAddress.DEFANT_CURRENCY) {
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
        // else {
        //     changeURLPar(window.location.href, "inputCurrency", publicAddress.DEFANT_CURRENCY);
        // }
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
        this.exchangeArray = {
            INPUT: input, 
            OUTPUT: ouput
        };
        this.approvedArrStatus = {
            INPUT: inputAllowance, 
            OUTPUT: ouputAllowance
        };
        // this.timeRefusr = new Date().getTime();
        // console.log(inputAllowance);
        if (inputCurrency && outputCurrency) {
            let currentPoolsArr = [];
            if (inputCurrency === 'H2O') {
                currentPoolsArr = this.getRemovePoolData(publicAddress.H2O_ADDRESS, outputCurrency);
            } else {
                currentPoolsArr = this.getRemovePoolData(inputCurrency, outputCurrency);
            }
            // console.log(currentPoolsArr)
            this.currentPools = currentPoolsArr;
            // setLodingOpen({ isLoding: false });
            this.handleSliderChange(this.amountPercentage, true, currentPoolsArr);
            // console.log(currentPools);
        }
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
    /**
     * 获取当前要删除的数据对象
     * @param {*} tk0 
     * @param {*} tk1 
     * @returns 
     */
    getRemovePoolData(tk0, tk1) {
        if (this.liquidityPools && this.liquidityPools.length > 0) {
            const arr = this.liquidityPools.find((item, index, arr) => {
                return item.tk0Address === tk0 && item.tk1Address === tk1;
            });
            return arr;
        }
    },
    /**
     * 修改金额百分比值
     * @param {*} event 事件
     * @param {*} newValue 滑动百分比
     */
    handleSliderChange(newValue, isResetSing) {
        if (this.currentPools && this.currentPools.tokenBalance > 0) {
            const newTokenBalance = this.currentPools.tokenBalance * (newValue / 100); //要输出的数量值
            // console.log(newValue);
            this.formTokenBlance = this.computeTokenBalanceChange(newTokenBalance, this.currentPools.tokenDecimals, 10);
            const getTokenOneBlance = this.computeSingleCurrencyBalance(newTokenBalance, this.currentPools.totalSupply, this.currentPools.reserves[1], this.currentPools.tokenDecimals, 10);
            const getTokenTwoBlance = this.computeSingleCurrencyBalance(newTokenBalance, this.currentPools.totalSupply, this.currentPools.reserves[0], this.currentPools.tokenDecimals, 10);
            // console.log(getTokenOneBlance); 
            // setGetTokenBlance({COIN1: getTokenOneBlance, COIN2: getTokenTwoBlance});
            this.exchangeMoney = {
                INPUT: getTokenOneBlance, 
                OUTPUT: getTokenTwoBlance
            };
            if(this.currentPools.allowance && Number(this.currentPools.allowance > 0)) {
                this.enableAutographState = true;
            } else {
                this.enableAutographState = false;
            }
        }
        // console.log(this.exchangeArray);
        // if(!isResetSing || isResetSing == undefined) {
        //     this.enableAutographState = false;
        //     this.signatureData = null;
        // }

        this.amountPercentage = newValue;
        this.timeRefusr = new Date().getTime();
    },
    /**
      * 计算单币余额
      * lp 余额 / lp 总数 * 成分币的数量
    */
    computeSingleCurrencyBalance(tokenBalance, totalSupply, componentNumber, tokenDecimals, length) {
        let tokenBlance = 0;
        if (tokenBalance > 0 && totalSupply > 0 && componentNumber > 0) {
            tokenBlance = this.computeTokenBalanceChange(tokenBalance / totalSupply * componentNumber, tokenDecimals, length > 0 ? length : 10);
        }
        return tokenBlance;
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
            number = keepDecimalNotRounding(tokenBalance, num);
        }
        // console.log(tokenBalance, tokenDecimals);
        return number;
    },

    //更像WBNB余额
    childFormTokenBlance(formValue) {
        if (formValue >= 0) {
            const tokenBalance = this.computeTokenBalanceChange(this.currentPools.tokenBalance, this.currentPools.tokenDecimals, 18);
            const amountPercentage = ((formValue / tokenBalance) * 100).toFixed(0);
            // console.log(amountPercentage);
            this.amountPercentage = amountPercentage <= 100 ? Number(amountPercentage) : 0;
            this.setFormTokenBlance = formValue;
        } else {
            this.setFormTokenBlance = '';
        }
        // setEnableAutographState(false);
        // setSignatureData();
        // setGetTokenBlance({COIN1: inputValue > 0 ? inputValue : '', COIN2: outputValue > 0 ? outputValue : ''});
    },
    //详细事件
    onDetailedChange(event) {
        this.isDetailedState = this.isDetailedState ? false : true;
    },
    /**
     * 启用按钮
     * @returns html
     */
    enableButton() { //授权按钮
        let obj = {};
        if (this.currentPools && this.formTokenBlance > 0 && this.exchangeMoney.INPUT > 0 && this.exchangeMoney.OUTPUT > 0) {
            if (this.enableAutographState) {
            // if (this.currentPools.allowance && Number(this.currentPools.allowance) > 0) {
                obj = {
                    disabled: true,
                    // text: 'Approval',
                    text: this.$t('public:Approve'),
                    funName: '',
                };
            } else {
                obj = {
                    disabled: false,
                    // text: 'Enable',
                    text: this.$t('public:Approve'),
                    funName: 'getEthSignTypedData()',
                };
            }
        } else {
                obj = {
                    disabled: true,
                    // text: 'Enable',
                    text: this.$t('public:Approve'),
                    funName: '',
                };
        }
        return obj;
    },
    /**
     * 移除按钮
     * @returns html
     */
    removeButton() {
        // console.log(formTokenBlance, exchangeMoney);
        let obj = {};
        if (this.formTokenBlance > 0 && this.exchangeMoney.INPUT > 0 && this.exchangeMoney.OUTPUT > 0) {
            if (this.enableAutographState) {
                obj = {
                    disabled: false,
                    text: this.$t('liquidity:Remove'),
                    funName: 'handleClickOpen()',
                };
            } else {
                obj = {
                    disabled: true,
                    text: this.$t('liquidity:Remove'),
                    funName: '',
                };
            }
        } else {
            obj = {
                disabled: true,
                text: this.$t('liquidity:EnterAmount'),
                funName: '',
            };
        }
        return obj;
    },
    /**
     * 授权验证签名 作废
     * 改为 批准
     * @returns 
     */
    getEthSignTypedData() {
        this.enableAutographState = false;
        this.signatureData = null;
        this.btnLoading = true
        // getEthSignTypedData(this.formTokenBlance, this.currentPools.tokenAddress, this.currentPools.nonce).then((result)=> {
        //     if(result) {
        //         const now = Math.round(Date.now() / 1000);
        //         this.signatureData = {
        //             v: result.v,
        //             r: result.r,
        //             s: result.s,
        //             deadline: now + 1800,
        //         };
        //         this.enableAutographState = true;
        //     } else {
        //         this.signatureData = {};
        //     }
        // }).finally(()=>{
        //     this.btnLoading = false
        // })
        clickApprove(this.currentPools.tokenAddress).then((result) => {
            // console.log(result);
            if(result) {
                this.enableAutographState = true;
            } else {
                this.enableAutographState = false;
            }
        }).finally(()=>{
            this.btnLoading = false
        })
    },
    //确认移除流动性 弹框
    handleClickOpen() {
        this.selectTokenOpen = true;
    },
    //开始移除流动性 事件
    removeLiquidity() {
        this.btnLoading = true;
        if(this.enableAutographState) {
            removeLiquidityPermit(this.formTokenBlance, this.exchangeMoney.INPUT, this.exchangeMoney.OUTPUT, this.currentPools.tk0Address, this.currentPools.tk1Address, this.signatureData).then((result) => {
                console.log(result);
                if(result) {
                    this.selectTokenOpen = false;
                    this.enableAutographState = true;
                    this.signatureData = null;
                    this.handleSliderChange(100);
                }
            }).finally(()=> {    
                this.btnLoading = false;
                this.selectTokenOpen = false;
                this.enableAutographState = true;
                this.signatureData = null;
            })
        } 
    },
    //关闭选择币种弹窗事件
    handleSelectTokenClose() {
        this.enableAutographState = false;
        this.selectTokenOpen = false;
    },
    /**
     * 计算流动性份额值 LP数量 / LP总数
     * @param {*} pool 
     * @returns 
     */
    calculationShareNumber(pool) {
        let total = 0;
        if (pool.tokenBalance) {
            const totalSupply = this.computeTokenBalanceChange(pool.totalSupply, pool.tokenDecimals, 10);
            // console.log(totalSupply);
            const tokenBalance = this.computeTokenBalanceChange(pool.tokenBalance, pool.tokenDecimals, 10);
            total = ((tokenBalance / totalSupply) * 100).toFixed(10);
        }
        return total;
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
        flex-grow: 1;
        align-items: center;
        // padding-top: 50px;
        width: 100%;
        margin: 0 auto;
        .van-nav-bar {
            background-color: transparent;
            .van-icon {
                color: #fff;
            }
        }
        .van-nav-bar__title {
            color: #fff;
        }
        .icon-back {
            cursor:pointer;
            font-size: 30px;
            line-height: 50px;
        }
        .item {
            border-radius: 24px;
            margin-top: 20px;
            max-width: 436px;
            width: 90%;
            cursor: default;
            margin: 0 auto;
            border: 1px solid #0096ff;
            .el-card {
                background-color: #AE8BF5;
                border-radius: 24px;
                border-color: #AE8BF5;
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
                    .add-liquidity {
                        color: #b7b7b7;
                    }
                    .amount {
                        color: #fff;
                        margin-bottom: 20px;
                        button {
                            color: #45f2ff;
                        }
                    }
                    .block {
                        color: #fff;
                        margin-top: 10px;
                        padding: 16px;
                        border: 1px solid #0096ff;
                        border-radius: 20px;
                        .demonstration {
                            font-size: 50px;
                            font-weight: 800;
                        }
                        .el-slider__runway {
                            height: 10px;
                            background-color: #98bfe9;
                            border-radius: 10px;
                            .el-slider__bar {
                                height: 10px;
                            }
                            .el-slider__button-wrapper {
                                top: -12px;
                            }
                        }
                        button {
                            @include swapBlackSliderBgc($swapBlackSlider-dark);
                            color: #fff;
                            border: rgb(53, 53, 71);
                        }
                        button:hover {
                            @include swapBlackHoverBgc($swapBlackHover-dark);
                        }
                    }
                    .icon-bottom {
                        text-align: center;
                        margin-top: 20px;
                        font-size: 20px;
                        .el-icon-bottom {
                            font-weight: 800;
                        }
                    }
                    .will-receive {
                        color: #fff;
                        .row-text {
                            color: #45f2ff;
                        }
                        .row-box {
                            @include sideBarSwapInputBgc($claimCardSwapInput-dark);
                            margin-top: 10px;
                            border-radius: 15px;
                            padding: 16px;
                            line-height: 30px;
                        }
                    }
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
            }
            .el-loading-mask {
                background-color: rgba(0, 0, 0, 0.8);
            }
            button:disabled {
                background: #8b8b9b;
            }
            }
        }
        .item-bottom {
            img {
                vertical-align: middle;
            }
            border-radius: 24px;
            margin-top: 10px;
            // max-width: 436px;
            width: 90%;
            cursor: default;
            margin: 0 auto;
            // padding: 15px;
            background-color: #AE8BF5;
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
            .lp-desc {
                color: #45f2ff;
                font-weight: 800;
            }
            .lp {
                padding: 10px 0;
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
        .dialogClass {
                .el-dialog--center {
                    color: #fff;
                    width: 95%;
                    max-width: 500px;
                    min-height: 60vh;
                    border-radius: 32px;
                    background-color: #AE8BF5;
                    margin: 0 auto;
                    // margin-left: 45%;
                }
                .el-dialog__title{
                    color: #fff;
                    // float: left;
                }
                .content {
                    color: #fff;
                    font-size: 15px;
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