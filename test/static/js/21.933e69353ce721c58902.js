webpackJsonp([21],{"0bkq":function(t,e,n){"use strict";var a=n("NYxO"),i=n("+zHA"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,r){try{var s=e[i](r),o=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.a={name:"home",data:function(){return{user_id:0,avatar:"",nickname:"",username:"",usdt_balance:0,sct_balance:0,sst_balance:0,loadingShow:!1}},computed:r({},Object(a.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},isMobel:function(t){return t.comps.isMobel},mainTheme:function(t){return t.comps.mainTheme},apiUrl:function(t){return t.base.apiUrl},userInfo:function(t){return t.base.userInfo}}),{changeData:function(){return{address:this.address,userId:this.userId}},languag:function(){return this.$i18n.i18next.language}}),created:function(){},watch:{changeData:{immediate:!0,handler:function(t){var e=this;return s(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.userId>0&&(e.loadingShow=!0,e.getUserInfo());case 1:case"end":return n.stop()}},n,e)}))()}}},components:{},methods:{getUserInfo:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(t.apiUrl+"/Api/User/getUserInfo",{params:{userId:t.userId}}).then(function(){var e=s(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&1e4==n.code?(console.log(n.data),t.user_id=n.data.id,t.username=n.data.username,t.nickname=n.data.nickname,t.avatar=n.data.avatar,t.usdt_balance=Number(n.data.usdt_local_balance)+Number(n.data.usdt_wallet_balance),t.sct_balance=Number(n.data.sct_local_balance)+Number(n.data.sct_wallet_balance),t.sst_balance=Number(n.data.sst_local_balance)+Number(n.data.sst_wallet_balance),setTimeout(function(){t.loadingShow=!1},300)):t.$message({type:"warning",message:"Error"}),e.abrupt("return");case 2:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(2222),t.$message({type:"warning",message:e})});case 2:case"end":return e.stop()}},e,t)}))()},startAnswer:function(){var t=this;if(!this.userId)return this.$message.warning("请先登录"),!1;Object(i.b)(this.apiUrl+"/Api/question/getUserTodayIsAnswer",{userId:this.userId},function(e){if(1e4==e.code)if(e.data){if(1==e.data||2==e.data)t.$router.push("/answer");else if(3==e.data)return t.$message.warning("zh"===t.languag?"门票今日已使用，请更换门票":"The ticket has been used today, please change the ticket"),!1}else t.$message.error("获取数据失败")})},routePushQA:function(){this.$router.push("/answer")},startRanking:function(){this.$router.push("/ranking")},getUserClick:function(){this.$router.push("/user")},routePushBank:function(){this.$router.push("/bank")},routePushTickets:function(){this.$router.push("/ticket/list")},routePushSetUp:function(){this.$router.push("/user")},getUsdtDepositWithdraw:function(){},getSctDepositWithdraw:function(){},getSstDepositWithdraw:function(){}},mounted:function(){}}},KR8f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("0bkq"),i=n("PEHJ"),r=!1;var s=function(t){r||n("NPH1")},o=n("VU/8")(a.a,i.a,!1,s,"data-v-5954443c",null);o.options.__file="src/views/home/index.vue",e.default=o.exports},NPH1:function(t,e,n){var a=n("UCbF");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3d803564",a,!1,{})},PEHJ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main",style:{backgroundSize:t.isMobel?"100% 100%":"",position:t.isMobel?"fixed":"relative"}},[t._m(0),t._v(" "),a("div",{staticClass:"user"},[a("div",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"avatar"},[a("div",{on:{click:function(e){return t.getUserClick()}}},[a("van-image",{staticStyle:{border:"3px solid #fff"},attrs:{width:"70",height:"70",src:t.avatar}})],1),t._v(" "),a("div",{staticClass:"nickname"},[t._v(t._s(t.nickname?t.nickname:"User-"+t.user_id))])]),t._v(" "),a("div",{staticClass:"balance"},[a("div",{on:{click:function(e){return t.getUsdtDepositWithdraw()}}},[a("img",{attrs:{src:n("SPDX"),alt:"",width:"25"}}),t._v(" "),a("span",[t._v(t._s(t.toFixed(t.usdt_balance,4)))])]),t._v(" "),a("div",{on:{click:function(e){return t.getSctDepositWithdraw()}}},[a("img",{attrs:{src:n("e2Tv"),alt:"",width:"25"}}),t._v(" "),a("span",[t._v(t._s(t.toFixed(t.sct_balance,4)))])]),t._v(" "),a("div",{on:{click:function(e){return t.getSstDepositWithdraw()}}},[a("img",{attrs:{src:n("ISmi"),alt:"",width:"25"}}),t._v(" "),a("span",[t._v(t._s(t.toFixed(t.sst_balance,4)))])])])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"apple"},[a("div",{staticClass:"left"},[a("div",{on:{click:function(e){return t.startAnswer()}}},[a("img",{staticClass:"image",attrs:{src:"zh"===t.$t("question:languag")?n("KqnF"):n("3v9k")}})]),t._v(" "),a("div",{on:{click:function(e){return t.routePushBank()}}},[a("img",{staticClass:"image",attrs:{src:"zh"===t.$t("question:languag")?n("wBbm"):n("oJuy")}})]),t._v(" "),a("div",{on:{click:function(e){return t.routePushTickets()}}},[a("img",{staticClass:"image",attrs:{src:"zh"===t.$t("question:languag")?n("aNoe"):n("eTaC")}})])]),t._v(" "),a("div",{staticClass:"right"},[a("img",{staticClass:"image",staticStyle:{opacity:"0.5"},attrs:{src:"zh"===t.$t("question:languag")?n("3Fbc"):n("IJev")}}),t._v(" "),a("div",{on:{click:function(e){return t.startRanking()}}},[a("img",{staticClass:"image",attrs:{src:"zh"===t.$t("question:languag")?n("mMep"):n("QFFa")}})]),t._v(" "),a("div",{on:{click:function(e){return t.routePushSetUp()}}},[a("img",{staticClass:"image",attrs:{src:"zh"===t.$t("question:languag")?n("Nx/Z"):n("qAot")}})])])])])]),t._v(" "),a("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(e){t.loadingShow=!1}}},[a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[a("van-loading",{attrs:{size:"24px",vertical:"",color:"#fff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title01"},[e("img",{attrs:{src:n("W3O3"),width:"130"}})])])}];a._withStripped=!0;var r={render:a,staticRenderFns:i};e.a=r},UCbF:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-5954443c] .main{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden\n}\n.container[data-v-5954443c] .main .title{position:relative;width:90%;top:10px;margin:0 auto\n}\n.container[data-v-5954443c] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center\n}\n.container[data-v-5954443c] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879\n}\n.container[data-v-5954443c] .main .content{padding:20px;text-align:center;margin-top:20px\n}\n.container[data-v-5954443c] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden\n}\n.container[data-v-5954443c] .main .content .apple .left,.container[data-v-5954443c] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%\n}\n.container[data-v-5954443c] .main .content .apple .left .image,.container[data-v-5954443c] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden\n}\n.container[data-v-5954443c] .user{position:relative;width:90%;top:20px;margin:0 auto;border:2px solid #fff;border-radius:20px\n}\n.container[data-v-5954443c] .user .image{border-radius:20px;background:linear-gradient(#00C3E9, #2D50D2);position:relative;width:100%;height:180px\n}\n.container[data-v-5954443c] .user .avatar{position:absolute;top:46%;left:20%;right:0;height:80px;text-align:center;transform:translate(-50%, -50%)\n}\n.container[data-v-5954443c] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center\n}\n.container[data-v-5954443c] .user .avatar .coins{padding-top:10px\n}\n.container[data-v-5954443c] .user .avatar .coins img{vertical-align:middle;margin-top:-6px\n}\n.container[data-v-5954443c] .user .avatar .coins span{color:#fff;font-size:16px\n}\n.container[data-v-5954443c] .user .avatar .van-image{width:100px;border-radius:50%\n}\n.container[data-v-5954443c] .user .avatar .van-image .van-image__error{width:100%;border-radius:50%\n}\n.container[data-v-5954443c] .user .avatar .van-image img{width:100%;border-radius:50%\n}\n.container[data-v-5954443c] .user .balance{position:absolute;top:10%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px;line-height:30px\n}\n.container[data-v-5954443c] .user .balance img{margin-top:-5px;vertical-align:middle\n}\n",""])}});