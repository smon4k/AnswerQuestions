<template>
  <div class="container">
    <div class="bg"  :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
    <div class="regist">
      <!-- <div class="form-title">
          <img src="@/assets/sign-pic.png" alt="" class="logo">
      </div> -->
      <div class="bg-radius"></div>
      <div class="title">{{ $t('question:UsernameLogin') }}</div>
      <!-- <van-tabs class="tab-class" v-model="active" @click="tabsEvents">
        <van-tab title="账号登录"> -->
          <div class="form">
            <van-form>
              <div class="box">
                <div class="li">
                  <van-field
                    class="phone"
                    v-model="username"
                    :name="$t('question:username')"
                    :placeholder="$t('question:pleaseEnterUsername')"
                    clearable
                    center
                    :rules="[{ required: true, message: '' }]"
                  />
                </div>
                <div class="li">
                  <van-field
                    class="password"
                    v-model="password"
                    clearable
                    center
                    type="password"
                    :name="$t('question:password')"
                    :placeholder="$t('question:pleaseEnterPassword')"
                    :rules="[{ required: true, message: '' }]"
                  />
                </div>
              </div>
            </van-form>
            <van-button
              type="default"
              :class="[
                'loginButton',
                { disableds: username != '' && password != '' },
              ]"
              @click="loginEvent()"
              >{{ $t('question:login') }}</van-button
            >
            <van-row class="link">
              <van-col span="20" align="right"><router-link to="/regist">{{ $t('question:NewUserRegistration') }}</router-link></van-col>
            </van-row>
          <!-- </van-tab> -->
          <!-- <van-tab title="钱包登录">
            <van-button :icon="require(`@/assets/MetaMask.svg`)" type="default" :class="['metamaskButton']" @click="loginEvent()">MetaMask</van-button>
            <van-button
              type="default"
              :class="['metamaskButton']"
              @click="connectWalletClick()"
              >{{ addressStr() }}</van-button
            >
          </van-tab> -->
        <!-- </van-tabs> -->
        <!-- <div class="title">账号登录</div> -->
        <!-- <div class="subtitle">未注册的手机号验证后将自动注册</div> -->
        <!-- <div class="otherLogin">其他登录方式</div> -->
        <!-- <div class="thirdLogin">
            <img src="../assets/qq.png" alt="" srcset="">
            <img src="../assets/wechat.png" alt="" srcset="">
        </div> -->
        <div class="tips">
          {{ $t('question:SignInToAgree') }}<span @click="agreement"> {{ $t('question:UserAgreement') }} </span>{{ $t('question:and') }}<span
            @click="privacy"
          >
            {{ $t('question:PrivacyPolicy') }}
          </span>
        </div>

          </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast, Dialog } from "vant";
