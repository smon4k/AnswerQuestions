webpackJsonp([9],{"0bkq":function(t,n,e){"use strict";var a=e("NYxO"),i=e("+zHA"),r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};n.a={name:"home",data:function(){return{}},computed:r({},Object(a.c)({address:function(t){return t.base.address},isConnected:function(t){return t.base.isConnected},isMobel:function(t){return t.comps.isMobel},mainTheme:function(t){return t.comps.mainTheme},apiUrl:function(t){return t.base.apiUrl},userInfo:function(t){return t.base.userInfo}}),{changeData:function(){return{address:this.address}}}),created:function(){},watch:{address:{immediate:!0,handler:function(t){var n,e=this;return(n=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}},t,e)}),function(){var t=n.apply(this,arguments);return new Promise(function(n,e){return function a(i,r){try{var o=t[i](r),s=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});n(s)}("next")})})()}}},components:{},methods:{startAnswer:function(){var t=this;Object(i.b)(this.apiUrl+"/Answer/question/getUserTodayIsAnswer",{address:this.address},function(n){if(1e4==n.code)if(n.data)if(1==n.data)t.$router.push("/answer");else{if(2==n.data)return t.$message.warning("请先购买门票"),!1;if(3==n.data)return t.$message.warning("今日已作答"),!1}else t.$message.error("获取数据失败")})},getUserClick:function(){this.$router.push("/user")}},mounted:function(){}}},"4jVE":function(t,n,e){var a=e("kxFB");(t.exports=e("FZ+f")(!0)).push([t.i,".container[data-v-4f5c6fdd] .main{background-image:url("+a(e("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed}.container[data-v-4f5c6fdd] .main .content{padding:25px;text-align:center;margin-top:40px}.container[data-v-4f5c6fdd] .main .content .title01{font-size:50px;font-weight:800;color:#fff}.container[data-v-4f5c6fdd] .main .content .title02{font-size:40px;font-weight:800;color:#ffd879}.container[data-v-4f5c6fdd] .main .content .nickname{color:#fff;font-size:15px;font-weight:500}.container[data-v-4f5c6fdd] .main .el-avatar{width:100px;height:100px}.container[data-v-4f5c6fdd] .main .el-avatar img{width:100%}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/home/index.vue"],names:[],mappings:"AACA,kCAAkC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,cAAc,CACpO,AACD,2CAA2C,aAAa,kBAAkB,eAAe,CACxF,AACD,oDAAoD,eAAe,gBAAgB,UAAU,CAC5F,AACD,oDAAoD,eAAe,gBAAgB,aAAa,CAC/F,AACD,qDAAqD,WAAW,eAAe,eAAe,CAC7F,AACD,6CAA6C,YAAY,YAAY,CACpE,AACD,iDAAiD,UAAU,CAC1D",file:"index.vue",sourcesContent:['\n.container[data-v-4f5c6fdd] .main{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-4f5c6fdd] .main .content{padding:25px;text-align:center;margin-top:40px\n}\n.container[data-v-4f5c6fdd] .main .content .title01{font-size:50px;font-weight:800;color:#fff\n}\n.container[data-v-4f5c6fdd] .main .content .title02{font-size:40px;font-weight:800;color:#ffd879\n}\n.container[data-v-4f5c6fdd] .main .content .nickname{color:#fff;font-size:15px;font-weight:500\n}\n.container[data-v-4f5c6fdd] .main .el-avatar{width:100px;height:100px\n}\n.container[data-v-4f5c6fdd] .main .el-avatar img{width:100%\n}\n'],sourceRoot:""}])},"8ThQ":function(t,n,e){t.exports=e.p+"static/img/2.45de2af.jpg"},KR8f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("0bkq"),i=e("Quvm");var r=function(t){e("eayD")},o=e("VU/8")(a.a,i.a,!1,r,"data-v-4f5c6fdd",null);n.default=o.exports},Quvm:function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"main",style:{backgroundSize:t.isMobel?"100% 100%":""}},[e("div",{staticClass:"content"},[e("div",{staticClass:"title01"},[t._v("XXXX")]),t._v(" "),e("div",{staticClass:"title02"},[t._v(t._s(t.$t("question:answerQuestions")))]),t._v(" "),e("div",{on:{click:function(n){return t.getUserClick()}}},[e("el-avatar",{attrs:{size:100,src:t.userInfo.avatar}})],1),t._v(" "),e("div",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickname))]),t._v(" "),e("div",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.startAnswer()}}},[t._v(t._s(t.$t("question:startAnswering")))])],1)])])])},staticRenderFns:[]};n.a=a},eayD:function(t,n,e){var a=e("4jVE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("18efd0b6",a,!0,{})}});