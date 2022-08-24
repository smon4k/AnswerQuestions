<template>
  <div :class="['main', isMobel ? 'main' : 'main-pc']">
    <div class="bg-pic">
      <img src="@/assets/answer/bg.jpg" alt="" :style="animateBg" />
    </div>
    <div class="car"></div>
    <div class="pen"></div>
    <div class="wheel" :style="animateWheel"></div>
    <div :class="['woman', animateShow ? 'an-woman' : 'an-woman2']"></div>
    <el-row class="content">
      <el-col :span="24" align="center">
        <div class="list-content" v-if="getQAlist.length">
          <p class="title" v-if="$i18n.i18next.language === 'zh'">第{{ listIndex + 1 }}/{{questionNum}}题</p>
          <p class="title" v-else>Question {{ listIndex + 1 }}/{{questionNum}}</p>
          <div class="question">
            {{ listTypeText + getQAlist[listIndex].title }}
          </div>
          <ul class="answer">
            <li
              v-for="(item, index) in getQAlist[listIndex].option"
              :key="index"
            >
              <div
                :class="[
                  'circle',
                  userClickList.includes(index) ? 'active' : '',
                ]"
                @click="handleUserClick(index)"
              >
                <b></b>
              </div>
              <div class="text">{{ item }}</div>
            </li>
          </ul>
        </div>

        <div
          class="next-btn"
          @click="handleNextClick()"
          v-show="!subMitBtnShow"
        >
            <el-button type="primary">{{ $t('question:nextQuestion') }}</el-button>
        </div>
        <div
          class="submit-btn"
          v-show="subMitBtnShow"
          @click="handleNextClick()"
        >
            <el-button type="primary">{{ $t('question:Submit') }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";
import { get, post } from "@/common/axios.js";
export default {
  name: "",
  data() {
    return {
      animateShow: false,
      screenBg: 0,
      listIndex: 0, //当前第几题
      subMitBtnShow: false, //显示提交按钮
      userScore: 0,
      userClickList: [], //当前题目用户填写答案
      timer: null,
      userTime: 0,
      getQAlist: [],
      userAnswerList: [],
      questionNum: 5,
      loading: true,
      is_relive: 0, //是否复活重答
    };
  },
  computed: {
    ...mapState({
      address: (state) => state.base.address,
      isConnected: (state) => state.base.isConnected,
      isMobel: (state) => state.comps.isMobel,
      mainTheme: (state) => state.comps.mainTheme,
      apiUrl: (state) => state.base.apiUrl,
    }),
    animateBg() {
      return {
        transform: "translate(-" + this.screenBg + "px, 0)",
        transition: "all 2s",
      };
    },
    animateWheel() {
      return {
        transform: "rotate(" + this.screenBg + "deg)",
        transition: "all 2s",
      };
    },
    animateWoman() {
      return {
        transform: "translate(-" + this.screenBg + "px, 0)",
        transition: "all 2s",
      };
    },
    listTypeText() {
      let text =  "【" + this.$t('question:SingleChoice') + "】";
      console.log(this.getQAlist);
      console.log(this.getQAlist[this.listIndex]);
      if (this.getQAlist[this.listIndex].type == 2) {
        text = "【" + this.$t('question:MultipleChoice') + "】";
      }
      if (this.getQAlist[this.listIndex].type == 3) {
        text = "【" + this.$t('question:judge') + "】";
      }
      return text;
    },
    changeData() {
      const { apiUrl, address } = this;
      return {
        apiUrl,
        address,
      };
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.userTime += 1;
    }, 1000);
    let params = this.$route.params;
    this.is_relive = params.is_relive;
  },
  watch: {
    changeData: {
      immediate: true,
      handler(val) {
        if (val.address) {
          this.getQuestionList();
        }
      },
    },
  },
  components: {},
  methods: {
    getQuestionList() {
      get(this.apiUrl + "/Answer/question/getUserQuestionList", {
          address: this.address,
          language: this.$i18n.i18next.language,
        }, (json) => {
          if (json.code == 10000) {
            this.getQAlist = json.data;
          } else {
            this.$message.error("加载数据失败");
          }
        }
      );
    },
    handleNextClick() {
      //下一题
      let screenw =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (this.userClickList.length == 0) {
        // alert("请选择答案！");
        this.$message.warning("请选择答案！");
      } else {
        let formatAnswerList = [];
        let isWrong = false;
        // console.log(this.userClickList);
        let questionVal = this.getQAlist[this.listIndex];
        console.log(questionVal);
        let type = questionVal.type;
        this.userClickList.forEach((value) => {
          //赋值选项及答案
          switch (value) {
            case 0:
              type == 3
                ? formatAnswerList.push("对")
                : formatAnswerList.push("A");
              break;
            case 1:
              type == 3
                ? formatAnswerList.push("错")
                : formatAnswerList.push("B");
              break;
            case 2:
              formatAnswerList.push("C");
              break;
            case 3:
              formatAnswerList.push("D");
              break;
            case 4:
              formatAnswerList.push("E");
              break;
            default:
              formatAnswerList = null;
          }
        });
        // console.log(formatAnswerList);
        let index = this.userAnswerList.findIndex((val) => val.id === questionVal.id);
        // 如果有就替换  没有就添加
        let obj =  {id: questionVal.id, answer: formatAnswerList};
        if (this.userAnswerList.findIndex((val) => val.id === questionVal.id) !== -1) {
            this.userAnswerList.splice(index, 1, obj);
        } else {
            this.userAnswerList.push(obj);
        }
        // console.log(this.userAnswerList);
        if (this.listIndex === this.questionNum - 1) {
            const loading = this.$loading({
                lock: true,
                text: '答案计算中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
          setTimeout(() => {
            post(this.apiUrl + "/Answer/question/calcQuestionAnswer", {
                address: this.address,
                answers: this.userAnswerList,
                times: this.userTime,
                language: this.$i18n.i18next.language,
                is_relive: this.is_relive
            }, (json) => {
                if (json && json.code == 10000) {
                    if(json.data) {
                        setTimeout(() => {
                            loading.close();
                            this.$router.push({ 
                                name: "score", 
                                params: {
                                    correct_num: json.data.correct_num,
                                    score: json.data.score,
                                    times: json.data.times,
                                    is_possible_resurrection: json.data.is_possible_resurrection,
                                    consumeNumber: json.data.consumeNumber,
                                    capped_num: json.data.capped_num,
                                    award_num: json.data.award_num,
                                    award_rate: json.data.award_rate,
                                }
                            });
                        }, 2000);
                    }
                } else {
                  this.$message.error(json.msg);
                  loading.close();
                }
              }
            );
          }, 1000);
        //   this.$router.replace({ path: "/score" });
          return;
        }

        this.animateShow = !this.animateShow;
        this.screenBg += screenw;
        this.listIndex += 1;
        if (this.listIndex == this.questionNum - 1) {
          this.subMitBtnShow = true;
        }

        this.userClickList = []; //清空每道题用户选择答案选项
        isWrong = false;
      }
    },
    handleUserClick(index) {
      if (this.getQAlist[this.listIndex].type == 2) {
        let isExists = false;
        this.userClickList.forEach((value) => {
          if (value === index) {
            isExists = true;
          }
        });
        isExists
          ? this.userClickList.splice(
              this.userClickList.findIndex((item) => item === index),
              1
            )
          : this.userClickList.push(index);
      } else {
        this.userClickList = [index];
      }
    },
  },
  mounted() {},
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
.main {
  /deep/ {
    // width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    // left: 0;
    max-width: 750px;
    margin: 0 auto;
    .bg-pic {
      height: 100%;
      img {
        height: 100%;
        width: auto;
        max-width: none;
      }
    }
    .car {
      width: 350px;
      height: 130px;
      background: url("../../assets/answer/3.png") no-repeat center center/auto
        100%;
      position: absolute;
      bottom: 47.25px;
      left: -135px;
    }
    .wheel {
      width: 57.75px;
      height: 57.75px;
      background: url("../../assets/answer/4.png") no-repeat center center/auto
        100%;
      position: absolute;
      bottom: 24.75px;
      left: 116px;
    }
    .pen {
      width: 95.25px;
      height: 25.5px;
      background: url("../../assets/answer/6.png") no-repeat center center/auto
        100%;
      position: fixed;
      top: 88px;
      right: 20px;
      z-index: 5;
    }
    .woman {
      width: 200px;
      height: 200px;
      background: url("../../assets/answer/2.png") no-repeat center center/auto
        100%;
      position: fixed;
      bottom: 0px;
      right: -10px;
      // z-index: 5;
    }
    .an-woman {
      -webkit-animation: anwoman 0.5s linear forwards;
      animation: anwoman 0.5s linear forwards;
    }
    .an-woman2 {
      -webkit-animation: anwoman2 0.5s linear forwards;
      animation: anwoman2 0.5s linear forwards;
    }
    .next-btn {
        button {
            width: 130px;
            height: 40px;
            border-radius: 50px;
          //   background: url("../../assets/answer/5.png") no-repeat center center/auto 100%;
            //   position: fixed;
            margin-top: 10px;
            bottom: 110px;
            //   left: 50%;
            //   transform: translateX(-50%);
            z-index: 10;
        }
    }
    .submit-btn {
        button {
            width: 130px;
            height: 40px;
            border-radius: 50px;
          //   background: url("../../assets/answer/5.png") no-repeat center center/auto 100%;
            //   position: fixed;
            margin-top: 10px;
            bottom: 110px;
            //   left: 50%;
            //   transform: translateX(-50%);
            z-index: 10;
        }
    }
    .content {
      //   width: 80%;
      max-width: 750px;
      margin: 0 auto;
      position: fixed;
      left: 0;
      right: 0;
      top: 100px;
      margin: 0 auto;
      //   border: 1px solid red;
      .list-content {
        width: 80%;
        //   width: 6.1rem;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 18px;
        padding: 20px;
        //   position: absolute;
        //   top: 1.02rem;
        //   left: 50%;
        // padding-bottom: 182px;
        //   transform: translateX(-50%);
        //   z-index: 1;
        //   overflow: hidden;
        .title {
          color: #005ece;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin: 0;
        }
        .question {
          color: #000;
          font-size: 18px;
          padding: 0 20px;
          text-align: justify;
          line-height: 25px;
          margin-bottom: 20px;
        }
        .answer {
          color: #000;
          font-size: 18px;
          padding: 0 20px;
          li {
            margin: 10px 0;
            text-align: left;
            display: flex;
            .text {
              line-height: 35px;
            }
            .circle {
              width: 30px;
              height: 30px;
              border: 1px solid #005ece;
              border-radius: 50%;
              flex: none;
              margin-right: 10px;
              text-align: center;
              line-height: 36px;
              cursor: pointer;
            }
            .active {
              b {
                width: 18px;
                height: 18px;
                background: #005ece;
                display: inline-block;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
}
.main-pc {
  /deep/ {
    // .car {
    //   width: 4.56rem;
    //   height: 0.73rem;
    //   background: url("../../assets/answer/3.png") no-repeat center center/auto
    //     100%;
    //   position: absolute;
    //   bottom: 0.63rem;
    //   left: -1.8rem;
    // }
    // .wheel {
    //   height: 20px;
    //   bottom: 0.53rem;
    //   left: 0.69rem;
    // }
    // .next-btn {
    //   width: 1.04rem;
    //   height: 20px;
    // }
    .pen {
      position: absolute;
    }
    .woman {
      position: absolute;
    }
    // .content {
    //   .list-content {
    //     .title {
    //       font-size: 0.24rem;
    //     }
    //     .question {
    //       font-size: 0.22rem;
    //       line-height: 0.25rem;
    //     }
    //   }
    // }
  }
}
</style>
