(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});a(28),a(24),a(12),a(45),a(120),a(23),a(214),a(85);var n=a(0),r=a.n(n),i=a(211),c=a(226),l=a(213),o=a(220),s=a(215),u=a(219),m=a(180),d=a.n(m);function g(e,t){return e.find(function(e){return e.publicURL.indexOf(Object(l.c)(t)+"_thumb")>-1})}var f="2881070315";t.default=function(e){var t=e.children,a=e.dontGroup,n=e.data,l=e.pageContext,m=l.listTypeValue,f=l.thumbnails,p=l.description,v=n.levels.edges.map(function(e){return e.node}),N=n.twitterImg&&n.twitterImg.edges[0].node.childImageSharp.fixed.src,E=Object(c.groupBy)(v,"gameNameUsa"),h=a?r.a.createElement("ul",null,v.map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(o.a,Object.assign({linkClassName:d.a.listEntryLink,className:d.a.listEntry},e,{thumbnailData:g(f,e.imageFileName)})))})):r.a.createElement("ul",null,Object.keys(E).sort(u.a).map(function(e){return r.a.createElement("li",{key:e},e!==m&&r.a.createElement("h2",{className:d.a.gameHeader},e),r.a.createElement("ul",null,E[e].sort(u.b).map(function(e){return r.a.createElement("li",{key:e.levelName},r.a.createElement(o.a,Object.assign({linkClassName:d.a.listEntryLink,className:d.a.listEntry},e,{thumbnailData:g(f,e.imageFileName)})))})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:m+" backgrounds - FGBG",description:"fighting game backgrounds website",imageUrl:N}),r.a.createElement(s.a,{logoClassName:d.a.layoutLogo},r.a.createElement("div",{className:d.a.root},r.a.createElement("h1",null,m," ",r.a.createElement("span",{className:d.a.levelCount},t||r.a.createElement("span",null,v.length," background",1!==v.length&&"s"))),p&&r.a.createElement("p",null,p),r.a.createElement("noscript",null,r.a.createElement("div",{className:d.a.noscriptWarning},"this page loads faster with JavaScript enabled")),h)))}},205:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(217),r=a.n(n);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(58),c=a.n(i);a.d(t,"a",function(){return c.a});a(208),r.a.createContext({})},208:function(e,t,a){var n;e.exports=(n=a(210))&&n.default||n},209:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(205);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},210:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},211:function(e,t,a){"use strict";var n=a(212),r=a(0),i=a.n(r),c=a(216),l=a.n(c);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,o=e.meta,s=void 0===o?[]:o,u=e.title,m=e.imageUrl,d=n.data.site,g=a||d.siteMetadata.description,f=[{name:"description",content:g},{property:"og:title",content:u},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:m?"summary_large_image":"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:g},{name:"twitter:site",content:"@mattegreer"}].concat(s);if(m){var p="https://www.fgbg.art"+m;f.push({name:"twitter:image",content:p},{property:"og:image",content:p})}return i.a.createElement(l.a,{htmlAttributes:{lang:c},title:u,titleTemplate:"%s | "+d.siteMetadata.title,meta:f})}},212:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}},213:function(e,t,a){"use strict";var n=a(205),r=a(209);function i(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/other:"+Object(n.a)(e)}function l(e){return"/system:"+Object(n.a)(e)}function o(e){return e?"/year:"+e:"/year:missing"}function s(e){return"/series:"+Object(n.a)(e)}function u(e){return"/game:"+Object(n.a)(e)}a(33);function m(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"g",function(){return l}),a.d(t,"h",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return u}),a.d(t,"c",function(){return m})},215:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(0),r=a.n(n),i=a(206),c=a.n(i),l=a(207),o=a(175),s=a.n(o),u=function(e){var t=e.logoClassName,a=e.children,n=c()(s.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),i=a(206),c=a.n(i),l=a(222),o=a.n(l),s=a(177),u=a.n(s),m=function(e){var t=e.className,a=e.width,n=void 0===a?200:a,i=e.thumbnailData,l=e.alt,s=i.height/i.width,m=c()(u.a.root,t);return r.a.createElement("div",{className:m,style:{width:n,paddingBottom:n*s}},r.a.createElement("img",{className:u.a.lowRes,src:i.dataUrl,alt:l}),r.a.createElement("noscript",null,r.a.createElement("img",{className:u.a.highRes,src:i.publicURL,alt:l})),r.a.createElement(o.a,{className:u.a.lazyImg,offsetBottom:400},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:u.a.highRes,src:i.publicURL,alt:l}))))}},219:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});a(14);function n(e,t){return e.levelName.localeCompare(t.levelName)}var r=/the /i;function i(e,t){var a=e.replace(r,""),n=t.replace(r,"");return a.localeCompare(n)}},220:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(206),c=a.n(i),l=a(218),o=a(207),s=a(209),u=a(178),m=a.n(u),d=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,i=e.newPage,l=e.children,u=c()(m.a.root,t),d=Object(s.a)({gameNameUsa:n,levelName:a});return l=l||n+" - "+a,i?r.a.createElement("a",{className:u,href:d,target:"_blank"},l):r.a.createElement(o.a,{className:u,to:d},l)},g=a(179),f=a.n(g);a.d(t,"a",function(){return p});var p=function(e){var t=e.className,a=e.linkClassName,n=e.thumbnailData,i=e.levelName,o=e.gameNameUsa,s=e.children,u=c()(f.a.root,t),m=c()(f.a.backgroundLink,a);return r.a.createElement(d,{className:m,levelName:i,gameNameUsa:o},r.a.createElement("div",{className:u},r.a.createElement(l.a,{thumbnailData:n,alt:i+" from "+o}),r.a.createElement("div",{className:f.a.levelName},s||i)))}}}]);
//# sourceMappingURL=component---src-components-list-template-tsx-1c8d638b9443921445d1.js.map