webpackJsonp([11],{"/58k":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"main",style:{backgroundSize:e.isMobel?"100% 100%":""}},[n("div",{staticClass:"score-page"},[n("p",{staticClass:"line1"},[e._v("您答对了"+e._s(e.score/20)+"题")]),e._v(" "),n("p",{staticClass:"line2"},[e._v("得到"+e._s(e.score)+"分！")]),e._v(" "),n("p",{staticClass:"line3"},[e._v("用时"+e._s(e.times)+"秒")])])])])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};t.a=a},"5q5B":function(e,t,n){var r=n("gQ2y");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("96e5ffe6",r,!1,{})},"8ThQ":function(e,t,n){e.exports=n.p+"static/img/2.45de2af.jpg"},BfN1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("YxHT"),a=n("/58k"),i=!1;var s=function(e){i||n("5q5B")},o=n("VU/8")(r.a,a.a,!1,s,"data-v-1577419b",null);o.options.__file="src/views/answer/score.vue",t.default=o.exports},YxHT:function(e,t,n){"use strict";var r=n("NYxO"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a={name:"home",data:function(){return{correct_num:"",score:0,times:0}},computed:a({},Object(r.c)({address:function(e){return e.base.address},isConnected:function(e){return e.base.isConnected},isMobel:function(e){return e.comps.isMobel},mainTheme:function(e){return e.comps.mainTheme},apiUrl:function(e){return e.base.apiUrl},userInfo:function(e){return e.base.userInfo}}),{changeData:function(){return{address:this.address}}}),created:function(){var e=this.$route.params;0==Object.keys(e).length&&this.$router.push("/"),this.correct_num=e.correct_num,this.score=e.score,this.times=e.times},watch:{address:{immediate:!0,handler:function(e){var t,n=this;return(t=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,n)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,i){try{var s=e[a](i),o=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(o).then(function(e){r("next",e)},function(e){r("throw",e)});t(o)}("next")})})()}}},components:{},methods:{startAnswer:function(){this.$router.push("/answer")}},mounted:function(){}}},gQ2y:function(e,t,n){var r=n("kxFB");(e.exports=n("FZ+f")(!1)).push([e.i,"\n.container[data-v-1577419b] .main{background-image:url("+r(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-1577419b] .main .score-page{line-height:20px\n}\n.container[data-v-1577419b] .main .score-page p{color:#fff;font-size:27px;text-align:center;text-shadow:2px 2px 2px #005ece;font-weight:bold\n}\n.container[data-v-1577419b] .main .score-page .line3{font-size:20px;font-weight:normal;text-shadow:1px 1px 0 #005ece\n}\n.container[data-v-1577419b] .main .score-page .line1{margin-top:180px\n}\n",""])}});