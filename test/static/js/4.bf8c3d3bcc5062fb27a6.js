webpackJsonp([4],{"0Mvq":function(t,e,n){"use strict";var a,i,r,o=n("+zHA"),s=n("NYxO"),c=n("cx+2"),u=n("QKB9"),l=n.n(u),d=n("Fd2+"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,r){try{var o=e[i](r),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.a=(a={name:"",data:function(){return{loading:!1,ticketDetail:[],pageSize:1e3,currPage:1,total:0,type:1,ticketId:0,purchas_insurance:!1,showPopover:!1,insurance_amount:0,usdtBalance:0,swanlakeBalance:0,userTicketId:0,SCTPrice:0,loadingShow:!1}},created:function(){try{var t=this.$route.query.type;t&&void 0!==t&&(this.type=t);var e=this.$route.query.ticket_id;e&&(this.ticketId=e);var n=this.$route.query.user_ticket_id;n&&(this.userTicketId=n),this.getSCTPrice()}catch(t){}},mounted:function(){var t=this;return v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.userId&&t.ticketId>0&&(this.loadingShow=!0,this.getTicketDetail(),this.getUserInfo())}}},computed:p({},Object(s.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},gamesFillingAddress:function(t){return t.base.usdtFillingAddress},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId,ticketId:this.ticketId}}}),components:{},methods:{getSCTPrice:function(){var t=this;return v(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 1e9,e.next=3,Object(c.d)(l.a.routerContractAddress,l.a.SCT,l.a.BUSDT);case 3:n=e.sent,t.SCTPrice=t.keepDecimalNotRounding(n,4),console.log("SCTPrice",t.SCTPrice);case 6:case"end":return e.stop()}},e,t)}))()},getTicketDetail:function(){var t=this,e=this.apiUrl+"/Answer/Ticket/getTicketDetail";e=1==this.type?this.apiUrl+"/Answer/Ticket/getTicketDetail":this.apiUrl+"/Answer/Ticket/getUserTicketDetail",axios.get(e,{params:{userId:this.userId,ticketId:this.ticketId,userTicketId:this.userTicketId}}).then(function(e){console.log(e),1e4==e.code?t.ticketDetail=e.data:t.$notify({type:"warning",message:"加载数据失败"})}).catch(function(e){t.$notify({type:"warning",message:e})})},onClickLeft:function(){this.$router.go(-1)},getUserInfo:function(){var t=this;return v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:axios.get(t.apiUrl+"/Api/Depositwithdrawal/getFillingRecordUserInfo",{params:{userId:t.userId}}).then(function(){var e=v(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),1e4!=n.code){e.next=12;break}if(a=0,!t.address){e.next=8;break}return e.next=6,Object(c.b)(18,t.gamesFillingAddress);case 6:a=e.sent,console.log("链上USDT余额：",a);case 8:t.swanlakeBalance=Number(n.data.local_balance)+Number(a),console.log("平台USDT可用余额：",t.swanlakeBalance),e.next=13;break;case 12:console.log("get Data error");case 13:t.loadingShow=!1;case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e),t.$notify({type:"danger",message:e})});case 1:case"end":return e.stop()}},e,t)}))()},startBuyClick:function(){var t=this;return this.swanlakeBalance<this.ticketDetail.price?(d.a.confirm({message:"USDT余额不足，请先充值！"}).then(function(){t.$router.push("/usdt")}).catch(function(){return!1}),!1):this.userId<=0?(this.$notify({type:"warning",message:"获取用户信息失败"}),!1):this.ticketId<=0?(this.$notify({type:"warning",message:"获取门票信息失败"}),!1):(this.loading=!0,void setTimeout(function(){Object(o.c)(t.apiUrl+"/Answer/Ticket/startBuyTicket",{userId:t.userId,ticket_id:t.ticketId,insurance_amount:t.insurance_amount,type:t.type},function(e){t.loading=!1,console.log(e),e&&1e4==e.code?e.data?(t.insurance_amount="",t.$notify({type:"success",message:"购买成功!"}),setTimeout(function(){t.$router.push({path:"/ticket/my/list"})},1500)):t.$notify({type:"warning",message:"购买失败"}):t.$notify({type:"warning",message:e.msg})})},2e3))},startRedemptionClick:function(){var t=this;if(this.userTicketId<=0)return this.$notify({type:"warning",message:"Error"}),!1;this.loading=!0,setTimeout(function(){Object(o.c)(t.apiUrl+"/Answer/Ticket/startRedemptionTicket",{userId:t.userId,ticket_id:t.ticketId,user_ticket_id:t.userTicketId},function(e){t.loading=!1,console.log(e),e&&1e4==e.code?(t.insurance_amount="",t.$notify({type:"success",message:"赎回成功!"}),setTimeout(function(){t.$router.push({path:"/ticket/my/list"})},1500)):t.$notify({type:"warning",message:e.msg})})},2e3)},cealBenefits:function(t){var e=Number(this.ticketDetail.price)*(Number(t)/100);return this.toFixed(e,2)},getRealInterestRate:function(t){console.log(t);var e,n=0;return n=1==this.type?Number(t.new_price):Number(t.buy_price),e=Number(t.capped)*this.SCTPrice*365/n*100,this.toFixed(e,2)+"%"}}},r=function(){},(i="mounted")in a?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r,a)},"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.9d44a18.jpg"},Vqd7:function(t,e,n){var a=n("cZJG");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4af0efc2",a,!1,{})},WgLj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("0Mvq"),i=n("uZeV"),r=!1;var o=function(t){r||(n("zd+N"),n("Vqd7"))},s=n("VU/8")(a.a,i.a,!1,o,"data-v-6fedd70a",null);s.options.__file="src/views/ticket/detail.vue",e.default=s.exports},cZJG:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-6fedd70a] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-6fedd70a] .van-nav-bar{background-color:transparent\n}\n.container[data-v-6fedd70a] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-6fedd70a] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-6fedd70a] .main{padding-bottom:60px\n}\n.container[data-v-6fedd70a] .main .buy-button{width:150px;height:35px;font-size:15px;border-radius:20px;background-color:#8C1AF5;border:0\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset{margin-top:10px\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset .insurance_cell_group{background-color:unset !important;position:unset !important\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset .insurance_cell_group .van-cell{text-align:left !important\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset .van-cell{background-color:#AE8BF5;color:#fff;text-align:center\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset .van-cell .van-checkbox{display:inline-flex\n}\n.container[data-v-6fedd70a] .main .van-cell-group--inset .van-cell::after{border-bottom:unset\n}\n",""])},"ePR/":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.van-popover {\n    /* top: 200px !important;\n    left: 20px !important; */\n}\n.van-popover__content {\n    width: 60%;\n    font-size: 15px;\n}\n",""])},uZeV:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("van-nav-bar",{attrs:{title:1==t.type?t.$t("question:ticketBuy"):t.$t("question:ticketRedemption"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"main"},[n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v(t._s(t.ticketDetail.name))])]},proxy:!0}])}),t._v(" "),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:nominalInterestRate")))]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:realInterestRate")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.ticketDetail.annualized,2))+"%")]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.getRealInterestRate(t.ticketDetail)))])],1)],1),t._v(" "),n("van-divider",{staticStyle:{width:"80%",margin:"0 auto",height:"10px","border-color":"#A79BA9"}}),t._v(" "),1==t.type?n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t.ticketDetail.is_discount&&2==t.ticketDetail.discount_status?n("span",[t._v(t._s(t.$t("question:DiscountPrice")))]):n("span",[t._v(t._s(t.$t("question:denomination")))])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v("USDT "+t._s(t.$t("question:Balance")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[t.ticketDetail.is_discount&&2==t.ticketDetail.discount_status?n("div",[t._v(t._s(t.toFixed(t.ticketDetail.discount_price,2))+" USDT")]):n("div",[t._v(t._s(t.toFixed(t.ticketDetail.price,2))+" USDT")])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.swanlakeBalance,2))+" USDT")])],1)],1):n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:buyPrice")))]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:denomination")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[n("div",[t._v(t._s(t.toFixed(t.ticketDetail.buy_price,2))+" USDT")])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.ticketDetail.denomination,2))+" USDT")])],1)],1)]},proxy:!0}])}),t._v(" "),n("van-cell",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance")))]),t._v(" "),1==t.type?n("van-radio-group",{model:{value:t.insurance_amount,callback:function(e){t.insurance_amount=e},expression:"insurance_amount"}},[n("van-cell-group",{staticClass:"insurance_cell_group"},[n("van-cell",{attrs:{title:"",clickable:"",border:!1},on:{click:function(e){t.insurance_amount=7}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-Premium"))+t._s(t.cealBenefits(7))+" U(7% "+t._s(t.$t("question:Insurance-fare"))+" )")]),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("question:Insurance-02-70")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:7}})]},proxy:!0}],null,!1,2611482284)}),t._v(" "),n("van-cell",{attrs:{title:"",clickable:""},on:{click:function(e){t.insurance_amount=10}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-Premium"))+t._s(t.cealBenefits(10))+" U(10%"+t._s(t.$t("question:Insurance-fare"))+")")]),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("question:Insurance-02-100")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:10}})]},proxy:!0}],null,!1,1895878284)}),t._v(" "),n("van-cell",{attrs:{title:"",clickable:"",border:!1},on:{click:function(e){t.insurance_amount=0}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-03")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:0}})]},proxy:!0}],null,!1,2697074147)})],1)],1):n("div",{staticStyle:{height:"30px"}},[t._v("\n                        "+t._s(t.$t("question:redemptionPrice"))+"：\n                        "),7===t.ticketDetail.insurance_amount?n("span",[t._v("70% "+t._s(t.$t("question:repo")))]):t._e(),t._v(" "),10===t.ticketDetail.insurance_amount||0===t.ticketDetail.insurance_amount?n("span",[t._v(t._s(t.$t("question:guaranteedRedemption")))]):t._e()]),t._v(" "),n("br"),t._v(" "),1==t.type?n("van-button",{staticClass:"buy-button",attrs:{loading:t.loading,disabled:t.loading,type:"primary"},on:{click:function(e){return t.startBuyClick()}}},[t._v(t._s(t.$t("question:buyNow")))]):n("van-button",{staticClass:"buy-button",attrs:{loading:t.loading,disabled:t.ticketDetail.insurance_amount<=0||t.loading,type:"info"},on:{click:function(e){return t.startRedemptionClick()}}},[t._v(t._s(t.$t("question:redeemNow")))])]},proxy:!0}])})],1)],1),t._v(" "),n("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(e){t.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},"zd+N":function(t,e,n){var a=n("ePR/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2402a4c0",a,!1,{})}});