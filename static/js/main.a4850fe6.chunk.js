(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),c=a(9),o=a.n(c),r=(a(18),a(25));var s=()=>{const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)("");Object(n.useEffect)(()=>{r.a.get("http://localhost:3000/tasks").then(e=>{t(e.data)})},[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Task Manager"),l.a.createElement("input",{value:a,onChange:e=>c(e.target.value),placeholder:"Add a task"}),l.a.createElement("button",{onClick:()=>{const n={id:Date.now(),text:a};r.a.post("http://localhost:3000/tasks",n).then(()=>{t([...e,n]),c("")})}},"Add"),l.a.createElement("ul",null,e.map(a=>l.a.createElement("li",{key:a.id},a.text,l.a.createElement("button",{onClick:()=>(a=>{r.a.delete("http://localhost:3000/tasks/".concat(a)).then(()=>{t(e.filter(e=>e.id!==a))})})(a.id)},"Delete")))))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:o}=t;a(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),u()}},[[10,1,2]]]);
//# sourceMappingURL=main.a4850fe6.chunk.js.map