webpackJsonp([1],{0:function(t,e){},1:function(t,e){},2:function(t,e){},"4+hh":function(t,e){},FKZ2:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("8+8L"),i=s("NYxO");n.default.use(i.a),n.default.use(a.a);var o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[s("md-app-toolbar",{staticClass:"md-small md-dense md-primary"},[s("div",{staticClass:"md-toolbar-row"},[s("div",{staticClass:"md-toolbar-section-start"},[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title"},[t._v("Avengers")])],1),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",[t._v("more_vert")])],1)],1)])]),t._v(" "),s("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e}}},[s("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[t._v("Navigation")]),t._v(" "),s("md-list",[s("md-list-item",[s("md-icon",[t._v("move_to_inbox")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Inbox")])],1),t._v(" "),s("md-list-item",[s("md-icon",[t._v("send")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Sent Mail")])],1),t._v(" "),s("md-list-item",[s("md-icon",[t._v("delete")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Trash")])],1),t._v(" "),s("md-list-item",[s("md-icon",[t._v("error")]),t._v(" "),s("span",{staticClass:"md-list-item-text"},[t._v("Spam")])],1)],1)],1),t._v(" "),s("md-app-content",[s("router-view")],1)],1)],1)},staticRenderFns:[]};var m=s("VU/8")({name:"App",data:function(){return{menuVisible:!1}},beforeCreate:function(){this.$store.dispatch("getMovies")}},o,!1,function(t){s("wiC2")},null,null).exports,r=s("/ocq"),d={name:"",props:["message","index"],data:function(){return{}},created:function(){console.log(this.message)},computed:{imageLink:function(){return this.message.images.small}},methods:{}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[t._v(t._s(t.message.original_title))]),t._v(" "),s("div",{staticClass:"md-subhead"},[t._v(t._s(t.message.pubdate))])]),t._v(" "),s("md-card-media",{attrs:{"md-medium":""}},[s("img",{attrs:{src:t.imageLink,alt:"People"}})])],1),t._v(" "),s("md-card-content",[t._v("                \n  Stars: "+t._s(t.message.stars)),s("br"),t._v("\n          Wish: "+t._s(t.message.wish))]),t._v(" "),s("md-card-actions",{attrs:{"md-alignment":"left"}},[s("md-button",{staticClass:"md-primary"},[t._v("Like")]),t._v(" "),s("md-button",{staticClass:"md-accent"},[t._v("Dislike")])],1)],1)},staticRenderFns:[]};var l={name:"mainPage",data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{movies:function(){return this.$store.state.movies}},components:{movieCard:s("VU/8")(d,c,!1,function(t){s("FKZ2")},"data-v-3f4111b8",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md-layout md-gutter md-alignment-center"},this._l(this.movies,function(t,s){return e("movieCard",{key:t.index,staticClass:"md-layout-item md-large-size-25  md-medium-size-25 md-small-size-50 md-xsmall-size-100",attrs:{message:t}})}))},staticRenderFns:[]};var v=s("VU/8")(l,u,!1,function(t){s("VA6C")},"data-v-76c09628",null).exports;n.default.use(r.a);var p=new r.a({routes:[{path:"/",name:"mainPage",component:v}]}),f=s("Lgyv"),_=s.n(f),g=(s("4+hh"),s("W92t"),s("//Fk")),b=s.n(g),C=s("fBpl"),h=new b.a(function(t,e){C.get("https://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a",function(e){var s="";e.on("data",function(t){s+=t}),e.on("end",function(){console.log(s),t(s)})}).on("error",function(t){console.log("Error: "+t.message)})});n.default.use(i.a);var x={getMovieMutation:function(t,e){console.log(JSON.parse(e).entries),t.movies=JSON.parse(e).entries}},w={getMovies:function(t){var e=t.commit;h.then(function(t){console.log(JSON.parse(t)),e("getMovieMutation",t)})}},V=new i.a.Store({state:{movies:[]},mutations:x,actions:w});n.default.use(_.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:p,store:V,components:{App:m},template:"<App/>"})},VA6C:function(t,e){},W92t:function(t,e){},wiC2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c6aed96be2f4af9a46b8.js.map