"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[9767],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},c="XGBoost",l={unversionedId:"training/workloads/xgboost",id:"training/workloads/xgboost",title:"XGBoost",description:"Example",source:"@site/docs/training/workloads/xgboost.md",sourceDirName:"training/workloads",slug:"/training/workloads/xgboost",permalink:"/docs/training/workloads/xgboost",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/training/workloads/xgboost.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"MPI",permalink:"/docs/training/workloads/mpi"},next:{title:"Dashboard",permalink:"/docs/training/dashboard"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"CRD Spec",id:"crd-spec",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xgboost"},"XGBoost"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: training.kubedl.io/v1alpha1\nkind: "XGBoostJob"\nmetadata:\n  name: "xgboost-dist-iris-test-train"\nspec:\n  xgbReplicaSpecs:\n    Master:\n      replicas: 1\n      restartPolicy: Never\n      template:\n        apiVersion: v1\n        kind: Pod\n        spec:\n          containers:\n            - name: xgboostjob\n              image: docker.io/merlintang/xgboost-dist-iris:1.1\n              ports:\n                - containerPort: 9991\n                  name: xgboostjob-port\n              imagePullPolicy: Always\n              args:\n                - --job_type=Train\n                - --xgboost_parameter=objective:multi:softprob,num_class:3\n                - --n_estimators=10\n                - --learning_rate=0.1\n                - --model_path=autoAI/xgb-opt/2\n                - --model_storage_type=oss\n                - --oss_param=unknown\n    Worker:\n      replicas: 2\n      restartPolicy: ExitCode\n      template:\n        apiVersion: v1\n        kind: Pod\n        spec:\n          containers:\n            - name: xgboostjob\n              image: docker.io/merlintang/xgboost-dist-iris:1.1\n              ports:\n                - containerPort: 9991\n                  name: xgboostjob-port\n              imagePullPolicy: Always\n              args:\n                - --job_type=Train\n                - --xgboost_parameter="objective:multi:softprob,num_class:3"\n                - --n_estimators=10\n                - --learning_rate=0.1\n')),(0,a.kt)("h2",{id:"crd-spec"},"CRD Spec"),(0,a.kt)("p",null,"Check the CRD definition. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/kubedl/blob/master/apis/training/v1alpha1/xgboostjob_types.go"},"Go ->")))}d.isMDXComponent=!0}}]);