webpackJsonp([10],{"7QJv":function(t,a,e){var n=e("kaHK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("407d47bf",n,!0,{})},"8ThQ":function(t,a,e){t.exports=e.p+"static/img/2.45de2af.jpg"},X5Yc:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),e("van-nav-bar",{attrs:{title:"W2E","left-text":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),e("div",{staticClass:"attContainer"},[e("van-tabs",{model:{value:t.cardActive,callback:function(a){t.cardActive=a},expression:"cardActive"}},[e("van-tab",{attrs:{title:t.$t("question:tickets"),to:"/ticket/list"}}),t._v(" "),e("van-tab",{attrs:{title:t.$t("question:award")}},[e("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[e("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t.list?e("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("question:noMore")},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a,n){return e("van-collapse-item",{key:n,attrs:{title:n,name:n},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[e("span",[t._v(t._s(n))]),t._v("      \n                                            "),e("span",[t._v(t._s(t.$t("question:userNumber"))+"："+t._s(a.number_user))]),t._v("   \n                                            "),e("span",[t._v(t._s(t.$t("question:award"))+"："+t._s(t.toFixed(a.count_award,2))+" H2O")])])]},proxy:!0}],null,!0)},[t._v(" "),e("div",{staticClass:"attent-list"},[e("ul",t._l(a.list,function(a,n){return e("li",{key:n,staticClass:"attent-item"},[e("van-cell",{attrs:{center:"",title:"",value:t.$t("question:award")+": "+a.count_award+" H2O"},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("img",{staticStyle:{"border-radius":"10%",height:"40px",width:"40px"},attrs:{src:a.avatar,alt:"",width:"30"},on:{click:function(a){return t.pushMyHomepage(t.itemss)}}}),t._v(" "),e("span",[t._v("  "+t._s(a.nickname?a.nickname:"Unnamed"))])])]},proxy:!0}],null,!0)}),t._v(" "),e("van-divider",{style:{borderColor:"#c8c9cc"}})],1)}),0)])])}),1):e("van-empty",{attrs:{description:"没有任何奖励哦"}})],1)],1)],1),t._v(" "),e("van-tab",{attrs:{title:t.$t("question:myTicket"),to:"/ticket/my/list"}})],1)],1)],1)},staticRenderFns:[]};a.a=n},"eZ+L":function(t,a,e){"use strict";var n=e("mtWM"),i=e.n(n),r=e("NYxO"),o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};function s(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}a.a={name:"",data:function(){return{list:[],notesList:[],loading:!1,notesLoading:!1,finished:!1,notesFinished:!1,limit:1e5,page:1,notesPage:1,notesTotal:0,activeName:"1",active:0,cardActive:1}},created:function(){this.getDate()},computed:o({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{apiUrl:this.apiUrl}}}),watch:{changeData:{immediate:!0,handler:function(t){console.log(t),this.getAwardList()}}},components:{},methods:{tabsChange:function(t,a){var e=this;0==t&&this.list.length<=0&&(this.finished=!1,this.page=1,this.loading=!0,setTimeout(function(){e.getAwardList()},300)),1==t&&this.notesList.length<=0&&(this.notesFinished=!1,this.notesPage=1,this.notesAwardLoading=!0,setTimeout(function(){e.getNotesAwardList()},300))},getAwardList:function(t){var a,e=this;return(a=regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.finished=!0,console.log((new Date).getFullYear()),e.finished&&(e.list=[],e.finished=!1),(!t||void 0==t||t.length<=0)&&(t={limit:e.limit,page:e.page}),i.a.get(e.apiUrl+"/Answer/Award/getMiningRankingAwardList",{params:t}).then(function(a){if(console.log(a),1e4==a.code)if(a.data&&a.data.lists){var n=a.data&&a.data.lists||[];e.page<=1?(e.list=n,e.$forceUpdate()):t.page<=a.data.allpage&&(e.list=[].concat(s(e.list),s(n)),e.$forceUpdate()),t.page>=a.data.allpage?e.finished=!0:e.finished=!1,e.total=a.data.count,e.page+=1}else e.list=[],e.finished=!0;else e.$message.error("加载数据失败");e.loading=!1}).catch(function(t){console.log(t)}),e.loading=!1;case 6:case"end":return a.stop()}},a,e)}),function(){var t=a.apply(this,arguments);return new Promise(function(a,e){return function n(i,r){try{var o=t[i](r),s=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});a(s)}("next")})})()},onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var t=this;this.finished=!1,this.page=1,this.loading=!0,setTimeout(function(){t.getAwardList()},300)},getDate:function(){var t=new Date,a={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()},e=a.month>=10?a.month:"0"+a.month,n=a.date>=10?a.date:"0"+a.date;this.activeName=a.year+"-"+e+"-"+n},pushMyHomepage:function(t){this.$router.push({name:"my",params:{userId:t.user_id}})},pushHomepage:function(t){console.log(t),1==t.note_type?this.$router.push({name:"detailNotes",params:t,query:{id:t.note_id}}):this.$router.push({name:"detailVideo",params:t,query:{id:t.note_id}})}},mounted:function(){}}},kaHK:function(t,a,e){var n=e("kxFB");(t.exports=e("FZ+f")(!0)).push([t.i,".container[data-v-31176ead]{width:100%}.container[data-v-31176ead] .bg{background-image:url("+n(e("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-31176ead] .van-nav-bar{background-color:transparent}.container[data-v-31176ead] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px}.container[data-v-31176ead] .van-nav-bar .van-nav-bar__title{color:#fff}.container[data-v-31176ead] .van-tabs__wrap{height:40px}.container[data-v-31176ead] .van-tabs__content{width:90%;margin:0 auto;margin-top:15px}.container[data-v-31176ead] .van-tabs__content .van-hairline--top-bottom:after,.container[data-v-31176ead] .van-tabs__content .van-hairline-unset--top-bottom:after{border-width:0}.container[data-v-31176ead] .van-tabs__nav{background-color:transparent}.container[data-v-31176ead] .van-tabs__nav .van-tabs__nav--card{margin:0;height:40px}.container[data-v-31176ead] .van-empty__description,.container[data-v-31176ead] .van-tabs__nav .van-tab--active{color:#fff}.container[data-v-31176ead] .attContainer{width:100%;height:80vh;margin:0 auto;overflow:auto}.container[data-v-31176ead] .attContainer .refresh{padding-bottom:50px}.container[data-v-31176ead] .attContainer .content,.container[data-v-31176ead] .attContainer .content img,.container[data-v-31176ead] .attContainer .refresh .van-pull-refresh__track{width:100%}.container[data-v-31176ead] .attContainer .title{height:30px;line-height:30px;font-size:18px;color:#9c9d9e;background-color:#f5f8fa;padding-left:10px}.container[data-v-31176ead] .attContainer .avatar-item .left{display:flex;align-items:center}.container[data-v-31176ead] .attContainer .avatar-item .left span{margin-left:10px}.container[data-v-31176ead] .attContainer .avatar-item .left img{border-radius:10%;height:40px;width:40px}.container[data-v-31176ead] .attContainer .attent-list{width:100%;font-size:13px;margin:0 auto}.container[data-v-31176ead] .attContainer .attent-list ul>li{list-style:none}.container[data-v-31176ead] .attContainer .attent-list .attent-item{flex-direction:row;background:#fff}.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item{font-size:13px;width:90%;text-align:center;margin:0 auto}.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px}.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px}.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .left{display:flex;align-items:center}.container[data-v-31176ead] .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0}.container[data-v-31176ead] .attContainer .attent-list .attent-item .left{display:flex;align-items:center;vertical-align:middle}.container[data-v-31176ead] .attContainer .attent-list .attent-item .left img{border-radius:10%;height:35px;width:35px}.container[data-v-31176ead] .attContainer .attent-list .attent-item .left span{margin-left:10px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/award/list.vue"],names:[],mappings:"AACA,4BAA4B,UAAU,CACrC,AACD,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,4BAA4B,CACpE,AACD,8DAA8D,WAAW,cAAc,CACtF,AACD,6DAA6D,UAAU,CACtE,AACD,4CAA4C,WAAW,CACtD,AACD,+CAA+C,UAAU,cAAc,eAAe,CACrF,AACD,oKAAsK,cAAc,CACnL,AACD,2CAA2C,4BAA4B,CACtE,AAGD,gEAAgE,SAAS,WAAW,CACnF,AAGD,gHAAoD,UAAU,CAC7D,AACD,0CAA0C,WAAW,YAAY,cAAc,aAAa,CAC3F,AACD,mDAAmD,mBAAmB,CACrE,AAKD,sLAAuD,UAAU,CAChE,AACD,iDAAiD,YAAY,iBAAiB,eAAe,cAAc,yBAAyB,iBAAiB,CACpJ,AACD,6DAA6D,aAAa,kBAAkB,CAC3F,AACD,kEAAkE,gBAAgB,CACjF,AACD,iEAAiE,kBAAkB,YAAY,UAAU,CACxG,AACD,uDAAuD,WAAW,eAAe,aAAa,CAC7F,AACD,6DAA6D,eAAe,CAC3E,AACD,oEAAoE,mBAAmB,eAAe,CACrG,AACD,+EAA+E,eAAe,UAAU,kBAAkB,aAAa,CACtI,AACD,qFAAqF,gBAAgB,iBAAiB,WAAW,CAChI,AACD,yFAAyF,gBAAgB,CACxG,AACD,qFAAqF,aAAa,kBAAkB,CACnH,AACD,iFAAiF,iBAAiB,YAAY,CAC7G,AACD,0EAA0E,aAAa,mBAAmB,qBAAqB,CAC9H,AACD,8EAA8E,kBAAkB,YAAY,UAAU,CACrH,AACD,+EAA+E,gBAAgB,CAC9F",file:"list.vue",sourcesContent:['\n.container[data-v-31176ead]{width:100%\n}\n.container[data-v-31176ead] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-31176ead] .van-nav-bar{background-color:transparent\n}\n.container[data-v-31176ead] .van-nav-bar .van-nav-bar__left i{color:#fff;font-size:20px\n}\n.container[data-v-31176ead] .van-nav-bar .van-nav-bar__title{color:#fff\n}\n.container[data-v-31176ead] .van-tabs__wrap{height:40px\n}\n.container[data-v-31176ead] .van-tabs__content{width:90%;margin:0 auto;margin-top:15px\n}\n.container[data-v-31176ead] .van-tabs__content .van-hairline--top-bottom::after,.container[data-v-31176ead] .van-tabs__content .van-hairline-unset--top-bottom::after{border-width:0\n}\n.container[data-v-31176ead] .van-tabs__nav{background-color:transparent\n}\n.container[data-v-31176ead] .van-tabs__nav .van-tabs__nav--card{margin:0;height:40px\n}\n.container[data-v-31176ead] .van-tabs__nav .van-tabs__nav--card{margin:0;height:40px\n}\n.container[data-v-31176ead] .van-tabs__nav .van-tab--active{color:#fff\n}\n.container[data-v-31176ead] .van-empty__description{color:#fff\n}\n.container[data-v-31176ead] .attContainer{width:100%;height:80vh;margin:0 auto;overflow:auto\n}\n.container[data-v-31176ead] .attContainer .refresh{padding-bottom:50px\n}\n.container[data-v-31176ead] .attContainer .refresh .van-pull-refresh__track{width:100%\n}\n.container[data-v-31176ead] .attContainer .content{width:100%\n}\n.container[data-v-31176ead] .attContainer .content img{width:100%\n}\n.container[data-v-31176ead] .attContainer .title{height:30px;line-height:30px;font-size:18px;color:#9c9d9e;background-color:#f5f8fa;padding-left:10px\n}\n.container[data-v-31176ead] .attContainer .avatar-item .left{display:flex;align-items:center\n}\n.container[data-v-31176ead] .attContainer .avatar-item .left span{margin-left:10px\n}\n.container[data-v-31176ead] .attContainer .avatar-item .left img{border-radius:10%;height:40px;width:40px\n}\n.container[data-v-31176ead] .attContainer .attent-list{width:100%;font-size:13px;margin:0 auto\n}\n.container[data-v-31176ead] .attContainer .attent-list ul>li{list-style:none\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item{flex-direction:row;background:#fff\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item{font-size:13px;width:90%;text-align:center;margin:0 auto\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .list-item .left{display:flex;align-items:center\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .left{display:flex;align-items:center;vertical-align:middle\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .left img{border-radius:10%;height:35px;width:35px\n}\n.container[data-v-31176ead] .attContainer .attent-list .attent-item .left span{margin-left:10px\n}\n'],sourceRoot:""}])},mbK5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("eZ+L"),i=e("X5Yc");var r=function(t){e("7QJv")},o=e("VU/8")(n.a,i.a,!1,r,"data-v-31176ead",null);a.default=o.exports}});