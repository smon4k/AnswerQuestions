webpackJsonp([5],{"2cjJ":function(t,n,e){var a=e("nNsN");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("ae66eb2e",a,!1,{})},"55r3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("hRXm"),i=e("cMrT"),s=!1;var r=function(t){s||e("2cjJ")},o=e("VU/8")(a.a,i.a,!1,r,"data-v-b8fe84e2",null);o.options.__file="src/views/ranking/index.vue",n.default=o.exports},"8ThQ":function(t,n,e){t.exports=e.p+"static/img/2.9d44a18.jpg"},cMrT:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),a("van-nav-bar",{attrs:{title:t.$t("question:TodayLeaderboard"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"generalStatistics"},[a("img",{staticClass:"image",attrs:{src:e("xGSF")}}),t._v(" "),a("div",{staticClass:"box"},[a("van-row",[a("van-col",{attrs:{span:"12",align:"center"}},[a("span",[t._v("TVL")]),a("br"),t._v(" "),a("span",[t._v(t._s(t.count_sell_number)+" USDT")])]),t._v(" "),a("van-col",{attrs:{span:"12",align:"center"}},[a("span",[t._v("APR")]),a("br"),t._v(" "),a("span",[t._v(t._s(t.toFixed(100*t.annualized_avg,4))+"%")])])],1),t._v(" "),a("van-divider"),t._v(" "),a("van-row",[a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[t._v(t._s(t.$t("question:NumberOfParticipants")))]),a("br"),t._v(" "),a("span",[t._v(t._s(t.answer_count_user))])]),t._v(" "),a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[t._v(t._s(t.$t("question:CompletedAnswers")))]),a("br"),t._v(" "),a("span",[t._v(t._s(t.answer_count))])]),t._v(" "),a("van-col",{attrs:{span:"8",align:"center"}},[a("span",[t._v(t._s(t.$t("question:CorrectAnswer")))]),a("br"),t._v(" "),a("span",[t._v(t._s(t.answer_correct_count))])])],1)],1)]),t._v(" "),a("div",{staticClass:"attContainer"},[a("van-row",{staticClass:"sort"},[a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"d"===t.activeTime}],on:{click:function(n){return t.getActiveTime("d")}}},[t._v(t._s(t.$t("question:day")))])]),t._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"w"===t.activeTime}],on:{click:function(n){return t.getActiveTime("w")}}},[t._v(t._s(t.$t("question:week")))])]),t._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"m"===t.activeTime}],on:{click:function(n){return t.getActiveTime("m")}}},[t._v(t._s(t.$t("question:moon")))])]),t._v(" "),a("van-col",{attrs:{span:"6",align:"center"}},[a("span",{class:[{active:"1"===t.activeTime}],on:{click:function(n){return t.getActiveTime("1")}}},[t._v(t._s(t.$t("question:OverallList")))])])],1),t._v(" "),a("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[t.tableData.length?a("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("question:noMore")},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[a("div",{staticClass:"attent-list"},[a("ul",t._l(t.tableData,function(n,e){return a("li",{key:e,staticClass:"attent-item"},[a("div",{staticClass:"list-item"},[a("div",{staticClass:"num-item"},[a("van-row",{attrs:{type:"flex",justify:"center"}},[a("van-col",{attrs:{span:"6",align:"center"}},[a("img",{attrs:{src:n.avatar,alt:"",width:"30"},on:{click:function(e){return t.pushHomepage(n)}}}),t._v(" "),a("br"),t._v(" "),a("div",[t._v(t._s(n.nickname?n.nickname:"Unnamed"))])]),t._v(" "),a("van-col",{staticClass:"score",attrs:{span:"14",align:"right"}},[a("van-col",{attrs:{span:"24"}},[a("div",[t._v(t._s(t.$t("question:NumberOfAnswers"))+": "+t._s(n.number_answers))]),t._v(" "),a("div",[t._v(t._s(t.$t("question:TotalRevenue"))+": "+t._s(n.award_num)+" SCT")])])],1)],1)],1)])])}),0)])]):a("van-empty",{attrs:{description:t.$t("question:nothing")}})],1)],1)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};n.a=i},hRXm:function(t,n,e){"use strict";var a=e("mtWM"),i=e.n(a),s=e("NYxO"),r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};n.a={name:"",data:function(){return{invitemeList:[],tableData:[],loading:!1,finished:!1,limit:20,invitemePage:1,iinvitePage:1,total:0,tabIndex:0,activeTime:"d",count_sell_number:0,annualized_avg:0,answer_count_user:0,answer_count:0,answer_correct_count:0}},created:function(){},computed:r({},Object(s.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId,apiUrl:this.apiUrl}},reAddress:function(){return window.origin+"/#/regist?re="+this.address}}),watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.userId&&(this.getDataList(),this.getCountRankingData())}}},components:{},methods:{getActiveTime:function(t){this.activeTime=t,this.iinvitePage=1;var n={limit:this.limit,page:this.iinvitePage,userId:this.userId,times:t};this.getDataList(n)},getCountRankingData:function(){var t=this;i.a.get(this.apiUrl+"/Answer/question/getCountRankingData",{params:{userId:this.userId}}).then(function(n){1e4==n.code&&(t.count_sell_number=n.data.count_sell_number,t.annualized_avg=n.data.annualized_avg,t.answer_count_user=n.data.answer_count_user,t.answer_count=n.data.answer_count,t.answer_correct_count=n.data.answer_correct_count)}).catch(function(n){t.$notify({type:"warning",message:n})})},getDataList:function(t){var n,e=this;return(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.finished=!0,e.finished&&(e.tableData=[],e.finished=!1),(!t||void 0==t||t.length<=0)&&(t={limit:e.limit,page:e.iinvitePage,userId:e.userId,times:e.activeTime}),e.userId&&i.a.get(e.apiUrl+"/Answer/question/getUserTodayLeaderboardList",{params:t}).then(function(n){if(console.log(n),1e4==n.code){if(n.data.lists){var a=n.data&&n.data.lists||[];e.iinvitePage<=1?e.tableData=a:t.page<=n.data.allpage&&e.tableData.push(a),t.page<=n.data.allpage?e.finished=!0:e.finished=!1,e.total=n.data.count,e.iinvitePage+=1}}else e.$notify({type:"warning",message:"加载数据失败"});e.loading=!1}).catch(function(t){e.$notify({type:"warning",message:t})}),e.loading=!1;case 5:case"end":return n.stop()}},n,e)}),function(){var t=n.apply(this,arguments);return new Promise(function(n,e){return function a(i,s){try{var r=t[i](s),o=r.value}catch(t){return void e(t)}if(!r.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});n(o)}("next")})})()},onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var t=this;this.finished=!1,this.iinvitePage=1,this.loading=!0,setTimeout(function(){t.getDataList()},300)},getAddressString:function(t){return t.substring(0,7)+"***"+t.substring(t.length-3)},selectPage:function(t,n){console.log(t,n);var e=[];this.list=[],0==t&&(e={limit:this.limit,page:this.iinvitePage,userId:this.userId,is_reward:1},this.iinviteList.length<=0&&this.getDataList(e))},copySuccess:function(){this.$notify({type:"success",message:"复制成功"})}},mounted:function(){}}},nNsN:function(t,n,e){var a=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"\n.container[data-v-b8fe84e2]{position:fixed;width:100%\n}\n.container[data-v-b8fe84e2] .bg{background-image:url("+a(e("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-b8fe84e2] .van-nav-bar{background-color:transparent\n}\n.container[data-v-b8fe84e2] .van-nav-bar .van-icon{color:#fff\n}\n.container[data-v-b8fe84e2] .van-nav-bar__title{color:#fff\n}\n.container[data-v-b8fe84e2] .van-tabs__wrap{position:fixed;z-index:1;width:100%\n}\n.container[data-v-b8fe84e2] .van-tabs__content{padding-top:50px\n}\n.container[data-v-b8fe84e2] .main{width:100%;height:100vh;margin:0 auto;overflow:auto\n}\n.container[data-v-b8fe84e2] .main .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:40px;border-radius:10px;font-size:14px\n}\n.container[data-v-b8fe84e2] .main .generalStatistics .image{position:relative;width:100%;height:150px\n}\n.container[data-v-b8fe84e2] .main .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%, -50%);color:#fff;font-weight:500\n}\n.container[data-v-b8fe84e2] .main .generalStatistics .box .van-divider{margin:10px 0\n}\n.container[data-v-b8fe84e2] .main .attContainer{width:90%;height:65vh;margin:0 auto;margin-top:10px;border-radius:10px;overflow:auto\n}\n.container[data-v-b8fe84e2] .main .attContainer .refresh .van-pull-refresh__track{width:100%\n}\n.container[data-v-b8fe84e2] .main .attContainer .content{width:100%\n}\n.container[data-v-b8fe84e2] .main .attContainer .content img{width:100%\n}\n.container[data-v-b8fe84e2] .main .attContainer .title{height:30px;line-height:30px;font-size:0.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list ul>li{list-style:none\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;border-radius:15px;flex-direction:row;background:#AE8BF5;color:#fff;border-bottom:0.5px solid #969799\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item .list-item .num-item img{width:60px;height:60px;border-radius:100%\n}\n.container[data-v-b8fe84e2] .main .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0\n}\n.container[data-v-b8fe84e2] .main .attContainer .sort{padding-top:10px;font-size:15px\n}\n.container[data-v-b8fe84e2] .main .attContainer .sort span{padding:10px;color:#A79BA9\n}\n.container[data-v-b8fe84e2] .main .attContainer .sort .active{color:#fff;font-weight:500\n}\n",""])},xGSF:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6gAAAEACAMAAACJT6uwAAAAclBMVEUAAACPN9yTNt6TNt6TNt6TNt6RNt2TNt6TNt6TNt6TNt6TNt6TNt5/OtOAOdSTNt57OtF9OtN+OtOCOdWTNt6DOdaEOdaFOdaTNt6TNt6TNt53O896OtGON9uQN92BOdWFONeSNt6JONl8OtKLN9p/OtOPtIkZAAAAGnRSTlMABvrtsJcT03g3HORY1cCH9+jkkIhiNiXiWgcTQoQAAAT4SURBVHja7NppThtBFIXR154YkhhCBERVTsy4/y0iBBJGuM3Pvohz9vCprp6q3hku1xfnmz65mwbf1mx+tDg+qVFX64BGdQrP/p6d1j7Xv3qIbQPabLmqD/70FDqFF/Of9d4Q85zqFN4sh9qx+t1T6BR2LHZKHXQKoXZKtXsh1tIdCb6A14vSdU+hU/hovsoavtvbBuwfv1c9xKNOYZ/ZaVWtewadwoizqiHkf69OYcyPqsseQacw7iRk+eoUDjiuix7g/n8DRi3qvE9Pp3DQUQXcknQKh82rT06n8InZ9KHqFD41eag6hfxQNzqF+FB1Cvmh6hTyQ938a0B4qDqF/FB1Cvmh6hTyQ9Up5IeqU8gPVaeQH6pOIT9UncIXCFWnkB/qQwPSQ9Up5IeqU8gPVaeQH6pOIT/Uuwakh6pTyA9Vp5Afqk4hP1SdQn6oOoX8UG8akB6qTiE/VJ1Cfqg6hfxQdQr5oeoU8kPVKeSHqlPID3XbgPRQdQr5oeoU8kPVKeSHqlPID1WnkB+qTiE/1O1tA8JDfdQpxIeqU8gPVaeQH+oT+/SWzEwYBmDwXcdX4T+E/W+RQiFkMq7Mc9G9h/YU+lE9hX7Us6eQj3q+X0A8qqfQj+oprHxUT2GtelRP4Vk86slTeNaO6im8SEf1FF6Vo3oKb8JRT3cLeNGN6im8y0b1FD5Uo3oKn0SjegqfNaN6CheSUT2FS8WonsIXxaiewhfBqA8LuNSL6il8k4vqKXxXi+opXBGL6ilc04r6fwFXpKJ6CteVonoKG0JRPYUtnaiewqZMVE9hWyXq3wVsikT1FG5pRPUUbkpE9RRuK0T1FHYEonoKe46P6insOjyqp7Dv6Kh/FvD7xlPoG0+hbzyFvvEU+sZT6BtPoW9++vTfAn7oqKiPnsKBxlPoG0+hbzyFvvEU+vajnj2Fo83u0/sFHGw8hb7xFPrGU+gbT6HvVtSTp9AwnkLfeAp94yn0zdbTuwVUjKfQN54+sU8Hpw0EQBTFpo49hZD+awz4ZOwG/gOpB8G+8xT2naew7zyFfecp7DtPYd9XVE9hz2fUvweYc57CvvMU9p2nsO88hX1vUX8fYNN5CvvOU9h3nsK+8xT2naew7xX15wGWnaew7zyFfecp7DtPYd89wDxRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFQIEBUCRIUAUSFAVAgQFQJEhQBRIUBUCBAVAkSFAFEhQFT+27WblAaCKAqjL/2TdHcCTjKx9r9QE0EkqGPfhXP28FFF1SWAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCGAUCFATQNobqp5AM3NdRlAc5daBtDcUtsAmttqH0Bze9V1AK1dq+ptAK29VdXhJxVam456WAfQ2FpPZ5sHaGw+16fbANp6rweXX2htrS8n8yRoajmVUqG5Z6ffTm6/0NB6qlc3b7/QzHyrH86r5QM0Mq3n+s1xt/uFJq73o/60b8tldrLCP5rmy7Lt9eIDBuYgztFt+BQAAAAASUVORK5CYII="}});