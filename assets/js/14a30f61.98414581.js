"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[8290],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},p="Design",s={unversionedId:"morphling/design",id:"morphling/design",title:"Design",description:"This diagram illustrates the workflow of a ProflingExperiment.",source:"@site/docs/morphling/design.md",sourceDirName:"morphling",slug:"/morphling/design",permalink:"/docs/morphling/design",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/morphling/design.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/docs/morphling/tutorial"},next:{title:"How to debug",permalink:"/docs/morphling/debug-guide"}},u=[],c={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design"},"Design"),(0,a.kt)("p",null,"This diagram illustrates the workflow of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProflingExperiment"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"morphlingui",src:n(6555).Z,width:"2420",height:"880"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A user submits a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProflingExperiment")," via a RPC or front-end UI interface, specifying the ML model, tunable configuration parameters, optimization objectives, and sampling budgets.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Within the sampling budget, Morphling iteratively communicates with the algorithm server to get the next configuration for sampling.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then Morphling starts a ",(0,a.kt)("inlineCode",{parentName:"p"},"Trial")," to evaluate that sampling.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For each ",(0,a.kt)("inlineCode",{parentName:"p"},"Trial"),", a model serving inference instance ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," is launched, and its \u201creadiness\u201d is reported to trigger a client-side RPS stress-test ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After the client ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," completes, the measured peak RPS is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DB"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Trial")," finishes, and the result is sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProflingExperiment"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProflingExperiment")," completes when the sampling budget is reached."))),(0,a.kt)("p",null,"The sequence diagram of the ProflingExperiment workfolow is shown as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"morphlingui",src:n(2259).Z,width:"1412",height:"1082"})))}m.isMDXComponent=!0},6555:function(e,t,n){t.Z=n.p+"assets/images/imple-2906de1a5076b0ed1897c91ddef39723.png"},2259:function(e,t,n){t.Z=n.p+"assets/images/workflow-a16d4a83eb5c2f0862e7aee006743f2e.png"}}]);