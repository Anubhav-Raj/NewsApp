(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3041)}])},3041:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var l=s(5893),r=s(1163),a=s(5089),i=s(3974),n=s(7294),c=s(2671),o=s(5563),d=s(3493),x=s(3750),m=s(8193),h=s(9583);let u=e=>{let{isOpen:t,onClose:s,article:r}=e,a=(0,n.useRef)();return((0,n.useEffect)(()=>{let e=e=>{a.current&&!a.current.contains(e.target)&&s()};return t&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,s]),t)?(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center",children:(0,l.jsxs)("div",{ref:a,className:"bg-white p-8 rounded-lg max-w-2xl overflow-y-auto relative",children:[(0,l.jsx)("button",{onClick:s,className:"absolute top-4 right-4    rounded-2xl text-white-600 hover:text-gray-800 cursor-pointer",children:"Close"}),(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4",children:r.title}),(0,l.jsx)("img",{src:r.urlToImage||"https://api.slingacademy.com/public/sample-photos/1.jpeg",alt:r.title,className:"w-full h-64 object-cover mb-4"}),(0,l.jsxs)("p",{className:"text-gray-700",children:[r.description,r.content]}),(0,l.jsx)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline mt-4 block",children:"Read Full Article"})]})}):null};var f=s(4749);let p=()=>{let{favorites:e,toggleFavorite:t}=(0,f.r)(),[s,r]=(0,n.useState)([]),[a,c]=(0,n.useState)(!0),[o,d]=(0,n.useState)(10),[p,j]=(0,n.useState)(null),[g,b]=(0,n.useState)(!1),[w,N]=(0,n.useState)(!1),v=e=>{g||j(e)},y=()=>{j(null)};(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-12-01&sortBy=popularity&apiKey=9f1906d5ce6d4d6ca9d1d51c25c0d3c8"),t=await e.json();r(t.articles),c(!1)}catch(e){console.error("Error fetching data:",e),c(!1)}};e();let t=()=>{b(window.innerWidth<768)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);let _=()=>{d(e=>e+10)},k=()=>{N(e=>!e)};return(0,l.jsxs)(l.Fragment,{children:[a?(0,l.jsx)(i.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex justify-end p-3",children:(0,l.jsx)("button",{onClick:k,className:"text-blue-500 hover:text-blue-700 flex items-center gap-2",children:w?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"Switch to List View"}),(0,l.jsx)(h.AeW,{className:"w-6 h-6"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"Switch to Grid View"}),(0,l.jsx)(h.uOL,{className:"w-6 h-6"})]})})}),Array.isArray(s)&&s.length>0?(0,l.jsx)("div",{className:"container mx-auto ".concat(w?"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4":""),children:s.slice(0,o).map((s,r)=>(0,l.jsx)("div",{className:"".concat(w?"p-2":""),children:(0,l.jsxs)("div",{className:"rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]",children:[(0,l.jsxs)("div",{onClick:()=>v(s),className:"w-full ".concat(w?"":"flex"),children:[(0,l.jsx)("img",{src:s.urlToImage||"https://api.slingacademy.com/public/sample-photos/1.jpeg",alt:"title",className:"w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"}),(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsx)("h2",{className:"font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]",children:s.title}),(0,l.jsx)("p",{className:"text-dark-light text-lg mb-3",children:s.description}),(0,l.jsxs)("div",{className:"flex justify-between flex-wrap items-center mt-6",children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-2 md:gap-x-2.5",children:[(0,l.jsx)("img",{src:"https://picsum.photos/50",alt:"post profile",className:"w-9 h-9 md:w-10 md:h-10 rounded-full"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h4",{className:"font-bold italic text-dark-soft text-sm md:text-base",children:s.author}),(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)("span",{className:"".concat(s.author?"bg-[#36B37E]":"bg-red-500"," w-fit bg-opacity-20 p-1.5 rounded-full"),children:s.verified?(0,l.jsx)(x.IQF,{className:"w-1.5 h-1.5 text-[#36B37E]"}):(0,l.jsx)(m.oHP,{className:"w-1.5 h-1.5 text-red-500"})}),(0,l.jsxs)("span",{className:"italic text-dark-light text-xs md:text-sm",children:[s.verified?"Verified":"Unverified"," ","writer"]})]})]})]}),(0,l.jsxs)("p",{className:"font-bold text-dark-light italic text-sm mt-3",children:[new Date(s.publishedAt).getDate()," ",new Date(s.publishedAt).toLocaleString("default",{month:"long"})]})]})]})]}),(0,l.jsx)("div",{className:"flex justify-end p-3",children:(0,l.jsx)("button",{onClick:()=>t(s),className:"text-red-500 hover:text-red-700",children:e.some(e=>e.title===s.title)?(0,l.jsx)(h.$0H,{className:"w-6 h-6"}):(0,l.jsx)(h.BgW,{className:"w-6 h-6"})})})]})},r))}):(0,l.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,l.jsx)("p",{className:"text-xl font-bold text-gray-500",children:"No posts available."})})]}),(0,l.jsx)(u,{isOpen:null!==p,onClose:y,article:p}),Array.isArray(s)&&o<s.length&&(0,l.jsx)("div",{className:"flex mt-5 justify-center align-center",children:(0,l.jsx)("button",{onClick:_,className:"mt-5  m-3 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300",children:"Load More"})})]})};function j(){let{authUser:e,inLoading:t,SignOut:s}=(0,a.aC)(),x=(0,r.useRouter)();return(0,n.useEffect)(()=>{t||e||x.push("/login")},[e,t]),e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)(d.Z,{}),(0,l.jsx)(p,{}),(0,l.jsx)(o.Z,{})]}):(0,l.jsx)(i.Z,{})}}},function(e){e.O(0,[13,445,617,559,520,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);