(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return f});n(23),n(121),n(28),n(24),n(12),n(45);var a=n(0),r=n.n(a),o=n(197),l=n(203),u=n(201),c=n(217),i=n(195);function s(e,t){var n={};return e.forEach(function(e){if(e[t]){var a=n[e[t].id]||0;n[e[t].id]=a+1}}),t+" -- count: "+Object.keys(n).length+"\n "+JSON.stringify(n,null,2)}t.default=function(e){var t=e.data,n=t.allGoogleSheetLeveldataRow.edges.map(function(e){return e.node}),a=Object(c.groupBy)(n,"system");return r.a.createElement(u.a,null,r.a.createElement("pre",null,"FGBG (",t.allGoogleSheetLeveldataRow.totalCount," backgrounds)"),r.a.createElement("pre",null,s(t.allGoogleSheetLeveldataRow.edges,"next")),r.a.createElement("pre",null,s(t.allGoogleSheetLeveldataRow.edges,"previous")),Object.keys(a).sort().map(function(e){var t=Object(c.groupBy)(a[e],"gameNameUsa");return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{to:Object(i.a)(e)},r.a.createElement("h2",null,e)),r.a.createElement("ul",null,Object.keys(t).sort().map(function(e){return r.a.createElement("li",null,r.a.createElement(o.a,{to:Object(i.a)(e)},e),r.a.createElement("ul",null,t[e].map(function(e){return r.a.createElement("li",null,r.a.createElement(l.a,Object.assign({newPage:!0},e),e.levelName))})))})))}))};var f="2458759500"},195:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(202),r=n.n(a);function o(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},196:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var u in a)n.call(a,u)&&a[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(58),l=n.n(o);n.d(t,"a",function(){return l.a});n(198),r.a.createContext({})},198:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},199:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(195);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},201:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(196),l=n.n(o),u=n(197),c=n(176),i=n.n(c),s=function(e){var t=e.logoClassName,n=e.children,a=l()(i.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{to:"/"},r.a.createElement("div",{className:a})),n)}},203:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),r=n.n(a),o=n(196),l=n.n(o),u=n(197),c=n(199),i=n(177),s=n.n(i),f=function(e){var t=e.className,n=e.levelName,a=e.gameNameUsa,o=e.newPage,i=e.children,f=l()(s.a.root,t),m=Object(c.a)({gameNameUsa:a,levelName:n});return i=i||a+" - "+n,o?r.a.createElement("a",{className:f,href:m,target:"_blank"},i):r.a.createElement(u.a,{className:f,to:m},i)}},206:function(e,t,n){var a=n(3),r=n(125),o=n(11).f,l=n(88).f,u=n(89),c=n(62),i=a.RegExp,s=i,f=i.prototype,m=/a/g,g=/a/g,v=new i(m)!==m;if(n(9)&&(!v||n(8)(function(){return g[n(2)("match")]=!1,i(m)!=m||i(g)==g||"/a/i"!=i(m,"i")}))){i=function(e,t){var n=this instanceof i,a=u(e),o=void 0===t;return!n&&a&&e.constructor===i&&o?e:r(v?new s(a&&!o?e.source:e,t):s((a=e instanceof i)?e.source:e,a&&o?c.call(e):t),n?this:f,i)};for(var p=function(e){e in i||o(i,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},d=l(s),E=0;d.length>E;)p(d[E++]);f.constructor=i,i.prototype=f,n(13)(a,"RegExp",i)}n(87)("RegExp")}}]);
//# sourceMappingURL=component---src-pages-debug-tsx-67a35f8294bcdd68f63c.js.map