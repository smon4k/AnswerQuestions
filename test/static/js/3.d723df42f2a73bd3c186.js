webpackJsonp([3],{"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.45de2af.jpg"},JHeQ:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return d}),n.d(e,"c",function(){return p});var a=n("GKmE"),r=n("yePN"),o=n.n(r),i=n("vPne"),s=n.n(i),c=n("cx+2");function u(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,o){try{var i=e[r](o),s=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}var l=function(t,e,n,r){var i=this,s=__ownInstance__.$store.state.base.address,c=n&&r?web3.utils.toHex(Object(a.g)(n,r)):web3.utils.toHex(Object(a.h)(1.157920892373163*Math.pow(10,59))),l=new web3.eth.Contract(o.a,t),d=e||__ownInstance__.$store.state.base.bankAddress,p=l.methods.approve(d,c).encodeABI(),m=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:m}),new Promise(function(e,n){var a,r=void 0;web3.eth.getTransactionCount(s).then((a=u(regeneratorRuntime.mark(function a(o){var c,u,l,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return c=a.sent,u={from:s,to:t,data:p},a.next=6,web3.eth.estimateGas(u);case 6:l=a.sent,d=[{chainId:__ownInstance__.$store.state.base.chainId,nonce:web3.utils.toHex(o),gasLimit:web3.utils.toHex(l),gasPrice:web3.utils.toHex(c),to:t,from:s,data:p}],web3.eth.sendTransaction(d[0]).on("transactionHash",function(t){console.log("hash",t),t&&(r=t)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:1,hash:r}),e(r)}).on("confirmation",function(t,e){}).on("error",function(t){var e=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:2,isUserDeny:e,hash:r}),console.log("err",t),n(t)});case 9:case"end":return a.stop()}},a,i)})),function(t){return a.apply(this,arguments)}))})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18,o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],__ownInstance__.$store.state.base.address),d=n||__ownInstance__.$store.state.base.gamesFillingAddress,p=new web3.eth.Contract(s.a,d),m=Object(a.g)(t,r),f=p.methods.BuyTokenTogToken(m,e).encodeABI(),v=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:v}),new Promise(function(t,e){var n,a=void 0;web3.eth.getTransactionCount(l).then((n=u(regeneratorRuntime.mark(function n(r){var s,p,m;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return s=n.sent,n.next=5,web3.eth.estimateGas({from:l,to:d,data:f});case 5:p=n.sent,console.log("estimateGas",p),m=[{from:l,to:d,data:f,gasPrice:web3.utils.toHex(s),gas:web3.utils.toHex(p)}],web3.eth.sendTransaction(m[0]).on("transactionHash",function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("hash",e),!e){t.next=6;break}return a=e,i.hash=e,t.next=6,Object(c.i)(i);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).on("receipt",function(e){__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:1,hash:a}),t(a)}).on("confirmation",function(t,e){}).on("error",function(t){var n=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,isUserDeny:n,hash:a}),console.log("err",t),e(t)});case 9:case"end":return n.stop()}},n,o)})),function(t){return n.apply(this,arguments)})).catch(function(t){console.log("receiveAirdrop_err",t),__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,hash:a}),e(t)})})},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18,o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],__ownInstance__.$store.state.base.address),d=n||__ownInstance__.$store.state.base.gamesFillingAddress,p=new web3.eth.Contract(s.a,d),m=Object(a.g)(t,r),f=p.methods.gTokenToBuyToken(m,e).encodeABI(),v=Object(a.g)("0",r),h=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:h}),new Promise(function(t,e){var n,a=void 0;web3.eth.getTransactionCount(l).then((n=u(regeneratorRuntime.mark(function n(r){var s,p,m;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return s=n.sent,n.next=5,web3.eth.estimateGas({from:l,to:d,data:f,value:web3.utils.toHex(v)});case 5:p=n.sent,console.log("estimateGas",p),(m=[{from:l,to:d,data:f,gasPrice:web3.utils.toHex(s),gas:web3.utils.toHex(p)}])[0].value=web3.utils.toHex(v),web3.eth.sendTransaction(m[0]).on("transactionHash",function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("hash",e),!e){t.next=6;break}return a=e,i.hash=e,t.next=6,Object(c.i)(i);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).on("receipt",function(e){__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:1,hash:a}),t(a)}).on("confirmation",function(t,e){}).on("error",function(t){var n=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,isUserDeny:n,hash:a}),console.log("err",t),e(t)});case 10:case"end":return n.stop()}},n,o)})),function(t){return n.apply(this,arguments)})).catch(function(t){console.log("receiveAirdrop_err",t),__ownInstance__.$store.dispatch("changeTradeStatus",{id:h,val:2,hash:a}),e(t)})})}},Q0vj:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("van-nav-bar",{attrs:{title:"H2O充提","left-text":"","right-text":"","left-arrow":""},on:{"click-left":t.onClickSave}}),t._v(" "),n("van-row",{staticClass:"container",staticStyle:{"margin-top":"20px"}},[n("van-col",{attrs:{span:24}},[n("van-tabs",{attrs:{stretch:!0},on:{click:t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("van-tab",{attrs:{title:"存入",name:"1",disabled:t.trading}},[n("van-row",{staticClass:"balance"},[n("van-col",{attrs:{span:24}},[n("div",[n("span",[t._v("平台余额："+t._s(t.keepDecimalNotRounding(Number(t.localBalance)+Number(t.walletBalance),4))+" H2O")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("钱包余额："+t._s(t.toFixed(Number(t.H2OBalance),4))+" H2O")])])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:24}},[n("van-form",{ref:"depositForm"},[n("van-field",{attrs:{type:"number",label:"H2O:",placeholder:"请输入充值金额",onkeypress:"return(/[\\d]/.test(String.fromCharCode(event.keyCode)))",rules:[{validator:t.checkDepositAmount,message:""}],"label-width":"50"},model:{value:t.depositForm.amount,callback:function(e){t.$set(t.depositForm,"amount",e)},expression:"depositForm.amount"}}),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(100)}}},[t._v("100")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(200)}}},[t._v("200")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(500)}}},[t._v("500")])],1)],1),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(1e3)}}},[t._v("1000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(2e3)}}},[t._v("2000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(5e4)}}},[t._v("50000")])],1)],1),t._v(" "),n("div",{staticClass:"submit-name"},[t.approve?n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading||t.isStatus||t.isWithdraw},on:{click:function(e){return t.submitForm("depositForm")}}},[t._v("存入")]):n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading},on:{click:t.startApprove}},[t._v("批准")])],1)],1)],1)],1)],1),t._v(" "),n("van-tab",{attrs:{title:"提取",name:"2",disabled:t.trading}},[n("van-row",{staticClass:"balance"},[n("van-col",{attrs:{span:24}},[n("div",[n("span",[t._v("平台余额："+t._s(t.toFixed(Number(t.localBalance)+Number(t.walletBalance),4))+" H2O")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("钱包余额："+t._s(t.toFixed(Number(t.H2OBalance),4))+" H2O")])])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:24}},[n("van-form",{ref:"withdrawForm"},[n("van-field",{attrs:{label:"H2O:",type:"number",placeholder:"请输入金额",min:"0",max:t.maxWithdrawableBalance(),onkeypress:"return(/[\\d]/.test(String.fromCharCode(event.keyCode)))",rules:[{validator:t.checkWithdrawalAmount,message:""}],"label-width":"50"},model:{value:t.withdrawForm.amount,callback:function(e){t.$set(t.withdrawForm,"amount",e)},expression:"withdrawForm.amount"}}),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(100)}}},[t._v("100")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(200)}}},[t._v("200")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(500)}}},[t._v("500")])],1)],1),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(1e3)}}},[t._v("1000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(2e3)}}},[t._v("2000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(5e4)}}},[t._v("50000")])],1)],1),t._v(" "),n("div",{staticClass:"submit-name"},[t.approve?n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading||t.isStatus||t.isGame||t.isWithdraw},on:{click:function(e){return t.submitForm("withdrawForm")}}},[t._v("提取")]):n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading},on:{click:t.startApprove}},[t._v("批准")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("van-overlay",{attrs:{show:t.trading}},[n("div",{staticClass:"wrapper"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1)]),t._v(" "),n("van-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.selectCurrencyShow,callback:function(e){t.selectCurrencyShow=e},expression:"selectCurrencyShow"}})],1)};a._withStripped=!0;var r={render:a,staticRenderFns:[]};e.a=r},W3H0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("w0q5"),r=n("Q0vj"),o=!1;var i=function(t){o||n("a2Vs")},s=n("VU/8")(a.a,r.a,!1,i,"data-v-3884d89f",null);s.options.__file="src/views/depositWithdrawal/h2o.vue",e.default=s.exports},Xxnf:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-3884d89f] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-3884d89f] .van-nav-bar{background-color:transparent\n}\n.container[data-v-3884d89f] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-3884d89f] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-3884d89f] div{min-height:0\n}\n.container[data-v-3884d89f] input[type=number]{-moz-appearance:textfield\n}\n.container[data-v-3884d89f] input[type=number]::-webkit-inner-spin-button,.container[data-v-3884d89f] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0\n}\n.container[data-v-3884d89f] .container{border-radius:20px !important;background-color:#F6F6F6 !important;width:80%;height:50vh;padding:20px;text-align:center;margin:0 auto\n}\n.container[data-v-3884d89f] .container .van-form{margin-top:15px\n}\n.container[data-v-3884d89f] .container .van-tabs__item{height:60px;line-height:60px;font-size:20px;font-weight:800\n}\n.container[data-v-3884d89f] .container .van-tabs__item.is-active{color:#409EFF\n}\n.container[data-v-3884d89f] .container .van-loading-spinner{margin-top:-11px\n}\n.container[data-v-3884d89f] .container .van-loading-spinner .circular{width:20px;height:20px\n}\n.container[data-v-3884d89f] .container .van-form-item__label{color:#fff\n}\n.container[data-v-3884d89f] .container .van-field{font-size:16px\n}\n.container[data-v-3884d89f] .container .van-field .van-field__label{width:50px;margin-right:0\n}\n.container[data-v-3884d89f] .container .van-input__inner{background-color:#333257;border:1px solid #333257;padding:0;height:50px;line-height:50px;font-size:16px\n}\n.container[data-v-3884d89f] .container .van-input-group__append button.van-button{color:#409EFF\n}\n.container[data-v-3884d89f] .container .van-input-group__append,.container[data-v-3884d89f] .container .van-input-group__prepend{background-color:#333257;color:#fff;border:1px solid #333257\n}\n.container[data-v-3884d89f] .container .balance{text-align:left;height:30px;line-height:30px\n}\n.container[data-v-3884d89f] .container .van-button{border-radius:30px;width:100px;border:0\n}\n.container[data-v-3884d89f] .container .button-amount{line-height:50px\n}\n.container[data-v-3884d89f] .container .button-amount .van-button--primary.is-plain{background:#8481e0;color:#fff\n}\n.container[data-v-3884d89f] .container .button-amount .van-button{border-radius:5px\n}\n.container[data-v-3884d89f] .container .button-amount .van-button::after{background-color:#409EFF !important\n}\n.container[data-v-3884d89f] .container .button-amount .van-button:focus,.container[data-v-3884d89f] .container .button-amount .van-button:hover{background-color:#ff976a !important;color:#fff\n}\n.container[data-v-3884d89f] .container .submit-name{margin-top:20px\n}\n.container[data-v-3884d89f] .container .submit-name .van-button--primary{width:200px;border-radius:5px;background-color:#ff976a;border:0\n}\n.container[data-v-3884d89f] .container .submit-name .van-button--primary.is-disabled{background:#c8c9cc;color:#fff\n}\n.container[data-v-3884d89f] .container .submit-name .van-loading-mask{border-radius:5px;background-color:rgba(0,0,0,0.8);border:0\n}\n.container[data-v-3884d89f] .wrapper{display:flex;align-items:center;justify-content:center;height:100%\n}\n",""])},a2Vs:function(t,e,n){var a=n("Xxnf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("8671be70",a,!1,{})},w0q5:function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),o=n("NYxO"),i=n("JHeQ"),s=n("cx+2"),c=n("GKmE"),u=n("QKB9"),l=n.n(u),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,o){try{var i=e[r](o),s=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.a={name:"Index",data:function(){return{activeName:"1",localBalance:0,walletBalance:0,isStatus:!1,isGame:!1,isGameInfoNum:0,isWithdraw:!1,approve:!1,trading:!1,buttonAmountNum:0,H2OBalance:0,depositForm:{amount:""},withdrawForm:{amount:""},balanceTimeInterval:null,refreshTime:5e3,actions:[{name:"H2O"},{name:"USDT"}],selectCurrencyShow:!1,currencyName:"H2O"}},activated:function(){this.refreshData()},beforeRouteLeave:function(t,e,n){this.balanceTimeInterval&&(clearInterval(this.balanceTimeInterval),this.balanceTimeInterval=null),n()},created:function(){},watch:{isConnected:{immediate:!0,handler:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t&&e.approve;case 1:case"end":return n.stop()}},n,e)}))()}},changeData:{immediate:!0,handler:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.address){n.next=7;break}return n.next=3,e.getIsApprove();case 3:return n.next=5,e.getUserInfo();case 5:return n.next=7,e.refreshData();case 7:case"end":return n.stop()}},n,e)}))()}}},computed:d({},Object(o.c)({isConnected:function(t){return t.base.isConnected},address:function(t){return t.base.address},gamesFillingAddress:function(t){return t.base.h2oFillingAddress},apiUrl:function(t){return t.base.apiUrl},userId:function(t){return t.base.userId},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{apiUrl:this.apiUrl,address:this.address}}}),methods:{checkDepositAmount:function(t){if(!t)return!1;var e=this.H2OBalance;return!(Number(t)>e)},checkWithdrawalAmount:function(t){if(console.log(t),!t)return!1;var e=this.maxWithdrawableBalance();return!(Number(t)>e)},pageSwitchChange:function(t,e){!1===e?(this.refreshData(),this.getUserInfo()):this.balanceTimeInterval&&(clearInterval(this.balanceTimeInterval),this.balanceTimeInterval=null)},refreshData:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.timeInterval=setInterval(p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(18,t.gamesFillingAddress);case 2:return t.walletBalance=e.sent,e.next=5,Object(s.a)(l.a.H2O,18);case 5:t.H2OBalance=e.sent;case 6:case"end":return e.stop()}},e,t)})),t.refreshTime);case 1:case"end":return e.stop()}},e,t)}))()},maxWithdrawableBalance:function(){return Number(this.walletBalance)+Number(this.localBalance)},handleClick:function(t,e){var n=this;return p(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.depositForm.amount="",n.withdrawForm.amount="";case 2:case"end":return t.stop()}},t,n)}))()},getIsApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(l.a.H2O,18);case 2:n=e.sent,console.log("H2O balance",n),t.tokenBalance=n,Object(s.f)(l.a.H2O,18,n,t.gamesFillingAddress).then(function(e){console.log("isApprove",e),t.approve=!!e});case 6:case"end":return e.stop()}},e,t)}))()},startApprove:function(){var t=this;this.trading=!0,Object(i.a)(l.a.H2O,this.gamesFillingAddress).then(function(e){e&&(t.approve=!0,t.trading=!1)}).finally(function(){t.trading=!1})},submitForm:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].validate().then(p(regeneratorRuntime.mark(function t(){var n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.trading){t.next=23;break}return e.trading=!0,n=0,a="",t.next=6,e.getIsInTradeProgress();case 6:if(1!=e.isStatus&&!e.isWithdraw){t.next=9;break}return e.trading=!1,t.abrupt("return",!1);case 9:if(1!=e.activeName){t.next=14;break}n=e.depositForm.amount,a=i.b,t.next=19;break;case 14:if(!e.isGame){t.next=17;break}return e.trading=!1,t.abrupt("return",!1);case 17:n=e.withdrawForm.amount,a=i.c;case 19:r={amount:Number(n),address:e.address,userId:e.userId,type:Number(e.activeName),h2o_local_balance:e.localBalance,h2o_wallet_balance:e.walletBalance,hash:"",currency:"h2o"},a(n,l.a.H2O,e.gamesFillingAddress,18,r,2).then(function(){var t=p(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}if(1!=e.activeName){t.next=7;break}return Object(s.g)(0,!0,"h20"),t.next=5,e.getGameFillingBalanceFun(e.activeName,n);case 5:t.next=10;break;case 7:Object(s.g)(0,!1,"h20"),e.resetForm("depositForm"),e.resetForm("withdrawForm");case 10:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).finally(function(){e.trading=!1}),t.next=25;break;case 23:return console.log("error submit!!"),t.abrupt("return",!1);case 25:case"end":return t.stop()}},t,e)}))).catch(function(t){return console.log("error submit!!"),!1});case 1:case"end":return n.stop()}},n,e)}))()},setDepositWithdraw:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return p(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.post(e.apiUrl+"/Api/Depositwithdrawal/depositWithdraw",{amount:Number(t),address:e.address,userId:e.userId,type:Number(e.activeName),local_balance:e.localBalance,wallet_balance:e.walletBalance,currency:"h2o",hash:n}).then(function(t){t&&1e4==t.code?(e.getUserInfo(!0),1==e.activeName?Object(s.g)(0,!0,"h2o"):Object(s.g)(0,!1,"h2o"),e.trading=!1,e.$notify({type:"success",message:1==e.activeName?"存款成功":"提取成功"})):(e.trading=!1,e.$notify({type:"danger",message:error}))}).catch(function(t){console.log(t),e.$notify({type:"danger",message:t})});case 2:case"end":return a.stop()}},a,e)}))()},getGameFillingBalanceFun:function(t,e){var n=this;return p(regeneratorRuntime.mark(function a(){var r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:r=setInterval(p(regeneratorRuntime.mark(function a(){var o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getTransactionReceipt(e);case 2:if(o=a.sent,console.log(o),!o||!o.status){a.next=11;break}return a.next=7,Object(s.h)(t,2,!0,"h2o");case 7:n.trading=!1,n.isWithdraw=!1,n.isStatus=!1,clearInterval(r);case 11:case"end":return a.stop()}},a,n)})),3e3);case 1:case"end":return a.stop()}},a,n)}))()},timeWithdrawStatus:function(t){var e=this,n=setInterval(p(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,Object(s.c)(t);case 3:a.sent&&(clearInterval(n),Object(s.g)(0,!0,"h2o"),setTimeout(p(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.b)(18,e.gamesFillingAddress);case 2:e.walletBalance=t.sent,e.isWithdraw=!1,e.isStatus=!1;case 5:case"end":return t.stop()}},t,e)})),1e4));case 5:case"end":return a.stop()}},a,e)})),5e3)},resetForm:function(t){this.$refs[t].resetFields(),this.trading=!1},allBlanceFun:function(){return(this.localBalance>0||this.walletBalance>0)&&(this.withdrawForm.amount=Number(this.localBalance)+Number(this.walletBalance),!0)},allWalletBlanceFun:function(){return this.H2OBalance>0&&(this.depositForm.amount=Math.trunc(this.usdtBalance),!0)},getUserInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getFillingRecordUserInfo",{params:{address:t.address}}).then(function(){var n=p(regeneratorRuntime.mark(function n(a){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(a),1e4!=a.code){n.next=20;break}return t.localBalance=Object(c.e)(a.data.h2o_local_balance,4,!0),t.isGame=a.data.isGame,!e&&a.data.isGame&&t.$notify({showClose:!0,message:"正在打赏中，无法进行操作",type:"warning"}),console.log("是否打赏中：",t.isGame),n.next=8,Object(s.b)(18,t.gamesFillingAddress);case 8:return t.walletBalance=n.sent,console.log("链上余额：",t.walletBalance),t.isStatus=1==a.data.dw_status,t.isWithdraw=a.data.isDeWith,console.log("是否充提中：",t.isStatus,t.isWithdraw),(1==a.data.dw_status||a.data.isDeWith)&&(e||t.$notify({showClose:!0,message:"有一笔交易正在进行，无法进行存取款操作",type:"warning"}),a.data.isDeWith>0&&(1==a.data.isDeWithType?t.getGameFillingBalanceFun(a.data.isDeWithStatusId,a.data.isDeWithHash):t.timeWithdrawStatus(a.data.isDeWithStatusId))),n.next=16,Object(s.a)(l.a.H2O,18);case 16:t.H2OBalance=n.sent,console.log("H2O 余额：",t.H2OBalance),n.next=21;break;case 20:console.log("get Data error");case 21:case"end":return n.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}()).catch(function(e){console.log(e),t.$notify({type:"danger",message:e})});case 1:case"end":return n.stop()}},n,t)}))()},getIsInTheGame:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getIsGameOrNot",{params:{address:t.address}}).then(function(){var e=p(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1e4!=n.code){e.next=12;break}if(t.isGame=n.data,!n.data){e.next=8;break}return t.isGameInfoNum++,t.isGameInfoNum<=3&&t.$notify({showClose:!0,message:"The game is in progress and the operation cannot be retrieved",type:"warning"}),e.abrupt("return",!1);case 8:return t.isGameInfoNum=0,e.abrupt("return",!0);case 10:e.next=13;break;case 12:console.log("get Data error");case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 2:case"end":return e.stop()}},e,t)}))()},getIsInTradeProgress:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getIsInTradeProgress",{params:{address:t.address,userId:t.userId}}).then(function(){var e=p(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),1e4!=n.code){e.next=12;break}if(t.isStatus=n.data.status,t.isWithdraw=n.data.isWithdraw,1!=n.data.status&&!n.data.isWithdraw){e.next=9;break}return t.$notify({showClose:!0,message:"有一笔交易正在进行，无法进行存取款操作",type:"warning"}),e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:e.next=13;break;case 12:console.log("get Data error");case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 2:case"end":return e.stop()}},e,t)}))()},buttonAmount:function(t){t&&(1==this.activeName?this.depositForm.amount=t:this.withdrawForm.amount=t)},onClickSave:function(){this.$router.go(-1)},selectCurrencyClick:function(){this.selectCurrencyShow=!0},onSelect:function(t){this.currencyName=t.name,this.depositForm.amount="",this.withdrawForm.amount="",this.selectCurrencyShow=!1}}}}});