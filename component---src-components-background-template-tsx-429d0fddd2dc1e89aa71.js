(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(205),c=a(237),u=a(22),m=a(194),i=a(191),s=a(236),o=a(199),d=a.n(o),v=a(196),E=a(176),f=a.n(E),g=function(e){var t=e.className,a=(e.prevLevel,e.nextLevel),n=d()(f.a.root,t);return r.a.createElement("header",{className:n},r.a.createElement("div",{className:f.a.nextLevelContainer},r.a.createElement(i.a,{to:Object(v.a)(a)},"next up, ",r.a.createElement("span",{className:f.a.levelName},a.levelName)," from"," ",a.gameNameUsa," ",r.a.createElement(s.a,null))))},b=a(201),N=a(202),h=a(203),j=a(204),p=a(177),O=a.n(p),w=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,l=e.developer,c=e.system,u=e.year,m=d()(O.a.root,t);return r.a.createElement("table",{className:m},r.a.createElement("tbody",null,r.a.createElement("tr",{className:O.a.levelNameRow},r.a.createElement("td",{colSpan:2},a)),r.a.createElement("tr",null,r.a.createElement("td",null,"game"),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(h.a)(n)},n))),r.a.createElement("tr",null,r.a.createElement("td",null,"developer"),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(j.a)(l)},l))),r.a.createElement("tr",null,r.a.createElement("td",null,"system"),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(b.a)(c)},c))),r.a.createElement("tr",null,r.a.createElement("td",null,"released"),r.a.createElement("td",null,r.a.createElement(i.a,{to:Object(N.a)(u)},u||"?")))))},y=a(178),L=a.n(y),x=function(e){var t=e.className,a=e.width,l=e.height,c=e.src,u=e.alt,m=d()(L.a.root,t),i=Object(n.useState)(null),s=i[0],o=i[1],v=Object(n.useState)(!0),E=v[0],f=v[1],g=Object(n.useState)(!1),b=g[0],N=g[1];return Object(n.useEffect)(function(){var e=parseInt(a),t=parseInt(l)/e,n=window.innerWidth,r=n<401?Math.floor(.96*n):Math.floor(.75*n),c=Math.floor(r*t);o({width:r,height:c})}),s?r.a.createElement("div",{className:m,style:s},b?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:L.a.errorContainer},"an error occurred, try reloading the page"),r.a.createElement("img",null)):E?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:L.a.loadingContainer},"loading…"),r.a.createElement("img",{width:"1",height:"1",src:c,onLoad:function(){return f(!1)},onError:function(){return N(!0)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement("img",Object.assign({},s,{src:c,alt:u})))):null},I=a(179),C=a.n(I);a.d(t,"query",function(){return F});var F="1508642787";t.default=function(e){var t=e.data,a=t.currentLevel,n=t.prevLevel,i=t.nextLevel;Object(c.a)("left",function(){return Object(u.navigate)(Object(v.a)(n))}),Object(c.a)("right",function(){return Object(u.navigate)(Object(v.a)(i))});var s=t.mainImg.publicURL,o=t.bgImg.childImageSharp.resize.src,d=a.levelName+" from "+a.gameNameUsa;return r.a.createElement(m.a,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,d," - FGBG")),r.a.createElement("div",{className:C.a.blur,style:{backgroundImage:"url("+o+")"}}),r.a.createElement("div",{className:C.a.root},r.a.createElement("div",{className:C.a.imageContainer},r.a.createElement(x,{className:C.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:s,alt:d}),r.a.createElement("div",{className:C.a.metaDataContainer},r.a.createElement(w,Object.assign({className:C.a.metaData},a))))),r.a.createElement(g,{className:C.a.header,prevLevel:n,nextLevel:i}))}},191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(192),r.a.createContext({})},192:function(e,t,a){var n;e.exports=(n=a(195))&&n.default||n},193:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(197),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},194:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),l=a(191),c=a(175),u=a.n(c),m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:u.a.logo})),t)}},195:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},196:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(n.a).join("/")}},201:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/system:"+Object(n.a)(e)}},202:function(e,t,a){"use strict";function n(e){return e?"/year:"+e:"/year:missing"}a.d(t,"a",function(){return n})},203:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/game:"+Object(n.a)(e)}},204:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(193);function r(e){return"/developer:"+Object(n.a)(e)}}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-429d0fddd2dc1e89aa71.js.map