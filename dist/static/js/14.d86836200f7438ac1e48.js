webpackJsonp([14],{BILG:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("van-nav-bar",{attrs:{title:t.$t("question:UsernameRegistration"),"left-text":"","right-text":""}}),t._v(" "),n("div",{staticClass:"regist"},[n("van-form",{staticClass:"form",on:{submit:t.onSubmit}},[n("div",{staticClass:"box"},[n("div",{staticClass:"hint",staticStyle:{"margin-top":"44px","margin-bottom":"10px"}},[t._v(t._s(t.$t("question:UsernameOne")))]),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"phone",attrs:{name:t.$t("question:username"),placeholder:t.$t("question:pleaseEnterUsername"),clearable:"",rules:[{validator:t.usernameValidator,message:t.$t("question:UsernameRegistration-01")}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v(t._s(t.$t("question:UsernameRegistration-02")))]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"code",attrs:{clearable:"",center:"",type:"password",name:t.$t("question:password"),placeholder:t.$t("question:pleaseEnterPassword"),rules:[{validator:t.passwordValidator,message:t.$t("question:PleaseEnterCorrectPassword")}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v(t._s(t.$t("question:PasswordRegistration-01")))]),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"code",attrs:{clearable:"",center:"",type:"password",name:"密码",placeholder:"请确认密码",rules:[{validator:t.qrPasswordValidator,message:t.$t("question:PasswordRegistration-02")}]},model:{value:t.qr_password,callback:function(e){t.qr_password=e},expression:"qr_password"}})],1),t._v(" "),t.re_address&&""!==t.re_address?n("div",{staticClass:"hint"},[t._v(t._s(t.$t("question:InvitationAddress"))+"："+t._s(t.re_address))]):t._e()]),t._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("van-button",{staticClass:"regist-button",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(t._s(t.$t("question:register")))]),t._v(" "),n("van-row",{staticClass:"link",staticStyle:{"margin-top":"10px"}},[n("van-col",{attrs:{span:"24",align:"center"}},[n("router-link",{attrs:{to:"/login"}},[t._v(t._s(t.$t("question:UsernameLogin")))])],1)],1)],1)])],1)],1)},staticRenderFns:[]};e.a=a},FsFm:function(t,e,n){"use strict";n("XmAh");var a=n("il3B"),r=(n("eqfM"),n("/QYm")),i=n("mtWM"),o=n.n(i),s=n("NYxO"),c=n("GKmE"),A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function d(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,i){try{var o=e[r](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.a={name:"login",props:{msg:String},data:function(){return{username:"",phone:"",code:"",password:"",qr_password:"",verify_title:"获取验证码",is_send:!1,ifClick:!0,time:60,re_address:""}},created:function(){this.re_address=Object(c.g)("re")},computed:A({},Object(s.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{userId:this.userId}}}),watch:{phone:function(t){console.log(t)},code:function(t){console.log(t)},changeData:{immediate:!0,handler:function(t){var e=this;console.log(t),t.userId>0&&setTimeout(function(){e.$router.push("/home/index")},1e3)}}},components:{},methods:{usernameValidator:function(t){return!!/^[a-zA-Z]([-_a-zA-Z0-9_]{5,14})$/.test(t)},passwordValidator:function(t){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(t)},qrPasswordValidator:function(t){return t===this.password},onSubmit:function(t){""!=this.username?""!=this.password?""!=this.qr_password?this.password===this.qr_password?this.save():Object(r.a)("两次密码输入不一致"):Object(r.a)("请再次输入密码"):Object(r.a)("请输入密码"):Object(r.a)("请输入用户名")},save:function(){var t=this;return d(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username.trim(),password:t.password.trim(),qr_password:t.qr_password.trim(),invite_address:t.re_address&&""!==t.re_address?t.re_address:""},e.next=3,o.a.post(t.apiUrl+"/Api/User/createAccount",n).then(function(){var e=d(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),!n||1e4!=n.code){e.next=6;break}t.$notify({type:"success",message:"注册成功"}),setTimeout(function(){t.$router.push("/login")},2e3),e.next=13;break;case 6:if(!n||10001!=n.code){e.next=11;break}return t.$notify({type:"warning",message:n.msg}),e.abrupt("return",!1);case 11:return t.$notify({type:"warning",message:"注册失败"}),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 3:case"end":return e.stop()}},e,t)}))()},isMobile:function(t){return!!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(t)},verifyTime:function(){var t=this;this.time>0?(this.time--,this.is_send=!0,this.verify_title=this.time+"s",this.timer=setTimeout(function(){t.verifyTime()},1e3)):(setTimeout(function(){t.ifClick=!0},1e3),this.is_send=!1,this.time=60,this.verify_title="再次发送",clearTimeout(this.timer))},sendVerify:function(){var t=this;if(this.ifClick){var e=this.phone.trim();if(""==e)return Object(r.a)("请输入手机号"),!1;if(!this.isMobile(e))return Object(r.a)("请输入有效的11位手机号码"),!1;this.ifClick=!1;var n={mobile:e,type:1};this.$post("/user/mobile/captcha",n).then(function(e){0==e.code?t.verifyTime():(setTimeout(function(){t.ifClick=!0},1e3),t.is_send=!1,t.time=60,t.verify_title="再次发送",clearTimeout(t.timer),Object(r.a)(e.msg))})}},agreement:function(){a.a.alert({messageAlign:"left",message:'欢迎您使用小a阅读。为保障您在使用小a阅读各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br><span style="font-weight:bold;">一、您的权力与义务</span><br>1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便小a阅读向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意小a阅读对本协议所做的修改，您有权停止使用本系统，并要求小a阅读与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受小a阅读对本协议做的修改。<br>3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向小a阅读、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若小a阅读与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿小a阅读与合作公司、关联公司的所有损失。<br>6.小a阅读有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>'}).then(function(){})},privacy:function(){a.a.alert({messageAlign:"left",message:"隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议"}).then(function(){})}}}},Iju0:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-30716697] .bg{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-30716697] .van-nav-bar{background-color:transparent}.container[data-v-30716697] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-30716697] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-30716697] .regist{margin-top:50px}.container[data-v-30716697] .regist .form{width:90%;background:linear-gradient(#00c3e9,#2d50d2);margin:0 auto;border-radius:20px}.container[data-v-30716697] .regist .form .box{padding-top:5px}.container[data-v-30716697] .regist .van-form{font-size:16px}.container[data-v-30716697] .regist .title{margin-left:30px;color:#fff;font-size:20px}.container[data-v-30716697] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px}.container[data-v-30716697] .regist .li{margin-left:30px;margin-right:30px;position:relative}.container[data-v-30716697] .regist .hint{color:#fff;padding-left:40px;margin-top:10px;font-size:13px}.container[data-v-30716697] .regist .code,.container[data-v-30716697] .regist .phone{padding-left:15px;padding-right:15px;background:#f9f9f9;border-radius:25px;width:315px}.container[data-v-30716697] .regist .code{margin-top:14px}.container[data-v-30716697] .regist .van-cell:after{left:30px;right:30px}.container[data-v-30716697] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:silver;border-radius:25px;height:30px;line-height:30px}.container[data-v-30716697] .regist .thirdLogin{text-align:center}.container[data-v-30716697] .regist .thirdLogin img{width:44px;margin:20px}.container[data-v-30716697] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center}.container[data-v-30716697] .regist .loginButton{margin:30px auto;display:block;width:70%;height:40px;border-radius:25px;background:silver;color:#fff;text-align:center;pointer-events:none}.container[data-v-30716697] .regist .loginButton.disableds{background:#00c3e9;pointer-events:auto}.container[data-v-30716697] .regist .tips{position:absolute;bottom:30px;text-align:center;width:100%;color:#666}.container[data-v-30716697] .regist .tips span{color:#5394ff}.container[data-v-30716697] .regist .regist-button{width:50%;margin:0 auto;text-align:center;background:url("+a(n("duWs"))+") no-repeat 50%;border:0}.container[data-v-30716697] .regist .link a{font-size:13px;color:#fff}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/user/regist.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACzP,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,oCAAoC,eAAe,CAClD,AACD,0CAA0C,UAAU,4CAA6C,cAAc,kBAAkB,CAChI,AACD,+CAA+C,eAAe,CAC7D,AACD,8CAA8C,cAAc,CAC3D,AACD,2CAA2C,iBAAiB,WAAW,cAAc,CACpF,AACD,8CAA8C,eAAe,WAAW,iBAAiB,cAAc,CACtG,AACD,wCAAwC,iBAAiB,kBAAkB,iBAAiB,CAC3F,AACD,0CAA0C,WAAW,kBAAkB,gBAAgB,cAAc,CACpG,AAGD,qFAF2C,kBAAkB,mBAAmB,mBAAmB,mBAAmB,WAAW,CAGhI,AADD,0CAAqH,eAAgB,CACpI,AACD,oDAAqD,UAAU,UAAU,CACxE,AACD,8CAA8C,kBAAkB,QAAQ,WAAW,iBAAiB,eAAe,WAAW,kBAAkB,WAAW,kBAAmB,mBAAmB,YAAY,gBAAgB,CAC5N,AACD,gDAAgD,iBAAiB,CAChE,AACD,oDAAoD,WAAW,WAAW,CACzE,AACD,gDAAgD,eAAe,WAAW,eAAe,iBAAiB,CACzG,AACD,iDAAiD,iBAAiB,cAAc,UAAU,YAAY,mBAAmB,kBAAmB,WAAW,kBAAkB,mBAAmB,CAC3L,AACD,2DAA2D,mBAAmB,mBAAmB,CAChG,AACD,0CAA0C,kBAAkB,YAAY,kBAAkB,WAAW,UAAU,CAC9G,AACD,+CAA+C,aAAa,CAC3D,AACD,mDAAmD,UAAU,cAAc,kBAAkB,uDAAwE,QAAQ,CAC5K,AACD,4CAA4C,eAAe,UAAU,CACpE",file:"regist.vue",sourcesContent:['\n.container[data-v-30716697] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-30716697] .van-nav-bar{background-color:transparent\n}\n.container[data-v-30716697] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-30716697] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-30716697] .regist{margin-top:50px\n}\n.container[data-v-30716697] .regist .form{width:90%;background:linear-gradient(#00C3E9, #2D50D2);margin:0 auto;border-radius:20px\n}\n.container[data-v-30716697] .regist .form .box{padding-top:5px\n}\n.container[data-v-30716697] .regist .van-form{font-size:16px\n}\n.container[data-v-30716697] .regist .title{margin-left:30px;color:#fff;font-size:20px\n}\n.container[data-v-30716697] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px\n}\n.container[data-v-30716697] .regist .li{margin-left:30px;margin-right:30px;position:relative\n}\n.container[data-v-30716697] .regist .hint{color:#fff;padding-left:40px;margin-top:10px;font-size:13px\n}\n.container[data-v-30716697] .regist .phone{padding-left:15px;padding-right:15px;background:#F9F9F9;border-radius:25px;width:315px\n}\n.container[data-v-30716697] .regist .code{padding-left:15px;padding-right:15px;background:#F9F9F9;border-radius:25px;margin-top:14px;width:315px\n}\n.container[data-v-30716697] .regist .van-cell::after{left:30px;right:30px\n}\n.container[data-v-30716697] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:#C0C0C0;border-radius:25px;height:30px;line-height:30px\n}\n.container[data-v-30716697] .regist .thirdLogin{text-align:center\n}\n.container[data-v-30716697] .regist .thirdLogin img{width:44px;margin:20px\n}\n.container[data-v-30716697] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center\n}\n.container[data-v-30716697] .regist .loginButton{margin:30px auto;display:block;width:70%;height:40px;border-radius:25px;background:#C0C0C0;color:#fff;text-align:center;pointer-events:none\n}\n.container[data-v-30716697] .regist .loginButton.disableds{background:#00C3E9;pointer-events:auto\n}\n.container[data-v-30716697] .regist .tips{position:absolute;bottom:30px;text-align:center;width:100%;color:#666\n}\n.container[data-v-30716697] .regist .tips span{color:#5394FF\n}\n.container[data-v-30716697] .regist .regist-button{width:50%;margin:0 auto;text-align:center;background:url("../../assets/answer/view-rewards.png") no-repeat center;border:0\n}\n.container[data-v-30716697] .regist .link a{font-size:13px;color:#fff\n}\n'],sourceRoot:""}])},VChF:function(t,e,n){var a=n("Iju0");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("7654f914",a,!0,{})},xwdy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("FsFm"),r=n("BILG");var i=function(t){n("VChF")},o=n("VU/8")(a.a,r.a,!1,i,"data-v-30716697",null);e.default=o.exports}});