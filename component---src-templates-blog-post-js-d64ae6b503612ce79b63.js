(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{255:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(303);var n=a(0),r=a.n(n),o=a(261),i=a(275),l=a(273),c=a(327),s=a(171),p=a(100),m=a(324);var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,s=a.next;return r.a.createElement(i.a,{location:this.props.location,title:t},r.a.createElement(c.a,{className:this.props.classes.root},r.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement(m.a,{variant:"h3",component:"h2"},e.frontmatter.title),r.a.createElement("p",null,e.frontmatter.date),r.a.createElement("p",null,"Appetite required : ","🍰".repeat(e.timeToRead)," -"," ",e.timeToRead," minutes"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html},className:this.props.classes.markdown}),r.a.createElement("hr",null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,s&&r.a.createElement(o.a,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))},n}(r.a.Component);t.default=Object(s.a)(function(e){return{root:{marginTop:"80px",padding:"18px 36px",backgroundColor:e.palette.background.paper},markdown:{"& p":{textIndent:"24px"}}}})(Object(p.a)(d));var u="2550822267"},261:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(107),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"b",function(){return o.navigate});a(265),a(20).default.enqueue,r.a.createContext({})},265:function(e,t,a){var n;e.exports=(n=a(270))&&n.default||n},270:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(141);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},271:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog"}}}}},273:function(e,t,a){"use strict";var n=a(274),r=a(0),o=a.n(r),i=a(278),l=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},274:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog",description:"A simple blog about Web development, DevOps, automation, javascript, and PowerShell. Aims at providing thoughts and example about programming environments and daily programmer's life.",author:"Erizo-dev"}}}}},275:function(e,t,a){"use strict";var n=a(271),r=a(0),o=a.n(r),i=a(261),l=a(321),c=a(323),s=a(324),p=a(264),m=a.n(p),d=a(325),u=a(106),g=a(185),f=Object(u.a)(function(e){return{root:{flexGrow:1,backgroundColor:m.a[200],color:m.a[900],paddingBottom:"1rem"},navBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},navLink:{fontSize:"2rem",textDecoration:"none",color:m.a[900],"&:hover":{color:m.a[700]}},light:{fontSize:"2rem",borderRadius:"50%"}}}),h=function(e){var t=e.siteTitle,a=o.a.useContext(g.myContext),n=f();return o.a.createElement(l.a,{className:n.root},o.a.createElement(c.a,{className:n.navBar},o.a.createElement(s.a,{variant:"h2",component:"h1"},o.a.createElement(i.a,{to:"/",className:n.navLink},t)),o.a.createElement(d.a,{onClick:a.toggleDarkMode,className:n.light},"🔦")))};h.defaultProps={siteTitle:""};var b=h,v=(a(253),a(327)),E=a(322),w=a(328),y=(a(17),a(33),a(326)),x=a(330),k=a(332),C=a(329),O=Object(u.a)(function(e){return{root:{margin:"auto",Width:"100rem",padding:"1rem"},paper:{padding:"1rem",backgroundColor:m.a[200],color:"black"},policyLink:{textDecoration:"none",color:m.a[900],cursor:"pointer","&:hover":{color:m.a[700]}},content:{margin:"0 1rem 2rem 1rem"},box:{padding:"1rem",backgroundColor:m.a[200],color:m.a[900]},dialogTitle:{backgroundColor:m.a[200],color:m.a[900]}}});var S=function(){var e,t=o.a.useContext(g.myContext),a=t.modalOpen,n=(t.preferences,t.setModalOpen),l=t.setPreferences,c=Object(r.useState)({gaSwitch:!1}),s=c[0],p=c[1],m=O(),u=function(){l({rememberPreferences:!0,gaEnabled:s.gaSwitch}),n(!1)};return o.a.createElement(x.a,{onClose:u,"aria-labelledby":"simple-dialog-title",open:a,className:m.root,disableBackdropClick:!0},o.a.createElement(y.a,{id:"simple-dialog-title",className:m.dialogTitle},o.a.createElement(C.a,{boxShadow:1,className:m.box},"Set privacy policy")),o.a.createElement(E.a,{className:m.paper},o.a.createElement("p",null,"You can check our policies :  ",o.a.createElement("span",{className:m.policyLink,onClick:function(){n(!1),Object(i.b)("/policy")}},"here"),"."),o.a.createElement("div",{className:m.content},"Enable google analytics  ",o.a.createElement(k.a,{checked:s.gaSwitch,onChange:(e="gaSwitch",function(t){var a;p(Object.assign({},s,((a={})[e]=t.target.checked,a)))}),value:"gaSwitch"})),o.a.createElement(d.a,{onClick:u,variant:"outlined",color:"secondary"},"OK")))},j=Object(u.a)(function(e){return{root:{},footer:{marginTop:"3rem",display:"block",width:"100%",backgroundColor:m.a[600],height:"200px",overflow:"hidden"},paper:{height:"100%",width:"100%",margin:"O",borderRadius:"0",backgroundColor:m.a[50]},bgSkew:{width:"100%",overflow:"hidden",transform:"skew(0deg, -2deg) translateY(55px)",backgroundColor:m.a[200],height:"68px",padding:"1rem",display:"flex",justifyContent:"center",color:"black"}}});t.a=function(e){var t=e.children,a=e.modalOpen;console.log("modalOpen--*",a);var r=n.data,l=j();return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{open:a}),o.a.createElement(E.a,{className:l.paper},o.a.createElement(b,{siteTitle:r.site.siteMetadata.title}),o.a.createElement(v.a,{maxWidth:"sm",className:l.root},t),o.a.createElement("footer",{className:l.footer},o.a.createElement(w.a,{className:l.bgSkew,container:!0,spacing:1},o.a.createElement(w.a,{item:!0},"© ",(new Date).getFullYear(),", Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),o.a.createElement(w.a,{item:!0},"Our privacy policy is : ",o.a.createElement(i.a,{to:"/policy"},"here"))))))}},303:function(e,t,a){var n=a(3);n(n.P,"String",{repeat:a(304)})},304:function(e,t,a){"use strict";var n=a(81),r=a(42);e.exports=function(e){var t=String(r(this)),a="",o=n(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d64ae6b503612ce79b63.js.map