import { mapState } from "vuex";
// import { get, post } from "@/utils/axios.js";
import {
  connectInfo,
  fetchAccountData,
  disconnectWallet,
} from "@/wallet/connect/metaMask";
var that;
export default {
  name: "login",
  props: {
    msg: String,
  },
  data() {
    return {
      active: "",
      username: "",
      password: "",
    };
  },
  created() {
    // this.getUserInfo();
  },
  computed: {
    ...mapState({
      address: (state) => state.base.address,
      userId: (state) => state.base.userId,
      isConnected: (state) => state.base.isConnected,
      apiUrl: (state) => state.base.apiUrl,
      isMobel:state=>state.comps.isMobel,
    }),
    changeData() {
      const { userId } = this;
      return {
        userId,
        apiUrl,
      };
    },
  },
  watch: {
    userId: {
      immediate: true,
      handler(val) {
        console.log(val);
        if (val > 0) {
            setTimeout(() => {
                this.$router.push("/home");
            }, 1000)
        }
      },
    },
  },
  components: {},
  methods: {
    agreement() {
      Dialog.alert({
        messageAlign: "left",
        message:
          "欢迎您使用H2O自媒体。" +
          "为保障您在使用H2O自媒体各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br>" +
          '<span style="font-weight:bold;">一、您的权力与义务</span><br>' +
          "1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便H2O自媒体向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>" +
          "2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意H2O自媒体对本协议所做的修改，您有权停止使用本系统，并要求H2O自媒体与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受H2O自媒体对本协议做的修改。<br>" +
          "3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>" +
          "4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>" +
          "5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向H2O自媒体、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若H2O自媒体与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿H2O自媒体与合作公司、关联公司的所有损失。<br>" +
          "6.H2O自媒体有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>",
      }).then(() => {
        // on close
      });
    },
    privacy() {
      Dialog.alert({
        messageAlign: "left",
        message:
          "隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议",
      }).then(() => {
        // on close
      });
    },
    loginEvent() {
      if (this.username == "") {
        Toast("请输入用户名");
        return;
      }
      if (this.password == "") {
        Toast("请输入密码");
        return;
      }
      this.save();
    },
    async connectWalletClick() {
      //连接钱包
      // if (window.ethereum == undefined) {
      //   this.$notify({
      //     type: "warning",
      //     message: "You do not have metamask installed",
      //   });
      //   return false;
      // }
      if (!this.address || this.address == undefined || this.address == "") {
        await fetchAccountData(0, true);
        this.$forceUpdate();
      } else {
        await disconnectWallet();
        this.$forceUpdate();
      }
    },
    addressStr() {
      // console.log(this.address);
      let connectorId = localStorage.getItem('connectorId');
      let address = localStorage.getItem('address');
      if ((connectorId && connectorId !== undefined || connectorId !== "") && (address && address !== undefined && address !== "")) {
          return (
            this.address.substring(0, 4) +
            "***" +
            this.address.substring(this.address.length - 3)
          );
      } else {
          return "Connect Wallet";
      }
    },
    async save() {
      // localStorage.setItem('mobile', this.phone)
      // localStorage.setItem('token', JSON.stringify(this.phone))
      var paramData = {
        username: this.username.trim(),
        password: this.password.trim(),
      };
      await axios
        .post(this.apiUrl + "/Api/User/login", paramData)
        .then(async (json) => {
          if (json && json.code == 10000) {
            localStorage.setItem("userInfo", JSON.stringify(json.data));
            localStorage.setItem("token", JSON.stringify(json.data.token));
            this.$store.commit("setUserInfo", json.data);
            this.$notify({ type: "success", message: "登录成功" });
            this.$router.push("/");
            // setInterval(() => {
            // }, 2000)
          } else if (json && json.code == 70002) {
            Toast("用户名不存在");
          } else if (json && json.code == 70003) {
            Toast("密码错误");
          } else {
            Toast(res.msg);
          }
        });
    },
    isMobile: function (mobile) {
      var regex = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
      if (regex.test(mobile)) {
        return true;
      } else {
        return false;
      }
    },
    tabsEvents(name, title) {
      //tab 切换
      this.username = "";
      this.password = "";
    },
  },
  created() {
    that = this;
    document.title = "登录";
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
      .regist {
        .form {
            width: 90%;
            background-color: #05D2FA;
            margin: 0 auto;
            border-radius: 20px;
            padding-bottom: 20px;
            .box {
                padding-top: 5px;
            }
        }
        text-align: left;
        // margin-top: 50px;
        .tab-class {
          margin-top: 20px;
        }
        .form-title {
          width: 100%;
          // padding: 10% 5%;
          background: linear-gradient(-45deg, #00ace6, #004695);
          .logo {
            display: block;
            width: 100%;
          }
        }
        .title {
          margin-left: 30px;
          margin-top: 20px;
          color: #fff;
          font-size: 20px;
        }
        .subtitle {
          font-size: 12px;
          color: #999;
          margin-left: 30px;
          margin-top: 5px;
        }
        .li {
          margin-left: 30px;
          margin-right: 30px;
          position: relative;
        }
        .phone {
          padding-left: 15px;
          padding-right: 15px;
          background: #f9f9f9;
          border-radius: 25px;
          margin-top: 44px;
          width: 100%;
        }
        .password {
          padding-left: 15px;
          padding-right: 15px;
          background: #f9f9f9;
          border-radius: 25px;
          margin-top: 14px;
          width: 100%;
        }

        .van-cell::after {
          left: 30px;
          right: 30px;
        }
        .codeText {
          position: absolute;
          top: 50%;
          right: 10px;
          margin-top: -15px;
          font-size: 13px;
          width: 90px;
          text-align: center;
          color: #fff;
          background: #c0c0c0;
          border-radius: 25px;
          height: 30px;
          line-height: 30px;
        }
        .thirdLogin {
          text-align: center;
          img {
            width: 44px;
            margin: 20px;
          }
        }
        .otherLogin {
          font-size: 12px;
          color: #999;
          margin-top: 5px;
          text-align: center;
        }
        .metamaskButton {
          margin: 30px auto;
          display: block;
          width: 315px;
          height: 44px;
          border-radius: 25px;
          background: #5394ff;
          color: #fff;
          text-align: center;
          border: 0;
          // pointer-events: none;
          .van-button__icon {
            margin-right: 10px;
          }
        }
        .loginButton {
          margin: 30px auto;
          display: block;
          width: 70%;
          height: 40px;
          border-radius: 25px;
          background: #c0c0c0;
          color: #fff;
          text-align: center;
          pointer-events: none;
        }
        .loginButton.disableds {
          background: #8C1AF5;
          border: 0;
          pointer-events: auto;
        }
        .tips {
          font-size: 13px;
          position: absolute;
          height: 50px;
          // bottom: 30px;
          margin-top: 30px;
          text-align: center;
          width: 100%;
          max-width: 500px;
          color: #fff;
          span {
            color: #5394ff;
          }
        }
        .link {
          a {
            font-size: 13px;
            // color: #fff;
          }
        }
      }
  }
}
</style>
