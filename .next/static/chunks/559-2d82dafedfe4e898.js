(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6495).Z,n=r(2648).Z,l=r(1598).Z,i=r(7273).Z,a=l(r(7294)),u=n(r(2636)),s=r(7757),c=r(3735),f=r(3341);r(4210);var d=n(r(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}function v(e){let[t,r]=a.version.split("."),o=parseInt(t,10),n=parseInt(r,10);return o>18||18===o&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let y=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fetchPriority:p,fill:g,placeholder:h,loading:y,srcString:b,config:w,unoptimized:C,loader:E,onLoadRef:j,onLoadingCompleteRef:_,setBlurComplete:O,setShowAltText:x,onLoad:S,onError:M}=e,P=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=d?"lazy":y,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},P,v(p),{loading:y,width:l,height:n,decoding:"async","data-nimg":g?"fill":"1",className:s,style:o({},c,f)},r,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(M&&(e.src=e.src),e.complete&&m(e,b,h,j,_,O,C))},[b,h,j,_,O,M,C,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,h,j,_,O,C)},onError:e=>{x(!0),"blur"===h&&O(!0),M&&M(e)}})))}),b=a.forwardRef((e,t)=>{let r,n;var l,{src:m,sizes:b,unoptimized:w=!1,priority:C=!1,loading:E,className:j,quality:_,width:O,height:x,fill:S,style:M,onLoad:P,onLoadingComplete:k,placeholder:z="empty",blurDataURL:R,fetchPriority:I,layout:L,objectFit:N,objectPosition:A,lazyBoundary:T,lazyRoot:D}=e,B=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=a.useContext(f.ImageConfigContext),F=a.useMemo(()=>{let e=p||U||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[U]),W=B,Z=W.loader||d.default;delete W.loader;let q="__next_img_default"in Z;if(q){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=Z;Z=t=>{let{config:r}=t,o=i(t,["config"]);return e(o)}}if(L){"fill"===L&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(M=o({},M,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!b&&(b=t)}let G="",H=h(O),K=h(x);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,G=e.src,!S){if(H||K){if(H&&!K){let t=H/e.width;K=Math.round(e.height*t)}else if(!H&&K){let t=K/e.height;H=Math.round(e.width*t)}}else H=e.width,K=e.height}}let V=!C&&("lazy"===E||void 0===E);(!(m="string"==typeof m?m:G)||m.startsWith("data:")||m.startsWith("blob:"))&&(w=!0,V=!1),F.unoptimized&&(w=!0),q&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0),C&&(I="high");let[J,Y]=a.useState(!1),[$,Q]=a.useState(!1),X=h(_),ee=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},$?{}:{color:"transparent"},M),et="blur"===z&&R&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:H,heightInt:K,blurWidth:r,blurHeight:n,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:i,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let l=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:l,kind:"x"}}(t,n,i),c=u.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:u.map((e,o)=>"".concat(a({config:t,src:r,quality:l,width:e})," ").concat("w"===s?e:o+1).concat(s)).join(", "),src:a({config:t,src:r,quality:l,width:u[c]})}}({config:F,src:m,unoptimized:w,width:H,quality:X,sizes:b,loader:Z}),eo=m,en=a.useRef(P);a.useEffect(()=>{en.current=P},[P]);let el=a.useRef(k);a.useEffect(()=>{el.current=k},[k]);let ei=o({isLazy:V,imgAttributes:er,heightInt:K,widthInt:H,qualityInt:X,className:j,imgStyle:ee,blurStyle:et,loading:E,config:F,fetchPriority:I,fill:S,unoptimized:w,placeholder:z,loader:Z,srcString:eo,onLoadRef:en,onLoadingCompleteRef:el,setBlurComplete:Y,setShowAltText:Q},W);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},ei,{ref:t})),C?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},v(I)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,n=r(7273).Z,l=o(r(7294)),i=r(4532),a=r(3353),u=r(1410),s=r(9064),c=r(370),f=r(9955),d=r(4224),p=r(508),g=r(1516),h=r(4266);let m=new Set;function v(e,t,r,o,n){if(n||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:u.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let r,o;let{href:u,as:m,children:b,prefetch:w,passHref:C,replace:E,shallow:j,scroll:_,locale:O,onClick:x,onMouseEnter:S,onTouchStart:M,legacyBehavior:P=!1}=e,k=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,P&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let z=!1!==w,R=l.default.useContext(f.RouterContext),I=l.default.useContext(d.AppRouterContext),L=null!=R?R:I,N=!R,{href:A,as:T}=l.default.useMemo(()=>{if(!R){let e=y(u);return{href:e,as:m?y(m):e}}let[e,t]=i.resolveHref(R,u,!0);return{href:e,as:m?i.resolveHref(R,m):t||e}},[R,u,m]),D=l.default.useRef(A),B=l.default.useRef(T);P&&(o=l.default.Children.only(r));let U=P?o&&"object"==typeof o&&o.ref:t,[F,W,Z]=p.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(B.current!==T||D.current!==A)&&(Z(),B.current=T,D.current=A),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[T,U,A,Z,F]);l.default.useEffect(()=>{L&&W&&z&&v(L,A,T,{locale:O},N)},[T,A,W,O,z,null==R?void 0:R.locale,L,N]);let G={ref:q,onClick(e){P||"function"!=typeof x||x(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,o,n,i,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:i,locale:s,scroll:u}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,L,A,T,E,j,_,O,N,z)},onMouseEnter(e){P||"function"!=typeof S||S(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(z||!N)&&v(L,A,T,{locale:O,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){P||"function"!=typeof M||M(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(z||!N)&&v(L,A,T,{locale:O,priority:!0,bypassPrefetchedCheck:!0},N)}};if(s.isAbsoluteUrl(T))G.href=T;else if(!P||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==O?O:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&g.getDomainLocale(T,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||h.addBasePath(c.addLocale(T,e,null==R?void 0:R.defaultLocale))}return P?l.default.cloneElement(o,G):l.default.createElement("a",Object.assign({},k,G),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[c,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},a.push(r),i.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!c){let e=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(e)}},[s,r,t,c,d.current]);let g=o.useCallback(()=>{f(!1)},[]);return[p,c,g]};var o=r(7294),n=r(29);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l,objectFit:i}=e,a=o||t,u=n||r,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function u(e){return function(t){return o.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,n=e.attr,l=e.size,u=e.title,s=a(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&o.createElement("title",null,u),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}}]);