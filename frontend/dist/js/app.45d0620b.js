(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d237c95":"f82cfb8c","chunk-3dc5d120":"c248a41e","chunk-617af86a":"9423a970"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-617af86a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d237c95":"31d6cfe0","chunk-3dc5d120":"31d6cfe0","chunk-617af86a":"a1116594"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],h.parentNode.removeChild(h),n(i)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("div",{staticClass:"mostrar"},[n("ul",{staticClass:"nav justify-content-center bg-dark"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("COVID-19")])],1)])]),n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary no-mostrar-mobile"},[n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("router-link",{staticClass:"navbar-brand text-white",attrs:{to:"/"}},[t._v("COVID-19")]),n("ul",{staticClass:"navbar-nav ml-auto  row justify-content-between"},[n("div",{on:{click:t.classhome}},[n("router-link",{staticClass:"nav-link ",class:{"text-white":t.home,"text-dark":!t.home},attrs:{to:"/"}},[t._v("Inicio")])],1),n("div",{on:{click:t.classnotificaciones}},[n("router-link",{staticClass:"nav-link ",class:{"text-white":t.notificacion,"text-dark":!t.notificacion},attrs:{to:"/notificaciones"}},[n("i",{staticClass:"material-icons ",class:{"text-white":t.notificacion,"text-dark":!t.notificacion},on:{click:t.classnotificaciones}},[t._v("notifications")])])],1),n("div",{on:{click:t.classSearch}},[n("router-link",{staticClass:"nav-link ",class:{"text-white":t.search,"text-dark":!t.search},attrs:{to:"/buscar"}},[t._v("Buscar Personas")])],1),n("div",{on:{click:t.classperson}},[n("router-link",{staticClass:"nav-link ",class:{"text-white":t.person,"text-dark":!t.person},attrs:{to:"/login"}},[t._v("Usuario")])],1)])],1)]),n("div",{staticClass:"footer mt-auto py-2 fixed-bottom mostrar bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col mr-1 ml-3 ",class:{"bg-primary menu-borde":t.home},on:{click:t.classhome}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons md-28",class:{"text-white":t.home,"text-dark":!t.home}},[t._v("home")])])],1),n("div",{staticClass:"col mr-2",class:{"bg-primary menu-borde":t.search},on:{click:t.classSearch}},[n("router-link",{attrs:{to:"/buscar"}},[n("i",{staticClass:"material-icons md-28",class:{"text-white":t.search,"text-dark":!t.search}},[t._v("search")])])],1),n("div",{staticClass:"col mr-2 ",class:{"bg-primary menu-borde":t.person},on:{click:t.classperson}},[n("router-link",{attrs:{to:{name:"Login"}}},[n("i",{staticClass:"material-icons  md-28",class:{"text-white":t.person,"text-dark":!t.person}},[t._v("person")])])],1),n("div",{staticClass:"col ml-2",class:{"bg-primary menu-borde":t.notificacion},on:{click:t.classnotificaciones}},[n("router-link",{attrs:{to:"/notificaciones"}},[n("i",{staticClass:"material-icons  md-28",class:{"text-white":t.notificacion,"text-dark":!t.notificacion}},[t._v("notifications")])])],1)])])]),n("router-view")],1)])},s=[],i=(n("ac1f"),n("841c"),{name:"app",data:function(){return{home:!0,search:!1,person:!1,notificacion:!1}},methods:{classhome:function(){this.home=!0,this.search=!1,this.person=!1,this.notificacion=!1},classSearch:function(){this.home=!1,this.search=!0,this.person=!1,this.notificacion=!1},classperson:function(){this.home=!1,this.search=!1,this.person=!0,this.notificacion=!1},classnotificaciones:function(){this.home=!1,this.search=!1,this.person=!1,this.notificacion=!0}}}),o=i,c=n("2877"),l=Object(c["a"])(o,r,s,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("createGrupo")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"container"},[a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"}),a("div",{staticClass:"col-sm"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-center"},[t._v(" Bienvenido ")]),a("div",{staticClass:"card-body"},[a("img",{staticClass:"card-img",attrs:{src:n("85f4"),alt:"...",height:"300",width:"300"}}),a("p",{staticClass:"card-text text-center"},[t._v("Todavia no tienes un grupo creado o un familiar no te ingreso a un grupo")]),a("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"button"}},[t._v(" Crear Grupo ")])])])]),a("div",{staticClass:"col-sm"})])])])])}],v={},b=Object(c["a"])(v,p,m,!1,null,null,null),g=b.exports,k={name:"Home",components:{createGrupo:g}},C=k,y=Object(c["a"])(C,h,f,!1,null,null,null),x=y.exports;a["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:x},{path:"/buscar",name:"Buscar",component:function(){return n.e("chunk-617af86a").then(n.bind(null,"e670"))}},{path:"/notificaciones",name:"Notificaciones",component:function(){return n.e("chunk-2d237c95").then(n.bind(null,"fd34"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-3dc5d120").then(n.bind(null,"a55b"))}}],_=new d["a"]({mode:"history",base:"/",routes:w}),O=_,j=n("2f62");a["a"].use(j["a"]);var E=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:O,store:E,render:function(t){return t(u)}}).$mount("#app")},"85f4":function(t,e,n){t.exports=n.p+"img/grupo.02ddd4c2.svg"}});
//# sourceMappingURL=app.45d0620b.js.map