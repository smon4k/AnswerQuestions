<template>
  <div class="container">
    <div class="main" :style="{ backgroundSize: isMobel ? '100% 100%' : '',position: isMobel ? 'fixed' : 'relative' }">
        <div class="title">
            <div class="title01">
                <!-- <span>{{ $t("question:oneStopName") }}</span> -->
                <img src="@/assets/answer/title.png" width="130">
            </div>
        </div>
        <div class="user">
            <div class="image"></div>
            <!-- <img src="@/assets/answer/user-top.png" class="image"> -->
            <div class="avatar" >
                <div @click="getUserClick()">
                    <van-image width="70" height="70" :src="avatar" style="border: 3px solid #fff;"></van-image>
                </div>
                <div class="nickname">{{ nickname ? nickname : 'User-' + user_id }}</div>
                <!-- <van-row class="coins">
                    <van-col :span="8" align="center">
                        <div @click="getUsdtDepositWithdraw()">
                            <img src="@/assets/usdt.png" alt="" width="25">
                            <br>
                            <span>{{ toFixed(usdt_balance, 4) }}</span>
                        </div>
                    </van-col>
                    <van-col :span="8" align="center">
                        <div @click="getSctDepositWithdraw()">
                            <img src="@/assets/sct.png" alt="" width="25">
                            <br>
                            <span>{{ toFixed(sct_balance, 4) }}</span>
                        </div>
                    </van-col>
                    <van-col :span="8" align="center">
                        <div @click="getSstDepositWithdraw()">
                            <img src="@/assets/sst.png" alt="" width="25">
                            <br>
                            <span>{{ toFixed(sst_balance, 4) }}</span>
                        </div>
                    </van-col>
                </van-row> -->
            </div>
            <div class="balance">
                <div @click="getUsdtDepositWithdraw()">
                    <img src="@/assets/usdt.png" alt="" width="25">
                    <!-- <br> -->
                    <span>{{ toFixed(usdt_balance, 4) }}</span>
                </div>
                <div @click="getSctDepositWithdraw()">
                    <img src="@/assets/sct.png" alt="" width="25">
                    <!-- <br> -->
                    <span>{{ toFixed(sct_balance, 4) }}</span>
                </div>
                <div @click="getSstDepositWithdraw()">
                    <img src="@/assets/sst.png" alt="" width="25">
                    <!-- <br> -->
                    <span>{{ toFixed(sst_balance, 4) }}</span>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- <button @click="onSelect()">????????????</button> -->
            <!-- <div class="title01">{{ $t("question:oneStopName") }}</div>
            <div class="title02">{{ $t("question:answerQuestions") }}</div>
            <div style="margin-top: 10px">
                <el-button type="primary" @click="startAnswer()">{{$t("question:startAnswering")}}</el-button>
            </div> -->
            <!-- <div><el-link type="primary" style="color:#FFD879;margin-top:5px;text-decoration:underline;">{{ $t('question:ranking') }}</el-link></div> -->
            <div class="apple">
                <div class="left">
                    <div @click="startAnswer()">
                        <!-- ?????? -->
                        <img :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/QA-zh.png`) : require(`@/assets/answer/QA-en.png`)" class="image">
                    </div>
                    <div @click="routePushBank()">
                        <!-- ?????? -->
                        <img :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/bank-zh.png`) : require(`@/assets/answer/bank-en.png`)" class="image">
                    </div>
                    <div @click="routePushTickets()">
                        <!-- ?????? -->
                        <img :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/tickets-zh.png`) : require(`@/assets/answer/tickets-en.png`)" class="image">
                    </div>
                </div>
                <div class="right">
                    <!-- ???????????? -->
                    <img style="opacity:0.5;" :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/friend-battle-zh.png`) : require(`@/assets/answer/friend-battle-en.png`)" class="image">
                    <div @click="startRanking()">
                        <!-- ?????? -->
                        <img :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/performance-zh.png`) : require(`@/assets/answer/performance-en.png`)" class="image">
                    </div>
                    <div @click="routePushSetUp()">
                        <!-- ?????? -->
                        <img :src="$t('question:languag') === 'zh' ? require(`@/assets/answer/setUp-zh.png`) : require(`@/assets/answer/setUp-en.png`)" class="image">
                    </div>
                </div>
            </div>
        </div>
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
import { get, post } from "@/common/axios.js";
export default {
  name: "home",
  data() {
    return {
        // languag: this.$i18n.i18next.language,
        user_id: 0,
        avatar: '',
        nickname: '',
        username: '',
        usdt_balance: 0,
        sct_balance: 0,
        sst_balance: 0,
        loadingShow: false,
    };
  },
  computed: {
    ...mapState({
      address: (state) => state.base.address,
      userId:state=>state.base.userId,
      isConnected: (state) => state.base.isConnected,
      isMobel: (state) => state.comps.isMobel,
      mainTheme: (state) => state.comps.mainTheme,
      apiUrl: (state) => state.base.apiUrl,
      userInfo: (state) => state.base.userInfo,
    }),
    changeData() {
      const { address, userId } = this;
      return {
        address,userId
      };
    },
    languag() {
        return this.$i18n.i18next.language;
    }
  },
  created() {
  },
  watch: {
    changeData: {
      immediate: true,
      async handler(val) {
        if(val.userId > 0) {
            this.loadingShow = true;
            // this.getCommentList(true);
            this.getUserInfo();
        }
      },
    },
  },
  components: {},
  methods: {
    async getUserInfo() { //??????????????????
        await axios.get(this.apiUrl + '/Api/User/getUserInfo', {
            params: {
                userId: this.userId
            }
        }).then(async (json) => {
            if (json && json.code == 10000) {
                console.log(json.data);
                this.user_id = json.data.id;
                this.username = json.data.username;
                this.nickname = json.data.nickname;
                this.avatar = json.data.avatar;
                this.usdt_balance = Number(json.data.usdt_local_balance) + Number(json.data.usdt_wallet_balance);
                this.sct_balance = Number(json.data.sct_local_balance) + Number(json.data.sct_wallet_balance);
                this.sst_balance = Number(json.data.sst_local_balance) + Number(json.data.sst_wallet_balance);
                setTimeout(() => {
                    this.loadingShow = false;
                }, 300)
            } else {
                this.$message({ type: 'warning', message: 'Error' });
            }
            return;
        }).catch((error) => {
            console.log(2222);
            this.$message({ type: 'warning', message: error });
        });
    },
    startAnswer() { //?????????????????????
        if(this.userId) {
            get(
              this.apiUrl + "/Api/question/getUserTodayIsAnswer", {userId: this.userId}, (json) => {
                if (json.code == 10000) {
                  if (json.data) {
                      if (json.data == 1 || json.data == 2) {
                          this.$router.push("/answer");
                      } 
                      // else if (json.data == 2) {
                      //     this.$message.warning("??????????????????");
                      //     return false;
                      // } 
                      else if (json.data == 3) {
                          this.$message.warning(this.languag === 'zh' ? "???????????????????????????????????????" : 'The ticket has been used today, please change the ticket');
                          return false;
                      }
                  } else {
                    this.$message.error("??????????????????");
                  }
                }
              }
            );
        } else {
            this.$message.warning("????????????");
            return false;
        }
    },
    routePushQA() {
        this.$router.push("/answer"); 
    },
    startRanking() {
       this.$router.push("/ranking"); 
    },
    getUserClick() {
      this.$router.push("/user");
    },
    routePushBank() {
        this.$router.push("/bank");
    },
    routePushTickets() {
        this.$router.push("/ticket/list");
    },
    routePushSetUp() {
        this.$router.push("/user");
    },
    getUsdtDepositWithdraw() {
        // this.$router.push("/usdt");
    },
    getSctDepositWithdraw() {
        // this.$router.push("/sct");
    },
    getSstDepositWithdraw() {
        // this.$router.push("/sst");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.container {
  /deep/ {
    .main {
      background-image: url("../../assets/answer/home-bg.png");
      background-repeat: no-repeat;
      background-attachment: fixed; /*??????*/
      background-position: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    //   z-index: -10;
      position: fixed;
      overflow-x: hidden;
      .title {
        position: relative;
        width: 90%;
        top: 10px;
        margin: 0 auto;
        .title01 {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          text-align: center;
          // letter-spacing: 20px;
          // text-indent: 20px;
        }
        .title02 {
          font-size: 40px;
          font-weight: 800;
          color: #ffd879;
          // letter-spacing: 20px;
          // text-indent: 20px;
        }
      }
      .content {
        padding: 20px;
        text-align: center;
        margin-top: 20px;
        // margin-left: 10px;
        .apple {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            // padding: 10px 2% 20px;
            font-size: 30px;
            color: #fff;
            overflow: hidden;
            .left, .right {
                cursor: pointer;
                width: 46%;
                padding: 0 2%;
                .image {
                    width: 100%;
                    border-radius: 16px;
                    // margin-bottom: 10px;
                    position:relative;
                    overflow: hidden;
                }
                
            }
        }
      }
      // zoom:1;
      // background: url(../../assets/answer/1.jpg) no-repeat center center/auto 100%;
      // .home-link{
      //     width: 100%;
      //     height: 100%;
      //     display: block;
      // }

    }
    .user {
        position: relative;
        width: 90%;
        top: 20px;
        margin: 0 auto;
        border: 2px solid #fff;
        border-radius: 20px;
        .image {
            border-radius: 20px;
            background: linear-gradient(#00C3E9, #2D50D2); /* ????????????*/
            // padding: 0 3%;
            position: relative;
            width: 100%;
            // height: 100%;
            height: 180px;
        }
        .avatar {
            position: absolute;
            top: 46%;
            left: 20%;
            right: 0;
            // margin: auto;
            height: 80px;
            text-align: center;
            transform: translate(-50%,-50%);
            .nickname {
                color: #fff;
                font-size: 15px;
                font-weight: 500;
                text-align: center;
            }
            .coins {
                padding-top: 10px;
                img {
                    vertical-align: middle;
                    margin-top: -6px;
                }
                span {
                    // text-decoration: underline;
                    color: #fff;
                    font-size: 16px;
                }
            }
            .van-image {
                width: 100px;
                border-radius: 50%;
                // height: 100px;
                .van-image__error {
                    width: 100%;
                    border-radius: 50%;
                }
                img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
        }
        .balance {
            position: absolute;
            top: 10%;
            left: 40%;
            bottom: 0;
            margin: auto;
            height: 110px;
            color: #fff;
            font-size: 18px;
            line-height: 30px;
            img {
                margin-top: -5px;
                vertical-align: middle;
            }
        }
    }
  }
}
</style>
