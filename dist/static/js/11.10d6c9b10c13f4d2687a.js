webpackJsonp([11],{"7T4t":function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"main",style:{backgroundSize:e.isMobel?"100% 100%":""}},[n("div",{staticClass:"score-page"},[n("p",{staticClass:"line1"},[e._v("您答对了"+e._s(e.score/20)+"题")]),e._v(" "),n("p",{staticClass:"line2"},[e._v("得到"+e._s(e.score)+"分！")]),e._v(" "),n("p",{staticClass:"line3"},[e._v("用时"+e._s(e.times)+"秒")])])])])},staticRenderFns:[]};t.a=a},"8ThQ":function(e,t,n){e.exports=n.p+"static/img/2.45de2af.jpg"},BfN1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("YxHT"),r=n("7T4t");var i=function(e){n("b/U0")},o=n("VU/8")(a.a,r.a,!1,i,"data-v-1f9efba5",null);t.default=o.exports},YxHT:function(e,t,n){"use strict";var a=n("NYxO"),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a={name:"home",data:function(){return{correct_num:"",score:0,times:0}},computed:r({},Object(a.c)({address:function(e){return e.base.address},isConnected:function(e){return e.base.isConnected},isMobel:function(e){return e.comps.isMobel},mainTheme:function(e){return e.comps.mainTheme},apiUrl:function(e){return e.base.apiUrl},userInfo:function(e){return e.base.userInfo}}),{changeData:function(){return{address:this.address}}}),created:function(){var e=this.$route.params;0==Object.keys(e).length&&this.$router.push("/"),this.correct_num=e.correct_num,this.score=e.score,this.times=e.times},watch:{address:{immediate:!0,handler:function(e){var t,n=this;return(t=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,n)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,i){try{var o=e[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});t(s)}("next")})})()}}},components:{},methods:{startAnswer:function(){this.$router.push("/answer")}},mounted:function(){}}},"b/U0":function(e,t,n){var a=n("jU5M");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("d4ad73fa",a,!0,{})},jU5M:function(e,t,n){var a=n("kxFB");(e.exports=n("FZ+f")(!0)).push([e.i,".container[data-v-1f9efba5] .main{background-image:url("+a(n("8ThQ"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed}.container[data-v-1f9efba5] .main .score-page{line-height:20px}.container[data-v-1f9efba5] .main .score-page p{color:#fff;font-size:27px;text-align:center;text-shadow:2px 2px 2px #005ece;font-weight:700}.container[data-v-1f9efba5] .main .score-page .line3{font-size:20px;font-weight:400;text-shadow:1px 1px 0 #005ece}.container[data-v-1f9efba5] .main .score-page .line1{margin-top:180px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/answer/score.vue"],names:[],mappings:"AACA,kCAAkC,+CAAkD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,YAAY,cAAc,CACpO,AACD,8CAA8C,gBAAgB,CAC7D,AACD,gDAAgD,WAAW,eAAe,kBAAkB,gCAAgC,eAAgB,CAC3I,AACD,qDAAqD,eAAe,gBAAmB,6BAA6B,CACnH,AACD,qDAAqD,gBAAgB,CACpE",file:"score.vue",sourcesContent:['\n.container[data-v-1f9efba5] .main{background-image:url("../../assets/answer/2.jpg");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-1f9efba5] .main .score-page{line-height:20px\n}\n.container[data-v-1f9efba5] .main .score-page p{color:#fff;font-size:27px;text-align:center;text-shadow:2px 2px 2px #005ece;font-weight:bold\n}\n.container[data-v-1f9efba5] .main .score-page .line3{font-size:20px;font-weight:normal;text-shadow:1px 1px 0 #005ece\n}\n.container[data-v-1f9efba5] .main .score-page .line1{margin-top:180px\n}\n'],sourceRoot:""}])}});