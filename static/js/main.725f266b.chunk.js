(this.webpackJsonpteamtracker=this.webpackJsonpteamtracker||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),s=(a(83),a(37)),o=a(16),j=(a(84),a(34)),l=a(57),d=a(4),m=a(119),u=a(28),b=a(137),f=a(120),h=a(122),O=a(123),x=a(127),g=a(51),p=a(126),v=a(124),T=a(65),w=a.n(T),S=a(66),y=a.n(S),N=a(67),k=a.n(N),C=a(128),H=a(129),B=a(136),F=a(125),E=a(2),L=240,P=Object(m.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(L,"px)"),marginLeft:L,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:L,flexShrink:0},drawerPaper:{width:L},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}}));function I(e){var t=e.stateHandler,a=e.homeHandler,i=P(),r=Object(u.a)(),c=Object(n.useState)(!1),s=Object(o.a)(c,2),l=s[0],m=s[1],T=function(){m(!1)};return Object(E.jsxs)("div",{className:i.root,children:[Object(E.jsx)(f.a,{}),Object(E.jsx)(h.a,{position:"fixed",className:Object(d.a)(i.appBar,Object(j.a)({},i.appBarShift,l)),children:Object(E.jsxs)(O.a,{children:[" ",Object(E.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){m(!0)},edge:"start",className:Object(d.a)(i.menuButton,l&&i.hide),children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(g.a,{className:i.title,variant:"h6",noWrap:!0,children:"Team Tracker"}),Object(E.jsxs)(B.a,{display:"flex",children:[" ",Object(E.jsx)(F.a,{color:"inherit",children:"Log Out"})]})]})}),Object(E.jsxs)(b.a,{className:i.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:i.drawerPaper},children:[Object(E.jsxs)("div",{className:i.drawerHeader,children:["Menu",Object(E.jsx)(v.a,{onClick:T,children:"ltr"===r.direction?Object(E.jsx)(y.a,{}):Object(E.jsx)(k.a,{})})]}),Object(E.jsx)(p.a,{}),Object(E.jsxs)(x.a,{onClick:T,children:[Object(E.jsx)(C.a,{onClick:a,button:!0,children:"Home"}),Object(E.jsx)(C.a,{onClick:t,button:!0,children:"Favorites"}),Object(E.jsx)(C.a,{button:!0,children:"LogOut"}),Object(E.jsx)(C.a,{button:!0})]}),Object(E.jsx)(p.a,{}),Object(E.jsx)(x.a,{children:Object(E.jsx)(C.a,{children:Object(E.jsx)(H.a,{})})})]}),Object(E.jsxs)("main",{className:Object(d.a)(i.content,Object(j.a)({},i.contentShift,l)),children:[Object(E.jsx)("div",{className:i.drawerHeader}),Object(E.jsx)(g.a,{paragraph:!0}),Object(E.jsx)(g.a,{paragraph:!0})]})]})}var M=a(130),D=a(131),J=a(132),R=a(133),W=a(134),A=Object(m.a)({root:{maxWidth:"auto"},media:{margin:"auto",height:"auto",width:200,padding:"10%"}}),G=function(e){var t=e.epl,a=e.showMe,n=A();return void 0===t?Object(E.jsx)("div",{}):Object(E.jsx)(M.a,{spacing:4,sx:{display:"grid",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:n.root,cols:1,children:t.map((function(e){return Object(E.jsxs)(M.a,{item:!0,xs:!0,children:[" ",Object(E.jsx)(D.a,{name:e.strTeam,onClick:a,value:e.strTeam,children:Object(E.jsxs)(J.a,{children:[Object(E.jsx)(R.a,{cursor:"pointer",name:e.strTeam,className:n.media,component:"img",image:e.strTeamBadge}),Object(E.jsx)(W.a,{name:e.strTeam,children:Object(E.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strTeam})})]})})]},e.strTeam)}))},"ok")},_=a(71),z=a(135),q=a(68),K=a.n(q),Q=a(69),U=a.n(Q),V=Object(m.a)({media:{height:"100%",width:275,margin:"auto"},title:{display:"flex"}}),X=Object(_.a)({palette:{primary:{main:"#f50057"}}}),Y=function(e){var t=e.filtered,a=e.toggle,i=e.favHandler,r=e.favorites,c=V();Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var s=Object(n.useState)("add to favorites"),j=Object(o.a)(s,2),l=j[0],d=j[1],m=Object(n.useState)(!1),u=Object(o.a)(m,2),b=u[0],f=u[1],h=function(){i(),d("added to favorites"),f(!0)};return Object(n.useEffect)((function(){if("object"===typeof t&&void 0!==r&&void 0!==r[0]&&!1===b)return r.map((function(e){return e.strTeam===t[0].strTeam?h():d("add to favorites")}))})),Object(E.jsxs)("div",{children:[Object(E.jsxs)(z.a,{theme:X,children:[" ",Object(E.jsx)(F.a,{disabled:b,name:t[0].strTeam,onClick:function(){h()},color:"primary",variant:"contained",startIcon:Object(E.jsx)(K.a,{}),children:l})]}),Object(E.jsx)(D.a,{name:t[0].strTeam,value:t[0].strTeam,children:Object(E.jsxs)(J.a,{children:[Object(E.jsx)(U.a,{className:c.title,fontSize:"large",onClick:a}),Object(E.jsx)(R.a,{cursor:"pointer",name:t[0].strTeam,className:c.media,component:"img",image:t[0].strTeamBadge}),Object(E.jsx)(W.a,{name:t[0].strTeam,children:Object(E.jsx)(g.a,{name:t[0].strDescriptionEN,align:"left",variant:"h5",color:"textPrimary",component:"p",children:t[0].strDescriptionEN})})]})})]})},Z=a(70),$=a.n(Z),ee=Object(m.a)({root:{maxWidth:"auto"},button:{height:"auto",justifyContent:"flex-start",alignItems:"flex-start"},title:{display:"flex"},media:{margin:"left",height:"auto",width:200}}),te=function(e){Object(n.useEffect)((function(){void 0!==e.favorites&&function(){var t=e.favorites.map((function(e){return e.idTeam})),a=[e.favorites.map((function(e){return e.strTeam})),t];fetch("http://localhost:3001/favorites",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(a)})}()}),[e.favorites]);var t=ee();return Object(E.jsx)(M.a,{children:void 0===e.favorites||e.favorites.length<1||null===e.favorites?Object(E.jsx)("div",{children:"Add teams to Favorites!"}):e.favorites.map((function(a){return Object(E.jsx)(M.a,{children:Object(E.jsxs)(D.a,{className:t.title,children:[Object(E.jsxs)(J.a,{children:[" ",Object(E.jsx)(R.a,{cursor:"pointer",name:a.strTeam,className:t.media,component:"img",image:a.strTeamBadge}),Object(E.jsx)(g.a,{align:"center",children:a.strTeam})]})," ",Object(E.jsxs)(x.a,{children:[Object(E.jsx)(C.a,{children:Object(E.jsx)(F.a,{variant:"outlined",align:"right",children:"Next Five Opponents"})}),Object(E.jsx)(C.a,{children:Object(E.jsx)(F.a,{variant:"outlined",align:"right",children:"Remove from Favorites"})}),Object(E.jsx)(C.a,{children:Object(E.jsx)(F.a,{onClick:function(){e.deleteHandler(a.strTeam)},align:"right",variant:"outlined",color:"secondary",startIcon:Object(E.jsx)($.a,{}),children:"Remove from Favorites"})})]})," "]},a)})}))})};var ae=function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),c=Object(o.a)(r,2),j=c[0],l=c[1],d=Object(n.useState)([]),m=Object(o.a)(d,2),u=m[0],b=m[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),O=h[0],x=h[1];Object(n.useEffect)((function(){fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League").then((function(e){return e.json()})).then((function(e){return b(e.teams)}))}),[]);var g=u.filter((function(e){return e.strTeam===a}));return Object(E.jsxs)("div",{className:"",children:[Object(E.jsx)(I,{stateHandler:function(){x(!0)},homeHandler:function(){x(!1),i(void 0)}}),void 0===a&&!1===O?Object(E.jsx)(G,{epl:u,showMe:function(e){void 0!==e.target.name&&e.target.name.length>0?i(e.target.name):i(void 0)}}):!0===O?Object(E.jsx)(te,{favorites:j,deleteHandler:function(e){var t=j.filter((function(t){return t.strTeam!==e}));l(t)}}):Object(E.jsx)(Y,{filtered:g,favorites:j,favHandler:function(e){l((function(e){if(void 0!==e){var t=e.filter((function(e){return e===a})),n=u.filter((function(e){return e.strTeam===a}));return t[0]===a?Object(s.a)(e):[].concat(Object(s.a)(n),Object(s.a)(e))}if(void 0===j){var i=u.filter((function(e){return e.strTeam===a}));return Object(s.a)(i)}}))},toggle:function(){i(void 0)}})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[91,1,2]]]);
//# sourceMappingURL=main.725f266b.chunk.js.map