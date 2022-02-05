"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[4845],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={sidebar_position:7},s="How to debug",u={unversionedId:"morphling/debug-guide",id:"morphling/debug-guide",title:"How to debug",description:"DEBUG with local process",source:"@site/docs/morphling/debug-guide.md",sourceDirName:"morphling",slug:"/morphling/debug-guide",permalink:"/docs/morphling/debug-guide",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/morphling/debug-guide.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/docs/morphling/design"},next:{title:"Morphling UI",permalink:"/docs/morphling/ui"}},p=[{value:"DEBUG with local process",id:"debug-with-local-process",children:[],level:2},{value:"Troubleshoot with Pod",id:"troubleshoot-with-pod",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-debug"},"How to debug"),(0,l.kt)("h2",{id:"debug-with-local-process"},"DEBUG with local process"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Credentials"),(0,l.kt)("p",{parentName:"li"},"  To run Morphling locally, you must have the access to the kubernetes cluster, the credential is a distributed\nkube-config cert file.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install CRDs and run Morphling components"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kube-config cert file\nexport KUBECONFIG=${PATH_TO_CONFIG}\n\n# install CRDs\nmake install\n\n# install basic components, e.g., PV, mysql-db\nkubectl apply -f manifests/configmap\nkubectl apply -f manifests/pv\nkubectl apply -f manifests/mysql-db\nkubectl apply -f manifests/db-manager\n\n# run Morphling controller locally\nmake run\n")))),(0,l.kt)("h2",{id:"troubleshoot-with-pod"},"Troubleshoot with Pod"),(0,l.kt)("p",null,"The followings are the steps to Troubleshoot Morphling using Pod."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check if all components are running successfully:\n",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get deployment -n morphling-system"),". If succeed, you will see\nthree ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"ready"))," deployments: morphling-controller, morphling-db-manager, and morphling-mysql.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the Morphling controller logs manually ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl -n morphling-system logs morphling-controller-XXX")," for debugging.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your cluster has enabled Kubernetes DNS service by ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get svc -n kube-system kube-dns"),". See this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mattermost/mattermost-docker/issues/419"},"GitHub Issue")," for detailed discussion.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the ClusterRoleBinding to make sure morphling-controller has been granted corresponding authorities by ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get ClusterRoleBinding morphling-controller"),". If you cannot grant Morphling the cluster-scope authorities, you may need\nto change the ClusterRole to Role in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubedl-io/morphling/blob/main/manifests/controllers/rbac.yaml"},"manifest yaml"),".\nSee this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder/issues/1366"},"GitHub Issue")," for detailed discussion."))))}m.isMDXComponent=!0}}]);