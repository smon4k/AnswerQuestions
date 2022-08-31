webpackJsonp([7],{"2hUf":function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("div",{staticClass:"regist"},[n("div",{staticClass:"bg-radius"}),t._v(" "),n("div",{staticClass:"title"},[t._v("用户名登录")]),t._v(" "),n("div",{staticClass:"form"},[n("van-form",[n("div",{staticClass:"box"},[n("div",{staticClass:"li"},[n("van-field",{staticClass:"phone",attrs:{name:"账号",placeholder:"请输入用户名",clearable:"",center:"",rules:[{required:!0,message:""}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"password",attrs:{clearable:"",center:"",type:"password",name:"密码",placeholder:"请输入密码",rules:[{required:!0,message:""}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])]),t._v(" "),n("van-button",{class:["loginButton",{disableds:""!=t.username&&""!=t.password}],attrs:{type:"default"},on:{click:function(e){return t.loginEvent()}}},[t._v("登录")]),t._v(" "),n("van-row",{staticClass:"link"},[n("van-col",{attrs:{span:"20",align:"right"}},[n("router-link",{attrs:{to:"/regist"}},[t._v("新用户注册")])],1)],1),t._v(" "),n("div",{staticClass:"tips"},[t._v("\n        登录即同意"),n("span",{on:{click:t.agreement}},[t._v(" 用户协议 ")]),t._v("和"),n("span",{on:{click:t.privacy}},[t._v("\n          隐私政策\n        ")])])],1)])])},staticRenderFns:[]};e.a=a},"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.d93b15e.jpg"},IOHs:function(t,e,n){var a=n("lvEE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("59199da4",a,!0,{})},LyHr:function(t,e,n){"use strict";var a,r,i,o=n("mtWM"),s=n.n(o),c=n("Fd2+"),A=n("NYxO"),d=n("WTx0"),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function b(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,i){try{var o=e[r](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.a=(a={name:"login",props:{msg:String},data:function(){return{active:"",username:"",password:""}},created:function(){},computed:g({},Object(A.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{userId:this.userId,apiUrl:apiUrl}}}),watch:{userId:{immediate:!0,handler:function(t){var e=this;console.log(t),t>0&&setTimeout(function(){e.$router.push("/home")},1e3)}}},components:{},methods:{agreement:function(){c.a.alert({messageAlign:"left",message:'欢迎您使用H2O自媒体。为保障您在使用H2O自媒体各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br><span style="font-weight:bold;">一、您的权力与义务</span><br>1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便H2O自媒体向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意H2O自媒体对本协议所做的修改，您有权停止使用本系统，并要求H2O自媒体与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受H2O自媒体对本协议做的修改。<br>3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向H2O自媒体、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若H2O自媒体与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿H2O自媒体与合作公司、关联公司的所有损失。<br>6.H2O自媒体有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>'}).then(function(){})},privacy:function(){c.a.alert({messageAlign:"left",message:"隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议"}).then(function(){})},loginEvent:function(){""!=this.username?""!=this.password?this.save():Object(c.b)("请输入密码"):Object(c.b)("请输入用户名")},connectWalletClick:function(){var t=this;return b(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.address&&void 0!=t.address&&""!=t.address){e.next=6;break}return e.next=3,Object(d.c)(0,!0);case 3:t.$forceUpdate(),e.next=9;break;case 6:return e.next=8,Object(d.b)();case 8:t.$forceUpdate();case 9:case"end":return e.stop()}},e,t)}))()},addressStr:function(){var t=localStorage.getItem("connectorId"),e=localStorage.getItem("address");return(t&&void 0!==t||""!==t)&&e&&void 0!==e&&""!==e?this.address.substring(0,4)+"***"+this.address.substring(this.address.length-3):"Connect Wallet"},save:function(){var t=this;return b(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username.trim(),password:t.password.trim()},e.next=3,s.a.post(t.apiUrl+"/Api/User/login",n).then(function(){var e=b(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n&&1e4==n.code?(localStorage.setItem("userInfo",JSON.stringify(n.data)),localStorage.setItem("token",JSON.stringify(n.data.token)),t.$store.commit("setUserInfo",n.data),t.$notify({type:"success",message:"登录成功"}),t.$router.push("/")):n&&70002==n.code?Object(c.b)("用户名不存在"):n&&70003==n.code?Object(c.b)("密码错误"):Object(c.b)(res.msg);case 1:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,t)}))()},isMobile:function(t){return!!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(t)},tabsEvents:function(t,e){this.username="",this.password=""}}},i=function(){this,document.title="登录"},(r="created")in a?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i,a)},XVVD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("LyHr"),r=n("2hUf");var i=function(t){n("IOHs")},o=n("VU/8")(a.a,r.a,!1,i,"data-v-3bb442c7",null);e.default=o.exports},lvEE:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-3bb442c7] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-3bb442c7] .van-nav-bar{background-color:transparent}.container[data-v-3bb442c7] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-3bb442c7] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-3bb442c7] .regist{text-align:left}.container[data-v-3bb442c7] .regist .form{width:90%;background-color:#ae8bf5;margin:0 auto;border-radius:20px;padding-bottom:20px}.container[data-v-3bb442c7] .regist .form .box{padding-top:5px}.container[data-v-3bb442c7] .regist .tab-class{margin-top:20px}.container[data-v-3bb442c7] .regist .form-title{width:100%;background:linear-gradient(-45deg,#00ace6,#004695)}.container[data-v-3bb442c7] .regist .form-title .logo{display:block;width:100%}.container[data-v-3bb442c7] .regist .title{margin-left:30px;margin-top:20px;color:#fff;font-size:20px}.container[data-v-3bb442c7] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px}.container[data-v-3bb442c7] .regist .li{margin-left:30px;margin-right:30px;position:relative}.container[data-v-3bb442c7] .regist .phone{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:44px;width:100%}.container[data-v-3bb442c7] .regist .password{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:14px;width:100%}.container[data-v-3bb442c7] .regist .van-cell:after{left:30px;right:30px}.container[data-v-3bb442c7] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:silver;border-radius:25px;height:30px;line-height:30px}.container[data-v-3bb442c7] .regist .thirdLogin{text-align:center}.container[data-v-3bb442c7] .regist .thirdLogin img{width:44px;margin:20px}.container[data-v-3bb442c7] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center}.container[data-v-3bb442c7] .regist .metamaskButton{margin:30px auto;display:block;width:315px;height:44px;border-radius:25px;background:#5394ff;color:#fff;text-align:center;border:0}.container[data-v-3bb442c7] .regist .metamaskButton .van-button__icon{margin-right:10px}.container[data-v-3bb442c7] .regist .loginButton{margin:30px auto;display:block;width:70%;height:40px;border-radius:25px;background:silver;color:#fff;text-align:center;pointer-events:none}.container[data-v-3bb442c7] .regist .loginButton.disableds{background:#8c1af5;border:0;pointer-events:auto}.container[data-v-3bb442c7] .regist .tips{font-size:13px;position:absolute;height:50px;margin-top:30px;text-align:center;width:100%;max-width:500px;color:#fff}.container[data-v-3bb442c7] .regist .tips span{color:#5394ff}.container[data-v-3bb442c7] .regist .link a{font-size:13px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/user/login.vue"],names:[],mappings:"AACA,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,oCAAoC,eAAe,CAClD,AACD,0CAA0C,UAAU,yBAAyB,cAAc,mBAAmB,mBAAmB,CAChI,AACD,+CAA+C,eAAe,CAC7D,AACD,+CAA+C,eAAe,CAC7D,AACD,gDAAgD,WAAW,kDAAoD,CAC9G,AACD,sDAAsD,cAAc,UAAU,CAC7E,AACD,2CAA2C,iBAAiB,gBAAgB,WAAW,cAAc,CACpG,AACD,8CAA8C,eAAe,WAAW,iBAAiB,cAAc,CACtG,AACD,wCAAwC,iBAAiB,kBAAkB,iBAAiB,CAC3F,AACD,2CAA2C,kBAAkB,mBAAmB,mBAAmB,mBAAmB,gBAAgB,UAAU,CAC/I,AACD,8CAA8C,kBAAkB,mBAAmB,mBAAmB,mBAAmB,gBAAgB,UAAU,CAClJ,AACD,oDAAqD,UAAU,UAAU,CACxE,AACD,8CAA8C,kBAAkB,QAAQ,WAAW,iBAAiB,eAAe,WAAW,kBAAkB,WAAW,kBAAmB,mBAAmB,YAAY,gBAAgB,CAC5N,AACD,gDAAgD,iBAAiB,CAChE,AACD,oDAAoD,WAAW,WAAW,CACzE,AACD,gDAAgD,eAAe,WAAW,eAAe,iBAAiB,CACzG,AACD,oDAAoD,iBAAiB,cAAc,YAAY,YAAY,mBAAmB,mBAAmB,WAAW,kBAAkB,QAAQ,CACrL,AACD,sEAAsE,iBAAiB,CACtF,AACD,iDAAiD,iBAAiB,cAAc,UAAU,YAAY,mBAAmB,kBAAmB,WAAW,kBAAkB,mBAAmB,CAC3L,AACD,2DAA2D,mBAAmB,SAAS,mBAAmB,CACzG,AACD,0CAA0C,eAAe,kBAAkB,YAAY,gBAAgB,kBAAkB,WAAW,gBAAgB,UAAU,CAC7J,AACD,+CAA+C,aAAa,CAC3D,AACD,4CAA4C,cAAc,CACzD",file:"login.vue",sourcesContent:['\n.container[data-v-3bb442c7] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-3bb442c7] .van-nav-bar{background-color:transparent\n}\n.container[data-v-3bb442c7] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-3bb442c7] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-3bb442c7] .regist{text-align:left\n}\n.container[data-v-3bb442c7] .regist .form{width:90%;background-color:#AE8BF5;margin:0 auto;border-radius:20px;padding-bottom:20px\n}\n.container[data-v-3bb442c7] .regist .form .box{padding-top:5px\n}\n.container[data-v-3bb442c7] .regist .tab-class{margin-top:20px\n}\n.container[data-v-3bb442c7] .regist .form-title{width:100%;background:linear-gradient(-45deg, #00ace6, #004695)\n}\n.container[data-v-3bb442c7] .regist .form-title .logo{display:block;width:100%\n}\n.container[data-v-3bb442c7] .regist .title{margin-left:30px;margin-top:20px;color:#fff;font-size:20px\n}\n.container[data-v-3bb442c7] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px\n}\n.container[data-v-3bb442c7] .regist .li{margin-left:30px;margin-right:30px;position:relative\n}\n.container[data-v-3bb442c7] .regist .phone{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:44px;width:100%\n}\n.container[data-v-3bb442c7] .regist .password{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:14px;width:100%\n}\n.container[data-v-3bb442c7] .regist .van-cell::after{left:30px;right:30px\n}\n.container[data-v-3bb442c7] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:#c0c0c0;border-radius:25px;height:30px;line-height:30px\n}\n.container[data-v-3bb442c7] .regist .thirdLogin{text-align:center\n}\n.container[data-v-3bb442c7] .regist .thirdLogin img{width:44px;margin:20px\n}\n.container[data-v-3bb442c7] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center\n}\n.container[data-v-3bb442c7] .regist .metamaskButton{margin:30px auto;display:block;width:315px;height:44px;border-radius:25px;background:#5394ff;color:#fff;text-align:center;border:0\n}\n.container[data-v-3bb442c7] .regist .metamaskButton .van-button__icon{margin-right:10px\n}\n.container[data-v-3bb442c7] .regist .loginButton{margin:30px auto;display:block;width:70%;height:40px;border-radius:25px;background:#c0c0c0;color:#fff;text-align:center;pointer-events:none\n}\n.container[data-v-3bb442c7] .regist .loginButton.disableds{background:#8C1AF5;border:0;pointer-events:auto\n}\n.container[data-v-3bb442c7] .regist .tips{font-size:13px;position:absolute;height:50px;margin-top:30px;text-align:center;width:100%;max-width:500px;color:#fff\n}\n.container[data-v-3bb442c7] .regist .tips span{color:#5394ff\n}\n.container[data-v-3bb442c7] .regist .link a{font-size:13px\n}\n'],sourceRoot:""}])}});