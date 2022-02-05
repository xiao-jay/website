"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[6025],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Install Using YAML Files",c={unversionedId:"installation/install-using-yaml",id:"installation/install-using-yaml",title:"Install Using YAML Files",description:"Install CRDs",source:"@site/docs/installation/install-using-yaml.md",sourceDirName:"installation",slug:"/installation/install-using-yaml",permalink:"/docs/installation/install-using-yaml",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/install-using-yaml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install Using Helm",permalink:"/docs/installation/install-using-helm"},next:{title:"Introduction",permalink:"/docs/training/intro"}},u=[{value:"Install CRDs",id:"install-crds",children:[],level:2},{value:"Install KubeDL controller",id:"install-kubedl-controller",children:[],level:2},{value:"Install the KubeDL Dashboard",id:"install-the-kubedl-dashboard",children:[],level:2},{value:"Uninstall KubeDL controller and dashboard",id:"uninstall-kubedl-controller-and-dashboard",children:[],level:2},{value:"Delete CRDs",id:"delete-crds",children:[],level:2},{value:"Enable specific job Kind",id:"enable-specific-job-kind",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-using-yaml-files"},"Install Using YAML Files"),(0,r.kt)("h2",{id:"install-crds"},"Install CRDs"),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/kubedl"},"project root directory"),", run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/crd/bases/\n")),(0,r.kt)("h2",{id:"install-kubedl-controller"},"Install KubeDL controller"),(0,r.kt)("p",null,"A single yaml file including everything: deployment, rbac etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubedl-io/kubedl/master/config/manager/all_in_one.yaml\n")),(0,r.kt)("p",null,"KubeDL controller is installed under ",(0,r.kt)("inlineCode",{parentName:"p"},"kubedl-system")," namespace."),(0,r.kt)("p",null,"Running the command from master branch uses the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kubedl/kubedl/tags?page=1&ordering=last_updated"},"daily docker image.")),(0,r.kt)("h2",{id:"install-the-kubedl-dashboard"},"Install the KubeDL Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubedl-io/kubedl/master/console/dashboard.yaml\n")),(0,r.kt)("p",null,"The dashboard will list nodes. Hence, its service account requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"list node permission"),".\nCheck the ",(0,r.kt)("a",{parentName:"p",href:"/docs/training/dashboard"},"dashboard.")),(0,r.kt)("h2",{id:"uninstall-kubedl-controller-and-dashboard"},"Uninstall KubeDL controller and dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete namespace kubedl-system\n")),(0,r.kt)("h2",{id:"delete-crds"},"Delete CRDs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd | grep kubedl.io | cut -d ' ' -f 1 | xargs kubectl delete crd\n")),(0,r.kt)("h2",{id:"enable-specific-job-kind"},"Enable specific job Kind"),(0,r.kt)("p",null,"KubeDL supports all kinds of jobs(tensorflow, pytorch etc.) in a single Kubernetes operator. You can selectively enable the kind of jobs to support.\nThere are three options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Default option. Just install the job CRDs required. KubeDL will automatically enable the corresponding job controller."),(0,r.kt)("li",{parentName:"ol"},"Set env ",(0,r.kt)("inlineCode",{parentName:"li"},"WORKLOADS_ENABLE")," in KubeDL container. The value is a list of job types to be enabled. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"WORKLOADS_ENABLE=TFJob,PytorchJob")," means only Tensorflow and Pytorch Job are enabled."),(0,r.kt)("li",{parentName:"ol"},"Set startup flags ",(0,r.kt)("inlineCode",{parentName:"li"},"--workloads")," in KubeDL container command args. The value is a list of job types to be enabled like ",(0,r.kt)("inlineCode",{parentName:"li"},"--workloads TFJob,PytorchJob"),".")))}p.isMDXComponent=!0}}]);