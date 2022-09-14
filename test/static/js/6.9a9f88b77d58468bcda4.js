webpackJsonp([6],{"6xQf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("KaAZ"),i=n("ekSj"),r=!1;var s=function(e){r||n("g9HE")},o=n("VU/8")(a.a,i.a,!1,s,"data-v-1fccd66a",null);o.options.__file="src/views/liquidity/index.vue",t.default=o.exports},D9BO:function(e,t){e.exports=[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]},Fzb2:function(e,t,n){var a=n("kxFB");(e.exports=n("FZ+f")(!1)).push([e.i,"\n.container[data-v-1fccd66a]{flex-grow:1;align-items:center;width:100%;margin:0 auto\n}\n.container[data-v-1fccd66a] .bg{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-1fccd66a] .van-nav-bar{background-color:transparent\n}\n.container[data-v-1fccd66a] .van-nav-bar .van-icon{color:#fff\n}\n.container[data-v-1fccd66a] .van-nav-bar__title{color:#fff\n}\n.container[data-v-1fccd66a] .item{border-radius:24px;margin-top:20px;max-width:436px;width:90%;cursor:default;margin:0 auto\n}\n.container[data-v-1fccd66a] .item .el-card{margin-top:50px;background:linear-gradient(#00C3E9, #2D50D2);border-radius:24px;border-color:#05D2FA\n}\n.container[data-v-1fccd66a] .item .el-card__header{padding:10px 20px;border-color:#7f7f80;color:#fff\n}\n.container[data-v-1fccd66a] .item .tips{color:#fff\n}\n.container[data-v-1fccd66a] .item .info{color:#fff;border-top-left-radius:20px;border-top-right-radius:20px\n}\n.container[data-v-1fccd66a] .item .info .el-collapse{border-top:0\n}\n.container[data-v-1fccd66a] .item .info img{vertical-align:middle\n}\n.container[data-v-1fccd66a] .item .info .el-collapse-item{margin-bottom:40px\n}\n.container[data-v-1fccd66a] .item .info .el-collapse-item__header{background-color:#76D6FF;color:#fff;border-bottom:0;min-height:60px;padding:15px;font-size:15px;border-radius:20px;margin-bottom:-20px;line-height:30px\n}\n.container[data-v-1fccd66a] .item .info .el-collapse-item__header img{vertical-align:middle\n}\n.container[data-v-1fccd66a] .item .info .el-collapse-item__wrap{background-color:#76D6FF;color:#fff;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-bottom:0\n}\n.container[data-v-1fccd66a] .item .info .el-collapse-item__wrap .el-collapse-item__content{color:#fff;padding:15px;font-size:15px\n}\n.container[data-v-1fccd66a] .item .info .el-collapse{border-bottom:0\n}\n.container[data-v-1fccd66a] .item .info .add-liquidity{color:#fff\n}\n.container[data-v-1fccd66a] .item .el-divider{width:100vh;margin-left:-20px;background-color:#7f7f80\n}\n.container[data-v-1fccd66a] .item .btn{padding-top:30px;text-align:center\n}\n.container[data-v-1fccd66a] .item .btn button{background:transparent;background:url("+a(n("RTmo"))+") no-repeat center;background-size:contain;text-align:center;color:#fff;line-height:26px;margin-right:23px;position:relative;overflow:hidden;width:100%;height:48px;border:none;border-radius:19px;outline:none;cursor:pointer\n}\n.container[data-v-1fccd66a] .item .btn .el-loading-mask{background-color:rgba(0,0,0,0.8)\n}\n.container[data-v-1fccd66a] .item .btn button:disabled{background:transparent;background:url("+a(n("RTmo"))+") no-repeat center;background-size:contain;text-align:center;opacity:0.5\n}\n.container[data-v-1fccd66a] .textRight{text-align:right\n}\n.container[data-v-1fccd66a] .textCenter{text-align:center\n}\n",""])},KaAZ:function(e,t,n){"use strict";var a=n("NYxO"),i=n("YqP1"),r=n("GKmE"),s=(n("SVRU"),n("QKB9")),o=(n.n(s),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e});i.a.publicAddress;t.a={data:function(){return{receiveLoading:!1,loadingShow:!0}},created:function(){},components:{},computed:o({},Object(a.c)({isConnected:function(e){return e.base.isConnected},liquidityPools:function(e){return e.base.liquidityPoolsList},isMobel:function(e){return e.comps.isMobel}})),watch:{isConnected:{immediate:!0,handler:function(e){var t=this;console.log(this.liquidityPools),e&&!this.liquidityPools.length&&setTimeout(function(){t.$store.dispatch("liquidityPoolsTokenList"),t.timeInterval&&clearInterval(t.timeInterval),setInterval(function(){t.$store.dispatch("refreshLiquidityPoolsList")},1e4),console.log(t.liquidityPools)},300)}},liquidityPools:{immediate:!0,handler:function(e){e&&e.length>0&&(this.loadingShow=!1)}}},mounted:function(){window.clickGuruApprove=this.clickGuruApprove,window.handleClickOpen=this.handleClickOpen},methods:{computeTokenBalanceChange:function(e,t,n){var a=0,i=n&&n>0?n:8;return e&&t&&(a=Object(r.g)(e,i)),a},computeSingleCurrencyBalance:function(e,t){var n=0;if(e)return e.totalSupply>0&&e.tokenBalance>0&&e.reserves[t]>0&&(n=this.computeTokenBalanceChange(e.tokenBalance/e.totalSupply*e.reserves[t],e.tokenDecimals,10)),n},calculationShareNumber:function(e){var t=0;if(e.tokenBalance){var n=this.computeTokenBalanceChange(e.totalSupply,e.tokenDecimals,10);t=(this.computeTokenBalanceChange(e.tokenBalance,e.tokenDecimals,10)/n*100).toFixed(10)}return t<=.01?"<0.01%":"<"+t+"%"},pushAddLiquidity:function(){this.$router.push({path:"/liquidity/add"})},removeHrefRouter:function(e){this.$router.push({name:"LiquidityRemove",params:{inputCurrency:e.tk0Address,outputCurrency:e.tk1Address}})},backClinke:function(){this.$router.push({name:"bank",params:{tabActiveOne:2}})}}}},SVRU:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return T}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return h});n("GKmE");var a=n("4/qU"),i=n.n(a),r=n("kZGC"),s=n.n(r),o=n("D9BO"),u=n.n(o),p=n("YqP1");n("d8t2");function y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(i,r){try{var s=t[i](r),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}("next")})}}var l=p.a.publicAddress,m=function(e){var t=this,n=__ownInstance__.$store.state.base.address,a=e,r=new web3.eth.Contract(i.a,a).methods.approve(l.routerDeployedAddress,"10000000000000000000000000000000000000000000000000000000").encodeABI(),s=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:s}),new Promise(function(e,i){var o,u=void 0;web3.eth.getTransactionCount(n).then((o=d(regeneratorRuntime.mark(function o(p){var y,d,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,web3.eth.getGasPrice();case 2:return y=t.sent,t.next=5,web3.eth.estimateGas({from:n,to:a,data:r});case 5:d=t.sent,console.log("estimateGas",d),l=[{from:n,to:a,data:r,gasPrice:web3.utils.toHex(y),gas:web3.utils.toHex(d)}],web3.eth.sendTransaction(l[0]).on("transactionHash",function(e){console.log("hash",e),e&&(u=e)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:s,val:1,hash:u}),e(u)}).on("confirmation",function(e,t){}).on("error",function(e){var t=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:s,val:2,isUserDeny:t,hash:u}),console.log("err",e),i(e)});case 9:case"end":return t.stop()}},o,t)})),function(e){return o.apply(this,arguments)})).catch(function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:s,val:2,hash:u}),i(e)})})},c=function(e,t,n,a){var i=this,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=__ownInstance__.$store.state.base.address,o=l.routerDeployedAddress,p=new web3.eth.Contract(u.a,o),y=Math.round(Date.now()/1e3)+1800,m=web3.utils.toWei(e,"ether"),c=((t*(1-l.SLIPOINT)).toFixed(9),r*(1-l.SLIPOINT)),T=web3.utils.toWei(c.toString(),"ether"),f=[n,a],h=p.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(m,T,f,s,y).encodeABI(),v=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:v}),new Promise(function(e,t){var n,a=void 0;web3.eth.getTransactionCount(s).then((n=d(regeneratorRuntime.mark(function n(r){var u,p,y;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return u=n.sent,n.next=5,web3.eth.estimateGas({from:s,to:o,data:h});case 5:p=n.sent,console.log("estimateGas",p),y=[{from:s,to:o,data:h,gasPrice:web3.utils.toHex(u),gas:web3.utils.toHex(p)}],web3.eth.sendTransaction(y[0]).on("transactionHash",function(e){console.log("hash",e),e&&(a=e)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:1,hash:a}),e(a)}).on("confirmation",function(e,t){}).on("error",function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)});case 9:case"end":return n.stop()}},n,i)})),function(e){return n.apply(this,arguments)})).catch(function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,hash:a}),t(e)})})},T=function(e,t,n,a){var i=this,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=__ownInstance__.$store.state.base.address,u=l.routerDeployedAddress,p=new web3.eth.Contract(s.a,u),y=Math.round(Date.now()/1e3)+1800,m=web3.utils.toWei(e,"ether"),c=((t*(1-l.SLIPOINT)).toFixed(9),r*(1-l.SLIPOINT)),T=web3.utils.toWei(c.toString(),"ether"),f=[n,a],h=p.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(T,f,o,y).encodeABI(),v=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:v}),new Promise(function(e,t){var n,a=void 0;web3.eth.getTransactionCount(o).then((n=d(regeneratorRuntime.mark(function n(r){var s,p,y;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return s=n.sent,n.next=5,web3.eth.estimateGas({from:o,to:u,data:h,value:m});case 5:p=n.sent,console.log("estimateGas",p),(y=[{from:o,to:u,data:h,gasPrice:web3.utils.toHex(s),gas:web3.utils.toHex(p)}])[0].value=m,web3.eth.sendTransaction(y[0]).on("transactionHash",function(e){console.log("hash",e),e&&(a=e)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:1,hash:a}),e(a)}).on("confirmation",function(e,t){}).on("error",function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)});case 10:case"end":return n.stop()}},n,i)})),function(e){return n.apply(this,arguments)})).catch(function(e){console.log("receiveAirdrop_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:v,val:2,hash:a}),t(e)})})},f=function(e,t,n,a,i){var r=this,o=__ownInstance__.$store.state.base.address,u=l.routerDeployedAddress,p=new web3.eth.Contract(s.a,u),m=!1;n.toUpperCase()!==l.BNB_ADDR.toUpperCase()&&a.toUpperCase()!==l.BNB_ADDR.toUpperCase()||(m=!0);var c=Math.round(Date.now()/1e3)+1800,T=web3.utils.toWei(e.toString(),"ether"),f=web3.utils.toWei(t.toString(),"ether"),h=[],v="";m?n==l.BNB_ADDR?(h=[a,f,0,0,o,c],v=T):(h=[n,T,0,0,o,c],v=f):(h=[n,a,T,f,0,0,o,c],v="");var b,g,_=void 0;m?_=(b=p.methods).addLiquidityETH.apply(b,y(h)).encodeABI():_=(g=p.methods).addLiquidity.apply(g,y(h)).encodeABI();var w=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:w}),new Promise(function(e,t){var n,a=void 0;web3.eth.getTransactionCount(o).then((n=d(regeneratorRuntime.mark(function n(i){var s,p,y;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return s=n.sent,n.next=5,web3.eth.estimateGas({from:o,to:u,data:_,value:v});case 5:p=n.sent,console.log("estimateGas",p),(y=[{from:o,to:u,data:_,gasPrice:web3.utils.toHex(s),gas:web3.utils.toHex(p)}])[0].value=v,web3.eth.sendTransaction(y[0]).on("transactionHash",function(e){console.log("hash",e),e&&(a=e)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:1,hash:a}),e(a)}).on("confirmation",function(e,t){}).on("error",function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)});case 10:case"end":return n.stop()}},n,r)})),function(e){return n.apply(this,arguments)})).catch(function(e){console.log("addLiquidity_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:2,hash:a}),t(e)})})},h=function(e,t,n,a,i,r,o){var u=this,p=__ownInstance__.$store.state.base.address,m=l.routerDeployedAddress,c=new web3.eth.Contract(s.a,m),T=!1;a.toUpperCase()!==l.BNB_ADDR.toUpperCase()&&i.toUpperCase()!==l.BNB_ADDR.toUpperCase()||(T=!0);var f=Math.round(Date.now()/1e3)+1800,h=web3.utils.toWei(e,"ether");console.log(e,h);var v=[];v=T?a==l.BNB_ADDR?[i,h,0,0,p,f]:[a,h,0,0,p,f]:[a,i,h,0,0,p,f];var b,g,_=void 0;T?_=(b=c.methods).removeLiquidityETH.apply(b,y(v)).encodeABI():_=(g=c.methods).removeLiquidity.apply(g,y(v)).encodeABI();var w=(new Date).getTime().toString();return __ownInstance__.$store.dispatch("createOrderForm",{val:0,id:w}),new Promise(function(e,t){var n,a=void 0;web3.eth.getTransactionCount(p).then((n=d(regeneratorRuntime.mark(function n(i){var r,s,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,web3.eth.getGasPrice();case 2:return r=n.sent,n.next=5,web3.eth.estimateGas({from:p,to:m,data:_});case 5:s=n.sent,console.log("estimateGas",s),o=[{from:p,to:m,data:_,gasPrice:web3.utils.toHex(r),gas:web3.utils.toHex(s)}],web3.eth.sendTransaction(o[0]).on("transactionHash",function(e){console.log("hash",e),e&&(a=e)}).on("receipt",function(t){__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:1,hash:a}),e(a)}).on("confirmation",function(e,t){}).on("error",function(e){var n=4001===e.code;__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:2,isUserDeny:n,hash:a}),console.log("err",e),t(e)});case 9:case"end":return n.stop()}},n,u)})),function(e){return n.apply(this,arguments)})).catch(function(e){console.log("removeLiquidity_err",e),__ownInstance__.$store.dispatch("changeTradeStatus",{id:w,val:2,hash:a}),t(e)})})}},ekSj:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:e.isMobel?"100% 100%":""}}),e._v(" "),n("van-nav-bar",{attrs:{title:e.$t("liquidity:Liquidity"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":e.backClinke}}),e._v(" "),n("div",{staticClass:"item"},[n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.receiveLoading,expression:"receiveLoading"}],attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.$t("liquidity:title")))]),e._v(" "),n("p",{staticClass:"tips"},[e._v(e._s(e.$t("liquidity:RemoveLiquidity")))])]),e._v(" "),n("div",{staticClass:"info"},[e._l(e.liquidityPools,function(t,a){return n("el-collapse",{key:a,staticClass:"collapse"},[t.tokenBalance>0?n("el-collapse-item",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"pool.loading"}],attrs:{name:a}},[n("template",{slot:"title"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("img",{attrs:{size:"small",src:t.logo,width:"20"}}),e._v(" "),n("img",{staticStyle:{"margin-left":"5px"},attrs:{size:"small",src:t.logo2,width:"20"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"5px","font-weight":"800"}},[e._v(e._s(t.name+"/"+t.name2))])]),e._v(" "),n("el-col",{attrs:{span:24}},[e._v(e._s(e.computeTokenBalanceChange(t.tokenBalance,t.tokenDecimals)))])],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("img",{attrs:{size:"small",src:t.logo,width:"20"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(e.$t("liquidity:Pooled"))+" "+e._s(t.name))])]),e._v(" "),n("el-col",{attrs:{span:12,align:"right"}},[e._v(e._s(e.computeSingleCurrencyBalance(t,1)))])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("img",{attrs:{size:"small",src:t.logo2,width:"20"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(e.$t("liquidity:Pooled"))+" "+e._s(t.name2))])]),e._v(" "),n("el-col",{attrs:{span:12,align:"right"}},[e._v(e._s(e.computeSingleCurrencyBalance(t,0)))])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(e.$t("liquidity:SharePool")))])]),e._v(" "),n("el-col",{attrs:{span:12,align:"right"}},[e._v(e._s(e.calculationShareNumber(t)))])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"btn",staticStyle:{"padding-top":"10px"}},[n("button",{staticClass:"exchangeButton",on:{click:function(n){return e.removeHrefRouter(t)}}},[e._v(e._s(e.$t("liquidity:Remove")))])])])],1),e._v(" "),n("el-row",[n("el-col",{staticStyle:{"padding-top":"15px","padding-bottom":"10px"},attrs:{span:24,align:"center"}},[n("el-link",{attrs:{underline:!1,type:"primary"},on:{click:e.pushAddLiquidity}},[e._v(" + "+e._s(e.$t("liquidity:AddLiquidityInstead")))])],1)],1)],2):e._e()],1)}),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24,align:"center"}},[n("span",{staticClass:"add-liquidity"},[e._v(e._s(e.$t("liquidity:AddLiquidityInstead")))])])],1)],2),e._v(" "),n("el-divider",{staticStyle:{width:"100vh","margin-left":"-20px"}}),e._v(" "),n("div",{staticClass:"btn",staticStyle:{"padding-top":"0"}},[n("button",{staticClass:"exchangeButton",on:{click:e.pushAddLiquidity}},[e._v("+ "+e._s(e.$t("liquidity:AddLiquidity")))])])],1)],1),e._v(" "),n("van-overlay",{attrs:{show:e.loadingShow},on:{click:function(t){e.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#fff"}},[e._v(e._s(e.$t("question:DataLoading")))])],1)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i},g9HE:function(e,t,n){var a=n("Fzb2");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("07fc49a4",a,!1,{})},kZGC:function(e,t){e.exports=[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]}});