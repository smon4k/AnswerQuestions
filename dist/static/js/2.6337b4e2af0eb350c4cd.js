webpackJsonp([2],{"55r3":function(A,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("hRXm"),i=n("YsIK");var e=function(A){n("JbRH")},o=n("VU/8")(a.a,i.a,!1,e,"data-v-61356264",null);t.default=o.exports},"8ThQ":function(A,t,n){A.exports=n.p+"static/img/2.d93b15e.jpg"},JbRH:function(A,t,n){var a=n("aIIq");"string"==typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);n("rjj0")("068327ad",a,!0,{})},YsIK:function(A,t,n){"use strict";var a={render:function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg",style:{backgroundSize:A.isMobel?"100% 100%":""}}),A._v(" "),a("van-nav-bar",{attrs:{title:A.$t("question:TodayLeaderboard"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":A.onClickLeft}}),A._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"generalStatistics"},[a("img",{staticClass:"image",attrs:{src:n("xGSF")}}),A._v(" "),a("div",{staticClass:"box"},[a("van-row",[a("van-col",{attrs:{span:"12",align:"center"}},[a("span",[A._v("TVL")]),a("br"),A._v(" "),a("span",[A._v(A._s(A.count_sell_number)+" USDT")])]),A._v(" "),a("van-col",{attrs:{span:"12",align:"center"}},[a("span",[A._v("APR")]),a("br"),A._v(" "),a("span",[A._v(A._s(A.toFixed(100*A.annualized_avg,4))+"%")])])],1),A._v(" "),a("van-divider"),A._v(" "),a("van-row",[a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[A._v(A._s(A.$t("question:NumberOfParticipants")))]),a("br"),A._v(" "),a("span",[A._v(A._s(A.answer_count_user))])]),A._v(" "),a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[A._v(A._s(A.$t("question:CompletedAnswers")))]),a("br"),A._v(" "),a("span",[A._v(A._s(A.answer_count))])]),A._v(" "),a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[A._v(A._s(A.$t("question:CorrectAnswer")))]),a("br"),A._v(" "),a("span",[A._v(A._s(A.answer_correct_count))])])],1)],1)]),A._v(" "),a("div",{staticClass:"attContainer"},[a("van-row",{staticClass:"sort"},[a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"d"===A.activeTime}],on:{click:function(t){return A.getActiveTime("d")}}},[A._v(A._s(A.$t("question:day")))])]),A._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"w"===A.activeTime}],on:{click:function(t){return A.getActiveTime("w")}}},[A._v(A._s(A.$t("question:week")))])]),A._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"m"===A.activeTime}],on:{click:function(t){return A.getActiveTime("m")}}},[A._v(A._s(A.$t("question:moon")))])]),A._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"1"===A.activeTime}],on:{click:function(t){return A.getActiveTime("1")}}},[A._v(A._s(A.$t("question:OverallList")))])])],1),A._v(" "),a("van-pull-refresh",{staticClass:"refresh",on:{refresh:A.onRefresh},model:{value:A.loading,callback:function(t){A.loading=t},expression:"loading"}},[A.tableData.length?a("van-list",{attrs:{finished:A.finished,"finished-text":A.$t("question:noMore")},model:{value:A.loading,callback:function(t){A.loading=t},expression:"loading"}},[a("div",{staticClass:"attent-list"},[a("ul",A._l(A.tableData,function(t,n){return a("li",{key:n,staticClass:"attent-item"},[a("div",{staticClass:"list-item"},[a("div",{staticClass:"num-item"},[a("van-row",{attrs:{type:"flex",justify:"center"}},[a("van-col",{attrs:{span:"6",align:"left"}},[a("img",{attrs:{src:t.avatar,alt:"",width:"30"},on:{click:function(n){return A.pushHomepage(t)}}}),A._v(" "),a("br"),A._v(" "),a("div",[A._v(A._s(t.nickname?t.nickname:"Unnamed"))])]),A._v(" "),a("van-col",{staticClass:"score",attrs:{span:"14",align:"right"}},[a("van-col",{attrs:{span:"24"}},[a("div",[A._v(A._s(A.$t("question:NumberOfAnswers"))+": "+A._s(t.number_answers))]),A._v(" "),a("div",[A._v(A._s(A.$t("question:TotalRevenue"))+": "+A._s(t.award_num)+" H2O")])])],1)],1)],1)])])}),0)])]):a("van-empty",{attrs:{description:A.$t("question:nothing")}})],1)],1)])],1)},staticRenderFns:[]};t.a=a},aIIq:function(A,t,n){var a=n("kxFB");(A.exports=n("FZ+f")(!0)).push([A.i,".container[data-v-61356264]{position:fixed;width:100%}.container[data-v-61356264] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-61356264] .van-nav-bar{background-color:transparent}.container[data-v-61356264] .van-nav-bar .van-icon,.container[data-v-61356264] .van-nav-bar__title{color:#fff}.container[data-v-61356264] .van-tabs__wrap{position:fixed;z-index:1;width:100%}.container[data-v-61356264] .van-tabs__content{padding-top:50px}.container[data-v-61356264] .main{width:100%;height:100vh;margin:0 auto;overflow:auto}.container[data-v-61356264] .main .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:40px;border-radius:10px;font-size:14px}.container[data-v-61356264] .main .generalStatistics .image{position:relative;width:100%;height:150px}.container[data-v-61356264] .main .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:500}.container[data-v-61356264] .main .generalStatistics .box .van-divider{margin:10px 0}.container[data-v-61356264] .main .attContainer{width:90%;height:65vh;margin:0 auto;margin-top:10px;border-radius:10px;overflow:auto}.container[data-v-61356264] .main .attContainer .content,.container[data-v-61356264] .main .attContainer .content img,.container[data-v-61356264] .main .attContainer .refresh .van-pull-refresh__track{width:100%}.container[data-v-61356264] .main .attContainer .title{height:30px;line-height:30px;font-size:.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px}.container[data-v-61356264] .main .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto}.container[data-v-61356264] .main .attContainer .attent-list ul>li{list-style:none}.container[data-v-61356264] .main .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;border-radius:15px;flex-direction:row;background:#ae8bf5;color:#fff;border-bottom:.5px solid #969799}.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px}.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px}.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column}.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item img{width:60px;height:60px;border-radius:100%}.container[data-v-61356264] .main .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0}.container[data-v-61356264] .main .attContainer .sort{padding-top:10px;font-size:15px}.container[data-v-61356264] .main .attContainer .sort span{padding:10px;color:#a79ba9}.container[data-v-61356264] .main .attContainer .sort .active{color:#fff;font-weight:500}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ranking/index.vue"],names:[],mappings:"AACA,4BAA4B,eAAe,UAAU,CACpD,AACD,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,4BAA4B,CACpE,AAGD,mGAAgD,UAAU,CACzD,AACD,4CAA4C,eAAe,UAAU,UAAU,CAC9E,AACD,+CAA+C,gBAAgB,CAC9D,AACD,kCAAkC,WAAW,aAAa,cAAc,aAAa,CACpF,AACD,qDAAqD,kBAAkB,UAAU,cAAc,gBAAgB,mBAAmB,cAAc,CAC/I,AACD,4DAA4D,kBAAkB,WAAW,YAAY,CACpG,AACD,0DAA0D,WAAW,kBAAkB,aAAa,QAAQ,SAAS,+BAAgC,WAAW,eAAe,CAC9K,AACD,uEAAuE,aAAa,CACnF,AACD,gDAAgD,UAAU,YAAY,cAAc,gBAAgB,mBAAmB,aAAa,CACnI,AAKD,wMAA6D,UAAU,CACtE,AACD,uDAAuD,YAAY,iBAAiB,iBAAkB,cAAc,yBAAyB,iBAAiB,CAC7J,AACD,6DAA6D,UAAU,eAAe,aAAa,CAClG,AACD,mEAAmE,eAAe,CACjF,AACD,0EAA0E,aAAa,mBAAmB,gBAAgB,mBAAmB,mBAAmB,mBAAmB,WAAW,gCAAiC,CAC9N,AACD,2FAA2F,gBAAgB,iBAAiB,WAAW,CACtI,AACD,+FAA+F,gBAAgB,CAC9G,AACD,sGAAsG,aAAa,6BAA6B,qBAAqB,CACpK,AACD,mGAAmG,WAAW,YAAY,kBAAkB,CAC3I,AACD,uFAAuF,iBAAiB,YAAY,CACnH,AACD,sDAAsD,iBAAiB,cAAc,CACpF,AACD,2DAA2D,aAAa,aAAa,CACpF,AACD,8DAA8D,WAAW,eAAe,CACvF",file:"index.vue",sourcesContent:['\n.container[data-v-61356264]{position:fixed;width:100%\n}\n.container[data-v-61356264] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-61356264] .van-nav-bar{background-color:transparent\n}\n.container[data-v-61356264] .van-nav-bar .van-icon{color:#fff\n}\n.container[data-v-61356264] .van-nav-bar__title{color:#fff\n}\n.container[data-v-61356264] .van-tabs__wrap{position:fixed;z-index:1;width:100%\n}\n.container[data-v-61356264] .van-tabs__content{padding-top:50px\n}\n.container[data-v-61356264] .main{width:100%;height:100vh;margin:0 auto;overflow:auto\n}\n.container[data-v-61356264] .main .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:40px;border-radius:10px;font-size:14px\n}\n.container[data-v-61356264] .main .generalStatistics .image{position:relative;width:100%;height:150px\n}\n.container[data-v-61356264] .main .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%, -50%);color:#fff;font-weight:500\n}\n.container[data-v-61356264] .main .generalStatistics .box .van-divider{margin:10px 0\n}\n.container[data-v-61356264] .main .attContainer{width:90%;height:65vh;margin:0 auto;margin-top:10px;border-radius:10px;overflow:auto\n}\n.container[data-v-61356264] .main .attContainer .refresh .van-pull-refresh__track{width:100%\n}\n.container[data-v-61356264] .main .attContainer .content{width:100%\n}\n.container[data-v-61356264] .main .attContainer .content img{width:100%\n}\n.container[data-v-61356264] .main .attContainer .title{height:30px;line-height:30px;font-size:0.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px\n}\n.container[data-v-61356264] .main .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto\n}\n.container[data-v-61356264] .main .attContainer .attent-list ul>li{list-style:none\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;border-radius:15px;flex-direction:row;background:#AE8BF5;color:#fff;border-bottom:0.5px solid #969799\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item .list-item .num-item img{width:60px;height:60px;border-radius:100%\n}\n.container[data-v-61356264] .main .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0\n}\n.container[data-v-61356264] .main .attContainer .sort{padding-top:10px;font-size:15px\n}\n.container[data-v-61356264] .main .attContainer .sort span{padding:10px;color:#A79BA9\n}\n.container[data-v-61356264] .main .attContainer .sort .active{color:#fff;font-weight:500\n}\n'],sourceRoot:""}])},hRXm:function(A,t,n){"use strict";var a=n("mtWM"),i=n.n(a),e=n("NYxO"),o=Object.assign||function(A){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(A[a]=n[a])}return A};t.a={name:"",data:function(){return{invitemeList:[],tableData:[],loading:!1,finished:!1,limit:20,invitemePage:1,iinvitePage:1,total:0,tabIndex:0,activeTime:"d",count_sell_number:0,annualized_avg:0,answer_count_user:0,answer_count:0,answer_correct_count:0}},created:function(){},computed:o({},Object(e.c)({address:function(A){return A.base.address},userId:function(A){return A.base.userId},isConnected:function(A){return A.base.isConnected},apiUrl:function(A){return A.base.apiUrl},isMobel:function(A){return A.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId,apiUrl:this.apiUrl}},reAddress:function(){return window.origin+"/#/regist?re="+this.address}}),watch:{changeData:{immediate:!0,handler:function(A){console.log(A),A.userId&&(this.getDataList(),this.getCountRankingData())}}},components:{},methods:{getActiveTime:function(A){this.activeTime=A,this.iinvitePage=1;var t={limit:this.limit,page:this.iinvitePage,userId:this.userId,times:A};this.getDataList(t)},getCountRankingData:function(){var A=this;i.a.get(this.apiUrl+"/Answer/question/getCountRankingData",{params:{userId:this.userId}}).then(function(t){1e4==t.code&&(A.count_sell_number=t.data.count_sell_number,A.annualized_avg=t.data.annualized_avg,A.answer_count_user=t.data.answer_count_user,A.answer_count=t.data.answer_count,A.answer_correct_count=t.data.answer_correct_count)}).catch(function(t){A.$notify({type:"warning",message:t})})},getDataList:function(A){var t,n=this;return(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.finished=!0,n.finished&&(n.tableData=[],n.finished=!1),(!A||void 0==A||A.length<=0)&&(A={limit:n.limit,page:n.iinvitePage,userId:n.userId,times:n.activeTime}),n.userId&&i.a.get(n.apiUrl+"/Answer/question/getUserTodayLeaderboardList",{params:A}).then(function(t){if(console.log(t),1e4==t.code){if(t.data.lists){var a=t.data&&t.data.lists||[];n.iinvitePage<=1?n.tableData=a:A.page<=t.data.allpage&&n.tableData.push(a),A.page<=t.data.allpage?n.finished=!0:n.finished=!1,n.total=t.data.count,n.iinvitePage+=1}}else n.$notify({type:"warning",message:"加载数据失败"});n.loading=!1}).catch(function(A){n.$notify({type:"warning",message:A})}),n.loading=!1;case 5:case"end":return t.stop()}},t,n)}),function(){var A=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,e){try{var o=A[i](e),r=o.value}catch(A){return void n(A)}if(!o.done)return Promise.resolve(r).then(function(A){a("next",A)},function(A){a("throw",A)});t(r)}("next")})})()},onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var A=this;this.finished=!1,this.iinvitePage=1,this.loading=!0,setTimeout(function(){A.getDataList()},300)},getAddressString:function(A){return A.substring(0,7)+"***"+A.substring(A.length-3)},selectPage:function(A,t){console.log(A,t);var n=[];this.list=[],0==A&&(n={limit:this.limit,page:this.iinvitePage,userId:this.userId,is_reward:1},this.iinviteList.length<=0&&this.getDataList(n))},copySuccess:function(){this.$notify({type:"success",message:"复制成功"})}},mounted:function(){}}},xGSF:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6gAAAEACAYAAAC+kVuCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFMTNDNUU2MzMxODExRThBRTE4RkY5NjhEMEFBM0ZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFMTNDNUU3MzMxODExRThBRTE4RkY5NjhEMEFBM0ZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUUxM0M1RTQzMzE4MTFFOEFFMThGRjk2OEQwQUEzRkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUUxM0M1RTUzMzE4MTFFOEFFMThGRjk2OEQwQUEzRkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SxgdiAAALP0lEQVR42uzd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"}});