(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(204),i=a(212),c=a(210);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},202:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),i=a.n(o);a.d(t,"a",function(){return i.a});a(202),a(9).default.enqueue,r.a.createContext({})},207:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog"}}}}},210:function(e,t,a){"use strict";var n=a(211),r=a(0),o=a.n(r),i=a(223),c=a.n(i);function l(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},211:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog",description:"Wed development, devops, automation",author:"@gatsbyjs"}}}}},212:function(e,t,a){"use strict";var n=a(208),r=a(0),o=a.n(r),i=a(204),c=a(274),l=a(276),s=a(277),u=a(220),m=a.n(u),p=a(221),d=a.n(p),f=a(281),g=a(280),h=Object(g.a)(function(e){return{root:{flexGrow:1,backgroundColor:m.a[200],color:d.a[900],paddingBottom:"1rem"},navBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},navLink:{fontSize:"2rem",textDecoration:"none",color:d.a[900],"&:hover":{color:d.a[200]}},light:{fontSize:"2rem",borderRadius:"50%"}}}),w=function(e){var t=e.siteTitle,a=e.toggleDarkMode,n=h();return o.a.createElement(c.a,{className:n.root},o.a.createElement(l.a,{className:n.navBar},o.a.createElement(s.a,{variant:"h2"},o.a.createElement(i.a,{to:"/",className:n.navLink},t)),o.a.createElement(f.a,{onClick:a,className:n.light},"🔦")))};w.defaultProps={siteTitle:""};var v=w,E=(a(194),a(279)),b=a(275),y=a(278),k=a(256),x=Object(g.a)(function(e){return{root:{},footer:{marginTop:"3rem",display:"block",width:"100%"},paper:{height:"100%",width:"100%",margin:"O",borderRadius:"0"}}});t.a=function(e){var t=e.children,a=Object(r.useState)({palette:{type:"light"}}),i=a[0],c=a[1],l=Object(k.a)(i),s=n.data,u=x();return o.a.createElement(y.a,{theme:l},o.a.createElement(b.a,{className:u.paper},o.a.createElement(v,{siteTitle:s.site.siteMetadata.title,toggleDarkMode:function(){var e="light"===i.palette.type?"dark":"light";c({palette:{type:e}})}}),o.a.createElement(E.a,{maxWidth:"sm",className:u.root},t,o.a.createElement("footer",{className:u.footer},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-9dca18b22da5e0bd55d5.js.map