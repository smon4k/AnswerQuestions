webpackJsonp([9],{"3E3e":function(t,n,e){var a=e("cRes");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("2554e66e",a,!1,{})},"7rgu":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),e("van-nav-bar",{attrs:{title:t.$t("question:myTicket"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),e("div",{staticClass:"main"},[t.list.length?e("div",[e("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-tab",{attrs:{title:t.$t("question:bought")}},t._l(t.list,function(n,a){return e("div",{key:a},[1==n.is_ransom?e("van-cell-group",{attrs:{inset:""}},[e("van-cell",{attrs:{title:"",value:"",label:n.time},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v("ID: "+t._s(n.id))]},proxy:!0},{key:"title",fn:function(){return[e("div",[t._v(t._s(n.name))])]},proxy:!0},{key:"right-icon",fn:function(){return[n.is_activation?e("div",{staticStyle:{"align-items":"center",display:"flex"}},[0==n.is_start&&1==n.is_ransom?e("van-button",{staticClass:"ticket-button",staticStyle:{height:"20px"},attrs:{disabled:!n.is_activation,type:"primary"},on:{click:function(e){return t.startTicket(n)}}},[t._v(t._s(t.$t("question:startTicket")))]):2==n.is_ransom?e("van-tag",{staticStyle:{height:"20px"},attrs:{plain:"",type:"primary",color:"#7232dd"}},[t._v(t._s(t.$t("question:redeemed")))]):e("van-tag",{staticStyle:{height:"20px"},attrs:{plain:"",type:"primary"}},[t._v(t._s(t.$t("question:using")))]),t._v("\n                                             \n                                            "),e("van-tag",{staticStyle:{height:"20px"},attrs:{plain:"",color:"#969799","text-color":"#969799"}},[1==n.is_answer?e("span",[t._v(t._s(t.$t("question:noAnswer")))]):t._e(),t._v(" "),3==n.is_answer?e("span",[t._v(t._s(t.$t("question:answered")))]):t._e()])],1):e("div",[e("van-tag",{staticStyle:{height:"20px"},attrs:{plain:"",type:"primary",color:"#7232dd"}},[t._v(t._s(t.$t("question:toBeActivated")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.$t("question:hoursActivation",{time:n.activation_time})))])],1)]},proxy:!0}],null,!0)}),t._v(" "),e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[e("van-row",[e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:nominalInterestRate")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.annualized,2))+"%")])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("span",[t._v(t._s(t.$t("question:realInterestRate")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.getRealInterestRate(n)))])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("br"),t._v(" "),e("span",[t._v(t._s(t.$t("question:denomination")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.denomination,2))+" USDT")])]),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("br"),t._v(" "),e("span",[t._v(t._s(t.$t("question:buyPrice")))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.toFixed(n.price,2))+" USDT")])])],1)],1),t._v(" "),e("van-divider"),t._v(" "),e("div",[e("van-row",[e("van-col",{attrs:{span:"12"}},[1==n.is_ransom?e("van-button",{staticClass:"ticket-button",attrs:{round:"",type:"info",disabled:n.insurance_amount<=0},on:{click:function(e){return t.startRansom(n)}}},[t._v(t._s(t.$t("question:redemption")))]):e("van-button",{staticClass:"ticket-button",attrs:{disabled:"",round:"",type:"info"}},[t._v(t._s(t.$t("question:redeemed")))])],1),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("van-button",{staticClass:"ticket-button",attrs:{round:"",type:"info"},on:{click:function(e){return t.showTicketAward(n)}}},[t._v(t._s(t.$t("question:viewRewards")))])],1)],1)],1)]},proxy:!0}],null,!0)})],1):t._e()],1)}),0),t._v(" "),e("van-tab",{attrs:{title:t.$t("question:redeemed")}},t._l(t.list,function(n,a){return e("div",{key:a},[2==n.is_ransom?e("van-cell-group",{attrs:{inset:""}},[e("van-cell",{attrs:{title:"",value:"",label:n.time},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v("ID: "+t._s(n.id))]},proxy:!0},{key:"title",fn:function(){return[e("div",[t._v(t._s(n.name))])]},proxy:!0},{key:"right-icon",fn:function(){return[e("van-tag",{staticStyle:{height:"20px"},attrs:{plain:"",type:"primary",color:"#7232dd"}},[t._v(t._s(t.$t("question:redeemed")))])]},proxy:!0}],null,!0)}),t._v(" "),e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[e("van-row",[e("van-col",{attrs:{span:"24"}},[t._v(t._s(t.$t("question:denomination")))])],1),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"24"}},[t._v(t._s(t.toFixed(n.price,2))+" USDT")])],1)],1),t._v(" "),e("van-divider"),t._v(" "),e("div",[e("van-row",[e("van-col",{attrs:{span:"12"}},[1==n.is_ransom?e("van-button",{staticClass:"ticket-button",attrs:{round:"",type:"info"},on:{click:function(e){return t.startRansom(n)}}},[t._v(t._s(t.$t("question:redemption")))]):e("van-button",{staticClass:"ticket-button",attrs:{disabled:"",round:"",type:"info"}},[t._v(t._s(t.$t("question:redeemed")))])],1),t._v(" "),e("van-col",{attrs:{span:"12"}},[e("van-button",{staticClass:"ticket-button",attrs:{round:"",type:"info"},on:{click:function(e){return t.showTicketAward(n)}}},[t._v(t._s(t.$t("question:viewRewards")))])],1)],1)],1)]},proxy:!0}],null,!0)})],1):t._e()],1)}),0)],1)],1):e("van-empty",{attrs:{description:t.$t("question:noTicket")}},[e("van-button",{staticClass:"ticket-button",attrs:{type:"info"},on:{click:function(n){return t.buyTicket()}}},[t._v(t._s(t.$t("question:ticketBuy")))])],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};n.a=i},"8ThQ":function(t,n,e){t.exports=e.p+"static/img/2.d93b15e.jpg"},cRes:function(t,n,e){var a=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"\n.container[data-v-0f451f65] .bg{background-image:url("+a(e("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-0f451f65] .van-tab{color:#fff\n}\n.container[data-v-0f451f65] .van-nav-bar{background-color:transparent\n}\n.container[data-v-0f451f65] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-0f451f65] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-0f451f65] .van-tabs__nav{background-color:transparent\n}\n.container[data-v-0f451f65] .van-tabs__nav .van-tab--active{color:#fff\n}\n.container[data-v-0f451f65] .van-empty__description{color:#fff\n}\n.container[data-v-0f451f65] .main{padding-bottom:60px\n}\n.container[data-v-0f451f65] .main .ticket-button{width:90px;height:30px;font-size:10px;border-radius:20px;background-color:#8C1AF5;border:0\n}\n.container[data-v-0f451f65] .main .buy-button{width:100px;height:30px;font-size:10px;border-radius:20px;background-color:#8C1AF5;border:0\n}\n.container[data-v-0f451f65] .main .van-cell-group--inset{margin-top:10px\n}\n.container[data-v-0f451f65] .main .van-cell-group--inset .van-cell{background-color:#AE8BF5;text-align:center;color:#fff\n}\n.container[data-v-0f451f65] .main .van-cell-group--inset .van-cell .van-cell__value{display:none\n}\n.container[data-v-0f451f65] .main .van-cell-group--inset .van-cell .van-cell__label{color:#fff\n}\n.container[data-v-0f451f65] .main .van-tag--primary.van-tag--plain{color:#8C1AF5\n}\n",""])},eSQX:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("fKcC"),i=e("7rgu"),r=!1;var s=function(t){r||e("3E3e")},o=e("VU/8")(a.a,i.a,!1,s,"data-v-0f451f65",null);o.options.__file="src/views/ticket/my.vue",n.default=o.exports},fKcC:function(t,n,e){"use strict";var a=e("mtWM"),i=e.n(a),r=e("NYxO"),s=e("Fd2+"),o=e("QKB9"),c=e.n(o),u=e("cx+2"),l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};function v(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){return function a(i,r){try{var s=n[i](r),o=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}n.a={name:"",data:function(){return{list:[],loading:!1,finished:!1,limit:20,page:1,total:0,radio:0,ticketStatus:!1,H2OPrice:0,active:"1"}},created:function(){this.getH2OPrice()},watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.userId&&this.getMyTicketList()}}},computed:l({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,userId:this.userId}}}),components:{},methods:{getH2OPrice:function(){var t=this;return v(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return 1e9,n.next=3,Object(u.d)(c.a.routerContractAddress,c.a.H2O,c.a.BUSDT);case 3:e=n.sent,t.H2OPrice=t.keepDecimalNotRounding(e,4);case 5:case"end":return n.stop()}},n,t)}))()},startBuy:function(t){this.$router.push({path:"/ticket/detail",query:{type:1,ticket_id:t.id}})},getMyTicketList:function(t){var n=this;return v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.finished&&(n.list=[],n.finished=!1),(!t||void 0==t||t.length<=0)&&(t={limit:n.limit,page:n.page,userId:n.userId}),n.userId&&i.a.get(n.apiUrl+"/Answer/Ticket/getMyTicketList",{params:t}).then(function(e){n.loading=!1,console.log(e),1e4==e.code?(e.data&&e.data.lists&&e.data.lists.length>0&&(n.page<=1?n.list=e.data.lists:t.page<=e.data.allpage&&n.list.push(e.data.lists)),t.page>=e.data.allpage&&(n.finished=!0),n.total=e.data.count,n.page+=1,console.log(n.list)):n.$notify({type:"warning",message:"加载数据失败"})}).catch(function(t){n.$notify({type:"warning",message:t})}),n.loading=!1;case 4:case"end":return e.stop()}},e,n)}))()},onClickLeft:function(){this.$router.go(-1)},startTicket:function(t){var n=this;s.a.confirm({title:"",message:"门票只能开启一张，确认切换吗？"}).then(function(){i.a.get(n.apiUrl+"/Answer/Ticket/startTicket",{params:{userId:n.userId,ticket_id:t.ticket_id,user_ticket_id:t.id}}).then(function(t){1e4==t.code?(n.$notify({type:"success",message:"门票开启成功"}),setTimeout(function(){n.list=[],n.page=1,n.getMyTicketList()},1e3)):n.$notify({type:"warning",message:"开启失败"})}).catch(function(t){n.$notify({type:"warning",message:t})})}).catch(function(){console.log("已取消切换")})},showTicketAward:function(t){this.$router.push({path:"/ticket/my/award",query:{type:1,user_ticket_id:t.id,ticket_name:t.name}})},startRansom:function(t){console.log(t),this.$router.push({path:"/ticket/detail",query:{type:2,ticket_id:t.ticket_id,user_ticket_id:t.id}})},buyTicket:function(){this.$router.push("/ticket/list")},cealPaybackPeriod:function(t){var n=10/(t.capped*this.H2OPrice);return this.keepDecimalNotRounding(n,1,!0)},getRealInterestRate:function(t){var n;return n=Number(t.capped)*this.H2OPrice*365/Number(t.buy_price)*100,this.toFixed(n,2)+"%"}},mounted:function(){}}}});