(this.webpackJsonpchildrens_story_frontend=this.webpackJsonpchildrens_story_frontend||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),s=n.n(r),a=n(3),d=n(0),i=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),i=s[0],l=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){fetch("http://localhost:5000/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({genre:i})}).then((function(e){return e.json()})).then((function(e){o(e.story)})).catch((function(e){console.error("Error:",e)}))},children:"Generate Story"}),n&&Object(d.jsx)("button",{onClick:function(){var e=document.createElement("a");e.href="data:text/plain;charset=utf-8,"+encodeURIComponent(n),e.download="story.txt",e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:"Download Story"}),Object(d.jsx)("p",{children:n})]})};var l=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"Children's Story Generator"})}),Object(d.jsx)(i,{})]})};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d0b59118.chunk.js.map