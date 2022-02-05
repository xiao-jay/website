"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[4896],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9985:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:4},c="MPI",l={unversionedId:"training/workloads/mpi",id:"training/workloads/mpi",title:"MPI",description:"Example",source:"@site/docs/training/workloads/mpi.md",sourceDirName:"training/workloads",slug:"/training/workloads/mpi",permalink:"/docs/training/workloads/mpi",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/training/workloads/mpi.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mars",permalink:"/docs/training/workloads/mars"},next:{title:"XGBoost",permalink:"/docs/training/workloads/xgboost"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"Spec",id:"spec",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mpi"},"MPI"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"MPIJob need some specific permission to run. First, apply the following yaml to create rbac resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: mpijob\n  namespace: kubedl\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - pods/exec\n  verbs:\n  - create\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: mpijob\n  namespace: kubedl\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: mpijob\nsubjects:\n- kind: ServiceAccount\n  name: mpijob\n  namespace: kubedl\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: mpijob\n  namespace: kubedl\n')),(0,o.kt)("p",null,"Then apply the following yaml to create a MPIJob. Which is a tensorflow-benchmarks using horovod as the distributed training framework. The launcher-runs-workloads arg's default value is true in kubedl, so the np is 3 and launcher pod requests the gpu resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: training.kubedl.io/v1alpha1\nkind: MPIJob\nmetadata:\n  name: tensorflow-benchmarks\n  namespace: kubedl\nspec:\n  slotsPerWorker: 1\n  cleanPodPolicy: Running\n  mpiReplicaSpecs:\n    Launcher:\n      replicas: 1\n      template:\n         spec:\n           serviceAccountName: mpijob # using the sa created above\n           containers:\n           - image: kubedl/tensorflow-benchmarks:latest\n             name: tensorflow-benchmarks\n             command:\n             - mpirun\n             - --allow-run-as-root\n             - -np\n             - "3"\n             - -bind-to\n             - none\n             - -map-by\n             - slot\n             - -x\n             - NCCL_DEBUG=INFO\n             - -x\n             - LD_LIBRARY_PATH\n             - -x\n             - PATH\n             - -mca\n             - pml\n             - ob1\n             - -mca\n             - btl\n             - ^openib\n             - python\n             - scripts/tf_cnn_benchmarks/tf_cnn_benchmarks.py\n             - --model=resnet101\n             - --batch_size=64\n             - --variable_update=horovod\n             resources:\n              limits:\n                nvidia.com/gpu: 1\n    Worker:\n      replicas: 2\n      template:\n        spec:\n          containers:\n          - image: kubedl/tensorflow-benchmarks:latest\n            name: tensorflow-benchmarks\n            resources:\n              limits:\n                nvidia.com/gpu: 1\n')),(0,o.kt)("p",null,"You can inspect the logs to see the training progress. When the job starts, access the logs from the launcher pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl logs -f tensorflow-benchmarks-launcher  -n kubedl\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'+ POD_NAME=tensorflow-benchmarks-worker-0\n+ shift\n+ /opt/kube/kubectl exec tensorflow-benchmarks-worker-0 -- /bin/sh -c     PATH=/usr/local/bin:$PATH ; export PATH ; LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH ; export LD_LIBRARY_PATH ; DYLD_LIBRARY_PATH=/usr/local/lib:$DYLD_LIBRARY_PATH ; export DYLD_LIBRARY_PATH ;   /usr/local/bin/orted -mca ess "env" -mca ess_base_jobid "844890112" -mca ess_base_vpid 1 -mca ess_base_num_procs "3" -mca orte_node_regex "tensorflow-benchmarks-launcher,tensorflow-benchmarks-worker-[1:0-1]@0(3)" -mca orte_hnp_uri "844890112.0;tcp://10.199.237.61:37649" -mca pml "ob1" -mca btl "^openib" -mca plm "rsh" --tree-spawn -mca orte_parent_uri "844890112.0;tcp://10.199.237.61:37649" -mca plm_rsh_agent "/etc/mpi/kubexec.sh" -mca orte_default_hostfile "/etc/mpi/hostfile" -mca hwloc_base_binding_policy "none" -mca rmaps_base_mapping_policy "slot" -mca pmix "^s1,s2,cray,isolated"\n+ POD_NAME=tensorflow-benchmarks-worker-1\n+ shift\n+ /opt/kube/kubectl exec tensorflow-benchmarks-worker-1 -- /bin/sh -c     PATH=/usr/local/bin:$PATH ; export PATH ; LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH ; export LD_LIBRARY_PATH ; DYLD_LIBRARY_PATH=/usr/local/lib:$DYLD_LIBRARY_PATH ; export DYLD_LIBRARY_PATH ;   /usr/local/bin/orted -mca ess "env" -mca ess_base_jobid "844890112" -mca ess_base_vpid 2 -mca ess_base_num_procs "3" -mca orte_node_regex "tensorflow-benchmarks-launcher,tensorflow-benchmarks-worker-[1:0-1]@0(3)" -mca orte_hnp_uri "844890112.0;tcp://10.199.237.61:37649" -mca pml "ob1" -mca btl "^openib" -mca plm "rsh" --tree-spawn -mca orte_parent_uri "844890112.0;tcp://10.199.237.61:37649" -mca plm_rsh_agent "/etc/mpi/kubexec.sh" -mca orte_default_hostfile "/etc/mpi/hostfile" -mca hwloc_base_binding_policy "none" -mca rmaps_base_mapping_policy "slot" -mca pmix "^s1,s2,cray,isolated"\n\n...\n\n50      images/sec: 68.2 +/- 0.1 (jitter = 0.7) 8.347\n50      images/sec: 68.2 +/- 0.1 (jitter = 0.7) 8.333\n50      images/sec: 68.2 +/- 0.1 (jitter = 0.6) 8.381\n60      images/sec: 68.1 +/- 0.1 (jitter = 0.7) 8.298\n60      images/sec: 68.1 +/- 0.1 (jitter = 0.6) 8.441\n60      images/sec: 68.1 +/- 0.1 (jitter = 0.7) 8.320\n70      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.393\n70      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.268\n70      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.331\n80      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.373\n80      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.356\n80      images/sec: 68.0 +/- 0.1 (jitter = 0.6) 8.112\n90      images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.313\n90      images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.231\n90      images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.362\n100     images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.255\n----------------------------------------------------------------\ntotal images/sec: 203.64\n----------------------------------------------------------------\n100     images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.215\n----------------------------------------------------------------\ntotal images/sec: 203.63\n----------------------------------------------------------------\n100     images/sec: 67.9 +/- 0.1 (jitter = 0.5) 8.466\n----------------------------------------------------------------\ntotal images/sec: 203.64\n----------------------------------------------------------------\n\n')),(0,o.kt)("h2",{id:"spec"},"Spec"),(0,o.kt)("p",null,"Check the CRD definition. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/kubedl/blob/master/apis/training/v1alpha1/mpijob_types.go"},"Go ->")))}u.isMDXComponent=!0}}]);