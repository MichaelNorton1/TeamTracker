(this.webpackJsonpteamtracker=this.webpackJsonpteamtracker||[]).push([[0],{125:function(t,e,a){},126:function(t,e,a){},133:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(38),i=a.n(r),o=(a(125),a(14)),s=a(11),l=(a(126),a(3)),j=a(79),d=a(5),u=a(6),m=a(21),b=a(200),h=a(186),O=a(204),p=a(205),f=a(210),g=a(207),x=a(209),v=a(206),w=a(93),S=a.n(w),C=a(94),y=a.n(C),k=a(95),N=a.n(k),T=a(198),L=a(211),R=a(216),F=a(208),I=a(2),B="nav",P={root:"".concat(B,"-root"),appBar:"".concat(B,"-appBar"),appBarShift:"".concat(B,"-appBarShift"),menuButton:"".concat(B,"-menuButton"),hide:"".concat(B,"-hide"),drawer:"".concat(B,"-drawer"),drawerPaper:"".concat(B,"-drawerPaper"),drawerHeader:"".concat(B,"-drawerHeader"),content:"".concat(B,"-content"),contentShift:"".concat(B,"-contentShift"),title:"".concat(B,"-title")},E=Object(d.a)("div")((function(t){var e,a=t.theme;return e={},Object(l.a)(e,"&.".concat(P.root),{display:"flex"}),Object(l.a)(e,"& .".concat(P.appBar),{transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen})}),Object(l.a)(e,"& .".concat(P.appBarShift),{width:"calc(100% - ".concat(W,"px)"),marginLeft:W,transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}),Object(l.a)(e,"& .".concat(P.menuButton),{marginRight:a.spacing(2)}),Object(l.a)(e,"& .".concat(P.hide),{display:"none"}),Object(l.a)(e,"& .".concat(P.drawer),{width:W,flexShrink:0}),Object(l.a)(e,"& .".concat(P.drawerPaper),{width:W}),Object(l.a)(e,"& .".concat(P.drawerHeader),Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:a.spacing(0,1)},a.mixins.toolbar),{},{justifyContent:"flex-end"})),Object(l.a)(e,"& .".concat(P.content),{flexGrow:1,padding:a.spacing(3),transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),marginLeft:-W}),Object(l.a)(e,"& .".concat(P.contentShift),{transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen}),marginLeft:0}),Object(l.a)(e,"& .".concat(P.title),{flexGrow:1}),e})),W=240;function J(t){var e=t.logOut,a=t.route,c=t.setRoute,r=Object(m.a)(),i=Object(n.useState)(!1),o=Object(s.a)(i,2),j=o[0],d=o[1],w=function(){d(!1)};return Object(I.jsxs)(E,{className:P.root,children:[Object(I.jsx)(h.a,{}),"signIn"!==a&&"register"!==a?Object(I.jsxs)(O.a,{position:"fixed",className:Object(u.a)(P.appBar,Object(l.a)({},P.appBarShift,j)),children:[" ",Object(I.jsxs)(p.a,{children:[Object(I.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(u.a)(P.menuButton,j&&P.hide),size:"large",children:Object(I.jsx)(S.a,{})}),Object(I.jsx)(g.a,{className:P.title,variant:"h6",noWrap:!0,children:"Team Tracker"}),Object(I.jsxs)(R.a,{display:"flex",children:[" ",Object(I.jsx)(F.a,{onClick:function(){return e()},color:"inherit",children:"Log Out"})]})]})]}):Object(I.jsx)(O.a,{position:"fixed",className:Object(u.a)(P.appBar,Object(l.a)({},P.appBarShift,j))}),Object(I.jsxs)(b.a,{className:P.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:P.drawerPaper},children:[Object(I.jsxs)("div",{className:P.drawerHeader,children:["Menu",Object(I.jsx)(v.a,{onClick:w,size:"large",children:"ltr"===r.direction?Object(I.jsx)(y.a,{}):Object(I.jsx)(N.a,{})})]}),Object(I.jsx)(x.a,{}),Object(I.jsxs)(f.a,{onClick:w,children:[Object(I.jsx)(T.a,{onClick:function(){return c("home")},button:!0,children:"Home"}),Object(I.jsx)(T.a,{onClick:function(){c("favorites")},button:!0,children:"Favorites"}),Object(I.jsx)(T.a,{button:!0,onClick:function(){return e()},children:"LogOut"}),Object(I.jsx)(T.a,{button:!0})]}),Object(I.jsx)(x.a,{}),Object(I.jsx)(f.a,{children:Object(I.jsx)(T.a,{children:Object(I.jsx)(L.a,{})})})]}),Object(I.jsxs)("main",{className:Object(u.a)(P.content,Object(l.a)({},P.contentShift,j)),children:[Object(I.jsx)("div",{className:P.drawerHeader}),Object(I.jsx)(g.a,{paragraph:!0}),Object(I.jsx)(g.a,{paragraph:!0})]})]})}var H,D,A,z,U=a(201),G=a(217),M=a(218),q=a(219),_=a(220),V=a(46),K=a.n(V),Q={root:"".concat("EPL","-root"),media:"".concat("EPL","-media")},X=Object(d.a)("div")((H={},Object(l.a)(H,"& .".concat(Q.root),{maxWidth:"auto"}),Object(l.a)(H,"& .".concat(Q.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),H)),Y=function(t){var e=t.epl,a=t.showMe,n=t.setRoute,c=t.setTeam;return void 0===e||e.length<1?Object(I.jsx)("div",{children:"Looks like something went wrong. "}):Object(I.jsx)(X,{children:Object(I.jsxs)("div",{children:[" ",Object(I.jsxs)(F.a,{sx:{pa:4},children:[Object(I.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home")}})," "]}),Object(I.jsxs)(U.a,{spacing:3,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(4, 1fr)",gap:4},container:!0,className:Q.root,cols:1,children:[" ",e.map((function(t){return Object(I.jsxs)(U.a,{item:!0,xs:!0,children:[" ",Object(I.jsx)(G.a,{name:t.strteam,onClick:function(){var e;e=t.strteam,c(e),a()},value:t.strteam,children:Object(I.jsxs)(M.a,{children:[Object(I.jsx)(q.a,{cursor:"pointer",id:t.strteam,className:Q.media,component:"img",image:t.strteambadge}),Object(I.jsx)(_.a,{name:t.strteam,children:Object(I.jsx)(g.a,{id:t.strteam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:t.strteam.toUpperCase()})})]})})]},t.strteam)}))]},"ok")]})})},Z={root:"".concat("NFL","-root"),media:"".concat("NFL","-media")},$=Object(d.a)("div")((D={},Object(l.a)(D,"& .".concat(Z.root),{maxWidth:"auto"}),Object(l.a)(D,"& .".concat(Z.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),D)),tt=function(t){var e=t.nfl,a=t.showMe,n=t.setRoute,c=t.setTeam;return void 0===e||e.length<1?Object(I.jsx)("div",{children:"Looks like something went wrong ."}):Object(I.jsx)($,{children:Object(I.jsxs)("div",{children:[" ",Object(I.jsxs)(F.a,{sx:{pa:4},children:[Object(I.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home")}})," "]}),Object(I.jsxs)(U.a,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Z.root,cols:1,children:[" ",e.map((function(t){return Object(I.jsxs)(U.a,{item:!0,xs:!0,children:[" ",Object(I.jsx)(G.a,{name:t.strteam,onClick:function(){return e=t.strteam,c(e),void a();var e},value:t.strteam,children:Object(I.jsxs)(M.a,{children:[Object(I.jsx)(q.a,{cursor:"pointer",name:t.strteam,className:Z.media,component:"img",image:t.strteambadge}),Object(I.jsx)(_.a,{name:t.strteam,children:Object(I.jsx)(g.a,{name:t.strteam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:t.strteam.toUpperCase()})})]})})]},t.strteam)}))]},"ok")]})})},et=a(96),at=a.n(et),nt="SingleTeam",ct={media:"".concat(nt,"-media"),title:"".concat(nt,"-title")},rt=Object(d.a)("div")((A={},Object(l.a)(A,"& .".concat(ct.media),{height:"100%",width:275,margin:"auto"}),Object(l.a)(A,"& .".concat(ct.title),{display:"flex"}),A)),it=function(t){var e=t.filtered,a=t.setRoute,c=t.favHandler,r=t.descriptions;Object(n.useEffect)((function(){h(),window.scrollTo(0,0)}),[]);var i=Object(n.useState)("add to favorites"),o=Object(s.a)(i,2),l=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),m=u[0],b=u[1],h=function(){var t="";return r.forEach((function(a){var n=a.team.toLowerCase();e[0].strteam===n&&(t=a.description)})),t};return Object(I.jsxs)(rt,{children:[" ",Object(I.jsxs)("div",{children:[" ",Object(I.jsx)(F.a,{children:Object(I.jsx)(K.a,{className:ct.title,fontSize:"large",onClick:function(){return a(e[0].idleague)}})})]}),Object(I.jsxs)(G.a,{name:e[0].strteam,value:e[0].strteam,children:[Object(I.jsx)(F.a,{disabled:m,name:e[0],onClick:function(){var t;t=e[0].strteam,c(t),j("added to favorites"),b(!0)},color:"primary",variant:"contained",startIcon:Object(I.jsx)(at.a,{}),children:l}),Object(I.jsxs)(M.a,{children:[Object(I.jsx)(q.a,{cursor:"pointer",name:e[0].strteam,className:ct.media,component:"img",image:e[0].strteambadge}),Object(I.jsx)(_.a,{name:e[0].strteam,children:Object(I.jsx)(g.a,{name:e[0].strDescriptionEN,align:"left",variant:"h5",color:"textPrimary",component:"p",children:h()})})]})]})]})},ot=a(212),st=a(100),lt=a.n(st),jt=a(203),dt=a(196),ut=function(t){var e=t.nextGamePhoto,a=t.open,n=t.handleClose,c=t.description,r=Object(jt.a)("div")((function(t){var e,a=t.theme;return e={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%"},Object(l.a)(e,a.breakpoints.down("sm"),{width:"90%"}),Object(l.a)(e,"borderRadius",10),Object(l.a)(e,"boxShadow",24),e}));return Object(I.jsx)("div",{children:Object(I.jsx)(dt.a,{open:a,onClose:n,children:Object(I.jsx)(r,{children:Object(I.jsx)(R.a,{sx:{},children:Object(I.jsxs)(G.a,{children:[Object(I.jsx)(q.a,{component:"img",image:e}),Object(I.jsx)(g.a,{style:{backgroundColor:"black"},variant:"h6",align:"center",color:"white",children:c.event})]})})})})})},mt="Favorites",bt={root:"".concat(mt,"-root"),button:"".concat(mt,"-button"),title:"".concat(mt,"-title"),media:"".concat(mt,"-media")},ht=Object(d.a)(U.a)((z={},Object(l.a)(z,"& .".concat(bt.root),{maxWidth:"auto"}),Object(l.a)(z,"& .".concat(bt.button),{height:"auto",justifyContent:"flex-start",alignItems:"flex-start"}),Object(l.a)(z,"& .".concat(bt.title),{display:"flex"}),Object(l.a)(z,"& .".concat(bt.media),{margin:"left",height:"auto",width:200}),z)),Ot=function(t){var e=t.sendFavs,a=t.favorites,c=t.deleteHandler,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),O=h[0],p=h[1],x=Object(n.useState)(!1),v=Object(s.a)(x,2),w=v[0],S=v[1],C=function(){return p(!1)};Object(n.useEffect)((function(){e()}),[]);var y=function(t){S(!0),fetch("https://leagueteamtracker.herokuapp.com/favorites/next",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:t})}).then((function(t){return t.json()})).then((function(t){m({event:t.event,date:t.date}),l(t.pic)})).then((function(){p(!0),S(!1)})).catch((function(t){return console.log(t)}))};return Object(I.jsx)(ht,{children:void 0===a||a.length<1||null===a?Object(I.jsx)("div",{children:"Add teams to Favorites!"}):a.map((function(t){return Object(I.jsx)(U.a,{children:Object(I.jsxs)(G.a,{className:bt.title,children:[Object(I.jsxs)(M.a,{children:[" ",Object(I.jsx)(q.a,{cursor:"pointer",name:t.strteam,className:bt.media,component:"img",image:t.strteambadge}),Object(I.jsx)(g.a,{align:"center"})]})," ",Object(I.jsxs)(f.a,{children:[Object(I.jsxs)(T.a,{children:[Object(I.jsx)(ut,{description:u,open:O,handleClose:C,nextGamePhoto:o}),Object(I.jsx)(F.a,{onClick:function(){return y(t.idteam)},variant:"outlined",align:"right",children:w?Object(I.jsx)(ot.a,{}):"Next Opponent"})]}),Object(I.jsx)(T.a,{}),Object(I.jsx)(T.a,{children:Object(I.jsx)(F.a,{onClick:function(){c(t.strteam)},align:"right",variant:"outlined",color:"secondary",startIcon:Object(I.jsx)(lt.a,{}),children:"Remove from Favorites"})})]})," "]},t)},t.strteam)}))})},pt=a(202),ft=a(195),gt=a(214),xt=a(67),vt=a.n(xt),wt=a(213),St="Login",Ct={paper:"".concat(St,"-paper"),avatar:"".concat(St,"-avatar"),form:"".concat(St,"-form"),submit:"".concat(St,"-submit")},yt=Object(d.a)(wt.a)((function(t){var e,a=t.theme;return e={},Object(l.a)(e,"& .".concat(Ct.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(e,"& .".concat(Ct.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(e,"& .".concat(Ct.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(e,"& .".concat(Ct.submit),{margin:a.spacing(3,0,2)}),e}));var kt=function(t){var e=t.setRoute,a=t.setGuest,c=t.setUserId,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=Object(n.useState)(!1),O=Object(s.a)(b,2),p=O[0],f=O[1],x=function(t){if(t.preventDefault(),f(!0),!u||!o)return f(!1),alert("Please enter correct information");var a={email:o.toLowerCase(),password:u};fetch("https://leagueteamtracker.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(t){console.log(t),t.userid?(f(!1),e("home"),c(t.userid)):f(!1)})).catch((function(t){f(!1),console.log(t)}))};return Object(I.jsxs)(yt,{component:"main",maxWidth:"xs",children:[Object(I.jsx)(h.a,{}),Object(I.jsxs)("div",{className:Ct.paper,children:[Object(I.jsx)(pt.a,{className:Ct.avatar,children:Object(I.jsx)(vt.a,{})}),Object(I.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(I.jsxs)("form",{className:Ct.form,method:"post",noValidate:!0,onSubmit:x,children:[Object(I.jsx)(ft.a,{onChange:function(t){l(t.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(I.jsx)(ft.a,{onChange:function(t){m(t.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),p?Object(I.jsxs)(R.a,{sx:{textAlign:"center"},children:[" ",Object(I.jsx)(ot.a,{sx:{}})]}):Object(I.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ct.submit,onClick:function(){return x},children:"Sign In"}),Object(I.jsx)(U.a,{container:!0,children:Object(I.jsx)(U.a,{onClick:function(){return e("register")},item:!0,children:Object(I.jsx)(gt.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),Object(I.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ct.submit,onClick:function(){return a(!0),void e("home")},children:"Sign in as guest"})]})]})},Nt="Register",Tt={paper:"".concat(Nt,"-paper"),avatar:"".concat(Nt,"-avatar"),form:"".concat(Nt,"-form"),submit:"".concat(Nt,"-submit")},Lt=Object(d.a)(wt.a)((function(t){var e,a=t.theme;return e={},Object(l.a)(e,"& .".concat(Tt.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(e,"& .".concat(Tt.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(e,"& .".concat(Tt.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(e,"& .".concat(Tt.submit),{margin:a.spacing(3,0,2)}),e}));var Rt,Ft=function(t){var e=t.setRoute,a=t.setUserId,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),d=j[0],u=j[1],m=Object(n.useState)(""),b=Object(s.a)(m,2),O=b[0],p=b[1],f=Object(n.useState)(!1),x=Object(s.a)(f,2),v=x[0],w=x[1],S=function(t){if(t.preventDefault(),w(!0),!d||!i||!O)return w(!1),alert("Entries are not valid");var n=i.toLowerCase();console.log(n);var c={email:n,password:d,name:O};fetch("https://leagueteamtracker.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(c)}).then((function(t){return t.json()})).then((function(t){console.log(t),t.userid?(w(!1),e("home"),a(t.userid)):w(!1)})).catch((function(t){w(!1),console.log(t)}))};return Object(I.jsxs)(Lt,{component:"main",maxWidth:"xs",children:[Object(I.jsx)(h.a,{}),Object(I.jsxs)("div",{className:Tt.paper,children:[Object(I.jsx)(pt.a,{className:Tt.avatar,children:Object(I.jsx)(vt.a,{})}),Object(I.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(I.jsxs)("form",{className:Tt.form,method:"post",noValidate:!0,onSubmit:S,children:[Object(I.jsx)(ft.a,{onChange:function(t){o(t.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(I.jsx)(ft.a,{onChange:function(t){u(t.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(I.jsx)(ft.a,{onChange:function(t){p(t.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"name",type:"name",id:"name"}),v?Object(I.jsxs)(R.a,{sx:{textAlign:"center"},children:[" ",Object(I.jsx)(ot.a,{})]}):Object(I.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Tt.submit,onClick:function(){return S},children:"Register"})]}),Object(I.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Tt.submit,onClick:function(){return e("signIn")},children:"Sign in"})]})]})},It="Leagues",Bt={root:"".concat(It,"-root"),media:"".concat(It,"-media")},Pt=Object(d.a)(U.a)((Rt={},Object(l.a)(Rt,"&.".concat(Bt.root),{maxWidth:"auto"}),Object(l.a)(Rt,"& .".concat(Bt.media),{margin:"auto",height:"auto",width:200,padding:10}),Rt)),Et=function(t){var e=t.all,a=t.setRoute,c=t.sendFavs;return Object(n.useEffect)((function(){c()}),[]),void 0===e?Object(I.jsx)("div",{}):Object(I.jsx)(Pt,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Bt.root,cols:1,children:e.map((function(t){return Object(I.jsx)(U.a,{item:!0,xs:!0,children:Object(I.jsx)(G.a,{name:t.strTeam,onClick:function(){return a(t.leagueId)},value:t.strTeam,children:Object(I.jsxs)(M.a,{children:[Object(I.jsx)(q.a,{cursor:"pointer",name:t.strTeam,className:Bt.media,component:"img",image:t.strTeamBadge}),Object(I.jsx)(_.a,{name:t.strTeam,children:Object(I.jsx)(g.a,{name:t.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:t.strTeam})})]})},t.strTeam)},t.leagueId)}))},"ok")},Wt=a(101),Jt=a(193),Ht=a(194),Dt=Object(Wt.a)();Object(Jt.a)((function(t){}));var At=function(){var t=Object(n.useState)(),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)(void 0),u=Object(s.a)(d,2),m=u[0],b=u[1],h=Object(n.useState)("signIn"),O=Object(s.a)(h,2),p=O[0],f=O[1],g=Object(n.useState)([]),x=Object(s.a)(g,2),v=x[0],w=x[1],S=Object(n.useState)([]),C=Object(s.a)(S,2),y=C[0],k=C[1],N=Object(n.useState)([]),T=Object(s.a)(N,2),L=T[0],R=T[1],F=Object(n.useState)([]),B=Object(s.a)(F,2),P=B[0],E=B[1],W=Object(n.useState)([]),H=Object(s.a)(W,2),D=H[0],A=H[1];Object(n.useEffect)((function(){fetch("https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=4328").then((function(t){return t.json()})).then((function(t){var e=t.teams,a=e.map((function(t){return t.strTeam})),n=e.map((function(t){return t.strDescriptionEN})),c=a.map((function(t,e){return{team:t,description:n[e]}})),r=JSON.stringify(t),i=JSON.parse(r.toLowerCase());E(c),k(i.teams)})).catch((function(t){return console.log(t)})),fetch("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=NFL").then((function(t){return t.json()})).then((function(t){var e=t.teams,a=e.map((function(t){return t.strTeam})),n=e.map((function(t){return t.strDescriptionEN})),c=a.map((function(t,e){return{team:t,description:n[e]}}));A(c);var r=JSON.stringify(t),i=JSON.parse(r.toLowerCase());R(i.teams)})).catch((function(t){return console.log(t)})),!1===l&&"home"===p&&fetch("https://leagueteamtracker.herokuapp.com/favorites/id",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:a})}).then((function(t){return t.json()})).then((function(t){w(void 0===t?[]:t)})).catch((function(t){return console.log(t)}))}),[a]);var z=[].concat(Object(o.a)(P),Object(o.a)(D)),U=[].concat(Object(o.a)(y),Object(o.a)(L)).filter((function(t){return t.strteam===m})),G=function(){U.length>0&&f("single")},M=function(t){w((function(e){var a=e.filter((function(e){return e.strteam===t})),n=y.filter((function(e){return e.strteam===t})),c=L.filter((function(e){return e.strteam===t}));return 0===a.length?[].concat(Object(o.a)(n),Object(o.a)(c),Object(o.a)(e)):Object(o.a)(e)}))},q=function(){if(!1===l){var t=v.map((function(t){return t.idteam})),e=v.map((function(t){return t.strteam})),n=v.map((function(t){return t.strteambadge})),c=e.map((function(e,c){return{id:a,strTeam:e,idTeam:t[c],strTeamBadge:n[c]}}));fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(c)}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return t}),"ERROR")}};return Object(I.jsx)("div",{className:"",children:Object(I.jsxs)(Ht.a,{theme:Dt,children:[" ",Object(I.jsx)(J,{logOut:function(){j(!1),f("signIn"),c(),w([]),window.location.reload()},route:p,setRoute:f}),"home"===p?Object(I.jsx)(Et,{all:[{league:"NFL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png",leagueId:"4391"},{league:"EPL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png",leagueId:"4328"}],sendFavs:q,setRoute:f}):"4391"===p?Object(I.jsx)(tt,{nfl:L,setRoute:f,setTeam:b,showMe:G}):"4328"===p?Object(I.jsx)(Y,{epl:y,setRoute:f,setTeam:b,showMe:G}):"favorites"===p?Object(I.jsx)(Ot,{sendFavs:q,favHandler:M,guest:l,favorites:v,deleteHandler:function(t){if(!1===l){var e={team:t,id:a},n=v.filter((function(e){return e.strteam!==t}));fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"delete",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){return t})),w(n)}else{var c=v.filter((function(e){return e.strteam!==t}));w(c)}}}):"single"===p?Object(I.jsx)(it,{descriptions:z,filtered:U,favHandler:M,setRoute:f}):"register"===p?Object(I.jsx)(Ft,{setUserId:c,setRoute:f}):Object(I.jsx)(kt,{theme:Dt,setUserId:c,setGuest:j,setRoute:f})]})})},zt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,222)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),r(t),i(t)}))};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(At,{})}),document.getElementById("root")),zt()}},[[133,1,2]]]);
//# sourceMappingURL=main.bba326c5.chunk.js.map