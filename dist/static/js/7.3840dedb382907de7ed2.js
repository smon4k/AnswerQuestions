webpackJsonp([7],{"0Mvq":function(t,e,n){"use strict";n("XmAh");var a,i,r,o=n("il3B"),s=n("+zHA"),c=n("NYxO"),u=n("cx+2"),l=n("QKB9"),d=n.n(l),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,r){try{var o=e[i](r),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}e.a=(a={name:"",data:function(){return{loading:!1,ticketDetail:[],pageSize:1e3,currPage:1,total:0,type:1,ticketId:0,purchas_insurance:!1,showPopover:!1,insurance_amount:0,usdtBalance:0,swanlakeBalance:0,userTicketId:0,SCTPrice:0,loadingShow:!1}},created:function(){try{var t=this.$route.query.type;t&&void 0!==t&&(this.type=t);var e=this.$route.query.ticket_id;e&&(this.ticketId=e);var n=this.$route.query.user_ticket_id;n&&(this.userTicketId=n),this.getSCTPrice()}catch(t){}},mounted:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.userId&&t.ticketId>0&&(this.loadingShow=!0,this.getTicketDetail(),this.getUserInfo())}}},computed:f({},Object(c.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},gamesFillingAddress:function(t){return t.base.usdtFillingAddress},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId,ticketId:this.ticketId}}}),components:{},methods:{getSCTPrice:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return 1e9,e.next=3,Object(u.f)(d.a.routerContractAddress,d.a.SCT,d.a.BUSDT);case 3:n=e.sent,t.SCTPrice=t.keepDecimalNotRounding(n,4),console.log("SCTPrice",t.SCTPrice);case 6:case"end":return e.stop()}},e,t)}))()},getTicketDetail:function(){var t=this,e=this.apiUrl+"/Answer/Ticket/getTicketDetail";e=1==this.type?this.apiUrl+"/Answer/Ticket/getTicketDetail":this.apiUrl+"/Answer/Ticket/getUserTicketDetail",axios.get(e,{params:{userId:this.userId,ticketId:this.ticketId,userTicketId:this.userTicketId}}).then(function(e){console.log(e),1e4==e.code?t.ticketDetail=e.data:t.$notify({type:"warning",message:"加载数据失败"})}).catch(function(e){t.$notify({type:"warning",message:e})})},onClickLeft:function(){this.$router.go(-1)},getUserInfo:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:axios.get(t.apiUrl+"/Api/Depositwithdrawal/getFillingRecordUserInfo",{params:{userId:t.userId}}).then(function(){var e=p(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),1e4!=n.code){e.next=12;break}if(a=0,!t.address){e.next=8;break}return e.next=6,Object(u.c)(18,t.gamesFillingAddress);case 6:a=e.sent,console.log("链上USDT余额：",a);case 8:t.swanlakeBalance=Number(n.data.local_balance)+Number(a),console.log("平台USDT可用余额：",t.swanlakeBalance),e.next=13;break;case 12:console.log("get Data error");case 13:t.loadingShow=!1;case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e),t.$notify({type:"danger",message:e})});case 1:case"end":return e.stop()}},e,t)}))()},startBuyClick:function(){var t=this;return this.swanlakeBalance<this.ticketDetail.price?(o.a.confirm({message:"USDT余额不足，请先充值！"}).then(function(){t.$router.push("/usdt")}).catch(function(){return!1}),!1):this.userId<=0?(this.$notify({type:"warning",message:"获取用户信息失败"}),!1):this.ticketId<=0?(this.$notify({type:"warning",message:"获取门票信息失败"}),!1):(this.loading=!0,void setTimeout(function(){Object(s.c)(t.apiUrl+"/Answer/Ticket/startBuyTicket",{userId:t.userId,ticket_id:t.ticketId,insurance_amount:t.insurance_amount,type:t.type},function(e){t.loading=!1,console.log(e),e&&1e4==e.code?e.data?(t.insurance_amount="",t.$notify({type:"success",message:"购买成功!"}),setTimeout(function(){t.$router.push({path:"/ticket/my/list"})},1500)):t.$notify({type:"warning",message:"购买失败"}):t.$notify({type:"warning",message:e.msg})})},2e3))},startRedemptionClick:function(){var t=this;if(this.userTicketId<=0)return this.$notify({type:"warning",message:"Error"}),!1;this.loading=!0,setTimeout(function(){Object(s.c)(t.apiUrl+"/Answer/Ticket/startRedemptionTicket",{userId:t.userId,ticket_id:t.ticketId,user_ticket_id:t.userTicketId},function(e){t.loading=!1,console.log(e),e&&1e4==e.code?(t.insurance_amount="",t.$notify({type:"success",message:"赎回成功!"}),setTimeout(function(){t.$router.push({path:"/ticket/my/list"})},1500)):t.$notify({type:"warning",message:e.msg})})},2e3)},cealBenefits:function(t){var e=Number(this.ticketDetail.price)*(Number(t)/100);return this.toFixed(e,2)},getRealInterestRate:function(t){console.log(t);var e,n=0;return n=1==this.type?Number(t.new_price):Number(t.buy_price),e=Number(t.capped)*this.SCTPrice*365/n*100,this.toFixed(e,2)+"%"}}},r=function(){},(i="mounted")in a?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r,a)},"2kL8":function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("van-nav-bar",{attrs:{title:1==t.type?t.$t("question:ticketBuy"):t.$t("question:ticketRedemption"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"main"},[n("van-cell-group",{attrs:{inset:""}},[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v(t._s(t.ticketDetail.name))])]},proxy:!0}])}),t._v(" "),n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:nominalInterestRate")))]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:realInterestRate")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.ticketDetail.annualized,2))+"%")]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.getRealInterestRate(t.ticketDetail)))])],1)],1),t._v(" "),n("van-divider",{staticStyle:{width:"80%",margin:"0 auto",height:"10px","border-color":"#A79BA9"}}),t._v(" "),1==t.type?n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t.ticketDetail.is_discount&&2==t.ticketDetail.discount_status?n("span",[t._v(t._s(t.$t("question:DiscountPrice")))]):n("span",[t._v(t._s(t.$t("question:denomination")))])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v("USDT "+t._s(t.$t("question:Balance")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[t.ticketDetail.is_discount&&2==t.ticketDetail.discount_status?n("div",[t._v(t._s(t.toFixed(t.ticketDetail.discount_price,2))+" USDT")]):n("div",[t._v(t._s(t.toFixed(t.ticketDetail.price,2))+" USDT")])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.swanlakeBalance,2))+" USDT")])],1)],1):n("div",[n("van-row",[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:buyPrice")))]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.$t("question:denomination")))])],1),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"12"}},[n("div",[t._v(t._s(t.toFixed(t.ticketDetail.buy_price,2))+" USDT")])]),t._v(" "),n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.toFixed(t.ticketDetail.denomination,2))+" USDT")])],1)],1)]},proxy:!0}])}),t._v(" "),n("van-cell",{attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance")))]),t._v(" "),1==t.type?n("van-radio-group",{model:{value:t.insurance_amount,callback:function(e){t.insurance_amount=e},expression:"insurance_amount"}},[n("van-cell-group",{staticClass:"insurance_cell_group"},[n("van-cell",{attrs:{title:"",clickable:"",border:!1},on:{click:function(e){t.insurance_amount=7}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-Premium"))+t._s(t.cealBenefits(7))+" U(7% "+t._s(t.$t("question:Insurance-fare"))+" )")]),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("question:Insurance-02-70")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:7}})]},proxy:!0}],null,!1,2611482284)}),t._v(" "),n("van-cell",{attrs:{title:"",clickable:""},on:{click:function(e){t.insurance_amount=10}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-Premium"))+t._s(t.cealBenefits(10))+" U(10%"+t._s(t.$t("question:Insurance-fare"))+")")]),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("question:Insurance-02-100")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:10}})]},proxy:!0}],null,!1,1895878284)}),t._v(" "),n("van-cell",{attrs:{title:"",clickable:"",border:!1},on:{click:function(e){t.insurance_amount=0}},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",[t._v(t._s(t.$t("question:Insurance-03")))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:0}})]},proxy:!0}],null,!1,2697074147)})],1)],1):n("div",{staticStyle:{height:"30px"}},[t._v("\n                        "+t._s(t.$t("question:redemptionPrice"))+"：\n                        "),7===t.ticketDetail.insurance_amount?n("span",[t._v("70% "+t._s(t.$t("question:repo")))]):t._e(),t._v(" "),10===t.ticketDetail.insurance_amount||0===t.ticketDetail.insurance_amount?n("span",[t._v(t._s(t.$t("question:guaranteedRedemption")))]):t._e()]),t._v(" "),n("br"),t._v(" "),1==t.type?n("van-button",{staticClass:"buy-button",attrs:{loading:t.loading,disabled:t.loading,type:"primary"},on:{click:function(e){return t.startBuyClick()}}},[t._v(t._s(t.$t("question:buyNow")))]):n("van-button",{staticClass:"buy-button",attrs:{loading:t.loading,disabled:t.ticketDetail.insurance_amount<=0||t.loading,type:"info"},on:{click:function(e){return t.startRedemptionClick()}}},[t._v(t._s(t.$t("question:redeemNow")))])]},proxy:!0}])})],1)],1),t._v(" "),n("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(e){t.loadingShow=!1}}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[n("van-loading",{attrs:{size:"24px",vertical:"",color:"#fff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)},staticRenderFns:[]};e.a=a},A2uJ:function(t,e,n){var a=n("xmHC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("342e5d02",a,!0,{})},Bs3k:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-e0ff30f4] .bg{background-image:url("+a(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed}.container[data-v-e0ff30f4] .van-nav-bar{background-color:transparent}.container[data-v-e0ff30f4] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-e0ff30f4] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-e0ff30f4] .main{padding-bottom:60px}.container[data-v-e0ff30f4] .main .buy-button{width:150px;height:35px;font-size:15px;border-radius:20px;background-color:#8c1af5;border:0}.container[data-v-e0ff30f4] .main .van-cell-group--inset{background:linear-gradient(#00c3e9,#2d50d2);border:2px solid #fff;border-radius:20px;margin-top:10px}.container[data-v-e0ff30f4] .main .van-cell-group--inset .insurance_cell_group{background-color:unset!important;position:unset!important}.container[data-v-e0ff30f4] .main .van-cell-group--inset .insurance_cell_group .van-cell{text-align:left!important}.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell{background-color:transparent;color:#fff;text-align:center}.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell .van-checkbox{display:inline-flex}.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell:after{border-bottom:unset}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ticket/detail.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,cAAc,CACxO,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,kCAAkC,mBAAmB,CACpD,AACD,8CAA8C,YAAY,YAAY,eAAe,mBAAmB,yBAAyB,QAAQ,CACxI,AACD,yDAAyD,4CAA6C,sBAAsB,mBAAmB,eAAe,CAC7J,AACD,+EAA+E,iCAAkC,wBAAyB,CACzI,AACD,yFAAyF,yBAA0B,CAClH,AACD,mEAAmE,6BAA6B,WAAW,iBAAiB,CAC3H,AACD,iFAAiF,mBAAmB,CACnG,AACD,yEAA0E,mBAAmB,CAC5F",file:"detail.vue",sourcesContent:['\n.container[data-v-e0ff30f4] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-e0ff30f4] .van-nav-bar{background-color:transparent\n}\n.container[data-v-e0ff30f4] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-e0ff30f4] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-e0ff30f4] .main{padding-bottom:60px\n}\n.container[data-v-e0ff30f4] .main .buy-button{width:150px;height:35px;font-size:15px;border-radius:20px;background-color:#8C1AF5;border:0\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset{background:linear-gradient(#00C3E9, #2D50D2);border:2px solid #fff;border-radius:20px;margin-top:10px\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset .insurance_cell_group{background-color:unset !important;position:unset !important\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset .insurance_cell_group .van-cell{text-align:left !important\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell{background-color:transparent;color:#fff;text-align:center\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell .van-checkbox{display:inline-flex\n}\n.container[data-v-e0ff30f4] .main .van-cell-group--inset .van-cell::after{border-bottom:unset\n}\n'],sourceRoot:""}])},PySF:function(t,e,n){var a=n("Bs3k");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("ac885ab2",a,!0,{})},WgLj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("0Mvq"),i=n("2kL8");var r=function(t){n("A2uJ"),n("PySF")},o=n("VU/8")(a.a,i.a,!1,r,"data-v-e0ff30f4",null);e.default=o.exports},xmHC:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".van-popover__content{width:60%;font-size:15px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ticket/detail.vue"],names:[],mappings:"AAKA,sBACI,UAAW,AACX,cAAgB,CACnB",file:"detail.vue",sourcesContent:["\n.van-popover {\n    /* top: 200px !important;\n    left: 20px !important; */\n}\n.van-popover__content {\n    width: 60%;\n    font-size: 15px;\n}\n"],sourceRoot:""}])}});