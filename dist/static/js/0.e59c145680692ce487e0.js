webpackJsonp([0],{"+oQS":function(e,t,n){e.exports=n.p+"static/img/performance.a6f4333.png"},"0bkq":function(e,t,n){"use strict";var r=n("NYxO"),o=n("+zHA"),i=n("gs6G"),a=n.n(i),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}t.a={name:"home",data:function(){return{languag:this.$i18n.i18next.language,user_id:0,avatar:"",nickname:"",username:"",usdt_balance:0,h2o_balance:0}},computed:c({},Object(r.c)({address:function(e){return e.base.address},userId:function(e){return e.base.userId},isConnected:function(e){return e.base.isConnected},isMobel:function(e){return e.comps.isMobel},mainTheme:function(e){return e.comps.mainTheme},apiUrl:function(e){return e.base.apiUrl},userInfo:function(e){return e.base.userInfo}}),{changeData:function(){return{address:this.address,userId:this.userId}}}),created:function(){},watch:{changeData:{immediate:!0,handler:function(e){var t=this;return s(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:(e.address||e.userId>0)&&t.getUserInfo();case 1:case"end":return n.stop()}},n,t)}))()}}},components:{},methods:{getUserInfo:function(){var e=this;return s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(e.apiUrl+"/Api/User/getUserInfo",{params:{address:e.address,userId:e.userId}}).then(function(){var t=s(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&1e4==n.code?(console.log(n.data),e.user_id=n.data.id,e.username=n.data.username,e.nickname=n.data.nickname,e.avatar=n.data.avatar,e.usdt_balance=Number(n.data.local_balance)+Number(n.data.wallet_balance),e.h2o_balance=Number(n.data.h2o_local_balance)+Number(n.data.h2o_wallet_balance)):e.$message({type:"warning",message:"Error"}),t.abrupt("return");case 2:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){e.$message({type:"warning",message:t})});case 2:case"end":return t.stop()}},t,e)}))()},startAnswer:function(){var e=this;if(!this.userId)return this.$message.warning("请先登录"),!1;Object(o.b)(this.apiUrl+"/Answer/question/getUserTodayIsAnswer",{userId:this.userId},function(t){if(1e4==t.code)if(t.data){if(1==t.data||2==t.data)e.$router.push("/answer");else if(3==t.data)return e.$message.warning("zh"===e.languag?"门票今日已使用，请更换门票":"The ticket has been used today, please change the ticket"),!1}else e.$message.error("获取数据失败")})},routePushQA:function(){this.$router.push("/answer")},startRanking:function(){this.$router.push("/ranking")},getUserClick:function(){this.$router.push("/user")},routePushBank:function(){this.$router.push("/usdt")},routePushTickets:function(){this.$router.push("/ticket/list")},routePushSetUp:function(){this.$router.push("/user")},getUsdtDepositWithdraw:function(){this.$router.push("/usdt")},getH2ODepositWithdraw:function(){this.$router.push("/h2o")},onSelect:function(){var e=new a.a({appId:"",timestamp:"",nonceStr:"",signature:""});e.setShareData({icon:"https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg",link:"https://pic3.zhimg.com",title:"XXX的个人博客",img_title:"XXX的个人博客",desc:"XXX的个人博客",from:"XXX的个人博客"});try{e.call("wechatFriend"),console.log("支持")}catch(e){this.$toast("不支持该浏览器自动分享,请您手动分享")}}},mounted:function(){}}},"775b":function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"main",style:{backgroundSize:e.isMobel?"100% 100%":"",position:e.isMobel?"fixed":"relative"}},[r("div",{staticClass:"title"},[r("div",{staticClass:"title01"},[e._v(e._s(e.$t("question:oneStopName")))])]),e._v(" "),r("div",{staticClass:"user"},[r("img",{staticClass:"image",attrs:{src:n("oPsL")}}),e._v(" "),r("div",{staticClass:"avatar"},[r("div",{staticClass:"nickname"},[e._v(e._s(e.nickname?e.nickname:"User-"+e.user_id))]),e._v(" "),r("div",{on:{click:function(t){return e.getUserClick()}}},[r("el-avatar",{staticStyle:{border:"3px solid #fff"},attrs:{size:70,src:e.avatar}})],1),e._v(" "),r("el-row",{staticClass:"coins"},[r("el-col",{attrs:{span:12}},[r("div",{on:{click:function(t){return e.getUsdtDepositWithdraw()}}},[r("img",{attrs:{src:n("tmZL"),alt:"",width:"25"}}),e._v(" "),r("span",[e._v(e._s(e.toFixed(e.usdt_balance,4)))])])]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{on:{click:function(t){return e.getH2ODepositWithdraw()}}},[r("img",{attrs:{src:n("SPDX"),alt:"",width:"25"}}),e._v(" "),r("span",[e._v(e._s(e.toFixed(e.h2o_balance,4)))])])])],1)],1)]),e._v(" "),r("div",{staticClass:"content"},[r("button",{on:{click:function(t){return e.onSelect()}}},[e._v("微信好友")]),e._v(" "),r("div",{staticClass:"apple"},[r("div",{staticClass:"left"},[r("div",{on:{click:function(t){return e.startAnswer()}}},[r("img",{staticClass:"image",attrs:{src:n("JF4Y")}})]),e._v(" "),r("div",{on:{click:function(t){return e.routePushBank()}}},[r("img",{staticClass:"image",attrs:{src:n("F84k")}})]),e._v(" "),r("div",{on:{click:function(t){return e.routePushTickets()}}},[r("img",{staticClass:"image",attrs:{src:n("87lX")}})])]),e._v(" "),r("div",{staticClass:"right"},[r("img",{staticClass:"image",staticStyle:{opacity:"0.5"},attrs:{src:n("cwlS")}}),e._v(" "),r("div",{on:{click:function(t){return e.startRanking()}}},[r("img",{staticClass:"image",attrs:{src:n("+oQS")}})]),e._v(" "),r("div",{on:{click:function(t){return e.routePushSetUp()}}},[r("img",{staticClass:"image",attrs:{src:n("Rma+")}})])])])])])])},staticRenderFns:[]};t.a=r},"87lX":function(e,t,n){e.exports=n.p+"static/img/tickets.8d922b6.png"},F84k:function(e,t,n){e.exports=n.p+"static/img/wallet.887fc8c.png"},JF4Y:function(e,t,n){e.exports=n.p+"static/img/QA.4f7f4d1.png"},KR8f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("0bkq"),o=n("775b");var i=function(e){n("ophs")},a=n("VU/8")(r.a,o.a,!1,i,"data-v-17912b43",null);t.default=a.exports},"KS+Y":function(e,t,n){var r=n("kxFB");(e.exports=n("FZ+f")(!0)).push([e.i,".container[data-v-17912b43] .main{background-image:url("+r(n("Zj3x"))+");background-repeat:no-repeat;background-attachment:fixed;background-position:50%;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden}.container[data-v-17912b43] .main .title{position:relative;width:90%;top:10px;margin:0 auto}.container[data-v-17912b43] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center}.container[data-v-17912b43] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879}.container[data-v-17912b43] .main .content{padding:20px;text-align:center;margin-top:20px}.container[data-v-17912b43] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden}.container[data-v-17912b43] .main .content .apple .left,.container[data-v-17912b43] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%}.container[data-v-17912b43] .main .content .apple .left .image,.container[data-v-17912b43] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden}.container[data-v-17912b43] .main .el-avatar{width:100px;height:100px}.container[data-v-17912b43] .main .el-avatar img{width:100%}.container[data-v-17912b43] .user{position:relative;width:90%;top:20px;margin:0 auto}.container[data-v-17912b43] .user .image{position:relative;width:100%;height:100%}.container[data-v-17912b43] .user .avatar{position:absolute;top:5px;left:0;right:0;height:80px;text-align:center}.container[data-v-17912b43] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center}.container[data-v-17912b43] .user .avatar .coins img{vertical-align:middle;margin-top:-6px}.container[data-v-17912b43] .user .avatar .coins span{text-decoration:underline;color:#fff;font-size:16px}.container[data-v-17912b43] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px}","",{version:3,sources:["/Users/qinlinhui/Sites/WWW/AnswerQuestions/src/views/home/index.vue"],names:[],mappings:"AACA,kCAAkC,+CAAwD,4BAA4B,4BAA4B,wBAA2B,MAAM,OAAO,WAAW,YAAY,eAAe,iBAAiB,CAChP,AACD,yCAAyC,kBAAkB,UAAU,SAAS,aAAa,CAC1F,AACD,kDAAkD,eAAe,gBAAgB,WAAW,iBAAiB,CAC5G,AACD,kDAAkD,eAAe,gBAAgB,aAAa,CAC7F,AACD,2CAA2C,aAAa,kBAAkB,eAAe,CACxF,AACD,kDAAkD,aAAa,mBAAmB,eAAe,WAAW,eAAe,WAAW,eAAe,CACpJ,AACD,iHAAiH,eAAe,UAAU,YAAY,CACrJ,AACD,+HAA+H,WAAW,mBAAmB,kBAAkB,eAAe,CAC7L,AACD,6CAA6C,YAAY,YAAY,CACpE,AACD,iDAAiD,UAAU,CAC1D,AACD,kCAAkC,kBAAkB,UAAU,SAAS,aAAa,CACnF,AACD,yCAAyC,kBAAkB,WAAW,WAAW,CAChF,AACD,0CAA0C,kBAAkB,QAAQ,OAAO,QAAQ,YAAY,iBAAiB,CAC/G,AACD,oDAAoD,WAAW,eAAe,gBAAgB,iBAAiB,CAC9G,AACD,qDAAqD,sBAAsB,eAAe,CACzF,AACD,sDAAsD,0BAA0B,WAAW,cAAc,CACxG,AACD,2CAA2C,kBAAkB,QAAQ,SAAS,SAAS,YAAY,aAAa,WAAW,cAAc,CACxI",file:"index.vue",sourcesContent:['\n.container[data-v-17912b43] .main{background-image:url("../../assets/answer/home-bg.png");background-repeat:no-repeat;background-attachment:fixed;background-position:center;top:0;left:0;width:100%;height:100%;position:fixed;overflow-x:hidden\n}\n.container[data-v-17912b43] .main .title{position:relative;width:90%;top:10px;margin:0 auto\n}\n.container[data-v-17912b43] .main .title .title01{font-size:20px;font-weight:800;color:#fff;text-align:center\n}\n.container[data-v-17912b43] .main .title .title02{font-size:40px;font-weight:800;color:#ffd879\n}\n.container[data-v-17912b43] .main .content{padding:20px;text-align:center;margin-top:20px\n}\n.container[data-v-17912b43] .main .content .apple{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;font-size:30px;color:#fff;overflow:hidden\n}\n.container[data-v-17912b43] .main .content .apple .left,.container[data-v-17912b43] .main .content .apple .right{cursor:pointer;width:46%;padding:0 2%\n}\n.container[data-v-17912b43] .main .content .apple .left .image,.container[data-v-17912b43] .main .content .apple .right .image{width:100%;border-radius:16px;position:relative;overflow:hidden\n}\n.container[data-v-17912b43] .main .el-avatar{width:100px;height:100px\n}\n.container[data-v-17912b43] .main .el-avatar img{width:100%\n}\n.container[data-v-17912b43] .user{position:relative;width:90%;top:20px;margin:0 auto\n}\n.container[data-v-17912b43] .user .image{position:relative;width:100%;height:100%\n}\n.container[data-v-17912b43] .user .avatar{position:absolute;top:5px;left:0;right:0;height:80px;text-align:center\n}\n.container[data-v-17912b43] .user .avatar .nickname{color:#fff;font-size:15px;font-weight:500;text-align:center\n}\n.container[data-v-17912b43] .user .avatar .coins img{vertical-align:middle;margin-top:-6px\n}\n.container[data-v-17912b43] .user .avatar .coins span{text-decoration:underline;color:#fff;font-size:16px\n}\n.container[data-v-17912b43] .user .balance{position:absolute;top:20%;left:40%;bottom:0;margin:auto;height:110px;color:#fff;font-size:18px\n}\n'],sourceRoot:""}])},"Rma+":function(e,t,n){e.exports=n.p+"static/img/setUp.6c11ad7.png"},SPDX:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAACWxJREFUeF7lm3twVNUdx7+/u49sEhLyAAwS8txNiEUdtMVqKwVKGUu1LTAq1ZKHrVCKolM6wGbpNDNtElSsA4LVQkg2TEtLK1aLFGoVqEMdygCKvLK7IQmPEBJIQl6bx97769zLMyS7uXd3kyx6/spMft/f43PPuefcc84SBrttfVyX6E5MCOeIdJKkVEkQ0kA8gZjGgPgBOTwRDkuMs5BQBZ3ghEd0uUWx8tzIqvN44q/iYKZIg+KcQZbN1smQ6FcATQWxiUA6LbEYLLJEXUS8W9JzcaWr+BMUQNLiQ41tUAGklizL1Ot0PwNoERGFqUlAg41HZN5I0K1z5f7mmAadT9OgADBvWJYIo36rAHowWIn58iMxDkrc/aNTea84A40XEADzJuto0lMJMT0WaCL+6CWWdnrYk1ed90qdP3rl/eOnkCyltoUgrCeC4KePoMgYzABecOYUrQMg/62paQaQUpprMtC4fxJhqqZIg2zMzB83tzfPalj8RpuWUJoApNmtGToW9hMhRkuQIbNlbhUhTavMXXVQbUzVAMz2/B8LoM1qHQ+rnSQtcOQVb1CTgyoAZrvtVQH4hRqHoWLD4PecVcbZKCjwuXYYEIC51PZzQcD6UClMSx6SBKsrr3CVL41PAKlly6cYSL9XS9BQs2XmR525Re97y8srgHF2a3wEC7VEMIZaUVryYYbEPT3JrmdfPtufrl8AKaUFJoPQXUGgJC3BQtWWmS82txtTGxYX9Jki+wVgtltfFyA8F6oF+ZOXxChx5Rb+9FZtHwBJm1akhQk6p5YVXkbMHQg3GPzJy2+N29MDR9MF1Xp5xShK4r2n8l76/GZRHwCWMtshIkxS7RnA299bhInx47RIArY90XgeP9yubXJi5gPO3KLJXgGklS6/Wy/oj2jN7nYBINclQXrIlVP8ybUab+4BZCnLP0pEd32RAYBQ4ZhfmAW68uF0HUBaue2resYBrcXL9rdTD1B6AUlTXdnFyvrmOgCL3VpGEHK+DACY8Y4zt3DODQBbH9dZOixuIvLrVX7b9QCwiMutka4lr3cpPSB904rpOp3uQ3+evqzZOCMHE2ITVMlHh0f5tGtwt6ry42yuR94Hpaps+zMSIc6pzFn1jgLAUpa/jYhm++1Ng7Ai+7c+rTPLV2rw5r8pg3c5c4oeIRQUCBmp3c0A+X40/sfqpQwVAAC6HdmFJhpfsuxOk95whjA0e3shBAAeeJIpw277JoCPg/SAB3QTSgBYkuZSut26UAfhzQEz99MgKSoOo0wjEGkIg0lvwLqpT/n09PyeLXB7unG5243mrg6caW0Ca9/sVZUtg5eRpcy6hkhYokrRj5GOBMSbRmBUeCTGR8UhK3YsxkfFIiYsAgZBj5ZuN2rbm9Hh6UZNyyWs+sZcn6FW7HsbWXFjFZuU6FEYoTei3dONtp5OVDRdwOnWRlS3XER9RysaO9shBQCHJdjlISB3f3kYaGoGQYeZSV/BsxMfRqfHg3+fOY4DF6pwtq0ZPZIHnaIH3aKnj0+tQ0Cepow6PcJ0egXonZEjMS1xAqaPn6Cs4kqO7cP71UcgsvZjQwbvlwFUA0jWUv2Tlq8hO+tBHGo4jT+d3I8TTedVy7UC8OX4nlGJkHOZNCYJG47+B3+vPKy1P9TIH0CdWg4y00eOwY4fLMGh+ho8vXOj5i4YTAAyHAGEku/kYvIdKfjuu2uUIaK2MXOXDKCZiEaqFWXGJigfP12iB6sP7sIWx//UShW7YALQk4CnMh/A0vtmQi8IePS9tahquaQ6H2a+LA+BkwAyVasAzDXfj7ysh2COGYOqlovYc64CRy/WwnW5HmdaG5UXnre25lvzrv8r2hAOg06HS503tupe2Ptnr9poowkJESOVuJNGJ2HKuAwkR8UpcX9/ZA92VH+udQhUkNme/5EAmqYFwDXb6YlZWHD3w8iMSYD8UpSfAhHB0VSHk011qGtvwcGGGpxvv4zatmbl7FJUzjK9N3lWuTIDxGNMRDTuiR+H5Oh4ZWaQZwVmhocl5QUrx1j/2W7sO+/yJ315et1LljLba0R40S8PV0XyPJ8QGY2xkTGQh0hKVDwy4xIg7xXe3ERJUqZFXy3WFNnn347mC6horMPptkYcv1SLuo4WnGtrQlNXRyBpyzDLyFxmXSSQ8EZAnnyIY8MiEGOKQIwxAvGmSKyf9rTPUIt3/1FZN7jFHjR0tKKtp2uwUoMoL4TS7Ctn6MEfDFqUWxwH8yUYaM6ShO8rH0PhesO5QJ2p1YcUgM5us7w1SJby/HoCjVJbRCB2oQKAgRZnlSFW2RAxl+XbBaLsQApTqw0VAAD+4sgpnKcASCu1ztILgtcTVLXFqbELFQAS85Ou3KKtCoCrh6EdJN/ZHOQWCgDkYzJ3uDvy7BOvuW9si5fb/kYM39+qQYATEgCYP3TmFs2Qy7kOIKPUOgtDMAxCAoAkzXXmFW/rBUCZDew2+VQ4PQgP2quLYQfAXO2oNqZfuzvUa8yn2/On6UAffZEBsCg95nymePu1Gvs7HpfvAfY6Qg4mkOHsAcz41Jlb2Ovovw8As33FJAG6Q8Es+mZfwwng1qPx3u+Am7LMsNvKAcwfDAjDBYDB25w5RX1muf7vCK19Ppqio05r2SlSC2s4AMjL3h7JkFydVyBvSvRqXhc+KaXWCQYSjmm5K6QGwtJJM32avXr4X2rcqLaRr8mR6LnP8ZOXPutP5HPll16aP08n0BbV0ULRkKQFjmzv94YHXPqay/JXC0RLQ7G2AXNiXu/ILfJ53W9AAPJq0WK37SFgyoABQ8iAmT91VhvvD/iy9NWa5N3jtQBuj8uTjBJHtWHBQMV7nQa9PUhzuW0+MduH4qvRn84kf+Ux6DlXTqHqPU41Q6BXLqmbl9+rF/X/JUKEP0kOlobBbgJNdeQUajqp0QxALkC5SQ5hOwFfH6yCtPiVgMNMXY9UZq+u16LTPARudZ5enj9PYHqZgPFaAwfDnplrmfBrV05RiT+/GAsYgFJEQYFgTuqaQ4LwO6KhAcHMp4jol44qw7tqXnS+YPs1BLw5TC9fOV2Q+EUiBP2HlMzoZPBOSHjT9UzRrmD0oOD0gP4yeWuBId0Y922BhNkgzCJQoj8JM/gsGDtA/A9n56VdWPiHHn/8DFkP8BYo+a38scYw0cKknygw38WgJCJOZr5yMYMINQw6Tcw1EnBC8uCkGIbjNfOL1N+88JPM/wEGL6UGMLpD+AAAAABJRU5ErkJggg=="},Zj3x:function(e,t,n){e.exports=n.p+"static/img/home-bg.b056d9d.png"},cwlS:function(e,t,n){e.exports=n.p+"static/img/friend-battle02.443bd33.png"},gs6G:function(e,t,n){var r;"undefined"!=typeof self&&self,r=function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.getElementsByTagName("script")[0],o=document.createElement("script");o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),o.onload=t}function i(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}function a(e){if(w)location.href=e;else{var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout(function(){t&&t.parentNode&&t.parentNode.removeChild(t)},2e3)}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];for(var r in e)t?n.push(r+"="+encodeURIComponent(e[r])):n.push(r+"="+e[r]);return n.join("&")}function s(e){return c({share_id:924053302,url:B.encode(e.link),title:B.encode(e.title),description:B.encode(e.desc),previewimageUrl:B.encode(e.icon),image_url:B.encode(e.icon)})}function u(){a((w?"mqqapi://share/to_fri?src_type=web&version=1&file_type=news":"mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news")+"&"+s(q))}function l(){a((w?"mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A":"mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1")+"&"+s(q))}function f(){var e={url:q.link,title:q.title,pic:q.icon,desc:q.desc};location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+c(e,!0)}function p(){var e={url:q.link,title:q.title,pic:q.icon};location.href="http://service.weibo.com/share/share.php?"+c(e,!0)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var b,A=navigator.userAgent,m=/(iPad).*OS\s([\d_]+)/.test(A),v=/(iPod)(.*OS\s([\d_]+))?/.test(A),y=!m&&/(iPhone\sOS)\s([\d_]+)/.test(A),w=m||v||y,C=/(Android);?[\s\/]+([\d.]+)?/.test(A),_=/micromessenger/i.test(A),k=/QQ\/([\d\.]+)/.test(A),O=/Qzone\//.test(A),S=/MQQBrowser/i.test(A)&&!_&&!k,x=/UCBrowser/i.test(A),j=/mobile.*baidubrowser/i.test(A),P=/SogouMobileBrowser/i.test(A),B=(/baiduboxapp/i.test(A),{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,r,o,i,a,c,s="",u=0;for(e=B._utf8_encode(e);u<e.length;)o=(t=e.charCodeAt(u++))>>2,i=(3&t)<<4|(n=e.charCodeAt(u++))>>4,a=(15&n)<<2|(r=e.charCodeAt(u++))>>6,c=63&r,isNaN(n)?a=c=64:isNaN(r)&&(c=64),s=s+this._keyStr.charAt(o)+this._keyStr.charAt(i)+this._keyStr.charAt(a)+this._keyStr.charAt(c);return s},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}}),D=document.querySelector("meta[name=description]"),Q=document.querySelector("link[rel*=icon]"),q={link:location.href,title:document.title,desc:Object(D).content||"",icon:Object(Q).href||location.protocol+"//"+location.hostname+"/favicon.ico",from:"",success:r,fail:r,trigger:r},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._shareData=q,this._config={syncDescToTag:!1,syncIconToTag:!1,syncTitleToTag:!1},this.setConfig(t)}return U(e,[{key:"getShareData",value:function(){return i({},this._shareData)}},{key:"setShareData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this._shareData,e),this._config.syncDescToTag&&function(e){D?D.content=e:document.head.insertAdjacentHTML("beforeend",'<meta name="description" content="'+e+'">')}(this._shareData.desc),this._config.syncIconToTag&&function(e){Q?Q.href=e:document.head.insertAdjacentHTML("beforeend",'<link rel="shortcut icon" href="'+e+'">')}(this._shareData.icon),this._config.syncTitleToTag&&function(e){document.title=e}(this._shareData.title)}},{key:"setConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this._config,e)}},{key:"getConfig",value:function(){return i({},this._config)}}]),e}(),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o("https://jsapi.qq.com/get?api=app.share"),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),M(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];browser.app.share({title:n.title,description:n.desc,url:n.link,img_url:n.icon,from:n.from,to_app:r})}}]),t}();E.commamdMap=(h(b={},"wechattimeline",8),h(b,"wechatfriend",1),h(b,"qqfriend",4),h(b,"qzone",3),h(b,"weibo",11),h(b,"copyurl",10),h(b,"more",5),h(b,"generateqrcode",7),h(b,"default",void 0),b);var W,X=E,Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),Y(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:n.title,content:n.desc,sourceUrl:n.link,imageUrl:n.icon,source:n.from,target:r})):ucbrowser.web_share(title,desc,link,r,"",from,"")}}]),t}();R.commamdMap=(d(W={},"wechattimeline","kWeixinFriend"),d(W,"wechatfriend","kWeixin"),d(W,"qqfriend","kQQ"),d(W,"qzone","kQZone"),d(W,"weibo","kSinaWeibo"),d(W,"default",void 0),W);var I,F=R,H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),H(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucweb.startRequest("shell.page_share",[n.title,n.desc,n.link,r,"",n.from,n.icon])}}]),t}();z.commamdMap=(g(I={},"wechattimeline","WechatTimeline"),g(I,"wechatfriend","WechatFriends"),g(I,"qqfriend","QQ"),g(I,"qzone","Qzone"),g(I,"weibo","SinaWeibo"),g(I,"default",""),I);var L=z,J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),J(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:n.title,content:n.desc,landurl:n.link,imageurl:n.icon,shareSource:n.from}),"")}}]),t}(),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),N(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();location.href="baidubrowserapp://bd_utils?action=shareWebPage&params="+encodeURIComponent(JSON.stringify({title:n.title,content:n.desc,imageurl:n.icon,landurl:n.link,mediaType:0,share_type:"webpage"}))}}]),t}(),K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),K(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();SogouMse.Utility.shareWithInfo({shareTitle:n.title,shareContent:n.desc,shareImageUrl:n.icon,shareUrl:n.link})}}]),t}(),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ee=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setConfig(e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),$(t,[{key:"call",value:function(e,t){this.setShareData(t)}},{key:"setConfig",value:function(e){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setConfig",this).call(this,e),this.init(this.getConfig().wechatConfig)}},{key:"init",value:function(e){var t=this;e&&o("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",function(){wx.config(i({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","updateAppMessageShareData","updateTimelineShareData"]},e));var n=t._shareData,r={};Object.defineProperty(r,"trigger",{get:function(){return function(){i(r,{title:n.title,desc:n.desc,link:n.link,imgUrl:n.icon,success:n.success,fail:n.fail,cancel:n.fail}),n.trigger.apply(n,arguments)}},set:function(e){n.trigger=e},enumerable:!0}),wx.ready(function(){wx.onMenuShareAppMessage(r),wx.onMenuShareQQ(r),wx.onMenuShareQZone(r),wx.onMenuShareWeibo(r),wx.onMenuShareTimeline(r),wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r)})})}}]),t}(),te=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ne=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),te(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];if(this.setShareData(t),navigator.share){var n=this.getShareData(),r={url:n.link,title:n.title,text:n.desc};navigator.share(r).then(n.success).catch(n.fail)}else{if("weibo"!==(e=String(e).toLowerCase()))throw"qqfriend"===e?u():"qzone"===e&&l(),new Error("the browser may not support command "+e+"!");p()}}}]),t}(),re=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),oe=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),re(t,[{key:"call",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments[1]);this.setShareData(e),mqq.ui.showShareMenu()}},{key:"init",value:function(){var e=this;o("https://open.mobile.qq.com/sdk/qqapi.js",function(){var t=e._shareData;mqq.ui.setOnShareHandler(function(e){mqq.ui.shareMessage({back:!0,share_type:e,title:t.title,desc:t.desc,share_url:t.link,image_url:t.icon,sourceName:t.from},function(e){0===e.retCode?t.success(e):t.fail(e)})})})}}]),t}(),ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ae=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),ie(t,[{key:"setShareData",value:function(e){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setShareData",this).call(this,e);var n=this.getShareData();(function(e){var t=document.createElement("a");return t.href=e,t.hostname})(n.link)!==location.hostname&&(n.link=location.href,console.warn("安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url"));try{mqq.data.setShareInfo({share_url:n.link,title:n.title,desc:n.desc,image_url:n.icon},function(e){!0!==e&&console.warn(e)})}catch(e){}}},{key:"call",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments[1]);this.setShareData(e),mqq.ui.showShareMenu()}},{key:"init",value:function(){var e=this;o("https://open.mobile.qq.com/sdk/qqapi.js",function(){e.setShareData()})}}]),t}(),ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),se=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,T),ce(t,[{key:"call",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments[1]);this.setShareData(t);for(var n=this.getShareData(),r=[],o=[],i=[],a=[],c=0;c<5;c++)r.push(n.icon),a.push(n.link),o.push(n.title),i.push(n.desc);QZAppExternal.setShare(function(t){0!=t.code&&(e.hasSomethingWrong=!0)},{type:"share",image:r,title:o,summary:i,shareURL:a})}},{key:"setShareData",value:function(e){try{this.call("default",e)}catch(e){}}},{key:"init",value:function(){var e=this;o("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",function(){e.call("default")})}}]),t}();n.d(t,"Share",function(){return T}),n.d(t,"QQMobileBrowser",function(){return X}),n.d(t,"UCIosBrowser",function(){return F}),n.d(t,"UCAndroidBrowser",function(){return L}),n.d(t,"BaiduAndroidBrowser",function(){return Z}),n.d(t,"BaiduIosBrowser",function(){return G}),n.d(t,"SogouIosBrowser",function(){return V}),n.d(t,"Wechat",function(){return ee}),n.d(t,"Others",function(){return ne}),n.d(t,"QQIos",function(){return oe}),n.d(t,"QQAndroid",function(){return ae}),n.d(t,"QZone",function(){return se}),n.d(t,"shareToQQ",function(){return u}),n.d(t,"shareToQZone",function(){return l}),n.d(t,"shareToWeibo4Web",function(){return p}),n.d(t,"shareToQZone4Web",function(){return f});var ue;ue=_?ee:k&&w?oe:k&&C?ae:O?se:S?X:x&&w?F:x&&C?L:j&&C?Z:j&&w?G:P&&w?V:ne,window.NativeShare=ue,t.default=ue}])},e.exports=r()},oPsL:function(e,t,n){e.exports=n.p+"static/img/user-top.493422f.png"},ophs:function(e,t,n){var r=n("KS+Y");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("f564d670",r,!0,{})}});