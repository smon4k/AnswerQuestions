webpackJsonp([0],{"/QYm":function(t,e,n){"use strict";var i=n("WPoX"),o=n("7+uW"),a=n("LXZA"),s=n("o69Z"),r=n("QKt9"),l={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},c={},d=[],f=!1,u=Object(i.a)({},l);function A(t){return Object(s.g)(t)?t:{message:t}}function g(){if(s.i)return{};if(!(d=d.filter(function(t){return!t.$el.parentNode||(e=t.$el,document.body.contains(e));var e})).length||f){var t=new(o.a.extend(a.a))({el:document.createElement("div")});t.$on("input",function(e){t.value=e}),d.push(t)}return d[d.length-1]}function p(t){void 0===t&&(t={});var e=g();return e.value&&e.updateZIndex(),t=A(t),(t=Object(i.a)({},u,c[t.type||u.type],t)).mask&&console.warn('[Vant] Toast: "mask" option is deprecated, use "overlay" option instead.'),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),f&&!s.i&&e.$on("closed",function(){clearTimeout(e.timer),d=d.filter(function(t){return t!==e}),Object(r.a)(e.$el),e.$destroy()})},Object(i.a)(e,function(t){return Object(i.a)({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout(function(){e.clear()},t.duration)),e}["loading","success","fail"].forEach(function(t){var e;p[t]=(e=t,function(t){return p(Object(i.a)({type:e},A(t)))})}),p.clear=function(t){d.length&&(t?(d.forEach(function(t){t.clear()}),d=[]):f?d.shift().clear():d[0].clear())},p.setDefaultOptions=function(t,e){"string"==typeof t?c[t]=e:Object(i.a)(u,t)},p.resetDefaultOptions=function(t){"string"==typeof t?c[t]=null:(u=Object(i.a)({},l),c={})},p.allowMultiple=function(t){void 0===t&&(t=!0),f=t},p.install=function(){o.a.use(a.a)},o.a.prototype.$toast=p,e.a=p},"0VhW":function(t,e,n){"use strict";var i=n("AA6R"),o=n.n(i),a=n("o69Z"),s=n("V+2B"),r=n("CsZI"),l=n("SSsa"),c=n("pzvz"),d=n("q1uG"),f=Object(a.b)("dialog"),u=f[0],A=f[1],g=f[2];e.a=u({mixins:[Object(r.a)()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1})):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick(function(){var e;null==(e=t.$refs.dialog)||e.focus()})},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var e=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;({Enter:this.showConfirmButton?function(){return e.handleAction("confirm")}:a.j,Escape:this.showCancelButton?function(){return e.handleAction("cancel")}:a.j})[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,e=this.$createElement;return e(c.a,{class:A("footer")},[this.showCancelButton&&e(d.a,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||g("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:A("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(d.a,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||g("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:A("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[s.d,A("footer")]},[this.showCancelButton&&n(l.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||g("cancel"),nativeType:"button"},class:A("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(l.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||g("confirm"),nativeType:"button"},class:[A("confirm"),(t={},t[s.b]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:A("content")},[e]);var i=this.message,a=this.messageAlign;if(i){var s,r,l={class:A("message",(s={"has-title":t},s[a]=a,s)),domProps:(r={},r[this.allowHtml?"innerHTML":"textContent"]=i,r)};return n("div",{class:A("content",{isolated:!t})},[n("div",o()([{},l]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),i=this.slots("title")||this.title,o=i&&t("div",{class:A("header",{isolated:!e&&!n})},[i]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e,tabIndex:0},class:[A([this.theme]),this.className],style:{width:Object(a.a)(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[o,this.genContent(i,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}})},"6TqU":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:88px;max-width:70%;min-height:88px;padding:16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-break:break-all;background-color:rgba(0,0,0,.7);border-radius:8px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable{overflow:hidden}.van-toast--unclickable *{pointer-events:none}.van-toast--html,.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:0;padding:8px 12px}.van-toast--html .van-toast__text,.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:20%}.van-toast--bottom{top:auto;bottom:20%}.van-toast__icon{font-size:36px}.van-toast__loading{padding:4px;color:#fff}.van-toast__text{margin-top:8px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/node_modules/vant/es/toast/index.css"],names:[],mappings:"AAAA,WAAW,eAAe,QAAQ,SAAS,oBAAoB,qBAAqB,aAAa,4BAA4B,6BAA6B,8BAA8B,sBAAsB,yBAAyB,2BAA2B,mBAAmB,wBAAwB,+BAA+B,uBAAuB,uBAAuB,WAAW,cAAc,gBAAgB,aAAa,WAAW,eAAe,iBAAiB,qBAAqB,kBAAkB,qBAAqB,gCAAgC,kBAAkB,2CAA2C,kCAAkC,CAAC,wBAAwB,eAAe,CAAC,0BAA0B,mBAAmB,CAAC,kCAAkC,0BAA0B,kBAAkB,eAAe,aAAa,gBAAgB,CAAC,oEAAoE,YAAY,CAAC,gBAAgB,OAAO,CAAC,mBAAmB,SAAS,UAAU,CAAC,iBAAiB,cAAc,CAAC,oBAAoB,YAAY,UAAU,CAAC,iBAAiB,cAAc,CAAC",file:"index.css",sourcesContent:[".van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:88px;max-width:70%;min-height:88px;padding:16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-break:break-all;background-color:rgba(0,0,0,.7);border-radius:8px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable{overflow:hidden}.van-toast--unclickable *{pointer-events:none}.van-toast--html,.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:0;padding:8px 12px}.van-toast--html .van-toast__text,.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:20%}.van-toast--bottom{top:auto;bottom:20%}.van-toast__icon{font-size:36px}.van-toast__loading{padding:4px;color:#fff}.van-toast__text{margin-top:8px}"],sourceRoot:""}])},"8/NL":function(t,e,n){var i=n("enD8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("1e684932",i,!1,{})},"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.9d44a18.jpg"},CjYO:function(t,e,n){var i=n("oGfs");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("c7038d16",i,!1,{})},FsFm:function(t,e,n){"use strict";n("XmAh");var i=n("il3B"),o=(n("eqfM"),n("/QYm")),a=n("mtWM"),s=n.n(a),r=n("NYxO"),l=n("GKmE"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function d(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(o,a){try{var s=e[o](a),r=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(r).then(function(t){i("next",t)},function(t){i("throw",t)});t(r)}("next")})}}e.a={name:"login",props:{msg:String},data:function(){return{username:"",phone:"",code:"",password:"",qr_password:"",verify_title:"获取验证码",is_send:!1,ifClick:!0,time:60,re_address:""}},created:function(){this.re_address=Object(l.d)("re")},computed:c({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{userId:this.userId}}}),watch:{phone:function(t){console.log(t)},code:function(t){console.log(t)},changeData:{immediate:!0,handler:function(t){var e=this;console.log(t),t.userId>0&&setTimeout(function(){e.$router.push("/home/index")},1e3)}}},components:{},methods:{usernameValidator:function(t){return!!/^[a-zA-Z]([-_a-zA-Z0-9_]{5,14})$/.test(t)},passwordValidator:function(t){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(t)},qrPasswordValidator:function(t){return t===this.password},onSubmit:function(t){""!=this.username?""!=this.password?""!=this.qr_password?this.password===this.qr_password?this.save():Object(o.a)("两次密码输入不一致"):Object(o.a)("请再次输入密码"):Object(o.a)("请输入密码"):Object(o.a)("请输入用户名")},save:function(){var t=this;return d(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username.trim(),password:t.password.trim(),qr_password:t.qr_password.trim(),invite_address:t.re_address&&""!==t.re_address?t.re_address:""},e.next=3,s.a.post(t.apiUrl+"/Api/User/createAccount",n).then(function(){var e=d(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),!n||1e4!=n.code){e.next=6;break}t.$notify({type:"success",message:"注册成功"}),setTimeout(function(){t.$router.push("/login")},2e3),e.next=13;break;case 6:if(!n||10001!=n.code){e.next=11;break}return t.$notify({type:"warning",message:n.msg}),e.abrupt("return",!1);case 11:return t.$notify({type:"warning",message:"注册失败"}),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 3:case"end":return e.stop()}},e,t)}))()},isMobile:function(t){return!!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(t)},verifyTime:function(){var t=this;this.time>0?(this.time--,this.is_send=!0,this.verify_title=this.time+"s",this.timer=setTimeout(function(){t.verifyTime()},1e3)):(setTimeout(function(){t.ifClick=!0},1e3),this.is_send=!1,this.time=60,this.verify_title="再次发送",clearTimeout(this.timer))},sendVerify:function(){var t=this;if(this.ifClick){var e=this.phone.trim();if(""==e)return Object(o.a)("请输入手机号"),!1;if(!this.isMobile(e))return Object(o.a)("请输入有效的11位手机号码"),!1;this.ifClick=!1;var n={mobile:e,type:1};this.$post("/user/mobile/captcha",n).then(function(e){0==e.code?t.verifyTime():(setTimeout(function(){t.ifClick=!0},1e3),t.is_send=!1,t.time=60,t.verify_title="再次发送",clearTimeout(t.timer),Object(o.a)(e.msg))})}},agreement:function(){i.a.alert({messageAlign:"left",message:'欢迎您使用小a阅读。为保障您在使用小a阅读各项服务时的利益，请您仔细阅读以下条款，当您注册成功，即意味着您完全接受本协议项下的全部条款。<br><span style="font-weight:bold;">一、您的权力与义务</span><br>1.您在申请本服务过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效并注意及时更新，以便小a阅读向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制。<br>2.您同意遵守本协议，您了解本协议的内容可能会不时变更。如您不同意小a阅读对本协议所做的修改，您有权停止使用本系统，并要求小a阅读与您进行服务费结算（如有），此种情况，您需要自行备份业务数据。如您继续使用本系统，则视为您接受小a阅读对本协议做的修改。<br>3.您在使用本服务前需要注册一个帐号，您对自己使用本过程产生的账号、密码、数据等的完整性和保密性负责。因您维护不当或保密不当致使上述账号、密码、数据等丢失或泄漏所引起的一切损失和后果均由您自行承担。<br>4.您不得利用本平台制作、复制、发布，传播法律、法规和政策禁止的内容，不得利用本平台制作、复制、发布、传播干扰本平台正常运营，以及侵犯其他用户或第三方合法权益的内容。<br>5.因您违反本协议或相关的服务条款的规定，导致或产生的任何第三方向小a阅读、合作公司或关联公司主张任何索赔或要求，包括合理的律师费，若小a阅读与合作公司、关联公司赔偿后，有权向您追偿，您有义务赔偿小a阅读与合作公司、关联公司的所有损失。<br>6.小a阅读有权依合理判断对违反有关法律法规或本协议规定行为进行处罚，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此产生的一切法律责任。<br>'}).then(function(){})},privacy:function(){i.a.alert({messageAlign:"left",message:"隐私协议<br>如您有关于网络信息安全的投诉和举报，或您对本《隐私政策》、您的信息的相关事宜有任何问题、意见或建议"}).then(function(){})}}}},JKiR:function(t,e,n){var i=n("WRQf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3ca7b070",i,!1,{})},LXZA:function(t,e,n){"use strict";var i=n("o69Z"),o=n("c7sl"),a=n("CsZI"),s=n("+2ln"),r=n("pIDD"),l=Object(i.b)("toast"),c=l[0],d=l[1];e.a=c({mixins:[Object(a.a)()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,Object(o.a)(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType;return e||"success"===n||"fail"===n?t(s.a,{class:d("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(r.a,{class:d("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(i.e)(n)&&""!==n)return"html"===e?t("div",{class:d("text"),domProps:{innerHTML:n}}):t("div",{class:d("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[d([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}})},RsMb:function(t,e,n){var i=n("e8f8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("36ccf9fa",i,!1,{})},WRQf:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".van-dialog{position:fixed;top:45%;left:50%;width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){.van-dialog{width:90%}}.van-dialog__header{padding-top:26px;font-weight:500;line-height:24px;text-align:center}.van-dialog__header--isolated{padding:24px 0}.van-dialog__content--isolated{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:104px}.van-dialog__message{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-height:60vh;padding:26px 24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:8px;color:#646566}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__cancel,.van-dialog__confirm{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:48px;margin:0;border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#ee0a24}.van-dialog--round-button .van-dialog__footer{position:relative;height:auto;padding:8px 24px 16px}.van-dialog--round-button .van-dialog__message{padding-bottom:16px;color:#323233}.van-dialog--round-button .van-dialog__cancel,.van-dialog--round-button .van-dialog__confirm{height:36px}.van-dialog--round-button .van-dialog__confirm{color:#fff}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/node_modules/vant/es/dialog/index.css"],names:[],mappings:"AAAA,YAAY,eAAe,QAAQ,SAAS,YAAY,gBAAgB,eAAe,sBAAsB,mBAAmB,2CAA2C,mCAAmC,mCAAmC,2BAA2B,uBAAuB,eAAe,sDAAsD,8CAA8C,sCAAsC,uDAAuD,CAAC,yBAAyB,YAAY,SAAS,CAAC,CAAC,oBAAoB,iBAAiB,gBAAgB,iBAAiB,iBAAiB,CAAC,8BAA8B,cAAc,CAAC,+BAA+B,oBAAoB,qBAAqB,aAAa,yBAAyB,2BAA2B,mBAAmB,gBAAgB,CAAC,qBAAqB,mBAAmB,eAAe,OAAO,gBAAgB,kBAAkB,gBAAgB,eAAe,iBAAiB,qBAAqB,kBAAkB,qBAAqB,gCAAgC,CAAC,gCAAgC,gBAAgB,aAAa,CAAC,2BAA2B,eAAe,CAAC,4BAA4B,gBAAgB,CAAC,oBAAoB,oBAAoB,qBAAqB,aAAa,gBAAgB,yBAAyB,gBAAgB,CAAC,yCAAyC,mBAAmB,eAAe,OAAO,YAAY,SAAS,QAAQ,CAAC,iDAAiD,aAAa,CAAC,8CAA8C,kBAAkB,YAAY,qBAAqB,CAAC,+CAA+C,oBAAoB,aAAa,CAAC,6FAA6F,WAAW,CAAC,+CAA+C,UAAU,CAAC,yBAAyB,qDAAqD,6CAA6C,SAAS,CAAC,gCAAgC,qDAAqD,6CAA6C,SAAS,CAAC",file:"index.css",sourcesContent:[".van-dialog{position:fixed;top:45%;left:50%;width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){.van-dialog{width:90%}}.van-dialog__header{padding-top:26px;font-weight:500;line-height:24px;text-align:center}.van-dialog__header--isolated{padding:24px 0}.van-dialog__content--isolated{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:104px}.van-dialog__message{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-height:60vh;padding:26px 24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:8px;color:#646566}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__cancel,.van-dialog__confirm{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:48px;margin:0;border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#ee0a24}.van-dialog--round-button .van-dialog__footer{position:relative;height:auto;padding:8px 24px 16px}.van-dialog--round-button .van-dialog__message{padding-bottom:16px;color:#323233}.van-dialog--round-button .van-dialog__cancel,.van-dialog--round-button .van-dialog__confirm{height:36px}.van-dialog--round-button .van-dialog__confirm{color:#fff}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}"],sourceRoot:""}])},XmAh:function(t,e,n){"use strict";var i=n("nsZj"),o=(n.n(i),n("02pT")),a=(n.n(o),n("T2s0")),s=(n.n(a),n("1H7Z")),r=(n.n(s),n("hW8u")),l=(n.n(r),n("WpgC")),c=(n.n(l),n("3IMD")),d=(n.n(c),n("RsMb")),f=(n.n(d),n("CjYO")),u=(n.n(f),n("JKiR"));n.n(u)},c7sl:function(t,e,n){"use strict";e.a=function(t){t?(i||document.body.classList.add("van-toast--unclickable"),i++):--i||document.body.classList.remove("van-toast--unclickable")};var i=0},e8f8:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-goods-action-button--first{margin-left:5px;border-top-left-radius:999px;border-bottom-left-radius:999px}.van-goods-action-button--last{margin-right:5px;border-top-right-radius:999px;border-bottom-right-radius:999px}.van-goods-action-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(to right,#ffd01e,#ff8917)}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(to right,#ff6034,#ee0a24)}@media (max-width:321px){.van-goods-action-button{font-size:13px}}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/node_modules/vant/es/goods-action-button/index.css"],names:[],mappings:"AAAA,yBAAyB,mBAAmB,eAAe,OAAO,YAAY,gBAAgB,eAAe,YAAY,eAAe,CAAC,gCAAgC,gBAAgB,6BAA6B,+BAA+B,CAAC,+BAA+B,iBAAiB,8BAA8B,gCAAgC,CAAC,kCAAkC,yDAAyD,oDAAoD,CAAC,iCAAiC,yDAAyD,oDAAoD,CAAC,yBAAyB,yBAAyB,cAAc,CAAC,CAAC",file:"index.css",sourcesContent:[".van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-goods-action-button--first{margin-left:5px;border-top-left-radius:999px;border-bottom-left-radius:999px}.van-goods-action-button--last{margin-right:5px;border-top-right-radius:999px;border-bottom-right-radius:999px}.van-goods-action-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(to right,#ffd01e,#ff8917)}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(to right,#ff6034,#ee0a24)}@media (max-width:321px){.van-goods-action-button{font-size:13px}}"],sourceRoot:""}])},eh36:function(t,e,n){var i=n("6TqU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("b4f01d22",i,!1,{})},enD8:function(t,e,n){var i=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-3f580510] .bg{background-image:url("+i(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-3f580510] .van-nav-bar{background-color:transparent\n}\n.container[data-v-3f580510] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-3f580510] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-3f580510] .regist{margin-top:20px\n}\n.container[data-v-3f580510] .regist .form{width:90%;background-color:#AE8BF5;margin:0 auto;border-radius:20px\n}\n.container[data-v-3f580510] .regist .form .box{padding-top:5px\n}\n.container[data-v-3f580510] .regist .van-form{font-size:16px\n}\n.container[data-v-3f580510] .regist .title{margin-left:30px;color:#fff;font-size:20px\n}\n.container[data-v-3f580510] .regist .subtitle{font-size:12px;color:#999;margin-left:30px;margin-top:5px\n}\n.container[data-v-3f580510] .regist .li{margin-left:30px;margin-right:30px;position:relative\n}\n.container[data-v-3f580510] .regist .hint{color:#fff;padding-left:40px;margin-top:10px;font-size:13px\n}\n.container[data-v-3f580510] .regist .phone{padding-left:15px;padding-right:15px;background:#F9F9F9;border-radius:25px;width:315px\n}\n.container[data-v-3f580510] .regist .code{padding-left:15px;padding-right:15px;background:#F9F9F9;border-radius:25px;margin-top:14px;width:315px\n}\n.container[data-v-3f580510] .regist .van-cell::after{left:30px;right:30px\n}\n.container[data-v-3f580510] .regist .codeText{position:absolute;top:50%;right:10px;margin-top:-15px;font-size:13px;width:90px;text-align:center;color:#fff;background:#C0C0C0;border-radius:25px;height:30px;line-height:30px\n}\n.container[data-v-3f580510] .regist .thirdLogin{text-align:center\n}\n.container[data-v-3f580510] .regist .thirdLogin img{width:44px;margin:20px\n}\n.container[data-v-3f580510] .regist .otherLogin{font-size:12px;color:#999;margin-top:5px;text-align:center\n}\n.container[data-v-3f580510] .regist .loginButton{margin:30px auto;display:block;width:70%;height:40px;border-radius:25px;background:#C0C0C0;color:#fff;text-align:center;pointer-events:none\n}\n.container[data-v-3f580510] .regist .loginButton.disableds{background:#5394FF;pointer-events:auto\n}\n.container[data-v-3f580510] .regist .tips{position:absolute;bottom:30px;text-align:center;width:100%;color:#666\n}\n.container[data-v-3f580510] .regist .tips span{color:#5394FF\n}\n.container[data-v-3f580510] .regist .regist-button{background-color:#8C1AF5;border:0\n}\n",""])},eqfM:function(t,e,n){"use strict";var i=n("nsZj"),o=(n.n(i),n("02pT")),a=(n.n(o),n("T2s0")),s=(n.n(a),n("1H7Z")),r=(n.n(s),n("hW8u")),l=(n.n(r),n("WpgC")),c=(n.n(l),n("eh36"));n.n(c)},iiOd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("div",{staticClass:"regist"},[n("div",{staticClass:"bg-radius"}),t._v(" "),n("div",{staticClass:"title"},[t._v("用户名注册")]),t._v(" "),n("van-form",{staticClass:"form",on:{submit:t.onSubmit}},[n("div",{staticClass:"box"},[n("div",{staticClass:"hint",staticStyle:{"margin-top":"44px","margin-bottom":"10px"}},[t._v("用户名只能设置一次，不能进行修改")]),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"phone",attrs:{name:"用户名",placeholder:"请输入用户名",clearable:"",rules:[{validator:t.usernameValidator,message:"请输入正确的用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v("6-15个字符，仅可使用英文（必须）、数字、下划线")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"code",attrs:{clearable:"",center:"",type:"password",name:"密码",placeholder:"请输入密码",rules:[{validator:t.passwordValidator,message:"请输入正确的密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v("6-16位密码，同时包含字母和数字")]),t._v(" "),n("div",{staticClass:"li"},[n("van-field",{staticClass:"code",attrs:{clearable:"",center:"",type:"password",name:"密码",placeholder:"请确认密码",rules:[{validator:t.qrPasswordValidator,message:"两次输入的密码不一致"}]},model:{value:t.qr_password,callback:function(e){t.qr_password=e},expression:"qr_password"}})],1),t._v(" "),t.re_address&&""!==t.re_address?n("div",{staticClass:"hint"},[t._v("邀请地址："+t._s(t.re_address))]):t._e()]),t._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("van-button",{staticClass:"regist-button",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("注册")]),t._v(" "),n("van-row",{staticClass:"link",staticStyle:{"margin-top":"10px"}},[n("van-col",{attrs:{span:"24",align:"center"}},[n("router-link",{attrs:{to:"/login"}},[t._v("用户登录")])],1)],1)],1)])],1)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},il3B:function(t,e,n){"use strict";var i,o=n("WPoX"),a=n("7+uW"),s=n("0VhW"),r=n("o69Z");function l(t){return r.i?Promise.resolve():new Promise(function(e,n){var r;i&&(r=i.$el,document.body.contains(r))||(i&&i.$destroy(),(i=new(a.a.extend(s.a))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){i.value=t})),Object(o.a)(i,l.currentOptions,t,{resolve:e,reject:n})})}l.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){i["confirm"===t?"resolve":"reject"](t)}},l.alert=l,l.confirm=function(t){return l(Object(o.a)({showCancelButton:!0},t))},l.close=function(){i&&(i.value=!1)},l.setDefaultOptions=function(t){Object(o.a)(l.currentOptions,t)},l.resetDefaultOptions=function(){l.currentOptions=Object(o.a)({},l.defaultOptions)},l.resetDefaultOptions(),l.install=function(){a.a.use(s.a)},l.Component=s.a,a.a.prototype.$dialog=l,e.a=l},oGfs:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:content-box;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-goods-action--unfit{padding-bottom:0}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/node_modules/vant/es/goods-action/index.css"],names:[],mappings:"AAAA,kBAAkB,eAAe,QAAQ,SAAS,OAAO,oBAAoB,qBAAqB,aAAa,yBAAyB,2BAA2B,mBAAmB,uBAAuB,YAAY,gDAAgD,2CAA2C,qBAAqB,CAAC,yBAAyB,gBAAgB,CAAC",file:"index.css",sourcesContent:[".van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:content-box;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-goods-action--unfit{padding-bottom:0}"],sourceRoot:""}])},pzvz:function(t,e,n){"use strict";var i=n("o69Z"),o=n("1SJR"),a=Object(i.b)("goods-action"),s=a[0],r=a[1];e.a=s({mixins:[Object(o.b)("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){return(0,arguments[0])("div",{class:r({unfit:!this.safeAreaInsetBottom})},[this.slots()])}})},q1uG:function(t,e,n){"use strict";var i=n("WPoX"),o=n("o69Z"),a=n("n8HW"),s=n("1SJR"),r=n("SSsa"),l=Object(o.b)("goods-action-button"),c=l[0],d=l[1];e.a=c({mixins:[Object(s.a)("vanGoodsAction")],props:Object(i.a)({},a.c,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(a.b)(this.$router,this)}},render:function(){return(0,arguments[0])(r.a,{class:d([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}})},xwdy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("FsFm"),o=n("iiOd"),a=!1;var s=function(t){a||n("8/NL")},r=n("VU/8")(i.a,o.a,!1,s,"data-v-3f580510",null);r.options.__file="src/views/user/regist.vue",e.default=r.exports}});