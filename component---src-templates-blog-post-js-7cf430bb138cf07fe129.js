(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});a(277);var r=a(0),n=a.n(r),o=a(254),i=a(262),l=a(260),s=a(296),c=a(165),p=a(95);var u=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return n.a.createElement(i.a,{location:this.props.location,title:e},n.a.createElement(s.a,{className:this.props.classes.root},n.a.createElement(l.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),n.a.createElement("h1",null,t.frontmatter.title),n.a.createElement("p",null,t.frontmatter.date),n.a.createElement("p",null,"Appetite required : ","🍰".repeat(t.timeToRead)," -"," ",t.timeToRead," minutes"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html},className:this.props.classes.markdown}),n.a.createElement("hr",null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,r&&n.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),n.a.createElement("li",null,c&&n.a.createElement(o.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))},r}(n.a.Component);e.default=Object(c.a)(function(t){return{root:{marginTop:"80px",padding:"18px 36px",backgroundColor:t.palette.background.paper},markdown:{"& p":{textIndent:"24px"}}}})(Object(p.a)(u));var d="2550822267"},253:function(t,e,a){var r;t.exports=(r=a(258))&&r.default||r},254:function(t,e,a){"use strict";var r=a(0),n=a.n(r),o=a(102),i=a.n(o);a.d(e,"a",function(){return i.a});a(253),a(20).default.enqueue,n.a.createContext({})},258:function(t,e,a){"use strict";a.r(e);a(34);var r=a(0),n=a.n(r),o=a(138);e.default=function(t){var e=t.location,a=t.pageResources;return a?n.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},259:function(t){t.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog"}}}}},260:function(t,e,a){"use strict";var r=a(261),n=a(0),o=a.n(n),i=a(267),l=a.n(i);function s(t){var e=t.description,a=t.lang,n=t.meta,i=t.title,s=r.data.site,c=e||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s},261:function(t){t.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog",description:"A simple blog about Web development, DevOps, automation, javascript, and PowerShell. Aims at providing thoughts and example about programming environments and daily programmer's life.",author:"Erizo-dev"}}}}},262:function(t,e,a){"use strict";var r=a(259),n=a(0),o=a.n(n),i=a(254),l=a(292),s=a(294),c=a(295),p=a(255),u=a.n(p),d=a(256),m=a.n(d),f=a(297),g=a(134),h=a(178),v=Object(g.a)(function(t){return{root:{flexGrow:1,backgroundColor:u.a[200],color:m.a[900],paddingBottom:"1rem"},navBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},navLink:{fontSize:"2rem",textDecoration:"none",color:m.a[900],"&:hover":{color:m.a[200]}},light:{fontSize:"2rem",borderRadius:"50%"}}}),w=function(t){var e=t.siteTitle,a=o.a.useContext(h.myContext),r=v();return o.a.createElement(l.a,{className:r.root},o.a.createElement(s.a,{className:r.navBar},o.a.createElement(c.a,{variant:"h2"},o.a.createElement(i.a,{to:"/",className:r.navLink},e)),o.a.createElement(f.a,{onClick:a.toggleDarkMode,className:r.light},"🔦")))};w.defaultProps={siteTitle:""};var b=w,E=(a(245),a(296)),x=a(293),y=Object(g.a)(function(t){return{root:{},footer:{marginTop:"3rem",display:"block",width:"100%",backgroundColor:u.a[600],height:"200px",overflow:"hidden"},paper:{height:"100%",width:"100%",margin:"O",borderRadius:"0",backgroundColor:u.a[100]},bgSkew:{width:"100%",overflow:"hidden",transform:"skew(0deg, -2deg) translateY(55px)",backgroundColor:u.a[200],height:"68px",padding:"1rem",display:"flex",justifyContent:"center"}}});e.a=function(t){var e=t.children,a=r.data,n=y();return o.a.createElement(x.a,{className:n.paper},o.a.createElement(b,{siteTitle:a.site.siteMetadata.title}),o.a.createElement(E.a,{maxWidth:"sm",className:n.root},e),o.a.createElement("footer",{className:n.footer},o.a.createElement("div",{className:n.bgSkew},"© ",(new Date).getFullYear(),", Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},277:function(t,e,a){var r=a(2);r(r.P,"String",{repeat:a(278)})},278:function(t,e,a){"use strict";var r=a(78),n=a(42);t.exports=function(t){var e=String(n(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7cf430bb138cf07fe129.js.map