webpackJsonp([23],{"3eDD":function(t,e,n){var i=n("DP8J");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("254159c9",i,!0,{})},"6IsB":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("div",{staticClass:"main"},[n("van-row",{staticClass:"content"},[n("van-col",{attrs:{span:24,align:"center"}},[n("van-circle",{staticStyle:{width:"70px"},attrs:{color:"#D7B078","stroke-linecap":"butt",rate:100,clockwise:!1,text:(t.timerPercentage/10).toString(),"stroke-width":150},model:{value:t.timerPercentage,callback:function(e){t.timerPercentage=e},expression:"timerPercentage"}})],1),t._v(" "),n("van-col",{attrs:{span:24,align:"center"}},[n("transition",{attrs:{name:"van-fade"}},[t.getQAlist.length?n("div",{key:t.listIndex,staticClass:"list-content"},[n("div",{key:t.listIndex,staticClass:"question"},[t._v("\n                    "+t._s(t.getQAlist[t.listIndex].title)+"\n                  ")]),t._v(" "),n("ul",{staticClass:"answer"},t._l(t.getQAlist[t.listIndex].option,function(e,i){return n("li",{key:i,class:["answer-li",t.userClickList.includes(i)?"active":""],on:{click:function(e){return t.handleUserClick(i)}}},[n("div",{staticClass:"answer-box"},[n("div",{staticClass:"text"},[t._v(t._s(e))])])])}),0)]):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.subMitBtnShow,expression:"subMitBtnShow"}],staticClass:"submit-btn",on:{click:function(e){return t.handleNextClick()}}},[n("van-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("question:Submit")))])],1)],1)],1)],1),t._v(" "),n("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(e){t.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[t._v("答案计算中...")])],1)])],1)},staticRenderFns:[]};e.a=i},DP8J:function(t,e,n){var i=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-6b1e8f96] .bg{background-image:url("+i(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed}.container[data-v-6b1e8f96] .main .submit-btn button{width:130px;height:40px;border-radius:50px;margin-top:10px;bottom:110px;z-index:10}.container[data-v-6b1e8f96] .main .content{max-width:750px;position:fixed;left:0;right:0;top:30px;margin:0 auto;padding:20px}.container[data-v-6b1e8f96] .main .content .list-content{width:90%;color:#fff}.container[data-v-6b1e8f96] .main .content .list-content .title{color:#fff;font-size:18px;font-weight:700;text-align:center;margin:0}.container[data-v-6b1e8f96] .main .content .list-content .question{color:#fff;font-size:18px;padding:0 20px;text-align:justify;line-height:25px;margin-bottom:20px;height:60px}.container[data-v-6b1e8f96] .main .content .list-content .answer{color:#fff;font-size:18px;padding:0 20px}.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li{margin:10px 0;align-items:center;text-align:left;display:flex;background-color:#fff;height:70px;width:80%;color:#4b5397;font-weight:700;border-radius:50px}.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box{margin:0 auto;display:flex;padding:20px}.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .text{line-height:35px;font-size:20px}.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .circle{width:30px;height:30px;border:1px solid #005ece;border-radius:50%;flex:none;margin-right:10px;text-align:center;line-height:36px;cursor:pointer}.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .active b{width:18px;height:18px;background:#005ece;display:inline-block;border-radius:50%}.container[data-v-6b1e8f96] .main .content .list-content .answer .active{background-color:#409eff;color:#fff}.container[data-v-6b1e8f96] .main .content .van-circle .van-circle__text{font-size:25px;color:#fff}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/answer/index.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,cAAc,CACxO,AACD,qDAAqD,YAAY,YAAY,mBAAmB,gBAAgB,aAAa,UAAU,CACtI,AACD,2CAA2C,gBAAgB,AAAc,eAAe,OAAO,QAAQ,SAAS,cAAc,YAAY,CACzI,AACD,yDAAyD,UAAU,UAAU,CAC5E,AACD,gEAAgE,WAAW,eAAe,gBAAiB,kBAAkB,QAAQ,CACpI,AACD,mEAAmE,WAAW,eAAe,eAAe,mBAAmB,iBAAiB,mBAAmB,WAAW,CAC7K,AACD,iEAAiE,WAAW,eAAe,cAAc,CACxG,AACD,4EAA4E,cAAc,mBAAmB,gBAAgB,aAAa,sBAAsB,YAAY,UAAU,cAAc,gBAAgB,kBAAkB,CACrO,AACD,wFAAwF,cAAc,aAAa,YAAY,CAC9H,AACD,8FAA8F,iBAAiB,cAAc,CAC5H,AACD,gGAAgG,WAAW,YAAY,yBAAyB,kBAAkB,UAAU,kBAAkB,kBAAkB,iBAAiB,cAAc,CAC9O,AACD,kGAAkG,WAAW,YAAY,mBAAmB,qBAAqB,iBAAiB,CACjL,AACD,yEAAyE,yBAAyB,UAAU,CAC3G,AACD,yEAAyE,eAAe,UAAU,CACjG",file:"index.vue",sourcesContent:['\n.container[data-v-6b1e8f96] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-6b1e8f96] .main .submit-btn button{width:130px;height:40px;border-radius:50px;margin-top:10px;bottom:110px;z-index:10\n}\n.container[data-v-6b1e8f96] .main .content{max-width:750px;margin:0 auto;position:fixed;left:0;right:0;top:30px;margin:0 auto;padding:20px\n}\n.container[data-v-6b1e8f96] .main .content .list-content{width:90%;color:#fff\n}\n.container[data-v-6b1e8f96] .main .content .list-content .title{color:#fff;font-size:18px;font-weight:bold;text-align:center;margin:0\n}\n.container[data-v-6b1e8f96] .main .content .list-content .question{color:#fff;font-size:18px;padding:0 20px;text-align:justify;line-height:25px;margin-bottom:20px;height:60px\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer{color:#fff;font-size:18px;padding:0 20px\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li{margin:10px 0;align-items:center;text-align:left;display:flex;background-color:#fff;height:70px;width:80%;color:#4B5397;font-weight:700;border-radius:50px\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box{margin:0 auto;display:flex;padding:20px\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .text{line-height:35px;font-size:20px\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .circle{width:30px;height:30px;border:1px solid #005ece;border-radius:50%;flex:none;margin-right:10px;text-align:center;line-height:36px;cursor:pointer\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .answer-li .answer-box .active b{width:18px;height:18px;background:#005ece;display:inline-block;border-radius:50%\n}\n.container[data-v-6b1e8f96] .main .content .list-content .answer .active{background-color:#409EFF;color:#fff\n}\n.container[data-v-6b1e8f96] .main .content .van-circle .van-circle__text{font-size:25px;color:#fff\n}\n'],sourceRoot:""}])},FE6z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("RKJw"),r=n("6IsB");var a=function(t){n("3eDD")},s=n("VU/8")(i.a,r.a,!1,a,"data-v-6b1e8f96",null);e.default=s.exports},RKJw:function(t,e,n){"use strict";var i=n("mtWM"),r=(n.n(i),n("NYxO")),a=n("+zHA"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(r,a){try{var s=e[r](a),o=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}e.a={name:"",data:function(){return{animateShow:!1,screenBg:0,listIndex:0,subMitBtnShow:!1,userScore:0,userClickList:[],timer:null,userTime:0,getQAlist:[],userAnswerList:[],questionNum:5,loading:!0,is_relive:0,monitorUser:"",timerStates:!1,timerCount:0,timerPercentage:100,languag:this.$i18n.i18next.language,loadingShow:!1}},activated:function(){},computed:s({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},isMobel:function(t){return t.comps.isMobel},mainTheme:function(t){return t.comps.mainTheme},apiUrl:function(t){return t.base.apiUrl}}),{animateBg:function(){return{transform:"translate(-"+this.screenBg+"px, 0)",transition:"all 2s"}},animateWheel:function(){return{transform:"rotate("+this.screenBg+"deg)",transition:"all 2s"}},animateWoman:function(){return{transform:"translate(-"+this.screenBg+"px, 0)",transition:"all 2s"}},listTypeText:function(){var t="【"+this.$t("question:SingleChoice")+"】";return console.log(this.getQAlist),console.log(this.getQAlist[this.listIndex]),this.getQAlist[this.listIndex].type&&2==this.getQAlist[this.listIndex].type&&(t="【"+this.$t("question:MultipleChoice")+"】"),this.getQAlist[this.listIndex].type&&3==this.getQAlist[this.listIndex].type&&(t="【"+this.$t("question:judge")+"】"),t},changeData:function(){return{apiUrl:this.apiUrl,address:this.address,userId:this.userId}}}),created:function(){var t=this;this.getUserTodayIsAnswer(),this.timer=setInterval(function(){t.userTime+=1},1e3);var e=this.$route.params;this.is_relive=e.is_relive},watch:{changeData:{immediate:!0,handler:function(t){t.userId&&this.getQuestionList()}},timerStates:{immediate:!0,handler:function(t){t&&(this.timerCount=10)}},timerCount:{handler:function(t){var e=this;t>0?this.monitorUser=setTimeout(function(){e.timerStates&&(e.timerCount--,e.timerPercentage=e.timerPercentage-10)},1e3):this.timerStates&&setTimeout(o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.calcQuestionAnswer(),console.log("时间到。。。");case 2:case"end":return t.stop()}},t,e)})),100)},immediate:!0}},components:{},methods:{getQuestionList:function(){var t=this;Object(a.b)(this.apiUrl+"/Answer/question/getUserQuestionList",{userId:this.userId,language:this.$i18n.i18next.language},function(e){1e4==e.code?(t.getQAlist=e.data,t.timerStates=!0):t.$message.error("加载数据失败")})},handleNextClick:function(){var t=this,e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(0==this.userClickList.length)this.$message.warning("请选择答案！");else{var n=[],i=this.getQAlist[this.listIndex];console.log(i);var r=i.type;this.userClickList.forEach(function(t){switch(t){case 0:3==r?n.push("对"):n.push("A");break;case 1:3==r?n.push("错"):n.push("B");break;case 2:n.push("C");break;case 3:n.push("D");break;case 4:n.push("E");break;default:n=null}});var a=this.userAnswerList.findIndex(function(t){return t.id===i.id}),s={id:i.id,answer:n};-1!==this.userAnswerList.findIndex(function(t){return t.id===i.id})?this.userAnswerList.splice(a,1,s):this.userAnswerList.push(s),this.listIndex===this.questionNum-1?(clearTimeout(this.monitorUser),setTimeout(o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.calcQuestionAnswer();case 2:case"end":return e.stop()}},e,t)})),100)):(this.animateShow=!this.animateShow,this.screenBg+=e,this.listIndex+=1,this.listIndex,this.questionNum,this.userClickList=[],!1,clearTimeout(this.monitorUser),this.timerCount=10,this.timerPercentage=100)}},getUserTodayIsAnswer:function(){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.userId?Object(a.b)(t.apiUrl+"/Answer/question/getUserTodayIsAnswer",{userId:t.userId},function(e){1e4==e.code&&(e.data?3==e.data&&t.$router.push("/home"):t.$message.error("获取数据失败"))}):t.$router.push("/");case 1:case"end":return e.stop()}},e,t)}))()},calcQuestionAnswer:function(){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.loadingShow=!0,setTimeout(function(){Object(a.c)(t.apiUrl+"/Answer/question/calcQuestionAnswer",{userId:t.userId,answers:t.userAnswerList,times:t.userTime,language:t.$i18n.i18next.language,is_relive:t.is_relive},function(e){e&&1e4==e.code?e.data&&setTimeout(function(){t.loadingShow=!1,t.$router.push({name:"score",params:{correct_num:e.data.correct_num,score:e.data.score,times:e.data.times,is_possible_resurrection:e.data.is_possible_resurrection,consumeNumber:e.data.consumeNumber,capped_num:e.data.capped_num,award_num:e.data.award_num,award_rate:e.data.award_rate}})},2e3):(t.$message.error(e.msg),loading.close())})},1e3);case 2:case"end":return e.stop()}},e,t)}))()},handleUserClick:function(t){var e=this;if(2==this.getQAlist[this.listIndex].type){var n=!1;this.userClickList.forEach(function(e){e===t&&(n=!0)}),n?this.userClickList.splice(this.userClickList.findIndex(function(e){return e===t}),1):this.userClickList.push(t)}else this.userClickList=[t];setTimeout(o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.handleNextClick();case 1:case"end":return t.stop()}},t,e)})),500)},timerFormat:function(t){return(t/10).toString()}},mounted:function(){this.getUserTodayIsAnswer()},destroyed:function(){clearInterval(this.timer)}}}});