(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),i=a(117),s=a(115),l=a(116),u=a(16),m=a(7),A=a(8),E=a(10),p=a(9),h=a(11),g=a(49),f=a.n(g)()(),b=a(50),O=a.n(b),v=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,a=e.label,n=e.link;return r.a.createElement("div",{style:{display:"flex",marginTop:"5px"}},r.a.createElement(O.a,{icon:t,size:"22px"}),n?r.a.createElement("a",{style:{margin:"0 0 0 10px"},href:a||"#"},a||"none"):r.a.createElement("p",{style:{margin:"0 0 0 10px"}},a||"none"))}}]),t}(r.a.Component),y=a(21),I=a.n(y),j=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.user;return e.login?r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,style:{width:"250px",height:"250px",borderRadius:"15px"},alt:"avatar"}),r.a.createElement("h2",{className:"nullMargin",name:"name"},e.name),r.a.createElement("p",{className:"nullMargin",name:"login"},e.login),r.a.createElement("p",{style:{width:"250px"},name:"bio"},e.bio),r.a.createElement("hr",{style:{width:"250px",marginLeft:0}}),r.a.createElement(v,{icon:"how_to_reg",label:e.company,link:!1}),r.a.createElement(v,{icon:"location_on",label:e.location,link:!1}),r.a.createElement(v,{icon:"alternate_email",label:e.email,link:!0}),r.a.createElement(v,{icon:"link",label:e.blog,link:!0})):r.a.createElement("img",{style:{margin:"0 auto",display:"block"},src:I.a,alt:"loading"})}}]),t}(r.a.Component),d=a(20),L=a(3),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a.customNavItem=function(e,t){return r.a.createElement(L.f,{key:t},r.a.createElement(L.g,{active:a.state.activeTab===t,onClick:function(){return a.toggle(t)}},e))},a.customTabPane=function(e){return r.a.createElement(L.j,{key:e,tabId:e,style:{height:"100%"}},r.a.createElement(L.h,{style:{margin:"20px 0 20px 0"}},r.a.createElement(L.b,null,r.a.createElement(L.d,{className:"float-right",check:!0},r.a.createElement(L.c,{type:"checkbox"})," ","Edit"))),r.a.createElement(L.h,{style:{height:"80%"}},r.a.createElement(L.c,{type:"textarea"})))},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={activeTab:0},a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(L.e,{tabs:!0},this.props.tabs.map(function(t,a){return e.customNavItem(t,a)})),r.a.createElement(L.i,{activeTab:this.state.activeTab,style:{height:"100%"}},this.props.tabs.map(function(t,a){return e.customTabPane(a)})))}}]),t}(r.a.Component),C=a(22),k=a.n(C),S={FETCH_USER:"FETCH_USER",FETCH_USER_REPOSITORIES:"FETCH_USER_REPOSITORIES",FETCH_USER_FOLLOWERS:"FETCH_USER_FOLLOWERS",FETCH_USER_ORGS:"FETCH_USER_ORGS",FETCH_USER_FAILED:"FETCH_USER_FAILED"},x=function(){return{type:S.FETCH_USER_FAILED}},z=function(e){return function(t){return k.a.get("https://api.github.com/users/".concat(e)).then(function(e){return t((a=e.data,{type:S.FETCH_USER,payload:a}));var a}).catch(function(e){console.log(e),t(x())})}},B=function(e){return function(t){return k.a.get("https://api.github.com/users/".concat(e,"/followers")).then(function(e){return t((a=e.data,{type:S.FETCH_USER_FOLLOWERS,payload:a}));var a}).catch(function(e){console.log(e),t(x())})}},T=function(e){return function(t){return k.a.get("https://api.github.com/users/".concat(e,"/repos")).then(function(e){return t((a=e.data,{type:S.FETCH_USER_REPOSITORIES,payload:a}));var a}).catch(function(e){console.log(e),t(x())})}},w=function(e){return function(t){return k.a.get("https://api.github.com/users/".concat(e,"/orgs")).then(function(e){return t((a=e.data,{type:S.FETCH_USER_ORGS,payload:a}));var a}).catch(function(e){console.log(e),t(x())})}},F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).props.fetchUser("gaearon"),a.props.fetchUserOrgs("gaearon"),a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(L.h,{className:"col-sm-11",style:{display:"flex",margin:"20px auto 20px auto"}},r.a.createElement(L.b,{sm:{size:12}},r.a.createElement(L.a,{className:"float-right",size:"lg",color:"primary",onClick:function(e){return f.push("/anotherPage")}},"Page Repositories and Followers")),r.a.createElement(L.b,{sm:{size:12},md:{size:"auto"},hd:{size:3}},r.a.createElement(j,{user:this.props.user})),r.a.createElement(L.b,{sm:{size:12},md:{size:8},hd:{size:9},style:{margin:"0 auto 0 auto"}},r.a.createElement(q,{tabs:["Main","Education","Contacts"]})))}}]),t}(r.a.Component),Q=Object(u.b)(function(e){return{user:e.userInfo}},function(e){return{fetchUser:function(t){return e(z(t))},fetchUserOrgs:function(t){return e(w(t))}}})(F),U=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).customListItem=function(e,t){return r.a.createElement("ul",{className:"list=group mb-3",key:e},r.a.createElement("li",{className:"list-group-item"},"ID: ",e),r.a.createElement("li",{className:"list-group-item"},"Login: ",t))},a.props.fetchUserFollowers("gaearon"),a.props.fetchUserRepositories("gaearon"),a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return r.a.createElement(L.h,{className:"col-sm-11",style:{display:"flex",margin:"20px auto 20px auto"}},r.a.createElement(L.b,{sm:{size:12}},r.a.createElement(L.a,{className:"float-right",size:"lg",color:"primary",onClick:function(e){return f.push("/")}},"Home Page")),r.a.createElement(L.b,{sm:{size:6}},r.a.createElement("h2",null,"Followers:"),0!==t.followers.length?t.followers.map(function(t){return e.customListItem(t.id,t.login)}):r.a.createElement("img",{style:{margin:"0 auto",display:"block"},src:I.a,alt:"loading"})),r.a.createElement(L.b,{sm:{size:6}},r.a.createElement("h2",null,"Repositories:"),0!==t.repositories.length?t.repositories.map(function(t){return e.customListItem(t.id,t.full_name)}):r.a.createElement("img",{style:{margin:"0 auto",display:"block"},src:I.a,alt:"loading"})))}}]),t}(r.a.Component),K=Object(u.b)(function(e){return{user:e.userInfo}},function(e){return{fetchUserFollowers:function(t){return e(B(t))},fetchUserRepositories:function(t){return e(T(t))}}})(U),R=a(14),D=a(17),P={avatar:null,login:"",name:"",bio:"",company:"",location:"",email:"",blog:"",orgs:[],followers:[],repositories:[],error:!1},G=Object(R.c)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.FETCH_USER:var a=t.payload,n=a.avatar_url,r=a.login,o=a.name,c=a.bio,i=a.company,s=a.location,l=a.email,u=a.blog;return Object(D.a)({},e,{avatar:n,login:r,name:o,bio:c,company:i,location:s,email:l,blog:u,error:!1});case S.FETCH_USER_FOLLOWERS:return Object(D.a)({},e,{followers:t.payload,error:!1});case S.FETCH_USER_REPOSITORIES:return Object(D.a)({},e,{repositories:t.payload,error:!1});case S.FETCH_USER_ORGS:return Object(D.a)({},e,{orgs:t.payload,error:!1});case S.FETCH_USER_FAILED:return Object(D.a)({},e,{error:!0});default:return e}}}),H=a(52),J=Object(R.d)(G,Object(R.a)(H.a));a(108),a(110);c.a.render(r.a.createElement(u.a,{store:J},r.a.createElement(i.a,{history:f},r.a.createElement(s.a,null,r.a.createElement(l.a,{exact:!0,string:!0,path:"/",component:Q}),r.a.createElement(l.a,{exact:!0,string:!0,path:"/anotherPage",component:K})))),document.getElementById("root"))},21:function(e,t){e.exports="data:image/gif;base64,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"},54:function(e,t,a){e.exports=a(113)}},[[54,2,1]]]);
//# sourceMappingURL=main.0c2e4a6e.chunk.js.map