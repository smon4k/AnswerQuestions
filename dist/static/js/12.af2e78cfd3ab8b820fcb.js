webpackJsonp([12],{"+haf":function(e,t,n){"use strict";n("XmAh");var a=n("il3B"),r=n("mtWM"),i=n.n(r),o=(n("GKmE"),n("NYxO")),s=n("WTx0"),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,i){try{var o=t[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a={name:"userSetup",data:function(){return{active:2,avatarFileObj:"",isNameShow:!1,isPasswordShow:!1,username:"",isUsername:!1,password:"",qr_password:"",m_password:"",showBirthdayPicker:!1,showAreaPicker:!1,isconfirm:!0,pattern:/\d{6}/,usernameShow:!1,loadingShow:!1}},created:function(){},computed:c({},Object(o.c)({address:function(e){return e.base.address},userId:function(e){return e.base.userId},isConnected:function(e){return e.base.isConnected},apiUrl:function(e){return e.base.apiUrl},isMobel:function(e){return e.comps.isMobel}}),{changeData:function(){return{userId:this.userId,apiUrl:this.apiUrl,address:this.address}}}),watch:{changeData:{immediate:!0,handler:function(e){console.log(e),e.userId>0&&this.getUserInfo()}}},components:u({},a.a.Component.name,a.a.Component),mounted:function(){},methods:{usernameValidator:function(e){return!!/^[a-zA-Z]([-_a-zA-Z0-9_]{5,14})$/.test(e)},passwordValidator:function(e){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(e)},qrPasswordValidator:function(e){return e===this.password},getUserInfo:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get(e.apiUrl+"/Api/User/getUserInfo",{params:{userId:e.userId}}).then(function(){var t=d(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&1e4==n.code?(console.log(n.data),n.data.username&&""!==n.data.username&&(e.isUsername=!0),e.username=n.data.username):e.$notify({type:"danger",message:"Error"}),t.abrupt("return");case 2:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){e.$notify({type:"danger",message:t})});case 2:case"end":return t.stop()}},t,e)}))()},onClickSure:function(){this.isNameShow=!1},onClickSave:function(){this.$router.go(-1)},onClickSaveUserInfo:function(e,t){var n=this;return d(regeneratorRuntime.mark(function a(){var r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("username"!==e){a.next=3;break}if(n.usernameValidator(n.username)){a.next=3;break}return a.abrupt("return",!1);case 3:if("password"!==e){a.next=6;break}if(n.passwordValidator(n.password)&&n.passwordValidator(n.qr_password)){a.next=6;break}return a.abrupt("return",!1);case 6:return r=u({userId:n.userId},e,t),a.next=9,i.a.post(n.apiUrl+"/Api/User/saveUserInfo",r).then(function(){var e=d(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&1e4==t.code?(n.isNameShow=!1,n.isPasswordShow=!1,n.getUserInfo(),n.$notify({type:"success",message:"Success"})):t&&10001==t.code?(n.usernameShow=!0,n.$notify({type:"warning",message:t.msg})):n.$notify({type:"warning",message:t.msg}),e.abrupt("return");case 2:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){n.$notify({type:"danger",message:e})});case 9:case"end":return a.stop()}},a,n)}))()},onBeforeClose:function(e,t){return"confirm"===e?t(!1):t()},margintSubmit:function(){var e=this;return d(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.m_password||""===e.m_password){t.next=7;break}return n={userId:e.userId,username:e.username,password:e.m_password},e.loadingShow=!0,t.next=5,i.a.post(e.apiUrl+"/Api/User/marginUsername",n).then(function(){var t=d(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loadingShow=!1,!n||1e4!=n.code){t.next=8;break}e.getUserInfo(),e.usernameShow=!1,e.isNameShow=!1,e.$notify({type:"success",message:"Success"}),t.next=10;break;case 8:return e.$notify({type:"warning",message:n.msg}),t.abrupt("return",!1);case 10:return t.abrupt("return");case 11:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){e.$notify({type:"danger",message:t})});case 5:t.next=8;break;case 7:e.$notify({type:"danger",message:"请输入密码"});case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,e)}))()},onConfirm:function(e){this.birthday=this.timeFormat(e),this.showBirthdayPicker=!1},addressStr:function(){return this.address&&void 0!=this.address&&""!=this.address?this.address.substring(0,4)+"***"+this.address.substring(this.address.length-3):"Connect Wallet"},connectWalletClick:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!=window.ethereum){t.next=3;break}return e.$notify({type:"warning",message:"You do not have metamask installed"}),t.abrupt("return",!1);case 3:if(e.address&&void 0!=e.address&&""!=e.address){t.next=8;break}return t.next=6,Object(s.c)();case 6:t.next=10;break;case 8:return t.next=10,Object(s.b)();case 10:case"end":return t.stop()}},t,e)}))()},LoginOut:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.b)();case 2:e.$notify({type:"success",message:"退出成功"}),setTimeout(function(){e.$router.push("/login")},1e3);case 4:case"end":return t.stop()}},t,e)}))()}}}},pVz8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("+haf"),r=n("rH/L");var i=function(e){n("yDIf")},o=n("VU/8")(a.a,r.a,!1,i,"data-v-ce326d4c",null);t.default=o.exports},"rH/L":function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:e.isMobel?"100% 100%":""}}),e._v(" "),n("van-nav-bar",{attrs:{title:e.$t("question:SetUp"),"left-text":"","right-text":"","left-arrow":""},on:{"click-left":e.onClickSave}}),e._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:LoginUsername")},on:{click:function(t){e.isNameShow=!0}}},[n("div",[e._v(e._s(e.username?e.username:e.$t("question:pleaseEnterUsername")))])]),e._v(" "),n("van-action-sheet",{staticClass:"van-sheet",attrs:{title:"","close-on-click-action":""},model:{value:e.isNameShow,callback:function(t){e.isNameShow=t},expression:"isNameShow"}},[n("van-nav-bar",{attrs:{title:e.$t("question:setUsername"),"left-text":e.$t("question:Cancel"),"right-text":e.isUsername?"":e.$t("question:Save")},on:{"click-left":function(t){e.isNameShow=!1},"click-right":function(t){return e.onClickSaveUserInfo("username",e.username)}}}),e._v(" "),e.isUsername&&""!=e.isUsername?n("span",{staticClass:"hint"},[e._v(e._s(e.$t("question:ModificationLimitReached")))]):n("span",{staticClass:"hint"},[e._v(e._s(e.$t("question:AccountSetOnce")))]),e._v(" "),n("van-cell-group",[n("van-form",[n("van-field",{attrs:{label:"",placeholder:e.$t("question:pleaseEnterUsername"),disabled:!(!e.isUsername||""===e.isUsername),rules:[{validator:e.usernameValidator,message:e.$t("question:UsernameRegistration-01")}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),e._v(" "),n("span",{staticClass:"hint"},[e._v(e._s(e.$t("question:UsernameRegistration-02")))])],1)],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:LoginPassword")},on:{click:function(t){e.isPasswordShow=!0}}}),e._v(" "),n("van-action-sheet",{staticClass:"van-sheet",attrs:{title:"","close-on-click-action":""},model:{value:e.isPasswordShow,callback:function(t){e.isPasswordShow=t},expression:"isPasswordShow"}},[n("van-nav-bar",{attrs:{title:e.$t("question:setPassword"),"left-text":e.$t("question:Cancel"),"right-text":"$t('question:Save')"},on:{"click-left":function(t){e.isPasswordShow=!1},"click-right":function(t){return e.onClickSaveUserInfo("password",e.password)}}}),e._v(" "),n("van-cell-group",[n("van-form",[n("van-field",{attrs:{type:"password",label:"",placeholder:e.$t("question:EnterNewPassword"),rules:[{validator:e.passwordValidator,message:e.$t("question:PleaseEnterCorrectPassword")}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("van-field",{attrs:{type:"password",label:"",placeholder:e.$t("question:EnterNewPasswordAgain"),rules:[{validator:e.qrPasswordValidator,message:e.$t("question:TheTwoEnteredPasswordsDoNotMatch")}]},model:{value:e.qr_password,callback:function(t){e.qr_password=t},expression:"qr_password"}})],1)],1),e._v(" "),n("span",{staticClass:"hint"},[e._v(e._s(e.$t("question:PasswordRegistration-01")))])],1)],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:walletAddress"),click:"connectWalletClick()"}},[n("div",[e._v(e._s(e.addressStr()))])])],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:signOut")},on:{click:e.LoginOut}})],1)])]),e._v(" "),n("van-dialog",{attrs:{title:e.$t("question:UsernameMerge"),"show-cancel-button":"","before-close":e.onBeforeClose},on:{confirm:e.margintSubmit},model:{value:e.usernameShow,callback:function(t){e.usernameShow=t},expression:"usernameShow"}},[n("div",{staticClass:"merge-box"},[n("van-field",{attrs:{name:e.$t("question:username"),label:e.$t("question:username"),placeholder:e.$t("question:username"),readonly:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("van-field",{attrs:{type:"password",name:e.$t("question:password"),label:e.$t("question:password"),placeholder:e.$t("question:password")},model:{value:e.m_password,callback:function(t){e.m_password=t},expression:"m_password"}})],1)]),e._v(" "),n("van-overlay",{attrs:{show:e.loadingShow},on:{click:function(t){e.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[e._v(e._s(e.$t("question:TheAnswerIsBeingCalculated"))+"...")])],1)])],1)},staticRenderFns:[]};t.a=a},uDdK:function(e,t,n){var a=n("kxFB");(e.exports=n("FZ+f")(!0)).push([e.i,".container[data-v-ce326d4c] .bg{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-ce326d4c] .van-nav-bar{background-color:transparent}.container[data-v-ce326d4c] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-ce326d4c] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-ce326d4c] .box{width:90%;height:80vh;margin:0 auto;background-color:#05d2fa;margin-top:30px;border-radius:20px}.container[data-v-ce326d4c] .box .content{padding:16px 16px 160px}.container[data-v-ce326d4c] .box .van-popup--bottom.van-popup--round{height:100vh;border-radius:0}.container[data-v-ce326d4c] .box .van-action-sheet{max-height:100%}.container[data-v-ce326d4c] .box .item .item-index .van-cell{border-radius:20px}.container[data-v-ce326d4c] .box .item .item-index .van-cell .van-cell__value{color:#fff}.container[data-v-ce326d4c] .box .item .item-index .van-cell--clickable{height:50px;line-height:30px;vertical-align:middle;background-color:#05d2fa;color:#fff}.container[data-v-ce326d4c] .box .item .item-index .van-popup{background-color:#05d2fa}.container[data-v-ce326d4c] .box .item .item-index .van-popup .van-nav-bar__text{color:#fff}.container[data-v-ce326d4c] .box .item .item-index .hint{color:#fff;padding-left:15px;font-size:15px}.container[data-v-ce326d4c] .box .item .item-index .van-cell__left-icon,.container[data-v-ce326d4c] .box .item .item-index .van-cell__right-icon{line-height:30px;color:#fff}.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell,.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-picker{width:95%;border-radius:15px;margin:0 auto}.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell-group{margin:10px;border-radius:15px}.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell-group .van-cell{border-radius:15px}.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-hairline--top-bottom:after{border-width:inherit!important}.container[data-v-ce326d4c] .box .item .item-index .merge-box{padding:20px}.container[data-v-ce326d4c] .box .item .item-index .merge-box .van-field__label{width:50px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/user/setup.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACzP,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,iCAAiC,UAAU,YAAY,cAAc,yBAAyB,gBAAgB,kBAAkB,CAC/H,AACD,0CAA0C,uBAAuB,CAChE,AACD,qEAAqE,aAAa,eAAe,CAChG,AACD,mDAAmD,eAAe,CACjE,AACD,6DAA6D,kBAAkB,CAC9E,AACD,8EAA8E,UAAU,CACvF,AACD,wEAAwE,YAAY,iBAAiB,sBAAsB,yBAAyB,UAAU,CAC7J,AACD,8DAA8D,wBAAwB,CACrF,AACD,iFAAiF,UAAU,CAC1F,AACD,yDAAyD,WAAW,kBAAkB,cAAc,CACnG,AACD,iJAAiJ,iBAAiB,UAAU,CAC3K,AACD,kJAAkJ,UAAU,mBAAmB,aAAa,CAC3L,AACD,8EAA8E,YAAY,kBAAkB,CAC3G,AACD,wFAAwF,kBAAkB,CACzG,AACD,8FAA+F,8BAA+B,CAC7H,AACD,8DAA8D,YAAY,CACzE,AACD,gFAAgF,UAAU,CACzF",file:"setup.vue",sourcesContent:['\n.container[data-v-ce326d4c] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-ce326d4c] .van-nav-bar{background-color:transparent\n}\n.container[data-v-ce326d4c] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-ce326d4c] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-ce326d4c] .box{width:90%;height:80vh;margin:0 auto;background-color:#05D2FA;margin-top:30px;border-radius:20px\n}\n.container[data-v-ce326d4c] .box .content{padding:16px 16px 160px\n}\n.container[data-v-ce326d4c] .box .van-popup--bottom.van-popup--round{height:100vh;border-radius:0\n}\n.container[data-v-ce326d4c] .box .van-action-sheet{max-height:100%\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-cell{border-radius:20px\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-cell .van-cell__value{color:#fff\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-cell--clickable{height:50px;line-height:30px;vertical-align:middle;background-color:#05D2FA;color:#fff\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-popup{background-color:#05D2FA\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-popup .van-nav-bar__text{color:#fff\n}\n.container[data-v-ce326d4c] .box .item .item-index .hint{color:#fff;padding-left:15px;font-size:15px\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-cell__left-icon,.container[data-v-ce326d4c] .box .item .item-index .van-cell__right-icon{line-height:30px;color:#fff\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell,.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-picker{width:95%;border-radius:15px;margin:0 auto\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell-group{margin:10px;border-radius:15px\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-cell-group .van-cell{border-radius:15px\n}\n.container[data-v-ce326d4c] .box .item .item-index .van-sheet .van-hairline--top-bottom::after{border-width:inherit !important\n}\n.container[data-v-ce326d4c] .box .item .item-index .merge-box{padding:20px\n}\n.container[data-v-ce326d4c] .box .item .item-index .merge-box .van-field__label{width:50px\n}\n'],sourceRoot:""}])},yDIf:function(e,t,n){var a=n("uDdK");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("04062d03",a,!0,{})}});