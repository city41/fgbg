(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{183:function(e,t,a){"use strict";a.r(t);a(23),a(87);var n=a(0),g=a.n(n),c=(a(59),a(12),a(120),a(34),a(14),"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0);function i(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){a(window.event)})}function I(e,t){for(var a=t.slice(0,t.length-1),n=0;n<a.length;n++)a[n]=e[a[n].toLowerCase()];return a}function M(e){e||(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),a=t.lastIndexOf("");a>=0;)t[a-1]+=",",t.splice(a,1),a=t.lastIndexOf("");return t}function r(e,t){for(var a=e.length>=t.length?e:t,n=e.length>=t.length?t:e,g=!0,c=0;c<a.length;c++)-1===n.indexOf(a[c])&&(g=!1);return g}for(var o={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":c?173:189,"=":c?61:187,";":c?59:186,"'":222,"[":219,"]":221,"\\":220},l={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":c?224:91,cmd:c?224:91,command:c?224:91},u={16:"shiftKey",18:"altKey",17:"ctrlKey"},N={16:!1,18:!1,17:!1},A={},j=1;j<20;j++)o["f".concat(j)]=111+j;u[c?224:91]="metaKey",N[c?224:91]=!1;var D=[],y="all",C=[],s=function(e){return o[e.toLowerCase()]||l[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function m(e){y=e||"all"}function d(){return y||"all"}function z(e,t,a){var n;if(t.scope===a||"all"===t.scope){for(var g in n=t.mods.length>0,N)Object.prototype.hasOwnProperty.call(N,g)&&(!N[g]&&t.mods.indexOf(+g)>-1||N[g]&&-1===t.mods.indexOf(+g))&&(n=!1);(0!==t.mods.length||N[16]||N[18]||N[17]||N[91])&&!n&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function O(e){var t=A["*"],a=e.keyCode||e.which||e.charCode;if(p.filter.call(this,e)){if(-1===D.indexOf(a)&&229!==a&&D.push(a),93!==a&&224!==a||(a=91),a in N){for(var n in N[a]=!0,l)l[n]===a&&(p[n]=!0);if(!t)return}for(var g in N)Object.prototype.hasOwnProperty.call(N,g)&&(N[g]=e[u[g]]);var c=d();if(t)for(var i=0;i<t.length;i++)t[i].scope===c&&("keydown"===e.type&&t[i].keydown||"keyup"===e.type&&t[i].keyup)&&z(e,t[i],c);if(a in A)for(var I=0;I<A[a].length;I++)if(("keydown"===e.type&&A[a][I].keydown||"keyup"===e.type&&A[a][I].keyup)&&A[a][I].key){for(var M=A[a][I].key.split("+"),r=[],o=0;o<M.length;o++)r.push(s(M[o]));(r=r.sort()).join("")===D.sort().join("")&&z(e,A[a][I],c)}}}function p(e,t,a){var n=M(e),g=[],c="all",r=document,o=0,u=!1,j=!0;for(void 0===a&&"function"==typeof t&&(a=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(c=t.scope),t.element&&(r=t.element),t.keyup&&(u=t.keyup),t.keydown&&(j=t.keydown)),"string"==typeof t&&(c=t);o<n.length;o++)g=[],(e=n[o].split("+")).length>1&&(g=I(l,e)),(e="*"===(e=e[e.length-1])?"*":s(e))in A||(A[e]=[]),A[e].push({keyup:u,keydown:j,scope:c,mods:g,shortcut:n[o],method:a,key:n[o]});void 0!==r&&!function(e){return C.indexOf(e)>-1}(r)&&window&&(C.push(r),i(r,"keydown",function(e){O(e)}),i(window,"focus",function(){D=[]}),i(r,"keyup",function(e){O(e),function(e){var t=e.keyCode||e.which||e.charCode,a=D.indexOf(t);if(a>=0&&D.splice(a,1),e.key&&"meta"===e.key.toLowerCase()&&D.splice(0,D.length),93!==t&&224!==t||(t=91),t in N)for(var n in N[t]=!1,l)l[n]===t&&(p[n]=!1)}(e)}))}var w={setScope:m,getScope:d,deleteScope:function(e,t){var a,n;for(var g in e||(e=d()),A)if(Object.prototype.hasOwnProperty.call(A,g))for(a=A[g],n=0;n<a.length;)a[n].scope===e?a.splice(n,1):n++;d()===e&&m(t||"all")},getPressedKeyCodes:function(){return D.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=s(e)),-1!==D.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,a=t.tagName,n=!0;return!t.isContentEditable&&"TEXTAREA"!==a&&("INPUT"!==a&&"TEXTAREA"!==a||t.readOnly)||(n=!1),n},unbind:function(e,t,a){var n,g,c=M(e),i=[];"function"==typeof t&&(a=t,t="all");for(var o=0;o<c.length;o++){if(i=(n=c[o].split("+")).length>1?I(l,n):[],e="*"===(e=n[n.length-1])?"*":s(e),t||(t=d()),!A[e])return;for(var u=0;u<A[e].length;u++)g=A[e][u],(!a||g.method===a)&&g.scope===t&&r(g.mods,i)&&(A[e][u]={})}}};for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&(p[T]=w[T]);if("undefined"!=typeof window){var L=window.hotkeys;p.noConflict=function(e){return e&&window.hotkeys===p&&(window.hotkeys=L),p},window.hotkeys=p}var b=p;function v(e,t){Object(n.useEffect)(function(){return b(e,function(e,a){return t(e,a)}),function(){return b.unbind(e)}},[t])}var f=a(22),Z=a(187),Y=a(184),E=a(196),h=a.n(E),k=a(190),x=a(176),U=a.n(x),S=function(e){var t=e.className,a=e.prevLevel,n=e.nextLevel,c=h()(U.a.root,t);return g.a.createElement("header",{className:c},g.a.createElement("div",null,g.a.createElement(Y.a,{to:Object(k.a)(a)},"< ",a.levelName," from ",a.gameNameUsa)),g.a.createElement("div",null,g.a.createElement(Y.a,{to:Object(k.a)(n)},n.levelName," from ",n.gameNameUsa," >")))},G=a(186);function B(e){return"/"+Object(G.a)(e)}function R(e){return e?"/"+e:"/missing-release-year"}function Q(e){return"/"+Object(G.a)(e)}var J=a(177),W=a.n(J),P=function(e){var t=e.className,a=e.levelName,n=e.gameNameUsa,c=e.system,i=e.year,I=h()(W.a.root,t);return g.a.createElement("table",{className:I},g.a.createElement("tbody",null,g.a.createElement("tr",{className:W.a.levelNameRow},g.a.createElement("td",{colSpan:2},a)),g.a.createElement("tr",null,g.a.createElement("td",null,"game"),g.a.createElement("td",null,g.a.createElement(Y.a,{to:Q(n)},n))),g.a.createElement("tr",null,g.a.createElement("td",null,"system"),g.a.createElement("td",null,g.a.createElement(Y.a,{to:B(c)},c))),g.a.createElement("tr",null,g.a.createElement("td",null,"released"),g.a.createElement("td",null,g.a.createElement(Y.a,{to:R(i)},i||"?")))))},H=a(178),X=a.n(H);function F(e){var t=e.find(function(e){return e.node.relativePath.indexOf("_static.jpg")<0});return t&&t.node.publicURL}a.d(t,"query",function(){return K});var K="3979228422";t.default=function(e){var t,a,n=e.data,c=n.currentLevel,i=n.prevLevel,I=n.nextLevel,M=F(n.allFile.edges),r=(t=n.allFile.edges,(a=t.find(function(e){return e.node.relativePath.indexOf("_static.jpg")>-1}))?a.node.publicURL:F(t));return v("left",function(){return Object(f.navigate)(Object(k.a)(i))}),v("right",function(){return Object(f.navigate)(Object(k.a)(I))}),g.a.createElement(Z.a,null,g.a.createElement("div",{className:X.a.blur,style:{backgroundImage:"url("+r+")"}}),g.a.createElement("div",{className:X.a.root},g.a.createElement(S,{className:X.a.header,prevLevel:i,nextLevel:I}),g.a.createElement("div",{className:X.a.imageContainer},g.a.createElement("img",{src:M}),g.a.createElement("div",{className:X.a.metaDataContainer},g.a.createElement(P,Object.assign({className:X.a.metaData},c))))))}},184:function(e,t,a){"use strict";var n=a(0),g=a.n(n),c=a(58),i=a.n(c);a.d(t,"a",function(){return i.a});a(185),g.a.createContext({})},185:function(e,t,a){var n;e.exports=(n=a(188))&&n.default||n},186:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(191),g=a.n(n);function c(e){return g()(e,{remove:/[*+~.()'"!:@]/g,lower:!0})}},187:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),g=a.n(n),c=a(184),i=a(189),I=a.n(i),M=a(175),r=a.n(M),o=function(e){var t=e.children;return g.a.createElement(g.a.Fragment,null,t,g.a.createElement("div",{className:r.a.logo},g.a.createElement(c.a,{to:"/"},g.a.createElement("img",{src:I.a}))))}},188:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),g=a.n(n),c=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?g.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},189:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjEwbW0iCiAgIGhlaWdodD0iMjk3bW0iCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iMjM2Ljk5ODYiCiAgICAgaW5rc2NhcGU6Y3k9IjY3NS4yMTAxOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIyIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iODE5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIHNob3dndWlkZXM9ImZhbHNlIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIyIgogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAyIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eTowLjUxMDYzODM7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTk5OTk5OTRweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSA0NjAuNjI4OTEgMjUyLjc3OTMgQyA0NjAuNjI4OTEgMjUyLjc3OTMgNDc3LjgwMTM5IDI3NS4wMDA3OCA0MjUuMjczNDQgMjcyLjk4MDQ3IEMgMzgzLjY5NTY1IDI3MS4zODEzMyAzNzkuNDc5MjkgMzE3LjE0MTAzIDM3OS41MTk1MyAzMzYuMzMzOTggQyAzNjMuNjc5MTkgMzQ4LjUxNTY2IDM0NS45MzQ1MSAzNjIuMjI0MzggMzI2Ljg0Mzc1IDM3Ny4wODM5OCBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAyOTQuODk2NDggMzU1LjUyMzQ0IEMgMjkxLjA3OTg2IDM0My42MDU4NiAyODIuNTU3NzYgMzI0Ljg2NzU1IDI2Ni4xNzU3OCAzMjIuNDc4NTIgQyAyNjQuNjYwNTUgMzIyLjI1NzU0IDI2My4xNzIzNiAzMjIuMTQxMjMgMjYxLjcxNDg0IDMyMi4xMTcxOSBDIDI0NC42MTU5NCAzMjEuODM1MSAyMzEuNjkyNjUgMzM0LjIzNjAyIDIyNi44NTc0MiAzMzkuNjY2MDIgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgOTUuMTY5OTIyIDQxOC45Mzc1IEMgODguODIxMTk3IDQyMS40NTg1NyA3Ny4zMzMwOCA0MjcuMzYyMTEgNzMuNzQwMjM0IDQzOC4xNDA2MiBDIDcwLjUwNzA3NyA0NDcuODQwMTIgNzYuMzczNjA0IDQ1OS4zNzk3NiA4MS4wMTk1MzEgNDY2LjQ0NTMxIEEgMTQ2Ljk3NzIgMTQwLjQxMTIzIDAgMCAwIDgwLjMwNjY0MSA0ODAuMDYyNSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAxMDQuNjI1IDU1Ny4yMzgyOCBDIDUwLjI2MDI0NyA2MDQuNDg5NjggMTMuNjU5NDA1IDY0MS4wOTUyMiAyMC43MDg5ODQgNjQ4Ljc1NzgxIEMgMzcuMDIyMzM1IDY2Ni40ODk3MiAxMDAuNTI2MDggNjIwLjA1NjA0IDEzNi45ODA0NyA1OTAuNzc1MzkgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMjI3LjI4NTE2IDYyMC40NzQ2MSBBIDE0Ni45NzcyIDE0MC40MTEyMyAwIDAgMCAzNzQuMjYxNzIgNDgwLjA2MjUgQSAxNDYuOTc3MiAxNDAuNDExMjMgMCAwIDAgMzQyLjUzOTA2IDM5My4zMTI1IEMgMzU5Ljc5OTA4IDM3NS42NzgzNiAzNzUuODA0MDcgMzU5LjE5MzcgMzkwLjExMTMzIDM0NC4zOTY0OCBDIDQxOS43MjI2NyAzNDMuMzgzODUgNDc2LjE4NTYyIDMzOC43ODMzMSA0NzAuNjA3NDIgMjk3LjMyODEyIEMgNDc4LjAwMTQgMjkxLjYyNzg2IDQ4MS43ODI0OCAyODUuNTYwMTYgNDc4Ljc1IDI3NS4xOTkyMiBDIDQ3Ni42NDQxNiAyODMuNDExOTkgNDcwLjUwMTU5IDI4Mi4xNTA0MyA0NjUuODA0NjkgMjc5Ljc0MDIzIEMgNDcwLjUzMzIxIDI3NC4xMDcwNSA0NzYuMjUyNjggMjU4LjI1NDA5IDQ2MC42Mjg5MSAyNTIuNzc5MyB6ICIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiCiAgICAgICBpZD0icGF0aDM3ODUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDMxLjgwNTA3MywxMDguODQyMjUgLTkuODg4OTcyLDUuODc5OTMgYyAwLDAgLTEuMDY5MDc4LDEuODcwODkgMCw0LjI3NjMxIDEuMDY5MDc4LDIuNDA1NDMgMTYuODM3OTgsMjQuODU2MDcgMTYuODM3OTgsMjQuODU2MDcgbCAxMC45NTgwNSwtNi4xNDcyIHoiCiAgICAgICBpZD0icGF0aDM3MjkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzNC44Nzg2NzQsMTA3LjM3MjI3IDEwLjAyMjYwNywtNi4wMTM1NyAxMi40MjgwMzIsMjAuMDQ1MjIgYyAwLDAgLTIuNTg2MTA2LDAuODkzMDggMy43NDE3NzQsOS43NTUzNCBsIC04LjQxODk5MSw0Ljk0NDQ4IHoiCiAgICAgICBpZD0icGF0aDM3MzEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDQ3LjcwNzYxLDk5Ljg4ODcyMSA1OS4zMzM4MzYsOTMuMjA2OTg0IDcwLjY5Mjc5LDExNC4wNTQwMSA2MC4yNjkyNzgsMTE5LjkzMzk0IFoiCiAgICAgICBpZD0icGF0aDM3MzMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA2Mi4yNzM3OTgsOTEuNjAzMzY2IDExLjM1ODk1NywyMC44NDcwMjQgNy43NTA4MTUsLTQuNDA5OTUgLTcuMjE2Mjc3LC0xNy4xMDUyNDggYyAwLDAgLTMuMDczNTk5LC02LjgxNTM3MyAtMTEuODkzNDk1LDAuNjY4MTc0IHoiCiAgICAgICBpZD0icGF0aDM3MzUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0My4xNjQwMjksMTUwLjUzNjMgMzkuODIzMTYsLTIzLjUxOTcyIC0yLjgwNjMzMywtMy42MDgxNCAtMTQuMTY1MjgzLDguMDE4MDkgLTUuMDc4MTIyLC03Ljg4NDQ2IDIwLjcxMzM4OCwtMTEuNjI2MjIgYyAwLDAgNy4yMTYyNzcsLTUuNDc5MDIgOC4yODUzNTYsMS43MzcyNSAxLjA2OTA3OCw3LjIxNjI4IDEuNjAzNjE4LDE4Ljg0MjUgMS42MDM2MTgsMTguODQyNSAwLDAgLTcuNDgzNTQ2LDMuNzQxNzggLTQuNjc3MjE3LDguNTUyNjMgMi44MDYzMyw0LjgxMDg1IDIuNjcyNjk0LDUuNjEyNjYgMi42NzI2OTQsNS42MTI2NiAwLDAgLTQuNTQzNTgxLDEyLjgyODk0IC0yMi45ODUxNzksMTUuMTAwNzMgMCwwIC0xLjczNzI1MSwtMC45MzU0NCAtNC44MTA4NSwtNy4zNDk5MSAtMy4wNzM2LC02LjQxNDQ3IC04LjU1MjYyNSwxLjMzNjM0IC04LjU1MjYyNSwxLjMzNjM0IDAsMCAtNS42MTI2NTksMS40Njk5OSAtMTAuMDIyNjA3LC01LjIxMTc1IHoiCiAgICAgICBpZD0icGF0aDM3MzciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KPC9zdmc+Cg=="},190:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(186);function g(e){return"/"+[e.gameNameUsa,e.levelName].map(n.a).join("/")}},191:function(e,t,a){var n;a(34),a(14),a(33),n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,a){if("string"!=typeof t)throw new Error("slugify: string argument expected");a="string"==typeof a?{replacement:a}:a||{};var n=t.split("").reduce(function(t,n){return t+(e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,a.replacement||"-");return a.lower?n.toLowerCase():n}return t.extend=function(t){for(var a in t)e[a]=t[a]},t},e.exports=n(),e.exports.default=n()},196:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function g(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=g.apply(null,n);i&&e.push(i)}else if("object"===c)for(var I in n)a.call(n,I)&&n[I]&&e.push(I)}}return e.join(" ")}e.exports?(g.default=g,e.exports=g):void 0===(n=function(){return g}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-components-background-template-tsx-3afe22c03fc6fa4c6fe6.js.map