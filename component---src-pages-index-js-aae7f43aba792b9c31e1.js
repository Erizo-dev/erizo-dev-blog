(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var r=a(0),i=a.n(r),n=a(255),o=a(288),s=a.n(o),l=a(264),d=a(262),c=a(134),u=a(286),f=a(287),m=a(296),p=a(75),g=Object(c.a)(function(e){return{subTitle:{marginTop:"100px",display:"block",color:"#777"},postsContainer:{maxWidth:"800px",marginTop:"48px"},postCard:{marginBottom:"2rem",maxWidth:"600px"},cardImage:{maxHeight:"200px"},postTitle:{textDecoration:"none",color:"#777",cursor:"pointer","&:hover":{color:"light"==e.palette.type?"#444":"#AAA"}}}});t.default=function(e){var t=e.data,a=(t.site.siteMetadata.title,t.allMarkdownRemark.edges),r=g();Object(p.a)();return i.a.createElement(l.a,null,i.a.createElement(d.a,{title:"Home"}),i.a.createElement("h2",null,"Erizo's developer blog"),i.a.createElement(m.a,{className:r.subTitle,variant:"paragraph"},"Here are my latest blog posts as a developer.",i.a.createElement("br",null),"I hope you can find some ideas there.Last update: changed theme main color from teal to grey!"),i.a.createElement("div",{className:r.postsContainer},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement(u.a,{key:t.fields.slug,className:r.postCard},i.a.createElement(f.a,null,i.a.createElement(n.a,{className:r.postTitle,to:t.fields.slug},t.frontmatter.thumbnail&&i.a.createElement(s.a,{className:r.cardImage,fluid:t.frontmatter.thumbnail.childImageSharp.fluid,alt:t.frontmatter.imageCredit,objectFit:"scale-down"}),i.a.createElement(m.a,{variant:"h5",component:"h2"},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))};var h="3017107635"},254:function(e,t,a){var r;e.exports=(r=a(260))&&r.default||r},255:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(102),o=a.n(n);a.d(t,"a",function(){return o.a});a(254),a(20).default.enqueue,i.a.createContext({})},260:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(138);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},261:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog"}}}}},262:function(e,t,a){"use strict";var r=a(263),i=a(0),n=a.n(i),o=a(268),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},263:function(e){e.exports={data:{site:{siteMetadata:{title:"🦔 ~ Erizo's Blog",description:"A simple blog about Web development, DevOps, automation, javascript, and PowerShell. Aims at providing thoughts and example about programming environments and daily programmer's life.",author:"Erizo-dev"}}}}},264:function(e,t,a){"use strict";var r=a(261),i=a(0),n=a.n(i),o=a(255),s=a(293),l=a(295),d=a(296),c=a(256),u=a.n(c),f=a(298),m=a(134),p=a(178),g=Object(m.a)(function(e){return{root:{flexGrow:1,backgroundColor:u.a[200],color:u.a[900],paddingBottom:"1rem"},navBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},navLink:{fontSize:"2rem",textDecoration:"none",color:u.a[900],"&:hover":{color:u.a[200]}},light:{fontSize:"2rem",borderRadius:"50%"}}}),h=function(e){var t=e.siteTitle,a=n.a.useContext(p.myContext),r=g();return n.a.createElement(s.a,{className:r.root},n.a.createElement(l.a,{className:r.navBar},n.a.createElement(d.a,{variant:"h2",component:"h1"},n.a.createElement(o.a,{to:"/",className:r.navLink},t)),n.a.createElement(f.a,{onClick:a.toggleDarkMode,className:r.light},"🔦")))};h.defaultProps={siteTitle:""};var b=h,v=(a(246),a(297)),y=a(294),w=Object(m.a)(function(e){return{root:{},footer:{marginTop:"3rem",display:"block",width:"100%",backgroundColor:u.a[600],height:"200px",overflow:"hidden"},paper:{height:"100%",width:"100%",margin:"O",borderRadius:"0",backgroundColor:u.a[50]},bgSkew:{width:"100%",overflow:"hidden",transform:"skew(0deg, -2deg) translateY(55px)",backgroundColor:u.a[200],height:"68px",padding:"1rem",display:"flex",justifyContent:"center"}}});t.a=function(e){var t=e.children,a=r.data,i=w();return n.a.createElement(y.a,{className:i.paper},n.a.createElement(b,{siteTitle:a.site.siteMetadata.title}),n.a.createElement(v.a,{maxWidth:"sm",className:i.root},t),n.a.createElement("footer",{className:i.footer},n.a.createElement("div",{className:i.bgSkew},"© ",(new Date).getFullYear(),", Built with ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},286:function(e,t,a){"use strict";var r=a(1),i=a(4),n=a(0),o=a.n(n),s=(a(31),a(103)),l=a(294),d=a(253),c=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,d=e.raised,c=void 0!==d&&d,u=Object(i.a)(e,["classes","className","raised"]);return o.a.createElement(l.a,Object(r.a)({className:Object(s.a)(a.root,n),elevation:c?8:1,ref:t},u))});t.a=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},287:function(e,t,a){"use strict";var r=a(1),i=a(4),n=a(0),o=a.n(n),s=(a(31),a(103)),l=a(253),d=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,l=e.component,d=void 0===l?"div":l,c=Object(i.a)(e,["classes","className","component"]);return o.a.createElement(d,Object(r.a)({className:Object(s.a)(a.root,n),ref:t},c))});t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},288:function(e,t,a){"use strict";a(5),a(6),a(3),a(55),a(140),a(271);var r=a(27);t.__esModule=!0,t.default=void 0;var i,n=r(a(107)),o=r(a(108)),s=r(a(185)),l=r(a(186)),d=r(a(0)),c=r(a(31)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,O=e.loading,L=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:j?1:0,transition:C?"opacity "+b+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&z,s,f),V={title:t,alt:this.state.isVisible?"":a,style:T,className:m};if(p){var M=p,P=M[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:V,imageVariants:M,generateSources:S}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:V,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,y(M),d.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:O},P,{imageVariants:M}))}}))}if(g){var W=g,B=W[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},k&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:k,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},C&&z)}),B.base64&&d.default.createElement(I,{src:B.base64,spreadProps:V,imageVariants:W,generateSources:S}),B.tracedSVG&&d.default.createElement(I,{src:B.tracedSVG,spreadProps:V,imageVariants:W,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,y(W),d.default.createElement(N,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:O},B,{imageVariants:W}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});j.propTypes={resolutions:C,sizes:R,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=j;t.default=k}}]);
//# sourceMappingURL=component---src-pages-index-js-aae7f43aba792b9c31e1.js.map