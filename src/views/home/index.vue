<template>
  <div class="container">
    <div class="main" :style="{ backgroundSize: isMobel ? '100% 100%' : '' }">
      <div class="content">
        <div class="title01">{{ $t("question:oneStopName") }}</div>
        <div class="title02">{{ $t("question:answerQuestions") }}</div>
        <div @click="getUserClick()">
          <el-avatar :size="100" :src="userInfo.avatar"></el-avatar>
        </div>
        <div class="nickname">{{ userInfo.nickname }}</div>
        <!-- <br> -->
        <div style="margin-top: 10px">
          <el-button type="primary" @click="startAnswer()">{{
            $t("question:startAnswering")
          }}</el-button>
        </div>
        <!-- <div><el-link type="primary" style="color:#FFD879;margin-top:5px;text-decoration:underline;">{{ $t('question:ranking') }}</el-link></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { get, post } from "@/common/axios.js";
export default {
  name: "home",
  data() {
    return {
        languag: this.$i18n.i18next.language
    };
  },
  computed: {
    ...mapState({
      address: (state) => state.base.address,
      isConnected: (state) => state.base.isConnected,
      isMobel: (state) => state.comps.isMobel,
      mainTheme: (state) => state.comps.mainTheme,
      apiUrl: (state) => state.base.apiUrl,
      userInfo: (state) => state.base.userInfo,
    }),
    changeData() {
      const { address } = this;
      return {
        address,
      };
    },
  },
  created() {
  },
  watch: {
    address: {
      immediate: true,
      async handler(val) {
        if (val) {
        }
      },
    },
  },
  components: {},
  methods: {
    startAnswer() {
      //跳转我的订单也
      get(
        this.apiUrl + "/Answer/question/getUserTodayIsAnswer", {address: this.address,}, (json) => {
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
    },
    getUserClick() {
      this.$router.push("/user");
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.container {
  /deep/ {
    .main {
      background-image: url("../../assets/answer/2.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed; /*关键*/
      background-position: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      position: fixed;
      .content {
        padding: 25px;
        text-align: center;
        margin-top: 40px;
        // margin-left: 10px;
        .title01 {
          font-size: 50px;
          font-weight: 800;
          color: #fff;
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
        .nickname {
          color: #fff;
          font-size: 15px;
          font-weight: 500;
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
  }
}
</style>
