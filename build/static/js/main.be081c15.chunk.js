(this.webpackJsonpwhatsapp_clone=this.webpackJsonpwhatsapp_clone||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(28),i=c.n(n),r=(c(77),c(15)),o=(c(78),c(79),c(115)),j=c(110),d=c(62),l=c.n(d),b=c(63),h=c.n(b),u=c(64),m=c.n(u),O=c(111),p=(c(80),c(42)),x=p.a.initializeApp({apiKey:"AIzaSyAJDz0e9aqlnYT-cfoGOQI0MBsncxgbZz8",authDomain:"oncom-a99fd.firebaseapp.com",projectId:"oncom-a99fd",storageBucket:"oncom-a99fd.appspot.com",messagingSenderId:"708989593299",appId:"1:708989593299:web:2b151292dde1337c429626",measurementId:"G-M58MGQNM6K"}),f=x.firestore(),v=x.auth(),g=new p.a.auth.GoogleAuthProvider,N=f,S=c(35),_=c(3);var C=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),u=h[0],m=h[1];return Object(a.useEffect)((function(){c&&N.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(_.jsx)("div",{onClick:function(){var e=prompt("Please Enter Name for Chat");e&&N.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(_.jsx)("h3",{className:"add-new-chat-title",children:"Add New Chat"})}):Object(_.jsx)(S.b,{to:"/rooms/".concat(c),children:Object(_.jsxs)("div",{className:"sidebarChat",children:[Object(_.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(_.jsxs)("div",{className:"sidebarChat_info",children:[Object(_.jsx)("h2",{children:s}),Object(_.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})},c)},y=Object(a.createContext)(),w=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(_.jsx)(y.Provider,{value:Object(a.useReducer)(t,c),children:s})},I=function(){return Object(a.useContext)(y)};var M=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],n=c[1],i=I(),d=Object(r.a)(i,2),b=d[0].user;return d[1],Object(a.useEffect)((function(){var e=N.collection("rooms").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(_.jsxs)("div",{className:"sidebar",children:[Object(_.jsxs)("div",{className:"sidebar_header",children:[Object(_.jsx)(o.a,{src:null===b||void 0===b?void 0:b.photoURL}),Object(_.jsxs)("div",{className:"sidebar_headerRight",children:[Object(_.jsx)(j.a,{children:Object(_.jsx)(l.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(h.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(m.a,{})})]})]}),Object(_.jsx)("div",{className:"sidebar_search",children:Object(_.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(_.jsx)(O.a,{}),Object(_.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(_.jsxs)("div",{className:"sidebar_chats",children:[Object(_.jsx)(C,{addNewChat:!0}),s.map((function(e){return Object(_.jsx)(C,{id:e.id,name:e.data.name},e.id)}))]})]})},E=c(112),D=c(113),T=c(66),k=c.n(T),B=c(65),P=c.n(B),A=(c(94),c(11));var F=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],d=Object(a.useState)(""),l=Object(r.a)(d,2),b=l[0],h=l[1],u=Object(A.f)().roomId,m=Object(a.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1],g=Object(a.useState)([]),S=Object(r.a)(g,2),C=S[0],y=S[1],w=I(),M=Object(r.a)(w,2),T=M[0].user;return M[1],Object(a.useEffect)((function(){u&&(N.collection("rooms").doc(u).onSnapshot((function(e){v(e.data().name)})),N.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){y(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(a.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[u]),Object(_.jsxs)("div",{className:"chat",children:[Object(_.jsxs)("div",{className:"chat_header",children:[Object(_.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(b,".svg")}),Object(_.jsxs)("div",{className:"chat_headerInfo",children:[Object(_.jsx)("h3",{className:"chat-room-name",children:f}),Object(_.jsxs)("p",{className:"chat-room-last-seen",children:["Last seen "," ",new Date(null===(e=C[C.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(_.jsxs)("div",{className:"chat_headerRight",children:[Object(_.jsx)(j.a,{children:Object(_.jsx)(O.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(E.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(D.a,{})})]})]}),Object(_.jsx)("div",{className:"chat_body",children:C.map((function(e){var t;return Object(_.jsxs)("p",{className:"chat_message ".concat(e.name===T.displayName&&"chat_receiver"),children:[Object(_.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(_.jsx)("span",{className:"chat_timestemp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(_.jsxs)("div",{className:"chat_footer",children:[Object(_.jsx)(P.a,{}),Object(_.jsxs)("form",{children:[Object(_.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(_.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),N.collection("rooms").doc(u).collection("messages").add({message:n,name:T.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),i("")},children:" Send a Message"})]}),Object(_.jsx)(k.a,{})]})]})},G=c(67),R=c(114),z=(c(95),c(51)),L="SET_USER",U=function(e,t){switch(t.type){case L:return Object(z.a)(Object(z.a)({},e),{},{user:t.user});default:return e}};var J=function(){var e=I(),t=Object(r.a)(e,2);Object(G.a)(t[0]);var c=t[1];return Object(_.jsx)("div",{className:"login",children:Object(_.jsxs)("div",{className:"login_container",children:[Object(_.jsx)("img",{src:"https://365psd.com/images/istock/previews/1063/106340965-chat-icon-vector-blue.jpg",alt:""}),Object(_.jsx)("div",{className:"login_text",children:Object(_.jsx)("h1",{children:"Sign in to OnCom"})}),Object(_.jsx)(R.a,{type:"submit",varient:"primary",onClick:function(){v.signInWithPopup(g).then((function(e){c({type:L,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})};var K=function(){var e=I(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(_.jsx)("div",{className:"app",children:c?Object(_.jsx)("div",{className:"app_body",children:Object(_.jsxs)(S.a,{children:[Object(_.jsx)(M,{}),Object(_.jsxs)(A.c,{children:[Object(_.jsx)(A.a,{path:"/rooms/:roomId",children:Object(_.jsx)(F,{})}),Object(_.jsx)(A.a,{path:"/",children:Object(_.jsx)(F,{})})]})]})}):Object(_.jsx)(J,{})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(w,{initialState:{user:null},reducer:U,children:Object(_.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[97,1,2]]]);
//# sourceMappingURL=main.be081c15.chunk.js.map