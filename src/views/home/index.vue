<template>
  <div class="container">
    <div class="main" :style="{ backgroundSize: isMobel ? '100% 100%' : '',position: isMobel ? 'fixed' : 'relative' }">
        <div class="title">
            <div class="title01">{{ $t("question:oneStopName") }}</div>
        </div>
        <div class="user">
            <img src="@/assets/answer/user-top.png" class="image">
            <div class="avatar">
                <div class="nickname">{{ nickname ? nickname : 'User-' + user_id }}</div>
                <div @click="getUserClick()">
                    <el-avatar :size="70" :src="avatar" style="border: 3px solid #fff;"></el-avatar>
                </div>
                <el-row class="coins">
                    <el-col :span="12">
                        <div @click="getUsdtDepositWithdraw()">
                            <img src="@/assets/h2oToken.png" alt="" width="25">
                            <span>{{ toFixed(usdt_balance, 4) }}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div @click="getH2ODepositWithdraw()">
                            <img src="@/assets/usdt.png" alt="" width="25">
                            <span>{{ toFixed(h2o_balance, 4) }}</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- <div class="balance">
                <div @click="getUsdtDepositWithdraw()">USDT: 
                    <span style="text-decoration: underline;">{{ toFixed(usdt_balance, 4) }}</span>
                </div>
                <div @click="getH2ODepositWithdraw()">H2O: 
                    <span style="text-decoration: underline;">{{ toFixed(h2o_balance, 4) }}</span>
                </div>
            </div> -->
        </div>
        <div class="content">
            <button @click="onSelect()">微信好友</button>
            <!-- <div class="title01">{{ $t("question:oneStopName") }}</div>
            <div class="title02">{{ $t("question:answerQuestions") }}</div>
            <div style="margin-top: 10px">
                <el-button type="primary" @click="startAnswer()">{{$t("question:startAnswering")}}</el-button>
            </div> -->
            <!-- <div><el-link type="primary" style="color:#FFD879;margin-top:5px;text-decoration:underline;">{{ $t('question:ranking') }}</el-link></div> -->
            <div class="apple">
                <div class="left">
                    <div @click="startAnswer()">
                        <!-- 问答 -->
                        <img src="@/assets/answer/QA.png" class="image">
                    </div>
                    <div @click="routePushBank()">
                        <!-- 银行 -->
                        <img src="@/assets/answer/wallet.png" class="image">
                    </div>
                    <div @click="routePushTickets()">
                        <!-- 门票 -->
                        <img src="@/assets/answer/tickets.png" class="image">
                    </div>
                </div>
                <div class="right">
                    <!-- 好友对战 -->
                    <img style="opacity:0.5;" src="@/assets/answer/friend-battle02.png" class="image">
                    <div @click="startRanking()">
                        <!-- 绩效 -->
                        <img src="@/assets/answer/performance.png" class="image">
                    </div>
                    <div @click="routePushSetUp()">
                        <!-- 设置 -->
                        <img src="@/assets/answer/setUp.png" class="image">
                    </div>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { get, post } from "@/common/axios.js";
// import NativeShare from 'nativeshare'
export default {
  name: "home",
  data() {
    return {
        languag: this.$i18n.i18next.language,
        user_id: 0,
        avatar: '',
        nickname: '',
        username: '',
        usdt_balance: 0,
        h2o_balance: 0,
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
  },
  created() {
  },
  watch: {
    changeData: {
      immediate: true,
      async handler(val) {
        if(val.address || val.userId > 0) {
            // this.getCommentList(true);
            this.getUserInfo();
        }
      },
    },
  },
  components: {},
  methods: {
    async getUserInfo() { //获取用户信息
        await axios.get(this.apiUrl + '/Api/User/getUserInfo', {
            params: {
                address: this.address,
                userId: this.userId
            }
        }).then(async (json) => {
            if (json && json.code == 10000) {
                console.log(json.data);
                this.user_id = json.data.id;
                this.username = json.data.username;
                this.nickname = json.data.nickname;
                this.avatar = json.data.avatar;
                this.usdt_balance = Number(json.data.local_balance) + Number(json.data.wallet_balance);
                this.h2o_balance = Number(json.data.h2o_local_balance) + Number(json.data.h2o_wallet_balance);
            } else {
                this.$message({ type: 'warning', message: 'Error' });
            }
            return;
        }).catch((error) => {
            this.$message({ type: 'warning', message: error });
        });
    },
    startAnswer() { //跳转我的订单也
        if(this.userId) {
            get(
              this.apiUrl + "/Answer/question/getUserTodayIsAnswer", {userId: this.userId}, (json) => {
                if (json.code == 10000) {
                  if (json.data) {
                      if (json.data == 1 || json.data == 2) {
                          this.$router.push("/answer");
                      } 
                      // else if (json.data == 2) {
                      //     this.$message.warning("请先购买门票");
                      //     return false;
                      // } 
                      else if (json.data == 3) {
                          this.$message.warning(this.languag === 'zh' ? "门票今日已使用，请更换门票" : 'The ticket has been used today, please change the ticket');
                          return false;
                      }
                  } else {
                    this.$message.error("获取数据失败");
                  }
                }
              }
            );
        } else {
            this.$message.warning("请先登录");
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
        this.$router.push("/usdt");
    },
    routePushTickets() {
        this.$router.push("/ticket/list");
    },
    routePushSetUp() {
        this.$router.push("/user");
    },
    getUsdtDepositWithdraw() {
        this.$router.push("/usdt");
    },
    getH2ODepositWithdraw() {
        this.$router.push("/h2o");
    },
    onSelect() {
          const self = this
            var nativeShare = new NativeShare({
                appId: '',
                timestamp: '',
                nonceStr: '',
                signature: '',
            });
            // 设置分享文案
            nativeShare.setShareData({
                icon: 'https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg',
                link: 'https://futu.win',
                title: 'NativeShare',
                desc: 'NativeShare是一个整合了各大移动端浏览器调用原生分享的插件',
                from: '@fa-ge',
            })
            // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
            try {
              nativeShare.call('wechatFriend')
              // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
              // 类似的命令下面有介绍
              console.log('支持')
            } catch(err) {
              // 如果不支持，你可以在这里做降级处理
              self.$toast('不支持该浏览器自动分享,请您手动分享')
            }
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
      background-attachment: fixed; /*关键*/
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
      .el-avatar {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
        }
      }
    }
    .user {
        position: relative;
        width: 90%;
        top: 20px;
        margin: 0 auto;
        .image {
            // padding: 0 3%;
            position: relative;
            width: 100%;
            height: 100%;
        }
        .avatar {
            position: absolute;
            top: 5px;
            left: 0;
            right: 0;
            // margin: auto;
            height: 80px;
            text-align: center;
            // transform: translate(-50%,-50%);
            .nickname {
                color: #fff;
                font-size: 15px;
                font-weight: 500;
                text-align: center;
            }
            .coins {
                img {
                    vertical-align: middle;
                    margin-top: -6px;
                }
                span {
                    text-decoration: underline;
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
        .balance {
            position: absolute;
            top: 20%;
            left: 40%;
            bottom: 0;
            margin: auto;
            height: 110px;
            color: #fff;
            font-size: 18px;
        }
    }
  }
}
</style>
