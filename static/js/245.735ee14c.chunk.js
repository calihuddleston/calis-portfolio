"use strict";(self.webpackChunkcalis_portfolio=self.webpackChunkcalis_portfolio||[]).push([[245],{245:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(152),i=n(791),a=n(806),o={_origin:"https://api.emailjs.com"},s=function(e,t,n){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},l=n(466),u=n(671),c=(0,l.Z)((function e(t){(0,u.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,i){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var t=e.target,n=new c(t);200===n.status||"OK"===n.text?r(n):i(n)})),a.addEventListener("error",(function(e){var t=e.target;i(new c(t))})),a.open("POST",o._origin+e,!0),Object.keys(n).forEach((function(e){a.setRequestHeader(e,n[e])})),a.send(t)}))},f=function(e,t,n,r){var i=r||o._userID,a=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);s(i,e,t);var l=new FormData(a);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),d("/api/v1.0/email/send-form",l)},h=n(384),m=n(184);function p(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],s=(0,i.useState)(""),l=(0,r.Z)(s,2),u=l[0],c=l[1],d=(0,i.useState)(""),p=(0,r.Z)(d,2),v=p[0],y=p[1],x=(0,i.useState)(""),j=(0,r.Z)(x,2),b=j[0],g=j[1],w=function(e){var t=e.target,n=t.name,r=t.value;"first_name"===n?o(r):"last_name"===n?c(r):"reply_to"===n?y(r):g(r)},_=(0,i.useRef)();return(0,m.jsxs)("div",{id:"contact",children:[(0,m.jsxs)("div",{id:"contact-form",children:[(0,m.jsx)("h1",{children:"Like what you see? Send me a message! \ud83d\udce8"}),(0,m.jsxs)("form",{ref:_,onSubmit:function(e){e.preventDefault(),f("service_d1s178q","template_xr2h71b",_.current,"ORbvSs4YtfOjJsmNZ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Message sent!"),o(""),c(""),y(""),g("")},children:[(0,m.jsx)("input",{type:"text",placeholder:"First Name",id:"first-name",name:"first_name",value:n,onChange:w}),(0,m.jsx)("input",{type:"text",placeholder:"Last Name",id:"last-name",name:"last_name",value:u,onChange:w}),(0,m.jsx)("input",{type:"email",placeholder:"Email",id:"email",name:"reply_to",value:v,onChange:w}),(0,m.jsx)("textarea",{type:"text",placeholder:"Type your message here...",id:"message",name:"message",value:b,onChange:w}),(0,m.jsx)("input",{id:"send-btn",type:"submit",value:"Send \ud83d\udcee"})]})]}),(0,m.jsxs)("footer",{id:"social",children:[(0,m.jsxs)("div",{id:"contact-info",children:[(0,m.jsx)("h4",{children:h.Z.email}),(0,m.jsx)("h4",{children:h.Z.phone}),(0,m.jsx)("h4",{children:h.Z.address})]}),(0,m.jsx)("h5",{id:"thank-you",children:"Thank you for taking the time to look at my portfolio. \u2764\ufe0f"}),(0,m.jsx)("ul",{id:"footer-social",children:h.Z.socialLinks&&h.Z.socialLinks.map((function(e){return(0,m.jsx)("li",{className:"footer-links",children:(0,m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,m.jsx)(a.G,{icon:e.icon,color:"white",size:"2x"})})},e.name)}))})]})]})}},152:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=245.735ee14c.chunk.js.map