webpackJsonp([11],{"/58k":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"main",style:{backgroundSize:e.isMobel?"100% 100%":""}},[t("div",{staticClass:"score-page"},[t("p",{staticClass:"line1"},[e._v("您答对了"+e._s(e.score/20)+"题")]),e._v(" "),t("p",{staticClass:"line2"},[e._v("得到"+e._s(e.score)+"分！")]),e._v(" "),t("p",{staticClass:"line3"},[e._v("用时"+e._s(e.times)+"秒")])]),e._v(" "),e.score<100&&e.is_possible_resurrection?t("div",{staticClass:"resurrection"},[t("div",[e._v(e._s(e.consumeNumber)+"H2O 购买进行复活")]),e._v(" "),t("div",{staticClass:"buy-button"},[t("el-button",{attrs:{type:"primary",round:""},on:{click:function(n){return e.buyResurrection()}}},[e._v("购买")])],1)]):e._e()])])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},"5q5B":function(e,n,t){var r=t("gQ2y");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("96e5ffe6",r,!1,{})},"8ThQ":function(e,n,t){e.exports=t.p+"static/img/2.45de2af.jpg"},BfN1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("YxHT"),i=t("/58k"),s=!1;var o=function(e){s||t("5q5B")},a=t("VU/8")(r.a,i.a,!1,o,"data-v-1577419b",null);a.options.__file="src/views/answer/score.vue",n.default=a.exports},YxHT:function(e,n,t){"use strict";var r=t("NYxO"),i=t("BdEu"),s=t("+zHA"),o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.a={name:"home",data:function(){return{correct_num:"",score:0,times:0,is_possible_resurrection:0,consumeNumber:0}},computed:o({},Object(r.c)({address:function(e){return e.base.address},isConnected:function(e){return e.base.isConnected},isMobel:function(e){return e.comps.isMobel},mainTheme:function(e){return e.comps.mainTheme},apiUrl:function(e){return e.base.apiUrl},userInfo:function(e){return e.base.userInfo}}),{changeData:function(){return{address:this.address}}}),created:function(){var e=this.$route.params;0==Object.keys(e).length&&this.$router.push("/"),this.correct_num=e.correct_num,this.score=e.score,this.times=e.times,this.is_possible_resurrection=e.is_possible_resurrection,this.consumeNumber=e.consumeNumber},watch:{address:{immediate:!0,handler:function(e){var n,t=this;return(n=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,t)}),function(){var e=n.apply(this,arguments);return new Promise(function(n,t){return function r(i,s){try{var o=e[i](s),a=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});n(a)}("next")})})()}}},components:{},methods:{startAnswer:function(){this.$router.push("/answer")},buyResurrection:function(){var e=this;i.a.confirm({title:"提示",message:"消耗 "+this.consumeNumber+"H2O 购买 1 次复活机会。"}).then(function(){var n=e.$loading({lock:!0,text:"支付中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(s.b)(e.apiUrl+"/Answer/question/buyResurrection",{address:e.address},function(t){1e4==t.code?(console.log(t),setTimeout(function(){n.close(),e.$router.push({name:"answer",params:{is_relive:1}})},2e3)):e.$message.error("加载数据失败")})}).catch(function(){})}},mounted:function(){}}},gQ2y:function(e,n,t){var r=t("kxFB");(e.exports=t("FZ+f")(!1)).push([e.i,"\n.container[data-v-1577419b] .main{background-image:url("+r(t("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-1577419b] .main .score-page{line-height:20px\n}\n.container[data-v-1577419b] .main .score-page p{color:#fff;font-size:27px;text-align:center;text-shadow:2px 2px 2px #005ece;font-weight:bold\n}\n.container[data-v-1577419b] .main .score-page .line3{font-size:20px;font-weight:normal;text-shadow:1px 1px 0 #005ece\n}\n.container[data-v-1577419b] .main .score-page .line1{margin-top:100px\n}\n.container[data-v-1577419b] .main .resurrection{text-align:center;margin:0 auto;color:#fff;font-size:18px;width:80%\n}\n.container[data-v-1577419b] .main .resurrection .buy-button{margin-top:10px\n}\n.container[data-v-1577419b] .main .resurrection .buy-button button{width:100px;height:30px;line-height:5px\n}\n",""])}});