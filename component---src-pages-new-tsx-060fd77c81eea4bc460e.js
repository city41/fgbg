(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});a(28),a(24),a(12),a(45),a(121),a(23),a(85);var n=a(0),r=a.n(n),l=a(213),c=a(222),i=a(209),u=a(217),o=a(210),s=a(216),m=a(180),f=a.n(m);function d(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(i.c)(t)+"_thumb")>-1})}var g="2522143202";t.default=function(e){var t=e.children,a=e.dontGroup,n=e.data,i=e.pageContext,m=i.listTypeValue,g=i.thumbnails,v=n.levels.edges.map(function(e){return e.node}),p=Object(c.groupBy)(v,"gameNameUsa"),h=a?r.a.createElement("ul",null,v.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(p).sort(s.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:f.a.gameHeader},e),r.a.createElement("ul",null,p[e].sort(s.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(u.a,Object.assign({linkClassName:f.a.listEntryLink,className:f.a.listEntry},e,{thumbnailData:d(g,e.imageFileName)})))})))}));return r.a.createElement(o.a,{logoClassName:f.a.layoutLogo},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,m," - FGBG")),r.a.createElement("div",{className:f.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:f.a.levelCount},t||r.a.createElement("span",null,v.length," background",1!==v.length&&"s"))),r.a.createElement("noscript",null,r.a.createElement("div",{className:f.a.noscriptWarning},"this page loads faster with JavaScript enabled")),h))}},199:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(211),a(23);var n=a(0),r=a.n(n),l=a(209),c=a(225),i=a(177);t.default=function(e){var t=e.data,a=t.newLevelData.edges.map(function(e){return e.node}),n=t.thumbnails.edges.map(function(e){return e.node}).map(function(e){return Object.assign({},e,{width:e.childImageSharp.original.width,height:e.childImageSharp.original.height,dataUrl:e.childImageSharp.fixed.base64})}),u=Object(c.a)(a),o=u.map(function(e){return{node:e}}),s={listTypeValue:"new backgrounds",thumbnails:n.filter(function(e){return u.some(function(t){return e.relativePath&&e.relativePath.indexOf(Object(l.c)(t.imageFileName))>-1})})},m={levels:{edges:o}};return r.a.createElement(i.default,{data:m,pageContext:s})};var u="3576408606"},203:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(218),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(206),r.a.createContext({})},206:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},207:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(203);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";var n=a(203),r=a(207);function l(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/system:"+Object(n.a)(e)}function i(e){return e?"/year:"+e:"/year:missing"}function u(e){return"/series:"+Object(n.a)(e)}function o(e){return"/game:"+Object(n.a)(e)}a(33);function s(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return l}),a.d(t,"f",function(){return c}),a.d(t,"g",function(){return i}),a.d(t,"e",function(){return u}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return s})},210:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),l=a(205),c=a.n(l),i=a(204),u=a(176),o=a.n(u),s=function(e){var t=e.logoClassName,a=e.children,n=c()(o.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},211:function(e,t,a){"use strict";a(212)("fixed",function(e){return function(){return e(this,"tt","","")}})},212:function(e,t,a){var n=a(6),r=a(8),l=a(34),c=/"/g,i=function(e,t,a,n){var r=String(l(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},216:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return l});a(14);function n(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function l(e,t){var a=e.replace(r,""),n=t.replace(r,"");return a.localeCompare(n)}},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(205),c=a.n(l),i=a(219),u=a.n(i),o=a(204),s=a(207),m=a(178),f=a.n(m),d=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,l=e.newPage,i=e.children,u=c()(f.a.root,t),m=Object(s.a)({gameNameUsa:n,levelName:a});return i=i||n+" - "+a,l?r.a.createElement("a",{className:u,href:m,target:"_blank"},i):r.a.createElement(o.a,{className:u,to:m},i)},g=a(179),v=a.n(g);a.d(t,"a",function(){return p});var p=function(e){var t=e.className,a=e.linkClassName,n=e.thumbnailData,l=e.levelName,i=e.gameNameUsa,o=e.children,s=n.height/n.width,m=c()(v.a.root,t),f=c()(v.a.backgroundLink,a);return r.a.createElement(d,{className:f,levelName:l,gameNameUsa:i},r.a.createElement("div",{className:m},r.a.createElement("div",{className:v.a.imageContainer,style:{paddingBottom:200*s}},r.a.createElement("img",{className:v.a.lowRes,src:n.dataUrl,alt:l+" from "+i}),r.a.createElement("noscript",null,r.a.createElement("img",{className:v.a.highRes,src:n.publicURL,alt:l+" from "+i})),r.a.createElement(u.a,{className:v.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:v.a.highRes,src:n.publicURL,alt:l+" from "+i})))),r.a.createElement("div",{className:v.a.levelName},o||l)))}},225:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(62),a(125),a(59),a(12),a(46),a(36),a(28);var n=a(0);function r(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){var t=Object(n.useState)(!1),a=t[0],l=t[1];if(Object(n.useEffect)(function(){l(!0)},[]),!a)return[];var c=Math.max.apply(Math,r(e.map(function(e){return e.levelId||0}))),i=!isNaN(sessionStorage.lastMaxLevelId)&&sessionStorage.lastMaxLevelId||localStorage.lastMaxLevelId||c;return localStorage.lastMaxLevelId=c,isNaN(sessionStorage.lastMaxLevelId)&&(sessionStorage.lastMaxLevelId=i),i?e.filter(function(e){return e.levelId&&e.levelId>i}):[]}}}]);
//# sourceMappingURL=component---src-pages-new-tsx-060fd77c81eea4bc460e.js.map