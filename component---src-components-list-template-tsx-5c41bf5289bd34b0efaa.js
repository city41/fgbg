(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return d});t(23),t(28),t(24),t(12),t(45),t(121),t(85);var n=t(0),r=t.n(n),c=t(217),l=t(204),u=t(208),s=t(201),i=t(209),o=t(186),m=t.n(o);function f(e,a){return e.find(function(e){return e.publicURL.indexOf(Object(l.b)(a))>-1})}var d="227010355";a.default=function(e){var a=e.data,t=e.pageContext,n=(t.listType,t.listTypeValue),l=t.thumbnails,o=a.levels.edges.map(function(e){return e.node}),d=Object(c.groupBy)(o,"gameNameUsa");return r.a.createElement(s.a,{logoClassName:m.a.layoutLogo},r.a.createElement("div",{className:m.a.root},r.a.createElement("h1",null,n," ",r.a.createElement("span",{className:m.a.levelCount},o.length," backgrounds")),r.a.createElement("noscript",null,r.a.createElement("div",{className:m.a.noscriptWarning},"this page loads faster with JavaScript enabled")),r.a.createElement("ul",null,Object.keys(d).sort(i.a).map(function(e){return r.a.createElement("li",null,e!==n&&r.a.createElement("h2",{className:m.a.gameHeader},e),r.a.createElement("ul",null,d[e].sort(i.b).map(function(e){return r.a.createElement("li",null,r.a.createElement(u.a,Object.assign({className:m.a.listEntry},e,{thumbnailData:f(l,e.imageFileName)})))})))}))))}},195:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(202),r=t.n(n);function c(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},197:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(58),l=t.n(c);t.d(a,"a",function(){return l.a});t(198),r.a.createContext({})},198:function(e,a,t){var n;e.exports=(n=t(200))&&n.default||n},199:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(195);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(n.a).join("/")}},200:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),c=t(84);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},201:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),r=t.n(n),c=t(196),l=t.n(c),u=t(197),s=t(176),i=t.n(s),o=function(e){var a=e.logoClassName,t=e.children,n=l()(i.a.logo,a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{to:"/"},r.a.createElement("div",{className:n})),t)}},203:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t(0),r=t.n(n),c=t(196),l=t.n(c),u=t(197),s=t(199),i=t(177),o=t.n(i),m=function(e){var a=e.className,t=e.levelName,n=e.gameNameUsa,c=e.newPage,i=e.children,m=l()(o.a.root,a),f=Object(s.a)({gameNameUsa:n,levelName:t});return i=i||n+" - "+t,c?r.a.createElement("a",{className:m,href:f,target:"_blank"},i):r.a.createElement(u.a,{className:m,to:f},i)}},204:function(e,a,t){"use strict";t(199);var n=t(195);function r(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/system:"+Object(n.a)(e)}function l(e){return e?"/year:"+e:"/year:missing"}function u(e){return"/series:"+Object(n.a)(e)}function s(e){return"/game:"+Object(n.a)(e)}t(33);function i(e){return e.split(".")[0]}t.d(a,"a",function(){return r}),t.d(a,"e",function(){return c}),t.d(a,"f",function(){return l}),t.d(a,"d",function(){return u}),t.d(a,"c",function(){return s}),t.d(a,"b",function(){return i})},208:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t(0),r=t.n(n),c=t(196),l=t.n(c),u=t(221),s=t.n(u),i=t(203),o=t(180),m=t.n(o),f=function(e){var a=e.className,t=e.thumbnailData,n=e.levelName,c=e.gameNameUsa,u=(e.developer,e.system,e.children),o=t.height/t.width,f=l()(m.a.root,a);return r.a.createElement(i.a,{className:m.a.backgroundLink,levelName:n,gameNameUsa:c},r.a.createElement("div",{className:f},r.a.createElement("div",{className:m.a.imageContainer,style:{paddingBottom:200*o}},r.a.createElement("img",{className:m.a.lowRes,src:t.dataUrl,alt:n+" from "+c}),r.a.createElement("noscript",null,r.a.createElement("img",{className:m.a.highRes,src:t.publicURL,alt:n+" from "+c})),r.a.createElement(s.a,{className:m.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:m.a.highRes,src:t.publicURL,alt:n+" from "+c})))),r.a.createElement("div",{className:m.a.levelName},u||n)))}},209:function(e,a,t){"use strict";t.d(a,"b",function(){return n}),t.d(a,"a",function(){return c});t(14);function n(e,a){return e.levelName.localeCompare(a.levelName)}var r=/the /i;function c(e,a){var t=e.replace(r,""),n=a.replace(r,"");return t.localeCompare(n)}}}]);
//# sourceMappingURL=component---src-components-list-template-tsx-5c41bf5289bd34b0efaa.js.map