webpackJsonp([5],{"55r3":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("hRXm"),i=n("saQ/");var r=function(t){n("epL4")},o=n("VU/8")(e.a,i.a,!1,r,"data-v-a0ba2036",null);a.default=o.exports},"8ThQ":function(t,a,n){t.exports=n.p+"static/img/2.9d44a18.jpg"},epL4:function(t,a,n){var e=n("vNl7");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("eb43a436",e,!0,{})},hRXm:function(t,a,n){"use strict";var e=n("mtWM"),i=n.n(e),r=n("NYxO"),o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};a.a={name:"",data:function(){return{invitemeList:[],tableData:[],loading:!1,finished:!1,limit:20,invitemePage:1,iinvitePage:1,total:0,tabIndex:0,activeTime:"d",count_sell_number:0,annualized_avg:0,answer_count_user:0,answer_count:0,answer_correct_count:0}},created:function(){},computed:o({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId,apiUrl:this.apiUrl}},reAddress:function(){return window.origin+"/#/regist?re="+this.address}}),watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.userId&&(this.getDataList(),this.getCountRankingData())}}},components:{},methods:{getActiveTime:function(t){this.activeTime=t,this.iinvitePage=1;var a={limit:this.limit,page:this.iinvitePage,userId:this.userId,times:t};this.getDataList(a)},getCountRankingData:function(){var t=this;i.a.get(this.apiUrl+"/Answer/question/getCountRankingData",{params:{userId:this.userId}}).then(function(a){1e4==a.code&&(t.count_sell_number=a.data.count_sell_number,t.annualized_avg=a.data.annualized_avg,t.answer_count_user=a.data.answer_count_user,t.answer_count=a.data.answer_count,t.answer_correct_count=a.data.answer_correct_count)}).catch(function(a){t.$notify({type:"warning",message:a})})},getDataList:function(t){var a,n=this;return(a=regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n.finished=!0,n.finished&&(n.tableData=[],n.finished=!1),(!t||void 0==t||t.length<=0)&&(t={limit:n.limit,page:n.iinvitePage,userId:n.userId,times:n.activeTime}),n.userId&&i.a.get(n.apiUrl+"/Answer/question/getUserTodayLeaderboardList",{params:t}).then(function(a){if(console.log(a),1e4==a.code){if(a.data.lists){var e=a.data&&a.data.lists||[];n.iinvitePage<=1?n.tableData=e:t.page<=a.data.allpage&&n.tableData.push(e),t.page<=a.data.allpage?n.finished=!0:n.finished=!1,n.total=a.data.count,n.iinvitePage+=1}}else n.$notify({type:"warning",message:"加载数据失败"});n.loading=!1}).catch(function(t){n.$notify({type:"warning",message:t})}),n.loading=!1;case 5:case"end":return a.stop()}},a,n)}),function(){var t=a.apply(this,arguments);return new Promise(function(a,n){return function e(i,r){try{var o=t[i](r),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){e("next",t)},function(t){e("throw",t)});a(s)}("next")})})()},onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var t=this;this.finished=!1,this.iinvitePage=1,this.loading=!0,setTimeout(function(){t.getDataList()},300)},getAddressString:function(t){return t.substring(0,7)+"***"+t.substring(t.length-3)},selectPage:function(t,a){console.log(t,a);var n=[];this.list=[],0==t&&(n={limit:this.limit,page:this.iinvitePage,userId:this.userId,is_reward:1},this.iinviteList.length<=0&&this.getDataList(n))},copySuccess:function(){this.$notify({type:"success",message:"复制成功"})}},mounted:function(){}}},"saQ/":function(t,a,n){"use strict";var e={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),e("van-nav-bar",{attrs:{title:t.$t("question:TodayLeaderboard"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"generalStatistics"},[e("img",{staticClass:"image",attrs:{src:n("xGSF")}}),t._v(" "),e("div",{staticClass:"box"},[e("van-row",[e("van-col",{attrs:{span:"12",align:"center"}},[e("span",[t._v("TVL")]),e("br"),t._v(" "),e("span",[t._v(t._s(t.count_sell_number)+" USDT")])]),t._v(" "),e("van-col",{attrs:{span:"12",align:"center"}},[e("span",[t._v("APR")]),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(100*t.annualized_avg,4))+"%")])])],1),t._v(" "),e("van-divider"),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"8",align:"center"}},[e("span",[t._v(t._s(t.$t("question:NumberOfParticipants")))]),e("br"),t._v(" "),e("span",[t._v(t._s(t.answer_count_user))])]),t._v(" "),e("van-col",{attrs:{span:"8",align:"center"}},[e("span",[t._v(t._s(t.$t("question:CompletedAnswers")))]),e("br"),t._v(" "),e("span",[t._v(t._s(t.answer_count))])]),t._v(" "),e("van-col",{attrs:{span:"8",align:"center"}},[e("span",[t._v(t._s(t.$t("question:CorrectAnswer")))]),e("br"),t._v(" "),e("span",[t._v(t._s(t.answer_correct_count))])])],1)],1)]),t._v(" "),e("div",{staticClass:"attContainer"},[e("van-row",{staticClass:"sort"},[e("van-col",{attrs:{span:"6",align:"center"}},[e("span",{class:[{active:"d"===t.activeTime}],on:{click:function(a){return t.getActiveTime("d")}}},[t._v(t._s(t.$t("question:day")))])]),t._v(" "),e("van-col",{attrs:{span:"6",align:"center"}},[e("span",{class:[{active:"w"===t.activeTime}],on:{click:function(a){return t.getActiveTime("w")}}},[t._v(t._s(t.$t("question:week")))])]),t._v(" "),e("van-col",{attrs:{span:"6",align:"center"}},[e("span",{class:[{active:"m"===t.activeTime}],on:{click:function(a){return t.getActiveTime("m")}}},[t._v(t._s(t.$t("question:moon")))])]),t._v(" "),e("van-col",{attrs:{span:"6",align:"center"}},[e("span",{class:[{active:"1"===t.activeTime}],on:{click:function(a){return t.getActiveTime("1")}}},[t._v(t._s(t.$t("question:OverallList")))])])],1),t._v(" "),e("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[t.tableData.length?e("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("question:noMore")},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[e("div",{staticClass:"attent-list"},[e("ul",t._l(t.tableData,function(a,n){return e("li",{key:n,staticClass:"attent-item"},[e("div",{staticClass:"list-item"},[e("div",{staticClass:"num-item"},[e("van-row",{attrs:{type:"flex",justify:"center"}},[e("van-col",{attrs:{span:"6",align:"left"}},[e("img",{attrs:{src:a.avatar,alt:"",width:"30"},on:{click:function(n){return t.pushHomepage(a)}}}),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(a.nickname?a.nickname:"Unnamed"))])]),t._v(" "),e("van-col",{staticClass:"score",attrs:{span:"14",align:"right"}},[e("van-col",{attrs:{span:"24"}},[e("div",[t._v(t._s(t.$t("question:NumberOfAnswers"))+": "+t._s(a.number_answers))]),t._v(" "),e("div",[t._v(t._s(t.$t("question:TotalRevenue"))+": "+t._s(a.award_num)+" SCT")])])],1)],1)],1)])])}),0)])]):e("van-empty",{attrs:{description:t.$t("question:nothing")}})],1)],1)])],1)},staticRenderFns:[]};a.a=e},vNl7:function(t,a,n){var e=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-a0ba2036]{position:fixed;width:100%}.container[data-v-a0ba2036] .bg{background-image:url("+e(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-a0ba2036] .van-nav-bar{background-color:transparent}.container[data-v-a0ba2036] .van-nav-bar .van-icon,.container[data-v-a0ba2036] .van-nav-bar__title{color:#fff}.container[data-v-a0ba2036] .van-tabs__wrap{position:fixed;z-index:1;width:100%}.container[data-v-a0ba2036] .van-tabs__content{padding-top:50px}.container[data-v-a0ba2036] .main{width:100%;height:100vh;margin:0 auto;overflow:auto}.container[data-v-a0ba2036] .main .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:40px;border-radius:10px;font-size:14px}.container[data-v-a0ba2036] .main .generalStatistics .image{position:relative;width:100%;height:150px}.container[data-v-a0ba2036] .main .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:500}.container[data-v-a0ba2036] .main .generalStatistics .box .van-divider{margin:10px 0}.container[data-v-a0ba2036] .main .attContainer{width:90%;height:65vh;margin:0 auto;margin-top:10px;border-radius:10px;overflow:auto}.container[data-v-a0ba2036] .main .attContainer .content,.container[data-v-a0ba2036] .main .attContainer .content img,.container[data-v-a0ba2036] .main .attContainer .refresh .van-pull-refresh__track{width:100%}.container[data-v-a0ba2036] .main .attContainer .title{height:30px;line-height:30px;font-size:.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px}.container[data-v-a0ba2036] .main .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto}.container[data-v-a0ba2036] .main .attContainer .attent-list ul>li{list-style:none}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;border-radius:15px;flex-direction:row;background:#ae8bf5;color:#fff;border-bottom:.5px solid #969799}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item img{width:60px;height:60px;border-radius:100%}.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0}.container[data-v-a0ba2036] .main .attContainer .sort{padding-top:10px;font-size:15px}.container[data-v-a0ba2036] .main .attContainer .sort span{padding:10px;color:#a79ba9}.container[data-v-a0ba2036] .main .attContainer .sort .active{color:#fff;font-weight:500}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ranking/index.vue"],names:[],mappings:"AACA,4BAA4B,eAAe,UAAU,CACpD,AACD,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,4BAA4B,CACpE,AAGD,mGAAgD,UAAU,CACzD,AACD,4CAA4C,eAAe,UAAU,UAAU,CAC9E,AACD,+CAA+C,gBAAgB,CAC9D,AACD,kCAAkC,WAAW,aAAa,cAAc,aAAa,CACpF,AACD,qDAAqD,kBAAkB,UAAU,cAAc,gBAAgB,mBAAmB,cAAc,CAC/I,AACD,4DAA4D,kBAAkB,WAAW,YAAY,CACpG,AACD,0DAA0D,WAAW,kBAAkB,aAAa,QAAQ,SAAS,+BAAgC,WAAW,eAAe,CAC9K,AACD,uEAAuE,aAAa,CACnF,AACD,gDAAgD,UAAU,YAAY,cAAc,gBAAgB,mBAAmB,aAAa,CACnI,AAKD,wMAA6D,UAAU,CACtE,AACD,uDAAuD,YAAY,iBAAiB,iBAAkB,cAAc,yBAAyB,iBAAiB,CAC7J,AACD,6DAA6D,UAAU,eAAe,aAAa,CAClG,AACD,mEAAmE,eAAe,CACjF,AACD,0EAA0E,aAAa,mBAAmB,gBAAgB,mBAAmB,mBAAmB,mBAAmB,WAAW,gCAAiC,CAC9N,AACD,2FAA2F,gBAAgB,iBAAiB,WAAW,CACtI,AACD,+FAA+F,gBAAgB,CAC9G,AACD,sGAAsG,aAAa,6BAA6B,qBAAqB,CACpK,AACD,mGAAmG,WAAW,YAAY,kBAAkB,CAC3I,AACD,uFAAuF,iBAAiB,YAAY,CACnH,AACD,sDAAsD,iBAAiB,cAAc,CACpF,AACD,2DAA2D,aAAa,aAAa,CACpF,AACD,8DAA8D,WAAW,eAAe,CACvF",file:"index.vue",sourcesContent:['\n.container[data-v-a0ba2036]{position:fixed;width:100%\n}\n.container[data-v-a0ba2036] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-a0ba2036] .van-nav-bar{background-color:transparent\n}\n.container[data-v-a0ba2036] .van-nav-bar .van-icon{color:#fff\n}\n.container[data-v-a0ba2036] .van-nav-bar__title{color:#fff\n}\n.container[data-v-a0ba2036] .van-tabs__wrap{position:fixed;z-index:1;width:100%\n}\n.container[data-v-a0ba2036] .van-tabs__content{padding-top:50px\n}\n.container[data-v-a0ba2036] .main{width:100%;height:100vh;margin:0 auto;overflow:auto\n}\n.container[data-v-a0ba2036] .main .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:40px;border-radius:10px;font-size:14px\n}\n.container[data-v-a0ba2036] .main .generalStatistics .image{position:relative;width:100%;height:150px\n}\n.container[data-v-a0ba2036] .main .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%, -50%);color:#fff;font-weight:500\n}\n.container[data-v-a0ba2036] .main .generalStatistics .box .van-divider{margin:10px 0\n}\n.container[data-v-a0ba2036] .main .attContainer{width:90%;height:65vh;margin:0 auto;margin-top:10px;border-radius:10px;overflow:auto\n}\n.container[data-v-a0ba2036] .main .attContainer .refresh .van-pull-refresh__track{width:100%\n}\n.container[data-v-a0ba2036] .main .attContainer .content{width:100%\n}\n.container[data-v-a0ba2036] .main .attContainer .content img{width:100%\n}\n.container[data-v-a0ba2036] .main .attContainer .title{height:30px;line-height:30px;font-size:0.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list ul>li{list-style:none\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;border-radius:15px;flex-direction:row;background:#AE8BF5;color:#fff;border-bottom:0.5px solid #969799\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .list-item .num-item img{width:60px;height:60px;border-radius:100%\n}\n.container[data-v-a0ba2036] .main .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0\n}\n.container[data-v-a0ba2036] .main .attContainer .sort{padding-top:10px;font-size:15px\n}\n.container[data-v-a0ba2036] .main .attContainer .sort span{padding:10px;color:#A79BA9\n}\n.container[data-v-a0ba2036] .main .attContainer .sort .active{color:#fff;font-weight:500\n}\n'],sourceRoot:""}])},xGSF:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6gAAAEACAMAAACJT6uwAAAAclBMVEUAAACPN9yTNt6TNt6TNt6TNt6RNt2TNt6TNt6TNt6TNt6TNt6TNt5/OtOAOdSTNt57OtF9OtN+OtOCOdWTNt6DOdaEOdaFOdaTNt6TNt6TNt53O896OtGON9uQN92BOdWFONeSNt6JONl8OtKLN9p/OtOPtIkZAAAAGnRSTlMABvrtsJcT03g3HORY1cCH9+jkkIhiNiXiWgcTQoQAAAT4SURBVHja7NppThtBFIXR154YkhhCBERVTsy4/y0iBBJGuM3Pvohz9vCprp6q3hku1xfnmz65mwbf1mx+tDg+qVFX64BGdQrP/p6d1j7Xv3qIbQPabLmqD/70FDqFF/Of9d4Q85zqFN4sh9qx+t1T6BR2LHZKHXQKoXZKtXsh1tIdCb6A14vSdU+hU/hovsoavtvbBuwfv1c9xKNOYZ/ZaVWtewadwoizqiHkf69OYcyPqsseQacw7iRk+eoUDjiuix7g/n8DRi3qvE9Pp3DQUQXcknQKh82rT06n8InZ9KHqFD41eag6hfxQNzqF+FB1Cvmh6hTyQ938a0B4qDqF/FB1Cvmh6hTyQ9Up5IeqU8gPVaeQH6pOIT9UncIXCFWnkB/qQwPSQ9Up5IeqU8gPVaeQH6pOIT/Uuwakh6pTyA9Vp5Afqk4hP1SdQn6oOoX8UG8akB6qTiE/VJ1Cfqg6hfxQdQr5oeoU8kPVKeSHqlPID3XbgPRQdQr5oeoU8kPVKeSHqlPID1WnkB+qTiE/1O1tA8JDfdQpxIeqU8gPVaeQH+oT+/SWzEwYBmDwXcdX4T+E/W+RQiFkMq7Mc9G9h/YU+lE9hX7Us6eQj3q+X0A8qqfQj+oprHxUT2GtelRP4Vk86slTeNaO6im8SEf1FF6Vo3oKb8JRT3cLeNGN6im8y0b1FD5Uo3oKn0SjegqfNaN6CheSUT2FS8WonsIXxaiewhfBqA8LuNSL6il8k4vqKXxXi+opXBGL6ilc04r6fwFXpKJ6CteVonoKG0JRPYUtnaiewqZMVE9hWyXq3wVsikT1FG5pRPUUbkpE9RRuK0T1FHYEonoKe46P6insOjyqp7Dv6Kh/FvD7xlPoG0+hbzyFvvEU+sZT6BtPoW9++vTfAn7oqKiPnsKBxlPoG0+hbzyFvvEU+vajnj2Fo83u0/sFHGw8hb7xFPrGU+gbT6HvVtSTp9AwnkLfeAp94yn0zdbTuwVUjKfQN54+sU8Hpw0EQBTFpo49hZD+awz4ZOwG/gOpB8G+8xT2naew7zyFfecp7DtPYd9XVE9hz2fUvweYc57CvvMU9p2nsO88hX1vUX8fYNN5CvvOU9h3nsK+8xT2naew7xX15wGWnaew7zyFfecp7DtPYd89wDxRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFT+27WblAaCKAqjL/2TdHcCTjKx9r9QE0EkqGPfhXP28FFF1SWAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCFATQNobqp5AM3NdRlAc5daBtDcUtsAmttqH0Bze9V1AK1dq+ptAK29VdXhJxVam456WAfQ2FpPZ5sHaGw+16fbANp6rweXX2htrS8n8yRoajmVUqG5Z6ffTm6/0NB6qlc3b7/QzHyrH86r5QM0Mq3n+s1xt/uFJq73o/60b8tldrLCP5rmy7Lt9eIDBuYgztFt+BQAAAAASUVORK5CYII="}});