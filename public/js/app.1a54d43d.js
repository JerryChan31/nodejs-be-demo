(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)o=r[d],s[o]&&m.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"311b":function(t,e,i){},3482:function(t,e,i){},3854:function(t,e,i){},3890:function(t,e,i){"use strict";var n=i("e6c1"),s=i.n(n);s.a},4081:function(t,e,i){"use strict";var n=i("3482"),s=i.n(n);s.a},"42c9":function(t,e,i){"use strict";var n=i("6121"),s=i.n(n);s.a},"49c8":function(t,e,i){},"4f78":function(t,e,i){"use strict";var n=i("56bd"),s=i.n(n);s.a},"56bd":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view",{attrs:{name:"sidebar"}}),i("router-view")],1)},a=[],o={name:"app",components:{},data:function(){return{}}},r=o,l=(i("a791"),i("94fb"),i("2877")),c=Object(l["a"])(r,s,a,!1,null,"4972ae20",null);c.options.__file="App.vue";var u=c.exports,d=i("bd19"),m=i.n(d),f=(i("7514"),i("f751"),i("2f62")),p=i("f16a");n["a"].use(f["a"]);var v=new f["a"].Store({state:{itemCount:12,showingListIndex:0,userInfo:{username:"JerryChan",prfImg:"../assets/logo.png"},selfList:[]},mutations:{initStateFromLocalStorage:function(t){var e=localStorage.getItem("state");e?this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("state")))):this.replaceState(Object.assign(t,p))},itemDone:function(t,e){var i=this.getters.getShowingList.todoList[e];i.value=!0,this.getters.getShowingList.completedList.push(i),this.getters.getShowingList.todoList.splice(e,1)},itemCancelDone:function(t,e){var i=this.getters.getShowingList.completedList[e];i.value=!1,this.getters.getShowingList.todoList.push(i),this.getters.getShowingList.completedList.splice(e,1)},addItem:function(t,e){this.getters.getShowingList.todoList.push(e),t.itemCount++},changeShowingList:function(t,e){t.showingListIndex=e},toggleItemStar:function(t,e){var i=this.getters.getShowingTodoItemById(e);i.isStarred=!i.isStarred},createList:function(t){t.selfList.push({listName:"New list",todoList:[],completedList:[]})},editItem:function(t,e){var i=this.getters.getShowingItemById(e.id);i.deadline=e.deadline,i.title=e.title}},getters:{getShowingList:function(t){return t.selfList[t.showingListIndex]},getShowingTodoItemById:function(t,e){return function(t){return e.getShowingList.todoList.find(function(e){return e.itemId===t})}},getShowingItemById:function(t,e){return function(t){var i=e.getShowingList.todoList.find(function(e){return e.itemId===t});return void 0===i?e.getShowingList.completedList.find(function(e){return e.itemId===t}):i}}}}),h=i("8c4f"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftColumn"},[i("search-bar"),i("profile-bar",{attrs:{username:t.username}}),i("div",{staticClass:"list-space"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"list",class:{isSelected:n==t.showingListIndex},on:{click:function(e){t.clickList(n)}}},[0==n?i("v-icon",{staticClass:"inbox",attrs:{name:"inbox"}}):t._e(),0!=n?i("v-icon",{staticClass:"selfList",attrs:{name:"list-ul"}}):t._e(),i("span",[t._v(t._s(e.listName))])],1)})),i("div",{staticClass:"create-list",on:{click:t.createList}},[i("v-icon",{attrs:{name:"plus"}}),i("span",[t._v("Creat list")])],1)],1)},b=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-bar"},[i("v-icon",{attrs:{name:"bars"}}),i("input",{attrs:{type:"text"}}),i("v-icon",{attrs:{name:"search"}})],1)},_=[],S={},L=S,y=(i("6960"),Object(l["a"])(L,w,_,!1,null,"157cc95b",null));y.options.__file="SearchBar.vue";var I=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-bar"},[n("div",{staticClass:"profile"},[n("img",{attrs:{alt:"profile_img",src:i("cf05")}}),n("label",[t._v(t._s(t.username))]),n("v-icon",{attrs:{name:"angle-down"}})],1),n("span",[n("v-icon",{staticClass:"bell",attrs:{name:"regular/bell"}}),n("v-icon",{staticClass:"comment",attrs:{name:"regular/comment"}})],1)])},x=[],O={props:{username:String}},T=O,k=(i("7c7b"),Object(l["a"])(T,C,x,!1,null,"05687728",null));k.options.__file="ProfileBar.vue";var $=k.exports,D={components:{SearchBar:I,ProfileBar:$},computed:{username:function(){return this.$store.state.userInfo.username},prfImg:function(){return this.$store.state.userInfo.prfImg},list:function(){return this.$store.state.selfList},showingListIndex:function(){return this.$store.state.showingListIndex}},methods:{clickList:function(t){this.$store.commit("changeShowingList",t)},createList:function(){this.$store.commit("createList")}}},E=D,j=(i("6c9e"),Object(l["a"])(E,g,b,!1,null,"08b2bdf2",null));j.options.__file="TheLeftColumn.vue";var P=j.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"baselist"},[i("div",{staticClass:"list-name"},[t._v("\n    "+t._s(t.showingList.listName)+"\n  ")]),i("div",{staticClass:"list-body"},[i("add-bar"),i("div",t._l(t.showingTodoList,function(e,n){return i("base-item",t._b({key:e.itemId,on:{change:function(e){t.itemDone(n)}},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"todo.value"}},"base-item",e,!1))})),i("div",[i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isCompletedShown,expression:"!isCompletedShown"}],staticClass:"notshowing",on:{click:function(e){t.toggleShowCompleted(!0)}}},[t._v(" "+t._s(t.showingList.completedList.length)+" COMPLETED TO-DOS ")]),i("label",{directives:[{name:"show",rawName:"v-show",value:t.isCompletedShown,expression:"isCompletedShown"}],staticClass:"showing",on:{click:function(e){t.toggleShowCompleted(!1)}}},[t._v(" HIDE COMPLETED TO-DOS ")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCompletedShown,expression:"isCompletedShown"}]},t._l(t.showingList.completedList,function(e,n){return i("base-item",t._b({key:e.itemId,staticClass:"completed-item",on:{change:function(e){t.itemCancelDone(n)}}},"base-item",e,!1))}))],1)])},B=[],A=(i("55dd"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-item",attrs:{value:t.myValue}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.myValue)?t._i(t.myValue,null)>-1:t.myValue},on:{change:function(e){var i=t.myValue,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);n.checked?o<0&&(t.myValue=i.concat([a])):o>-1&&(t.myValue=i.slice(0,o).concat(i.slice(o+1)))}else t.myValue=s}}}),i("label",{on:{click:function(e){t.editWindow(!0)}}},[t._v(" "+t._s(t.title)+" ")]),t.myValue?t._e():i("span",{class:{expired:t.isExpired,deadline:!t.isExpired}},[t._v(t._s(t.deadline))]),i("div",{staticClass:"starIcon",on:{click:t.toggleStarred}},[t.isStarred&&!t.value?i("v-icon",{attrs:{name:"star"}}):t._e(),t.isStarred||t.value?t._e():i("v-icon",{attrs:{name:"regular/star"}})],1),t.isPoped?i("pop-frame",{on:{close:function(e){t.editWindow(!1)}}},[i("pop-edit-item",t._b({on:{close:function(e){t.editWindow(!1)}}},"pop-edit-item",{title:t.title,deadline:t.deadline,id:t.itemId},!1))],1):t._e()],1)}),V=[],F=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("div",{staticClass:"window"},[i("div",{staticClass:"close-bar"},[i("div",{on:{click:t.closeWindow}},[i("v-icon",{attrs:{name:"times"}})],1)]),t._t("default")],2)])}),M=[],W={methods:{closeWindow:function(){this.$emit("close")}}},J=W,Y=(i("f390"),Object(l["a"])(J,F,M,!1,null,"0a1c45f4",null));Y.options.__file="PopFrame.vue";var H=Y.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form"},[i("div",[i("v-icon",{attrs:{name:"edit"}}),i("span",[t._v(" Title")])],1),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.myTitle,expression:"myTitle"}],attrs:{type:"text"},domProps:{value:t.myTitle},on:{input:function(e){e.target.composing||(t.myTitle=e.target.value)}}})]),i("div",[i("v-icon",{attrs:{name:"edit"}}),i("span",[t._v(" Deadline (YYYY/MM/DD)")])],1),i("date-picker",{model:{value:t.myDeadline,callback:function(e){t.myDeadline=e},expression:"myDeadline"}}),i("div",{staticClass:"button-area"},[i("button",{staticClass:"confirm",on:{click:t.commitEdit}},[t._v("确认")]),i("button",{staticClass:"cancel",on:{click:t.closeWindow}},[t._v("取消")])])],1)},K=[],R=i("774a"),q=i.n(R),z={methods:{closeWindow:function(t){this.$emit("close")},commitEdit:function(){this.$store.commit("editItem",{title:this.myTitle,deadline:this.myDeadline,id:this.id}),this.$emit("close")}},components:{datePicker:q.a},props:{title:String,deadline:String,id:Number},data:function(){return{myTitle:this.title,myDeadline:this.deadline}}},G=z,Q=(i("4f78"),Object(l["a"])(G,U,K,!1,null,"fbc69c9c",null));Q.options.__file="PopEditItem.vue";var X=Q.exports,Z={name:"BaseItem",props:{itemId:Number,title:String,deadline:String,value:Boolean,isStarred:Boolean},data:function(){return{myValue:this.value,isPoped:!1}},watch:{myValue:function(t,e){t!==e&&this.$emit("change",t)}},methods:{toggleStarred:function(t){this.$store.commit("toggleItemStar",this.itemId)},editWindow:function(t){this.isPoped=t}},computed:{isExpired:function(){var t=Date.now(),e=Date.parse(this.deadline);return t-e>0}},components:{PopFrame:H,PopEditItem:X}},tt=Z,et=(i("f712"),Object(l["a"])(tt,A,V,!1,null,"1dd02562",null));et.options.__file="BaseItem.vue";var it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-item"},[i("v-icon",{attrs:{name:"plus"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addText,expression:"addText"}],attrs:{type:"text",placeholder:"Add a todo"},domProps:{value:t.addText},on:{focus:function(e){t.toggleAddFocusStatus(!0)},blur:function(e){t.toggleAddFocusStatus(!1)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addItem()},input:function(e){e.target.composing||(t.addText=e.target.value)}}})],1)},st=[],at={data:function(){return{isAddOnFocus:!1,addText:""}},methods:{toggleAddFocusStatus:function(t){this.isAddOnFocus=t},addItem:function(){0!==this.addText.length&&!0===this.isAddOnFocus&&(this.$store.commit("addItem",{itemId:this.$store.state.itemCount+1,title:this.addText,deadline:"",value:!1,isStarred:!1}),this.addText="")}}},ot=at,rt=(i("42c9"),Object(l["a"])(ot,nt,st,!1,null,"45eb740d",null));rt.options.__file="AddBar.vue";var lt=rt.exports,ct={name:"BaseList",data:function(){return{isCompletedShown:!1}},computed:{showingList:function(){return this.$store.getters.getShowingList},showingTodoList:function(){return this.showingList.todoList.slice().sort(function(t,e){return!1===t.isStarred&&!0===e.isStarred})}},components:{BaseItem:it,AddBar:lt},methods:{itemDone:function(t){this.$store.commit("itemDone",t)},itemCancelDone:function(t){this.$store.commit("itemCancelDone",t)},toggleShowCompleted:function(t){this.isCompletedShown=t}}},ut=ct,dt=(i("4081"),Object(l["a"])(ut,N,B,!1,null,"13a97998",null));dt.options.__file="TheBaseList.vue";var mt=dt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer-frame"},[i("div",{staticClass:"login-frame"},[i("h1",[t._v("IT'S FAKE WUNDERLIST")]),i("span",[t._v("Username")]),i("input",{staticClass:"text-area",attrs:{type:"text",name:"username"}}),i("span",[t._v("Password")]),i("input",{staticClass:"text-area",attrs:{type:"password",name:"password"}}),t.alert?i("span",{staticClass:"alert-box"},[t._v(t._s(t.alertMessage))]):t._e(),i("input",{attrs:{type:"submit",value:"登录"}})])])},pt=[],vt={data:function(){return{alert:!1,alertMessage:"Wrong username or password."}}},ht=vt,gt=(i("3890"),Object(l["a"])(ht,ft,pt,!1,null,"6b25d46f",null));gt.options.__file="Login.vue";var bt=gt.exports;n["a"].use(h["a"]);var wt=[{path:"/login",component:bt},{path:"/list",components:{default:mt,sidebar:P}},{path:"/",redirect:"/list"}],_t=new h["a"]({routes:wt}),St=_t;n["a"].config.productionTip=!1,n["a"].component("v-icon",m.a),n["a"].use(h["a"]),v.subscribe(function(t,e){localStorage.setItem("state",JSON.stringify(e))}),new n["a"]({store:v,router:St,render:function(t){return t(u)},beforeCreate:function(){this.$store.commit("initStateFromLocalStorage")}}).$mount("#app")},6121:function(t,e,i){},6960:function(t,e,i){"use strict";var n=i("f116"),s=i.n(n);s.a},"6c9e":function(t,e,i){"use strict";var n=i("3854"),s=i.n(n);s.a},"7c7b":function(t,e,i){"use strict";var n=i("ae83"),s=i.n(n);s.a},"94fb":function(t,e,i){"use strict";var n=i("e85b"),s=i.n(n);s.a},a791:function(t,e,i){"use strict";var n=i("f0ec"),s=i.n(n);s.a},ae83:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},e6c1:function(t,e,i){},e85b:function(t,e,i){},f0ec:function(t,e,i){},f116:function(t,e,i){},f16a:function(t){t.exports={itemCount:10,showingListIndex:0,userInfo:{username:"JerryChan",prfImg:"../assets/logo.png"},selfList:[{listName:"Inbox",todoList:[{itemId:1,title:"这是一个模仿 Wunderlist 的练手项目",deadline:"2017/1/1",value:!1,isStarred:!0},{itemId:2,title:"单击 TODO 项可以修改内容和时间",deadline:"2018/10/20",value:!1,isStarred:!1}],completedList:[{itemId:3,title:"example-todo-item",deadline:"2018/10/21",value:!0,isStarred:!1},{itemId:4,title:"todo4",deadline:"",value:!0,isStarred:!1}]},{listName:"工作",todoList:[{itemId:5,title:"找工作",deadline:"",value:!1,isStarred:!1},{itemId:6,title:"或者找实习",deadline:"",value:!1,isStarred:!1}],completedList:[{itemId:7,title:"目前两样都没有：（",deadline:"",value:!0,isStarred:!1}]},{listName:"学习",todoList:[{itemId:8,title:"继续深入学习Vue.js",deadline:"",value:!1,isStarred:!1},{itemId:9,title:"学一点 node.js",deadline:"",value:!1,isStarred:!1}],completedList:[{itemId:10,title:"打好 HTML/JS/CSS 的基础",deadline:"",value:!0,isStarred:!1}]},{listName:"电影",todoList:[],completedList:[]},{listName:"生活",todoList:[],completedList:[]}]}},f390:function(t,e,i){"use strict";var n=i("49c8"),s=i.n(n);s.a},f712:function(t,e,i){"use strict";var n=i("311b"),s=i.n(n);s.a}});
//# sourceMappingURL=app.1a54d43d.js.map