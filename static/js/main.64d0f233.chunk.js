(this.webpackJsonpteamtracker=this.webpackJsonpteamtracker||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),i=a.n(r),o=(a(123),a(14)),s=a(12),l=(a(124),a(3)),j=a(78),d=a(5),u=a(6),m=a(21),b=a(198),h=a(184),O=a(202),p=a(203),f=a(208),g=a(205),x=a(207),v=a(204),w=a(91),T=a.n(w),y=a(92),S=a.n(y),k=a(93),C=a.n(k),N=a(196),B=a(209),I=a(213),R=a(206),L=a(2),P="nav",F={root:"".concat(P,"-root"),appBar:"".concat(P,"-appBar"),appBarShift:"".concat(P,"-appBarShift"),menuButton:"".concat(P,"-menuButton"),hide:"".concat(P,"-hide"),drawer:"".concat(P,"-drawer"),drawerPaper:"".concat(P,"-drawerPaper"),drawerHeader:"".concat(P,"-drawerHeader"),content:"".concat(P,"-content"),contentShift:"".concat(P,"-contentShift"),title:"".concat(P,"-title")},W=Object(d.a)("div")((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"&.".concat(F.root),{display:"flex"}),Object(l.a)(t,"& .".concat(F.appBar),{transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen})}),Object(l.a)(t,"& .".concat(F.appBarShift),{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}),Object(l.a)(t,"& .".concat(F.menuButton),{marginRight:a.spacing(2)}),Object(l.a)(t,"& .".concat(F.hide),{display:"none"}),Object(l.a)(t,"& .".concat(F.drawer),{width:E,flexShrink:0}),Object(l.a)(t,"& .".concat(F.drawerPaper),{width:E}),Object(l.a)(t,"& .".concat(F.drawerHeader),Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:a.spacing(0,1)},a.mixins.toolbar),{},{justifyContent:"flex-end"})),Object(l.a)(t,"& .".concat(F.content),{flexGrow:1,padding:a.spacing(3),transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),marginLeft:-E}),Object(l.a)(t,"& .".concat(F.contentShift),{transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen}),marginLeft:0}),Object(l.a)(t,"& .".concat(F.title),{flexGrow:1}),t})),E=240;function H(e){var t=e.logOut,a=e.route,c=e.setRoute,r=Object(m.a)(),i=Object(n.useState)(!1),o=Object(s.a)(i,2),j=o[0],d=o[1],w=function(){d(!1)};return Object(L.jsxs)(W,{className:F.root,children:[Object(L.jsx)(h.a,{}),"signIn"!==a&&"register"!==a?Object(L.jsxs)(O.a,{position:"fixed",className:Object(u.a)(F.appBar,Object(l.a)({},F.appBarShift,j)),children:[" ",Object(L.jsxs)(p.a,{children:[Object(L.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(u.a)(F.menuButton,j&&F.hide),size:"large",children:Object(L.jsx)(T.a,{})}),Object(L.jsx)(g.a,{className:F.title,variant:"h6",noWrap:!0,children:"Team Tracker"}),Object(L.jsxs)(I.a,{display:"flex",children:[" ",Object(L.jsx)(R.a,{onClick:function(){return t()},color:"inherit",children:"Log Out"})]})]})]}):Object(L.jsx)(O.a,{position:"fixed",className:Object(u.a)(F.appBar,Object(l.a)({},F.appBarShift,j))}),Object(L.jsxs)(b.a,{className:F.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:F.drawerPaper},children:[Object(L.jsxs)("div",{className:F.drawerHeader,children:["Menu",Object(L.jsx)(v.a,{onClick:w,size:"large",children:"ltr"===r.direction?Object(L.jsx)(S.a,{}):Object(L.jsx)(C.a,{})})]}),Object(L.jsx)(x.a,{}),Object(L.jsxs)(f.a,{onClick:w,children:[Object(L.jsx)(N.a,{onClick:function(){return c("home")},button:!0,children:"Home"}),Object(L.jsx)(N.a,{onClick:function(){c("favorites")},button:!0,children:"Favorites"}),Object(L.jsx)(N.a,{button:!0,onClick:function(){return t()},children:"LogOut"}),Object(L.jsx)(N.a,{button:!0})]}),Object(L.jsx)(x.a,{}),Object(L.jsx)(f.a,{children:Object(L.jsx)(N.a,{children:Object(L.jsx)(B.a,{})})})]}),Object(L.jsxs)("main",{className:Object(u.a)(F.content,Object(l.a)({},F.contentShift,j)),children:[Object(L.jsx)("div",{className:F.drawerHeader}),Object(L.jsx)(g.a,{paragraph:!0}),Object(L.jsx)(g.a,{paragraph:!0})]})]})}var D,J,z,G,A=a(199),M=a(214),q=a(215),U=a(216),_=a(217),V=a(45),K=a.n(V),Q={root:"".concat("EPL","-root"),media:"".concat("EPL","-media")},X=Object(d.a)("div")((D={},Object(l.a)(D,"& .".concat(Q.root),{maxWidth:"auto"}),Object(l.a)(D,"& .".concat(Q.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),D)),Y=function(e){var t=e.epl,a=e.showMe,n=e.setRoute;return void 0===t?Object(L.jsx)("div",{}):Object(L.jsx)(X,{children:Object(L.jsxs)("div",{children:[" ",Object(L.jsxs)(R.a,{sx:{pa:4},children:[Object(L.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home")}})," "]}),Object(L.jsxs)(A.a,{spacing:3,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(4, 1fr)",gap:4},container:!0,className:Q.root,cols:1,children:[" ",t.map((function(e){return Object(L.jsxs)(A.a,{item:!0,xs:!0,children:[" ",Object(L.jsx)(M.a,{name:e.strTeam,onClick:a,value:e.strTeam,children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(U.a,{cursor:"pointer",name:e.strTeam,className:Q.media,component:"img",image:e.strTeamBadge}),Object(L.jsx)(_.a,{name:e.strTeam,children:Object(L.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strTeam})})]})})]},e.strTeam)}))]},"ok")]})})},Z={root:"".concat("NFL","-root"),media:"".concat("NFL","-media")},$=Object(d.a)("div")((J={},Object(l.a)(J,"& .".concat(Z.root),{maxWidth:"auto"}),Object(l.a)(J,"& .".concat(Z.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),J)),ee=function(e){var t=e.nfl,a=e.showMe,n=e.setRoute;return void 0===t?Object(L.jsx)("div",{}):Object(L.jsx)($,{children:Object(L.jsxs)("div",{children:[" ",Object(L.jsxs)(R.a,{sx:{pa:4},children:[Object(L.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home"),console.log("click")}})," "]}),Object(L.jsxs)(A.a,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Z.root,cols:1,children:[" ",t.map((function(e){return Object(L.jsxs)(A.a,{item:!0,xs:!0,children:[" ",Object(L.jsx)(M.a,{name:e.strTeam,onClick:a,value:e.strTeam,children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(U.a,{cursor:"pointer",name:e.strTeam,className:Z.media,component:"img",image:e.strTeamBadge}),Object(L.jsx)(_.a,{name:e.strTeam,children:Object(L.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strTeam})})]})})]},e.strTeam)}))]},"ok")]})})},te=a(94),ae=a.n(te),ne="SingleTeam",ce={media:"".concat(ne,"-media"),title:"".concat(ne,"-title")},re=Object(d.a)("div")((z={},Object(l.a)(z,"& .".concat(ce.media),{height:"100%",width:275,margin:"auto"}),Object(l.a)(z,"& .".concat(ce.title),{display:"flex"}),z)),ie=function(e){var t=e.filtered,a=e.setRoute,c=e.favHandler,r=e.favorites;Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var i=Object(n.useState)("add to favorites"),o=Object(s.a)(i,2),l=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),m=u[0],b=u[1],h=function(){c(),j("added to favorites"),b(!0)};return Object(n.useEffect)((function(){if("object"===typeof t[0]&&void 0!==r&&void 0!==r[0]&&!1===m)return r.map((function(e){return e.strTeam===t[0].strTeam?h():j("add to favorites")}))})),Object(L.jsxs)(re,{children:[" ",Object(L.jsxs)("div",{children:[" ",Object(L.jsx)(R.a,{children:Object(L.jsx)(K.a,{className:ce.title,fontSize:"large",onClick:function(){return a(t[0].idLeague)}})})]}),Object(L.jsxs)(M.a,{name:t[0].strTeam,value:t[0].strTeam,children:[Object(L.jsx)(R.a,{disabled:m,name:t[0],onClick:function(){h()},color:"primary",variant:"contained",startIcon:Object(L.jsx)(ae.a,{}),children:l}),Object(L.jsxs)(q.a,{children:[Object(L.jsx)(U.a,{cursor:"pointer",name:t[0].strTeam,className:ce.media,component:"img",image:t[0].strTeamBadge}),Object(L.jsx)(_.a,{name:t[0].strTeam,children:Object(L.jsx)(g.a,{name:t[0].strDescriptionEN,align:"left",variant:"h5",color:"textPrimary",component:"p",children:t[0].strDescriptionEN})})]})]})]})},oe=a(98),se=a.n(oe),le=a(201),je=a(194),de=function(e){var t=e.nextGamePhoto,a=e.open,n=e.handleClose,c=e.description,r=Object(le.a)("div")((function(e){var t,a=e.theme;return t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%"},Object(l.a)(t,a.breakpoints.down("sm"),{width:"90%"}),Object(l.a)(t,"borderRadius",10),Object(l.a)(t,"boxShadow",24),t}));return Object(L.jsx)("div",{children:Object(L.jsx)(je.a,{open:a,onClose:n,children:Object(L.jsx)(r,{children:Object(L.jsx)(I.a,{sx:{},children:Object(L.jsxs)(M.a,{children:[Object(L.jsx)(U.a,{component:"img",image:t}),Object(L.jsx)(g.a,{style:{backgroundColor:"black"},variant:"h6",align:"center",color:"white",children:c.event})]})})})})})},ue="Favorites",me={root:"".concat(ue,"-root"),button:"".concat(ue,"-button"),title:"".concat(ue,"-title"),media:"".concat(ue,"-media")},be=Object(d.a)(A.a)((G={},Object(l.a)(G,"& .".concat(me.root),{maxWidth:"auto"}),Object(l.a)(G,"& .".concat(me.button),{height:"auto",justifyContent:"flex-start",alignItems:"flex-start"}),Object(l.a)(G,"& .".concat(me.title),{display:"flex"}),Object(l.a)(G,"& .".concat(me.media),{margin:"left",height:"auto",width:200}),G)),he=function(e){var t=e.favHandler,a=e.favorites,c=e.deleteHandler,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),O=h[0],p=h[1],x=function(){return p(!1)};Object(n.useEffect)((function(){t()}),[]);var v=function(e){fetch("https://leagueteamtracker.herokuapp.com/favorites/next",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){console.log(e),e.json()})).then((function(e){console.log(e),m({event:e.event,date:e.date}),l(e.pic)})).then((function(){return p(!0)})).catch((function(e){return console.log(e)}))};return Object(L.jsx)(be,{children:void 0===a||a.length<1||null===a?Object(L.jsx)("div",{children:"Add teams to Favorites!"}):a.map((function(e){return Object(L.jsx)(A.a,{children:Object(L.jsxs)(M.a,{className:me.title,children:[Object(L.jsxs)(q.a,{children:[" ",Object(L.jsx)(U.a,{cursor:"pointer",name:e.strteam,className:me.media,component:"img",image:e.strteambadge}),Object(L.jsx)(g.a,{align:"center",children:e.strteam})]})," ",Object(L.jsxs)(f.a,{children:[Object(L.jsxs)(N.a,{children:[Object(L.jsx)(de,{description:u,open:O,handleClose:x,nextGamePhoto:o}),Object(L.jsx)(R.a,{onClick:function(){return v(e.idteam)},variant:"outlined",align:"right",children:"Next Opponent"})]}),Object(L.jsx)(N.a,{}),Object(L.jsx)(N.a,{children:Object(L.jsx)(R.a,{onClick:function(){c(e.strteam)},align:"right",variant:"outlined",color:"secondary",startIcon:Object(L.jsx)(se.a,{}),children:"Remove from Favorites"})})]})," "]},e)},e.strteam)}))})},Oe=a(200),pe=a(193),fe=a(211),ge=a(66),xe=a.n(ge),ve=a(210),we="Login",Te={paper:"".concat(we,"-paper"),avatar:"".concat(we,"-avatar"),form:"".concat(we,"-form"),submit:"".concat(we,"-submit")},ye=Object(d.a)(ve.a)((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"& .".concat(Te.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(t,"& .".concat(Te.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(t,"& .".concat(Te.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(t,"& .".concat(Te.submit),{margin:a.spacing(3,0,2)}),t}));var Se=function(e){var t=e.setRoute,a=e.setGuest,c=e.setUserId,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=function(e){e.preventDefault();var a={email:o,password:u};fetch("https://leagueteamtracker.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){e.userid&&(t("home"),c(e.userid))})).catch((function(e){return console.log(e)}))};return Object(L.jsxs)(ye,{component:"main",maxWidth:"xs",children:[Object(L.jsx)(h.a,{}),Object(L.jsxs)("div",{className:Te.paper,children:[Object(L.jsx)(Oe.a,{className:Te.avatar,children:Object(L.jsx)(xe.a,{})}),Object(L.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(L.jsxs)("form",{className:Te.form,method:"post",noValidate:!0,onSubmit:b,children:[Object(L.jsx)(pe.a,{onChange:function(e){l(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(L.jsx)(pe.a,{onChange:function(e){m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(L.jsx)(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Te.submit,onClick:function(){return b},children:"Sign In"}),Object(L.jsx)(A.a,{container:!0,children:Object(L.jsx)(A.a,{onClick:function(){return t("register")},item:!0,children:Object(L.jsx)(fe.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),Object(L.jsx)(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Te.submit,onClick:function(){return console.log("click"),a(!0),void t("home")},children:"Sign in as guest"})]})]})},ke="Register",Ce={paper:"".concat(ke,"-paper"),avatar:"".concat(ke,"-avatar"),form:"".concat(ke,"-form"),submit:"".concat(ke,"-submit")},Ne=Object(d.a)(ve.a)((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"& .".concat(Ce.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(t,"& .".concat(Ce.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(t,"& .".concat(Ce.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(t,"& .".concat(Ce.submit),{margin:a.spacing(3,0,2)}),t}));var Be,Ie=function(e){var t=e.setRoute,a=(e.setGuest,e.setUserId),c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),d=j[0],u=j[1],m=Object(n.useState)(""),b=Object(s.a)(m,2),O=b[0],p=b[1],f=function(e){if(e.preventDefault(),!d||!i||!O)return console.log("incorrect");var n={email:i,password:d,name:O};fetch("https://leagueteamtracker.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.userid&&(t("home"),a(e.userid))})).catch((function(e){return console.log(e)}))};return Object(L.jsxs)(Ne,{component:"main",maxWidth:"xs",children:[Object(L.jsx)(h.a,{}),Object(L.jsxs)("div",{className:Ce.paper,children:[Object(L.jsx)(Oe.a,{className:Ce.avatar,children:Object(L.jsx)(xe.a,{})}),Object(L.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(L.jsxs)("form",{className:Ce.form,method:"post",noValidate:!0,onSubmit:f,children:[Object(L.jsx)(pe.a,{onChange:function(e){o(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(L.jsx)(pe.a,{onChange:function(e){u(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(L.jsx)(pe.a,{onChange:function(e){p(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"name",type:"name",id:"name"}),Object(L.jsx)(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ce.submit,onClick:function(){return f},children:"Register"})]}),Object(L.jsx)(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ce.submit,onClick:function(){return t("signIn")},children:"Sign in"})]})]})},Re="Leagues",Le={root:"".concat(Re,"-root"),media:"".concat(Re,"-media")},Pe=Object(d.a)(A.a)((Be={},Object(l.a)(Be,"&.".concat(Le.root),{maxWidth:"auto"}),Object(l.a)(Be,"& .".concat(Le.media),{margin:"auto",height:"auto",width:200,padding:10}),Be)),Fe=function(e){var t=e.all,a=e.setRoute;return void 0===t?Object(L.jsx)("div",{}):Object(L.jsx)(Pe,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Le.root,cols:1,children:t.map((function(e){return Object(L.jsx)(A.a,{item:!0,xs:!0,children:Object(L.jsx)(M.a,{name:e.strTeam,onClick:function(){return a(e.leagueId)},value:e.strTeam,children:Object(L.jsxs)(q.a,{children:[Object(L.jsx)(U.a,{cursor:"pointer",name:e.strTeam,className:Le.media,component:"img",image:e.strTeamBadge}),Object(L.jsx)(_.a,{name:e.strTeam,children:Object(L.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strTeam})})]})},e.strTeam)},e.leagueId)}))},"ok")},We=a(99),Ee=a(191),He=a(192),De=Object(We.a)();Object(Ee.a)((function(e){}));var Je=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)(void 0),u=Object(s.a)(d,2),m=u[0],b=u[1],h=Object(n.useState)("signIn"),O=Object(s.a)(h,2),p=O[0],f=O[1],g=Object(n.useState)([]),x=Object(s.a)(g,2),v=x[0],w=x[1],T=Object(n.useState)([]),y=Object(s.a)(T,2),S=y[0],k=y[1],C=Object(n.useState)([]),N=Object(s.a)(C,2),B=N[0],I=N[1];Object(n.useEffect)((function(){fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League").then((function(e){return e.json()})).then((function(e){return k(e.teams)})),fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL").then((function(e){return e.json()})).then((function(e){return I(e.teams)})).catch((function(e){return console.log(e)})),!1===l&&fetch("https://leagueteamtracker.herokuapp.com/favorites/id",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:a})}).then((function(e){return e.json()})).then((function(e){w(e)})).catch((function(e){return console.log(e)}))}),[a]),console.log(v,a,l,p);var R=function(e){void 0!==e&&e.target.name.length>0?(b(e.target.name),f("single")):b(void 0)},P=[].concat(Object(o.a)(S),Object(o.a)(B)).filter((function(e){return e.strTeam===m})),F=function(e){if(w((function(e){if(void 0!==e){var t=v.filter((function(e){return e.strTeam===m})),a=S.filter((function(e){return e.strTeam===m})),n=B.filter((function(e){return e.strTeam===m}));if(t.length>0)return console.log(t),console.log("first"),console.log(t),Object(o.a)(e);if(0===t.length)return console.log("second"),[].concat(Object(o.a)(n),Object(o.a)(a),Object(o.a)(e))}else if(void 0===v&&!1===l)return console.log("third"),Object(o.a)(e)})),void 0!==v&&v.length>0&&!1===l){var t=v.map((function(e){return e.idTeam})),n=v.map((function(e){return e.strTeam})),c=v.map((function(e){return e.strTeamBadge})),r=n.map((function(e,n){return{id:a,strTeam:e,idTeam:t[n],strTeamBadge:c[n]}}));console.log(r),fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})}};return Object(L.jsx)("div",{className:"",children:Object(L.jsxs)(He.a,{theme:De,children:[" ",Object(L.jsx)(H,{logOut:function(){j(!1),f("signIn"),c(),w([]),window.location.reload()},route:p,setRoute:f}),"home"===p?Object(L.jsx)(Fe,{all:[{league:"NFL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png",leagueId:"4391"},{league:"EPL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png",leagueId:"4328"}],setRoute:f}):"4391"===p?Object(L.jsx)(ee,{nfl:B,setRoute:f,showMe:R}):"4328"===p?Object(L.jsx)(Y,{epl:S,setRoute:f,showMe:R}):"favorites"===p?Object(L.jsx)(he,{favHandler:F,guest:l,favorites:v,deleteHandler:function(e){if(!1===l){var t={team:e,id:a},n=v.filter((function(t){return t.strTeam!==e}));fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"delete",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),w(n)}else{var c=v.filter((function(t){return t.strTeam!==e}));w(c)}}}):"single"===p?Object(L.jsx)(ie,{filtered:P,favorites:v,favHandler:F,setRoute:f}):"register"===p?Object(L.jsx)(Ie,{setUserId:c,setRoute:f}):Object(L.jsx)(Se,{theme:De,setUserId:c,setGuest:j,setRoute:f})]})})},ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(Je,{})}),document.getElementById("root")),ze()}},[[131,1,2]]]);
//# sourceMappingURL=main.64d0f233.chunk.js.map