(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-list"],{"0cf5":function(t,e,n){"use strict";n.r(e);var i=n("ddd2"),a=n("4b8b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c965");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"54df93b0",null,!1,i["a"],r);e["default"]=l.exports},1748:function(t,e,n){var i=n("6b73");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3fb2bf4b",i,!0,{sourceMap:!1,shadowMode:!1})},2761:function(t,e,n){"use strict";n.r(e);var i=n("61bd"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3ff5":function(t,e,n){"use strict";n.r(e);var i=n("b5a4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4b51":function(t,e,n){"use strict";var i={uNavbar:n("ba90").default,uIcon:n("9553").default,uSearch:n("7f3d").default,uBadge:n("0cf5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-navbar",{attrs:{"is-back":!1,title:"",background:{backgroundColor:"#F8F8F8"}}},[n("v-uni-view",{staticClass:"navbar"},[n("v-uni-view",{staticClass:"app-name"},[t._v("快聊")]),n("v-uni-view",{staticClass:"app-operate"},[n("u-icon",{attrs:{name:"plus-circle",size:"50"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMenu.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{staticClass:"main"},[n("u-search",{attrs:{height:"70","show-action":!1,disabled:!0}}),n("v-uni-view",{staticClass:"list"},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"list-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chat2user(e.userInfo.id)}}},[n("v-uni-view",{staticClass:"avatar"},[n("v-uni-image",{staticClass:"image",attrs:{src:e.userInfo.avatar}}),n("u-badge",{attrs:{type:"error",count:"7",offset:[-10,-10]}})],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.userInfo.name))]),n("v-uni-view",{staticClass:"message"},[t._v(t._s(e.message.text))])],1),n("v-uni-view",{staticClass:"time"},[t._v(t._s(e.message.time))])],1)})),1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"4b8b":function(t,e,n){"use strict";n.r(e);var i=n("681b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"61bd":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e143")),o=a.default.extend({name:"ChatList",data:function(){return{list:[{message:{text:"嗯嗯，好的，知道了~",time:"12:36"},userInfo:{id:1,avatar:"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/5.jpg",name:"小白杨"}},{message:{text:"快回家快回家快回家快回家快回家快回家快回家快回家快回家快回家",time:"10:00"},userInfo:{id:2,avatar:"https://cool-comm.oss-cn-shenzhen.aliyuncs.com/show/imgs/chat/avatar/4.jpg",name:"楠宝宝"}}]}},methods:{showMenu:function(){var t=uni.getSubNVueById("menu");t.show("fade-in",300,(function(){})),uni.$once("menu-hide",(function(){t.hide("fade-out",300)}))},chat2user:function(t){uni.navigateTo({url:"/pages/chat/chat?uid="+t})}}});e.default=o},"65dd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-badge-box[data-v-54df93b0]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-badge[data-v-54df93b0]{line-height:%?24?%;padding:%?4?% %?8?%;-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-badge-dot[data-v-54df93b0]{height:%?16?%;width:%?16?%;-webkit-border-radius:%?100?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-54df93b0]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-54df93b0]{background:#909399;color:#fff}',""]),t.exports=e},"681b":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero},backgroundColor:function(){return this.bgColor?this.bgColor:this.$u.color[this.type]}}};e.default=i},"6b73":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-search[data-v-12402d03]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-12402d03]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-12402d03]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-12402d03]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-12402d03]{width:%?34?%;height:%?34?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#c8cbcc;-webkit-border-radius:50%;border-radius:50%}.u-placeholder-class[data-v-12402d03]{color:#909399}.u-action[data-v-12402d03]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-12402d03]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},"7bb6":function(t,e,n){"use strict";var i={uIcon:n("9553").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-search",style:{margin:t.margin}},[n("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:"search",color:t.searchIconColor?t.searchIconColor:t.color}})],1),n("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,maxlength:t.getMaxlength,focus:t.focus,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?n("v-uni-view",{staticClass:"u-close-wrap",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close",size:16,color:"#fff"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}})],1):t._e()],1),n("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"7f3d":function(t,e,n){"use strict";n.r(e);var i=n("7bb6"),a=n("3ff5");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8022");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"12402d03",null,!1,i["a"],r);e["default"]=l.exports},8022:function(t,e,n){"use strict";var i=n("1748"),a=n.n(i);a.a},"8bf7":function(t,e,n){var i=n("65dd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0553c3ed",i,!0,{sourceMap:!1,shadowMode:!1})},"8db8":function(t,e,n){var i=n("a49c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("10a0672a",i,!0,{sourceMap:!1,shadowMode:!1})},a49c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.line-1[data-v-e1264fa2], .container .main .list .list-item .content .message[data-v-e1264fa2]{-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box;overflow:hidden;white-space:normal;text-overflow:ellipsis}.container .navbar[data-v-e1264fa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 %?30?%;font-size:%?32?%}.container .navbar > uni-view[data-v-e1264fa2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.container .navbar > uni-view.app-name[data-v-e1264fa2]{font-weight:700}.container .navbar > uni-view.app-operate[data-v-e1264fa2]{text-align:right}.container .main[data-v-e1264fa2]{padding:%?30?%}.container .main .list .list-item[data-v-e1264fa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%}.container .main .list .list-item .avatar[data-v-e1264fa2]{position:relative;width:%?84?%;height:%?84?%;margin-right:%?24?%}.container .main .list .list-item .avatar .image[data-v-e1264fa2]{width:100%;height:100%;-webkit-border-radius:10%;border-radius:10%}.container .main .list .list-item .content[data-v-e1264fa2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.container .main .list .list-item .content .name[data-v-e1264fa2]{font-size:%?32?%;color:#333}.container .main .list .list-item .content .message[data-v-e1264fa2]{font-size:%?26?%;color:#999}.container .main .list .list-item .time[data-v-e1264fa2]{color:#999;margin-left:%?26?%}',""]),t.exports=e},a8da:function(t,e,n){"use strict";var i=n("8db8"),a=n.n(i);a.a},b5a4:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:-1},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"},getMaxlength:function(){return Number(this.maxlength)}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){this.keyword=""},search:function(){this.$emit("search",this.keyword),uni.hideKeyboard()},custom:function(){this.$emit("custom",this.keyword),uni.hideKeyboard()},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){this.focused=!1,this.show=!1,this.$emit("blur",this.keyword)}}};e.default=i},c965:function(t,e,n){"use strict";var i=n("8bf7"),a=n.n(i);a.a},d16f:function(t,e,n){"use strict";n.r(e);var i=n("4b51"),a=n("2761");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a8da");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e1264fa2",null,!1,i["a"],r);e["default"]=l.exports},ddd2:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-badge-box",class:[t.isDot?"u-badge-dot":"u-badge","mini"==t.size?"u-badge-mini":""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.backgroundColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}}]);