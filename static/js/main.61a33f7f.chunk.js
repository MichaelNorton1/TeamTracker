(this.webpackJsonpteamtracker=this.webpackJsonpteamtracker||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),i=a.n(r),o=(a(123),a(15)),s=a(12),l=(a(124),a(3)),j=a(78),d=a(5),u=a(6),m=a(21),b=a(198),h=a(184),O=a(202),p=a(203),f=a(208),g=a(205),x=a(207),v=a(204),w=a(91),S=a.n(w),y=a(92),C=a.n(y),k=a(93),N=a.n(k),T=a(196),B=a(209),I=a(213),L=a(206),R=a(2),P="nav",F={root:"".concat(P,"-root"),appBar:"".concat(P,"-appBar"),appBarShift:"".concat(P,"-appBarShift"),menuButton:"".concat(P,"-menuButton"),hide:"".concat(P,"-hide"),drawer:"".concat(P,"-drawer"),drawerPaper:"".concat(P,"-drawerPaper"),drawerHeader:"".concat(P,"-drawerHeader"),content:"".concat(P,"-content"),contentShift:"".concat(P,"-contentShift"),title:"".concat(P,"-title")},W=Object(d.a)("div")((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"&.".concat(F.root),{display:"flex"}),Object(l.a)(t,"& .".concat(F.appBar),{transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen})}),Object(l.a)(t,"& .".concat(F.appBarShift),{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}),Object(l.a)(t,"& .".concat(F.menuButton),{marginRight:a.spacing(2)}),Object(l.a)(t,"& .".concat(F.hide),{display:"none"}),Object(l.a)(t,"& .".concat(F.drawer),{width:E,flexShrink:0}),Object(l.a)(t,"& .".concat(F.drawerPaper),{width:E}),Object(l.a)(t,"& .".concat(F.drawerHeader),Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:a.spacing(0,1)},a.mixins.toolbar),{},{justifyContent:"flex-end"})),Object(l.a)(t,"& .".concat(F.content),{flexGrow:1,padding:a.spacing(3),transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),marginLeft:-E}),Object(l.a)(t,"& .".concat(F.contentShift),{transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen}),marginLeft:0}),Object(l.a)(t,"& .".concat(F.title),{flexGrow:1}),t})),E=240;function H(e){var t=e.logOut,a=e.route,c=e.setRoute,r=Object(m.a)(),i=Object(n.useState)(!1),o=Object(s.a)(i,2),j=o[0],d=o[1],w=function(){d(!1)};return Object(R.jsxs)(W,{className:F.root,children:[Object(R.jsx)(h.a,{}),"signIn"!==a&&"register"!==a?Object(R.jsxs)(O.a,{position:"fixed",className:Object(u.a)(F.appBar,Object(l.a)({},F.appBarShift,j)),children:[" ",Object(R.jsxs)(p.a,{children:[Object(R.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(u.a)(F.menuButton,j&&F.hide),size:"large",children:Object(R.jsx)(S.a,{})}),Object(R.jsx)(g.a,{className:F.title,variant:"h6",noWrap:!0,children:"Team Tracker"}),Object(R.jsxs)(I.a,{display:"flex",children:[" ",Object(R.jsx)(L.a,{onClick:function(){return t()},color:"inherit",children:"Log Out"})]})]})]}):Object(R.jsx)(O.a,{position:"fixed",className:Object(u.a)(F.appBar,Object(l.a)({},F.appBarShift,j))}),Object(R.jsxs)(b.a,{className:F.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:F.drawerPaper},children:[Object(R.jsxs)("div",{className:F.drawerHeader,children:["Menu",Object(R.jsx)(v.a,{onClick:w,size:"large",children:"ltr"===r.direction?Object(R.jsx)(C.a,{}):Object(R.jsx)(N.a,{})})]}),Object(R.jsx)(x.a,{}),Object(R.jsxs)(f.a,{onClick:w,children:[Object(R.jsx)(T.a,{onClick:function(){return c("home")},button:!0,children:"Home"}),Object(R.jsx)(T.a,{onClick:function(){c("favorites")},button:!0,children:"Favorites"}),Object(R.jsx)(T.a,{button:!0,onClick:function(){return t()},children:"LogOut"}),Object(R.jsx)(T.a,{button:!0})]}),Object(R.jsx)(x.a,{}),Object(R.jsx)(f.a,{children:Object(R.jsx)(T.a,{children:Object(R.jsx)(B.a,{})})})]}),Object(R.jsxs)("main",{className:Object(u.a)(F.content,Object(l.a)({},F.contentShift,j)),children:[Object(R.jsx)("div",{className:F.drawerHeader}),Object(R.jsx)(g.a,{paragraph:!0}),Object(R.jsx)(g.a,{paragraph:!0})]})]})}var J,D,z,G,A=a(199),M=a(214),q=a(215),U=a(216),_=a(217),V=a(45),K=a.n(V),Q={root:"".concat("EPL","-root"),media:"".concat("EPL","-media")},X=Object(d.a)("div")((J={},Object(l.a)(J,"& .".concat(Q.root),{maxWidth:"auto"}),Object(l.a)(J,"& .".concat(Q.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),J)),Y=function(e){var t=e.epl,a=e.showMe,n=e.setRoute;return void 0===t?Object(R.jsx)("div",{}):Object(R.jsx)(X,{children:Object(R.jsxs)("div",{children:[" ",Object(R.jsxs)(L.a,{sx:{pa:4},children:[Object(R.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home")}})," "]}),Object(R.jsxs)(A.a,{spacing:3,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(4, 1fr)",gap:4},container:!0,className:Q.root,cols:1,children:[" ",t.map((function(e){return Object(R.jsxs)(A.a,{item:!0,xs:!0,children:[" ",Object(R.jsx)(M.a,{name:e.strteam,onClick:a,value:e.strteam,children:Object(R.jsxs)(q.a,{children:[Object(R.jsx)(U.a,{cursor:"pointer",name:e.strteam,className:Q.media,component:"img",image:e.strteambadge}),Object(R.jsx)(_.a,{name:e.strteam,children:Object(R.jsx)(g.a,{name:e.strteam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strteam})})]})})]},e.strteam)}))]},"ok")]})})},Z={root:"".concat("NFL","-root"),media:"".concat("NFL","-media")},$=Object(d.a)("div")((D={},Object(l.a)(D,"& .".concat(Z.root),{maxWidth:"auto"}),Object(l.a)(D,"& .".concat(Z.media),{margin:"auto",height:"auto",width:200,padding:"10%"}),D)),ee=function(e){var t=e.nfl,a=e.showMe,n=e.setRoute;return void 0===t?Object(R.jsx)("div",{}):Object(R.jsx)($,{children:Object(R.jsxs)("div",{children:[" ",Object(R.jsxs)(L.a,{sx:{pa:4},children:[Object(R.jsx)(K.a,{fontSize:"large",sx:{fontSize:40},onClick:function(){n("home"),console.log("click")}})," "]}),Object(R.jsxs)(A.a,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Z.root,cols:1,children:[" ",t.map((function(e){return Object(R.jsxs)(A.a,{item:!0,xs:!0,children:[" ",Object(R.jsx)(M.a,{name:e.strteam,onClick:a,value:e.strteam,children:Object(R.jsxs)(q.a,{children:[Object(R.jsx)(U.a,{cursor:"pointer",name:e.strteam,className:Z.media,component:"img",image:e.strteambadge}),Object(R.jsx)(_.a,{name:e.strteam,children:Object(R.jsx)(g.a,{name:e.strteam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strteam})})]})})]},e.strteam)}))]},"ok")]})})},te=a(94),ae=a.n(te),ne="SingleTeam",ce={media:"".concat(ne,"-media"),title:"".concat(ne,"-title")},re=Object(d.a)("div")((z={},Object(l.a)(z,"& .".concat(ce.media),{height:"100%",width:275,margin:"auto"}),Object(l.a)(z,"& .".concat(ce.title),{display:"flex"}),z)),ie=function(e){var t=e.filtered,a=e.setRoute,c=e.favHandler,r=e.favorites;Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var i=Object(n.useState)("add to favorites"),o=Object(s.a)(i,2),l=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),m=u[0],b=u[1],h=function(){c(),j("added to favorites"),b(!0)};return Object(n.useEffect)((function(){if("object"===typeof t[0]&&void 0!==r&&void 0!==r[0]&&!1===m)return r.map((function(e){return e.strteam===t[0].strteam?h():j("add to favorites")}))})),Object(R.jsxs)(re,{children:[" ",Object(R.jsxs)("div",{children:[" ",Object(R.jsx)(L.a,{children:Object(R.jsx)(K.a,{className:ce.title,fontSize:"large",onClick:function(){return a(t[0].idleague)}})})]}),Object(R.jsxs)(M.a,{name:t[0].strteam,value:t[0].strteam,children:[Object(R.jsx)(L.a,{disabled:m,name:t[0],onClick:function(){h()},color:"primary",variant:"contained",startIcon:Object(R.jsx)(ae.a,{}),children:l}),Object(R.jsxs)(q.a,{children:[Object(R.jsx)(U.a,{cursor:"pointer",name:t[0].strteam,className:ce.media,component:"img",image:t[0].strteambadge}),Object(R.jsx)(_.a,{name:t[0].strteam,children:Object(R.jsx)(g.a,{name:t[0].strDescriptionEN,align:"left",variant:"h5",color:"textPrimary",component:"p",children:t[0].strDescriptionEN})})]})]})]})},oe=a(98),se=a.n(oe),le=a(201),je=a(194),de=function(e){var t=e.nextGamePhoto,a=e.open,n=e.handleClose,c=e.description,r=Object(le.a)("div")((function(e){var t,a=e.theme;return t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%"},Object(l.a)(t,a.breakpoints.down("sm"),{width:"90%"}),Object(l.a)(t,"borderRadius",10),Object(l.a)(t,"boxShadow",24),t}));return Object(R.jsx)("div",{children:Object(R.jsx)(je.a,{open:a,onClose:n,children:Object(R.jsx)(r,{children:Object(R.jsx)(I.a,{sx:{},children:Object(R.jsxs)(M.a,{children:[Object(R.jsx)(U.a,{component:"img",image:t}),Object(R.jsx)(g.a,{style:{backgroundColor:"black"},variant:"h6",align:"center",color:"white",children:c.event})]})})})})})},ue="Favorites",me={root:"".concat(ue,"-root"),button:"".concat(ue,"-button"),title:"".concat(ue,"-title"),media:"".concat(ue,"-media")},be=Object(d.a)(A.a)((G={},Object(l.a)(G,"& .".concat(me.root),{maxWidth:"auto"}),Object(l.a)(G,"& .".concat(me.button),{height:"auto",justifyContent:"flex-start",alignItems:"flex-start"}),Object(l.a)(G,"& .".concat(me.title),{display:"flex"}),Object(l.a)(G,"& .".concat(me.media),{margin:"left",height:"auto",width:200}),G)),he=function(e){var t=e.favHandler,a=e.favorites,c=e.deleteHandler,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),O=h[0],p=h[1],x=function(){return p(!1)};Object(n.useEffect)((function(){t()}),[]);var v=function(e){fetch("https://leagueteamtracker.herokuapp.com/favorites/next",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),m({event:e.event,date:e.date}),l(e.pic)})).then((function(){return p(!0)})).catch((function(e){return console.log(e)}))};return Object(R.jsx)(be,{children:void 0===a||a.length<1||null===a?Object(R.jsx)("div",{children:"Add teams to Favorites!"}):a.map((function(e){return Object(R.jsx)(A.a,{children:Object(R.jsxs)(M.a,{className:me.title,children:[Object(R.jsxs)(q.a,{children:[" ",Object(R.jsx)(U.a,{cursor:"pointer",name:e.strteam,className:me.media,component:"img",image:e.strteambadge}),Object(R.jsx)(g.a,{align:"center",children:e.strteam})]})," ",Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(T.a,{children:[Object(R.jsx)(de,{description:u,open:O,handleClose:x,nextGamePhoto:o}),Object(R.jsx)(L.a,{onClick:function(){return v(e.idteam)},variant:"outlined",align:"right",children:"Next Opponent"})]}),Object(R.jsx)(T.a,{}),Object(R.jsx)(T.a,{children:Object(R.jsx)(L.a,{onClick:function(){c(e.strteam)},align:"right",variant:"outlined",color:"secondary",startIcon:Object(R.jsx)(se.a,{}),children:"Remove from Favorites"})})]})," "]},e)},e.strteam)}))})},Oe=a(200),pe=a(193),fe=a(211),ge=a(66),xe=a.n(ge),ve=a(210),we="Login",Se={paper:"".concat(we,"-paper"),avatar:"".concat(we,"-avatar"),form:"".concat(we,"-form"),submit:"".concat(we,"-submit")},ye=Object(d.a)(ve.a)((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"& .".concat(Se.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(t,"& .".concat(Se.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(t,"& .".concat(Se.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(t,"& .".concat(Se.submit),{margin:a.spacing(3,0,2)}),t}));var Ce=function(e){var t=e.setRoute,a=e.setGuest,c=e.setUserId,r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),u=d[0],m=d[1],b=function(e){e.preventDefault();var a={email:o,password:u};fetch("https://leagueteamtracker.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){e.userid&&(t("home"),c(e.userid))})).catch((function(e){return console.log(e)}))};return Object(R.jsxs)(ye,{component:"main",maxWidth:"xs",children:[Object(R.jsx)(h.a,{}),Object(R.jsxs)("div",{className:Se.paper,children:[Object(R.jsx)(Oe.a,{className:Se.avatar,children:Object(R.jsx)(xe.a,{})}),Object(R.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(R.jsxs)("form",{className:Se.form,method:"post",noValidate:!0,onSubmit:b,children:[Object(R.jsx)(pe.a,{onChange:function(e){l(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(R.jsx)(pe.a,{onChange:function(e){m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(R.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Se.submit,onClick:function(){return b},children:"Sign In"}),Object(R.jsx)(A.a,{container:!0,children:Object(R.jsx)(A.a,{onClick:function(){return t("register")},item:!0,children:Object(R.jsx)(fe.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),Object(R.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Se.submit,onClick:function(){return console.log("click"),a(!0),void t("home")},children:"Sign in as guest"})]})]})},ke="Register",Ne={paper:"".concat(ke,"-paper"),avatar:"".concat(ke,"-avatar"),form:"".concat(ke,"-form"),submit:"".concat(ke,"-submit")},Te=Object(d.a)(ve.a)((function(e){var t,a=e.theme;return t={},Object(l.a)(t,"& .".concat(Ne.paper),{marginTop:a.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}),Object(l.a)(t,"& .".concat(Ne.avatar),{margin:a.spacing(1),backgroundColor:a.palette.secondary.main}),Object(l.a)(t,"& .".concat(Ne.form),{width:"100%",marginTop:a.spacing(1)}),Object(l.a)(t,"& .".concat(Ne.submit),{margin:a.spacing(3,0,2)}),t}));var Be,Ie=function(e){var t=e.setRoute,a=(e.setGuest,e.setUserId),c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),d=j[0],u=j[1],m=Object(n.useState)(""),b=Object(s.a)(m,2),O=b[0],p=b[1],f=function(e){if(e.preventDefault(),!d||!i||!O)return console.log("incorrect");var n={email:i,password:d,name:O};fetch("https://leagueteamtracker.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.userid&&(t("home"),a(e.userid))})).catch((function(e){return console.log(e)}))};return Object(R.jsxs)(Te,{component:"main",maxWidth:"xs",children:[Object(R.jsx)(h.a,{}),Object(R.jsxs)("div",{className:Ne.paper,children:[Object(R.jsx)(Oe.a,{className:Ne.avatar,children:Object(R.jsx)(xe.a,{})}),Object(R.jsx)(g.a,{component:"h1",variant:"h5",children:"Team Tracker"}),Object(R.jsxs)("form",{className:Ne.form,method:"post",noValidate:!0,onSubmit:f,children:[Object(R.jsx)(pe.a,{onChange:function(e){o(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(R.jsx)(pe.a,{onChange:function(e){u(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(R.jsx)(pe.a,{onChange:function(e){p(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"name",type:"name",id:"name"}),Object(R.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ne.submit,onClick:function(){return f},children:"Register"})]}),Object(R.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:Ne.submit,onClick:function(){return t("signIn")},children:"Sign in"})]})]})},Le="Leagues",Re={root:"".concat(Le,"-root"),media:"".concat(Le,"-media")},Pe=Object(d.a)(A.a)((Be={},Object(l.a)(Be,"&.".concat(Re.root),{maxWidth:"auto"}),Object(l.a)(Be,"& .".concat(Re.media),{margin:"auto",height:"auto",width:200,padding:10}),Be)),Fe=function(e){var t=e.all,a=e.setRoute;return void 0===t?Object(R.jsx)("div",{}):Object(R.jsx)(Pe,{spacing:4,sx:{display:"flex",gridAutoFlow:"row",gridTemplateColumns:"repeat(5, 1fr)",gap:4},container:!0,className:Re.root,cols:1,children:t.map((function(e){return Object(R.jsx)(A.a,{item:!0,xs:!0,children:Object(R.jsx)(M.a,{name:e.strTeam,onClick:function(){return a(e.leagueId)},value:e.strTeam,children:Object(R.jsxs)(q.a,{children:[Object(R.jsx)(U.a,{cursor:"pointer",name:e.strTeam,className:Re.media,component:"img",image:e.strTeamBadge}),Object(R.jsx)(_.a,{name:e.strTeam,children:Object(R.jsx)(g.a,{name:e.strTeam,align:"center",variant:"h6",color:"textPrimary",component:"p",children:e.strTeam})})]})},e.strTeam)},e.leagueId)}))},"ok")},We=a(99),Ee=a(191),He=a(192),Je=Object(We.a)();Object(Ee.a)((function(e){}));var De=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)(void 0),u=Object(s.a)(d,2),m=u[0],b=u[1],h=Object(n.useState)("signIn"),O=Object(s.a)(h,2),p=O[0],f=O[1],g=Object(n.useState)([]),x=Object(s.a)(g,2),v=x[0],w=x[1],S=Object(n.useState)([]),y=Object(s.a)(S,2),C=y[0],k=y[1],N=Object(n.useState)([]),T=Object(s.a)(N,2),B=T[0],I=T[1];Object(n.useEffect)((function(){fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League").then((function(e){return e.json()})).then((function(e){var t=JSON.stringify(e),a=JSON.parse(t.toLowerCase());k(a.teams)})),fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL").then((function(e){return e.json()})).then((function(e){var t=JSON.stringify(e),a=JSON.parse(t.toLowerCase());I(a.teams)})).catch((function(e){return console.log(e)})),!1===l&&fetch("https://leagueteamtracker.herokuapp.com/favorites/id",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:a})}).then((function(e){e.json()})).then((function(e){if(void 0===e)w([]);else{console.log(e);e.forEach((function(e){console.log(e)}))}})).catch((function(e){return console.log(e)}))}),[a]),console.log(v,a,l,p);var L=function(e){void 0!==e&&e.target.name.length>0?(b(e.target.name),f("single")):b(void 0)},P=[].concat(Object(o.a)(C),Object(o.a)(B)).filter((function(e){return e.strteam===m})),F=function(e){if(w((function(e){if(void 0!==e){var t=v.filter((function(e){return e.strteam===m})),a=C.filter((function(e){return e.strteam===m})),n=B.filter((function(e){return e.strteam===m}));if(t.length>0)return console.log(t),console.log("first"),console.log(t),Object(o.a)(e);if(0===t.length)return console.log("second"),[].concat(Object(o.a)(n),Object(o.a)(a),Object(o.a)(e))}else if(void 0===v&&!1===l)return console.log("third"),[e]})),void 0!==v&&v.length>0&&!1===l){var t=v.map((function(e){return e.idteam})),n=v.map((function(e){return e.strteam})),c=v.map((function(e){return e.strteamBadge})),r=n.map((function(e,n){return{id:a,strTeam:e,idTeam:t[n],strTeamBadge:c[n]}}));console.log(r),fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})}};return Object(R.jsx)("div",{className:"",children:Object(R.jsxs)(He.a,{theme:Je,children:[" ",Object(R.jsx)(H,{logOut:function(){j(!1),f("signIn"),c(),w([]),window.location.reload()},route:p,setRoute:f}),"home"===p?Object(R.jsx)(Fe,{all:[{league:"NFL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png",leagueId:"4391"},{league:"EPL",strTeamBadge:"https://www.thesportsdb.com/images/media/league/badge/pdd43f1610891709.png",leagueId:"4328"}],setRoute:f}):"4391"===p?Object(R.jsx)(ee,{nfl:B,setRoute:f,showMe:L}):"4328"===p?Object(R.jsx)(Y,{epl:C,setRoute:f,showMe:L}):"favorites"===p?Object(R.jsx)(he,{favHandler:F,guest:l,favorites:v,deleteHandler:function(e){if(!1===l){var t={team:e,id:a},n=v.filter((function(t){return t.strteam!==e}));fetch("https://leagueteamtracker.herokuapp.com/favorites",{method:"delete",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),w(n)}else{var c=v.filter((function(t){return t.strteam!==e}));w(c)}}}):"single"===p?Object(R.jsx)(ie,{filtered:P,favorites:v,favHandler:F,setRoute:f}):"register"===p?Object(R.jsx)(Ie,{setUserId:c,setRoute:f}):Object(R.jsx)(Ce,{theme:Je,setUserId:c,setGuest:j,setRoute:f})]})})},ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(De,{})}),document.getElementById("root")),ze()}},[[131,1,2]]]);
//# sourceMappingURL=main.61a33f7f.chunk.js.map