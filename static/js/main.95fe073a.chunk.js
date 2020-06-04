(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={Overlay:"Modal_Overlay__2NRjw",Dialog:"Modal_Dialog__1xGId",CrossIcon:"Modal_CrossIcon__3kJ-z",Link:"Modal_Link__14n9T",InfoIcon:"Modal_InfoIcon__7C5w2"}},function(e,a,t){e.exports={Grid:"Board_Grid__2sUJ5",Cell:"Board_Cell__3dExj",Gen:"Board_Gen__2dEyf",GenCounter:"Board_GenCounter__kY0m5"}},,,function(e,a,t){e.exports={Controls:"Controls_Controls__3ORvE",CleanIcon:"Controls_CleanIcon__icGw9"}},,function(e,a,t){e.exports={ghLogo:"Footer_ghLogo__-v_qF"}},,,function(e,a,t){e.exports=t.p+"static/media/clear-icon.8d45ef69.png"},function(e,a,t){e.exports=t.p+"static/media/clean-modal-icon.421ffc2c.png"},function(e,a,t){e.exports=t.p+"static/media/github-logo.dd529c5f.JPG"},function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),o=t.n(l),c=(t(22),t(2)),i=t(10),s=t(3),u=t(4),m=t(14),f=t.n(m),d=t(9),E=t.n(d),b=function(e){var a=e.handlers,t=a.simulate,l=a.random,o=a.clear,i=Object(n.useState)(!0),m=Object(c.a)(i,2),d=m[0],b=m[1];return r.a.createElement("section",{className:E.a.Controls},r.a.createElement("button",{onClick:function(){b(!d),t()}},d?r.a.createElement(s.a,{icon:u.c,size:"lg",style:{color:"whitesmoke"}}):r.a.createElement(s.a,{icon:u.b,size:"lg",style:{color:"whitesmoke"}})),r.a.createElement("button",{onClick:l},r.a.createElement(s.a,{icon:u.d,size:"lg",style:{color:"whitesmoke"}})),r.a.createElement("button",{onClick:o},r.a.createElement("img",{className:E.a.CleanIcon,src:f.a,alt:"clear-icon"})))},h=t(6),_=t.n(h),p=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],g=null,v=function(){var e=0,a=Object(n.useState)(0),t=Object(c.a)(a,2),l=t[0],o=t[1],s=Object(n.useState)(Array(30).fill(Array(30).fill(0))),u=Object(c.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)(!1),E=Object(c.a)(d,2),h=E[0],v=E[1],C=Object(n.useRef)(h);C.current=h;var k=function(){C.current&&(o(e),e++,f((function(e){return Object(i.a)(e,(function(a){for(var t=function(t){for(var n=function(n){var r=0;p.forEach((function(a){var l=Object(c.a)(a,2),o=l[0],i=l[1],s=t+o,u=n+i;s>=0&&s<30&&u>=0&&u<30&&(r+=e[s][u])})),r<2||r>3?a[t][n]=0:0===e[t][n]&&3===r&&(a[t][n]=1)},r=0;r<30;r++)n(r)},n=0;n<30;n++)t(n)}))})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handlers:{simulate:function(){v(!h),h||(clearInterval(g),C.current=!0,k(),g=setInterval(k,200))},random:function(){for(var a=[],t=0;t<30;t++)a.push(Array.from(Array(30),(function(){return Math.random()>.8?1:0})));f(a),o(e=0)},clear:function(){f(Array(30).fill(Array(30).fill(0))),o(e=0)}}}),r.a.createElement("main",{className:_.a.Grid},m.map((function(e,a){return e.map((function(e,t){return r.a.createElement("div",{className:_.a.Cell,key:"".concat(a,"-").concat(t),style:{backgroundColor:m[a][t]?"lavenderblush":void 0},onClick:function(){return function(e,a){var t=Object(i.a)(m,(function(t){t[e][a]=1}));f(t)}(a,t)}})}))}))),r.a.createElement("div",{className:_.a.GenCounter},r.a.createElement("span",null,"g e n"),r.a.createElement("div",{className:_.a.Gen},r.a.createElement("p",null," ",l," "))))},C=t(15),k=t.n(C),y=t(5),O=t.n(y),j=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1];return r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){l(!0)}},r.a.createElement(s.a,{className:O.a.InfoIcon,icon:u.a,size:"lg",style:{color:"lavenderblush"}})),t&&r.a.createElement("div",{className:O.a.Overlay},r.a.createElement("div",{className:O.a.Dialog},r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"tada"},"\ud83c\udf89"),"Conway's Game of Life",r.a.createElement("span",{role:"img","aria-label":"tada"},"\ud83c\udf89")),r.a.createElement("h3",null,"To:"),r.a.createElement("br",null),r.a.createElement("p",null,"Pause/Resume press the",r.a.createElement(s.a,{icon:u.c}),"button.",r.a.createElement("br",null),"Create random life press the",r.a.createElement(s.a,{icon:u.d}),"button.",r.a.createElement("br",null),"Clear the board press the",r.a.createElement("img",{src:k.a,alt:"clean-icon"}),"button.",r.a.createElement("br",null)),r.a.createElement("h4",null,"For the rules and for more fun shapes:"),r.a.createElement("a",{className:O.a.Link,href:"https://bit.ly/36VVFGn",target:"_blank"},"Wikipedia article about the game"),r.a.createElement("br",null),r.a.createElement("a",{className:O.a.Link,href:"https://bit.ly/2zY5cjT",target:"_blank"},"LifeWiki"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){l(!1)}},r.a.createElement("span",{className:O.a.CrossIcon},"\xd7")))))},w=t(16),G=t.n(w),I=t(11),N=t.n(I),L=function(){return r.a.createElement("footer",{className:N.a.Footer},r.a.createElement("img",{src:G.a,className:N.a.ghLogo,alt:"github-logo"}),r.a.createElement("a",{href:"https://github.com/anapaulaoliva/Conways_Game_of_Life",target:"_blank",alt:"source-code"},"source code"))};t(28);var x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"The Game of Life"),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.95fe073a.chunk.js.map