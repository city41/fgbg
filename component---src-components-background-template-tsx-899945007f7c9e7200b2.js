(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(207),c=a(261),m=a(22),s=a(200),u=a(195),i=a(260),o=a(197),d=a.n(o),v=a(198),E=a(178),f=a.n(E),p=function(e){var t=e.className,a=(e.prevLevel,e.nextLevel),n=d()(f.a.root,t);return r.a.createElement("header",{className:n},r.a.createElement("div",{className:f.a.nextLevelContainer},r.a.createElement(u.a,{to:Object(v.a)(a)},"next up, ",r.a.createElement("span",{className:f.a.levelName},a.levelName)," from"," ",a.gameNameUsa," ",r.a.createElement(i.a,null))))},g=a(201),b=a(202),h=a(203),y=a(204),N=a(179),O=a.n(N),j=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,l=e.developer,c=e.system,m=e.year,s=d()(O.a.root,t);return r.a.createElement("table",{className:s},r.a.createElement("tbody",null,r.a.createElement("tr",{className:O.a.levelNameRow},r.a.createElement("td",{colSpan:2},a)),r.a.createElement("tr",null,r.a.createElement("td",null,"game"),r.a.createElement("td",null,r.a.createElement(u.a,{to:Object(h.a)(n)},n))),r.a.createElement("tr",null,r.a.createElement("td",null,"developer"),r.a.createElement("td",null,r.a.createElement(u.a,{to:Object(y.a)(l)},l))),r.a.createElement("tr",null,r.a.createElement("td",null,"system"),r.a.createElement("td",null,r.a.createElement(u.a,{to:Object(g.a)(c)},c))),r.a.createElement("tr",null,r.a.createElement("td",null,"released"),r.a.createElement("td",null,r.a.createElement(u.a,{to:Object(b.a)(m)},m||"?")))))},C=a(180),w=a.n(C),x=function(e){var t=e.className,a=e.width,n=e.height,l=e.src,c=e.alt,m=d()(w.a.root,t),s=parseInt(a),u=parseInt(n)/s,i=Math.floor(100*u)+"%";return r.a.createElement("div",{className:m,style:{paddingTop:i}},r.a.createElement("img",{src:l,alt:c}))},F=a(228),U=a.n(F),S=(a(34),a(28),a(24),a(12),a(45),a(181)),k=a.n(S),L={levelName:"entry.1758812684",gameName:"entry.1658808931",system:"entry.2024056467",developer:"entry.726710484",year:"entry.906557948",series:"entry.1788056905",url:"entry.89449791",siteUrl:"entry.36955456"},I="https://docs.google.com/forms/d/e/1FAIpQLScSRFk3nVFwV0obvwZsd6H-oAG7SCXM7FsXZ6cU-YsyiqDzAQ/formResponse?";var R=function(e){var t=Object(n.useState)({siteUrl:e}),a=t[0],r=t[1],l=Object(n.useState)(!1),c=l[0],m=l[1];return{handleSubmit:function(e){e&&e.preventDefault(),fetch(function(e){var t=Object.keys(e).reduce(function(t,a){var n=L[a],r=encodeURIComponent(e[a]);return t.concat(n+"="+r)},[]).join("&");return I+t}(a),{method:"POST"}),m(!0)},handleInputChange:function(e){e.persist(),r(function(t){var a;return Object.assign({},t,((a={})[e.target.name]=e.target.value,a))})},inputs:a,hasSubmitted:c}};function q(e){return Object.keys(e).filter(function(e){return"siteUrl"!==e}).some(function(t){return e[t]&&e[t].trim()})}var A=function(e){var t=e.className,a=e.imageUrl,n=e.onClose,l=R(window.location.pathname),c=l.handleInputChange,m=l.handleSubmit,s=l.inputs,u=l.hasSubmitted,i=d()(k.a.root,t),o=r.a.createElement("div",null,r.a.createElement("h3",null,"Found an error?"),"All fields are optional, just fill in whatever needs fixing."),v=r.a.createElement("div",{className:k.a.submittedHeader},r.a.createElement("h3",null,"Thanks!"),r.a.createElement("div",null,"Thanks for improving the site! We will correct the mistake right away"),r.a.createElement("input",{type:"submit",value:"OK",onClick:function(e){n()}}));return r.a.createElement("div",{className:i},r.a.createElement("div",null,r.a.createElement("div",{className:k.a.header},r.a.createElement("img",{src:a}),u?v:o),!u&&r.a.createElement("div",{className:k.a.inputGrid},r.a.createElement("label",{htmlFor:"levelName"},"level name"),r.a.createElement("input",{readOnly:u,type:"text",name:"levelName",value:s.levelName,onChange:c}),r.a.createElement("label",{htmlFor:"gameName"},"game name"),r.a.createElement("input",{readOnly:u,type:"text",name:"gameName",value:s.gameName,onChange:c}),r.a.createElement("label",{htmlFor:"developer"},"developer"),r.a.createElement("input",{readOnly:u,type:"text",name:"developer",value:s.developer,onChange:c}),r.a.createElement("label",{htmlFor:"system"},"system"),r.a.createElement("input",{readOnly:u,type:"text",name:"system",value:s.system,onChange:c}),r.a.createElement("label",{htmlFor:"year"},"year released"),r.a.createElement("input",{readOnly:u,type:"text",name:"year",value:s.year,onChange:c}),r.a.createElement("label",{htmlFor:"series"},"series"),r.a.createElement("input",{readOnly:u,type:"text",name:"series",value:s.series,onChange:c}),r.a.createElement("label",{htmlFor:"image"},"URL of better image"),r.a.createElement("input",{readOnly:u,type:"text",name:"url",value:s.url,onChange:c}),r.a.createElement("input",{disabled:!q(s),type:"submit",value:"submit",onClick:function(e){m(e)}}))))},D=a(182),G=a.n(D),T=function(e){var t=e.className,a=e.imageUrl,n=e.isOpen,l=e.onRequestClose,c=d()(G.a.root,t);return r.a.createElement(U.a,{className:c,isOpen:n,onRequestClose:l},r.a.createElement(A,{imageUrl:a,onClose:l}))},H=a(183),z=a.n(H);a.d(t,"query",function(){return J});var J="1508642787";t.default=function(e){var t=e.data,a=Object(n.useState)(!1),u=a[0],i=a[1],o=Object(n.useState)(!1),d=o[0],E=o[1];Object(n.useEffect)(function(){i(!0)},[]);var f=t.currentLevel,g=t.prevLevel,b=t.nextLevel;Object(c.a)("left",function(){return Object(m.navigate)(Object(v.a)(g))}),Object(c.a)("right",function(){return Object(m.navigate)(Object(v.a)(b))});var h=t.mainImg.publicURL,y=t.bgImg.childImageSharp.resize.src,N=f.levelName+" from "+f.gameNameUsa;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{imageUrl:y,isOpen:d,onRequestClose:function(){return E(!1)}}),r.a.createElement(s.a,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,N," - FGBG")),r.a.createElement("div",{className:z.a.blur,style:{backgroundImage:"url("+y+")"}}),r.a.createElement("div",{className:z.a.root},r.a.createElement("div",{className:z.a.imageContainer},r.a.createElement(x,{className:z.a.levelImage,width:t.dimensions.width,height:t.dimensions.height,src:h,alt:N}),r.a.createElement("div",{className:z.a.metaDataContainer},u&&r.a.createElement("div",{className:z.a.correctionLink},r.a.createElement("a",{onClick:function(){return E(!0)}},"submit a correction")),r.a.createElement(j,Object.assign({className:z.a.metaData},f))))),r.a.createElement(p,{className:z.a.header,prevLevel:g,nextLevel:b})))}},194:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(205),r=a.n(n);function l(e){return r()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(196),r.a.createContext({})},196:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},198:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(194);function r(e){return"/bg:"+[e.gameNameUsa,e.levelName].map(n.a).join("/")}},199:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),l=a(195),c=a(175),m=a.n(c),s=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:m.a.logo})),t)}},201:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(194);function r(e){return"/system:"+Object(n.a)(e)}},202:function(e,t,a){"use strict";function n(e){return e?"/year:"+e:"/year:missing"}a.d(t,"a",function(){return n})},203:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(194);function r(e){return"/game:"+Object(n.a)(e)}},204:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(194);function r(e){return"/developer:"+Object(n.a)(e)}}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-899945007f7c9e7200b2.js.map