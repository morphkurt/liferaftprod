(function(t){function e(e){for(var n,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5463d3c"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"15029888"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],h.parentNode.removeChild(h),a(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(h);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("92c6");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item",on:{click:function(e){return t.$router.push({path:"/assets"})}}},[t._v(" Telstra Box Office ")])]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])]),a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[t.authenticated?a("div",[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.logOut()}}},[a("strong",[t._v("Log Out")])])]):a("div",[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.$router.push("login")}}},[a("strong",[t._v("Log in")])])])])])])])]),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://liferaft.dataviz.life"}},[n("img",{attrs:{src:a("cf05")}})]),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])])}],i=(a("ac1f"),a("5319"),{name:"App",data:function(){return{authenticated:!1,basicAuth:"dHR2cGx1c19hbmRyb2lkOm1lQkZMTXNkS0dWZWo3Q3E=",raaAuth:"TEhPS2czNmF2NEhvMHc5ZmRJbVVHNXI0V0cxYlJWQXY6NWI1b0s1WEtMYTVBVFRPSA==",clPlayerLicense:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cmxzIjpbImh0dHBzOi8vbGlmZXJhZnQuZGF0YXZpei5saWZlIl0sInR5cGUiOiJXZWIiLCJraWQiOjI2MzYsImlsdiI6ZmFsc2V9.MuMtZdb8fIgrE4BYcevZAY-afzRrtoOq13LiENgXA_uauL52UfAvGOpiop6kp7LE7ypKXWoAPtkBmjbgbBurH2qd8xYR-3QL75BfBtGM5RDywMdivyu5gphV_i7a05XqzSuMTTsxXZx-VZsQgbQWnKdFDRW8JhJh4pO4kF6g-ojetbKCxAVUOuctYTV2SO7ESBy63aWJIh04DAuTs5w1Dyx3ziEexYosiMuXi0jd_UatCG4OSGilLjdrQl20S7GzMYsC5wIlFsYxhx72pQa6Is0GSKSIG4TmIhI52KfBEFhXXhTzgYK8a4NDoNsmaHHjdO7aeRpF2hMgPgzuNk8A7w",authData:{}}},mounted:function(){localStorage.authData?(this.authData=JSON.parse(localStorage.getItem("authData")),this.authenticated=!0):this.$router.replace({name:"Login"})},computed:{keyword:{get:function(){return this.$store.state.keyword},set:function(t){this.$store.commit("updateKeyword",t)}}},methods:{setAuthenticated:function(t){this.authenticated=t},logOut:function(){this.authenticated=!1,localStorage.setItem("authData",""),this.$router.replace({name:"Login"})}}}),s=i,u=(a("034f"),a("2877")),c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,d=(a("d3b7"),a("8c4f"));n["a"].use(d["a"]);var h=[{path:"/login",name:"Login",meta:{requiresAuth:!1},component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/watch/:embedCode",name:"Watch",props:!0,meta:{requiresAuth:!0},component:function(){return a.e("about").then(a.bind(null,"4eb8"))}},{path:"/assets",name:"Assets",component:function(){return a.e("about").then(a.bind(null,"4d60"))},children:[{path:":assetId",component:function(){return a.e("about").then(a.bind(null,"a965"))},props:!0,meta:{showModal:!0,requiresAuth:!0}}]}],p=new d["a"]({mode:"history",base:"/",routes:h}),f=p,m=a("2f62"),v=(a("4de4"),a("c975"),a("498a"),a("96cf"),a("1da1")),g={wishlist:{},keyword:"",movieRentals:[],moviePurchases:[]},b={getKeyword:function(t){return t.keyword},getMoviePurchases:function(t){return S(t.moviePurchases,t.keyword)},getMovieRentals:function(t){return S(t.movieRentals,t.keyword)},getWishList:function(t){return t.wishlist}},y={fetchWishList:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=e.authData,a.next=4,new Promise((function(t,e){var a=new Headers;a.append("Authorization","Bearer ".concat(r.access_token)),a.append("Content-Type","application/json");var n={method:"GET",headers:a,redirect:"follow"};fetch("https://hfozhlnmfh.execute-api.ap-southeast-2.amazonaws.com/v1/ttvbo/users/".concat(r.uuid,"/wishlist/assets?deviceType=telstratv"),n).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return e(t)}))}));case 4:o=a.sent,n("setWishList",o);case 6:case"end":return a.stop()}}),a)})))()},fetchMovieRentals:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=e.authData,o=[],i=[],localStorage.movieRentals&&(o=JSON.parse(localStorage.movieRentals),n("setMovieRentals",o)),localStorage.moviePurchases&&(i=JSON.parse(localStorage.moviePurchases),n("setMoviePurchases",i)),a.next=8,new Promise((function(t,e){var a=new Headers;a.append("Authorization","Bearer ".concat(r.access_token)),a.append("Content-Type","application/json");var n={method:"GET",headers:a,redirect:"follow"};fetch("https://hfozhlnmfh.execute-api.ap-southeast-2.amazonaws.com/v1/ttvbo/users/".concat(r.uuid,"/library?attributes=id,images,displayTitle,type,availability,videos"),n).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return e(t)}))}));case 8:s=a.sent,o=s.movies.rentals,localStorage.movieRentals=JSON.stringify(o),i=s.movies.purchases,localStorage.moviePurchases=JSON.stringify(i),n("setMovieRentals",o),n("setMoviePurchases",i);case 15:case"end":return a.stop()}}),a)})))()}},w={setWishList:function(t,e){return t.wishlist=e},setMovieRentals:function(t,e){return t.movieRentals=e},setMoviePurchases:function(t,e){return t.moviePurchases=e},updateKeyword:function(t,e){return t.keyword=e}},O={state:g,getters:b,actions:y,mutations:w},S=function(t,e){var a=e.trim().toLowerCase();return a.length?t.filter((function(t){return t.displayTitle.toLowerCase().indexOf(a)>-1})):t};n["a"].use(m["a"]);var k=new m["a"].Store({modules:{wishlist:O}});n["a"].config.productionTip=!1,new n["a"]({store:k,router:f,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.49b0eef3.png"}});
//# sourceMappingURL=app.802459e0.js.map