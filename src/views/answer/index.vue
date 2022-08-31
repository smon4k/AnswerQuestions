<template>
<div class="container">
  <div class="bg" :style="{backgroundSize:isMobel ? '100% 100%' : ''}"></div>
  <div class="main">
    <!-- <div class="car"></div>
    <div class="pen"></div>
    <div class="wheel" :style="animateWheel"></div> -->
    <!-- <div :class="['woman', animateShow ? 'an-woman' : 'an-woman2']"></div> -->
    <van-row class="content">
      <van-col :span="24" align="center">
        <!-- {{ timerCount }} 秒 -->
        <!-- <van-progress :width="70" color="#D7B078"  type="circle" :percentage="timerPercentage" :format="timerFormat"></van-progress> -->
        <van-circle
          style="width:70px"
          color="#D7B078"
          stroke-linecap="butt"
          v-model="timerPercentage"
          :rate="100"
          :clockwise="false"
          :text="(timerPercentage / 10).toString()"
          :stroke-width="150"
        />
      </van-col>
      <van-col :span="24" align="center">
        <transition name="van-fade">
          <div class="list-content" v-if="getQAlist.length" :key="listIndex">
              <!-- <div > -->
                <!-- <p class="title" v-if="$i18n.i18next.language === 'zh'">第{{ listIndex + 1 }}/{{questionNum}}题</p> -->
                <!-- <p class="title" v-else>Question {{ listIndex + 1 }}/{{questionNum}}</p> -->
                <!-- <transition> -->
                  <div class="question" :key="listIndex">
                    <!-- {{ listTypeText + getQAlist[listIndex].title }} -->
                    {{ getQAlist[listIndex].title }}
                  </div>
                <!-- </transition> -->
                <ul class="answer">
                      <li v-for="(item, index) in getQAlist[listIndex].option" :key="index" @click="handleUserClick(index)" :class="['answer-li', userClickList.includes(index) ? 'active' : '',]">
                            <div class="answer-box">
                              <!-- <div :class="['circle', userClickList.includes(index) ? 'active' : '',]" @click="handleUserClick(index)">
                                <b></b>
                              </div> -->
                              <div class="text">{{ item }}</div>
                            </div>
                      </li>
                </ul>
                <!-- </div> -->
          </div>
        </transition>

        <!-- <div
          class="next-btn"
          @click="handleNextClick()"
          v-show="!subMitBtnShow"
        >
            <van-button type="primary">{{ $t('question:nextQuestion') }}</van-button>
        </div> -->
        <div
          class="submit-btn"
          v-show="subMitBtnShow"
          @click="handleNextClick()"
        >
            <van-button type="primary">{{ $t('question:Submit') }}</van-button>
        </div>
      </van-col>
    </van-row>
  </div>
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
      monitorUser: "", //倒计时状态
      timerStates: false, //倒计时状态
      timerCount: 0, //10秒倒计时
      timerPercentage: 100,
      languag: this.$i18n.i18next.language,
    };
  },
  activated() { //页面进来
  },
  computed: {
    ...mapState({
      address: (state) => state.base.address,
      userId:state=>state.base.userId,
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
      if (this.getQAlist[this.listIndex].type && this.getQAlist[this.listIndex].type == 2) {
        text = "【" + this.$t('question:MultipleChoice') + "】";
      }
      if (this.getQAlist[this.listIndex].type && this.getQAlist[this.listIndex].type == 3) {
        text = "【" + this.$t('question:judge') + "】";
      }
      return text;
    },
    changeData() {
      const { apiUrl, address, userId } = this;
      return {
        apiUrl,
        address,
        userId,
      };
    },
  },
  created() {
    this.getUserTodayIsAnswer();
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
        if (val.userId) {
          this.getQuestionList();
        }
      },
    },
    timerStates: {
      immediate: true,
      handler(val) {
        if(val) {
          this.timerCount = 10;
        }
      }
    },
    timerCount: {
        handler(value) {
            if (value > 0) {
                this.monitorUser = setTimeout(() => {
                  if(this.timerStates) {
                    this.timerCount--;
                    this.timerPercentage = this.timerPercentage - 10;
                  }
                }, 1000);
            } else {
              if(this.timerStates) {
                setTimeout(async() => {
                  this.calcQuestionAnswer();
                  console.log('时间到。。。');
                }, 100)
              }
            }
        },
        immediate: true // This ensures the watcher is triggered upon creation
    },
  },
  components: {},
  methods: {
    getQuestionList() {
      get(this.apiUrl + "/Answer/question/getUserQuestionList", {
          userId: this.userId,
          language: this.$i18n.i18next.language,
        }, (json) => {
          if (json.code == 10000) {
            this.getQAlist = json.data;
            this.timerStates = true;
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
            clearTimeout(this.monitorUser);
            setTimeout(async() => {
              await this.calcQuestionAnswer();
              // loading.close();
              // this.$router.push({ 
              //     name: "score", 
              //     params: {
              //         correct_num: 5,
              //         score: 100,
              //         times: 10,
              //         is_possible_resurrection: 2
              //     }
              // });
            }, 100)
        } else {
          this.animateShow = !this.animateShow;
          this.screenBg += screenw;
          this.listIndex += 1;
          if (this.listIndex == this.questionNum - 1) {
              // this.subMitBtnShow = true;
          }
  
          this.userClickList = []; //清空每道题用户选择答案选项
          isWrong = false;
          clearTimeout(this.monitorUser);
          this.timerCount = 10;
          this.timerPercentage = 100;
        }

      }
    },
    async getUserTodayIsAnswer() {
        if(this.userId) {
            get(this.apiUrl + "/Answer/question/getUserTodayIsAnswer", {userId: this.userId}, (json) => {
                if (json.code == 10000) {
                  if (json.data) {
                      if (json.data == 3) {
                          // this.$message.warning(this.languag === 'zh' ? "门票今日已使用，请更换门票" : 'The ticket has been used today, please change the ticket');
                          this.$router.push('/home');
                      }
                  } else {
                    this.$message.error("获取数据失败");
                  }
                }
              }
            );
        } else {
            this.$router.push('/');
        }
    },
    async calcQuestionAnswer() { //开始提交作答题目
      const loading = this.$loading({
            lock: true,
            text: '答案计算中...',
            spinner: 'van-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        // return false;
      setTimeout(() => {
        post(this.apiUrl + "/Answer/question/calcQuestionAnswer", {
            userId: this.userId,
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
      setTimeout(async() => {
        this.handleNextClick();
      }, 500)
    },
    timerFormat(percentage) { //倒计时 进度条文字内容。
      // console.log(percentage);
      return (percentage / 10).toString();
    }
  },
  mounted() {
    this.getUserTodayIsAnswer();
  },
  destroyed() {
    clearInterval(this.timer);
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
          .main {
              .submit-btn {
                  button {
                      width: 130px;
                      height: 40px;
                      border-radius: 50px;
                      margin-top: 10px;
                      bottom: 110px;
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
                top: 30px;
                margin: 0 auto;
                padding: 20px;
                //   border: 1px solid red;
                .list-content {
                  width: 90%;
                  //   width: 6.1rem;
                  // background: rgba(255, 255, 255, 0.8);
                  // border-radius: 18px;
                  // padding: 20px;
                  //   position: absolute;
                  //   top: 1.02rem;
                  //   left: 50%;
                  // padding-bottom: 182px;
                  //   transform: translateX(-50%);
                  //   z-index: 1;
                  //   overflow: hidden;
                  color: #fff;
                  .title {
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                    margin: 0;
                  }
                  .question {
                    color: #fff;
                    font-size: 18px;
                    padding: 0 20px;
                    text-align: justify;
                    line-height: 25px;
                    margin-bottom: 20px;
                    height: 60px;
                  }
                  .answer {
                    color: #fff;
                    font-size: 18px;
                    padding: 0 20px;
                    .answer-li {
                      margin: 10px 0;
                      align-items: center;
                      text-align: left;
                      display: flex;
                      background-color: #fff;
                      height: 70px;
                      width: 80%;
                      color: #4B5397;
                      font-weight: 700;
                      border-radius: 50px;
                      .answer-box {
                        margin: 0 auto;
                        display: flex;
                        padding: 20px;
                        .text {
                          line-height: 35px;
                          font-size: 20px;
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
                    .active {
                      background-color: #409EFF;
                      color: #fff;
                    }
                  }
                }
                
                .van-circle {
                  .van-circle__text {
                    font-size: 25px;
                    color: #fff;
                  }
                }
              }
            
          }
      }
    }
</style>
