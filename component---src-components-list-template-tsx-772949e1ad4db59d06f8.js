(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return d});n(23),n(28),n(24),n(12),n(45),n(120),n(85);var a=n(0),r=n.n(a),c=n(214),u=n(206),l=n(209),i=n(199),o=n(210),s=n(184),m=n.n(s);function f(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(u.c)(t))>-1})}var d="227010355";t.default=function(e){var t=e.data,n=e.pageContext,a=(n.listType,n.listTypeValue),u=n.thumbnails,s=t.levels.edges.map(function(e){return e.node}),d=Object(c.groupBy)(s,"gameNameUsa");return r.a.createElement(i.a,null,r.a.createElement("div",{className:m.a.root},r.a.createElement("h1",null,a),r.a.createElement("ul",null,Object.keys(d).sort(o.a).map(function(e){return r.a.createElement("li",null,r.a.createElement("h2",{className:m.a.gameHeader},e),r.a.createElement("ul",null,d[e].sort(o.b).map(function(e){return r.a.createElement("li",null,r.a.createElement(l.a,Object.assign({className:m.a.listEntry},e,{thumbnailData:f(u,e.imageFileName)})))})))}))))}},193:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(200),r=n.n(a);function c(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(58),u=n.n(c);n.d(t,"a",function(){return u.a});n(195),r.a.createContext({})},195:function(e,t,n){var a;e.exports=(a=n(198))&&a.default||a},197:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(a.a).join("/")}},198:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),c=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null}},199:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),c=n(194),u=n(175),l=n.n(u),i=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("div",{className:l.a.logo})),t)}},201:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/system:"+Object(a.a)(e)}},202:function(e,t,n){"use strict";function a(e){return e?"/year:"+e:"/year:missing"}n.d(t,"a",function(){return a})},203:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/game:"+Object(a.a)(e)}},204:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(193);function r(e){return"/developer:"+Object(a.a)(e)}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),c=n(196),u=n.n(c),l=n(194),i=n(197),o=n(176),s=n.n(o),m=function(e){var t=e.className,n=e.levelName,a=e.gameNameUsa,c=e.newPage,o=e.children,m=u()(s.a.root,t),f=Object(i.a)({gameNameUsa:a,levelName:n});return o=o||a+" - "+n,c?r.a.createElement("a",{className:m,href:f,target:"_blank"},o):r.a.createElement(l.a,{className:m,to:f},o)}},206:function(e,t,n){"use strict";var a=n(197),r=n(204),c=n(201),u=n(202),l=n(193);function i(e){return"/series:"+Object(l.a)(e)}n(203),n(33);function o(e){return e.split(".")[0]}n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return r.a}),n.d(t,"e",function(){return c.a}),n.d(t,"f",function(){return u.a}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return o})},209:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),r=n.n(a),c=n(196),u=n.n(c),l=n(218),i=n.n(l),o=n(205),s=n(177),m=n.n(s),f=function(e){var t=e.className,n=e.thumbnailData,a=e.levelName,c=e.gameNameUsa,l=(e.developer,e.system,n.height/n.width),s=u()(m.a.root,t);return r.a.createElement(o.a,{levelName:a,gameNameUsa:c},r.a.createElement("div",{className:s},r.a.createElement("div",{className:m.a.imageContainer,style:{paddingBottom:200*l}},r.a.createElement("img",{className:m.a.lowRes,src:n.dataUrl,alt:a+" from "+c}),r.a.createElement(i.a,{className:m.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:m.a.highRes,src:n.publicURL,alt:a+" from "+c})))),r.a.createElement("div",{className:m.a.levelName},a)))}},210:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});n(14);function a(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function c(e,t){var n=e.replace(r,""),a=t.replace(r,"");return n.localeCompare(a)}}}]);
//# sourceMappingURL=component---src-components-list-template-tsx-772949e1ad4db59d06f8.js.map