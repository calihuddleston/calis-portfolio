"use strict";(self.webpackChunkcalis_portfolio=self.webpackChunkcalis_portfolio||[]).push([[245],{245:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(791),r=i(806),s={_origin:"https://api.emailjs.com"},a=function(e,t,i){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},o=i(466),l=i(671),c=(0,o.Z)((function e(t){(0,l.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),d=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,r){var a=new XMLHttpRequest;a.addEventListener("load",(function(e){var t=e.target,i=new c(t);200===i.status||"OK"===i.text?n(i):r(i)})),a.addEventListener("error",(function(e){var t=e.target;r(new c(t))})),a.open("POST",s._origin+e,!0),Object.keys(i).forEach((function(e){a.setRequestHeader(e,i[e])})),a.send(t)}))},u=function(e,t,i,n){var r=n||s._userID,o=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(i);a(r,e,t);var l=new FormData(o);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",r),d("/api/v1.0/email/send-form",l)},h=i(384),m=i(184);function p(){var e=(0,n.useRef)();return(0,m.jsxs)("div",{id:"contact",children:[(0,m.jsxs)("div",{id:"contact-form",children:[(0,m.jsx)("h1",{children:"Like what you see? Send me a message! \ud83d\udce8"}),(0,m.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),u("service_d1s178q","template_xr2h71b",e.current,"ORbvSs4YtfOjJsmNZ").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[(0,m.jsx)("input",{type:"text",placeholder:"First Name",id:"first-name",name:"first_name"}),(0,m.jsx)("input",{type:"text",placeholder:"Last Name",id:"last-name",name:"last_name"}),(0,m.jsx)("input",{type:"email",placeholder:"Email",id:"email",name:"reply_to"}),(0,m.jsx)("textarea",{type:"text",placeholder:"Type your message here...",id:"message",name:"message"}),(0,m.jsx)("input",{id:"send-btn",type:"submit",value:"Send \ud83d\udcee"})]})]}),(0,m.jsxs)("footer",{id:"social",children:[(0,m.jsxs)("div",{id:"contact-info",children:[(0,m.jsx)("h4",{children:h.Z.email}),(0,m.jsx)("h4",{children:h.Z.phone}),(0,m.jsx)("h4",{children:h.Z.address})]}),(0,m.jsx)("h5",{id:"thank-you",children:"Thank you for taking the time to look at my portfolio. \u2764\ufe0f"}),(0,m.jsx)("ul",{id:"footer-social",children:h.Z.socialLinks&&h.Z.socialLinks.map((function(e){return(0,m.jsx)("li",{className:"social-links",children:(0,m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,m.jsx)(r.G,{icon:e.icon,color:"white",size:"2x"})})},e.name)}))})]})]})}}}]);
//# sourceMappingURL=245.56980384.chunk.js.map