webpackJsonp([11],{JHeQ:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return d}),n.d(e,"c",function(){return f});var a=n("GKmE"),r=n("yePN"),o=n.n(r),i=n("vPne"),c=n.n(i),s=n("cx+2");function u(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,o){try{var i=e[r](o),c=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}("next")})}}var l=function(t,e,n,r){var i=this,c=__ownInstance__.$store.state.base.address,s=n&&r?web3.utils.toHex(Object(a.l)(n,r)):web3.utils.toHex(Object(a.m)(1.157920892373163*Math.pow(10,59))),l=new web3.eth.Contract(o.a,t),d=e||__ownInstance__.$store.state.base.bankAddress,f=l.methods.approve(d,s).encodeABI(),p=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:p}),new Promise(function(e,n){var a,r=void 0;web3.eth.getTransactionCount(c).then((a=u(regeneratorRuntime.mark(function a(o){var s,u,l,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getGasPrice();case 2:return s=a.sent,u={from:c,to:t,data:f},a.next=6,web3.eth.estimateGas(u);case 6:l=a.sent,d=[{chainId:__ownInstance__.$store.state.base.chainId,nonce:web3.utils.toHex(o),gasLimit:web3.utils.toHex(l),gasPrice:web3.utils.toHex(s),to:t,from:c,data:f}],web3.eth.sendTransaction(d[0]).on("transactionHash",function(t){console.log("hash",t),t&&(r=t)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:p,val:1,hash:r}),e(r)}).on("confirmation",function(t,e){}).on("error",function(t){var e=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:p,val:2,isUserDeny:e,hash:r}),console.log("err",t),n(t)});case 9:case"end":return a.stop()}},a,i)})),function(t){return a.apply(this,arguments)}))})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18,o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],__ownInstance__.$store.state.base.address),d=n||__ownInstance__.$store.state.base.gamesFillingAddress,f=new web3.eth.Contract(c.a,d),p=Object(a.l)(t,r),v=f.methods.BuyTokenTogToken(p,e).encodeABI(),A=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:A}),new Promise(function(t,e){var n,a=void 0;web3.eth.getTransactionCount(l).then((n=u(regeneratorRuntime.mark(function n(r){var c,f,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return c=n.sent,n.next=5,web3.eth.estimateGas({from:l,to:d,data:v});case 5:f=n.sent,console.log("estimateGas",f),p=[{from:l,to:d,data:v,gasPrice:web3.utils.toHex(c),gas:web3.utils.toHex(f)}],web3.eth.sendTransaction(p[0]).on("transactionHash",function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("hash",e),!e){t.next=6;break}return a=e,i.hash=e,t.next=6,Object(s.k)(i);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).on("receipt",function(e){__ownInstance__.$store.dispatch("changeTradeStatus",{id:A,val:1,hash:a}),t(a)}).on("confirmation",function(t,e){}).on("error",function(t){var n=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:A,val:2,isUserDeny:n,hash:a}),console.log("err",t),e(t)});case 9:case"end":return n.stop()}},n,o)})),function(t){return n.apply(this,arguments)})).catch(function(t){console.log("receiveAirdrop_err",t),__ownInstance__.$store.dispatch("changeTradeStatus",{id:A,val:2,hash:a}),e(t)})})},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:18,o=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],__ownInstance__.$store.state.base.address),d=n||__ownInstance__.$store.state.base.gamesFillingAddress,f=new web3.eth.Contract(c.a,d),p=Object(a.l)(t,r),v=f.methods.gTokenToBuyToken(p,e).encodeABI(),A=Object(a.l)("0",r),m=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:m}),new Promise(function(t,e){var n,a=void 0;web3.eth.getTransactionCount(l).then((n=u(regeneratorRuntime.mark(function n(r){var c,f,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return c=n.sent,n.next=5,web3.eth.estimateGas({from:l,to:d,data:v,value:web3.utils.toHex(A)});case 5:f=n.sent,console.log("estimateGas",f),(p=[{from:l,to:d,data:v,gasPrice:web3.utils.toHex(c),gas:web3.utils.toHex(f)}])[0].value=web3.utils.toHex(A),web3.eth.sendTransaction(p[0]).on("transactionHash",function(){var t=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("hash",e),!e){t.next=6;break}return a=e,i.hash=e,t.next=6,Object(s.k)(i);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).on("receipt",function(e){__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:1,hash:a}),t(a)}).on("confirmation",function(t,e){}).on("error",function(t){var n=4001===t.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:2,isUserDeny:n,hash:a}),console.log("err",t),e(t)});case 10:case"end":return n.stop()}},n,o)})),function(t){return n.apply(this,arguments)})).catch(function(t){console.log("receiveAirdrop_err",t),__ownInstance__.$store.dispatch("changeTradeStatus",{id:m,val:2,hash:a}),e(t)})})}},NiAP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gNlT"),r=n("skG1");var o=function(t){n("z0dM")},i=n("VU/8")(a.a,r.a,!1,o,"data-v-c3a7cfce",null);e.default=i.exports},gNlT:function(t,e,n){"use strict";var a=n("mtWM"),r=n.n(a),o=n("NYxO"),i=n("JHeQ"),c=n("cx+2"),s=n("GKmE"),u=n("QKB9"),l=n.n(u),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function f(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,o){try{var i=e[r](o),c=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}("next")})}}e.a={name:"Index",data:function(){return{tabActive:1,activeName:"1",localBalance:0,walletBalance:0,isStatus:!1,isGame:!1,isGameInfoNum:0,isWithdraw:!1,approve:!1,trading:!1,buttonAmountNum:0,SCTBalance:0,depositForm:{amount:""},withdrawForm:{amount:""},balanceTimeInterval:null,refreshTime:5e3,actions:[{name:"SCT"},{name:"USDT"}],selectCurrencyShow:!1,currencyName:"SCT",USDTPlatformBalance:0,SCTPlatformBalance:0,SSTPlatformBalance:0,loadingShow:!0}},activated:function(){this.refreshData()},beforeRouteLeave:function(t,e,n){this.balanceTimeInterval&&(clearInterval(this.balanceTimeInterval),this.balanceTimeInterval=null),n()},created:function(){},watch:{isConnected:{immediate:!0,handler:function(t){var e=this;return f(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t&&e.approve;case 1:case"end":return n.stop()}},n,e)}))()}},changeData:{immediate:!0,handler:function(t){var e=this;return f(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.address){n.next=7;break}return n.next=3,e.getIsApprove();case 3:return n.next=5,e.getUserInfo();case 5:return n.next=7,e.refreshData();case 7:case"end":return n.stop()}},n,e)}))()}}},computed:d({},Object(o.c)({isConnected:function(t){return t.base.isConnected},address:function(t){return t.base.address},gamesFillingAddress:function(t){return t.base.sctFillingAddress},gamesUSDTFillingAddress:function(t){return t.base.usdtFillingAddress},gamesSSTFillingAddress:function(t){return t.base.sstFillingAddress},apiUrl:function(t){return t.base.apiUrl},userId:function(t){return t.base.userId},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{apiUrl:this.apiUrl,address:this.address}}}),methods:{checkDepositAmount:function(t){if(!t)return!1;var e=this.SCTBalance;return!(Number(t)>e)},checkWithdrawalAmount:function(t){if(console.log(t),!t)return!1;var e=this.maxWithdrawableBalance();return!(Number(t)>e)},pageSwitchChange:function(t,e){!1===e?(this.refreshData(),this.getUserInfo()):this.balanceTimeInterval&&(clearInterval(this.balanceTimeInterval),this.balanceTimeInterval=null)},refreshData:function(){var t=this;return f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.timeInterval=setInterval(f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.b)(18,t.gamesFillingAddress);case 2:return t.walletBalance=e.sent,e.next=5,Object(c.a)(l.a.SCT,18);case 5:t.SCTBalance=e.sent;case 6:case"end":return e.stop()}},e,t)})),t.refreshTime);case 1:case"end":return e.stop()}},e,t)}))()},maxWithdrawableBalance:function(){return Number(this.walletBalance)+Number(this.localBalance)},handleClick:function(t,e){var n=this;return f(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.depositForm.amount="",n.withdrawForm.amount="";case 2:case"end":return t.stop()}},t,n)}))()},getIsApprove:function(){var t=this;return f(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(l.a.SCT,18);case 2:n=e.sent,console.log("SCT balance",n),t.tokenBalance=n,Object(c.h)(l.a.SCT,18,n,t.gamesFillingAddress).then(function(e){console.log("isApprove",e),t.approve=!!e});case 6:case"end":return e.stop()}},e,t)}))()},startApprove:function(){var t=this;this.trading=!0,Object(i.a)(l.a.SCT,this.gamesFillingAddress).then(function(e){e&&(t.approve=!0,t.trading=!1)}).finally(function(){t.trading=!1})},submitForm:function(t){var e=this;return f(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].validate().then(f(regeneratorRuntime.mark(function t(){var n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.trading){t.next=23;break}return e.trading=!0,n=0,a="",t.next=6,e.getIsInTradeProgress();case 6:if(1!=e.isStatus&&!e.isWithdraw){t.next=9;break}return e.trading=!1,t.abrupt("return",!1);case 9:if(1!=e.activeName){t.next=14;break}n=e.depositForm.amount,a=i.b,t.next=19;break;case 14:if(!e.isGame){t.next=17;break}return e.trading=!1,t.abrupt("return",!1);case 17:n=e.withdrawForm.amount,a=i.c;case 19:r={amount:Number(n),address:e.address,userId:e.userId,type:Number(e.activeName),sct_local_balance:e.localBalance,sct_wallet_balance:e.walletBalance,hash:"",currency:"sct"},a(n,l.a.SCT,e.gamesFillingAddress,18,r,2).then(function(){var t=f(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}if(1!=e.activeName){t.next=7;break}return Object(c.i)(0,!0,"h20"),t.next=5,e.getGameFillingBalanceFun(e.activeName,n);case 5:t.next=10;break;case 7:Object(c.i)(0,!1,"h20"),e.resetForm("depositForm"),e.resetForm("withdrawForm");case 10:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).finally(function(){e.trading=!1}),t.next=25;break;case 23:return console.log("error submit!!"),t.abrupt("return",!1);case 25:case"end":return t.stop()}},t,e)}))).catch(function(t){return console.log("error submit!!"),!1});case 1:case"end":return n.stop()}},n,e)}))()},setDepositWithdraw:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return f(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.post(e.apiUrl+"/Api/Depositwithdrawal/depositWithdraw",{amount:Number(t),address:e.address,userId:e.userId,type:Number(e.activeName),local_balance:e.localBalance,wallet_balance:e.walletBalance,currency:"sct",hash:n}).then(function(t){t&&1e4==t.code?(e.getUserInfo(!0),1==e.activeName?Object(c.i)(0,!0,"sct"):Object(c.i)(0,!1,"sct"),e.trading=!1,e.$notify({type:"success",message:1==e.activeName?"存款成功":"提取成功"})):(e.trading=!1,e.$notify({type:"danger",message:error}))}).catch(function(t){console.log(t),e.$notify({type:"danger",message:t})});case 2:case"end":return a.stop()}},a,e)}))()},getGameFillingBalanceFun:function(t,e){var n=this;return f(regeneratorRuntime.mark(function a(){var r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:r=setInterval(f(regeneratorRuntime.mark(function a(){var o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,web3.eth.getTransactionReceipt(e);case 2:if(o=a.sent,console.log(o),!o||!o.status){a.next=11;break}return a.next=7,Object(c.j)(t,2,!0,"sct");case 7:n.trading=!1,n.isWithdraw=!1,n.isStatus=!1,clearInterval(r);case 11:case"end":return a.stop()}},a,n)})),3e3);case 1:case"end":return a.stop()}},a,n)}))()},timeWithdrawStatus:function(t){var e=this,n=setInterval(f(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,Object(c.c)(t);case 3:a.sent&&(clearInterval(n),Object(c.i)(0,!0,"sct"),setTimeout(f(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(18,e.gamesFillingAddress);case 2:e.walletBalance=t.sent,e.isWithdraw=!1,e.isStatus=!1;case 5:case"end":return t.stop()}},t,e)})),1e4));case 5:case"end":return a.stop()}},a,e)})),5e3)},resetForm:function(t){this.$refs[t].resetFields(),this.trading=!1},allBlanceFun:function(){return(this.localBalance>0||this.walletBalance>0)&&(this.withdrawForm.amount=Number(this.localBalance)+Number(this.walletBalance),!0)},allWalletBlanceFun:function(){return this.SCTBalance>0&&(this.depositForm.amount=Math.trunc(this.usdtBalance),!0)},getUserInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return f(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getFillingRecordUserInfo",{params:{address:t.address}}).then(function(){var n=f(regeneratorRuntime.mark(function n(a){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(a),1e4!=a.code){n.next=19;break}return t.localBalance=Object(s.h)(a.data.sct_local_balance,4,!0),t.isGame=a.data.isGame,!e&&a.data.isGame&&t.$notify({showClose:!0,message:"正在打赏中，无法进行操作",type:"warning"}),console.log("是否打赏中：",t.isGame),n.next=8,Object(c.b)(18,t.gamesFillingAddress);case 8:return t.walletBalance=n.sent,t.isStatus=1==a.data.dw_status,t.isWithdraw=a.data.isDeWith,console.log("是否充提中：",t.isStatus,t.isWithdraw),(1==a.data.dw_status||a.data.isDeWith)&&(e||t.$notify({showClose:!0,message:"有一笔交易正在进行，无法进行存取款操作",type:"warning"}),a.data.isDeWith>0&&(1==a.data.isDeWithType?t.getGameFillingBalanceFun(a.data.isDeWithStatusId,a.data.isDeWithHash):t.timeWithdrawStatus(a.data.isDeWithStatusId))),n.next=15,Object(c.a)(l.a.SCT,18);case 15:t.SCTBalance=n.sent,console.log("SCT钱包余额：",t.SCTBalance),n.next=20;break;case 19:console.log("get Data error");case 20:setTimeout(function(){t.loadingShow=!1},100);case 21:case"end":return n.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}()).catch(function(e){console.log(e),t.$notify({type:"danger",message:e})});case 1:case"end":return n.stop()}},n,t)}))()},getIsInTheGame:function(){var t=this;return f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getIsGameOrNot",{params:{address:t.address}}).then(function(){var e=f(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1e4!=n.code){e.next=12;break}if(t.isGame=n.data,!n.data){e.next=8;break}return t.isGameInfoNum++,t.isGameInfoNum<=3&&t.$notify({showClose:!0,message:"The game is in progress and the operation cannot be retrieved",type:"warning"}),e.abrupt("return",!1);case 8:return t.isGameInfoNum=0,e.abrupt("return",!0);case 10:e.next=13;break;case 12:console.log("get Data error");case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 2:case"end":return e.stop()}},e,t)}))()},getIsInTradeProgress:function(){var t=this;return f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(t.apiUrl+"/Api/Depositwithdrawal/getIsInTradeProgress",{params:{address:t.address,userId:t.userId}}).then(function(){var e=f(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),1e4!=n.code){e.next=12;break}if(t.isStatus=n.data.status,t.isWithdraw=n.data.isWithdraw,1!=n.data.status&&!n.data.isWithdraw){e.next=9;break}return t.$notify({showClose:!0,message:"有一笔交易正在进行，无法进行存取款操作",type:"warning"}),e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:e.next=13;break;case 12:console.log("get Data error");case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){t.$notify({type:"danger",message:e})});case 2:case"end":return e.stop()}},e,t)}))()},buttonAmount:function(t){t&&(1==this.activeName?this.depositForm.amount=t:this.withdrawForm.amount=t)},onReturnLeft:function(){this.$router.push("/")},selectCurrencyClick:function(){this.selectCurrencyShow=!0},onSelect:function(t){this.currencyName=t.name,this.depositForm.amount="",this.withdrawForm.amount="",this.selectCurrencyShow=!1}}}},i1YW:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-c3a7cfce] .bg{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-c3a7cfce] .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:10px;font-size:14px}.container[data-v-c3a7cfce] .generalStatistics .image{position:relative;width:100%;height:80px;border-radius:20px}.container[data-v-c3a7cfce] .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:500}.container[data-v-c3a7cfce] .generalStatistics .box .van-divider{margin:10px 0}.container[data-v-c3a7cfce] .van-nav-bar{background-color:transparent}.container[data-v-c3a7cfce] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-c3a7cfce] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-c3a7cfce] .van-tab{color:#7f8285}.container[data-v-c3a7cfce] .van-tabs__nav{background-color:transparent}.container[data-v-c3a7cfce] .van-tabs__nav .van-tab--active{color:#fff}.container[data-v-c3a7cfce] div{min-height:0}.container[data-v-c3a7cfce] input[type=number]{-moz-appearance:textfield}.container[data-v-c3a7cfce] input[type=number]::-webkit-inner-spin-button,.container[data-v-c3a7cfce] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.container[data-v-c3a7cfce] .container{color:#fff;border-radius:20px!important;background-color:#05d2fa!important;width:80%;height:50vh;padding:20px;text-align:center;margin:0 auto}.container[data-v-c3a7cfce] .container .van-form{margin-top:15px}.container[data-v-c3a7cfce] .container .van-tabs__nav{background-color:#05d2fa}.container[data-v-c3a7cfce] .container .van-tabs__item{height:60px;line-height:60px;font-size:20px;font-weight:800}.container[data-v-c3a7cfce] .container .van-tab--active{color:#fff}.container[data-v-c3a7cfce] .container .van-tabs__item.is-active{color:#409eff}.container[data-v-c3a7cfce] .container .van-loading-spinner{margin-top:-11px}.container[data-v-c3a7cfce] .container .van-loading-spinner .circular{width:20px;height:20px}.container[data-v-c3a7cfce] .container .van-form-item__label{color:#fff}.container[data-v-c3a7cfce] .container .van-field{font-size:16px;border-radius:20px}.container[data-v-c3a7cfce] .container .van-field .van-field__label{width:50px;margin-right:0}.container[data-v-c3a7cfce] .container .van-input__inner{background-color:#333257;border:1px solid #333257;padding:0;height:50px;line-height:50px;font-size:16px}.container[data-v-c3a7cfce] .container .van-input-group__append button.van-button{color:#409eff}.container[data-v-c3a7cfce] .container .van-input-group__append,.container[data-v-c3a7cfce] .container .van-input-group__prepend{background-color:#333257;color:#fff;border:1px solid #333257}.container[data-v-c3a7cfce] .container .balance{text-align:left;height:30px;line-height:30px}.container[data-v-c3a7cfce] .container .van-button{border-radius:30px;width:100px;border:0}.container[data-v-c3a7cfce] .container .button-amount{line-height:50px}.container[data-v-c3a7cfce] .container .button-amount .van-button--primary.is-plain{background:#8481e0;color:#fff}.container[data-v-c3a7cfce] .container .button-amount .van-button{border-radius:5px}.container[data-v-c3a7cfce] .container .button-amount .van-button:after{background-color:#409eff!important}.container[data-v-c3a7cfce] .container .button-amount .van-button:focus,.container[data-v-c3a7cfce] .container .button-amount .van-button:hover{background-color:#8c1af5!important;color:#fff}.container[data-v-c3a7cfce] .container .submit-name{margin-top:20px}.container[data-v-c3a7cfce] .container .submit-name .van-button--primary{width:200px;border-radius:5px;background-color:#8c1af5;border:0}.container[data-v-c3a7cfce] .container .submit-name .van-button--primary.is-disabled{background:#c8c9cc;color:#fff}.container[data-v-c3a7cfce] .container .submit-name .van-loading-mask{border-radius:5px;background-color:rgba(0,0,0,.8);border:0}.container[data-v-c3a7cfce] .wrapper{display:flex;align-items:center;justify-content:center;height:100%}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/depositWithdrawal/sct.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACzP,AACD,+CAA+C,kBAAkB,UAAU,cAAc,gBAAgB,cAAc,CACtH,AACD,sDAAsD,kBAAkB,WAAW,YAAY,kBAAkB,CAChH,AACD,oDAAoD,WAAW,kBAAkB,aAAa,QAAQ,SAAS,+BAAgC,WAAW,eAAe,CACxK,AACD,iEAAiE,aAAa,CAC7E,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,qCAAqC,aAAa,CACjD,AACD,2CAA2C,4BAA4B,CACtE,AACD,4DAA4D,UAAU,CACrE,AACD,gCAAgC,YAAY,CAC3C,AACD,+CAA+C,yBAAyB,CACvE,AACD,oJAAoJ,wBAAwB,QAAQ,CACnL,AACD,uCAAuC,WAAW,6BAA8B,mCAAoC,UAAU,YAAY,aAAa,kBAAkB,aAAa,CACrL,AACD,iDAAiD,eAAe,CAC/D,AACD,sDAAsD,wBAAwB,CAC7E,AACD,uDAAuD,YAAY,iBAAiB,eAAe,eAAe,CACjH,AACD,wDAAwD,UAAU,CACjE,AACD,iEAAiE,aAAa,CAC7E,AACD,4DAA4D,gBAAgB,CAC3E,AACD,sEAAsE,WAAW,WAAW,CAC3F,AACD,6DAA6D,UAAU,CACtE,AACD,kDAAkD,eAAe,kBAAkB,CAClF,AACD,oEAAoE,WAAW,cAAc,CAC5F,AACD,yDAAyD,yBAAyB,yBAAyB,UAAU,YAAY,iBAAiB,cAAc,CAC/J,AACD,kFAAkF,aAAa,CAC9F,AACD,iIAAiI,yBAAyB,WAAW,wBAAwB,CAC5L,AACD,gDAAgD,gBAAgB,YAAY,gBAAgB,CAC3F,AACD,mDAAmD,mBAAmB,YAAY,QAAQ,CACzF,AACD,sDAAsD,gBAAgB,CACrE,AACD,oFAAoF,mBAAmB,UAAU,CAChH,AACD,kEAAkE,iBAAiB,CAClF,AACD,wEAAyE,kCAAmC,CAC3G,AACD,gJAAgJ,mCAAoC,UAAU,CAC7L,AACD,oDAAoD,eAAe,CAClE,AACD,yEAAyE,YAAY,kBAAkB,yBAAyB,QAAQ,CACvI,AACD,qFAAqF,mBAAmB,UAAU,CACjH,AACD,sEAAsE,kBAAkB,gCAAiC,QAAQ,CAChI,AACD,qCAAqC,aAAa,mBAAmB,uBAAuB,WAAW,CACtG",file:"sct.vue",sourcesContent:['\n.container[data-v-c3a7cfce] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-c3a7cfce] .generalStatistics{position:relative;width:90%;margin:0 auto;margin-top:10px;font-size:14px\n}\n.container[data-v-c3a7cfce] .generalStatistics .image{position:relative;width:100%;height:80px;border-radius:20px\n}\n.container[data-v-c3a7cfce] .generalStatistics .box{width:100%;position:absolute;padding:10px;top:50%;left:50%;transform:translate(-50%, -50%);color:#fff;font-weight:500\n}\n.container[data-v-c3a7cfce] .generalStatistics .box .van-divider{margin:10px 0\n}\n.container[data-v-c3a7cfce] .van-nav-bar{background-color:transparent\n}\n.container[data-v-c3a7cfce] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-c3a7cfce] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-c3a7cfce] .van-tab{color:#7f8285\n}\n.container[data-v-c3a7cfce] .van-tabs__nav{background-color:transparent\n}\n.container[data-v-c3a7cfce] .van-tabs__nav .van-tab--active{color:#fff\n}\n.container[data-v-c3a7cfce] div{min-height:0\n}\n.container[data-v-c3a7cfce] input[type=number]{-moz-appearance:textfield\n}\n.container[data-v-c3a7cfce] input[type=number]::-webkit-inner-spin-button,.container[data-v-c3a7cfce] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0\n}\n.container[data-v-c3a7cfce] .container{color:#fff;border-radius:20px !important;background-color:#05D2FA !important;width:80%;height:50vh;padding:20px;text-align:center;margin:0 auto\n}\n.container[data-v-c3a7cfce] .container .van-form{margin-top:15px\n}\n.container[data-v-c3a7cfce] .container .van-tabs__nav{background-color:#05D2FA\n}\n.container[data-v-c3a7cfce] .container .van-tabs__item{height:60px;line-height:60px;font-size:20px;font-weight:800\n}\n.container[data-v-c3a7cfce] .container .van-tab--active{color:#fff\n}\n.container[data-v-c3a7cfce] .container .van-tabs__item.is-active{color:#409EFF\n}\n.container[data-v-c3a7cfce] .container .van-loading-spinner{margin-top:-11px\n}\n.container[data-v-c3a7cfce] .container .van-loading-spinner .circular{width:20px;height:20px\n}\n.container[data-v-c3a7cfce] .container .van-form-item__label{color:#fff\n}\n.container[data-v-c3a7cfce] .container .van-field{font-size:16px;border-radius:20px\n}\n.container[data-v-c3a7cfce] .container .van-field .van-field__label{width:50px;margin-right:0\n}\n.container[data-v-c3a7cfce] .container .van-input__inner{background-color:#333257;border:1px solid #333257;padding:0;height:50px;line-height:50px;font-size:16px\n}\n.container[data-v-c3a7cfce] .container .van-input-group__append button.van-button{color:#409EFF\n}\n.container[data-v-c3a7cfce] .container .van-input-group__append,.container[data-v-c3a7cfce] .container .van-input-group__prepend{background-color:#333257;color:#fff;border:1px solid #333257\n}\n.container[data-v-c3a7cfce] .container .balance{text-align:left;height:30px;line-height:30px\n}\n.container[data-v-c3a7cfce] .container .van-button{border-radius:30px;width:100px;border:0\n}\n.container[data-v-c3a7cfce] .container .button-amount{line-height:50px\n}\n.container[data-v-c3a7cfce] .container .button-amount .van-button--primary.is-plain{background:#8481e0;color:#fff\n}\n.container[data-v-c3a7cfce] .container .button-amount .van-button{border-radius:5px\n}\n.container[data-v-c3a7cfce] .container .button-amount .van-button::after{background-color:#409EFF !important\n}\n.container[data-v-c3a7cfce] .container .button-amount .van-button:focus,.container[data-v-c3a7cfce] .container .button-amount .van-button:hover{background-color:#8C1AF5 !important;color:#fff\n}\n.container[data-v-c3a7cfce] .container .submit-name{margin-top:20px\n}\n.container[data-v-c3a7cfce] .container .submit-name .van-button--primary{width:200px;border-radius:5px;background-color:#8C1AF5;border:0\n}\n.container[data-v-c3a7cfce] .container .submit-name .van-button--primary.is-disabled{background:#c8c9cc;color:#fff\n}\n.container[data-v-c3a7cfce] .container .submit-name .van-loading-mask{border-radius:5px;background-color:rgba(0,0,0,0.8);border:0\n}\n.container[data-v-c3a7cfce] .wrapper{display:flex;align-items:center;justify-content:center;height:100%\n}\n'],sourceRoot:""}])},skG1:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-row",{staticClass:"container",staticStyle:{"margin-top":"20px"}},[n("van-col",{attrs:{span:24}},[n("van-tabs",{attrs:{stretch:!0},on:{click:t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("van-tab",{attrs:{title:"存入",name:"1",disabled:t.trading}},[n("van-row",{staticClass:"balance"},[n("van-col",{attrs:{span:24}},[n("div",[n("span",[t._v("平台余额："+t._s(t.keepDecimalNotRounding(Number(t.localBalance)+Number(t.walletBalance),4))+" SCT")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("钱包余额："+t._s(t.toFixed(Number(t.SCTBalance),4))+" SCT")])])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:24}},[n("van-form",{ref:"depositForm"},[n("van-field",{attrs:{type:"number",label:"SCT:",placeholder:"请输入充值金额",onkeypress:"return(/[\\d]/.test(String.fromCharCode(event.keyCode)))",rules:[{validator:t.checkDepositAmount,message:""}],"label-width":"50"},model:{value:t.depositForm.amount,callback:function(e){t.$set(t.depositForm,"amount",e)},expression:"depositForm.amount"}}),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(100)}}},[t._v("100")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(200)}}},[t._v("200")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(500)}}},[t._v("500")])],1)],1),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(1e3)}}},[t._v("1000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(2e3)}}},[t._v("2000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(5e4)}}},[t._v("50000")])],1)],1),t._v(" "),n("div",{staticClass:"submit-name"},[t.approve?n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading||t.isStatus||t.isWithdraw},on:{click:function(e){return t.submitForm("depositForm")}}},[t._v("存入")]):n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading},on:{click:t.startApprove}},[t._v("批准")])],1)],1)],1)],1)],1),t._v(" "),n("van-tab",{attrs:{title:"提取",name:"2",disabled:t.trading}},[n("van-row",{staticClass:"balance"},[n("van-col",{attrs:{span:24}},[n("div",[n("span",[t._v("平台余额："+t._s(t.toFixed(Number(t.localBalance)+Number(t.walletBalance),4))+" SCT")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("钱包余额："+t._s(t.toFixed(Number(t.SCTBalance),4))+" SCT")])])])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:24}},[n("van-form",{ref:"withdrawForm"},[n("van-field",{attrs:{label:"SCT:",type:"number",placeholder:"请输入金额",min:"0",max:t.maxWithdrawableBalance(),onkeypress:"return(/[\\d]/.test(String.fromCharCode(event.keyCode)))",rules:[{validator:t.checkWithdrawalAmount,message:""}],"label-width":"50"},model:{value:t.withdrawForm.amount,callback:function(e){t.$set(t.withdrawForm,"amount",e)},expression:"withdrawForm.amount"}}),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(100)}}},[t._v("100")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(200)}}},[t._v("200")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(500)}}},[t._v("500")])],1)],1),t._v(" "),n("van-row",{staticClass:"button-amount"},[n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(1e3)}}},[t._v("1000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(2e3)}}},[t._v("2000")])],1),t._v(" "),n("van-col",{attrs:{span:8}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.buttonAmount(5e4)}}},[t._v("50000")])],1)],1),t._v(" "),n("div",{staticClass:"submit-name"},[t.approve?n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading||t.isStatus||t.isGame||t.isWithdraw},on:{click:function(e){return t.submitForm("withdrawForm")}}},[t._v("提取")]):n("van-button",{attrs:{type:"primary",loading:t.trading,disabled:t.trading},on:{click:t.startApprove}},[t._v("批准")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("van-overlay",{attrs:{show:t.trading}},[n("div",{staticClass:"wrapper"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1)]),t._v(" "),n("van-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.selectCurrencyShow,callback:function(e){t.selectCurrencyShow=e},expression:"selectCurrencyShow"}}),t._v(" "),n("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(e){t.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)},staticRenderFns:[]};e.a=a},z0dM:function(t,e,n){var a=n("i1YW");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("16d6d722",a,!0,{})}});