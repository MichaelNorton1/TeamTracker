(this.webpackJsonpteamtracker=this.webpackJsonpteamtracker||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),c=(a(74),a(32)),o=(a(75),a(29)),j=a(51),d=a(3),l=a(114),b=a(24),m=a(131),h=a(115),O=a(117),u=a(118),x=a(122),g=a(46),p=a(121),f=a(119),v=a(59),w=a.n(v),T=a(60),S=a.n(T),N=a(61),k=a.n(N),B=a(123),y=a(124),C=a(130),L=a(120),P=a(4),E=240,F=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:E,flexShrink:0},drawerPaper:{width:E},drawerHeader:Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}}));function H(){var e=F(),t=Object(b.a)(),a=Object(n.useState)(!1),i=Object(c.a)(a,2),r=i[0],s=i[1];return Object(P.jsxs)("div",{className:e.root,children:[Object(P.jsx)(h.a,{}),Object(P.jsx)(O.a,{position:"fixed",className:Object(d.a)(e.appBar,Object(o.a)({},e.appBarShift,r)),children:Object(P.jsxs)(u.a,{children:[" ",Object(P.jsx)(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(d.a)(e.menuButton,r&&e.hide),children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(g.a,{className:e.title,variant:"h6",noWrap:!0,children:"Team Tracker"}),Object(P.jsxs)(C.a,{display:"flex",children:[" ",Object(P.jsx)(L.a,{color:"inherit",children:"Login"})]})]})}),Object(P.jsxs)(m.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(P.jsxs)("div",{className:e.drawerHeader,children:["Menu",Object(P.jsx)(f.a,{onClick:function(){s(!1)},children:"ltr"===t.direction?Object(P.jsx)(S.a,{}):Object(P.jsx)(k.a,{})})]}),Object(P.jsx)(p.a,{}),Object(P.jsxs)(x.a,{children:[Object(P.jsx)(B.a,{button:!0,children:"Home"}),Object(P.jsx)(B.a,{button:!0,children:"Favorites"}),Object(P.jsx)(B.a,{button:!0,children:"LogOut"}),Object(P.jsx)(B.a,{button:!0})]}),Object(P.jsx)(p.a,{}),Object(P.jsx)(x.a,{children:Object(P.jsx)(B.a,{children:Object(P.jsx)(y.a,{})})})]}),Object(P.jsxs)("main",{className:Object(d.a)(e.content,Object(o.a)({},e.contentShift,r)),children:[Object(P.jsx)("div",{className:e.drawerHeader}),Object(P.jsx)(g.a,{paragraph:!0}),Object(P.jsx)(g.a,{paragraph:!0})]})]})}var M=a(125),D=a(126),I=a(127),G=a(128),J=a(129),W=Object(l.a)({root:{maxWidth:"auto"},media:{height:"100%",width:200,padding:"10%"}}),_=function(e){var t=e.epl,a=e.showMe,n=W();return void 0===t?Object(P.jsx)("div",{}):Object(P.jsx)(M.a,{spacing:4,container:!0,className:n.root,cols:4,children:t.map((function(e){return Object(P.jsxs)(M.a,{item:!0,xs:!0,children:[" ",Object(P.jsx)(D.a,{name:e.strTeam,onClick:a,value:e.strTeam,children:Object(P.jsxs)(I.a,{children:[Object(P.jsx)(G.a,{cursor:"pointer",name:e.strTeam,className:n.media,component:"img",image:e.strTeamBadge}),Object(P.jsx)(J.a,{name:e.strTeam,children:Object(P.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h5",color:"textPrimary",component:"p",children:e.strTeam})})]})})]},e.strTeam)}))},"ok")},z=a(62),R=a.n(z),q=Object(l.a)({media:{height:"100%",width:275}}),A=function(e){var t=e.filtered,a=e.toggle,n=q();return Object(P.jsx)("div",{children:Object(P.jsx)(D.a,{name:t[0].strTeam,value:t[0].strTeam,children:Object(P.jsxs)(I.a,{children:[Object(P.jsx)(R.a,{fontSize:"large",onClick:a}),Object(P.jsx)(G.a,{cursor:"pointer",name:t[0].strTeam,className:n.media,component:"img",image:t[0].strTeamBadge}),Object(P.jsx)(J.a,{name:t[0].strTeam,children:Object(P.jsx)(g.a,{name:t[0].strDescriptionEN,align:"center",variant:"h5",color:"textPrimary",component:"p",children:t[0].strDescriptionEN})})]})})})};var K=function(){var e=Object(n.useState)(void 0),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),s=Object(c.a)(r,2),o=s[0],j=s[1];Object(n.useEffect)((function(){fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League").then((function(e){return e.json()})).then((function(e){return j(e.teams)}))}),[]);var d=o.filter((function(e){return e.strTeam===a}));return Object(P.jsxs)("div",{className:"",children:[Object(P.jsx)(H,{}),void 0===a?Object(P.jsx)(_,{epl:o,showMe:function(e){void 0!==e.target.name&&e.target.name.length>0?i(e.target.name):i(void 0)}}):Object(P.jsx)(A,{filtered:d,toggle:function(){i(void 0)}})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(K,{})}),document.getElementById("root")),Q()}},[[82,1,2]]]);
//# sourceMappingURL=main.e93d743c.chunk.js.map