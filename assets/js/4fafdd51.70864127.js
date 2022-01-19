(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[3418],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8620:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={slug:"release-sb-v0.4",title:"Releasing SuperBench v0.4",author:"Peng Cheng",author_title:"SuperBench Team",author_url:"https://github.com/cp5555",author_image_url:"https://github.com/cp5555.png",tags:["superbench","announcement","release"]},u=void 0,c={permalink:"/superbenchmark/blog/release-sb-v0.4",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/blog/2021-12-24-release-0-4.md",source:"@site/blog/2021-12-24-release-0-4.md",title:"Releasing SuperBench v0.4",description:"We are very happy to announce that SuperBench 0.4.0 version is officially released today!",date:"2021-12-24T00:00:00.000Z",formattedDate:"December 24, 2021",tags:[{label:"superbench",permalink:"/superbenchmark/blog/tags/superbench"},{label:"announcement",permalink:"/superbenchmark/blog/tags/announcement"},{label:"release",permalink:"/superbenchmark/blog/tags/release"}],readingTime:.9,truncated:!1,nextItem:{title:"Releasing SuperBench v0.3",permalink:"/superbenchmark/blog/release-sb-v0.3"}},p=[{value:"SuperBench 0.4.0 Release Notes",id:"superbench-040-release-notes",children:[{value:"SuperBench Framework",id:"superbench-framework",children:[]},{value:"Single-node Validation",id:"single-node-validation",children:[]},{value:"Multi-node Validation",id:"multi-node-validation",children:[]},{value:"Other Improvement",id:"other-improvement",children:[]}]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are very happy to announce that ",(0,i.kt)("strong",{parentName:"p"},"SuperBench 0.4.0 version")," is officially released today!"),(0,i.kt)("p",null,"You can install and try superbench by following ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/getting-started/installation"},"Getting Started Tutorial"),"."),(0,i.kt)("h2",{id:"superbench-040-release-notes"},"SuperBench 0.4.0 Release Notes"),(0,i.kt)("h3",{id:"superbench-framework"},"SuperBench Framework"),(0,i.kt)("h4",{id:"monitor"},"Monitor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add monitor framework for NVIDIA GPU, CPU, memory and disk.")),(0,i.kt)("h4",{id:"data-diagnosis-and-analysis"},"Data Diagnosis and Analysis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support baseline-based data diagnosis."),(0,i.kt)("li",{parentName:"ul"},"Support basic analysis feature (boxplot figure, outlier detection, etc.).")),(0,i.kt)("h3",{id:"single-node-validation"},"Single-node Validation"),(0,i.kt)("h4",{id:"micro-benchmarks"},"Micro Benchmarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CPU Memory Validation (tool: Intel Memory Latency Checker)."),(0,i.kt)("li",{parentName:"ul"},"GPU Copy Bandwidth (tool: built by MSRA)."),(0,i.kt)("li",{parentName:"ul"},"Add ORT Model on AMD GPU platform."),(0,i.kt)("li",{parentName:"ul"},"Add inference backend TensorRT."),(0,i.kt)("li",{parentName:"ul"},"Add inference backend ORT.")),(0,i.kt)("h3",{id:"multi-node-validation"},"Multi-node Validation"),(0,i.kt)("h4",{id:"micro-benchmarks-1"},"Micro Benchmarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IB Networking validation."),(0,i.kt)("li",{parentName:"ul"},"TCP validation (tool: TCPing)."),(0,i.kt)("li",{parentName:"ul"},"GPCNet Validation (tool: GPCNet).")),(0,i.kt)("h3",{id:"other-improvement"},"Other Improvement"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enhancement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add pipeline for AMD docker."),(0,i.kt)("li",{parentName:"ul"},"Integrate system config info script with SuperBench."),(0,i.kt)("li",{parentName:"ul"},"Support FP32 mode without TF32."),(0,i.kt)("li",{parentName:"ul"},"Refine unit test for microbenchmark."),(0,i.kt)("li",{parentName:"ul"},"Unify metric names for all benchmarks."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Document"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add benchmark list"),(0,i.kt)("li",{parentName:"ul"},"Add monitor document"),(0,i.kt)("li",{parentName:"ul"},"Add data diagnosis document")))))}m.isMDXComponent=!0}}]);