(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[3501],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7294),o=t(944),a=t(6010),i="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,l=39;var s=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,r.useState)(s),h=g[0],k=g[1],y=r.Children.toArray(e.children),O=[];if(null!=p){var x=v[p];null!=x&&x!==h&&d.some((function(e){return e.value===x}))&&k(x)}var w=function(e){var n=e.currentTarget,t=O.indexOf(n),r=d[t].value;k(r),null!=p&&(b(p,r),setTimeout((function(){var e,t,r,o,a,i,c,l;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,l=i.innerWidth,t>=0&&a<=l&&o<=c&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case l:var r=O.indexOf(e.target)+1;t=O[r]||O[0];break;case c:var o=O.indexOf(e.target)-1;t=O[o]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":h===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:w,onClick:w},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),o=t(9443);n.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},7705:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(1395),u=t(8215),c=["components"],l={id:"using-docker"},s="Using Docker",d={unversionedId:"developer-guides/using-docker",id:"developer-guides/using-docker",isDocsHomePage:!1,title:"Using Docker",description:"SuperBench runs benchmarks inside Docker container,",source:"@site/../docs/developer-guides/using-docker.mdx",sourceDirName:"developer-guides",slug:"/developer-guides/using-docker",permalink:"/superbenchmark/docs/developer-guides/using-docker",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/developer-guides/using-docker.mdx",version:"current",frontMatter:{id:"using-docker"},sidebar:"docs",previous:{title:"Development",permalink:"/superbenchmark/docs/developer-guides/development"},next:{title:"Contributing",permalink:"/superbenchmark/docs/developer-guides/contributing"}},p=[{value:"Build image",id:"build-image",children:[]},{value:"Run container",id:"run-container",children:[]}],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-docker"},"Using Docker"),(0,a.kt)("p",null,"SuperBench runs benchmarks inside Docker container,\nhere are the guides on how to build images and start containers during development."),(0,a.kt)("h2",{id:"build-image"},"Build image"),(0,a.kt)("p",null,"You need to ",(0,a.kt)("a",{parentName:"p",href:"/superbenchmark/docs/developer-guides/development#set-up"},"clone the code")," first before building the image."),(0,a.kt)(i.Z,{groupId:"gpu-platform",defaultValue:"cuda",values:[{label:"CUDA",value:"cuda"},{label:"ROCm",value:"rocm"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"cuda",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export DOCKER_BUILDKIT=1\ndocker buildx build \\\n  --platform linux/amd64 --cache-to type=inline,mode=max \\\n  --tag superbench-dev --file dockerfile/cuda11.1.1.dockerfile .\n"))),(0,a.kt)(u.Z,{value:"rocm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export DOCKER_BUILDKIT=1\ndocker buildx build \\\n  --platform linux/amd64 --cache-to type=inline,mode=max \\\n  --tag superbench-dev --file dockerfile/rocm4.2-pytorch1.7.0.dockerfile .\n")))),(0,a.kt)("h2",{id:"run-container"},"Run container"),(0,a.kt)(i.Z,{groupId:"gpu-platform",defaultValue:"cuda",values:[{label:"CUDA",value:"cuda"},{label:"ROCm",value:"rocm"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"cuda",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -itd --name=sb-dev \\\n  --privileged --net=host --ipc=host \\\n  --gpus=all \\\n  -w /root -v /mnt:/mnt \\\n  superbench-dev bash\n"))),(0,a.kt)(u.Z,{value:"rocm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -itd --name=sb-dev \\\n  --privileged --net=host --ipc=host \\\n  --security-opt seccomp=unconfined --group-add video \\\n  -w /root -v /mnt:/mnt \\\n  superbench-dev bash\n")))))}f.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);