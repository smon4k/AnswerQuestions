<template>
    <div class="container">
        <!-- <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
        <van-nav-bar
            title="钱包"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onReturnLeft"
        /> -->
        <!-- <div class="generalStatistics">
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
        </div> -->
        <!-- <van-tabs v-model="tabActive">
            <van-tab title="USDT充提" to="/usdt"></van-tab>
            <van-tab title="SCT充提"> -->
                <van-row class="container" style="margin-top:20px;">
                    <van-col :span="24">
                        <van-tabs v-model="activeName" @click="handleClick" :stretch="true">
                            <van-tab title="存入" name="1" :disabled="trading">
                                <van-row class="balance">
                                    <van-col :span="24">
                                        <div>
                                            <span>平台余额：{{ keepDecimalNotRounding(Number(localBalance) + Number(walletBalance), 4) }} SCT</span>
                                            <br />
                                            <span>钱包余额：{{ toFixed(Number(SCTBalance), 4) }} SCT</span>
                                            <!-- <span>GS Balance：{{gsBalance}}</span> -->
                                            <!-- <span v-else>GS Balance：<el-skeleton-item variant="text" style="width: 5%;" /></span> -->
                                        </div>
                                    </van-col>
                                    <!-- <van-col :span="24">
                                        <div>
                                            <div>
                                                <span v-if="!isStatus && !isWithdraw">CS Balance：{{csBalance}}</span>
                                                <span v-else>
                                                    CS Balance：<span v-loading="true"></span>
                                                    <span style="font-size:10px;color:#909399;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The transfer speed on the chain is slow, please be patient for 5 minutes. .</span>
                                                </span>
                                            </div>
                                        </div>
                                    </van-col> -->
                                </van-row>
                                <van-row>
                                    <van-col :span="24">
                                        <van-form ref="depositForm">
                                            <van-field 
                                                type="number" 
                                                label="SCT:" 
                                                v-model="depositForm.amount" 
                                                placeholder="请输入充值金额" 
                                                onkeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))" 
                                                :rules="[{ validator: checkDepositAmount, message: '' }]"
                                                label-width="50"
                                            >
                                            <!-- <template #label>
                                                <div @click="selectCurrencyClick()">{{ currencyName }} <van-icon name="arrow-down" /></div>
                                            </template> -->
                                            </van-field>
                                            <van-row class="button-amount">
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(100)">100</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(200)">200</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(500)">500</van-button>
                                                </van-col>
                                            </van-row>
                                            <van-row class="button-amount">
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(1000)">1000</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(2000)">2000</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(50000)">50000</van-button>
                                                </van-col>
                                            </van-row>
                                            <div class="submit-name">
                                                <van-button type="primary" :loading="trading" :disabled="trading" @click="startApprove" v-if="!approve">批准</van-button>
                                                <van-button type="primary" :loading="trading" :disabled="trading || isStatus || isWithdraw" @click="submitForm('depositForm')" v-else>存入</van-button>
                                                <!-- <van-button @click="resetForm('depositForm')">Cancel</van-button> -->
                                            </div>
                                        </van-form>
                                    </van-col>
                                </van-row>
                            </van-tab>
                            <van-tab title="提取" name="2" :disabled="trading">
                                <van-row class="balance">
                                    <van-col :span="24">
                                        <div>
                                            <span>平台余额：{{ toFixed(Number(localBalance) + Number(walletBalance), 4) }} SCT</span>
                                            <br />
                                            <span>钱包余额：{{ toFixed(Number(SCTBalance), 4) }} SCT</span>
                                            <!-- <span>GS Balance：{{gsBalance}}</span> -->
                                        </div>
                                    </van-col>
                                    <!-- <van-col :span="24">
                                        <div>
                                            <span v-if="!isStatus && !isWithdraw">CS Balance：{{csBalance}}</span>
                                            <span v-else>
                                                CS Balance：<span :loading="true"></span>
                                                <span style="font-size:10px;color:#909399;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The transfer speed on the chain is slow, please be patient for 5 minutes. .</span>
                                            </span>
                                        </div>
                                    </van-col> -->
                                </van-row>
                                <van-row>
                                    <van-col :span="24">
                                        <van-form ref="withdrawForm">
                                            <van-field 
                                                label="SCT:" 
                                                type="number" 
                                                v-model="withdrawForm.amount" 
                                                placeholder="请输入金额" 
                                                min="0" 
                                                :max="maxWithdrawableBalance()" 
                                                onkeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))" 
                                                :rules="[{ validator: checkWithdrawalAmount, message: '' }]"
                                                label-width="50"
                                            >
                                                <!-- <template #label>
                                                    <div @click="selectCurrencyClick()">{{ currencyName }} <van-icon name="arrow-down" /></div>
                                                </template> -->
                                            </van-field>
                                            <van-row class="button-amount">
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(100)">100</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(200)">200</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(500)">500</van-button>
                                                </van-col>
                                            </van-row>
                                            <van-row class="button-amount">
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(1000)">1000</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(2000)">2000</van-button>
                                                </van-col>
                                                <van-col :span="8">
                                                    <van-button type="primary" plain @click="buttonAmount(50000)">50000</van-button>
                                                </van-col>
                                            </van-row>
                                            <div class="submit-name">
                                                <van-button type="primary" :loading="trading" :disabled="trading" @click="startApprove" v-if="!approve">批准</van-button>
                                                <van-button type="primary" :loading="trading" :disabled="trading || isStatus || isGame || isWithdraw" @click="submitForm('withdrawForm')" v-else>提取</van-button>
                                                <!-- <van-button @click="resetForm('withdrawForm')">Cancel</van-button> -->
                                            </div>
                                        </van-form>
                                    </van-col>
                                </van-row>
                            </van-tab>
                        </van-tabs>
                    </van-col>
                </van-row>
            <!-- </van-tab>
            <van-tab title="SST充提" to="/sst"></van-tab>
        </van-tabs> -->
        <van-overlay :show="trading">
            <div class="wrapper">
                <van-loading type="spinner" color="#1989fa" />
            </div>
        </van-overlay>

        <van-action-sheet v-model="selectCurrencyShow" :actions="actions" @select="onSelect" />

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
import { approve, gamesBuyTokenTogToken, gamesGTokenToBuyToken } from "@/wallet/trade";
import {getBalance,isApproved, getGameFillingBalance, saveNotifyStatus, getGameFillingWithdrawStatus, setDepWithdrawStatus} from "@/wallet/serve";
import { keepDecimalNotRounding } from "@/utils/tools";
import Address from '@/wallet/address.json'
export default {
  name: "Index",
  data() {
    return {
        tabActive: 1,
        activeName: "1",
        localBalance: 0, //本地余额
        walletBalance: 0, //清算余额
        isStatus: false, //是否可以充提 0：可以充提 1：不可以充提
        isGame: false, //是否打赏中 true： 打赏中 false：不在打赏中
        isGameInfoNum: 0, //正在打赏中 提示次数
        isWithdraw: false, //是否充提进行中
        approve: false,
        trading: false,
        buttonAmountNum: 0, //按钮选择额度值
        SCTBalance: 0,
        depositForm: {
            amount: '',
        },
        withdrawForm: {
            amount: '',
        },
        balanceTimeInterval: null,
        refreshTime: 5000, //数据刷新间隔时间
        actions: [{ name: 'SCT' }, { name: 'USDT' }],
        selectCurrencyShow: false,
        currencyName: 'SCT', //默认币 SCT
        USDTPlatformBalance: 0, //USDT平台总余额
        SCTPlatformBalance: 0, //SCT平台总余额
        SSTPlatformBalance: 0, //SST平台总余额
        loadingShow: true,
    };
  },
  activated() { //页面进来
    this.refreshData();
    // this.getUserInfo();
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
                    await this.getIsApprove();
                    await this.getUserInfo();
                    await this.refreshData();
                }
            }
        }
  },
  computed: {
      ...mapState({
        isConnected:state=>state.base.isConnected,
        address:state=>state.base.address,
        gamesFillingAddress:state=>state.base.sctFillingAddress,
        gamesUSDTFillingAddress:state=>state.base.usdtFillingAddress,
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
    checkDepositAmount(value) { //充值输入框验证
        // console.log(value);
        if (!value) {
            return false;
        }
        let num = this.SCTBalance;
        if(Number(value) > num) {
            return false;
        } else {
            return true;
        }
    },
    checkWithdrawalAmount(value) { //提取输入验证
        console.log(value);
        if (!value) {
            return false;
        }
        let num = this.maxWithdrawableBalance();
        if(Number(value) > num) {
            return false
        } else {
            return true
        }
    },
    pageSwitchChange(evt, hidden) { //浏览器页面 切换事件
        //hidden为false的时候，表示从别的页面切换回当前页面
        //hidden为true的时候，表示从当前页面切换到别的页面
        if(hidden === false) { //页面切换进来
            this.refreshData();
            this.getUserInfo();
        } else { //页面切换离开
            if (this.balanceTimeInterval) {
                clearInterval(this.balanceTimeInterval);
                this.balanceTimeInterval = null;
            }
        }
    },
    async refreshData() {
        // this.csBalance = await getGameFillingBalance(); //获取余额
        this.timeInterval = setInterval(async() => {
            this.walletBalance = await getGameFillingBalance(18, this.gamesFillingAddress); //获取余额
            this.SCTBalance = await getBalance(Address.SCT, 18); //获取SCT余额
            // console.log(this.csBalance);
        }, this.refreshTime)
    },
    maxWithdrawableBalance() {
        let num = Number(this.walletBalance) + Number(this.localBalance);
        return num;
    },
    async handleClick(tab, event) {
    //   if(tab.name == 2) { //提取的话 检测是否在打赏中 提示信息
    //     await this.getIsInTheGame();
    //   }
      this.depositForm.amount = '';
      this.withdrawForm.amount = '';
    },
    async getIsApprove() { //获取余额 查看是否授权
      let balance = await getBalance(Address.SCT, 18); //获取余额
      console.log("SCT balance", balance);
      this.tokenBalance = balance;
      isApproved(Address.SCT, 18, balance, this.gamesFillingAddress).then((bool) => {
        console.log("isApprove", bool);
        this.approve = bool ? true : false;
      });
    },
    startApprove() { //批准USDT
      this.trading = true;
      approve(Address.SCT, this.gamesFillingAddress).then((hash) => {
        // console.log(result);
        if(hash) {
          this.approve = true;
          this.trading = false;
        }
      }).finally(() => {
        this.trading = false;
      });
    },
    async submitForm(formName) {//1. 提交调用合约
        // console.log(this.$refs[formName]);
        this.$refs[formName].validate().then(async ()=>{
          if (!this.trading) {
            this.trading = true;
            let amount = 0;
            let contractName = '';
            //检测是否有正在执行中的交易
            await this.getIsInTradeProgress();
            // console.log(isInProgress);
            if(this.isStatus == 1 || this.isWithdraw) {
                this.trading = false;
                return false;
            }
            if(this.activeName == 1) {//充值
                amount = this.depositForm.amount;
                contractName = gamesBuyTokenTogToken;
            } else { //提取
                // await this.getIsInTheGame(); //检测是否在打赏中 提示信息
                if(this.isGame) {
                    this.trading = false;
                    return false;
                }
                amount = this.withdrawForm.amount;
                contractName = gamesGTokenToBuyToken;
            }
            // let balance = await getGameFillingBalance();
            // let balance = await this.getGameFillingBalanceFun(this.activeName, amount);
            // console.log(balance);
            // saveNotifyStatus(1);
            // return false;
            //请求合约 充值或者提取
            // let hash = '0x837d2bae18716363a133662bdf8e935d294a1eec6efb147b2537ba0885cf4e87';
            // if(this.activeName == 1) {//充值的话 二次检测是否充值成功
            //     await this.setDepositWithdraw(amount, hash);
            //     await this.getGameFillingBalanceFun(this.activeName, amount, hash);
            // } else { //提取的话 不二次检测是否充值成功 异步机器人扣除 这里直接写入数据库记录
            //     await this.setDepositWithdraw(amount, hash);
            //     this.trading = false;
            //     this.depositForm.amount = '';
            //     this.withdrawForm.amount = '';
            //     // this.resetForm('depositForm');
            //     // this.resetForm('withdrawForm');
            // }
            const fillingRecordParams = { //充提记录参数
                amount: Number(amount),
                address: this.address,
                userId: this.userId,
                type: Number(this.activeName),
                sct_local_balance: this.localBalance,
                sct_wallet_balance: this.walletBalance,
                hash: '',
                currency: 'sct'
            };
            contractName(amount, Address.SCT, this.gamesFillingAddress, 18, fillingRecordParams, 2).then(async (hash) => {
                if(hash) {
                    if(this.activeName == 1) {//充值的话 二次检测是否充值成功
                        // await this.setDepositWithdraw(amount, hash);
                        saveNotifyStatus(0, true, 'h20');
                        await this.getGameFillingBalanceFun(this.activeName, hash);
                    } else { //提取的话 不二次检测是否充值成功 异步机器人扣除 这里直接写入数据库记录
                        // await this.setDepositWithdraw(amount, hash);
                        // this.trading = false;
                        saveNotifyStatus(0, false, 'h20'); //提取的话 这里不通知GS获取余额
                        this.resetForm('depositForm');
                        this.resetForm('withdrawForm');
                    }
                }
            }).finally(() => {
                // saveNotifyStatus(0);
                this.trading = false;
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        }).catch(err => {
            console.log('error submit!!');
            return false;
        });
    },
    async setDepositWithdraw(amount, hash='') { // 记录数据库记录
        // let amount = 0;
        // if(this.activeName == 1) {
        //     amount = this.depositForm.amount;
        // } else {
        //     amount = this.withdrawForm.amount;
        // }
        await axios.post(this.apiUrl + '/Api/Depositwithdrawal/depositWithdraw', {
            amount: Number(amount),
            address: this.address,
            userId: this.userId,
            type: Number(this.activeName),
            local_balance: this.localBalance,
            wallet_balance: this.walletBalance,
            currency: 'sct',
            hash: hash
        }).then((json) => {
            if (json && json.code == 10000) {
                this.getUserInfo(true);
                if(this.activeName == 1) {
                    //开始修改用户充提状态为充提进行中 通知GS获取余额
                    saveNotifyStatus(0, true, 'sct');
                } else {
                    saveNotifyStatus(0, false, 'sct'); //提取的话 这里不通知GS获取余额
                }
                this.trading = false;
                this.$notify({ type: 'success', message: this.activeName == 1 ? '存款成功' : '提取成功' });
            } else {
                this.trading = false;
                this.$notify({ type: 'danger', message: error });
            }
            return;
        }).catch((error) => {
            console.log(error);
            this.$notify({ type: 'danger', message: error });
        });
    },
    async getGameFillingBalanceFun(deWithId, hash) { //2. 获取合约中充提绝对余额 检测是否充提成功
        // let repeat = 5;
        // let actualBalance = 0;
        // if(type == 1) {
        //     actualBalance = Number(this.gsBalance) + Number(this.csBalance) + Number(amount)
        // } else {
        //     actualBalance = Number(this.gsBalance) + Number(this.csBalance) - Number(amount)
        // }
        let depositTimer = setInterval(async () => {
            let receipt = await web3.eth.getTransactionReceipt(hash);
            console.log(receipt);
            // let balance = await getGameFillingBalance();
            // console.log(actualBalance, balance);
            // if(repeat <= 0 || actualBalance == balance) {
            if(receipt && receipt.status) {
                await setDepWithdrawStatus(deWithId, 2, true, 'sct'); //修改充值状态为已完成 并通知GS获取余额
                // this.trading = false;
                // saveNotifyStatus(0, true);
                this.trading = false;
                this.isWithdraw = false;
                this.isStatus = false;
                // this.resetForm('depositForm');
                // this.resetForm('withdrawForm');
                clearInterval(depositTimer);
            }
            // if(repeat <= 0) {
            // }
            // repeat--;
        }, 3000);
    },
    timeWithdrawStatus(withdrawId) { //如果充提进行中 监听充提状态是否执行完成以通知GS更新余额
        let withdrawTimer = setInterval(async () => {
            if(withdrawId) {
                let withdrawStatus = await getGameFillingWithdrawStatus(withdrawId);
                // console.log(withdrawStatus);
                if(withdrawStatus) {
                    // await this.getUserInfo(true); //更新用户信息
                    clearInterval(withdrawTimer);
                    saveNotifyStatus(0, true, 'sct'); //通知GS更新余额
                    setTimeout(async () => {
                        this.walletBalance = await getGameFillingBalance(18, this.gamesFillingAddress); //重新获取一次余额
                        this.isWithdraw = false;
                        this.isStatus = false;
                    }, 10000) //停2秒
                }
            }
        }, 5000);
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        this.trading = false;
    },
    allBlanceFun() { //全部余额
        if(this.localBalance > 0 || this.walletBalance > 0) {
            this.withdrawForm.amount = Number(this.localBalance) + Number(this.walletBalance);
            return true;
        }
        return false;
    },
    allWalletBlanceFun() { //全部钱包余额
        if(this.SCTBalance > 0) {
            this.depositForm.amount = Math.trunc(this.usdtBalance);
            return true;
        }
        return false;
    },
    async getUserInfo(isHint=false) { //获取用户信息
        axios.get(this.apiUrl + "/Api/Depositwithdrawal/getFillingRecordUserInfo", {
            params: {
              address: this.address,
            }
        }).then(async (json) => {
            console.log(json);
            if (json.code == 10000) {
                this.localBalance = keepDecimalNotRounding(json.data.sct_local_balance, 4, true);
                // let USDTLocalBalance = keepDecimalNotRounding(json.data.local_balance, 4, true);
                // let SSTLocalBalance = keepDecimalNotRounding(json.data.sst_local_balance, 4, true);
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
                // let USDTWalletBalance = await getGameFillingBalance(18, this.gamesUSDTFillingAddress); //获取USDT合约余额
                // let SSTWalletBalance = await getGameFillingBalance(18, this.gamesSSTFillingAddress); //获取SST合约余额
                // console.log('链上余额：', this.walletBalance);
                // this.SCTPlatformBalance = Number(this.localBalance) + Number(this.walletBalance);
                // this.USDTPlatformBalance = Number(USDTLocalBalance) + Number(USDTWalletBalance);
                // this.SSTPlatformBalance = Number(SSTLocalBalance) + Number(SSTWalletBalance);
                // console.log("USDT总余额:", this.USDTPlatformBalance);
                // console.log("SCT总余额:", this.SCTPlatformBalance);
                // console.log("SST总余额:", this.SSTPlatformBalance);
                this.isStatus = json.data.dw_status == 1 ? true : false;
                this.isWithdraw = json.data.isDeWith; //是否充提中
                console.log('是否充提中：', this.isStatus, this.isWithdraw);
                if(json.data.dw_status == 1 || json.data.isDeWith) { //有交易正在执行中 不能进行充提操作
                    if(!isHint) {
                        this.$notify({
                            showClose: true,
                            message: '有一笔交易正在进行，无法进行存取款操作',
                            type: 'warning'
                        });
                    }
                    if(json.data.isDeWith > 0) { //如果有提取 进行中的任务 监听任务是否完成
                        if(json.data.isDeWithType == 1) {
                            this.getGameFillingBalanceFun(json.data.isDeWithStatusId, json.data.isDeWithHash);
                        } else {
                            this.timeWithdrawStatus(json.data.isDeWithStatusId);
                        }
                    }
                }
                this.SCTBalance = await getBalance(Address.SCT, 18); //获取SCT余额
                console.log('SCT钱包余额：', this.SCTBalance);
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
    async getIsInTheGame() { //获取是否打赏中 调用GS第三方接口获取
        await axios.get(this.apiUrl + "/Api/Depositwithdrawal/getIsGameOrNot", {
            params: {
              address: this.address
            }
        }).then(async (json) => {
            // console.log(json);
            if (json.code == 10000) {
                this.isGame = json.data;
                if(json.data) {
                    this.isGameInfoNum ++;
                    if(this.isGameInfoNum <= 3) {
                        this.$notify({
                            showClose: true,
                            message: 'The game is in progress and the operation cannot be retrieved', //正在打赏中
                            type: 'warning'
                        });
                    }
                    return false;
                } else {
                    this.isGameInfoNum = 0;
                    return true;
                }
            } else {
                console.log("get Data error");
            }
            return false;
        }).catch((error) => {
            this.$notify({ type: 'danger', message: error });(error);
        });
    },
    async getIsInTradeProgress() { //实时 获取是否有交易正在进行中
        await axios.get(this.apiUrl + "/Api/Depositwithdrawal/getIsInTradeProgress", {
            params: {
              address: this.address,
              userId: this.userId,
            }
        }).then(async (json) => {
            console.log(json);
            if (json.code == 10000) {
                this.isStatus = json.data.status;
                this.isWithdraw = json.data.isWithdraw;
                if(json.data.status == 1 || json.data.isWithdraw) { //有交易正在执行中 不能进行充提操作
                    this.$notify({
                        showClose: true,
                        message: '有一笔交易正在进行，无法进行存取款操作',
                        type: 'warning'
                    });
                    return false;
                } else {
                    return true;
                }
            } else {
                console.log("get Data error");
            }
            return false;
        }).catch((error) => {
            this.$notify({ type: 'danger', message: error });
        });
    },
    buttonAmount(value) { //选中按钮选择数量
        if(value) {
            if(this.activeName == 1) {//充值
                this.depositForm.amount = value;
            } else {
                this.withdrawForm.amount = value;
            }
        }
    },
    onReturnLeft() { //返回上一页
        // this.$router.go(-1);
        this.$router.push("/");
    },
    selectCurrencyClick() {
        this.selectCurrencyShow = true;
    },
    onSelect(item) { //选择币种事件
        this.currencyName = item.name;
        this.depositForm.amount = '';
        this.withdrawForm.amount = '';
        this.selectCurrencyShow = false;
    }
  },
};
</script>
<style lang="scss" scoped>
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
        // height: 100vh;
        .container {
            color: #fff;
            border-radius: 20px !important;
            background-color: #AE8BF5 !important;
            width: 80%;
            height: 50vh;
            padding: 20px;
            text-align: center;
            margin: 0 auto;
            // margin-top: 35px;
            .van-form {
                margin-top: 15px;
            }
            .van-tabs__nav {
                background-color: #AE8BF5;
            }
            .van-tabs__item {
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                font-weight: 800;
                // color: #fff;
                // @include mainFont($color-mainFont-light);
            }
            .van-tab--active {
                color: #fff;
            }
            .van-tabs__item.is-active {
                color: #409EFF;
            }
            .van-loading-spinner {
                margin-top: -11px;
                .circular {
                    width: 20px;
                    height: 20px;
                }
            }
            .van-form-item__label {
                color: #fff;
                // @include mainFont($color-mainFont-light);
            }
            .van-field {
                // background-color: #333257;
                // color: #fff;
                // border: 1px solid #333257;
                // padding: 0 10px;
                font-size: 16px;
                border-radius: 20px;
                .van-field__label {
                    width: 50px;
                    margin-right: 0;
                    // text-align: right;
                }
            }
            .van-input__inner {
                background-color: #333257;
                // color: #fff;
                border: 1px solid #333257;
                padding: 0;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
            }
            .van-input-group__append button.van-button {
                color: #409EFF;
            }
            .van-input-group__append, .van-input-group__prepend {
                background-color: #333257;
                color: #fff;
                border: 1px solid #333257;
                // padding: 0;
            }
            .balance {
                text-align: left;
                height: 30px;
                line-height: 30px;
                // color: #fff;
                // @include mainFont($color-mainFont-light);
            }
            .van-button {
                border-radius: 30px;
                width: 100px;
                border: 0;
            }
            .button-amount {
                line-height: 50px;
                .van-button--primary.is-plain {
                    background: #8481e0;
                    color: #fff;
                }
                .van-button {
                    border-radius: 5px;
                }
                .van-button::after {
                    background-color: #409EFF !important;
                }
                .van-button:focus,.van-button:hover {
                    background-color: #8C1AF5 !important;
                    color: #fff;
                }
            }
            .submit-name {
                margin-top: 20px;
                .van-button--primary {
                    width: 200px;
                    border-radius: 5px;
                    background-color: #8C1AF5;
                    border: 0;
                }
                .van-button--primary.is-disabled {
                    background: #c8c9cc;
                    color: #fff;
                }
                .van-loading-mask {
                    border-radius: 5px;
                    background-color: rgba(0,0,0,0.8);
                    border: 0;
                }
            }
        }
        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    }
}
</style>
