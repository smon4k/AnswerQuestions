webpackJsonp([20],{"0bkq":function(a,t,e){"use strict";var n=e("NYxO"),i=e("+zHA"),r=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a};function o(a){return function(){var t=a.apply(this,arguments);return new Promise(function(a,e){return function n(i,r){try{var o=t[i](r),s=o.value}catch(a){return void e(a)}if(!o.done)return Promise.resolve(s).then(function(a){n("next",a)},function(a){n("throw",a)});a(s)}("next")})}}t.a={name:"home",data:function(){return{languag:this.$i18n.i18next.language,user_id:0,avatar:"",nickname:"",username:"",usdt_balance:0,sct_balance:0,sst_balance:0,loadingShow:!0}},computed:r({},Object(n.c)({address:function(a){return a.base.address},userId:function(a){return a.base.userId},isConnected:function(a){return a.base.isConnected},isMobel:function(a){return a.comps.isMobel},mainTheme:function(a){return a.comps.mainTheme},apiUrl:function(a){return a.base.apiUrl},userInfo:function(a){return a.base.userInfo}}),{changeData:function(){return{address:this.address,userId:this.userId}}}),created:function(){},watch:{changeData:{immediate:!0,handler:function(a){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.userId>0&&t.getUserInfo();case 1:case"end":return e.stop()}},e,t)}))()}}},components:{},methods:{getUserInfo:function(){var a=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(a.apiUrl+"/Api/User/getUserInfo",{params:{userId:a.userId}}).then(function(){var t=o(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e&&1e4==e.code?(console.log(e.data),a.user_id=e.data.id,a.username=e.data.username,a.nickname=e.data.nickname,a.avatar=e.data.avatar,a.usdt_balance=Number(e.data.local_balance)+Number(e.data.wallet_balance),a.sct_balance=Number(e.data.sct_local_balance)+Number(e.data.sct_wallet_balance),a.sst_balance=Number(e.data.sst_local_balance)+Number(e.data.sst_wallet_balance),setTimeout(function(){a.loadingShow=!1},300)):a.$message({type:"warning",message:"Error"}),t.abrupt("return");case 2:case"end":return t.stop()}},t,a)}));return function(a){return t.apply(this,arguments)}}()).catch(function(t){console.log(2222),a.$message({type:"warning",message:t})});case 2:case"end":return t.stop()}},t,a)}))()},startAnswer:function(){var a=this;if(!this.userId)return this.$message.warning("请先登录"),!1;Object(i.b)(this.apiUrl+"/Answer/question/getUserTodayIsAnswer",{userId:this.userId},function(t){if(1e4==t.code)if(t.data){if(1==t.data||2==t.data)a.$router.push("/answer");else if(3==t.data)return a.$message.warning("zh"===a.languag?"门票今日已使用，请更换门票":"The ticket has been used today, please change the ticket"),!1}else a.$message.error("获取数据失败")})},routePushQA:function(){this.$router.push("/answer")},startRanking:function(){this.$router.push("/ranking")},getUserClick:function(){this.$router.push("/user")},routePushBank:function(){this.$router.push("/bank")},routePushTickets:function(){this.$router.push("/ticket/list")},routePushSetUp:function(){this.$router.push("/user")},getUsdtDepositWithdraw:function(){},getSctDepositWithdraw:function(){},getSstDepositWithdraw:function(){}},mounted:function(){}}},"4iGC":function(a,t,e){var n=e("SDAS");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("257e1d88",n,!0,{})},KR8f:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("0bkq"),i=e("XDjB");var r=function(a){e("4iGC")},o=e("VU/8")(n.a,i.a,!1,r,"data-v-6f39faea",null);t.default=o.exports},SDAS:function(a,t,e){var n=e("kxFB");(a.exports=e("FZ+f")(!0)).push([a.i,".container[data-v-6f39faea] .main{background-image:url("+n(e("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden}.container[data-v-6f39faea] .main .title{position:relative;width:90%;top:10px;margin:0 auto}.container[data-v-6f39faea] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center}.container[data-v-6f39faea] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879}.container[data-v-6f39faea] .main .content{padding:20px;text-align:center;margin-top:20px}.container[data-v-6f39faea] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden}.container[data-v-6f39faea] .main .content .apple .left,.container[data-v-6f39faea] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%}.container[data-v-6f39faea] .main .content .apple .left .image,.container[data-v-6f39faea] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden}.container[data-v-6f39faea] .user{position:relative;width:90%;top:20px;margin:0 auto}.container[data-v-6f39faea] .user .image{position:relative;width:100%;height:180px}.container[data-v-6f39faea] .user .avatar{position:absolute;top:50%;left:20%;right:0;height:80px;text-align:center;transform:translate(-50%,-50%)}.container[data-v-6f39faea] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center}.container[data-v-6f39faea] .user .avatar .coins{padding-top:10px}.container[data-v-6f39faea] .user .avatar .coins img{vertical-align:middle;margin-top:-6px}.container[data-v-6f39faea] .user .avatar .coins span{color:#fff;font-size:16px}.container[data-v-6f39faea] .user .avatar .van-image{width:100px;border-radius:50%}.container[data-v-6f39faea] .user .avatar .van-image .van-image__error,.container[data-v-6f39faea] .user .avatar .van-image img{width:100%;border-radius:50%}.container[data-v-6f39faea] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px;line-height:30px}.container[data-v-6f39faea] .user .balance img{margin-top:-5px;vertical-align:middle}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/home/index.vue"],names:[],mappings:"AACA,kCAAkC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,eAAe,iBAAiB,CAChP,AACD,yCAAyC,kBAAkB,UAAU,SAAS,aAAa,CAC1F,AACD,kDAAkD,eAAe,gBAAgB,WAAW,iBAAiB,CAC5G,AACD,kDAAkD,eAAe,gBAAgB,aAAa,CAC7F,AACD,2CAA2C,aAAa,kBAAkB,eAAe,CACxF,AACD,kDAAkD,aAAa,mBAAmB,eAAe,WAAW,eAAe,WAAW,eAAe,CACpJ,AACD,iHAAiH,eAAe,UAAU,YAAY,CACrJ,AACD,+HAA+H,WAAW,mBAAmB,kBAAkB,eAAe,CAC7L,AACD,kCAAkC,kBAAkB,UAAU,SAAS,aAAa,CACnF,AACD,yCAAyC,kBAAkB,WAAW,YAAY,CACjF,AACD,0CAA0C,kBAAkB,QAAQ,SAAS,QAAQ,YAAY,kBAAkB,8BAA+B,CACjJ,AACD,oDAAoD,WAAW,eAAe,gBAAgB,iBAAiB,CAC9G,AACD,iDAAiD,gBAAgB,CAChE,AACD,qDAAqD,sBAAsB,eAAe,CACzF,AACD,sDAAsD,WAAW,cAAc,CAC9E,AACD,qDAAqD,YAAY,iBAAiB,CACjF,AAGD,gIAFuE,WAAW,iBAAiB,CAGlG,AACD,2CAA2C,kBAAkB,QAAQ,SAAS,SAAS,YAAY,aAAa,WAAW,eAAe,gBAAgB,CACzJ,AACD,+CAA+C,gBAAgB,qBAAqB,CACnF",file:"index.vue",sourcesContent:['\n.container[data-v-6f39faea] .main{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden\n}\n.container[data-v-6f39faea] .main .title{position:relative;width:90%;top:10px;margin:0 auto\n}\n.container[data-v-6f39faea] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center\n}\n.container[data-v-6f39faea] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879\n}\n.container[data-v-6f39faea] .main .content{padding:20px;text-align:center;margin-top:20px\n}\n.container[data-v-6f39faea] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden\n}\n.container[data-v-6f39faea] .main .content .apple .left,.container[data-v-6f39faea] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%\n}\n.container[data-v-6f39faea] .main .content .apple .left .image,.container[data-v-6f39faea] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden\n}\n.container[data-v-6f39faea] .user{position:relative;width:90%;top:20px;margin:0 auto\n}\n.container[data-v-6f39faea] .user .image{position:relative;width:100%;height:180px\n}\n.container[data-v-6f39faea] .user .avatar{position:absolute;top:50%;left:20%;right:0;height:80px;text-align:center;transform:translate(-50%, -50%)\n}\n.container[data-v-6f39faea] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center\n}\n.container[data-v-6f39faea] .user .avatar .coins{padding-top:10px\n}\n.container[data-v-6f39faea] .user .avatar .coins img{vertical-align:middle;margin-top:-6px\n}\n.container[data-v-6f39faea] .user .avatar .coins span{color:#fff;font-size:16px\n}\n.container[data-v-6f39faea] .user .avatar .van-image{width:100px;border-radius:50%\n}\n.container[data-v-6f39faea] .user .avatar .van-image .van-image__error{width:100%;border-radius:50%\n}\n.container[data-v-6f39faea] .user .avatar .van-image img{width:100%;border-radius:50%\n}\n.container[data-v-6f39faea] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px;line-height:30px\n}\n.container[data-v-6f39faea] .user .balance img{margin-top:-5px;vertical-align:middle\n}\n'],sourceRoot:""}])},XDjB:function(a,t,e){"use strict";var n={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"main",style:{backgroundSize:a.isMobel?"100% 100%":"",position:a.isMobel?"fixed":"relative"}},[n("div",{staticClass:"title"},[n("div",{staticClass:"title01"},[a._v(a._s(a.$t("question:oneStopName")))])]),a._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"image",attrs:{src:e("oPsL")}}),a._v(" "),n("div",{staticClass:"avatar"},[n("div",{on:{click:function(t){return a.getUserClick()}}},[n("van-image",{staticStyle:{border:"3px solid #fff"},attrs:{width:"70",height:"70",src:a.avatar}})],1),a._v(" "),n("div",{staticClass:"nickname"},[a._v(a._s(a.nickname?a.nickname:"User-"+a.user_id))])]),a._v(" "),n("div",{staticClass:"balance"},[n("div",{on:{click:function(t){return a.getUsdtDepositWithdraw()}}},[n("img",{attrs:{src:e("SPDX"),alt:"",width:"25"}}),a._v(" "),n("span",[a._v(a._s(a.toFixed(a.usdt_balance,4)))])]),a._v(" "),n("div",{on:{click:function(t){return a.getSctDepositWithdraw()}}},[n("img",{attrs:{src:e("e2Tv"),alt:"",width:"25"}}),a._v(" "),n("span",[a._v(a._s(a.toFixed(a.sct_balance,4)))])]),a._v(" "),n("div",{on:{click:function(t){return a.getSstDepositWithdraw()}}},[n("img",{attrs:{src:e("ISmi"),alt:"",width:"25"}}),a._v(" "),n("span",[a._v(a._s(a.toFixed(a.sst_balance,4)))])])])]),a._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"apple"},[n("div",{staticClass:"left"},[n("div",{on:{click:function(t){return a.startAnswer()}}},[n("img",{staticClass:"image",attrs:{src:e("JF4Y")}})]),a._v(" "),n("div",{on:{click:function(t){return a.routePushBank()}}},[n("img",{staticClass:"image",attrs:{src:e("y4gb")}})]),a._v(" "),n("div",{on:{click:function(t){return a.routePushTickets()}}},[n("img",{staticClass:"image",attrs:{src:e("87lX")}})])]),a._v(" "),n("div",{staticClass:"right"},[n("img",{staticClass:"image",staticStyle:{opacity:"0.5"},attrs:{src:e("Oir7")}}),a._v(" "),n("div",{on:{click:function(t){return a.startRanking()}}},[n("img",{staticClass:"image",attrs:{src:e("+oQS")}})]),a._v(" "),n("div",{on:{click:function(t){return a.routePushSetUp()}}},[n("img",{staticClass:"image",attrs:{src:e("Rma+")}})])])])])]),a._v(" "),n("van-overlay",{attrs:{show:a.loadingShow},on:{click:function(t){a.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[a._v(a._s(a.$t("question:DataLoading")))])],1)])],1)},staticRenderFns:[]};t.a=n}});