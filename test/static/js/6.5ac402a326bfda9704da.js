webpackJsonp([6],{"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.45de2af.jpg"},LyHr:function(t,e,n){"use strict";var r,a,i,o=n("mtWM"),s=n.n(o),c=n("Fd2+"),d=n("NYxO"),l=n("WTx0"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,i){try{var o=e[a](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}e.a=(r={name:"login",props:{msg:String},data:function(){return{active:"",username:"",password:""}},created:function(){},computed:u({},Object(d.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{userId:this.userId,apiUrl:apiUrl}}}),watch:{userId:{immediate:!0,handler:function(t){var e=this;console.log(t),t>0&&setTimeout(function(){e.$router.push("/home")},1e3)}}},components:{},methods:{agreement:function(){c.a.alert({messageAlign:"left",message:'欢迎您使用H2O自媒体。为保障您在使用H2O自媒体各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br><span style="font-weight:bold;">一、您的权力与义务</span><br>1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便H2O自媒体向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意H2O自媒体对本协议所做的修改，您有权停止使用本系统，并要求H2O自媒体与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受H2O自媒体对本协议做的修改。<br>3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向H2O自媒体、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若H2O自媒体与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿H2O自媒体与合作公司、关联公司的所有损失。<br>6.H2O自媒体有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>'}).then(function(){})},privacy:function(){c.a.alert({messageAlign:"left",message:"隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议"}).then(function(){})},loginEvent:function(){""!=this.username?""!=this.password?this.save():Object(c.b)("请输入密码"):Object(c.b)("请输入账号")},connectWalletClick:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.address&&void 0!=t.address&&""!=t.address){e.next=6;break}return e.next=3,Object(l.c)(0,!0);case 3:t.$forceUpdate(),e.next=9;break;case 6:return e.next=8,Object(l.b)();case 8:t.$forceUpdate();case 9:case"end":return e.stop()}},e,t)}))()},addressStr:function(){var t=localStorage.getItem("connectorId"),e=localStorage.getItem("address");return(t&&void 0!==t||""!==t)&&e&&void 0!==e&&""!==e?this.address.substring(0,4)+"***"+this.address.substring(this.address.length-3):"Connect Wallet"},save:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username.trim(),password:t.password.trim()},e.next=3,s.a.post(t.apiUrl+"/Api/User/login",n).then(function(){var e=p(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n&&1e4==n.code?(localStorage.setItem("userInfo",JSON.stringify(n.data)),localStorage.setItem("token",JSON.stringify(n.data.token)),t.$store.commit("setUserInfo",n.data),t.$notify({type:"success",message:"登录成功"}),t.$router.push("/")):n&&70002==n.code?Object(c.b)("用户名不存在"):n&&70003==n.code?Object(c.b)("密码错误"):Object(c.b)(res.msg);case 1:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,t)}))()},isMobile:function(t){return!!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(t)},tabsEvents:function(t,e){this.username="",this.password=""}}},i=function(){this,document.title="登录"},(a="created")in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r)},NWze:function(t,e,n){var r=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-b149b182] .bg{background-image:url("+r(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-b149b182] .van-nav-bar{background-color:transparent\n}\n.container[data-v-b149b182] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-b149b182] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-b149b182] .regist{text-align:left\n}\n.container[data-v-b149b182] .regist .form{width:90%;background-color:#fff;margin:0 auto;border-radius:20px;padding-bottom:20px\n}\n.container[data-v-b149b182] .regist .form .box{padding-top:5px\n}\n.container[data-v-b149b182] .regist .tab-class{margin-top:20px\n}\n.container[data-v-b149b182] .regist .form-title{width:100%;background:linear-gradient(-45deg, #00ace6, #004695)\n}\n.container[data-v-b149b182] .regist .form-title .logo{display:block;width:100%\n}\n.container[data-v-b149b182] .regist .title{margin-left:30px;margin-top:20px;color:#fff;font-size:28px\n}\n.container[data-v-b149b182] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px\n}\n.container[data-v-b149b182] .regist .li{margin-left:30px;margin-right:30px;position:relative\n}\n.container[data-v-b149b182] .regist .phone{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:44px;width:100%\n}\n.container[data-v-b149b182] .regist .password{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;margin-top:14px;width:100%\n}\n.container[data-v-b149b182] .regist .van-cell::after{left:30px;right:30px\n}\n.container[data-v-b149b182] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:#c0c0c0;border-radius:25px;height:30px;line-height:30px\n}\n.container[data-v-b149b182] .regist .thirdLogin{text-align:center\n}\n.container[data-v-b149b182] .regist .thirdLogin img{width:44px;margin:20px\n}\n.container[data-v-b149b182] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center\n}\n.container[data-v-b149b182] .regist .metamaskButton{margin:30px auto;display:block;width:315px;height:44px;border-radius:25px;background:#5394ff;color:#fff;text-align:center\n}\n.container[data-v-b149b182] .regist .metamaskButton .van-button__icon{margin-right:10px\n}\n.container[data-v-b149b182] .regist .loginButton{margin:30px auto;display:block;width:315px;height:44px;border-radius:25px;background:#c0c0c0;color:#fff;text-align:center;pointer-events:none\n}\n.container[data-v-b149b182] .regist .loginButton.disableds{background:#5394ff;pointer-events:auto\n}\n.container[data-v-b149b182] .regist .tips{position:absolute;height:50px;margin-top:30px;text-align:center;width:100%;max-width:500px;color:#666\n}\n.container[data-v-b149b182] .regist .tips span{color:#5394ff\n}\n",""])},XVVD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("LyHr"),a=n("llfl"),i=!1;var o=function(t){i||n("jKiA")},s=n("VU/8")(r.a,a.a,!1,o,"data-v-b149b182",null);s.options.__file="src/views/user/login.vue",e.default=s.exports},jKiA:function(t,e,n){var r=n("NWze");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("5830a0e6",r,!1,{})},llfl:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("div",{staticClass:"regist"},[n("div",{staticClass:"bg-radius"}),t._v(" "),n("div",{staticClass:"title"},[t._v("账号登录")]),t._v(" "),n("div",{staticClass:"form"},[n("van-form",[n("div",{staticClass:"box"},[n("div",{staticClass:"li"},[n("van-field",{staticClass:"phone",attrs:{name:"账号",placeholder:"请输入账号",clearable:"",center:"",rules:[{required:!0,message:""}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"password",attrs:{clearable:"",center:"",type:"password",name:"密码",placeholder:"请输入密码",rules:[{required:!0,message:""}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])]),t._v(" "),n("van-button",{class:["loginButton",{disableds:""!=t.username&&""!=t.password}],attrs:{type:"default"},on:{click:function(e){return t.loginEvent()}}},[t._v("登录")]),t._v(" "),n("van-row",{staticClass:"link"},[n("van-col",{attrs:{span:"20",align:"right"}},[n("router-link",{attrs:{to:"/regist"}},[t._v("新用户注册")])],1)],1),t._v(" "),n("div",{staticClass:"tips"},[t._v("\n        登录即同意"),n("span",{on:{click:t.agreement}},[t._v(" 用户协议 ")]),t._v("和"),n("span",{on:{click:t.privacy}},[t._v("\n          隐私政策\n        ")])])],1)])])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a}});