(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});n(28),n(24),n(12),n(45);var a=n(0),r=n.n(a),c=n(185),o=n(189),i=n(193),l=n(196),u=n(187);t.default=function(e){var t=e.data.allGoogleSheetLeveldataRow.edges.map(function(e){return e.node}),n=Object(l.groupBy)(t,"system");return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:"Fighting Game Backgrounds"}),r.a.createElement("pre",null,"FGBG"),Object.keys(n).map(function(e){var t=Object(l.groupBy)(n[e],"gameNameUsa");return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{to:Object(u.a)(e)},r.a.createElement("h2",null,e)),r.a.createElement("ul",null,Object.keys(t).map(function(e){return r.a.createElement("li",null,r.a.createElement(c.a,{to:Object(u.a)(e)},e),r.a.createElement("ul",null,t[e].map(function(e){return r.a.createElement("li",null,r.a.createElement(o.a,e,e.levelName))})))})))}))};var s="1380127867"},184:function(e,t,n){var a;e.exports=(a=n(186))&&a.default||a},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(58),o=n.n(c);n.d(t,"a",function(){return o.a});n(184),r.a.createContext({})},186:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),c=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null}},187:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(188),r=n.n(a);function c(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},189:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(185),o=n(187);n.d(t,"a",function(){return i});var i=function(e){var t=e.levelName,n=e.gameNameUsa,a=e.children,i=function(e){return"/"+[e.gameNameUsa,e.levelName].map(o.a).join("/")}({gameNameUsa:n,levelName:t});return a=a||n+" - "+t,r.a.createElement(c.a,{to:i},a)}},193:function(e,t,n){"use strict";var a=n(194),r=n(0),c=n.n(r),o=n(200),i=n.n(o);t.a=function(e){var t=e.description,n=void 0===t?"":t,r=e.lang,o=void 0===r?"en":r,l=e.meta,u=void 0===l?[]:l,s=e.title,m=a.data.site,d=n||m.siteMetadata.description;return c.a.createElement(i.a,{htmlAttributes:{lang:o},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(u)})}},194:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a846ae2f025801a7802d.js.map