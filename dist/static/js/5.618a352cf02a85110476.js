webpackJsonp([5],{"+haf":function(e,n,t){"use strict";var a=t("mtWM"),r=t.n(a),i=(t("GKmE"),t("NYxO")),o=t("Fd2+"),s=t("WTx0"),c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};function d(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(r,i){try{var o=n[r](i),s=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.a={name:"userSetup",data:function(){return{active:2,avatarFileObj:"",isNameShow:!1,isPasswordShow:!1,username:"",isUsername:!1,password:"",qr_password:"",m_password:"",showBirthdayPicker:!1,showAreaPicker:!1,isconfirm:!0,pattern:/\d{6}/,usernameShow:!1,loadingShow:!1}},created:function(){},computed:c({},Object(i.c)({address:function(e){return e.base.address},userId:function(e){return e.base.userId},isConnected:function(e){return e.base.isConnected},apiUrl:function(e){return e.base.apiUrl},isMobel:function(e){return e.comps.isMobel}}),{changeData:function(){return{userId:this.userId,apiUrl:this.apiUrl,address:this.address}}}),watch:{changeData:{immediate:!0,handler:function(e){console.log(e),e.userId>0&&this.getUserInfo()}}},components:u({},o.a.Component.name,o.a.Component),mounted:function(){},methods:{usernameValidator:function(e){return!!/^[a-zA-Z]([-_a-zA-Z0-9_]{5,14})$/.test(e)},passwordValidator:function(e){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(e)},qrPasswordValidator:function(e){return e===this.password},getUserInfo:function(){var e=this;return d(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.get(e.apiUrl+"/Api/User/getUserInfo",{params:{userId:e.userId}}).then(function(){var n=d(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t&&1e4==t.code?(console.log(t.data),t.data.username&&""!==t.data.username&&(e.isUsername=!0),e.username=t.data.username):e.$notify({type:"danger",message:"Error"}),n.abrupt("return");case 2:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}()).catch(function(n){e.$notify({type:"danger",message:n})});case 2:case"end":return n.stop()}},n,e)}))()},onClickSure:function(){this.isNameShow=!1},onClickSave:function(){this.$router.go(-1)},onClickSaveUserInfo:function(e,n){var t=this;return d(regeneratorRuntime.mark(function a(){var i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("username"!==e){a.next=3;break}if(t.usernameValidator(t.username)){a.next=3;break}return a.abrupt("return",!1);case 3:if("password"!==e){a.next=6;break}if(t.passwordValidator(t.password)&&t.passwordValidator(t.qr_password)){a.next=6;break}return a.abrupt("return",!1);case 6:return i=u({userId:t.userId},e,n),a.next=9,r.a.post(t.apiUrl+"/Api/User/saveUserInfo",i).then(function(){var e=d(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&1e4==n.code?(t.isNameShow=!1,t.isPasswordShow=!1,t.getUserInfo(),t.$notify({type:"success",message:"Success"})):n&&10001==n.code?(t.usernameShow=!0,t.$notify({type:"warning",message:n.msg})):t.$notify({type:"warning",message:n.msg}),e.abrupt("return");case 2:case"end":return e.stop()}},e,t)}));return function(n){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 9:case"end":return a.stop()}},a,t)}))()},onBeforeClose:function(e,n){return"confirm"===e?n(!1):n()},margintSubmit:function(){var e=this;return d(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.m_password||""===e.m_password){n.next=7;break}return t={userId:e.userId,username:e.username,password:e.m_password},e.loadingShow=!0,n.next=5,r.a.post(e.apiUrl+"/Api/User/marginUsername",t).then(function(){var n=d(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.loadingShow=!1,!t||1e4!=t.code){n.next=8;break}e.getUserInfo(),e.usernameShow=!1,e.isNameShow=!1,e.$notify({type:"success",message:"Success"}),n.next=10;break;case 8:return e.$notify({type:"warning",message:t.msg}),n.abrupt("return",!1);case 10:return n.abrupt("return");case 11:case"end":return n.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}()).catch(function(n){e.$notify({type:"danger",message:n})});case 5:n.next=8;break;case 7:e.$notify({type:"danger",message:"请输入密码"});case 8:return n.abrupt("return",!1);case 9:case"end":return n.stop()}},n,e)}))()},onConfirm:function(e){this.birthday=this.timeFormat(e),this.showBirthdayPicker=!1},addressStr:function(){return this.address&&void 0!=this.address&&""!=this.address?this.address.substring(0,4)+"***"+this.address.substring(this.address.length-3):"Connect Wallet"},connectWalletClick:function(){var e=this;return d(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!=window.ethereum){n.next=3;break}return e.$notify({type:"warning",message:"You do not have metamask installed"}),n.abrupt("return",!1);case 3:if(e.address&&void 0!=e.address&&""!=e.address){n.next=8;break}return n.next=6,Object(s.c)();case 6:n.next=10;break;case 8:return n.next=10,Object(s.b)();case 10:case"end":return n.stop()}},n,e)}))()},LoginOut:function(){var e=this;return d(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.b)();case 2:e.$notify({type:"success",message:"退出成功"}),setTimeout(function(){e.$router.push("/login")},1e3);case 4:case"end":return n.stop()}},n,e)}))()}}}},"8ThQ":function(e,n,t){e.exports=t.p+"static/img/2.9d44a18.jpg"},EIyZ:function(e,n,t){"use strict";var a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"bg",style:{backgroundSize:e.isMobel?"100% 100%":""}}),e._v(" "),t("van-nav-bar",{attrs:{title:"设置","left-text":"","right-text":"","left-arrow":""},on:{"click-left":e.onClickSave}}),e._v(" "),t("div",{staticClass:"box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"item-index"},[t("van-cell",{attrs:{"is-link":"",title:"登录用户名"},on:{click:function(n){e.isNameShow=!0}}},[t("div",[e._v(e._s(e.username?e.username:"请输入用户名"))])]),e._v(" "),t("van-action-sheet",{staticClass:"van-sheet",attrs:{title:"","close-on-click-action":""},model:{value:e.isNameShow,callback:function(n){e.isNameShow=n},expression:"isNameShow"}},[t("van-nav-bar",{attrs:{title:"设置用户名","left-text":"取消","right-text":e.isUsername?"":"保存"},on:{"click-left":function(n){e.isNameShow=!1},"click-right":function(n){return e.onClickSaveUserInfo("username",e.username)}}}),e._v(" "),e.isUsername&&""!=e.isUsername?t("span",{staticClass:"hint"},[e._v("修改次数已达上限")]):t("span",{staticClass:"hint"},[e._v("账号只能设置一次")]),e._v(" "),t("van-cell-group",[t("van-form",[t("van-field",{attrs:{label:"",placeholder:"请输入用户名",disabled:!(!e.isUsername||""===e.isUsername),rules:[{validator:e.usernameValidator,message:"请输入正确的用户名"}]},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})],1)],1),e._v(" "),t("span",{staticClass:"hint"},[e._v("6-15个字符，仅可使用英文（必须）、数字、下划线")])],1)],1),e._v(" "),t("div",{staticClass:"item-index"},[t("van-cell",{attrs:{"is-link":"",title:"登录密码"},on:{click:function(n){e.isPasswordShow=!0}}}),e._v(" "),t("van-action-sheet",{staticClass:"van-sheet",attrs:{title:"","close-on-click-action":""},model:{value:e.isPasswordShow,callback:function(n){e.isPasswordShow=n},expression:"isPasswordShow"}},[t("van-nav-bar",{attrs:{title:"设置密码","left-text":"取消","right-text":"保存"},on:{"click-left":function(n){e.isPasswordShow=!1},"click-right":function(n){return e.onClickSaveUserInfo("password",e.password)}}}),e._v(" "),t("van-cell-group",[t("van-form",[t("van-field",{attrs:{type:"password",label:"",placeholder:"输入新的密码",rules:[{validator:e.passwordValidator,message:"请输入正确的密码"}]},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}}),e._v(" "),t("van-field",{attrs:{type:"password",label:"",placeholder:"再次输入新的密码",rules:[{validator:e.qrPasswordValidator,message:"两次输入的密码不一致"}]},model:{value:e.qr_password,callback:function(n){e.qr_password=n},expression:"qr_password"}})],1)],1),e._v(" "),t("span",{staticClass:"hint"},[e._v("6-16位密码，同时包含字母和数字")])],1)],1),e._v(" "),t("div",{staticClass:"item-index"},[t("van-cell",{attrs:{"is-link":"",title:"钱包地址"},on:{click:function(n){return e.connectWalletClick()}}},[t("div",[e._v(e._s(e.addressStr()))])])],1),e._v(" "),t("div",{staticClass:"item-index"},[t("van-cell",{attrs:{"is-link":"",title:"退出登录"},on:{click:e.LoginOut}})],1)])]),e._v(" "),t("van-dialog",{attrs:{title:"用户名合并","show-cancel-button":"","before-close":e.onBeforeClose},on:{confirm:e.margintSubmit},model:{value:e.usernameShow,callback:function(n){e.usernameShow=n},expression:"usernameShow"}},[t("div",{staticClass:"merge-box"},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",readonly:""},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),e._v(" "),t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码"},model:{value:e.m_password,callback:function(n){e.m_password=n},expression:"m_password"}})],1)]),e._v(" "),t("van-overlay",{attrs:{show:e.loadingShow},on:{click:function(n){e.loadingShow=!1}}},[t("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[t("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[e._v("答案计算中...")])],1)])],1)},staticRenderFns:[]};n.a=a},R6in:function(e,n,t){var a=t("kxFB");(e.exports=t("FZ+f")(!0)).push([e.i,".container[data-v-4fefb192] .bg{background-image:url("+a(t("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-4fefb192] .van-nav-bar{background-color:transparent}.container[data-v-4fefb192] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-4fefb192] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-4fefb192] .box{width:90%;height:80vh;margin:0 auto;background-color:#ae8bf5;margin-top:30px;border-radius:20px}.container[data-v-4fefb192] .box .content{padding:16px 16px 160px}.container[data-v-4fefb192] .box .van-popup--bottom.van-popup--round{height:100vh;border-radius:0}.container[data-v-4fefb192] .box .van-action-sheet{max-height:100%}.container[data-v-4fefb192] .box .item .item-index .van-cell{border-radius:20px}.container[data-v-4fefb192] .box .item .item-index .van-cell .van-cell__value{color:#fff}.container[data-v-4fefb192] .box .item .item-index .van-cell--clickable{height:50px;line-height:30px;vertical-align:middle;background-color:#ae8bf5;color:#fff}.container[data-v-4fefb192] .box .item .item-index .van-popup{background-color:#ae8bf5}.container[data-v-4fefb192] .box .item .item-index .van-popup .van-nav-bar__text{color:#fff}.container[data-v-4fefb192] .box .item .item-index .hint{color:#fff;padding-left:15px;font-size:15px}.container[data-v-4fefb192] .box .item .item-index .van-cell__left-icon,.container[data-v-4fefb192] .box .item .item-index .van-cell__right-icon{line-height:30px;color:#fff}.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell,.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-picker{width:95%;border-radius:15px;margin:0 auto}.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell-group{margin:10px;border-radius:15px}.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell-group .van-cell{border-radius:15px}.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-hairline--top-bottom:after{border-width:inherit!important}.container[data-v-4fefb192] .box .item .item-index .merge-box{padding:20px}.container[data-v-4fefb192] .box .item .item-index .merge-box .van-field__label{width:50px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/user/setup.vue"],names:[],mappings:"AACA,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,iCAAiC,UAAU,YAAY,cAAc,yBAAyB,gBAAgB,kBAAkB,CAC/H,AACD,0CAA0C,uBAAuB,CAChE,AACD,qEAAqE,aAAa,eAAe,CAChG,AACD,mDAAmD,eAAe,CACjE,AACD,6DAA6D,kBAAkB,CAC9E,AACD,8EAA8E,UAAU,CACvF,AACD,wEAAwE,YAAY,iBAAiB,sBAAsB,yBAAyB,UAAU,CAC7J,AACD,8DAA8D,wBAAwB,CACrF,AACD,iFAAiF,UAAU,CAC1F,AACD,yDAAyD,WAAW,kBAAkB,cAAc,CACnG,AACD,iJAAiJ,iBAAiB,UAAU,CAC3K,AACD,kJAAkJ,UAAU,mBAAmB,aAAa,CAC3L,AACD,8EAA8E,YAAY,kBAAkB,CAC3G,AACD,wFAAwF,kBAAkB,CACzG,AACD,8FAA+F,8BAA+B,CAC7H,AACD,8DAA8D,YAAY,CACzE,AACD,gFAAgF,UAAU,CACzF",file:"setup.vue",sourcesContent:['\n.container[data-v-4fefb192] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-4fefb192] .van-nav-bar{background-color:transparent\n}\n.container[data-v-4fefb192] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-4fefb192] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-4fefb192] .box{width:90%;height:80vh;margin:0 auto;background-color:#AE8BF5;margin-top:30px;border-radius:20px\n}\n.container[data-v-4fefb192] .box .content{padding:16px 16px 160px\n}\n.container[data-v-4fefb192] .box .van-popup--bottom.van-popup--round{height:100vh;border-radius:0\n}\n.container[data-v-4fefb192] .box .van-action-sheet{max-height:100%\n}\n.container[data-v-4fefb192] .box .item .item-index .van-cell{border-radius:20px\n}\n.container[data-v-4fefb192] .box .item .item-index .van-cell .van-cell__value{color:#fff\n}\n.container[data-v-4fefb192] .box .item .item-index .van-cell--clickable{height:50px;line-height:30px;vertical-align:middle;background-color:#AE8BF5;color:#fff\n}\n.container[data-v-4fefb192] .box .item .item-index .van-popup{background-color:#AE8BF5\n}\n.container[data-v-4fefb192] .box .item .item-index .van-popup .van-nav-bar__text{color:#fff\n}\n.container[data-v-4fefb192] .box .item .item-index .hint{color:#fff;padding-left:15px;font-size:15px\n}\n.container[data-v-4fefb192] .box .item .item-index .van-cell__left-icon,.container[data-v-4fefb192] .box .item .item-index .van-cell__right-icon{line-height:30px;color:#fff\n}\n.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell,.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-picker{width:95%;border-radius:15px;margin:0 auto\n}\n.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell-group{margin:10px;border-radius:15px\n}\n.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-cell-group .van-cell{border-radius:15px\n}\n.container[data-v-4fefb192] .box .item .item-index .van-sheet .van-hairline--top-bottom::after{border-width:inherit !important\n}\n.container[data-v-4fefb192] .box .item .item-index .merge-box{padding:20px\n}\n.container[data-v-4fefb192] .box .item .item-index .merge-box .van-field__label{width:50px\n}\n'],sourceRoot:""}])},VbTD:function(e,n,t){var a=t("R6in");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("38c7c2f4",a,!0,{})},pVz8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("+haf"),r=t("EIyZ");var i=function(e){t("VbTD")},o=t("VU/8")(a.a,r.a,!1,i,"data-v-4fefb192",null);n.default=o.exports}});