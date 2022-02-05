"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[3122],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=i,d=s["".concat(m,".").concat(g)]||s[g]||c[g]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3717:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={sidebar_position:5},m="Tutorial",p={unversionedId:"morphling/tutorial",id:"morphling/tutorial",title:"Tutorial",description:"This tutorial will walk through Morphling Tuning (Morphling) concepts.",source:"@site/docs/morphling/tutorial.md",sourceDirName:"morphling",slug:"/morphling/tutorial",permalink:"/docs/morphling/tutorial",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/morphling/tutorial.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/morphling/quick-start"},next:{title:"Design",permalink:"/docs/morphling/design"}},u=[{value:"Install Morphling",id:"install-morphling",children:[],level:2},{value:"Run a tuning experiment",id:"run-a-tuning-experiment",children:[],level:2},{value:"Inspect the tuning experiment",id:"inspect-the-tuning-experiment",children:[],level:2},{value:"Inspect the tuning trials",id:"inspect-the-tuning-trials",children:[],level:2}],c={toc:u};function s(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"This tutorial will walk through ",(0,a.kt)("a",{parentName:"p",href:"intro"},"Morphling Tuning (Morphling)")," concepts.\nYou can also check the ","[video demo]",'({{< ref "tuning/tutorial/video" >}}).'),(0,a.kt)("h2",{id:"install-morphling"},"Install Morphling"),(0,a.kt)("p",null,"Follow the instructions to install Morphling. ",(0,a.kt)("a",{parentName:"p",href:"install-using-helm"},"Go \u2192")),(0,a.kt)("h2",{id:"run-a-tuning-experiment"},"Run a tuning experiment"),(0,a.kt)("p",null,"This example tunes a mobilenet model using grid search. The tunable configurations include resource/cpu, resource/memory, and runtime/batch_size."),(0,a.kt)("p",null,"From project root, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f examples/experiment/experiment-mobilenet-grid.yaml\n")),(0,a.kt)("p",null,"Explanation on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubedl-io/morphling/blob/main/examples/experiment/experiment-mobilenet-grid.yaml"},"YAML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "morphling.kubedl.io/v1alpha1"\nkind: ProfilingExperiment\nmetadata:\n  namespace: morphling-system\n  name: mobilenet-experiment-grid-1\nspec:\n  objective:\n    type: maximize\n    objectiveMetricName: qps\n  algorithm:\n    algorithmName: grid\n  parallelism: 1\n  maxNumTrials: 18\n  clientTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: pi\n            image: kubedl/morphling-http-client:demo\n            env:\n              - name: TF_CPP_MIN_LOG_LEVEL\n                value: "3"\n              - name: MODEL_NAME\n                value: "mobilenet"\n            resources:\n              requests:\n                cpu: 800m\n                memory: "1800Mi"\n              limits:\n                cpu: 800m\n                memory: "1800Mi"\n            command: [ "python3" ]\n            args: ["morphling_client.py", "--model", "mobilenet", "--printLog", "True", "--num_tests", "10"]\n            imagePullPolicy: IfNotPresent\n          restartPolicy: Never\n      backoffLimit: 1\n  servicePodTemplate:\n    template:\n      spec:\n        containers:\n          - name: resnet-container\n            image: kubedl/morphling-tf-model:demo-cv\n            imagePullPolicy: IfNotPresent\n            env:\n              - name: MODEL_NAME\n                value: "mobilenet"\n            resources:\n              requests:\n                cpu: 1\n                memory: "1800Mi"\n              limits:\n                cpu: 1\n                memory: "1800Mi"\n            ports:\n              - containerPort: 8500\n  tunableParameters:\n    - category: "resource"\n      parameters:\n        - parameterType: discrete\n          name: "cpu"\n          feasibleSpace:\n            list:\n              - "2000m"\n        - parameterType: discrete\n          name: "memory"\n          feasibleSpace:\n            list:\n              - "200Mi"\n              - "2000Mi"\n    - category: "env"\n      parameters:\n        - parameterType: discrete\n          name: "BATCH_SIZE"\n          feasibleSpace:\n            list:\n              - "1"\n              - "2"\n')),(0,a.kt)("p",null,"Notes\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"servicePodTemplate")," field defines the model serving pod template, where the model is stored in the docker image. In this demo, we use tensorflow-serving as the serving backends."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"clientTemplate")," field defines the stress-testing k8s job, which sends concurrent model serving requests to the serving pod, monitoring the response time, and eventually measures the maximum request concurrency this model can serve under a specific configuration. Morphling provides out-of-the-box stress-testing docker image for HTTP request.\nCheck the ",(0,a.kt)("a",{parentName:"li",href:"design"},"documentation")," for more details")),(0,a.kt)("h2",{id:"inspect-the-tuning-experiment"},"Inspect the tuning experiment"),(0,a.kt)("p",null,"After the tuning experiment succeeded, run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pe"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                          STATE       AGE   OBJECT NAME   OPTIMAL OBJECT VALUE   OPTIMAL PARAMETERS\nmobilenet-experiment-grid-1   Succeeded   20h   qps           32                     [map[category:env name:BATCH_SIZE value:2] map[category:resource name:cpu value:2000m] map[category:resource name:memory value:2000Mi]]\n")),(0,a.kt)("p",null,"Here, an optimal configuration is searched."),(0,a.kt)("h2",{id:"inspect-the-tuning-trials"},"Inspect the tuning trials"),(0,a.kt)("p",null,"Inspect the trials tested during the tuning experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get trial\nNAME                                   STATE       AGE   OBJECT NAME   OBJECT VALUE   PARAMETERS\nmobilenet-experiment-grid-1-c588pqnx   Failed      20h   qps           0.0            [map[category:env name:BATCH_SIZE value:2] map[category:resource name:cpu value:2000m] map[category:resource name:memory value:200Mi]]\nmobilenet-experiment-grid-1-f45hb5gp   Succeeded   20h   qps           26             [map[category:env name:BATCH_SIZE value:1] map[category:resource name:cpu value:2000m] map[category:resource name:memory value:2000Mi]]\nmobilenet-experiment-grid-1-q9s8qwhr   Failed      20h   qps           0.0            [map[category:env name:BATCH_SIZE value:1] map[category:resource name:cpu value:2000m] map[category:resource name:memory value:200Mi]]\nmobilenet-experiment-grid-1-sqzv8v26   Succeeded   20h   qps           32             [map[category:env name:BATCH_SIZE value:2] map[category:resource name:cpu value:2000m] map[category:resource name:memory value:2000Mi]]\n")),(0,a.kt)("p",null,"You can also monitor the tuning process, and obtain the tuning results from Morphling UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"morphlingui",src:t(9300).Z,width:"1670",height:"1216"})))}s.isMDXComponent=!0},9300:function(e,n,t){n.Z=t.p+"assets/images/ui-589095bbbf28758bc94940faa840dfe0.png"}}]);