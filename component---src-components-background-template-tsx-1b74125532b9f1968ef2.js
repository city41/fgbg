(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,a){"use strict";a.r(t);a(23),a(215);var n=a(0),r=a.n(n),l=a(208),c=a(212),i=a(224),m=a(217),s=a(272),o=a(22),u=a(216),d=a(207),v=a.n(d),g=a(210),p=a(184),f=a.n(p),E=function(e){var t=e.className,a=e.nextLevel,n=v()(f.a.root,t);return r.a.createElement("header",{className:n},r.a.createElement("div",{className:f.a.nextLevelContainer},r.a.createElement(l.a,{to:Object(g.a)(a)},"next up, ",r.a.createElement("span",{className:f.a.levelName},a.levelName)," from"," ",a.gameNameUsa," ",r.a.createElement(i.b,null))))},b=a(214),h=a(185),y=a.n(h),N=function(e){var t=e.className,a=e.gameNameUsa,n=e.levelName,c=e.labels,i=e.currentLabel,m=e.fullscreen,s=v()(y.a.root,t);return r.a.createElement("ul",{className:s},c.map(function(e){var t,c=e===i;return t=c?r.a.createElement("div",{className:y.a.currentLabel},e):r.a.createElement(l.a,{to:Object(b.a)({gameNameUsa:a,levelName:n},e,m)},e),r.a.createElement("li",{className:c&&y.a.liCurrentLabel,key:e},t)}))},O=a(186),j=a.n(O),C=function(e){var t=e.className,a=e.levelName,n=e.label,c=e.gameNameUsa,i=e.developer,m=e.system,s=e.year,o=e.series,u=v()(j.a.root,t);return r.a.createElement("table",{className:u},r.a.createElement("tbody",null,r.a.createElement("tr",{className:j.a.levelNameRow},r.a.createElement("td",{colSpan:2},a,n&&" - "+n)),r.a.createElement("tr",null,r.a.createElement("td",null,"game"),r.a.createElement("td",null,r.a.createElement(l.a,{to:Object(b.d)(c)},c))),r.a.createElement("tr",null,r.a.createElement("td",null,"series"),r.a.createElement("td",null,r.a.createElement(l.a,{to:Object(b.f)(o)},o))),r.a.createElement("tr",null,r.a.createElement("td",null,"developer"),r.a.createElement("td",null,r.a.createElement(l.a,{to:Object(b.b)(i)},i))),r.a.createElement("tr",null,r.a.createElement("td",null,"system"),r.a.createElement("td",null,r.a.createElement(l.a,{to:Object(b.g)(m)},m))),r.a.createElement("tr",null,r.a.createElement("td",null,"released"),r.a.createElement("td",null,r.a.createElement(l.a,{to:Object(b.h)(s)},s||"?")))))},w=a(187),k=a.n(w),F=function(e){var t=e.className,a=e.width,n=e.height,l=e.src,c=e.alt,i=e.children,m=v()(k.a.root,t),s=parseInt(a),o=parseInt(n)/s,u=Math.floor(100*o)+"%";return r.a.createElement("div",{className:m,style:{paddingTop:u}},r.a.createElement("img",{src:l,alt:c}),i)},L=a(243),U=a.n(L),x=(a(28),a(24),a(12),a(45),a(226)),I=a(188),S=a.n(I);function R(e){return Object.keys(e).filter(function(e){return"siteUrl"!==e&&"submissionType"!==e}).some(function(t){return e[t]&&e[t].trim()})}var T=function(e){var t=e.className,a=e.imageUrl,n=e.onClose,l=Object(x.a)(window.location.pathname,"correction"),c=l.handleInputChange,i=l.handleSubmit,m=l.inputs,s=l.hasSubmitted,o=v()(S.a.root,t),u=r.a.createElement("div",null,r.a.createElement("h3",null,"Found an error?"),"All fields are optional, just fill in whatever needs fixing."),d=r.a.createElement("div",{className:S.a.submittedHeader},r.a.createElement("h3",null,"Thanks!"),r.a.createElement("div",null,"Thanks for improving the site! We will correct the mistake right away"),r.a.createElement("input",{type:"submit",value:"OK",onClick:function(){n()}}));return r.a.createElement("div",{className:o},r.a.createElement("div",null,r.a.createElement("div",{className:S.a.header},r.a.createElement("img",{src:a}),s?d:u),!s&&r.a.createElement("div",{className:S.a.inputGrid},r.a.createElement("label",{htmlFor:"ripCredit"},"rip credit (name and website)"),r.a.createElement("input",{readOnly:s,type:"text",name:"ripCredit",value:m.ripCredit,onChange:c}),r.a.createElement("label",{htmlFor:"levelName"},"level name"),r.a.createElement("input",{readOnly:s,type:"text",name:"levelName",value:m.levelName,onChange:c}),r.a.createElement("label",{htmlFor:"gameName"},"game name"),r.a.createElement("input",{readOnly:s,type:"text",name:"gameName",value:m.gameName,onChange:c}),r.a.createElement("label",{htmlFor:"developer"},"developer"),r.a.createElement("input",{readOnly:s,type:"text",name:"developer",value:m.developer,onChange:c}),r.a.createElement("label",{htmlFor:"system"},"system"),r.a.createElement("input",{readOnly:s,type:"text",name:"system",value:m.system,onChange:c}),r.a.createElement("label",{htmlFor:"year"},"year released"),r.a.createElement("input",{readOnly:s,type:"text",name:"year",value:m.year,onChange:c}),r.a.createElement("label",{htmlFor:"series"},"series"),r.a.createElement("input",{readOnly:s,type:"text",name:"series",value:m.series,onChange:c}),r.a.createElement("label",{htmlFor:"image"},"URL of better image"),r.a.createElement("input",{readOnly:s,type:"text",name:"url",value:m.url,onChange:c}),r.a.createElement("input",{disabled:!R(m),type:"submit",value:"submit",onClick:function(e){i(e)}}))))},G=a(189),M=a.n(G),q=function(e){var t=e.className,a=e.imageUrl,n=e.isOpen,l=e.onRequestClose,c=v()(M.a.root,t);return r.a.createElement(U.a,{className:c,isOpen:n,onRequestClose:l},r.a.createElement(T,{imageUrl:a,onClose:l}))};var A=a(190),D=a.n(A);a.d(t,"query",function(){return H});var H="367422224";t.default=function(e){var t=e.data,a=e.pageContext,d=a.currentLabel,v=a.labels,p=a.fullscreen,f=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return Object(n.useEffect)(function(){a(!0)},[]),t}(),b=Object(n.useState)(!1),h=b[0],y=b[1],O=t.currentLevel,j=t.prevLevel,w=t.nextLevel;Object(s.a)("left",function(){return Object(o.navigate)(Object(g.a)(j,void 0,p))}),Object(s.a)("right",function(){return Object(o.navigate)(Object(g.a)(w,void 0,p))}),Object(s.a)("esc",function(){return Object(o.navigate)(Object(g.a)(O,d,!1))});var k,L=t.mainImg&&t.mainImg.publicURL,U=t.bgImg&&t.bgImg.childImageSharp.resize.src,x=t.twitterImg.childImageSharp.fixed.src,I=O.levelName+" from "+O.gameNameUsa,S={visibility:f?"visible":"hidden"};return k=p?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.fullscreenTitle},O.levelName,", ",O.gameNameUsa),r.a.createElement(F,{className:D.a.fullscreenLevelImage,width:t.dimensions.width,height:t.dimensions.height,src:L,alt:I}),r.a.createElement("div",{className:D.a.levelImageFooter},!!v&&!!d&&r.a.createElement(N,Object.assign({},O,{labels:v,currentLabel:d,fullscreen:!0})),r.a.createElement(l.a,{className:D.a.fullscreenLink,title:"leave fullscreen",to:Object(g.a)(O,d,!1)},r.a.createElement(i.c,{style:S})))):r.a.createElement(u.a,null,r.a.createElement(q,{imageUrl:U,isOpen:h,onRequestClose:function(){return y(!1)}}),r.a.createElement("div",{className:D.a.blur,style:{backgroundImage:"url("+U+")"}}),r.a.createElement("div",{className:D.a.root},r.a.createElement("div",{className:D.a.imageContainer},r.a.createElement("div",{className:D.a.upperLinkContainer},r.a.createElement("div",{className:D.a.correctionLink,style:S},r.a.createElement("a",{onClick:function(){return y(!0)}},"submit a correction")),!!O.ripCredit&&r.a.createElement("div",{className:D.a.ripCreditLink},"ripped by: ",r.a.createElement("a",{href:O.ripCreditUrl},O.ripCredit))),r.a.createElement(F,{className:D.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:L,alt:I}),r.a.createElement("div",{className:D.a.levelImageFooter},!!v&&!!d&&r.a.createElement(N,Object.assign({},O,{labels:v,currentLabel:d})),r.a.createElement(l.a,{className:D.a.fullscreenLink,title:"fullscreen",to:Object(g.a)(O,d,!0)},r.a.createElement(i.d,{style:S}))),r.a.createElement("div",{className:D.a.metaDataContainer},r.a.createElement(C,Object.assign({className:D.a.metaData},O,{label:d}))))),r.a.createElement(E,{className:D.a.header,nextLevel:w})),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("title",null,I," - FGBG")),r.a.createElement(c.a,{title:I,description:"fighting game backgrounds website",imageUrl:x}),k)}},206:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(219),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(209),r.a.createContext({})},209:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(206);function r(e,t,a){var r="/game:"+[e.gameNameUsa,e.levelName].map(n.a).join("/");return t&&(r=[r,Object(n.a)(t)].join("/")),a?[r,"fullscreen"].join("/"):r}},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t,a){"use strict";var n=a(213),r=a(0),l=a.n(r),c=a(217),i=a.n(c);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"en":r,m=e.meta,s=void 0===m?[]:m,o=e.title,u=e.imageUrl,d=n.data.site,v=a||d.siteMetadata.description,g=[{name:"description",content:v},{property:"og:title",content:o},{property:"og:description",content:v},{property:"og:type",content:"website"},{name:"twitter:card",content:u?"summary_large_image":"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:v},{name:"twitter:site",content:"@mattegreer"}].concat(s);if(u){var p="https://www.fgbg.art"+u;g.push({name:"twitter:image",content:p},{property:"og:image",content:p})}return l.a.createElement(i.a,{htmlAttributes:{lang:c},title:o,titleTemplate:"%s | "+d.siteMetadata.title,meta:g})}},213:function(e){e.exports={data:{site:{siteMetadata:{title:"FGBG",description:"Fighting game backgrounds",author:"@mattegreer"}}}}},214:function(e,t,a){"use strict";var n=a(206),r=a(210);function l(e){return"/developer:"+Object(n.a)(e)}function c(e){return"/other:"+Object(n.a)(e)}function i(e){return"/system:"+Object(n.a)(e)}function m(e){return e?"/year:"+e:"/year:missing"}function s(e){return"/series:"+Object(n.a)(e)}function o(e){return"/game:"+Object(n.a)(e)}a(33);function u(e){return e.split(".")[0]}a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"g",function(){return i}),a.d(t,"h",function(){return m}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return u})},216:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),l=a(207),c=a.n(l),i=a(208),m=a(176),s=a.n(m),o=function(e){var t=e.logoClassName,a=e.children,n=c()(s.a.logo,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/"},r.a.createElement("div",{className:n})),a)}},226:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(34),a(23),a(28),a(24),a(12),a(45);var n=a(0),r={levelName:"entry.1758812684",gameName:"entry.1658808931",system:"entry.2024056467",developer:"entry.726710484",year:"entry.906557948",series:"entry.1788056905",url:"entry.89449791",siteUrl:"entry.36955456",submissionType:"entry.1271839613",unknownId:"entry.1564011080",ripCredit:"entry.116198943"},l=Object.keys(r).reduce(function(e,t){return e[t]="",e},{}),c="https://docs.google.com/forms/d/e/1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ/formResponse?";var i=function(e,t,a){void 0===a&&(a={});var i=Object(n.useState)(Object.assign({},l,{},a,{siteUrl:e||"unknown",submissionType:t})),m=i[0],s=i[1],o=Object(n.useState)(!1),u=o[0],d=o[1];return{handleSubmit:function(e){e&&e.preventDefault(),fetch(function(e){var t=Object.keys(e).reduce(function(t,a){var n=r[a],l=encodeURIComponent(e[a]);return t.concat(n+"="+l)},[]).join("&");return c+t}(m),{method:"POST"}),d(!0)},handleInputChange:function(e){e.persist(),s(function(t){var a;return Object.assign({},t,((a={})[e.target.name]=e.target.value,a))})},inputs:m,hasSubmitted:u}}}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-1b74125532b9f1968ef2.js.map