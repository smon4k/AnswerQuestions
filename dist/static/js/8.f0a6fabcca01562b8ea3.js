webpackJsonp([8],{"55r3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("hRXm"),i=n("xXzi");var o=function(t){n("fqPK")},r=n("VU/8")(a.a,i.a,!1,o,"data-v-1136e31f",null);e.default=r.exports},"8ThQ":function(t,e,n){t.exports=n.p+"static/img/2.45de2af.jpg"},fqPK:function(t,e,n){var a=n("nh6k");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6400eddc",a,!0,{})},hRXm:function(t,e,n){"use strict";var a=n("mtWM"),i=n.n(a),o=n("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"",data:function(){return{invitemeList:[],tableData:[],loading:!1,finished:!1,limit:20,invitemePage:0,iinvitePage:0,total:0,tabIndex:0}},created:function(){},computed:r({},Object(o.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},apiUrl:function(t){return t.base.apiUrl},isMobel:function(t){return t.comps.isMobel}}),{changeData:function(){return{address:this.address,apiUrl:this.apiUrl}},reAddress:function(){return window.origin+"/#/regist?re="+this.address}}),watch:{changeData:{immediate:!0,handler:function(t){console.log(t),t.address&&this.getDataList()}}},components:{},methods:{getDataList:function(t){var e,n=this;return(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.finished&&(n.tableData=[],n.finished=!1),(!t||void 0==t||t.length<=0)&&(t={limit:n.limit,page:n.iinvitePage+1,address:n.address}),n.address&&i.a.get(n.apiUrl+"/Answer/question/getUserTodayLeaderboardList",{params:t}).then(function(e){n.loading=!1,console.log(e),1e4==e.code?e.data&&e.data.lists&&e.data.lists.length>0&&(n.iinvitePage<=1?n.tableData=e.data.lists:t.page<=e.data.allpage&&n.tableData.push(e.data.lists),t.page>=e.data.allpage&&(n.finished=!0),n.total=e.data.count,n.iinvitePage+=1):n.$notify({type:"warning",message:"加载数据失败"})}).catch(function(t){n.$notify({type:"warning",message:t})}),n.loading=!1;case 4:case"end":return e.stop()}},e,n)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(i,o){try{var r=t[i](o),s=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});e(s)}("next")})})()},onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var t=this;this.finished=!1,this.invitemePage=0,this.loading=!0,setTimeout(function(){t.getDataList()},300)},getAddressString:function(t){return t.substring(0,7)+"***"+t.substring(t.length-3)},selectPage:function(t,e){console.log(t,e);var n=[];this.list=[],0==t&&(n={limit:this.limit,page:this.iinvitePage,userId:this.userId,is_reward:1},this.iinviteList.length<=0&&this.getDataList(n))},copySuccess:function(){this.$notify({type:"success",message:"复制成功"})}},mounted:function(){}}},nh6k:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!0)).push([t.i,".container[data-v-1136e31f]{position:fixed;width:100%}.container[data-v-1136e31f] .bg{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)}.container[data-v-1136e31f] .van-nav-bar{position:fixed;top:0;width:100%}.container[data-v-1136e31f] .van-tabs__wrap{position:fixed;z-index:1;width:100%}.container[data-v-1136e31f] .van-tabs__content{padding-top:50px}.container[data-v-1136e31f] .attContainer{width:90%;height:80vh;margin:0 auto;background-color:#fff;margin-top:80px;overflow:auto}.container[data-v-1136e31f] .attContainer .content,.container[data-v-1136e31f] .attContainer .content img,.container[data-v-1136e31f] .attContainer .refresh .van-pull-refresh__track{width:100%}.container[data-v-1136e31f] .attContainer .title{height:30px;line-height:30px;font-size:.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px}.container[data-v-1136e31f] .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto}.container[data-v-1136e31f] .attContainer .attent-list ul>li{list-style:none}.container[data-v-1136e31f] .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;flex-direction:row;background:#fff;border-bottom:.5px solid #969799}.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px}.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px}.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column}.container[data-v-1136e31f] .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/ranking/index.vue"],names:[],mappings:"AACA,4BAA4B,eAAe,UAAU,CACpD,AACD,gCAAgC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,eAAe,gBAAgB,CACnP,AACD,yCAAyC,eAAe,MAAM,UAAU,CACvE,AACD,4CAA4C,eAAe,UAAU,UAAU,CAC9E,AACD,+CAA+C,gBAAgB,CAC9D,AACD,0CAA0C,UAAU,YAAY,cAAc,sBAAsB,gBAAgB,aAAa,CAChI,AAKD,sLAAuD,UAAU,CAChE,AACD,iDAAiD,YAAY,iBAAiB,iBAAkB,cAAc,yBAAyB,iBAAiB,CACvJ,AACD,uDAAuD,UAAU,eAAe,aAAa,CAC5F,AACD,6DAA6D,eAAe,CAC3E,AACD,oEAAoE,aAAa,mBAAmB,gBAAgB,mBAAmB,gBAAgB,gCAAiC,CACvL,AACD,qFAAqF,gBAAgB,iBAAiB,WAAW,CAChI,AACD,yFAAyF,gBAAgB,CACxG,AACD,gGAAgG,aAAa,6BAA6B,qBAAqB,CAC9J,AACD,iFAAiF,iBAAiB,YAAY,CAC7G",file:"index.vue",sourcesContent:['\n.container[data-v-1136e31f]{position:fixed;width:100%\n}\n.container[data-v-1136e31f] .bg{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed;filter:blur(2px)\n}\n.container[data-v-1136e31f] .van-nav-bar{position:fixed;top:0;width:100%\n}\n.container[data-v-1136e31f] .van-tabs__wrap{position:fixed;z-index:1;width:100%\n}\n.container[data-v-1136e31f] .van-tabs__content{padding-top:50px\n}\n.container[data-v-1136e31f] .attContainer{width:90%;height:80vh;margin:0 auto;background-color:#fff;margin-top:80px;overflow:auto\n}\n.container[data-v-1136e31f] .attContainer .refresh .van-pull-refresh__track{width:100%\n}\n.container[data-v-1136e31f] .attContainer .content{width:100%\n}\n.container[data-v-1136e31f] .attContainer .content img{width:100%\n}\n.container[data-v-1136e31f] .attContainer .title{height:30px;line-height:30px;font-size:0.26rem;color:#9c9d9e;background-color:#ebedf0;padding-left:20px\n}\n.container[data-v-1136e31f] .attContainer .attent-list{width:90%;font-size:13px;margin:0 auto\n}\n.container[data-v-1136e31f] .attContainer .attent-list ul>li{list-style:none\n}\n.container[data-v-1136e31f] .attContainer .attent-list .attent-item{padding:10px;margin-bottom:10px;margin-top:10px;flex-direction:row;background:#fff;border-bottom:0.5px solid #969799\n}\n.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .date{font-weight:500;line-height:30px;height:30px\n}\n.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .num-item{line-height:20px\n}\n.container[data-v-1136e31f] .attContainer .attent-list .attent-item .list-item .num-item .score{display:flex;justify-content:space-around;flex-direction:column\n}\n.container[data-v-1136e31f] .attContainer .attent-list .attent-item .van-divider{line-height:15px;margin:5px 0\n}\n'],sourceRoot:""}])},xXzi:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"bg",style:{backgroundSize:t.isMobel?"100% 100%":""}}),t._v(" "),n("van-nav-bar",{attrs:{title:t.$t("question:TodayLeaderboard"),"left-text":"","left-arrow":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"attContainer"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("question:ranking")))]),t._v(" "),n("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.tableData.length?n("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("question:noMore")},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"attent-list"},[n("ul",t._l(t.tableData,function(e,a){return n("li",{key:a,staticClass:"attent-item"},[n("div",{staticClass:"list-item"},[n("div",{staticClass:"num-item"},[n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-col",{staticStyle:{display:"flex","align-items":"center"},attrs:{span:"4"}},[n("span",[t._v(t._s(a+1))]),t._v("  \n                                                        "),n("img",{attrs:{src:e.avatar,alt:"",width:"30"},on:{click:function(n){return t.pushHomepage(e)}}}),t._v("\n                                                          \n                                                        "),n("span",[t._v(t._s(e.nickname?e.nickname:"Unnamed"))])]),t._v(" "),n("van-col",{staticClass:"score",attrs:{span:"20",align:"right"}},[n("van-col",{attrs:{span:"24"}},[t._v(t._s(t.$t("question:Score"))+": "+t._s(e.score))])],1)],1)],1)])])}),0)])]):n("van-empty",{attrs:{description:t.$t("question:nothing")}})],1)],1)],1)},staticRenderFns:[]};e.a=a}});