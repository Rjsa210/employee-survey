(this["webpackJsonpemployee-survey"]=this["webpackJsonpemployee-survey"]||[]).push([[0],{60:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t(24),c=t.n(a),r=t(25),l=t(26),i=t(30),j=t(29),d=t(8),o=t(2),b=t(27),m=t.n(b),u=function(){return m.a.get("https://randomuser.me/api/?nat=us&results=50")},h=t(0);var x=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Employee Directory"}),Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{to:"/sortbyname",className:"/allalpha"===window.location.pathname?"nav-link active":"nav-link",children:"Sort By Name"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{to:"/sortbyage",className:"/sortbyage"===window.location.pathname?"nav-link active":"nav-link",children:"Sort By Age"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{to:"/over50",className:"/over50"===window.location.pathname?"nav-link active":"nav-link",children:"over 50"})})]})})]})};var O=function(e){return Object(h.jsx)("div",{className:"container",children:e.results.map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(h.jsxs)("div",{className:"col-8",children:[Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:[e.name.first," ",e.name.last]})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Email: ",Object(h.jsx)("a",{href:e.email,children:e.email})]}),Object(h.jsxs)("li",{children:["Username: ",e.login.username]}),Object(h.jsxs)("li",{children:["Age: ",e.dob.age]})]})]})]})}))})};var v=function(e){var s=e.results.sort((function(e,s){return e.dob.age-s.dob.age}));return Object(h.jsx)("div",{className:"container",children:s.map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(h.jsxs)("div",{className:"col-8",children:[Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:[e.name.first," ",e.name.last]})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Email: ",Object(h.jsx)("a",{href:e.email,children:e.email})]}),Object(h.jsxs)("li",{children:["Username: ",e.login.username]}),Object(h.jsxs)("li",{children:["Age: ",e.dob.age]})]})]})]})}))})};var f=function(e){var s=e.results.filter((function(e){return e.dob.age>55}));return Object(h.jsx)("div",{className:"container",children:s.map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(h.jsxs)("div",{className:"col-8",children:[Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:[e.name.first," ",e.name.last]})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Email: ",Object(h.jsx)("a",{href:e.email,children:e.email})]}),Object(h.jsxs)("li",{children:["Username: ",e.login.username]}),Object(h.jsxs)("li",{children:["Age: ",e.dob.age]})]})]})]})}))})};function p(e,s){var t=e.name.last.toUpperCase(),n=s.name.last.toUpperCase(),a=0;return t>n?a=1:t<n&&(a=-1),a}var g=function(e){var s=e.results.sort(p);return Object(h.jsx)("div",{className:"container",children:s.map((function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(h.jsxs)("div",{className:"col-8",children:[Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:[e.name.first," ",e.name.last]})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Email: ",Object(h.jsx)("a",{href:e.email,children:e.email})]}),Object(h.jsxs)("li",{children:["Username: ",e.login.username]}),Object(h.jsxs)("li",{children:["Age: ",e.dob.age]})]})]})]})}))})},N=function(e){Object(i.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=s.call.apply(s,[this].concat(a))).state={results:[]},e.searchAll=function(){u().then((function(s){return e.setState({results:s.data.results})}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchAll()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(h.jsx)(O,{results:e.state.results})}}),Object(h.jsx)(o.a,{exact:!0,path:"/sortbyname",render:function(){return Object(h.jsx)(g,{results:e.state.results})}}),Object(h.jsx)(o.a,{exact:!0,path:"/sortbyage",render:function(){return Object(h.jsx)(v,{results:e.state.results})}}),Object(h.jsx)(o.a,{exact:!0,path:"/over50",render:function(){return Object(h.jsx)(f,{results:e.state.results})}})]})})}}]),t}(n.Component);var y=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(N,{})})};t(59);c.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a70456a5.chunk.js.map