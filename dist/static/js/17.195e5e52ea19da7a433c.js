webpackJsonp([17],{"0bkq":function(t,a,e){"use strict";var n=e("NYxO"),i=e("+zHA"),r=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};function c(t){return function(){var a=t.apply(this,arguments);return new Promise(function(t,e){return function n(i,r){try{var c=a[i](r),o=c.value}catch(t){return void e(t)}if(!c.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}("next")})}}a.a={name:"home",data:function(){return{languag:this.$i18n.i18next.language,user_id:0,avatar:"",nickname:"",username:"",usdt_balance:0,sct_balance:0,sst_balance:0,loadingShow:!0}},computed:r({},Object(n.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},isMobel:function(t){return t.comps.isMobel},mainTheme:function(t){return t.comps.mainTheme},apiUrl:function(t){return t.base.apiUrl},userInfo:function(t){return t.base.userInfo}}),{changeData:function(){return{address:this.address,userId:this.userId}}}),created:function(){},watch:{changeData:{immediate:!0,handler:function(t){var a=this;return c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.userId>0&&a.getUserInfo();case 1:case"end":return e.stop()}},e,a)}))()}}},components:{},methods:{getUserInfo:function(){var t=this;return c(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,axios.get(t.apiUrl+"/Api/User/getUserInfo",{params:{userId:t.userId}}).then(function(){var a=c(regeneratorRuntime.mark(function a(e){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e&&1e4==e.code?(console.log(e.data),t.user_id=e.data.id,t.username=e.data.username,t.nickname=e.data.nickname,t.avatar=e.data.avatar,t.usdt_balance=Number(e.data.local_balance)+Number(e.data.wallet_balance),t.sct_balance=Number(e.data.sct_local_balance)+Number(e.data.sct_wallet_balance),t.sst_balance=Number(e.data.sst_local_balance)+Number(e.data.sst_wallet_balance),setTimeout(function(){t.loadingShow=!1},300)):t.$message({type:"warning",message:"Error"}),a.abrupt("return");case 2:case"end":return a.stop()}},a,t)}));return function(t){return a.apply(this,arguments)}}()).catch(function(a){t.$message({type:"warning",message:a})});case 2:case"end":return a.stop()}},a,t)}))()},startAnswer:function(){var t=this;if(!this.userId)return this.$message.warning("请先登录"),!1;Object(i.b)(this.apiUrl+"/Answer/question/getUserTodayIsAnswer",{userId:this.userId},function(a){if(1e4==a.code)if(a.data){if(1==a.data||2==a.data)t.$router.push("/answer");else if(3==a.data)return t.$message.warning("zh"===t.languag?"门票今日已使用，请更换门票":"The ticket has been used today, please change the ticket"),!1}else t.$message.error("获取数据失败")})},routePushQA:function(){this.$router.push("/answer")},startRanking:function(){this.$router.push("/ranking")},getUserClick:function(){this.$router.push("/user")},routePushBank:function(){this.$router.push("/bank")},routePushTickets:function(){this.$router.push("/ticket/list")},routePushSetUp:function(){this.$router.push("/user")},getUsdtDepositWithdraw:function(){},getSctDepositWithdraw:function(){},getSstDepositWithdraw:function(){}},mounted:function(){}}},KR8f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("0bkq"),i=e("gqm7");var r=function(t){e("sN3u")},c=e("VU/8")(n.a,i.a,!1,r,"data-v-06e4c1ac",null);a.default=c.exports},"MTw/":function(t,a,e){var n=e("kxFB");(t.exports=e("FZ+f")(!0)).push([t.i,".container[data-v-06e4c1ac] .main{background-image:url("+n(e("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden}.container[data-v-06e4c1ac] .main .title{position:relative;width:90%;top:10px;margin:0 auto}.container[data-v-06e4c1ac] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center}.container[data-v-06e4c1ac] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879}.container[data-v-06e4c1ac] .main .content{padding:20px;text-align:center;margin-top:20px}.container[data-v-06e4c1ac] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden}.container[data-v-06e4c1ac] .main .content .apple .left,.container[data-v-06e4c1ac] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%}.container[data-v-06e4c1ac] .main .content .apple .left .image,.container[data-v-06e4c1ac] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden}.container[data-v-06e4c1ac] .user{position:relative;width:90%;top:20px;margin:0 auto}.container[data-v-06e4c1ac] .user .image{position:relative;width:100%;height:180px}.container[data-v-06e4c1ac] .user .avatar{position:absolute;top:50%;left:20%;right:0;height:80px;text-align:center;transform:translate(-50%,-50%)}.container[data-v-06e4c1ac] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center}.container[data-v-06e4c1ac] .user .avatar .coins{padding-top:10px}.container[data-v-06e4c1ac] .user .avatar .coins img{vertical-align:middle;margin-top:-6px}.container[data-v-06e4c1ac] .user .avatar .coins span{color:#fff;font-size:16px}.container[data-v-06e4c1ac] .user .avatar .van-image{width:100px;border-radius:50%}.container[data-v-06e4c1ac] .user .avatar .van-image .van-image__error,.container[data-v-06e4c1ac] .user .avatar .van-image img{width:100%;border-radius:50%}.container[data-v-06e4c1ac] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px;line-height:30px}.container[data-v-06e4c1ac] .user .balance img{margin-top:-5px;vertical-align:middle}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/home/index.vue"],names:[],mappings:"AACA,kCAAkC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,eAAe,iBAAiB,CAChP,AACD,yCAAyC,kBAAkB,UAAU,SAAS,aAAa,CAC1F,AACD,kDAAkD,eAAe,gBAAgB,WAAW,iBAAiB,CAC5G,AACD,kDAAkD,eAAe,gBAAgB,aAAa,CAC7F,AACD,2CAA2C,aAAa,kBAAkB,eAAe,CACxF,AACD,kDAAkD,aAAa,mBAAmB,eAAe,WAAW,eAAe,WAAW,eAAe,CACpJ,AACD,iHAAiH,eAAe,UAAU,YAAY,CACrJ,AACD,+HAA+H,WAAW,mBAAmB,kBAAkB,eAAe,CAC7L,AACD,kCAAkC,kBAAkB,UAAU,SAAS,aAAa,CACnF,AACD,yCAAyC,kBAAkB,WAAW,YAAY,CACjF,AACD,0CAA0C,kBAAkB,QAAQ,SAAS,QAAQ,YAAY,kBAAkB,8BAA+B,CACjJ,AACD,oDAAoD,WAAW,eAAe,gBAAgB,iBAAiB,CAC9G,AACD,iDAAiD,gBAAgB,CAChE,AACD,qDAAqD,sBAAsB,eAAe,CACzF,AACD,sDAAsD,WAAW,cAAc,CAC9E,AACD,qDAAqD,YAAY,iBAAiB,CACjF,AAGD,gIAFuE,WAAW,iBAAiB,CAGlG,AACD,2CAA2C,kBAAkB,QAAQ,SAAS,SAAS,YAAY,aAAa,WAAW,eAAe,gBAAgB,CACzJ,AACD,+CAA+C,gBAAgB,qBAAqB,CACnF",file:"index.vue",sourcesContent:['\n.container[data-v-06e4c1ac] .main{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden\n}\n.container[data-v-06e4c1ac] .main .title{position:relative;width:90%;top:10px;margin:0 auto\n}\n.container[data-v-06e4c1ac] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center\n}\n.container[data-v-06e4c1ac] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879\n}\n.container[data-v-06e4c1ac] .main .content{padding:20px;text-align:center;margin-top:20px\n}\n.container[data-v-06e4c1ac] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden\n}\n.container[data-v-06e4c1ac] .main .content .apple .left,.container[data-v-06e4c1ac] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%\n}\n.container[data-v-06e4c1ac] .main .content .apple .left .image,.container[data-v-06e4c1ac] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden\n}\n.container[data-v-06e4c1ac] .user{position:relative;width:90%;top:20px;margin:0 auto\n}\n.container[data-v-06e4c1ac] .user .image{position:relative;width:100%;height:180px\n}\n.container[data-v-06e4c1ac] .user .avatar{position:absolute;top:50%;left:20%;right:0;height:80px;text-align:center;transform:translate(-50%, -50%)\n}\n.container[data-v-06e4c1ac] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center\n}\n.container[data-v-06e4c1ac] .user .avatar .coins{padding-top:10px\n}\n.container[data-v-06e4c1ac] .user .avatar .coins img{vertical-align:middle;margin-top:-6px\n}\n.container[data-v-06e4c1ac] .user .avatar .coins span{color:#fff;font-size:16px\n}\n.container[data-v-06e4c1ac] .user .avatar .van-image{width:100px;border-radius:50%\n}\n.container[data-v-06e4c1ac] .user .avatar .van-image .van-image__error{width:100%;border-radius:50%\n}\n.container[data-v-06e4c1ac] .user .avatar .van-image img{width:100%;border-radius:50%\n}\n.container[data-v-06e4c1ac] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px;line-height:30px\n}\n.container[data-v-06e4c1ac] .user .balance img{margin-top:-5px;vertical-align:middle\n}\n'],sourceRoot:""}])},gqm7:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"main",style:{backgroundSize:t.isMobel?"100% 100%":"",position:t.isMobel?"fixed":"relative"}},[n("div",{staticClass:"title"},[n("div",{staticClass:"title01"},[t._v(t._s(t.$t("question:oneStopName")))])]),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"image",attrs:{src:e("oPsL")}}),t._v(" "),n("div",{staticClass:"avatar"},[n("div",{on:{click:function(a){return t.getUserClick()}}},[n("van-image",{staticStyle:{border:"3px solid #fff"},attrs:{width:"70",height:"70",src:t.avatar}})],1),t._v(" "),n("div",{staticClass:"nickname"},[t._v(t._s(t.nickname?t.nickname:"User-"+t.user_id))])]),t._v(" "),n("div",{staticClass:"balance"},[n("div",{on:{click:function(a){return t.getUsdtDepositWithdraw()}}},[n("img",{attrs:{src:e("SPDX"),alt:"",width:"25"}}),t._v(" "),n("span",[t._v(t._s(t.toFixed(t.usdt_balance,4)))])]),t._v(" "),n("div",{on:{click:function(a){return t.getSctDepositWithdraw()}}},[n("img",{attrs:{src:e("e2Tv"),alt:"",width:"25"}}),t._v(" "),n("span",[t._v(t._s(t.toFixed(t.sct_balance,4)))])]),t._v(" "),n("div",{on:{click:function(a){return t.getSstDepositWithdraw()}}},[n("img",{attrs:{src:e("ISmi"),alt:"",width:"25"}}),t._v(" "),n("span",[t._v(t._s(t.toFixed(t.sst_balance,4)))])])])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"apple"},[n("div",{staticClass:"left"},[n("div",{on:{click:function(a){return t.startAnswer()}}},[n("img",{staticClass:"image",attrs:{src:e("JF4Y")}})]),t._v(" "),n("div",{on:{click:function(a){return t.routePushBank()}}},[n("img",{staticClass:"image",attrs:{src:e("y4gb")}})]),t._v(" "),n("div",{on:{click:function(a){return t.routePushTickets()}}},[n("img",{staticClass:"image",attrs:{src:e("87lX")}})])]),t._v(" "),n("div",{staticClass:"right"},[n("img",{staticClass:"image",staticStyle:{opacity:"0.5"},attrs:{src:e("Oir7")}}),t._v(" "),n("div",{on:{click:function(a){return t.startRanking()}}},[n("img",{staticClass:"image",attrs:{src:e("+oQS")}})]),t._v(" "),n("div",{on:{click:function(a){return t.routePushSetUp()}}},[n("img",{staticClass:"image",attrs:{src:e("Rma+")}})])])])])]),t._v(" "),n("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(a){t.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)},staticRenderFns:[]};a.a=n},sN3u:function(t,a,e){var n=e("MTw/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("cc2fb7a0",n,!0,{})}});