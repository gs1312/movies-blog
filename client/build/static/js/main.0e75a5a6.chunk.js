(this["webpackJsonpmovies-blog"]=this["webpackJsonpmovies-blog"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/index.15677061.jpeg"},32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=(a(37),a(4)),i=a(5),m=a(7),u=a(6),s=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"title"},"Login"),l.a.createElement("div",{className:"items"},l.a.createElement("form",{action:"",method:"post",id:"login"},l.a.createElement("input",{type:"email",id:"form-text",placeholder:"Email"}),l.a.createElement("input",{type:"password",id:"form-password",placeholder:"Password"})),l.a.createElement("button",{form:"login",id:"button"},"Sign In"),l.a.createElement("a",{id:"sign",type:"submit",href:"#"},"Sign Up"))))}}]),a}(n.Component),p=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"title"},"Sign Up"),l.a.createElement("div",{className:"items"},l.a.createElement("form",{action:"",method:"post",id:"signup"},l.a.createElement("input",{type:"text",id:"form-text",placeholder:"Full Name"}),l.a.createElement("input",{type:"email",id:"form-text",placeholder:"Email"}),l.a.createElement("input",{type:"password",id:"form-password",placeholder:"Password"})),l.a.createElement("button",{id:"button",form:"signup"},"Sign Up"),l.a.createElement("h2",{id:"text"}," Already a User?"),l.a.createElement("a",{id:"sign",type:"submit",href:"#"},"Sign In"))))}}]),a}(n.Component)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"create-blog"},l.a.createElement("h1",null,"Create Blog"),l.a.createElement("div",{className:"create-blog-details"},l.a.createElement("form",{action:"",method:"post",id:"create"},l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Name of the Movie"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Release Date"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Genre"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Language"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Duration"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Rating"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Description"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Cast"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Director"}),l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Trailer Link"}),l.a.createElement("input",{type:"file",className:"form-upload",name:"filename"}),l.a.createElement("input",{type:"submit",className:"upload-btn",value:"Upload"})),l.a.createElement("input",{type:"submit",id:"button",className:"submit",value:"Create",form:"create"}))))}}]),a}(n.Component),E=a(28),h=a.n(E),f=a(29),b=a.n(f);var v=function(){return Object(n.useEffect)((function(){b.a.get("/ok").then((function(e){console.log("category list is",e.data)}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",{className:"head"},"Movie-Mate"),l.a.createElement("div",{className:"blog-container"},l.a.createElement("img",{src:h.a,className:"image"}),l.a.createElement("div",{className:"details"},l.a.createElement("div",null,l.a.createElement("h1",null,"Name"),l.a.createElement("h4",null,"Release Date"),l.a.createElement("h4",null,"Genre: | Duration: | Rating: | Language:"),l.a.createElement("p",null,"Description")),l.a.createElement("div",null,l.a.createElement("h4",null,"Cast"),l.a.createElement("h4",null,"Director"),l.a.createElement("h6",null,"Post Id:"),l.a.createElement("button",{id:"button"},"Watch Trailer")))))},g=a(10),y=a(11),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"admin-panel"},l.a.createElement(g.b,{to:"/admin/login"},l.a.createElement("button",{id:"button"},"Login")),l.a.createElement(g.b,{to:"/admin/signup"},l.a.createElement("button",{id:"button"},"Sign-Up"))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"delete-panel"},l.a.createElement("form",{action:"",method:"delete",id:"delete"},l.a.createElement("input",{type:"text",className:"form-text",placeholder:"Enter Blog ID"})),l.a.createElement("button",{form:"delete",id:"button"},"Delete Blog")))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"menu"},l.a.createElement(g.b,{to:"/admin/user/create"},l.a.createElement("button",{id:"button"},"Create Blog")),l.a.createElement(g.b,{to:"/admin/user/delete"},l.a.createElement("button",{id:"button"},"Delete Blog"))))}}]),a}(n.Component);var O=function(){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/",exact:!0,component:v}),l.a.createElement(y.a,{path:"/admin",exact:!0,component:x}),l.a.createElement(y.a,{path:"/admin/login",component:s}),l.a.createElement(y.a,{path:"/admin/signup",component:p}),l.a.createElement(y.a,{path:"/admin/user",exact:!0,component:j}),l.a.createElement(y.a,{path:"/admin/user/create",component:d}),l.a.createElement(y.a,{path:"/admin/user/delete",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0e75a5a6.chunk.js.map