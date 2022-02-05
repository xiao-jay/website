"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[3478],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},498:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),s=["components"],o={sidebar_position:8},i="Job Events Persistency",c={unversionedId:"training/events-persistency",id:"training/events-persistency",title:"Job Events Persistency",description:"Kubernetes object events are persisted for only 3 hours by default.",source:"@site/docs/training/events-persistency.md",sourceDirName:"training",slug:"/training/events-persistency",permalink:"/docs/training/events-persistency",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/training/events-persistency.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Artifacts Sync",permalink:"/docs/training/code-sync"},next:{title:"Job MetaData Persistency",permalink:"/docs/training/metadata-persistency"}},u=[{value:"How To Use",id:"how-to-use",children:[],level:2},{value:"Aliyun-sls Config",id:"aliyun-sls-config",children:[],level:2},{value:"Contributions",id:"contributions",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"job-events-persistency"},"Job Events Persistency"),(0,l.kt)("p",null,"Kubernetes object events are persisted for only 3 hours by default.\nIn addition to job meta persistency, KubeDL also supports persisting Kubernetes events into external storage system (usually time-series databases) to outlive api-server state.\nCurrently, KubeDL watches all Kubernetes events and persist them into external storage."),(0,l.kt)("p",null,"Currently, only ",(0,l.kt)("inlineCode",{parentName:"p"},"aliyun-sls")," is supported."),(0,l.kt)("h2",{id:"how-to-use"},"How To Use"),(0,l.kt)("p",null,"Below is an example for seting up KubeDL to persist events into ",(0,l.kt)("a",{parentName:"p",href:"https://cn.aliyun.com/product/sls"},"alicloud simple log service"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Set up credentials. Create a Secret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: kubedl-sls-config\n  namespace: kubedl-system\ntype: Opaque\nstringData:\n  endpoint: zhangbei.log.aliyuncs.com\n  accessKey: my-ak\n  accessSecret: my-sk\n  project: kubedl-project\n  logStore: kubedl\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Update the KubeDL Deployment spec to include ",(0,l.kt)("inlineCode",{parentName:"li"},"--event-storage aliyun-sls")," in the startup flag and reference the credentials\nvia environment variables.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: kubedl\n  namespace: kubedl-system\n  labels:\n    app: kubedl\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: kubedl\n  template:\n    metadata:\n      labels:\n        app: kubedl\n    spec:\n      containers:\n      - image: kubedl/kubedl:v0.3.0\n        imagePullPolicy: Always\n        name: kubedl-manager\n        args:\n        - "--event-storage"\n        - "aliyun-sls"\n        env:\n        - name: SLS_ENDPOINT\n          value:\n          valueFrom:\n            secretKeyRef:\n              name: kubedl-sls-config\n              key: endpoint\n        - name: SLS_KEY_ID\n          value:\n          valueFrom:\n            secretKeyRef:\n              name: kubedl-sls-config\n              key: accessKey\n        - name: SLS_KEY_SECRET\n          value:\n          valueFrom:\n            secretKeyRef:\n              name: kubedl-sls-config\n              key: accessSecret\n        - name: SLS_PROJECT\n          value:\n          valueFrom:\n            secretKeyRef:\n              name: kubedl-sls-config\n              key: project\n        - name: SLS_LOG_STORE\n          value:\n          valueFrom:\n            secretKeyRef:\n              name: kubedl-sls-config\n              key: logStore\n')),(0,l.kt)("h2",{id:"aliyun-sls-config"},"Aliyun-sls Config"),(0,l.kt)("p",null,"The configs defined in the aforementioned ",(0,l.kt)("inlineCode",{parentName:"p"},"secret"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"The sls endpoint to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The alicloud account access key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"The alicloud account access secret.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project"),(0,l.kt)("td",{parentName:"tr",align:null},"The sls project for storing the events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logStore"),(0,l.kt)("td",{parentName:"tr",align:null},"The sls log store in the project for storing the events")))),(0,l.kt)("h2",{id:"contributions"},"Contributions"),(0,l.kt)("p",null,"Currently, only ",(0,l.kt)("inlineCode",{parentName:"p"},"aliyun-sls")," is supported. You are welcome to contribute your own storage plugin."))}d.isMDXComponent=!0}}]);