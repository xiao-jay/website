"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[276],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:10},c="Tensorboard",l={unversionedId:"training/tensorboard",id:"training/tensorboard",title:"Tensorboard",description:"KubeDL can attach a tensorboard to a running tensorflow job.",source:"@site/docs/training/tensorboard.md",sourceDirName:"training",slug:"/training/tensorboard",permalink:"/docs/training/tensorboard",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/training/tensorboard.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Job MetaData Persistency",permalink:"/docs/training/metadata-persistency"},next:{title:"Introduction",permalink:"/docs/model/intro"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tensorboard"},"Tensorboard"),(0,a.kt)("p",null,"KubeDL can attach a tensorboard to a running tensorflow job.\nUsers can visualize the tensorflow job with the tensorboard."),(0,a.kt)("p",null,"To use tensorboard, users must ensure that the tensorflow job logs are created and stored in a kubernetes remote volume (emptyDir, hostPath and local volume are not supported) and the tensorboard pod can mount the volume."),(0,a.kt)("p",null,"Users can set the tensorboard config in the job's annotation with key ",(0,a.kt)("inlineCode",{parentName:"p"},"kubedl.io/tensorboard-config")," as below.\nAfter that, users can access the tensorboard through this URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<ingress host>/<ingress pathPrefix>/<job namespace>/<job name>"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'    apiVersion: "training.kubedl.io/v1alpha1"\n    kind: "TFJob"\n    metadata:\n      name: "mnist"\n      namespace: kubedl\n      annotations:\n +      kubedl.io/tensorboard-config: \'{"logDir":"/var/log/training","ttlSecondsAfterJobFinished":3600,"ingressSpec":{"host":"locahost","pathPrefix":"/tb"}}\'\n    spec:\n      cleanPodPolicy: None\n      tfReplicaSpecs:\n        ...\n')),(0,a.kt)("p",null,"A full list of supported options are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "logDir": "xxx",            // the path of the tensorflow job logs (required).\n    "ttlSecondsAfterJobFinished": 3600,     // the TTL to clean up the tensorboard after the job is finished (required).\n    "image": "xxx",             // the image of the tensorboard, default value is the job\'s image (optional).\n    "ingressSpec": {            // the ingress of the tensorboard (required).\n        "host": "xxx",          // the ingress host (required).\n        "pathPrefix": "xxx",    // the pathPrefix will be set to the ingress path with the pattern: <pathPrefix>/<job namespace>/<job name> (required).\n        "annotations": {        // the annotations of the ingress (optional).\n            "xxx": "xxx"\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);