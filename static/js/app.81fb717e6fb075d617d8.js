webpackJsonp([1],{"+skl":function(e,t){},0:function(e,t){},1:function(e,t){},2:function(e,t){},"4+hh":function(e,t){},"4Kbd":function(e,t,a){a("fBpl")},HMuS:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o=a("8+8L"),i=a("NYxO");s.default.use(i.a),s.default.use(o.a);var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[a("md-app-toolbar",{staticClass:"md-small md-dense md-primary"},[a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-section-start"},[a("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[a("md-icon",[e._v("menu")])],1),e._v(" "),a("span",{staticClass:"md-title"},[e._v("Avengers")])],1),e._v(" "),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("more_vert")])],1)],1)])]),e._v(" "),a("md-app-drawer",{attrs:{"md-active":e.menuVisible},on:{"update:mdActive":function(t){e.menuVisible=t}}},[a("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e._v("Navigation")])],1),e._v(" "),a("md-app-content",[a("router-view")],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App",data:function(){return{menuVisible:!1}},beforeCreate:function(){}},n,!1,function(e){a("HMuS")},null,null).exports,m=a("/ocq"),c=a("fZjL"),d=a.n(c),l={name:"reconmmenderCard",props:["message"],data:function(){return{overview:"",popularity:null,poster_path:"",release_date:"",vote_average:null,imageLink:"",backdrop_path:"",show:!1,recommenderMovies:[],title:""}},created:function(){var e=this,t=this.message.substring(this.message.length-5,this.message.length-1),a=this.message.substring(0,this.message.length-7);this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=69186e589fea05ca3633aa8ebff8912e&language=en-US&query="+a+"&page=1&include_adult=false&year="+t).then(function(t){console.log(t.body.results[0]);var a=t.body.results[0];e.overview=a.overview,e.title=a.title,e.popularity=a.popularity,e.poster_path=a.poster_path,e.release_date=a.release_date,e.vote_average=a.vote_average,e.backdrop_path=a.backdrop_path,e.imageLink="https://image.tmdb.org/t/p/w500/"+e.poster_path},function(e){})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",[a("md-card-media-cover",{attrs:{"md-text-scrim":""}},[a("md-card-media",{attrs:{"md-ratio":"16:9"}},[a("img",{attrs:{src:e.imageLink,alt:"People"}})]),e._v(" "),a("md-card-area",[a("md-card-header",[a("span",{staticClass:"md-title"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"md-subhead"},[e._v(e._s(e.release_date))])])],1)],1)],1)},staticRenderFns:[]};var v={name:"",props:["message"],data:function(){return{duration:4e4,overview:"",popularity:null,poster_path:"",release_date:"",vote_average:null,imageLink:"",backdrop_path:"",showRecommender:!1,show:!1,recommenderMovies:[],title:""}},components:{recommenderCard:a("VU/8")(l,u,!1,function(e){a("xLOA")},"data-v-78768424",null).exports},created:function(){var e=this;this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=69186e589fea05ca3633aa8ebff8912e&language=en-US&query="+this.message.name+"&page=1&include_adult=false&year="+this.message.time).then(function(t){console.log(t.body.results[0]);var a=t.body.results[0];e.overview=a.overview,e.title=a.title,e.popularity=a.popularity,e.poster_path=a.poster_path,e.release_date=a.release_date,e.vote_average=a.vote_average,e.backdrop_path=a.backdrop_path,e.imageLink="https://image.tmdb.org/t/p/w500/"+e.poster_path},function(e){})},computed:{},methods:{recommender:function(){var e=this;this.$http.get("https://m3eg3ubuzg.execute-api.us-east-1.amazonaws.com/dev/recommender/"+this.message.id).then(function(t){var a=t.data;console.log(a),e.recommenderMovies=a,e.recommenderMovies=e.recommenderMovies.reverse(),e.showRecommender=!e.showRecommender})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",[a("md-card-media",[a("img",{attrs:{src:e.imageLink,alt:"People"}})]),e._v(" "),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"md-subhead"},[e._v(e._s(e.release_date))])]),e._v(" "),a("md-card-expand",[a("md-card-actions",{attrs:{"md-alignment":"space-between"}},[a("md-button",{staticClass:"md-primary",on:{click:e.recommender}},[e._v("\n           more movies like this\n         ")]),e._v(" "),a("md-card-expand-trigger",[a("md-button",{staticClass:"md-primary"},[e._v("overview")])],1)],1),e._v(" "),a("md-card-expand-content",[a("md-card-content",[e._v("\n               "+e._s(e.overview)+"\n       ")])],1)],1),e._v(" "),a("md-snackbar",{staticClass:"md-scrollbar",attrs:{"md-active":e.showRecommender,"md-position":"center","md-duration":e.duration},on:{"update:mdActive":function(t){e.showRecommender=t}}},[e._l(e.recommenderMovies,function(e){return a("recommenderCard",{key:e.index,attrs:{message:e}})}),e._v(" "),a("md-button",{staticClass:"md-fab md-plain md-mini closeBtn",on:{click:function(t){e.showRecommender=!1}}},[a("md-icon",[e._v("close")])],1)],2)],1)},staticRenderFns:[]};var h={name:"mainPage",data:function(){return{allMovies:{},msg:"Welcome to Your Vue.js App",movieIds:[],moviesNameTime:[],currentPage:null,totalPage:null,moviesCopy:[],searchMovies:[]}},computed:{movies:function(){}},created:function(){var e=this;this.$http.get("https://m3eg3ubuzg.execute-api.us-east-1.amazonaws.com/dev/getMovies").then(function(t){t&&(console.log(t.body),e.movieIds=d()(t.body),e.movieIds.forEach(function(a){var s={id:a,name:t.body[a].substring(0,t.body[a].length-7),time:t.body[a].substring(t.body[a].length-5,t.body[a].length-1)};e.moviesNameTime.push(s)}),e.moviesNameTime=e.moviesNameTime.reverse(),e.currentPage=1,e.totalPage=e.moviesNameTime.length,e.moviesCopy=e.moviesNameTime.slice(0,9))},function(e){console.log(e)})},components:{movieCard:a("VU/8")(v,p,!1,function(e){a("j3H0")},"data-v-974b323c",null).exports},methods:{pageChange:function(e){var t=this;console.log(e),this.moviesCopy=[],this.moviesNameTime.slice(9*(e-1),9*e).forEach(function(e){t.moviesCopy.push(e)}),console.log(this.moviesCopy)},searchMovie:function(e,t){var a=this;console.log(this.searchMovies),console.log(e);var s=this.moviesNameTime.filter(function(t){var a=new RegExp(e.toLowerCase());if(t.name.toLowerCase().match(a))return t});console.log("========="),console.log(s.length),s.length<=9?(this.moviesCopy=[],s.forEach(function(e){a.moviesCopy.push(e)})):this.moviesCopy=s.slice(12*(this.currentPage-1),12*this.currentPage)},deleteSerch:function(e,t){var a=this;if(console.log(t),0===this.searchMovies.length)this.moviesCopy=this.moviesNameTime.slice(12*(this.currentPage-1),12*this.currentPage);else{var s=this.searchMovies[t-1].toLowerCase(),o=this.moviesNameTime.filter(function(e){var t=new RegExp(s);if(e.name.toLowerCase().match(t))return e});o.length<=12?(this.moviesCopy=[],o.forEach(function(e){a.moviesCopy.push(e)})):this.moviesCopy=o.slice(12*(this.currentPage-1),12*this.currentPage)}}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"md-layout  md-alignment-center"},[a("md-chips",{staticClass:"md-primary",attrs:{"md-placeholder":"Add Movies..."},on:{"md-insert":e.searchMovie,"md-delete":e.deleteSerch},model:{value:e.searchMovies,callback:function(t){e.searchMovies=t},expression:"searchMovies"}},[a("label",[e._v("Movies")]),e._v(" "),a("div",{staticClass:"md-helper-text"},[e._v("Add movie name to search")])]),e._v(" "),e._l(e.moviesCopy,function(e){return a("movieCard",{key:e.id,staticClass:"md-layout-item md-large-size-25  md-medium-size-25 md-small-size-100 md-xsmall-size-100",attrs:{message:e}})})],2),e._v(" "),a("br"),e._v(" "),a("md-card",{staticClass:"page"},[a("Page",{staticStyle:{float:"right"},attrs:{current:e.currentPage,total:e.totalPage,simple:""},on:{"on-change":e.pageChange}})],1)],1)},staticRenderFns:[]};var f=a("VU/8")(h,g,!1,function(e){a("nrPp")},"data-v-16283e24",null).exports;s.default.use(m.a);var _=new m.a({routes:[{path:"/",name:"mainPage",component:f}]}),b=a("Lgyv"),y=a.n(b),C=(a("4+hh"),a("W92t"),a("4Kbd")),w=a.n(C);s.default.use(i.a);var M={getMovieMutation:function(e,t){console.log(JSON.parse(t).entries),e.movies=JSON.parse(t).entries}},k={getMovies:function(e){var t=e.commit;w.a.then(function(e){console.log(JSON.parse(e)),t("getMovieMutation",e)})}},x=new i.a.Store({state:{movies:[]},mutations:M,actions:k}),P=(a("+skl"),a("BTaQ")),N=a.n(P);s.default.use(y.a),s.default.config.productionTip=!1,s.default.use(N.a),new s.default({el:"#app",router:_,store:x,components:{App:r},template:"<App/>"})},W92t:function(e,t){},j3H0:function(e,t){},nrPp:function(e,t){},xLOA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.81fb717e6fb075d617d8.js.map