(this["webpackJsonpreact-social-app"]=this["webpackJsonpreact-social-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={post:"Post_post__3hqZB"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),s=n(11),a=n.n(s),i=(n(23),n(12)),o=n.n(i),j=n(0),d=function(e){var t=e.name||"App",n=e.links||[{link:"/",label:"Link"}];return Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:n.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.link,children:e.label})},t)}))})})]})},l=n(13),h=n.n(l),u=function(){var e=(new Date).getFullYear();return Object(j.jsxs)("footer",{className:h.a.footer,children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Copyright Edgemony ",e]})]})},b=n(8),x=n(14),f=n.n(x),m=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(j.jsxs)("div",{className:f.a.friend,children:[Object(j.jsx)("img",{src:t.photo,alt:t.name}),Object(j.jsx)("p",{children:t.name})]})},p=n(26),O=n(27),_=n(15),g=n.n(_),v=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(j.jsxs)("div",{className:g.a.message,children:[Object(j.jsx)("h5",{children:t.sender}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(p.a)(new Date(t.date),new Date,{addSuffix:!0,locale:O.a})})}),Object(j.jsx)("p",{children:t.text})]})},w=n(16),k=n.n(w),F=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"};return Object(j.jsxs)("article",{className:k.a.post,children:[Object(j.jsx)("h3",{children:t.author}),Object(j.jsx)("p",{children:Object(j.jsx)("small",{children:Object(p.a)(new Date(t.date),new Date,{addSuffix:!0,locale:O.a})})}),Object(j.jsx)("p",{children:t.text}),t.photo?Object(j.jsx)("img",{src:t.photo,alt:t.author}):Object(j.jsx)(j.Fragment,{})]})},D=function(e){return fetch("https://edgemony-backend.herokuapp.com"+e).then((function(e){return e.json()}))},H=n(10),y=n.n(H),N=[],S=[],B=[],M=function(){var e=Object(c.useState)(N),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(B),a=Object(b.a)(s,2),i=a[0],o=a[1],d=Object(c.useState)(S),l=Object(b.a)(d,2),h=l[0],u=l[1];return Object(c.useEffect)((function(){D("/friends?_limit=4").then((function(e){return r(e)})),D("/messages?_limit=4").then((function(e){return u(e)})),D("/posts").then((function(e){return o(e)}))}),[]),Object(j.jsxs)("section",{className:y.a.home,children:[Object(j.jsx)("h3",{children:"Bevenuto utente"}),Object(j.jsxs)("div",{className:y.a.grid,children:[Object(j.jsx)("aside",{children:n.map((function(e,t){return Object(j.jsx)(m,{data:e},t)}))}),Object(j.jsx)("main",{children:i.map((function(e,t){return Object(j.jsx)(F,{data:e},t)}))}),Object(j.jsx)("aside",{children:h.map((function(e,t){return Object(j.jsx)(v,{data:e},t)}))})]})]})};var P=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{name:"Feisbrut",links:[{link:"/",label:"Home"},{link:"/messages",label:"Messages"},{link:"/friends",label:"Friends"}]}),Object(j.jsx)(M,{}),Object(j.jsx)(u,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),I()}],[[25,1,2]]]);
//# sourceMappingURL=main.fb48a23f.chunk.js.map