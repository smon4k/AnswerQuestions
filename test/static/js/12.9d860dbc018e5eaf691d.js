webpackJsonp([12],{"/58k":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"main",style:{backgroundSize:t.isMobel?"100% 100%":""}},[n("div",{staticClass:"score-page"},[n("vue-arc-text",{ref:"arctext",staticClass:"line1",attrs:{text:t.$t("question:answerResult-01",{num:t.score/20}),arc:300,direction:1}}),t._v(" "),n("vue-arc-text",{ref:"arctext",staticClass:"line2",attrs:{text:t.$t("question:answerResult-02",{num:t.score}),arc:300,direction:1}}),t._v(" "),n("p",{staticClass:"line3"},[t._v(t._s(t.$t("question:answerResult-03",{num:t.times})))])],1),t._v(" "),n("div",{staticClass:"score-income"},[n("span",[t._v(t._s(t.$t("question:answerResult-04",{capped_num:t.toFixed(t.capped_num,2)})))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(t.$t("question:answerResult-05",{award_rate:t.award_rate,award_num:t.toFixed(t.award_num,2)})))])]),t._v(" "),n("br"),t._v(" "),t.score<100&&t.is_possible_resurrection?n("div",{staticClass:"resurrection"},[n("div",{staticClass:"content"},[n("div",[t._v(t._s(t.toFixed(t.consumeNumber,2))+"SCT"+t._s(t.$t("question:buyToRevive")))]),t._v(" "),n("div",{staticClass:"buy-button"},[n("van-button",{staticClass:"abandon",attrs:{type:"info"},on:{click:function(e){return t.giveUpResurrection()}}},[t._v(t._s(t.$t("question:abandon")))]),t._v(" "),n("van-button",{staticClass:"buy",attrs:{type:"primary"},on:{click:function(e){return t.buyResurrection()}}},[t._v(t._s(t.$t("question:buy")))])],1)])]):t._e()])])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},"/7KC":function(t,e,n){var i=n("Q3BC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("886f3b0c",i,!1,{})},A61A:function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={name:"vue-arc-text",props:{direction:{type:Number,required:!1,default:function(){return 1}},arc:{type:Number,required:!1,default:function(){return 150}},text:{type:String,required:!0,default:function(){return""}}},data:function(){return{textCyrcle:null}},watch:{text:function(t,e){this.update()},arc:function(t,e){this.update()},direction:function(t,e){this.direction=parseInt(t),this.update()}},methods:{update:function(){this.$el;this.textCyrcle&&this.textCyrcle.destroy(),this.$el.innerHTML=this.text,this.textCyrcle=new i.a(this.$el),this.textCyrcle.arc(this.arc),this.textCyrcle.direction(this.direction)}},mounted:function(){this.update()}}},function(t,e){t.exports=function(t,e,i,r){var o,s=t=t||{},a=n(t.default);"object"!==a&&"function"!==a||(o=t,s=t.default);var c="function"==typeof s?s.options:s;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i),r){var u=c.computed||(c.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:o,exports:s,options:c}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]}},function(t,e,n){"use strict";var i=function(t,e){var n=document.createElement("span"),i=t.innerText.trim();return(e?e(i):i.split("").slice()).map(function(t){var e=n.cloneNode();return e.insertAdjacentHTML("afterbegin"," "===t?"&nbsp;":t),e})},r=function(t){var e=t.getBoundingClientRect();return{height:e.height,left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width}},o=Math.PI/180,s=180/Math.PI,a=function(t){return t*o},c=function(t,e){return t*(1-Math.cos(a(e/2)))},u=function(t,e){return t.reduce(function(t,n){var i=n.width,r=i/e*s;return{"θ":t.θ+r,rotations:t.rotations.concat([t.θ+r/2])}},{"θ":0,rotations:[]})},d=Math.PI,h=Math.max,f=Math.min,l=function(){function t(t,e){void 0===e&&(e=void 0),this.element=t,this.originalHTML=this.element.innerHTML;var n=document.createElement("div"),o=document.createDocumentFragment();n.setAttribute("aria-label",this.element.innerText),n.style.position="relative",this.container=n,this.letters=i(this.element,e),this.letters.forEach(function(t){return o.appendChild(t)}),n.appendChild(o),this.element.innerHTML="",this.element.appendChild(n);var s=window.getComputedStyle(this.element),a=s.fontSize,c=s.lineHeight;this.fontSize=parseFloat(a),this.lineHeight=parseFloat(c)||this.fontSize,this.metrics=this.letters.map(r);var u=this.metrics.reduce(function(t,e){return t+e.width},0);this.minRadius=u/d/2+this.lineHeight,this.dir=1,this.isForceWidth=!1,this.isForceHeight=!0,this.radius=this.minRadius,this.invalidate()}return t.prototype.forceWidth=function(t){return t?(this.isForceWidth=t,this.invalidate(),this):this.isForceWidth},t.prototype.forceHeight=function(t){return t?(this.isForceHeight=t,this.invalidate(),this):this.isForceHeight},t.prototype.direction=function(t){return t?(this.dir=t,this.invalidate(),this):this.dir},t.prototype.arc=function(t){return t?(this.radius=h(this.minRadius,t),this.invalidate(),this):this.radius},t.prototype.destroy=function(){return this.element.innerHTML=this.originalHTML,this},t.prototype.refresh=function(){return this.invalidate()},t.prototype.invalidate=function(){var t=this;return cancelAnimationFrame(this.raf),this.raf=requestAnimationFrame(function(){t.render()}),this},t.prototype.render=function(){var t=this;this.fontSize=40;var e="center "+(-1===this.dir?-this.radius+this.lineHeight:this.radius)/this.fontSize+"em",n=this.radius-this.lineHeight,i=u(this.metrics,n),r=i.rotations,o=i.θ;if(this.letters.forEach(function(n,i){var s=n.style,a=(-.5*o+r[i])*t.dir,c="translateX("+-.5*t.metrics[i].width/t.fontSize+"em) rotate("+a+"deg)";s.position="absolute",s.bottom=-1===t.dir?"0":"auto",s.left="50%",s.transform=c,s.transformOrigin=e}),this.isForceHeight){var s=o>180?c(this.radius,o):c(n,o)+this.lineHeight;this.container.style.height=s/this.fontSize+"em"}if(this.isForceWidth){var d=function(t,e){return 2*t*Math.sin(a(e/2))}(this.radius,f(180,o));this.container.style.width=d/this.fontSize+"em"}return this},t}();e.a=l},function(t,e,n){var i=n(1)(n(0),n(2),null,null);t.exports=i.exports}])},BfN1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("YxHT"),r=n("/58k"),o=!1;var s=function(t){o||n("/7KC")},a=n("VU/8")(i.a,r.a,!1,s,"data-v-1577419b",null);a.options.__file="src/views/answer/score.vue",e.default=a.exports},Q3BC:function(t,e,n){var i=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.container[data-v-1577419b] .main{background-image:url("+i(n("hIz1"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;z-index:-10;position:fixed\n}\n.container[data-v-1577419b] .main .score-page{line-height:10px;margin-top:100px\n}\n.container[data-v-1577419b] .main .score-page span{text-shadow:-3px 4px 0 #2230BE;font-weight:800;color:#fff;text-align:center;font-size:40px\n}\n.container[data-v-1577419b] .main .score-page p{color:#fff;font-size:40px;text-align:center\n}\n.container[data-v-1577419b] .main .score-page .line3{font-size:20px;font-weight:normal;color:#fff;font-weight:800;margin-top:50px;font-family:'YS-HelloFont-BangBangTi';text-shadow:-1px -1px 0 #F4DF6C, 1px 1px 0 #F4DF6C\n}\n.container[data-v-1577419b] .main .score-page .line2{margin-top:60px\n}\n.container[data-v-1577419b] .main .score-income{line-height:30px;text-align:center;width:80%;margin:0 auto\n}\n.container[data-v-1577419b] .main .score-income span{color:#fff;font-size:15px\n}\n.container[data-v-1577419b] .main .resurrection{text-align:center;margin:0 auto;color:#fff;font-size:18px;width:70%;height:130px;background:url("+i(n("Ow1K"))+") no-repeat center;background-size:contain;text-align:center;position:relative\n}\n.container[data-v-1577419b] .main .resurrection .content{position:relative;top:50%;left:50%;right:0;transform:translate(-50%, -50%)\n}\n.container[data-v-1577419b] .main .resurrection .buy-button{margin-top:10px\n}\n.container[data-v-1577419b] .main .resurrection .buy-button .buy{background:url("+i(n("IZAe"))+") no-repeat center;background-size:contain;text-align:center;border:0;font-weight:800\n}\n.container[data-v-1577419b] .main .resurrection .buy-button .abandon{width:80px;background-color:#3DBBE8;border-radius:5px;color:#185DDA;font-weight:800\n}\n.container[data-v-1577419b] .main .resurrection .buy-button button{width:100px;height:30px;line-height:5px\n}\n",""])},YxHT:function(t,e,n){"use strict";n("XmAh");var i=n("il3B"),r=n("NYxO"),o=n("+zHA"),s=n("A61A"),a=n.n(s),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a={name:"home",data:function(){return{correct_num:"",score:0,times:0,is_possible_resurrection:1,consumeNumber:0,capped_num:0,award_num:0,award_rate:0}},computed:c({},Object(r.c)({address:function(t){return t.base.address},userId:function(t){return t.base.userId},isConnected:function(t){return t.base.isConnected},isMobel:function(t){return t.comps.isMobel},mainTheme:function(t){return t.comps.mainTheme},apiUrl:function(t){return t.base.apiUrl},userInfo:function(t){return t.base.userInfo}}),{changeData:function(){return{address:this.address}}}),created:function(){var t=this.$route.params;0==Object.keys(t).length&&this.$router.push("/"),this.correct_num=t.correct_num,this.score=t.score,this.times=t.times,this.is_possible_resurrection=t.is_possible_resurrection,this.consumeNumber=t.consumeNumber,this.capped_num=t.capped_num,this.award_num=t.award_num,this.award_rate=t.award_rate},watch:{address:{immediate:!0,handler:function(t){var e,n=this;return(e=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}},t,n)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function i(r,o){try{var s=t[r](o),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});e(a)}("next")})})()}}},components:{VueArcText:a.a},methods:{startAnswer:function(){this.$router.push("/answer")},buyResurrection:function(){var t=this;i.a.confirm({title:"提示",message:"消耗 "+this.consumeNumber+" SCT 购买 1 次复活机会。"}).then(function(){var e=t.$loading({lock:!0,text:"支付中...",spinner:"van-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(o.b)(t.apiUrl+"/Api/question/buyResurrection",{userId:t.userId},function(n){1e4==n.code?(console.log(n),setTimeout(function(){e.close(),t.$router.push({name:"answer",params:{is_relive:1}})},2e3)):t.$message.error("加载数据失败")})}).catch(function(){})},giveUpResurrection:function(){this.$router.push("/")}},mounted:function(){}}}});