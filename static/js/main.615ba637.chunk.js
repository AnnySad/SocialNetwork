(this.webpackJsonpuntitled3=this.webpackJsonpuntitled3||[]).push([[0],{113:function(e,t,n){e.exports={content:"tenor_content__aFHiD"}},114:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1pv1B"}},115:function(e,t,n){e.exports={item:"Post1_item__f7ha7"}},118:function(e,t,n){},12:function(e,t,n){e.exports={nav:"Navbar_nav__32qPF",item:"Navbar_item__3Qt17",activeLink:"Navbar_activeLink__2ovIU"}},120:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);n(118);var s=n(1),a=n.n(s),i=(n(120),n(12)),r=n.n(i),c=n(11),o=n(0),u=function(){return Object(o.jsxs)("nav",{className:r.a.nav,children:[Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/profile",activeClassName:r.a.activeLink,children:" Profile "})}),Object(o.jsx)("div",{className:"".concat(r.a.item," ").concat(r.a.active),children:Object(o.jsx)(c.b,{to:"/dialogs",activeClassName:r.a.activeLink,children:" Messages "})}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/news",activeClassName:r.a.activeLink,children:" News "})}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/music",activeClassName:r.a.activeLink,children:" Music "})}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/setting",activeClassName:r.a.activeLink,children:" Settings "})}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/users",activeClassName:r.a.activeLink,children:" Users "})}),Object(o.jsx)("div",{className:r.a.item,children:Object(o.jsx)(c.b,{to:"/login",activeClassName:r.a.activeLink,children:" Login "})})]})},l=n(9),d=function(e){return Object(o.jsx)("div",{children:"News"})},j=function(e){return Object(o.jsx)("div",{children:"Music"})},b=function(e){return Object(o.jsx)("div",{children:"Setting"})},p=n(22),h=n(23),O=n(25),g=n(24),f=n(10),m=n(37),x=n(3),v=n(112),S=n.n(v).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1b870066-a689-4dee-839d-63ffa07d2f22"}}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return S.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.warn("Obsolete method.Please profileAPI object"),w.getUserProfile(e)},C=function(e){return S.delete("follow/"+e).then((function(e){return e.data}))},y=function(e){return S.post("follow/"+e).then((function(e){return e.data}))},w={getUserProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"15350";return S.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return S.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return S.put("profile/status",{status:e}).then((function(e){return e.data}))}},N=function(){return S.get("auth/me")},k="FOLLOW",E="UNFOLLOW",I="SET-USERS",T="SET-CURRENT-PAGE",U="SET-TOTAL-USERS-COUNT",M="TOGGLE-IS-FETCHING",A="TOGGLE-FOLLOWING-PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:M,isFetching:e}},D=function(e,t){return{type:A,isFetching:e,userId:t}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(x.a)(Object(x.a)({},e),{},{followed:!0}):e}))});case E:return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(x.a)(Object(x.a)({},e),{},{followed:!1}):e}))});case I:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case T:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case U:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalCount});case M:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case A:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},R=n(30),G=n.n(R),z=n.p+"static/media/user.png.0fb29545.jpg",W=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:n.map((function(t){return Object(o.jsx)("span",{onClick:function(){e.onPageChanged(t)},className:t===e.currentPage?G.a.selectedPage:"",children:t})}))}),e.users.map((function(t){return Object(o.jsxs)("div",{className:G.a.userContainer,children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("div",{className:G.a.photo,children:Object(o.jsx)(c.b,{to:"/profile/"+t.id,children:Object(o.jsx)("img",{src:null!=t.photos.small?t.photos.small:z,alt:""})})}),Object(o.jsx)("div",{className:G.a.btnWrap,children:t.followed?Object(o.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:G.a.btnMode,onClick:function(){e.unFollow(t.id)},children:" Unfollow"}):Object(o.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:G.a.btnMode,onClick:function(){e.follow(t.id)},children:" Follow"})})]}),Object(o.jsxs)("span",{children:[Object(o.jsxs)("div",{className:G.a.userDescription,children:[Object(o.jsx)("h5",{children:t.name}),Object(o.jsx)("p",{children:t.status})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("div",{children:"u.location.country"}),Object(o.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},Y=n.p+"static/media/tenor.66e2f987.gif",H=n(113),q=n.n(H),Q=function(){return Object(o.jsx)("div",{className:q.a.content,children:Object(o.jsx)("img",{src:Y})})},J=function(e){return{isAuth:e.auth.isAuth}},K=function(e){var t=function(t){Object(O.a)(s,t);var n=Object(g.a)(s);function s(){return Object(p.a)(this,s),n.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(x.a)({},this.props)):Object(o.jsx)(l.a,{to:"/login"})}}]),s}(a.a.Component);return Object(f.b)(J)(t)},X=n(8),V=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[this.props.isFetching?Object(o.jsx)(Q,{}):null,Object(o.jsx)(W,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Z=Object(X.d)(K,Object(f.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{toggleFollowingProgress:D,setCurrentPage:function(e){return{type:T,currentPage:e}},follow:function(e){return function(t){t(D(!0,e)),y(e).then((function(n){0==n.resultCode&&t(function(e){return{type:k,userId:e}}(e)),t(D(!1,e))}))}},unFollow:function(e){return function(t){t(D(!0,e)),C(e).then((function(n){0==n.resultCode&&t(function(e){return{type:E,userId:e}}(e)),t(D(!1,e))}))}},getUsers:function(e,t){return function(n){n(L(!0)),_(e,t).then((function(e){var t,s;n(L(!1)),n((t=e.items,{type:I,users:t})),n((s=e.totalCount,{type:U,totalCount:s}))}))}}}))(V),$=n(114),ee=n.n($),te=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!e.state.editMode})},e.deactivateEditMode=function(){e.setState({editMode:!e.state.editMode}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[!this.state.editMode&&Object(o.jsx)("div",{children:Object(o.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"No status"})}),this.state.editMode&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{onChange:this.onStatusChange,type:"text",autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]})}}]),n}(a.a.Component),ne=function(e){return e.profile?Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:ee.a.descriptionBlock,children:[Object(o.jsx)("img",{src:e.profile.photos.large}),Object(o.jsx)(te,{status:e.status,updateStatus:e.updateStatus})]})}):Object(o.jsx)(Q,{})},se=n(78),ae=n.n(se),ie=n(115),re=n.n(ie),ce=function(e){return Object(o.jsxs)("div",{className:re.a.item,children:[Object(o.jsx)("img",{src:"https://cdn1.iconfinder.com/data/icons/ios-web-user-interface-hand-drawn-vol-1/512/338Big_emoji_face_happy_smile_smiley-512.png",alt:""}),e.message,Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Like"})," ",e.likesCount]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{children:"delete post"}),Object(o.jsx)("button",{children:e.id})]})]})},oe=n(247),ue=n(246),le=function(e){if(!e)return"Field is required"},de=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},je=n(56),be=n(54),pe=n.n(be),he=function(e){e.input;var t=e.meta,n=(e.child,e.element,Object(je.a)(e,["input","meta","child","element"])),s=t.touched&&t.error;return Object(o.jsxs)("div",{className:pe.a.formControl+" "+(s?pe.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),Object(o.jsx)("div",{children:s&&Object(o.jsx)("span",{className:pe.a.error,children:"some error"})})]})},Oe=function(e){var t=e.input,n=(e.meta,e.child,Object(je.a)(e,["input","meta","child"]));return Object(o.jsx)(he,Object(x.a)(Object(x.a)({},e),{},{children:Object(o.jsx)("textarea",Object(x.a)(Object(x.a)({},t),n))}))},ge=de(10),fe=Object(ue.a)({form:"post"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(oe.a,{component:Oe,name:"newPostText",placeholder:"Enter your text",validate:[le,ge]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Add post"})})]})})),me=function(e){var t=e.posts.map((function(e){return Object(o.jsx)(ce,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(o.jsxs)("div",{className:ae.a.postBlock,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsx)(fe,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(o.jsx)("div",{className:ae.a.posts,children:t})]})},xe={posts:[{id:1,message:"Hi, how are you?",likesCount:156},{id:2,message:"It's my first post",likesCount:20},{id:3,message:"BlaBla",likesCount:10},{id:4,message:"I am happy!",likesCount:90}],profile:null,status:""},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":Object(x.a)({},e);var n={id:e.posts[e.posts.length-1].id+1,message:t.newBodyPost,likesCount:0};return Object(x.a)(Object(x.a)({},e),{},{posts:[].concat(Object(m.a)(e.posts),[n])});case"REMOVE-POST":return Object(x.a)(Object(x.a)({},e),{},{posts:Object(x.a)({},e.posts)});case"SET-USER-PROFILE":return Object(x.a)(Object(x.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(x.a)(Object(x.a)({},e),{},{status:t.status});case"UPDATE-STATUS":return Object(x.a)(Object(x.a)({},e),{},{status:t.newStatus});default:return e}},Se=Object(f.b)((function(e){return Object(x.a)({},e.profilePage)}),(function(e){return{addPost:function(t){e({type:"ADD-POST",newBodyPost:t})}}}))(me),_e=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(ne,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(o.jsx)(Se,{})]})},Pe=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="15350"),this.props.getUserProfile(e),this.props.getStatus(Number(e))}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(_e,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),n}(a.a.Component),Ce=Object(X.d)(Object(f.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){P(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}},getStatus:function(e){return function(t){w.getStatus(e).then((function(e){t({type:"SET-STATUS",status:e})}))}},updateStatus:function(e){return function(t){w.updateStatus(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UPDATE-STATUS",newStatus:e}}(e))}))}}}),l.f,K)(Pe),ye=n(81),we=n.n(ye),Ne=function(e){return Object(o.jsxs)("header",{className:we.a.header,children:[Object(o.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGRPBfeIhYDR8QlaRPIbcUbBbeYupsOsUcQ&usqp=CAU",alt:""}),Object(o.jsx)("div",{className:we.a.loginBlock,children:e.auth.isAuth?e.auth.login:Object(o.jsx)(c.b,{to:"/login",children:"Login"})})]})},ke="SET_USER_DATA",Ee={id:null,email:null,login:null,isAuth:!1},Ie=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(o.jsx)(Ne,Object(x.a)({},this.props))}}]),n}(a.a.Component),Te=Object(f.b)((function(e){return{auth:e.auth}}),{getAuthUserData:function(){return function(e){N().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.login,i=n.email;e(function(e,t,n){return{type:ke,userId:e,email:t,login:n}}(s,a,i))}}))}}})(Ie),Ue=Object(ue.a)({form:"login"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(oe.a,{placeholder:"Login",name:"login",component:Oe,validate:[le]})}),Object(o.jsx)("div",{children:Object(o.jsx)(oe.a,{placeholder:"Password",name:"password",component:Oe,validate:[le]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(oe.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Log in"})})]})})),Me=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(Ue,{onSubmit:function(e){console.log(e)}})})},Ae=n(26),Fe=n.n(Ae),Le=function(e){var t="/dialogs/"+e.id;return Object(o.jsx)("div",{className:Fe.a.dialog+" "+Fe.a.active,children:Object(o.jsxs)(c.b,{to:t,children:[" ",e.name," "]})})},De=function(e){return Object(o.jsxs)("div",{className:Fe.a.massage,children:[" ",e.message]})},Be=de(50),Re=Object(ue.a)({form:"dialogAddMassageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(oe.a,{name:"newMessageBody",placeholder:"Enter your massage",component:Oe,validate:[le,Be]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})})),Ge=function(e){var t=e.dialogs.map((function(e){return Object(o.jsx)(Le,{name:e.name,id:e.id},e.id)})),n=e.messages.map((function(e){return Object(o.jsx)(De,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:Fe.a.dialogs,children:[Object(o.jsx)("div",{className:Fe.a.dialogsItem,children:t}),Object(o.jsx)("div",{className:Fe.a.massages,children:Object(o.jsx)("div",{children:n})}),Object(o.jsx)("div",{children:Object(o.jsx)(Re,{onSubmit:function(t){e.addMessageAC(t.newMessageBody)}})})]})},ze={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Fredy"},{id:3,name:"Nika"},{id:4,name:"Sonia"},{id:5,name:"Ray"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEXT-NEW-MESSAGE":var n=t.newMessageBody;return Object(x.a)(Object(x.a)({},e),{},{messages:[].concat(Object(m.a)(e.messages),[{id:6,message:n}])});default:return e}},Ye=Object(X.d)(Object(f.b)((function(e){return{dialogs:e.dialogsPage.dialogs,isAuth:e.auth.isAuth,messages:e.dialogsPage.messages}}),{addMessageAC:function(e){return{type:"TEXT-NEW-MESSAGE",newMessageBody:e}}}),K)(Ge),He=function(){return Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(Te,{}),Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"app-wrapper-content",children:[Object(o.jsx)(l.b,{path:"/dialogs",render:function(){return Object(o.jsx)(Ye,{})}}),Object(o.jsx)(l.b,{path:"/profile/:userId?",render:function(){return Object(o.jsx)(Ce,{})}}),Object(o.jsx)(l.b,{path:"/news",component:d}),Object(o.jsx)(l.b,{path:"/music",component:j}),Object(o.jsx)(l.b,{path:"/setting",component:b}),Object(o.jsx)(l.b,{path:"/users",render:function(){return Object(o.jsx)(Z,{})}}),Object(o.jsx)(l.b,{path:"/login",render:function(){return Object(o.jsx)(Me,{})}})]})]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},Qe={},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe;return e},Ke=n(117),Xe=n(248),Ve=Object(X.c)({profilePage:ve,dialogsPage:We,sidebar:Je,usersPage:B,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(x.a)(Object(x.a)({},e),{},{id:t.userId,email:t.email,login:t.login,isAuth:!0});default:return e}},form:Xe.a}),Ze=Object(X.e)(Ve,Object(X.a)(Ke.a)),$e=n(52);n.n($e).a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(f.a,{store:Ze,children:Object(o.jsx)(He,{})})}),document.getElementById("root")),qe()},26:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3JopZ",dialog:"Dialogs_dialog__2sWkh",dialogsItem:"Dialogs_dialogsItem__2nKwx",active:"Dialogs_active__r35ya",massages:"Dialogs_massages__irC8F",massage:"Dialogs_massage__2rizI"}},30:function(e,t,n){e.exports={userContainer:"users_userContainer__23y0q",userDescription:"users_userDescription__2k5uR",photo:"users_photo__keccs",selectedPage:"users_selectedPage__3Rn2e",btnWrap:"users_btnWrap__rrXiP",btnMode:"users_btnMode__1YS1R"}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__wIBbp",error:"FormsControls_error__fVdQ7"}},78:function(e,t,n){e.exports={postBlock:"MyPosts_postBlock__3nKPT",posts:"MyPosts_posts__2AnLT"}},81:function(e,t,n){e.exports={header:"Header_header__2Y2SZ",loginBlock:"Header_loginBlock__3xe43"}}},[[245,1,2]]]);
//# sourceMappingURL=main.615ba637.chunk.js.map