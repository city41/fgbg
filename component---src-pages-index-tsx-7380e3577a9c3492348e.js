(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});a(28),a(23),a(12),a(45);var n=a(0),r=a.n(n),i=a(180),o=a(183),c=a(189),l=a(187),u=a(190),s=a(182);t.default=function(e){var t=e.data.allGoogleSheetLeveldataRow.edges.map(function(e){return e.node}),a=Object(u.groupBy)(t,"system");return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Fighting Game Backgrounds"}),Object.keys(a).map(function(e){return r.a.createElement(i.a,{to:Object(s.a)(e)},r.a.createElement("h2",null,e),r.a.createElement("ul",null,a[e].map(function(e){return r.a.createElement("li",null,r.a.createElement(o.a,e))})))}))};var m="1380127867"},179:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(58),o=a.n(i);a.d(t,"a",function(){return o.a});a(179),r.a.createContext({})},181:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},182:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(184),r=a.n(n);function i(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(180),o=a(182);a.d(t,"a",function(){return c});var c=function(e){var t=e.levelName,a=e.gameNameUsa,n=e.children,c=function(e){return[e.gameNameUsa,e.levelName].map(o.a).join("/")}({gameNameUsa:a,levelName:t});return n=n||a+" - "+t,r.a.createElement(i.a,{to:c},n)}},186:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG"}}}}},187:function(e,t,a){"use strict";var n=a(188),r=a(0),i=a.n(r),o=a(195),c=a.n(o);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,o=void 0===r?"en":r,l=e.meta,u=void 0===l?[]:l,s=e.title,m=n.data.site,d=a||m.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:o},title:s,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(u)})}},188:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}},189:function(e,t,a){"use strict";var n=a(186),r=a(0),i=a.n(r),o=a(180),c=function(e){var t=e.siteTitle,a=void 0===t?"":t;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},a))))};a(194),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7380e3577a9c3492348e.js.map