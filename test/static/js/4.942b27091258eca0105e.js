webpackJsonp([4],{"8ThQ":function(e,t,n){e.exports=n.p+"static/img/2.45de2af.jpg"},JCUO:function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),i=n("GKmE"),o=n("NYxO"),s=n("WTx0"),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,i){try{var o=t[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}t.a={name:"",data:function(){return{active:2,avatarFileObj:"",isNameShow:!1,isNumberShow:!1,isIntroduceShow:!1,isSexShow:!1,isBirthdayShow:!1,isProfessionShow:!1,isAreaShow:!1,isLanguageShow:!1,fileList:[],fileBackgroundList:[],minDate:new Date(100,0,1),maxDate:new Date(3e3,10,1),currentDate:new Date(2022,0,1),avatar:"",nickname:"",showBirthdayPicker:!1,LanguageActions:[{name:"中文",label:"zh"},{name:"English",label:"en"}],isconfirm:!0,language:"zh",usdt_balance:0,h2o_balance:0}},created:function(){var e;(e=localStorage.getItem("i18nextLng"))&&void 0!==e&&(this.language=e)},computed:c({},Object(o.c)({address:function(e){return e.base.address},isConnected:function(e){return e.base.isConnected},apiUrl:function(e){return e.base.apiUrl},isMobel:function(e){return e.comps.isMobel}}),{changeData:function(){return{address:this.address,apiUrl:this.apiUrl}}}),watch:{changeData:{immediate:!0,handler:function(e){e.address&&this.getUserInfo()}}},components:{},mounted:function(){},methods:{getUserInfo:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get(e.apiUrl+"/Api/User/getUserInfo",{params:{address:e.address}}).then(function(){var t=d(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&1e4==n.code?(console.log(n.data),e.nickname=n.data.nickname,e.avatar=n.data.avatar,e.usdt_balance=Number(n.data.local_balance)+Number(n.data.wallet_balance),e.h2o_balance=Number(n.data.h2o_local_balance)+Number(n.data.h2o_wallet_balance),n.data.avatar&&""!==n.data.avatar&&(e.fileList[0]={url:n.data.avatar},e.$forceUpdate())):e.$message({type:"warning",message:"Error"}),t.abrupt("return");case 2:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){e.$message({type:"warning",message:t})});case 2:case"end":return t.stop()}},t,e)}))()},afterReadUpload:function(e){var t=this;return d(regeneratorRuntime.mark(function n(){var a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=13;break}return e.status="uploading",e.message="上传中...",n.next=5,t.ImageCompressionProcessing(e.file);case 5:if(!(a=n.sent)){n.next=13;break}return(i=new FormData).append("file",a),i.append("images_key","avatar"),i.append("address",t.address),n.next=13,r.a.post(t.apiUrl+"/Api/User/saveUserInfo",i).then(function(){var n=d(regeneratorRuntime.mark(function n(a){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!a||1e4!=a.code){n.next=5;break}return e.status="done",e.message="上传成功",n.next=5,t.getUserInfo();case 5:case"end":return n.stop()}},n,t)}));return function(e){return n.apply(this,arguments)}}()).catch(function(n){e.status="failed",e.message="上传失败",t.$message({type:"warning",message:n})});case 13:case"end":return n.stop()}},n,t)}))()},ImageCompressionProcessing:function(e){var t=this;return d(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(){var n=d(regeneratorRuntime.mark(function n(a,r){var o,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.i)(e);case 2:o=n.sent,s=new FileReader,o&&(s.readAsDataURL(o),s.onerror=function(e){t.$message({type:"warning",message:"压缩图片读取图片异常...."}),console.log("压缩图片读取图片异常....",e),a(!1)},s.onload=function(e){a(o)});case 5:case"end":return n.stop()}},n,t)}));return function(e,t){return n.apply(this,arguments)}}()));case 1:case"end":return n.stop()}},n,t)}))()},saveAvator:function(){this.$refs.avatarRef.chooseFile()},onClickSure:function(){this.isNameShow=!1},onClickSave:function(){this.$router.go(-1)},onClickSaveUserInfo:function(e,t){var n=this;return d(regeneratorRuntime.mark(function a(){var i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=u({address:n.address},e,t),a.next=3,r.a.post(n.apiUrl+"/Api/User/saveUserInfo",i).then(function(){var e=d(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&1e4==t.code?(n.isNameShow=!1,n.isIntroduceShow=!1,n.isSexShow=!1,n.isBirthdayShow=!1):n.$message({type:"warning",message:"Error"}),e.abrupt("return");case 2:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){n.$message({type:"warning",message:e})});case 3:case"end":return a.stop()}},a,n)}))()},onConfirm:function(e){this.birthday=this.timeFormat(e),this.showBirthdayPicker=!1},addressStr:function(){return this.address&&void 0!=this.address&&""!=this.address?this.address.substring(0,4)+"***"+this.address.substring(this.address.length-3):"Connect Wallet"},connectWalletClick:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!=window.ethereum){t.next=3;break}return e.$message({type:"warning",message:"You do not have metamask installed"}),t.abrupt("return",!1);case 3:if(e.address&&void 0!=e.address&&""!=e.address){t.next=8;break}return t.next=6,Object(s.c)();case 6:t.next=10;break;case 8:return t.next=10,Object(s.b)();case 10:case"end":return t.stop()}},t,e)}))()},languageClick:function(e){this.language=e.label,this.$i18n.i18next.changeLanguage(e.label)},getUsdtDepositWithdraw:function(){this.$router.push("/usdt")},getH2ODepositWithdraw:function(){this.$router.push("/h2o")}}}},Mgjd:function(e,t,n){var a=n("kxFB");(e.exports=n("FZ+f")(!1)).push([e.i,"\n.container[data-v-4498f7b0] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-4498f7b0] .van-nav-bar{background-color:transparent\n}\n.container[data-v-4498f7b0] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-4498f7b0] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-4498f7b0] .box{width:90%;height:80vh;margin:0 auto;background-color:#fff;margin-top:30px;border-radius:30px\n}\n.container[data-v-4498f7b0] .box .content{padding:16px 16px 160px\n}\n.container[data-v-4498f7b0] .box .van-popup--bottom.van-popup--round{height:100vh\n}\n.container[data-v-4498f7b0] .box .van-action-sheet{max-height:100%\n}\n.container[data-v-4498f7b0] .box .avator{padding:20px;text-align:center\n}\n.container[data-v-4498f7b0] .box .avator .preview{width:100px;height:100px;border-radius:50px\n}\n.container[data-v-4498f7b0] .box .avator .upload-icon{color:#dcdee0;font-size:24px;top:50%;left:50%;margin-top:-12px;margin-left:-12px;position:absolute\n}\n.container[data-v-4498f7b0] .box .avator .uploader{display:flex;width:100px;height:100px;border-radius:100%;margin:0 auto;background-color:#f7f8fa\n}\n.container[data-v-4498f7b0] .box .avator .uploader .van-uploader__upload{width:100px;height:100px\n}\n.container[data-v-4498f7b0] .box .avator .uploader .van-uploader__preview-image{width:100px;height:100px\n}\n.container[data-v-4498f7b0] .box .avator .uploader .van-uploader__input-wrapper{position:unset\n}\n.container[data-v-4498f7b0] .box .avator .photograph{position:relative;margin:0 auto;width:20px;height:20px;background-color:black;border-radius:100%;left:35px;font-size:20px;bottom:20px\n}\n.container[data-v-4498f7b0] .box .avator .photograph img{width:15px;height:15px;margin-bottom:2px\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-cell--clickable{height:50px;line-height:30px;vertical-align:middle\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-popup{background-color:#F6F6F6\n}\n.container[data-v-4498f7b0] .box .item .item-index .hint{color:#969799;padding-left:15px\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-cell__left-icon,.container[data-v-4498f7b0] .box .item .item-index .van-cell__right-icon{line-height:30px\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-sheet .van-cell,.container[data-v-4498f7b0] .box .item .item-index .van-sheet .van-picker{width:95%;border-radius:15px;margin:0 auto\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-sheet .van-cell-group{margin:10px;border-radius:15px\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-sheet .van-cell-group .van-cell{border-radius:15px\n}\n.container[data-v-4498f7b0] .box .item .item-index .van-language-sheet{height:auto !important\n}\n.container[data-v-4498f7b0] .box .item .item-index .background-classname{height:100px;line-height:80px\n}\n.container[data-v-4498f7b0] .box .item .item-index .background-classname .van-cell__right-icon{line-height:80px\n}\n.container[data-v-4498f7b0] .box .item .item-index .background-classname .van-uploader__mask-message{margin-top:0 !important;line-height:unset !important\n}\n",""])},ZOuW:function(e,t,n){var a=n("Mgjd");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("21d69264",a,!1,{})},md3T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("JCUO"),r=n("vJwo"),i=!1;var o=function(e){i||n("ZOuW")},s=n("VU/8")(a.a,r.a,!1,o,"data-v-4498f7b0",null);s.options.__file="src/views/user/index.vue",t.default=s.exports},vJwo:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:e.isMobel?"100% 100%":""}}),e._v(" "),n("van-nav-bar",{attrs:{title:e.$t("question:setUp"),"left-text":"","right-text":"","left-arrow":""},on:{"click-left":e.onClickSave}}),e._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"avator"},[n("van-uploader",{ref:"avatarRef",staticClass:"uploader",attrs:{accept:"image/*",deletable:!0,"max-count":"1","after-read":e.afterReadUpload,"preview-full-image":!1},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:walletAddress")},on:{click:function(t){return e.connectWalletClick()}}},[n("div",[e._v(e._s(e.addressStr()))])])],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:"USDT余额"},on:{click:function(t){return e.getUsdtDepositWithdraw()}}},[n("div",[e._v(e._s(e.toFixed(e.usdt_balance,4))+" USDT")])])],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:"H2O余额"},on:{click:function(t){return e.getH2ODepositWithdraw()}}},[n("div",[e._v(e._s(e.toFixed(e.h2o_balance,4))+" H2O")])])],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:nickname")},on:{click:function(t){e.isNameShow=!0}}},[n("div",[e._v(e._s(e.nickname?e.nickname:e.$t("question:enterName")))])]),e._v(" "),n("van-action-sheet",{staticClass:"van-sheet",attrs:{title:"","close-on-click-action":""},model:{value:e.isNameShow,callback:function(t){e.isNameShow=t},expression:"isNameShow"}},[n("van-nav-bar",{attrs:{title:e.$t("question:editName"),"left-text":e.$t("question:Cancel"),"right-text":e.$t("question:Save")},on:{"click-left":function(t){e.isNameShow=!1},"click-right":function(t){return e.onClickSaveUserInfo("nickname",e.nickname)}}}),e._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"",placeholder:e.$t("question:addName")},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1),e._v(" "),n("span",{staticClass:"hint"},[e._v(e._s(e.$t("question:editNamePlease")))])],1)],1),e._v(" "),n("div",{staticClass:"item-index"},[n("van-cell",{attrs:{"is-link":"",title:e.$t("question:language")},on:{click:function(t){e.isLanguageShow=!0}}},["zh"===e.language?n("div",[e._v("中文")]):n("div",[e._v("English")])]),e._v(" "),n("van-action-sheet",{staticClass:"van-language-sheet",attrs:{actions:e.LanguageActions,"cancel-text":e.$t("question:Cancel"),"close-on-click-action":""},on:{select:e.languageClick},model:{value:e.isLanguageShow,callback:function(t){e.isLanguageShow=t},expression:"isLanguageShow"}})],1)])])],1)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};t.a=r}});