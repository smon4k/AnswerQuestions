webpackJsonp([17],{FY19:function(t,n,a){var e=a("kxFB");(t.exports=a("FZ+f")(!0)).push([t.i,".container[data-v-6686565f] .bg{background-image:url("+e(a("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-6686565f] .van-tab{color:#fff}.container[data-v-6686565f] .van-nav-bar{background-color:transparent}.container[data-v-6686565f] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-6686565f] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-6686565f] .van-tabs__wrap{height:40px}.container[data-v-6686565f] .van-tabs__nav{background-color:transparent}.container[data-v-6686565f] .van-tabs__nav .van-tabs__nav--card{margin:0;height:40px}.container[data-v-6686565f] .van-empty__description,.container[data-v-6686565f] .van-tabs__nav .van-tab--active{color:#fff}.container[data-v-6686565f] .main{width:100%;height:100vh;margin:0 auto;overflow:auto}.container[data-v-6686565f] .main .list-bg{position:absolute;width:100%;height:100%}.container[data-v-6686565f] .main .title{height:63px}.container[data-v-6686565f] .main .buy-button{width:100px;height:30px;font-size:10px;border-radius:20px;background-color:#8c1af5;border:0}.container[data-v-6686565f] .main .van-cell-group--inset{margin-top:10px}.container[data-v-6686565f] .main .van-cell-group--inset .van-cell{text-align:center;background-color:transparent;color:#fff;border-bottom:0}.container[data-v-6686565f] .main .van-cell-group--inset .van-cell .van-cell__value{display:none}.container[data-v-6686565f] .main .van-cell-group--inset .van-cell:after{border-bottom:0}.container[data-v-6686565f] .tag{position:absolute;right:0;top:0;border-radius:0 5px 0 15px;color:#fff;padding:2px 15px;font-size:15px;line-height:30px;background:linear-gradient(to right bottom,hsla(0,0%,100%,.4),transparent) var(--bg,#ea3447);background-blend-mode:soft-light}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ticket/list.vue"],names:[],mappings:"AACA,gCAAgC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACzP,AACD,qCAAqC,UAAU,CAC9C,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,4CAA4C,WAAW,CACtD,AACD,2CAA2C,4BAA4B,CACtE,AACD,gEAAgE,SAAS,WAAW,CACnF,AAGD,gHAAoD,UAAU,CAC7D,AACD,kCAAkC,WAAW,aAAa,cAAc,aAAa,CACpF,AACD,2CAA2C,kBAAkB,WAAW,WAAW,CAClF,AACD,yCAAyC,WAAW,CACnD,AACD,8CAA8C,YAAY,YAAY,eAAe,mBAAmB,yBAAyB,QAAQ,CACxI,AACD,yDAAyD,eAAe,CACvE,AACD,mEAAmE,kBAAkB,6BAA6B,WAAW,eAAe,CAC3I,AACD,oFAAoF,YAAY,CAC/F,AACD,yEAA0E,eAAe,CACxF,AACD,iCAAiC,kBAAkB,QAAQ,MAAM,2BAA+B,WAAW,iBAAiB,eAAe,iBAAiB,6FAAmG,gCAAgC,CAC9R",file:"list.vue",sourcesContent:['\n.container[data-v-6686565f] .bg{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-6686565f] .van-tab{color:#fff\n}\n.container[data-v-6686565f] .van-nav-bar{background-color:transparent\n}\n.container[data-v-6686565f] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-6686565f] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-6686565f] .van-tabs__wrap{height:40px\n}\n.container[data-v-6686565f] .van-tabs__nav{background-color:transparent\n}\n.container[data-v-6686565f] .van-tabs__nav .van-tabs__nav--card{margin:0;height:40px\n}\n.container[data-v-6686565f] .van-tabs__nav .van-tab--active{color:#fff\n}\n.container[data-v-6686565f] .van-empty__description{color:#fff\n}\n.container[data-v-6686565f] .main{width:100%;height:100vh;margin:0 auto;overflow:auto\n}\n.container[data-v-6686565f] .main .list-bg{position:absolute;width:100%;height:100%\n}\n.container[data-v-6686565f] .main .title{height:63px\n}\n.container[data-v-6686565f] .main .buy-button{width:100px;height:30px;font-size:10px;border-radius:20px;background-color:#8C1AF5;border:0\n}\n.container[data-v-6686565f] .main .van-cell-group--inset{margin-top:10px\n}\n.container[data-v-6686565f] .main .van-cell-group--inset .van-cell{text-align:center;background-color:transparent;color:#fff;border-bottom:0\n}\n.container[data-v-6686565f] .main .van-cell-group--inset .van-cell .van-cell__value{display:none\n}\n.container[data-v-6686565f] .main .van-cell-group--inset .van-cell::after{border-bottom:0\n}\n.container[data-v-6686565f] .tag{position:absolute;right:0;top:0;border-radius:0px 5px 0px 15px;color:#fff;padding:2px 15px;font-size:15px;line-height:30px;background:linear-gradient(to right bottom, rgba(255,255,255,0.4), transparent) var(--bg, #EA3447);background-blend-mode:soft-light\n}\n'],sourceRoot:""}])},FiEX:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("dvzW"),i=a("UXhY");var r=function(t){a("OdW7")},o=a("VU/8")(e.a,i.a,!1,r,"data-v-6686565f",null);n.default=o.exports},OdW7:function(t,n,a){var e=a("FY19");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("0cd84470",e,!0,{})},UXhY:function(t,n,a){"use strict";var e={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),e("van-nav-bar",{attrs:{title:t.$t("nav:tickets"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),e("div",{staticClass:"main"},[e("van-tabs",{model:{value:t.cardActive,callback:function(n){t.cardActive=n},expression:"cardActive"}},[e("van-tab",{attrs:{title:t.$t("question:buyTickets")}},t._l(t.tableData,function(n,i){return e("van-cell-group",{key:i,attrs:{inset:""}},[e("img",{staticClass:"list-bg",attrs:{src:a("R+Yd"),alt:""}}),t._v(" "),e("van-cell",{staticClass:"title",scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"custom-title"},[t._v(t._s(n.name))]),t._v(" "),!n.is_discount||2!=n.discount_status&&1!=n.discount_status?t._e():e("div",{staticClass:"tag"},[t._v("限时折扣")])]},proxy:!0}],null,!0)}),t._v(" "),e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"custom-title"},[e("van-row",[e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:denomination")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.denomination,2))+" USDT")])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:buyPrice")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.price,2))+" USDT")])])],1)],1),t._v(" "),e("br"),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:nominalInterestRate")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.annualized,2))+" %")])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:realInterestRate")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.getRealInterestRate(n)))])])],1),t._v(" "),!n.is_discount||2!=n.discount_status&&1!=n.discount_status?t._e():e("div",[e("van-divider",{staticStyle:{width:"80%",margin:"0 auto",height:"10px"}}),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:DiscountStartTime")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(n.start_time))])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:DiscountEndTime")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(n.end_time))])])],1),t._v(" "),e("van-divider",{staticStyle:{width:"80%",margin:"0 auto",height:"10px","border-color":"#A79BA9"}}),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:DiscountPrice")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.discount_price,2))+" USDT")])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:Discount")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.discount,2))+" 折")])])],1)],1)]},proxy:!0}],null,!0)}),t._v(" "),e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[e("van-button",{staticClass:"buy-button",attrs:{type:"primary"},on:{click:function(a){return t.startBuy(n)}}},[t._v(t._s(t.$t("question:buy")))])],1)]},proxy:!0}],null,!0)})],1)}),1),t._v(" "),e("van-tab",{attrs:{title:t.$t("question:myTicket"),to:"/ticket/my/list"}})],1)],1),t._v(" "),e("van-overlay",{attrs:{show:t.loadingShow},on:{click:function(n){t.loadingShow=!1}}},[e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[e("van-loading",{attrs:{size:"24px",vertical:"",color:"#0094ff"}},[t._v(t._s(t.$t("question:DataLoading")))])],1)])],1)},staticRenderFns:[]};n.a=e},dvzW:function(t,n,a){"use strict";var e,i,r,o=a("mtWM"),s=a.n(o),c=a("NYxO"),v=a("QKB9"),l=a.n(v),u=a("cx+2"),d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t};function A(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,a){return function e(i,r){try{var o=n[i](r),s=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(s).then(function(t){e("next",t)},function(t){e("throw",t)});t(s)}("next")})}}n.a=(e={name:"",data:function(){return{tableData:[],pageSize:1e3,currPage:1,total:0,cardActive:0,SCTPrice:0,loadingShow:!1}},created:function(){this.getListData(),this.getSCTPrice()},mounted:function(){var t=this;return A(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("111");case 1:case"end":return t.stop()}},n,t)}))()},activated:function(){this.cardActive=0},watch:{},computed:d({},Object(c.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address}}}),components:{},methods:{getSCTPrice:function(){var t=this;return A(regeneratorRuntime.mark(function n(){var a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return 1e9,n.next=3,Object(u.e)(l.a.routerContractAddress,l.a.SCT,l.a.BUSDT);case 3:a=n.sent,t.SCTPrice=t.keepDecimalNotRounding(a,4),console.log("SCTPrice",t.SCTPrice);case 6:case"end":return n.stop()}},n,t)}))()},startBuy:function(t){this.$router.push({path:"/ticket/detail",query:{type:1,ticket_id:t.id}})},getListData:function(){var t=this,n={limit:this.pageSize,page:this.currPage};this.loadingShow=!0,s.a.get(this.apiUrl+"/Answer/Ticket/getTicketList",{params:n}).then(function(a){t.loading=!1,console.log(a),1e4==a.code?(a.data&&a.data.lists&&a.data.lists.length>0&&(t.currPage<=1?t.tableData=a.data.lists:n.page<=a.data.allpage&&t.tableData.push(a.data.lists)),console.log(t.tableData)):t.$notify({type:"warning",message:"加载数据失败"}),t.loadingShow=!1}).catch(function(n){t.$notify({type:"warning",message:n})})},onClickLeft:function(){this.$router.go(-1)},cealPaybackPeriod:function(t){var n=Number(t.price)/(t.capped*this.SCTPrice);return this.keepDecimalNotRounding(n,1,!0)},getRealInterestRate:function(t){console.log(t);var n,a=t.price;return!t.is_discount||2!=t.discount_status&&1!=t.discount_status||(a=t.discount_price),n=Number(t.capped)*this.SCTPrice*365/Number(a)*100,this.toFixed(n,2)+"%"}}},r=function(){},(i="mounted")in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e)}});