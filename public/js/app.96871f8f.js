(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],s[o]&&m.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0c68":function(t,e,i){"use strict";var n=i("a1b4"),s=i.n(n);s.a},2171:function(t,e,i){},"2a14":function(t,e,i){"use strict";var n=i("688c"),s=i.n(n);s.a},"2c4e":function(t,e,i){},3890:function(t,e,i){"use strict";var n=i("e6c1"),s=i.n(n);s.a},4465:function(t,e,i){},"472f":function(t,e,i){},5155:function(t,e,i){},5600:function(t,e,i){},"562a":function(t,e,i){"use strict";var n=i("472f"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o={name:"app",components:{},data:function(){return{}}},r=o,l=(i("74e1"),i("94fb"),i("2877")),c=Object(l["a"])(r,s,a,!1,null,"a2195e14",null);c.options.__file="App.vue";var d=c.exports,u=i("bd19"),m=i.n(u),f=(i("7514"),i("f751"),i("2f62")),p=i("f16a");n["a"].use(f["a"]);var h=new f["a"].Store({state:{itemCount:12,showingListIndex:0,userInfo:{username:"JerryChan",prfImg:"../assets/logo.png"},selfList:[]},mutations:{initStateFromLocalStorage:function(t){var e=localStorage.getItem("state");e?this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("state")))):this.replaceState(Object.assign(t,p))},itemDone:function(t,e){var i=this.getters.getShowingList.todoList[e];this.getters.getShowingList.todoList.splice(e,1),i.value=!0,this.getters.getShowingList.completedList.push(i)},itemCancelDone:function(t,e){var i=this.getters.getShowingList.completedList[e];this.getters.getShowingList.completedList.splice(e,1),i.value=!1,this.getters.getShowingList.todoList.push(i)},addItem:function(t,e){this.getters.getShowingList.todoList.push(e),t.itemCount++},changeShowingList:function(t,e){t.showingListIndex=e},toggleItemStar:function(t,e){var i=this.getters.getShowingTodoItemById(e);i.isStarred=!i.isStarred},createList:function(t){t.selfList.push({listName:"New list",todoList:[],completedList:[]})},editItem:function(t,e){var i=this.getters.getShowingItemById(e.id);i.deadline=e.deadline,i.title=e.title}},getters:{getShowingList:function(t){return t.selfList[t.showingListIndex]},getShowingTodoItemById:function(t,e){return function(t){return e.getShowingList.todoList.find(function(e){return e.itemId===t})}},getShowingItemById:function(t,e){return function(t){var i=e.getShowingList.todoList.find(function(e){return e.itemId===t});return void 0===i?e.getShowingList.completedList.find(function(e){return e.itemId===t}):i}}}}),v=i("8c4f"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"frame"},[i("the-left-column",{staticClass:"sidebar"}),i("the-base-list",{staticClass:"list-body"})],1)},b=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftColumn"},[i("search-bar",{on:{expand:t.toggleExpand}}),i("profile-bar",{attrs:{username:t.username}}),i("transition-group",{attrs:{name:"expand"}},[t.isExpand?i("div",{key:"expansion-part",staticClass:"expansion-part"},[i("div",{staticClass:"list-space"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"list",class:{isSelected:n==t.showingListIndex},on:{click:function(e){t.clickList(n)}}},[0==n?i("v-icon",{staticClass:"inbox",attrs:{name:"inbox"}}):t._e(),0!=n?i("v-icon",{staticClass:"selfList",attrs:{name:"list-ul"}}):t._e(),i("span",[t._v(t._s(e.listName))])],1)})),i("div",{staticClass:"create-list",on:{click:t.createList}},[i("v-icon",{attrs:{name:"plus"}}),i("span",[t._v("Creat list")])],1)]):t._e()])],1)},_=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-bar"},[i("div",{on:{click:t.clickExpand}},[i("v-icon",{attrs:{name:"bars"}})],1),i("input",{attrs:{type:"text"}}),i("v-icon",{attrs:{name:"search"}})],1)},L=[],y={methods:{clickExpand:function(){this.$emit("expand")}}},x=y,C=(i("562a"),Object(l["a"])(x,S,L,!1,null,"3aed4596",null));C.options.__file="SearchBar.vue";var I=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-bar"},[n("div",{staticClass:"profile"},[n("img",{attrs:{alt:"profile_img",src:i("cf05")}}),n("label",[t._v(t._s(t.username))]),n("v-icon",{attrs:{name:"angle-down"}})],1),n("span",[n("v-icon",{staticClass:"bell",attrs:{name:"regular/bell"}}),n("v-icon",{staticClass:"comment",attrs:{name:"regular/comment"}})],1)])},T=[],E={props:{username:String}},O=E,D=(i("eb52"),Object(l["a"])(O,k,T,!1,null,"7013b80e",null));D.options.__file="ProfileBar.vue";var $=D.exports,N={components:{SearchBar:I,ProfileBar:$},computed:{username:function(){return this.$store.state.userInfo.username},prfImg:function(){return this.$store.state.userInfo.prfImg},list:function(){return this.$store.state.selfList},showingListIndex:function(){return this.$store.state.showingListIndex}},methods:{clickList:function(t){this.$store.commit("changeShowingList",t)},createList:function(){this.$store.commit("createList")},toggleExpand:function(){this.screenWidth<=768?this.isExpand=!this.isExpand:this.isExpand=!0},getScreenWidth:function(){this.screenWidth=document.documentElement.clientWidth},resizeListener:function(t){this.getScreenWidth(),this.screenWidth>=768&&(this.isExpand=!0)}},data:function(){return{isExpand:!0,screenWidth:0}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.resizeListener)}),this.resizeListener},beforeDestroy:function(){window.removeEventListener("resize",this.resizeListener)}},j=N,P=(i("7aab"),Object(l["a"])(j,w,_,!1,null,"63fbe94c",null));P.options.__file="TheLeftColumn.vue";var W=P.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"baselist"},[i("div",{staticClass:"list-name"},[t._v("\n    "+t._s(t.showingList.listName)+"\n  ")]),i("div",{staticClass:"list-body"},[i("add-bar"),i("transition-group",{attrs:{name:"list"}},[t._l(t.showingTodoList,function(e,n){return i("base-item",t._b({key:e.itemId,on:{change:function(e){t.itemDone(n)}}},"base-item",e,!1))}),i("div",{key:"togglebutton"},[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isCompletedShown,expression:"!isCompletedShown"}],staticClass:"notshowing",on:{click:function(e){t.toggleShowCompleted(!0)}}},[t._v("\n     "+t._s(t.showingList.completedList.length)+" COMPLETED TO-DOS ")]),i("label",{directives:[{name:"show",rawName:"v-show",value:t.isCompletedShown,expression:"isCompletedShown"}],staticClass:"showing",on:{click:function(e){t.toggleShowCompleted(!1)}}},[t._v(" HIDE COMPLETED TO-DOS ")])]),t._l(t.showingList.completedList,function(e,n){return i("base-item",t._b({directives:[{name:"show",rawName:"v-show",value:t.isCompletedShown,expression:"isCompletedShown"}],key:e.itemId,staticClass:"completed-item",on:{change:function(e){t.itemCancelDone(n)}}},"base-item",e,!1))})],2)],1)])},F=[],A=(i("55dd"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-item",attrs:{value:t.myValue}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.myValue)?t._i(t.myValue,null)>-1:t.myValue},on:{change:function(e){var i=t.myValue,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);n.checked?o<0&&(t.myValue=i.concat([a])):o>-1&&(t.myValue=i.slice(0,o).concat(i.slice(o+1)))}else t.myValue=s}}}),i("label",{on:{click:function(e){t.editWindow(!0)}}},[t._v(" "+t._s(t.title)+" ")]),t.myValue?t._e():i("span",{class:{expired:t.isExpired,deadline:!t.isExpired}},[t._v(t._s(t.showingDeadline))]),i("div",{staticClass:"starIcon",on:{click:t.toggleStarred}},[t.isStarred&&!t.value?i("v-icon",{attrs:{name:"star"}}):t._e(),t.isStarred||t.value?t._e():i("v-icon",{attrs:{name:"regular/star"}})],1),t.isPoped?i("pop-frame",{on:{close:function(e){t.editWindow(!1)}}},[i("pop-edit-item",t._b({on:{close:function(e){t.editWindow(!1)}}},"pop-edit-item",{title:t.title,deadline:t.deadline,id:t.itemId},!1))],1):t._e()],1)}),M=[],V=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("div",{staticClass:"window"},[i("div",{staticClass:"close-bar"},[i("div",{on:{click:t.closeWindow}},[i("v-icon",{attrs:{name:"times"}})],1)]),t._t("default")],2)])}),J=[],z={methods:{closeWindow:function(){this.$emit("close")}}},Y=z,H=(i("c500"),Object(l["a"])(Y,V,J,!1,null,"4615fe58",null));H.options.__file="PopFrame.vue";var U=H.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form"},[i("div",[i("v-icon",{attrs:{name:"edit"}}),i("span",[t._v(" Title")])],1),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.myTitle,expression:"myTitle"}],staticClass:"title",attrs:{type:"text"},domProps:{value:t.myTitle},on:{input:function(e){e.target.composing||(t.myTitle=e.target.value)}}})]),i("div",[i("v-icon",{attrs:{name:"edit"}}),i("span",[t._v(" Deadline (YYYY/MM/DD)")])],1),i("date-picker",{model:{value:t.myDeadline,callback:function(e){t.myDeadline=e},expression:"myDeadline"}}),i("div",{staticClass:"button-area"},[i("button",{staticClass:"confirm",on:{click:t.commitEdit}},[t._v("确认")]),i("button",{staticClass:"cancel",on:{click:t.closeWindow}},[t._v("取消")])])],1)},R=[],q=i("774a"),G=i.n(q),Q={methods:{closeWindow:function(t){this.$emit("close")},commitEdit:function(){this.$store.commit("editItem",{title:this.myTitle,deadline:this.myDeadline,id:this.id}),this.$emit("close")}},components:{datePicker:G.a},props:{title:String,deadline:String,id:Number},data:function(){return{myTitle:this.title,myDeadline:this.deadline}}},X=Q,Z=(i("ffa1"),Object(l["a"])(X,K,R,!1,null,"df76c4c8",null));Z.options.__file="PopEditItem.vue";var tt=Z.exports,et={name:"BaseItem",props:{itemId:Number,title:String,deadline:String,value:Boolean,isStarred:Boolean},data:function(){return{myValue:this.value,isPoped:!1}},watch:{myValue:function(t,e){t!==e&&this.$emit("change",t)}},methods:{toggleStarred:function(t){this.$store.commit("toggleItemStar",this.itemId)},editWindow:function(t){this.isPoped=t}},computed:{isExpired:function(){var t=Date.now(),e=Date.parse(this.deadline);return t-e>864e5},deadlineFromNow:function(){var t=Date.now(),e=Date.parse(this.deadline);return Math.floor((e-t)/864e5)},showingDeadline:function(){var t;if(-1===this.deadlineFromNow)t="Today";else if(0===this.deadlineFromNow)t="Tomorrow";else{if(!(this.deadlineFromNow<6&&this.deadlineFromNow>=-1))return this.deadline;var e=new Date(this.deadline);switch(e.getDay()){case 0:t="Sunday";break;case 1:t="Monday";break;case 2:t="Tuesday";break;case 3:t="Wednesday";break;case 4:t="Thursday";break;case 5:t="Friday";break;case 6:t="Saturday";break}}return t}},components:{PopFrame:U,PopEditItem:tt}},it=et,nt=(i("8e7f"),Object(l["a"])(it,A,M,!1,null,"745ebca4",null));nt.options.__file="BaseItem.vue";var st=nt.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-item"},[i("v-icon",{attrs:{name:"plus"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addText,expression:"addText"}],attrs:{type:"text",placeholder:"Add a todo"},domProps:{value:t.addText},on:{focus:function(e){t.toggleAddFocusStatus(!0)},blur:function(e){t.toggleAddFocusStatus(!1)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addItem()},input:function(e){e.target.composing||(t.addText=e.target.value)}}})],1)},ot=[],rt={data:function(){return{isAddOnFocus:!1,addText:""}},methods:{toggleAddFocusStatus:function(t){this.isAddOnFocus=t},addItem:function(){0!==this.addText.length&&!0===this.isAddOnFocus&&(this.$store.commit("addItem",{itemId:this.$store.state.itemCount+1,title:this.addText,deadline:"",value:!1,isStarred:!1}),this.addText="")}}},lt=rt,ct=(i("2a14"),Object(l["a"])(lt,at,ot,!1,null,"725a7ec2",null));ct.options.__file="AddBar.vue";var dt=ct.exports,ut={name:"BaseList",data:function(){return{isCompletedShown:!1}},computed:{showingList:function(){return this.$store.getters.getShowingList},showingTodoList:function(){return this.showingList.todoList.sort(function(t,e){return!1===t.isStarred&&!0===e.isStarred})}},components:{BaseItem:st,AddBar:dt},methods:{itemDone:function(t){this.$store.commit("itemDone",t)},itemCancelDone:function(t){this.$store.commit("itemCancelDone",t)},toggleShowCompleted:function(t){this.isCompletedShown=t}}},mt=ut,ft=(i("0c68"),Object(l["a"])(mt,B,F,!1,null,"97b6d936",null));ft.options.__file="TheBaseList.vue";var pt=ft.exports,ht={components:{TheLeftColumn:W,TheBaseList:pt}},vt=ht,gt=(i("a8bb"),Object(l["a"])(vt,g,b,!1,null,"0e395406",null));gt.options.__file="TheMainFrame.vue";var bt=gt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer-frame"},[i("div",{staticClass:"login-frame"},[i("h1",[t._v("IT'S FAKE WUNDERLIST")]),i("span",[t._v("Username")]),i("input",{staticClass:"text-area",attrs:{type:"text",name:"username"}}),i("span",[t._v("Password")]),i("input",{staticClass:"text-area",attrs:{type:"password",name:"password"}}),t.alert?i("span",{staticClass:"alert-box"},[t._v(t._s(t.alertMessage))]):t._e(),i("input",{attrs:{type:"submit",value:"登录"}})])])},_t=[],St={data:function(){return{alert:!1,alertMessage:"Wrong username or password."}}},Lt=St,yt=(i("3890"),Object(l["a"])(Lt,wt,_t,!1,null,"6b25d46f",null));yt.options.__file="Login.vue";var xt=yt.exports;n["a"].use(v["a"]);var Ct=[{path:"/login",component:xt},{path:"/list",components:{default:bt}},{path:"/",redirect:"/list"}],It=new v["a"]({routes:Ct}),kt=It;n["a"].config.productionTip=!1,n["a"].component("v-icon",m.a),n["a"].use(v["a"]),h.subscribe(function(t,e){localStorage.setItem("state",JSON.stringify(e))}),new n["a"]({store:h,router:kt,render:function(t){return t(d)},beforeCreate:function(){this.$store.commit("initStateFromLocalStorage")}}).$mount("#app")},"688c":function(t,e,i){},"6ae6":function(t,e,i){},"74e1":function(t,e,i){"use strict";var n=i("4465"),s=i.n(n);s.a},"7aab":function(t,e,i){"use strict";var n=i("c6f3"),s=i.n(n);s.a},"8e7f":function(t,e,i){"use strict";var n=i("5155"),s=i.n(n);s.a},"94fb":function(t,e,i){"use strict";var n=i("e85b"),s=i.n(n);s.a},a1b4:function(t,e,i){},a8bb:function(t,e,i){"use strict";var n=i("6ae6"),s=i.n(n);s.a},c500:function(t,e,i){"use strict";var n=i("5600"),s=i.n(n);s.a},c6f3:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},e6c1:function(t,e,i){},e85b:function(t,e,i){},eb52:function(t,e,i){"use strict";var n=i("2c4e"),s=i.n(n);s.a},f16a:function(t){t.exports={itemCount:10,showingListIndex:0,userInfo:{username:"JerryChan",prfImg:"../assets/logo.png"},selfList:[{listName:"Inbox",todoList:[{itemId:1,title:"这是一个模仿 Wunderlist 的练手项目",deadline:"2017-1-1",value:!1,isStarred:!0},{itemId:2,title:"单击 TODO 项可以修改内容和时间",deadline:"2018-10-20",value:!1,isStarred:!1}],completedList:[{itemId:3,title:"example-todo-item",deadline:"2018-10-21",value:!0,isStarred:!1},{itemId:4,title:"todo4",deadline:"",value:!0,isStarred:!1}]},{listName:"工作",todoList:[{itemId:5,title:"找工作",deadline:"",value:!1,isStarred:!1},{itemId:6,title:"或者找实习",deadline:"",value:!1,isStarred:!1}],completedList:[{itemId:7,title:"目前两样都没有：（",deadline:"",value:!0,isStarred:!1}]},{listName:"学习",todoList:[{itemId:8,title:"继续深入学习Vue.js",deadline:"",value:!1,isStarred:!1},{itemId:9,title:"学一点 node.js",deadline:"",value:!1,isStarred:!1}],completedList:[{itemId:10,title:"打好 HTML/JS/CSS 的基础",deadline:"",value:!0,isStarred:!1}]},{listName:"电影",todoList:[],completedList:[]},{listName:"生活",todoList:[],completedList:[]}]}},ffa1:function(t,e,i){"use strict";var n=i("2171"),s=i.n(n);s.a}});
//# sourceMappingURL=app.96871f8f.js.map