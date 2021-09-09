(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var i=t(1),a=t.n(i),n=t(4),s=t.n(n),l=(t(10),t(11),t(5)),r=t(2),d=(t.p,t(12),t(0)),o=function(e){var c,t=e.title,i=e.poster_path,a=e.overview,n=e.vote_average;return Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w1280"+i:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:t}),Object(d.jsxs)("div",{className:"movie-info",children:[Object(d.jsxs)("h3",{children:["$",t]}),Object(d.jsx)("span",{className:"vote ".concat((c=n,c>=8?"green":c>=6?"orange":"red")),children:n})]}),Object(d.jsxs)("div",{className:"overview",children:[Object(d.jsx)("h3",{children:"Overview:"}),Object(d.jsx)("p",{children:a})]})]})},j=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{ref:e.container,children:Object(d.jsxs)("nav",{className:"navbar",id:"test",children:[Object(d.jsxs)("a",{href:"#",className:"toggle-button",ref:e.toggleButton,onClick:e.handleToggle,children:[Object(d.jsx)("span",{className:"bar"}),Object(d.jsx)("span",{className:"bar"}),Object(d.jsx)("span",{className:"bar"})]}),Object(d.jsx)("div",{className:e.isActive?"navbar-links active":"navbar-links",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{id:"smooth",children:Object(d.jsx)("form",{onSubmit:e.submit,children:Object(d.jsx)("input",{className:"search",id:"search",type:"search",placeholder:"search",value:e.search,onChange:e.handleChange})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"28",className:"find",onClick:e.handleClick,children:"Action"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"12",className:"find",onClick:e.handleClick,children:"Adventure"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"16",className:"find",onClick:e.handleClick,children:"Animation"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"14",className:"find",onClick:e.handleClick,children:"Fiction"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"27",className:"find",onClick:e.handleClick,children:"Horror"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"99",className:"find",onClick:e.handleClick,children:"Documentary"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",id:"35",className:"find",onClick:e.handleClick,children:"Comedy"})})]})})]})})})},h=t.p+"static/media/github.d1784505.svg",b=t.p+"static/media/smartphone.ba796f3f.svg",m=t.p+"static/media/email.791ac90f.svg",f=t.p+"static/media/linkedin.7a1e4ee9.svg";var O=function(){var e=Object(i.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(i.useState)(""),s=Object(r.a)(n,2),O=s[0],u=s[1],x=Object(i.useState)(!1),p=Object(r.a)(x,2),v=(p[0],p[1]),g=Object(i.useRef)(null),k=Object(i.useState)("false"),C=Object(r.a)(k,2),N=C[0],w=C[1];Object(i.useEffect)((function(){y("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6193a0db431493626cef95cea16d4d9d&page=1")}),[]);var y=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.results)}))},S=function(){var e=g.current;window.scrollY>100?(v(!0),e.className="stick"):(v(!1),e.className="")};return Object(i.useEffect)((function(){window.addEventListener("scroll",S)})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{submit:function(e){e.preventDefault(),O&&(y("https://api.themoviedb.org/3/search/movie?&api_key=6193a0db431493626cef95cea16d4d9d&query="+O),u(""))},search:O,handleChange:function(e){u(e.target.value)},handleClick:function(e){var c=e.target.id,t="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6193a0db431493626cef95cea16d4d9d&with_genres=".concat(c);c&&y(t)},container:g,handleToggle:function(){w(!N)},isActive:N}),Object(d.jsx)("div",{className:"movie-container",children:t.length>0&&t.map((function(e){return Object(d.jsx)(o,Object(l.a)({},e),e.id)}))}),Object(d.jsx)("main",{id:"main2"}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("span",{className:"logos",children:[Object(d.jsx)("a",{href:"tel:%16464190206",children:Object(d.jsx)("img",{src:b,alt:"phoneSVG"})}),Object(d.jsx)("a",{href:"mailto:%pabloa.bonilla@outlook.com",children:Object(d.jsx)("img",{src:m,alt:"emailSVG"})}),Object(d.jsx)("a",{href:"https://github.com/Jutsued",children:Object(d.jsx)("img",{src:h,alt:"gitSVG"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/pablo-bonilla-999975190/",children:Object(d.jsx)("img",{src:f,alt:"linkinSVG"})})]})})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(c){var t=c.getCLS,i=c.getFID,a=c.getFCP,n=c.getLCP,s=c.getTTFB;t(e),i(e),a(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.e20bd975.chunk.js.map