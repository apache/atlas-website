!function(e){function t(t){for(var o,a,r=t[0],s=t[1],i=t[2],l=t[3]||[],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(D,a)&&D[a]&&d.push(D[a][0]),D[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(_&&_(t),T.push.apply(T,l);d.length;)d.shift()();return H.push.apply(H,i||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==D[r]&&(o=!1)}o&&(H.splice(t--,1),e=$($.s=n[0]))}return 0===H.length&&(T.forEach((function(e){if(void 0===D[e]){D[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",$.nc&&t.setAttribute("nonce",$.nc),t.rel="prefetch",t.as="script",t.href=z(e),document.head.appendChild(t)}})),T.length=0),e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!k[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0===--b&&0===y&&C()}(e,t),o&&o(e,t)};var a,r=!0,s="36f732bbf8c7eaee188d",i={},l=[],u=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(g={})[t]=e[t],m("ready");break;case"ready":P(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:E,apply:I,status:function(e){if(!e)return p;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:i[t]};return a=void 0,n}var c=[],p="idle";function m(e){p=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var h,g,f,v,b=0,y=0,x={},w={},k={};function A(e){return+e+""===e?+e:e}function E(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,m("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,a=$.p+""+s+".hot-update.json";o.open("GET",a,!0),o.timeout=t,o.send(null)}catch(r){return n(r)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(r){return void n(r)}e(t)}}}))).then((function(e){if(!e)return m(j()?"ready":"idle"),null;w={},x={},k=e.c,f=e.h,m("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in g={},D)S(n);return"prepare"===p&&0===y&&0===b&&C(),t}));var t}function S(e){k[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=$.p+""+e+"."+s+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function C(){m("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then((function(){return I(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(A(n));e.resolve(t)}}function I(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var o,r,u,d,c;function p(e){for(var t=[e],n={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var a=o.pop(),r=a.id,s=a.chain;if((d=O[r])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:r};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:r};for(var i=0;i<d.parents.length;i++){var l=d.parents[i],u=O[l];if(u){if(u.hot._declinedDependencies[r])return{type:"declined",chain:s.concat([l]),moduleId:r,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[r]?(n[l]||(n[l]=[]),h(n[l],[r])):(delete n[l],t.push(l),o.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}j();var b={},y=[],x={},w=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var E in g)if(Object.prototype.hasOwnProperty.call(g,E)){var S;c=A(E),S=g[E]?p(c):{type:"disposed",moduleId:E};var C=!1,I=!1,P=!1,H="";switch(S.chain&&(H="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(C=new Error("Aborted because of self decline: "+S.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(S),n.ignoreUnaccepted||(C=new Error("Aborted because "+c+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(S),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(S),P=!0;break;default:throw new Error("Unexception type "+S.type)}if(C)return m("abort"),Promise.reject(C);if(I)for(c in x[c]=g[c],h(y,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,c)&&(b[c]||(b[c]=[]),h(b[c],S.outdatedDependencies[c]));P&&(h(y,[S.moduleId]),x[c]=w)}var T,z=[];for(r=0;r<y.length;r++)c=y[r],O[c]&&O[c].hot._selfAccepted&&x[c]!==w&&!O[c].hot._selfInvalidated&&z.push({module:c,parents:O[c].parents.slice(),errorHandler:O[c].hot._selfAccepted});m("dispose"),Object.keys(k).forEach((function(e){!1===k[e]&&function(e){delete D[e]}(e)}));var M,L,N=y.slice();for(;N.length>0;)if(c=N.pop(),d=O[c]){var _={},B=d.hot._disposeHandlers;for(u=0;u<B.length;u++)(o=B[u])(_);for(i[c]=_,d.hot.active=!1,delete O[c],delete b[c],u=0;u<d.children.length;u++){var R=O[d.children[u]];R&&((T=R.parents.indexOf(c))>=0&&R.parents.splice(T,1))}}for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&(d=O[c]))for(L=b[c],u=0;u<L.length;u++)M=L[u],(T=d.children.indexOf(M))>=0&&d.children.splice(T,1);m("apply"),void 0!==f&&(s=f,f=void 0);for(c in g=void 0,x)Object.prototype.hasOwnProperty.call(x,c)&&(e[c]=x[c]);var F=null;for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&(d=O[c])){L=b[c];var W=[];for(r=0;r<L.length;r++)if(M=L[r],o=d.hot._acceptedDependencies[M]){if(-1!==W.indexOf(o))continue;W.push(o)}for(r=0;r<W.length;r++){o=W[r];try{o(L)}catch(U){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:L[r],error:U}),n.ignoreErrored||F||(F=U)}}}for(r=0;r<z.length;r++){var q=z[r];c=q.module,l=q.parents,a=c;try{$(c)}catch(U){if("function"===typeof q.errorHandler)try{q.errorHandler(U)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:G,originalError:U}),n.ignoreErrored||F||(F=G),F||(F=U)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:U}),n.ignoreErrored||F||(F=U)}}if(F)return m("fail"),Promise.reject(F);if(v)return t(n).then((function(e){return y.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return m("idle"),new Promise((function(e){e(y)}))}(t=t||{})}function j(){if(v)return g||(g={}),v.forEach(P),v=void 0,!0}function P(t){Object.prototype.hasOwnProperty.call(g,t)||(g[t]=e[t])}var O={},D={1:0},H=[],T=[];function z(e){return $.p+"static/js/"+({2:"documents-asf-asfinfo",3:"documents-business-metadata",4:"documents-classification-propagation",5:"documents-downloads-downloads",6:"documents-glossary",7:"documents-high-availability",8:"documents-high-level-architecture",9:"documents-hook-hook-falcon",10:"documents-hook-hook-h-base",11:"documents-hook-hook-hive",12:"documents-hook-hook-kafka",13:"documents-hook-hook-sqoop",14:"documents-hook-hook-storm",15:"documents-import-export-export-api",16:"documents-import-export-export-hdfsapi",17:"documents-import-export-export-import-audits",18:"documents-import-export-import-api",19:"documents-import-export-import-api-options",20:"documents-import-export-import-entity-transforms",21:"documents-import-export-import-export-api",22:"documents-import-export-incremental-export",23:"documents-migration-migration-0-8-to-1-0",24:"documents-misc-atlas-server",25:"documents-misc-replicated-attributes",26:"documents-misc-soft-reference",27:"documents-notifications",28:"documents-overview",29:"documents-project-info-issue-tracking",30:"documents-project-info-mailing-lists",31:"documents-project-info-project-info",32:"documents-project-info-project-license",33:"documents-project-info-source-repository",34:"documents-project-info-team-list",35:"documents-rest-api",36:"documents-search-search-advanced",37:"documents-search-search-basic",38:"documents-security-atlas-ranger-authorizer",39:"documents-security-atlas-simple-authorizer",40:"documents-security-authentication",41:"documents-security-authorization-model",42:"documents-security-security",43:"documents-setup-build-instruction",44:"documents-setup-configuration",45:"documents-setup-eclipse-setup",46:"documents-setup-installation-instruction",47:"documents-setup-quick-start",48:"documents-tools-atlas-repair-index",49:"documents-type-system",50:"documents-whats-new-whats-new-1-0",51:"documents-whats-new-whats-new-2-0",52:"documents-whats-new-whats-new-2-1",53:"documents-whats-new-whats-new-2-2"}[e]||e)+"."+{2:"d7c81450",3:"ec7e0de7",4:"cb966787",5:"224d1989",6:"3ec24a3c",7:"dfb6367f",8:"78c406e7",9:"b77e876b",10:"f8642bef",11:"14e0b2d6",12:"9f036cc3",13:"9f0e00cd",14:"a337cab5",15:"88a787c6",16:"d891e408",17:"9b4eb7eb",18:"e8d3fdb8",19:"413d3379",20:"d4d181fb",21:"e9dc2cb0",22:"9d6b7122",23:"f59821d4",24:"1cc04c59",25:"2d638216",26:"1ff8cf49",27:"1e042b5f",28:"9fe13a1b",29:"1a9686c5",30:"3bbd892f",31:"986ddcbe",32:"59814a38",33:"ee244b6f",34:"bcc2ebef",35:"69c71da2",36:"37ccee61",37:"148d3bf2",38:"fd8c8f1d",39:"268b72c8",40:"3189a303",41:"b83b4231",42:"4157517e",43:"f057d3ff",44:"30978064",45:"2cac7021",46:"7d91df7a",47:"b0f49aeb",48:"ebacc4f6",49:"e5f88c3e",50:"39ccd001",51:"630f7e2b",52:"6e25ec75",53:"278007f6"}[e]+".js"}function $(t){if(O[t])return O[t].exports;var n=O[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=O[e];if(!t)return $;var n=function(n){return t.hot.active?(O[n]?-1===O[n].parents.indexOf(e)&&O[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),$(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return $[e]},set:function(t){$[e]=t}}};for(var r in $)Object.prototype.hasOwnProperty.call($,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(n,r,o(r));return n.e=function(e){return"ready"===p&&m("prepare"),y++,$.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(x[e]||S(e),0===y&&0===b&&C())}},n.t=function(e,t){return 1&t&&(e=n(e)),$.t(e,-2&t)},n}(t)),n.l=!0,n.exports}$.e=function(e){var t=[],n=D[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=D[e]=[t,o]}));t.push(n[2]=o);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,$.nc&&r.setAttribute("nonce",$.nc),r.src=z(e),0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous");var s=new Error;a=function(t){r.onerror=r.onload=null,clearTimeout(i);var n=D[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}D[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:r})}),12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(t)},$.m=e,$.c=O,$.d=function(e,t,n){$.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},$.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},$.t=function(e,t){if(1&t&&(e=$(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if($.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)$.d(n,o,function(t){return e[t]}.bind(null,o));return n},$.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return $.d(t,"a",t),t},$.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},$.p="/",$.oe=function(e){throw console.error(e),e},$.h=function(){return s};var M=window.webpackJsonp=window.webpackJsonp||[],L=M.push.bind(M);M.push=t,M=M.slice();for(var N=0;N<M.length;N++)t(M[N]);var _=L,B=(H.push([0,0]),n());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Apache Atlas \u2013 Data Governance and Metadata framework for Hadoop","description":"Apache Atlas \u2013 Data Governance and Metadata framework for Hadoop","menu":["Overview",{"name":"Documentation","menu":[{"name":"Features","menu":["High Level Architecture","Type System","Glossary","Classification Propagation","Notifications","High Availability","Business Metadata"]},{"name":"Search","menu":["Basic Search","Advanced Search"]},{"name":"Hooks","menu":["HBase","Hive","Sqoop","Storm","Kafka","Falcon"]},{"name":"Import/Export","menu":["Import API","Import API Options","Import Entity Transforms","Import Export API","Export API","Export HDFS API","Export Import Audits","Incremental Export"]},{"name":"Security","menu":["Security Details","Authentication","Authorization Model","Atlas Simple Authorizer","Atlas Ranger Authorizer"]},{"name":"Setup","menu":["Quick Start","Configuration","Build Instruction","Installation Instruction"]},"REST API",{"name":"Tools","menu":["Atlas Repair Index"]},{"name":"Misc","menu":["Atlas Server","Replicated Attributes","Soft Reference"]}]},{"name":"Downloads","menu":["Download",{"name":"Whats New","menu":["WhatsNew-2.2","WhatsNew-2.1","WhatsNew-2.0","WhatsNew-1.0"]},"Migration"]},"For Developers",{"name":"Project Info","menu":["Project Information","Mailing Lists","Team List","Issue Tracking","License","Source Repository"]},"ASF"],"version":"1.0.0","repository":null,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","files":"**/*.{md,mdx}","base":"/","baseUrl":"./public","src":"./src","public":"./src/resources","dest":"/site","atlasVersions":[{"id":2,"href":"/2.0.0/index.html","title":"2.0.0","label":"2.0.0"},{"id":3,"href":"/1.2.0/index.html","title":"1.2.0","label":"1.2.0"},{"id":4,"href":"/1.1.0/index.html","title":"1.1.0","label":"1.1.0"},{"id":5,"href":"/1.0.0/index.html","title":"1.0.0","label":"1.0.0"},{"id":6,"href":"/0.8.4/index.html","title":"0.8.4","label":"0.8.4"},{"id":7,"href":"/0.8.3/index.html","title":"0.8.3","label":"0.8.3"},{"id":8,"href":"/0.8.2/index.html","title":"0.8.2","label":"0.8.2"},{"id":9,"href":"/0.8.1/index.html","title":"0.8.1","label":"0.8.1"},{"id":10,"href":"/0.8.0-incubating/index.html","title":"0.8-incubating","label":"0.8-incubating"},{"id":11,"href":"/0.7.1-incubating/index.html","title":"0.7.1-incubating","label":"0.7.1-incubating"},{"id":12,"href":"/0.7.0-incubating/index.html","title":"0.7-incubating","label":"0.7-incubating"},{"id":13,"href":"/0.6.0-incubating/index.html","title":"0.6-incubating","label":"0.6-incubating"},{"id":14,"href":"/0.5.0-incubating/index.html","title":"0.5-incubating","label":"0.5-incubating"}],"theme":"theme/","htmlContext":{"favicon":"public/images/favicon.ico"}},"entries":[{"key":"documents/BusinessMetadata.md","value":{"name":"Business Metadata","route":"/BusinessMetadata","menu":"Documentation","submenu":"Features","id":"4608c675c39eb2f6d2f13f6495dc881b","filepath":"documents/BusinessMetadata.md","link":"","slug":"documents-business-metadata","headings":[{"slug":"business-metadata","depth":1,"value":"Business Metadata"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"create-business-metadata","depth":2,"value":"Create Business Metadata"},{"slug":"add-business-attributes-on-entity-instances","depth":2,"value":"Add business attributes on entity instances"},{"slug":"search-for-entities-using-business-attributes","depth":2,"value":"Search for entities using business attributes"},{"slug":"authorizations","depth":2,"value":"Authorizations"},{"slug":"rest-apis","depth":2,"value":"REST APIs"}]}},{"key":"documents/ClassificationPropagation.md","value":{"name":"Classification Propagation","route":"/ClassificationPropagation","menu":"Documentation","submenu":"Features","id":"65a0fa2b70ad29423c044848976ed3ff","filepath":"documents/ClassificationPropagation.md","link":"","slug":"documents-classification-propagation","headings":[{"slug":"classification-propagation","depth":1,"value":"Classification Propagation"},{"slug":"use-cases","depth":2,"value":"Use Cases"},{"slug":"add-classification-to-an-entity","depth":2,"value":"Add classification to an entity"},{"slug":"update-classification-associated-with-an-entity","depth":2,"value":"Update classification associated with an entity"},{"slug":"remove-classification-associated-with-an-entity","depth":2,"value":"Remove classification associated with an entity"},{"slug":"add-lineage-between-entities","depth":2,"value":"Add lineage between entities"},{"slug":"delete-an-entity","depth":2,"value":"Delete an entity"},{"slug":"control-propagation","depth":2,"value":"Control Propagation"},{"slug":"propagate-flag-in-classification","depth":2,"value":"Propagate flag in classification"},{"slug":"propagate-flag-in-lineage-edge","depth":2,"value":"Propagate flag in lineage edge"},{"slug":"block-propagation-of-specific-classifications-in-lineage-edge","depth":2,"value":"Block propagation of specific classifications in lineage edge"},{"slug":"notifications-and-audit","depth":2,"value":"Notifications and Audit"},{"slug":"glossary","depth":2,"value":"Glossary"}]}},{"key":"documents/Glossary.md","value":{"name":"Glossary","route":"/Glossary","menu":"Documentation","submenu":"Features","id":"63b6b3d0c273e4eb20395cf2de83c245","filepath":"documents/Glossary.md","link":"","slug":"documents-glossary","headings":[{"slug":"glossary","depth":1,"value":"Glossary"},{"slug":"use-cases","depth":3,"value":"Use cases"},{"slug":"what-is-a-glossary-term-","depth":3,"value":"What is a Glossary term ?"},{"slug":"what-is-a-glossary-category-","depth":3,"value":"What is a Glossary category ?"},{"slug":"ui-interactions","depth":3,"value":"UI interactions"},{"slug":"glossary-tab","depth":4,"value":"Glossary tab"},{"slug":"term-context-menu","depth":5,"value":"Term context menu"},{"slug":"term-detail-page","depth":5,"value":"Term detail page"},{"slug":"add-classification-to-term","depth":5,"value":"Add classification to Term"},{"slug":"create-term-relationship-with-other-term","depth":5,"value":"Create term relationship with other term"},{"slug":"categorize-a-term","depth":5,"value":"Categorize a term"},{"slug":"category-view","depth":4,"value":"Category view"},{"slug":"category-context-menu","depth":5,"value":"Category context menu"},{"slug":"category-detail-page","depth":5,"value":"Category detail page"},{"slug":"categorize-term","depth":5,"value":"Categorize term"},{"slug":"term-assignment-flow","depth":4,"value":"Term assignment flow"},{"slug":"assign-term","depth":5,"value":"Assign term"},{"slug":"propagated-classification","depth":5,"value":"Propagated classification"},{"slug":"search-using-a-term","depth":4,"value":"Search using a term"},{"slug":"summary-of-rest-interactions","depth":4,"value":"Summary of REST interactions"},{"slug":"json-structure","depth":5,"value":"JSON structure"},{"slug":"create-operations","depth":5,"value":"CREATE operations"},{"slug":"read-operations","depth":5,"value":"READ operations"},{"slug":"update-operations","depth":5,"value":"UPDATE operations"},{"slug":"delete-operations","depth":5,"value":"DELETE operations"}]}},{"key":"documents/HighAvailability.md","value":{"name":"High Availability","route":"/HighAvailability","menu":"Documentation","submenu":"Features","id":"d7ff0f0d643531e940f5ac61200b2ce3","filepath":"documents/HighAvailability.md","link":"","slug":"documents-high-availability","headings":[{"slug":"fault-tolerance-and-high-availability-options","depth":1,"value":"Fault Tolerance and High Availability Options"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"atlas-web-service","depth":2,"value":"Atlas Web Service"},{"slug":"setting-up-the-high-availability-feature-in-atlas","depth":3,"value":"Setting up the High Availability feature in Atlas"},{"slug":"configuring-clients-to-use-the-high-availability-feature","depth":3,"value":"Configuring clients to use the High Availability feature"},{"slug":"using-an-intermediate-proxy","depth":4,"value":"Using an intermediate proxy"},{"slug":"using-automatic-detection-of-active-instance","depth":4,"value":"Using automatic detection of active instance"},{"slug":"implementation-details-of-atlas-high-availability","depth":3,"value":"Implementation Details of Atlas High Availability"},{"slug":"metadata-store","depth":2,"value":"Metadata Store"},{"slug":"index-store","depth":2,"value":"Index Store"},{"slug":"solr","depth":3,"value":"Solr"},{"slug":"elasticsearch--tech-preview","depth":3,"value":"Elasticsearch  (Tech Preview)"},{"slug":"notification-server","depth":2,"value":"Notification Server"},{"slug":"known-issues","depth":2,"value":"Known Issues"}]}},{"key":"documents/HighLevelArchitecture.md","value":{"name":"High Level Architecture","route":"/Architecture","menu":"Documentation","submenu":"Features","id":"8e88cd5c4a29777f45958b0444e656a4","filepath":"documents/HighLevelArchitecture.md","link":"","slug":"documents-high-level-architecture","headings":[{"slug":"architecture","depth":1,"value":"Architecture"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"atlas-high-level-architecture---overview","depth":2,"value":"Atlas High Level Architecture - Overview"},{"slug":"core","depth":3,"value":"Core"},{"slug":"integration","depth":3,"value":"Integration"},{"slug":"metadata-sources","depth":3,"value":"Metadata sources"},{"slug":"applications","depth":3,"value":"Applications"}]}},{"key":"documents/Notifications.md","value":{"name":"Notifications","route":"/Notifications","menu":"Documentation","submenu":"Features","id":"d811bdbc7388c22282f7f3b64f9035b1","filepath":"documents/Notifications.md","link":"","slug":"documents-notifications","headings":[{"slug":"notifications","depth":1,"value":"Notifications"},{"slug":"notifications-from-apache-atlas","depth":2,"value":"Notifications from Apache Atlas"},{"slug":"notifications---v2-apache-atlas-version-10","depth":3,"value":"Notifications - V2: Apache Atlas version 1.0"},{"slug":"notifications---v1-apache-atlas-version-08x-and-earlier","depth":3,"value":"Notifications - V1: Apache Atlas version 0.8.x and earlier"},{"slug":"notifications-to-apache-atlas","depth":2,"value":"Notifications to Apache Atlas"}]}},{"key":"documents/Overview.md","value":{"name":"Overview","route":"/","menu":"Overview","id":"33b70bfd900fa0a0a10ffd936cf46829","filepath":"documents/Overview.md","link":"","slug":"documents-overview","headings":[{"slug":"overview","depth":1,"value":"Overview"},{"slug":"features","depth":2,"value":"Features"},{"slug":"metadata-types--instances","depth":3,"value":"Metadata types & instances"},{"slug":"classification","depth":3,"value":"Classification"},{"slug":"lineage","depth":3,"value":"Lineage"},{"slug":"searchdiscovery","depth":3,"value":"Search/Discovery"},{"slug":"security--data-masking","depth":3,"value":"Security & Data Masking"},{"slug":"getting-started","depth":2,"value":"Getting Started"},{"slug":"api-documentation","depth":2,"value":"API Documentation"},{"slug":"developer-setup-documentation","depth":2,"value":"Developer Setup Documentation"}]}},{"key":"documents/RestAPI.md","value":{"name":"REST API","route":"/RestApi","menu":"Documentation","submenu":"REST API","id":"2a1df74cbaea54d0dd0a56ff05e38270","filepath":"documents/RestAPI.md","link":"","slug":"documents-rest-api","headings":[{"slug":"rest-api","depth":1,"value":"REST API"}]}},{"key":"documents/TypeSystem.md","value":{"name":"Type System","route":"/TypeSystem","menu":"Documentation","submenu":"Features","id":"507fb4123d3a830140580b1cfb0095cc","filepath":"documents/TypeSystem.md","link":"","slug":"documents-type-system","headings":[{"slug":"type-system","depth":1,"value":"Type System"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"types","depth":2,"value":"Types"},{"slug":"entities","depth":2,"value":"Entities"},{"slug":"attributes","depth":2,"value":"Attributes"},{"slug":"system-specific-types-and-their-significance","depth":2,"value":"System specific types and their significance"}]}},{"key":"documents/Asf/asfinfo.md","value":{"name":"ASF","route":"/asf","menu":"ASF","id":"9c4bc987415ba768a9a0621cc7e199f6","filepath":"documents/Asf/asfinfo.md","link":"","slug":"documents-asf-asfinfo","headings":[{"slug":"asf-infomation","depth":1,"value":"ASF Infomation"}]}},{"key":"documents/Downloads/Downloads.md","value":{"name":"Download","route":"/Downloads","menu":"Downloads","submenu":"Download","id":"0cee405df7fd7cd7e40282afbb30e8bd","filepath":"documents/Downloads/Downloads.md","link":"","slug":"documents-downloads-downloads","headings":[{"slug":"downloads","depth":1,"value":"Downloads"},{"slug":"verify-the-integrity-of-the-files","depth":2,"value":"Verify the integrity of the files"},{"slug":"release-notes","depth":2,"value":"Release Notes"}]}},{"key":"documents/Hook/HookFalcon.md","value":{"name":"Falcon","route":"/HookFalcon","menu":"Documentation","submenu":"Hooks","id":"4db922fa8f509f5ff400983bc9c4559e","filepath":"documents/Hook/HookFalcon.md","link":"","slug":"documents-hook-hook-falcon","headings":[{"slug":"falcon-atlas-bridge","depth":1,"value":"Falcon Atlas Bridge"},{"slug":"falcon-model","depth":2,"value":"Falcon Model"},{"slug":"falcon-hook","depth":2,"value":"Falcon Hook"},{"slug":"notes","depth":2,"value":"NOTES"}]}},{"key":"documents/Hook/HookHBase.md","value":{"name":"HBase","route":"/HookHBase","menu":"Documentation","submenu":"Hooks","id":"fa5fd04b038f151c2a97ee579f59f0ac","filepath":"documents/Hook/HookHBase.md","link":"","slug":"documents-hook-hook-h-base","headings":[{"slug":"apache-atlas-hook--bridge-for-apache-hbase","depth":1,"value":"Apache Atlas Hook & Bridge for Apache HBase"},{"slug":"hbase-model","depth":2,"value":"HBase Model"},{"slug":"hbase-hook","depth":2,"value":"HBase Hook"},{"slug":"notes","depth":2,"value":"NOTES"},{"slug":"importing-hbase-metadata","depth":2,"value":"Importing HBase Metadata"}]}},{"key":"documents/Hook/HookHive.md","value":{"name":"Hive","route":"/HookHive","menu":"Documentation","submenu":"Hooks","id":"1644eb24fbcca2793b625031b9107c47","filepath":"documents/Hook/HookHive.md","link":"","slug":"documents-hook-hook-hive","headings":[{"slug":"apache-atlas-hook--bridge-for-apache-hive","depth":1,"value":"Apache Atlas Hook & Bridge for Apache Hive"},{"slug":"hive-model","depth":2,"value":"Hive Model"},{"slug":"hive-hook","depth":2,"value":"Hive Hook"},{"slug":"column-level-lineage","depth":2,"value":"Column Level Lineage"},{"slug":"model","depth":3,"value":"Model"},{"slug":"examples","depth":3,"value":"Examples"},{"slug":"extracting-lineage-from-hive-commands","depth":3,"value":"Extracting Lineage from Hive commands"},{"slug":"notes","depth":2,"value":"NOTES"},{"slug":"importing-hive-metadata","depth":2,"value":"Importing Hive Metadata"}]}},{"key":"documents/Hook/HookKafka.md","value":{"name":"Kafka","route":"/HookKafka","menu":"Documentation","submenu":"Hooks","id":"01a8a439ef5fe47c5d97d9a22f9fd609","filepath":"documents/Hook/HookKafka.md","link":"","slug":"documents-hook-hook-kafka","headings":[{"slug":"apache-atlas-hook-for-apache-kafka","depth":1,"value":"Apache Atlas Hook for Apache Kafka"},{"slug":"kafka-model","depth":2,"value":"Kafka Model"},{"slug":"setup","depth":2,"value":"Setup"},{"slug":"importing-kafka-metadata","depth":2,"value":"Importing Kafka Metadata"}]}},{"key":"documents/Hook/HookSqoop.md","value":{"name":"Sqoop","route":"/HookSqoop","menu":"Documentation","submenu":"Hooks","id":"16b81f28d034811abce9e73d9ea9558e","filepath":"documents/Hook/HookSqoop.md","link":"","slug":"documents-hook-hook-sqoop","headings":[{"slug":"apache-atlas-hook-for-apache-sqoop","depth":1,"value":"Apache Atlas Hook for Apache Sqoop"},{"slug":"sqoop-model","depth":2,"value":"Sqoop Model"},{"slug":"sqoop-hook","depth":2,"value":"Sqoop Hook"},{"slug":"notes","depth":2,"value":"NOTES"}]}},{"key":"documents/Hook/HookStorm.md","value":{"name":"Storm","route":"/HookStorm","menu":"Documentation","submenu":"Hooks","id":"1f8c4aab699a21f30ebe10d1255e908b","filepath":"documents/Hook/HookStorm.md","link":"","slug":"documents-hook-hook-storm","headings":[{"slug":"apache-atlas-hook-for-apache-storm","depth":1,"value":"Apache Atlas Hook for Apache Storm"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"storm-data-model","depth":2,"value":"Storm Data Model"},{"slug":"storm-atlas-hook","depth":2,"value":"Storm Atlas Hook"},{"slug":"limitations","depth":2,"value":"Limitations"},{"slug":"installation","depth":2,"value":"Installation"},{"slug":"configuration","depth":2,"value":"Configuration"},{"slug":"storm-configuration","depth":3,"value":"Storm Configuration"}]}},{"key":"documents/Import-Export/ExportAPI.md","value":{"name":"Export API","route":"/ExportAPI","menu":"Documentation","submenu":"Import/Export","id":"73c88b886b63340e8307aed2fa48c11e","filepath":"documents/Import-Export/ExportAPI.md","link":"","slug":"documents-import-export-export-api","headings":[{"slug":"export-api","depth":1,"value":"Export API"},{"slug":"additional-options","depth":3,"value":"Additional Options"},{"slug":"contents-of-exported-zip-file","depth":3,"value":"Contents of Exported ZIP File"},{"slug":"examples","depth":3,"value":"Examples"},{"slug":"curl-calls","depth":3,"value":"CURL Calls"}]}},{"key":"documents/Import-Export/ExportHDFSAPI.md","value":{"name":"Export HDFS API","route":"/ExportHDFSAPI","menu":"Documentation","submenu":"Import/Export","id":"a8fa80e9bdfe717404895c643191be69","filepath":"documents/Import-Export/ExportHDFSAPI.md","link":"","slug":"documents-import-export-export-hdfsapi","headings":[{"slug":"export--import-apis-for-hdfs-path","depth":1,"value":"Export & Import APIs for HDFS Path"},{"slug":"introduction","depth":3,"value":"Introduction"},{"slug":"export-api-using-matchtype","depth":3,"value":"Export API Using matchType"},{"slug":"example-using-curl-calls","depth":3,"value":"Example Using CURL Calls"},{"slug":"automatic-creation-of-hdfs-entities","depth":3,"value":"Automatic Creation of HDFS entities"}]}},{"key":"documents/Import-Export/ExportImportAudits.md","value":{"name":"Export Import Audits","route":"/ExportImportAudits","menu":"Documentation","submenu":"Import/Export","id":"0cd0eb1da37e202f876fe3b853048c1a","filepath":"documents/Import-Export/ExportImportAudits.md","link":"","slug":"documents-import-export-export-import-audits","headings":[{"slug":"export--import-audits","depth":1,"value":"Export & Import Audits"},{"slug":"background","depth":4,"value":"Background"},{"slug":"rest-apis","depth":4,"value":"REST APIs"},{"slug":"curl","depth":5,"value":"CURL"},{"slug":"response","depth":5,"value":"RESPONSE"}]}},{"key":"documents/Import-Export/ImportAPIOptions.md","value":{"name":"Import API Options","route":"/ImportAPIOptions","menu":"Documentation","submenu":"Import/Export","id":"a8061e0839708d09107f7f5d87ccdbbe","filepath":"documents/Import-Export/ImportAPIOptions.md","link":"","slug":"documents-import-export-import-api-options","headings":[{"slug":"import-api-options","depth":1,"value":"Import API Options"},{"slug":"examples-using-curl-calls","depth":3,"value":"Examples Using CURL Calls"},{"slug":"options","depth":3,"value":"Options"},{"slug":"transforms","depth":4,"value":"Transforms"},{"slug":"start-guid-or-start-index","depth":4,"value":"Start Guid or Start Index"},{"slug":"optional-importing-type-definition","depth":4,"value":"Optional Importing Type Definition"},{"slug":"specifying-file-to-be-imported-from-server-location","depth":4,"value":"Specifying File to be Imported From Server Location"},{"slug":"handling-large-imports","depth":4,"value":"Handling Large Imports"}]}},{"key":"documents/Import-Export/ImportAPI.md","value":{"name":"Import API","route":"/ImportAPI","menu":"Documentation","submenu":"Import/Export","id":"1608489147349744fb1a22c0d9d0eeff","filepath":"documents/Import-Export/ImportAPI.md","link":"","slug":"documents-import-export-import-api","headings":[{"slug":"import-api","depth":1,"value":"Import API"},{"slug":"import-zip-file-using-post","depth":3,"value":"Import ZIP File Using POST"},{"slug":"import-zip-file-available-on-server","depth":3,"value":"Import ZIP File Available on Server"},{"slug":"examples-using-curl-calls","depth":3,"value":"Examples Using CURL Calls"}]}},{"key":"documents/Import-Export/ImportEntityTransforms.md","value":{"name":"Import Entity Transforms","route":"/ImportEntityTransforms","menu":"Documentation","submenu":"Import/Export","id":"f938b1564bb89576ae91f2b4b37ef288","filepath":"documents/Import-Export/ImportEntityTransforms.md","link":"","slug":"documents-import-export-import-entity-transforms","headings":[{"slug":"new-entity-transforms-framework","depth":1,"value":"(New) Entity Transforms Framework"},{"slug":"background","depth":4,"value":"Background"},{"slug":"transformation-framework","depth":4,"value":"Transformation Framework"},{"slug":"reason-for-new-transformation-framework","depth":4,"value":"Reason for New Transformation Framework"},{"slug":"approach","depth":4,"value":"Approach"},{"slug":"conditions","depth":5,"value":"Conditions"},{"slug":"actions","depth":5,"value":"Actions"},{"slug":"built-in-transforms","depth":4,"value":"Built-in Transforms"},{"slug":"add-classification","depth":5,"value":"Add Classification"},{"slug":"replace-prefix","depth":5,"value":"Replace Prefix"},{"slug":"to-lower","depth":5,"value":"To Lower"},{"slug":"clear","depth":5,"value":"Clear"},{"slug":"additional-examples","depth":4,"value":"Additional Examples"}]}},{"key":"documents/Import-Export/ImportExportAPI.md","value":{"name":"Import Export API","route":"/ImportExportAPI","menu":"Documentation","submenu":"Import/Export","id":"762aa4d538b3b06c3289c72854408687","filepath":"documents/Import-Export/ImportExportAPI.md","link":"","slug":"documents-import-export-import-export-api","headings":[{"slug":"export--import-rest-apis","depth":1,"value":"Export & Import REST APIs"},{"slug":"whats-new","depth":3,"value":"What\'s New"},{"slug":"background","depth":3,"value":"Background"},{"slug":"introduction","depth":3,"value":"Introduction"},{"slug":"errors","depth":3,"value":"Errors"},{"slug":"rest-api-reference","depth":3,"value":"REST API Reference"}]}},{"key":"documents/Import-Export/IncrementalExport.md","value":{"name":"Incremental Export","route":"/IncrementalExport","menu":"Documentation","submenu":"Import/Export","id":"fcf86e26f925a56cf05803493b215e76","filepath":"documents/Import-Export/IncrementalExport.md","link":"","slug":"documents-import-export-incremental-export","headings":[{"slug":"incremental-export","depth":2,"value":"Incremental Export"},{"slug":"background","depth":4,"value":"Background"},{"slug":"export-options","depth":4,"value":"Export Options"},{"slug":"getting-change-marker","depth":4,"value":"Getting Change Marker"},{"slug":"skip-lineage-option","depth":4,"value":"Skip Lineage Option"},{"slug":"benefit-of-incremental-export","depth":4,"value":"Benefit of Incremental Export"}]}},{"key":"documents/Migration/Migration-0.8-to-1.0.md","value":{"name":"Migration-0.8 to 1.0","route":"/Migration-0.8-to-1.0","menu":"Downloads","submenu":"Migration","id":"a5e2f887053b440c46fdfb927acc1dfa","filepath":"documents/Migration/Migration-0.8-to-1.0.md","link":"","slug":"documents-migration-migration-0-8-to-1-0","headings":[{"slug":"migrating-data-from-apache-atlas-08-to-apache-atlas-10","depth":1,"value":"Migrating data from Apache Atlas 0.8 to Apache Atlas 1.0"},{"slug":"migration-steps","depth":3,"value":"Migration Steps"},{"slug":"planning-the-migration","depth":4,"value":"Planning the migration"},{"slug":"exporting-data-from-apache-atlas-08","depth":4,"value":"Exporting data from Apache Atlas 0.8"},{"slug":"before-importing-into-apache-atlas-10","depth":3,"value":"Before importing into Apache Atlas 1.0"},{"slug":"importing-data-into-apache-atlas-10","depth":4,"value":"Importing Data into Apache Atlas 1.0"},{"slug":"atlas-entity-defaults-for-migrated-data","depth":3,"value":"Atlas Entity Defaults for Migrated Data"},{"slug":"handling-of-entity-definitions-that-use-classifications-as-types","depth":4,"value":"Handling of Entity Definitions that use Classifications as Types"}]}},{"key":"documents/Misc/AtlasServer.md","value":{"name":"Atlas Server","route":"/AtlasServer","menu":"Documentation","submenu":"Misc","id":"c0ce0b2d1f25f703c7a003ad3337384c","filepath":"documents/Misc/AtlasServer.md","link":"","slug":"documents-misc-atlas-server","headings":[{"slug":"atlas-server-entity-type","depth":1,"value":"Atlas Server Entity Type"},{"slug":"background","depth":4,"value":"Background"},{"slug":"creation","depth":4,"value":"Creation"},{"slug":"details-within-property-page","depth":4,"value":"Details within Property Page"},{"slug":"exportimport-audits","depth":4,"value":"Export/Import Audits"},{"slug":"example","depth":4,"value":"Example"},{"slug":"support-for-clusters-full-name","depth":4,"value":"Support for Cluster\'s Full Name"},{"slug":"additional-information","depth":4,"value":"Additional Information"},{"slug":"rest-apis","depth":4,"value":"REST APIs"},{"slug":"curl","depth":4,"value":"CURL"}]}},{"key":"documents/Misc/ReplicatedAttributes.md","value":{"name":"Replicated Attributes","route":"/ReplicatedAttributes","menu":"Documentation","submenu":"Misc","id":"ae14752eff1e7c9a5b738080e30f1aec","filepath":"documents/Misc/ReplicatedAttributes.md","link":"","slug":"documents-misc-replicated-attributes","headings":[{"slug":"replicated-attributes","depth":1,"value":"Replicated Attributes"},{"slug":"background","depth":4,"value":"Background"}]}},{"key":"documents/Misc/SoftReference.md","value":{"name":"Soft Reference","route":"/SoftReference","menu":"Documentation","submenu":"Misc","id":"056c3a8b869062720878e3a15144fc71","filepath":"documents/Misc/SoftReference.md","link":"","slug":"documents-misc-soft-reference","headings":[{"slug":"entity-attribute-option-softreference","depth":1,"value":"Entity Attribute Option: SoftReference"},{"slug":"background","depth":4,"value":"Background"},{"slug":"specification","depth":4,"value":"Specification"}]}},{"key":"documents/Project-Info/IssueTracking.md","value":{"name":"Issue Tracking","route":"/IssueTracking","menu":"Project Info","submenu":"Issue Tracking","id":"019f27a13aa2f70e2268b4c1f62fd8d5","filepath":"documents/Project-Info/IssueTracking.md","link":"","slug":"documents-project-info-issue-tracking","headings":[{"slug":"overview","depth":1,"value":"Overview"},{"slug":"issue-tracking","depth":1,"value":"Issue Tracking"}]}},{"key":"documents/Project-Info/ProjectInfo.md","value":{"name":"Project Information","route":"/ProjectInfo","menu":"Project Info","submenu":"Project Information","id":"7ba3f6db8aa3a72570a6df7c8d360cc1","filepath":"documents/Project-Info/ProjectInfo.md","link":"","slug":"documents-project-info-project-info","headings":[{"slug":"project-information","depth":1,"value":"Project Information"},{"slug":"overview","depth":1,"value":"Overview"}]}},{"key":"documents/Project-Info/MailingLists.md","value":{"name":"Mailing Lists","route":"/MailingLists","menu":"Project Info","submenu":"Mailing Lists","id":"0d92a8024dabc094a01eb68d110a04d8","filepath":"documents/Project-Info/MailingLists.md","link":"","slug":"documents-project-info-mailing-lists","headings":[{"slug":"project-mailing-lists","depth":1,"value":"Project Mailing Lists"}]}},{"key":"documents/Project-Info/ProjectLicense.md","value":{"name":"License","route":"/ProjectLicense","menu":"Project Info","submenu":"License","id":"3118b66ac9805351a9da37b5cff66e3b","filepath":"documents/Project-Info/ProjectLicense.md","link":"","slug":"documents-project-info-project-license","headings":[{"slug":"project-license","depth":1,"value":"Project License"},{"slug":"the-apache-software-license-version-20","depth":3,"value":"The Apache Software License, Version 2.0"},{"slug":"apache-atlas-subcomponents","depth":3,"value":"Apache Atlas Subcomponents:"}]}},{"key":"documents/Project-Info/SourceRepository.md","value":{"name":"Source Repository","route":"/SourceRepository","menu":"Project Info","submenu":"Source Repository","id":"744d10a0c81b53143c6caf583a67d695","filepath":"documents/Project-Info/SourceRepository.md","link":"","slug":"documents-project-info-source-repository","headings":[{"slug":"overview","depth":1,"value":"Overview"},{"slug":"web-access","depth":1,"value":"Web Access"},{"slug":"anonymous-access","depth":1,"value":"Anonymous access"},{"slug":"developer-access","depth":1,"value":"Developer access"},{"slug":"access-from-behind-a-firewall","depth":1,"value":"Access from behind a firewall"}]}},{"key":"documents/Project-Info/TeamList.md","value":{"name":"Team List","route":"/TeamList","menu":"Project Info","submenu":"Team List","id":"4bb45750814d507ba5abaa82b6c9843d","filepath":"documents/Project-Info/TeamList.md","link":"","slug":"documents-project-info-team-list","headings":[{"slug":"the-team","depth":1,"value":"The Team"},{"slug":"a-successful-project-requires-many-people-to-play-many-roles-some-members-write-code-or-documentation-while-others-are-valuable-as-testers-submitting-patches-and-suggestions","depth":4,"value":"A successful project requires many people to play many roles. Some members write code or documentation, while others are valuable as testers, submitting patches and suggestions."},{"slug":"the-team-is-comprised-of-members-and-contributors-members-have-direct-access-to-the-source-of-a-project-and-actively-evolve-the-code-base-contributors-improve-the-project-through-submission-of-patches-and-suggestions-to-the-members-the-number-of-contributors-to-the-project-is-unbounded-get-involved-today-all-contributions-to-the-project-are-greatly-appreciated","depth":4,"value":"The team is comprised of Members and Contributors. Members have direct access to the source of a project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. Get involved today. All contributions to the project are greatly appreciated."},{"slug":"members","depth":2,"value":"Members"},{"slug":"the-following-is-a-list-of-developers-with-commit-privileges-that-have-directly-contributed-to-the-project-in-one-way-or-another","depth":4,"value":"The following is a list of developers with commit privileges that have directly contributed to the project in one way or another."}]}},{"key":"documents/Search/SearchAdvanced.md","value":{"name":"Advanced Search","route":"/SearchAdvance","menu":"Documentation","submenu":"Search","id":"2231d48311ad173962a6804d02642c8d","filepath":"documents/Search/SearchAdvanced.md","link":"","slug":"documents-search-search-advanced","headings":[{"slug":"advanced-search","depth":1,"value":"Advanced Search"},{"slug":"background","depth":3,"value":"Background"},{"slug":"using-advanced-search","depth":2,"value":"Using Advanced Search"},{"slug":"introduction-to-domain-specific-language","depth":2,"value":"Introduction to Domain Specific Language"},{"slug":"from-clause","depth":3,"value":"From Clause"},{"slug":"where-clause","depth":3,"value":"Where Clause"},{"slug":"using-date-literals","depth":3,"value":"Using Date Literals"},{"slug":"using-boolean-literals","depth":4,"value":"Using Boolean Literals"},{"slug":"existence-of-a-property","depth":3,"value":"Existence of a Property"},{"slug":"select-clause","depth":3,"value":"Select Clause"},{"slug":"note-about-select-clauses","depth":4,"value":"Note About Select Clauses"},{"slug":"classification-based-filtering","depth":3,"value":"Classification-based Filtering"},{"slug":"relationship-based-filtering","depth":4,"value":"Relationship-based filtering"},{"slug":"glossary-term-based-filtering","depth":4,"value":"Glossary Term-based Filtering"},{"slug":"limit--offset-clauses","depth":3,"value":"Limit & Offset Clauses"},{"slug":"ordering-results","depth":3,"value":"Ordering Results"},{"slug":"aggregate-functions","depth":3,"value":"Aggregate Functions"},{"slug":"the-count-keyword","depth":3,"value":"The count Keyword"},{"slug":"the-max-keyword","depth":3,"value":"The max Keyword"},{"slug":"the-min-keyword","depth":3,"value":"The min Keyword"},{"slug":"grouping-results","depth":3,"value":"Grouping Results"},{"slug":"using-system-attributes","depth":3,"value":"Using System Attributes"},{"slug":"state-of-an-entity","depth":3,"value":"State of an Entity"},{"slug":"using-system-attributes-in-queries","depth":3,"value":"Using System Attributes in Queries"},{"slug":"advanced-search-rest-api","depth":2,"value":"Advanced Search REST API"},{"slug":"the-v2-api","depth":3,"value":"The V2 API"},{"slug":"implementation-approach","depth":2,"value":"Implementation Approach"},{"slug":"differences-between-master-and-earlier-versions","depth":2,"value":"Differences Between Master and Earlier Versions"},{"slug":"resources","depth":2,"value":"Resources"}]}},{"key":"documents/Search/SearchBasic.md","value":{"name":"Basic Search","route":"/SearchBasic","menu":"Documentation","submenu":"Search","id":"3d732ebac4d26bc67f7161ea06b8cd42","filepath":"documents/Search/SearchBasic.md","link":"","slug":"documents-search-search-basic","headings":[{"slug":"basic-search","depth":1,"value":"Basic Search"}]}},{"key":"documents/Security/AtlasRangerAuthorizer.md","value":{"name":"Atlas Ranger Authorizer","route":"/AtlasRangerAuthorizer","menu":"Documentation","submenu":"Security","id":"d14b432df8722624c0f8eced545b1d5e","filepath":"documents/Security/AtlasRangerAuthorizer.md","link":"","slug":"documents-security-atlas-ranger-authorizer","headings":[{"slug":"atlas-ranger-authorizer","depth":1,"value":"Atlas Ranger Authorizer"},{"slug":"setting-up-apache-atlas-to-use-apache-ranger-authorization","depth":2,"value":"Setting up Apache Atlas to use Apache Ranger Authorization"},{"slug":"configure-apache-atlas","depth":3,"value":"Configure Apache Atlas"},{"slug":"apache-ranger-authorization-policy-model-for-apache-atlas","depth":3,"value":"Apache Ranger authorization policy model for Apache Atlas"},{"slug":"apache-ranger-access-audit-for-apache-atlas-authorizations","depth":3,"value":"Apache Ranger access audit for Apache Atlas authorizations"}]}},{"key":"documents/Security/Authentication.md","value":{"name":"Authentication","route":"/Authentication","menu":"Documentation","submenu":"Security","id":"7beb04d551918c390480043d25b37b6a","filepath":"documents/Security/Authentication.md","link":"","slug":"documents-security-authentication","headings":[{"slug":"authentication-in-apache-atlas","depth":1,"value":"Authentication in Apache Atlas."},{"slug":"authentication","depth":3,"value":"Authentication"},{"slug":"file-method","depth":3,"value":"FILE method."},{"slug":"kerberos-method","depth":3,"value":"Kerberos Method."},{"slug":"ldap-method","depth":3,"value":"LDAP Method."},{"slug":"active-directory","depth":3,"value":"Active Directory"},{"slug":"ldap-directroy","depth":3,"value":"LDAP Directroy"},{"slug":"keycloak-method","depth":3,"value":"Keycloak Method."},{"slug":"pam","depth":3,"value":"PAM."}]}},{"key":"documents/Security/AtlasSimpleAuthorizer.md","value":{"name":"Atlas Simple Authorizer","route":"/AtlasSimpleAuthorizer","menu":"Documentation","submenu":"Security","id":"5b16b833d22372706ec5bca598c24463","filepath":"documents/Security/AtlasSimpleAuthorizer.md","link":"","slug":"documents-security-atlas-simple-authorizer","headings":[{"slug":"atlas-simple-authorizer","depth":1,"value":"Atlas Simple Authorizer"},{"slug":"setting-up-atlas-to-use-simple-authorizer","depth":2,"value":"Setting up Atlas to use Simple Authorizer"},{"slug":"configure-apache-atlas","depth":2,"value":"Configure Apache Atlas"},{"slug":"policy-file-format","depth":3,"value":"Policy file format"},{"slug":"roles","depth":3,"value":"Roles"},{"slug":"assign-roles-to-users-and-user-groups","depth":3,"value":"Assign Roles to Users and User Groups"}]}},{"key":"documents/Security/Security.md","value":{"name":"Security Details","route":"/Security","menu":"Documentation","submenu":"Security","id":"9e6b84530de37d43c494027070f649bf","filepath":"documents/Security/Security.md","link":"","slug":"documents-security-security","headings":[{"slug":"security-features-of-apache-atlas","depth":1,"value":"Security Features of Apache Atlas"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"ssl","depth":2,"value":"SSL"},{"slug":"credential-provider-utility-script","depth":4,"value":"Credential Provider Utility Script"},{"slug":"service-authentication","depth":2,"value":"Service Authentication"},{"slug":"jaas-configuration","depth":3,"value":"JAAS configuration"},{"slug":"spnego-based-http-authentication","depth":2,"value":"SPNEGO-based HTTP Authentication"},{"slug":"client-security-configuration","depth":3,"value":"Client security configuration"},{"slug":"solr-kerberos-configuration","depth":3,"value":"SOLR Kerberos configuration"}]}},{"key":"documents/Security/AuthorizationModel.md","value":{"name":"Authorization Model","route":"/AuthorizationModel","menu":"Documentation","submenu":"Security","id":"70c74b19b6fc58a21175d81b28034e8a","filepath":"documents/Security/AuthorizationModel.md","link":"","slug":"documents-security-authorization-model","headings":[{"slug":"atlas-authorization-model","depth":1,"value":"Atlas Authorization Model"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"authorization-of-access-to-types","depth":2,"value":"Authorization of access to Types"},{"slug":"authorization-of-access-to-entities","depth":2,"value":"Authorization of access to Entities"},{"slug":"authorization-of-admin-operations","depth":2,"value":"Authorization of Admin operations"},{"slug":"pluggable-authorization","depth":2,"value":"Pluggable Authorization"},{"slug":"simple-authorizer","depth":2,"value":"Simple Authorizer"},{"slug":"ranger-authorizer","depth":2,"value":"Ranger Authorizer"},{"slug":"none-authorizer","depth":2,"value":"None authorizer"}]}},{"key":"documents/Tools/AtlasRepairIndex.md","value":{"name":"Atlas Repair Index","route":"/AtlasRepairIndex","menu":"Documentation","submenu":"Tools","id":"e5b5585673ba9aeef303303aa9e412fc","filepath":"documents/Tools/AtlasRepairIndex.md","link":"","slug":"documents-tools-atlas-repair-index","headings":[{"slug":"atlas-repair-index","depth":1,"value":"Atlas Repair Index"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"need-for-this-tool","depth":4,"value":"Need for this Tool"},{"slug":"location","depth":4,"value":"Location"},{"slug":"steps-to-execute-tool","depth":4,"value":"Steps to Execute Tool"},{"slug":"complete-restore","depth":5,"value":"Complete Restore"},{"slug":"caveats","depth":6,"value":"Caveats"},{"slug":"selective-restore","depth":5,"value":"Selective Restore"}]}},{"key":"documents/Setup/BuildInstruction.md","value":{"name":"Build Instruction","route":"/BuildInstallation","menu":"Documentation","submenu":"Setup","id":"660ea3f6cdf83978ed3fdb76cba111ad","filepath":"documents/Setup/BuildInstruction.md","link":"","slug":"documents-setup-build-instruction","headings":[{"slug":"building--installing-apache-atlas","depth":2,"value":"Building & Installing Apache Atlas"},{"slug":"building-apache-atlas","depth":3,"value":"Building Apache Atlas"},{"slug":"packaging-apache-atlas","depth":3,"value":"Packaging Apache Atlas"},{"slug":"packaging-apache-atlas-with-embedded-apache-hbase--apache-solr","depth":3,"value":"Packaging Apache Atlas with embedded Apache HBase & Apache Solr"},{"slug":"packaging-apache-atlas-with-berkeleydb--apache-solr","depth":3,"value":"Packaging Apache Atlas with BerkeleyDB & Apache Solr"},{"slug":"packaging-apache-atlas-with-embedded-apache-cassandra--apache-solr","depth":3,"value":"Packaging Apache Atlas with embedded Apache Cassandra & Apache Solr"},{"slug":"apache-atlas-package","depth":3,"value":"Apache Atlas Package"}]}},{"key":"documents/Setup/Configuration.md","value":{"name":"Configuration","route":"/Configuration","menu":"Documentation","submenu":"Setup","id":"2376cf14650fd03637e96898ec8181f9","filepath":"documents/Setup/Configuration.md","link":"","slug":"documents-setup-configuration","headings":[{"slug":"configuring-apache-atlas---application-properties","depth":1,"value":"Configuring Apache Atlas - Application Properties"},{"slug":"graph-configs","depth":2,"value":"Graph Configs"},{"slug":"graph-persistence-engine---hbase","depth":3,"value":"Graph Persistence engine - HBase"},{"slug":"graph-index-search-engine","depth":3,"value":"Graph Index Search Engine"},{"slug":"graph-search-index---solr","depth":4,"value":"Graph Search Index - Solr"},{"slug":"graph-search-index---elasticsearch-tech-preview","depth":4,"value":"Graph Search Index - Elasticsearch (Tech Preview)"},{"slug":"search-configs","depth":2,"value":"Search Configs"},{"slug":"notification-configs","depth":2,"value":"Notification Configs"},{"slug":"client-configs","depth":2,"value":"Client Configs"},{"slug":"security-properties","depth":2,"value":"Security Properties"},{"slug":"ssl-config","depth":3,"value":"SSL config"},{"slug":"high-availability-properties","depth":2,"value":"High Availability Properties"},{"slug":"server-properties","depth":2,"value":"Server Properties"},{"slug":"performance-configuration-items","depth":2,"value":"Performance configuration items"},{"slug":"recording-performance-metrics","depth":3,"value":"Recording performance metrics"}]}},{"key":"documents/Setup/EclipseSetup.md","value":{"name":"Eclipse Setup","route":"/EclipseSetup","menu":"For Developers","submenu":"Eclipse Setup","id":"50375a47ccd1c9caeb50b97d66172c37","filepath":"documents/Setup/EclipseSetup.md","link":"","slug":"documents-setup-eclipse-setup","headings":[{"slug":"tools-required-to-build-and-run-apache-atlas-on-eclipse","depth":1,"value":"Tools required to build and run Apache Atlas on Eclipse"}]}},{"key":"documents/Setup/InstallationInstruction.md","value":{"name":"Installation Instruction","route":"/Installation","menu":"Documentation","submenu":"Setup","id":"018a16a3734eaf32c2ca80a54c6edf28","filepath":"documents/Setup/InstallationInstruction.md","link":"","slug":"documents-setup-installation-instruction","headings":[{"slug":"installing--running-apache-atlas","depth":3,"value":"Installing & Running Apache Atlas"},{"slug":"installing-apache-atlas","depth":4,"value":"Installing Apache Atlas"},{"slug":"running-apache-atlas-with-local-apache-hbase--apache-solr","depth":4,"value":"Running Apache Atlas with Local Apache HBase & Apache Solr"},{"slug":"running-apache-atlas-with-berkeleydb--apache-solr","depth":4,"value":"Running Apache Atlas with BerkeleyDB & Apache Solr"},{"slug":"using-apache-atlas","depth":4,"value":"Using Apache Atlas"},{"slug":"stopping-apache-atlas-server","depth":4,"value":"Stopping Apache Atlas Server"},{"slug":"configuring-apache-atlas","depth":3,"value":"Configuring Apache Atlas"},{"slug":"any-additional-java-opts-you-want-to-set-this-will-apply-to-both-client-and-server-operations","depth":1,"value":"any additional java opts you want to set. This will apply to both client and server operations"},{"slug":"any-additional-java-opts-that-you-want-to-set-for-client-only","depth":1,"value":"any additional java opts that you want to set for client only"},{"slug":"java-heap-size-we-want-to-set-for-the-client-default-is-1024mb","depth":1,"value":"java heap size we want to set for the client. Default is 1024MB"},{"slug":"any-additional-opts-you-want-to-set-for-atlas-service","depth":1,"value":"any additional opts you want to set for atlas service."},{"slug":"java-heap-size-we-want-to-set-for-the-atlas-server-default-is-1024mb","depth":1,"value":"java heap size we want to set for the atlas server. Default is 1024MB"},{"slug":"what-is-is-considered-as-atlas-home-dir-default-is-the-base-location-of-the-installed-software","depth":1,"value":"What is is considered as atlas home dir. Default is the base location of the installed software"},{"slug":"where-log-files-are-stored-defatult-is-logs-directory-under-the-base-install-location","depth":1,"value":"Where log files are stored. Defatult is logs directory under the base install location"},{"slug":"where-pid-files-are-stored-defatult-is-logs-directory-under-the-base-install-location","depth":1,"value":"Where pid files are stored. Defatult is logs directory under the base install location"},{"slug":"where-do-you-want-to-expand-the-war-file-by-default-it-is-in-serverwebapp-dir-under-the-base-install-dir","depth":1,"value":"Where do you want to expand the war file. By Default it is in /server/webapp dir under the base install dir."},{"slug":"configuring-apache-hbase-as-the-storage-backend-for-the-graph-repository","depth":4,"value":"Configuring Apache HBase as the storage backend for the Graph Repository"},{"slug":"configuring-apache-solr-as-the-indexing-backend-for-the-graph-repository","depth":4,"value":"Configuring Apache Solr as the indexing backend for the Graph Repository"},{"slug":"configuring-kafka-topics","depth":4,"value":"Configuring Kafka Topics"},{"slug":"setting-up-apache-atlas","depth":4,"value":"Setting up Apache Atlas"},{"slug":"examples-calling-apache-atlas-rest-apis","depth":3,"value":"Examples: calling Apache Atlas REST APIs"},{"slug":"troubleshooting","depth":3,"value":"Troubleshooting"},{"slug":"setup-issues","depth":4,"value":"Setup issues"}]}},{"key":"documents/Setup/QuickStart.md","value":{"name":"Quick Start","route":"/QuickStart","menu":"Documentation","submenu":"Setup","id":"bbea986d958a690286ce431e4ebaed6c","filepath":"documents/Setup/QuickStart.md","link":"","slug":"documents-setup-quick-start","headings":[{"slug":"quick-start","depth":1,"value":"Quick Start"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"example-type-definitions","depth":3,"value":"Example Type Definitions"},{"slug":"example-instance-graph","depth":3,"value":"Example Instance Graph"},{"slug":"running-the-example","depth":2,"value":"Running the example"},{"slug":"dashboard","depth":2,"value":"Dashboard"}]}},{"key":"documents/Whats-New/WhatsNew-1.0.md","value":{"name":"WhatsNew-1.0","route":"/WhatsNew-1.0","menu":"Downloads","submenu":"Whats New","id":"66815ce0d61914e74103ff799a82953b","filepath":"documents/Whats-New/WhatsNew-1.0.md","link":"","slug":"documents-whats-new-whats-new-1-0","headings":[{"slug":"whats-new-in-apache-atlas-10","depth":1,"value":"What\'s new in Apache Atlas 1.0?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"updates","depth":2,"value":"Updates"},{"slug":"changes","depth":2,"value":"Changes"},{"slug":"dsl-search","depth":3,"value":"DSL search"}]}},{"key":"documents/Whats-New/WhatsNew-2.0.md","value":{"name":"WhatsNew-2.0","route":"/WhatsNew-2.0","menu":"Downloads","submenu":"Whats New","id":"42012018114e26d0689857eb593940f2","filepath":"documents/Whats-New/WhatsNew-2.0.md","link":"","slug":"documents-whats-new-whats-new-2-0","headings":[{"slug":"whats-new-in-apache-atlas-20","depth":1,"value":"What\'s new in Apache Atlas 2.0?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"updates","depth":2,"value":"Updates"},{"slug":"data-migration","depth":2,"value":"Data Migration"}]}},{"key":"documents/Whats-New/WhatsNew-2.1.md","value":{"name":"WhatsNew-2.1","route":"/WhatsNew-2.1","menu":"Downloads","submenu":"Whats New","id":"df24033870a5ee6ce17408c3a65a6de2","filepath":"documents/Whats-New/WhatsNew-2.1.md","link":"","slug":"documents-whats-new-whats-new-2-1","headings":[{"slug":"whats-new-in-apache-atlas-21","depth":1,"value":"What\'s new in Apache Atlas 2.1?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"enhancements","depth":2,"value":"Enhancements"}]}},{"key":"documents/Whats-New/WhatsNew-2.2.md","value":{"name":"WhatsNew-2.2","route":"/WhatsNew-2.2","menu":"Downloads","submenu":"Whats New","id":"63e911c8ad0c1f65c0970f762aadce22","filepath":"documents/Whats-New/WhatsNew-2.2.md","link":"","slug":"documents-whats-new-whats-new-2-2","headings":[{"slug":"whats-new-in-apache-atlas-22","depth":1,"value":"What\'s new in Apache Atlas 2.2?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"enhancements","depth":2,"value":"Enhancements"}]}}],"props":[]}')},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"white",(function(){return p})),n.d(o,"grayUltraLight",(function(){return m})),n.d(o,"grayExtraLight",(function(){return h})),n.d(o,"grayLight",(function(){return g})),n.d(o,"gray",(function(){return f})),n.d(o,"grayDark",(function(){return v})),n.d(o,"grayExtraDark",(function(){return b})),n.d(o,"dark",(function(){return y})),n.d(o,"blueLight",(function(){return x})),n.d(o,"blue",(function(){return w})),n.d(o,"skyBlue",(function(){return k})),n.d(o,"negative",(function(){return A})),n.d(o,"green",(function(){return E})),n.d(o,"greenLight",(function(){return S}));var a={};n.r(a),n.d(a,"light",(function(){return C})),n.d(a,"dark",(function(){return I}));var r=n("../node_modules/react/index.js"),s=n.n(r),i=n("../node_modules/react-dom/index.js"),l=n.n(i),u=n("./docz-lib/docz/dist/index.js"),d=n("../node_modules/lodash/get.js"),c=n.n(d);const p="#FFFFFF",m="#FCFBFA",h="#F5F6F7",g="#CED4DE",f="#7D899C",v="#2D3747",b="#1D2330",y="#13161F",x="#e9f2fa",w="#4a90e2 ",k="#1FB6FF",A="#EB4D4B",E="#37bb9b",S="#529d8b",C={...o,primary:E,text:v,link:w,footerText:v,sidebarBg:h,sidebarText:y,sidebarHighlight:null,sidebarBorder:g,background:p,border:S,theadColor:f,theadBg:h,tableColor:y,tooltipBg:y,tooltipColor:h,codeBg:h,codeColor:f,preBg:h,blockquoteBg:h,blockquoteBorder:g,blockquoteColor:f,propsText:f,propsBg:m},I={...o,primary:k,text:h,link:k,footerText:g,sidebarBg:y,sidebarText:g,sidebarHighlight:null,sidebarBorder:v,background:b,border:v,theadColor:f,theadBg:v,tableColor:h,tooltipBg:y,tooltipColor:h,codeBg:f,codeColor:h,preBg:v,blockquoteBg:v,blockquoteBorder:f,blockquoteColor:f,propsText:g,propsBg:y};var j=n("../node_modules/styled-components/dist/styled-components.browser.esm.js");const P=(e,t)=>n=>c()(n,"theme.docz."+e,t),O=({children:e})=>{const t=Object(u.useConfig)();return r.createElement(j.a,{theme:e=>({...e,docz:t.themeConfig})},r.createElement(r.Fragment,null,e))},D=j.d.blockquote`
	background: ${P("colors.blockquoteBg")};
	border-left: 5px solid ${P("colors.blockquoteBorder")};
	color: ${P("colors.blockquoteColor")};
	${P("styles.blockquote")};

	& > p {
		margin: 0;
		color: ${P("colors.blockquoteColor")};
	}
`,H=j.d.code`
	background: ${P("colors.codeBg")};
	color: ${P("colors.codeColor")};
	${P("styles.code")};
`;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const z=j.d.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${P("colors.link")};
  }

  &:hover {
    color: ${P("colors.link")};
  }

  ${P("styles.link")};
`,$=j.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`,M=j.e`
  to {
    stroke-dashoffset: 1000;
  }
`,L=(e=0)=>j.c`
  stroke-dasharray: 100;
  animation: ${M} 5s ${e}s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    infinite;
`,N=j.d.path`
  stroke: ${P("colors.primary")};
  stroke-width: 3px;
`,_=j.d.path`
  fill: ${P("colors.primary")};
`,B=({size:e=60})=>r.createElement("svg",{width:e,height:.79*e,viewBox:"0 0 121 96"},r.createElement("g",null,r.createElement(_,{d:"M94.4110629,60.8520717 C95.3815188,60.8520717 96.1684193,61.6483184 96.1684193,62.6308855 L96.1684193,84.1888093 C96.1684193,90.7014865 90.9354492,96 84.2817971,96 L11.6626593,96 C5.08322545,96 0.0693980867,90.6732777 9.65270039e-05,83.6092251 C-0.0048201377,83.1344165 0.178267091,82.6773865 0.508386007,82.3398291 C0.838270796,82.0025088 1.28802855,81.8126327 1.75698472,81.8126327 L20.0341004,81.8126327 L20.0341004,11.8111907 C20.0341004,5.29851351 25.2670706,0 31.6994728,0 L104.318611,0 C110.916775,0 115.930602,5.32672231 115.999903,12.3907749 C116.00482,12.8655835 115.821733,13.3226135 115.491614,13.6601709 C115.161729,13.9974912 114.711971,14.1873673 114.243015,14.1873673 L96.1677169,14.1873673 L96.1677169,27.6014816 C96.1677169,28.5840486 95.3810506,29.3805324 94.4105946,29.3805324 C93.4401387,29.3805324 92.6534723,28.5842856 92.6534723,27.6014816 L92.6534723,12.4083165 L92.6534723,11.8111907 C92.6534723,11.6092251 92.6586231,11.4084449 92.6841429,10.9981135 C92.6928056,10.8698701 92.7005318,10.7413897 92.7436112,10.3687491 C92.7574246,10.2552027 92.7695992,10.1411823 92.831877,9.76735641 C92.8501389,9.66186972 92.8667619,9.55614598 92.9475357,9.18611289 C92.970246,9.08560423 92.9913174,8.98462146 93.0908213,8.61601067 C93.1175118,8.52000593 93.1425634,8.42352709 93.1715951,8.32870759 C93.1992221,8.23862907 93.230361,8.15044694 93.3528093,7.78396958 C93.3848847,7.69483925 93.4202379,7.60736827 93.5590751,7.25132105 C93.5953648,7.16385007 93.6349322,7.07803842 93.7896901,6.73147316 C93.8299599,6.64613561 93.8735075,6.56245741 94.0439519,6.22513704 C94.0882019,6.14193293 94.1354955,6.06062522 94.3213923,5.7327868 C94.3693883,5.65219023 94.4199597,5.57349005 94.6208406,5.25560768 C94.6723485,5.17809275 94.7261977,5.10223715 94.9425309,4.79383673 C94.9970825,4.71940343 95.0537412,4.64710356 95.2848244,4.34889624 C95.3424196,4.27754457 95.402122,4.20832634 95.647487,3.92078621 C95.7074235,3.85346437 95.7694671,3.78803892 95.9815861,3.55810163 L31.7001752,3.55810163 C27.2058754,3.55810163 23.5492816,7.26009186 23.5492816,11.8109536 L23.5492816,81.8126327 L74.3763566,81.8126327 C75.3400229,81.8126327 76.1238797,82.5984493 76.1334789,83.5741419 C76.1831138,88.6294434 79.6861203,92.4418984 84.503047,92.4418984 C88.9973468,92.4418984 92.6539406,88.7399081 92.6539406,84.1890464 L92.6539406,62.6311225 C92.6539406,61.6485555 93.4406069,60.8520717 94.4110629,60.8520717 Z M96.2578558,10.5918119 C96.2562169,10.6041385 96.2550463,10.6167021 96.2543439,10.6287915 L112.318258,10.6287915 C111.563199,6.49371327 108.371815,3.55786459 104.339214,3.55786459 C104.270849,3.55786459 104.203186,3.56094622 104.135289,3.56260556 C104.072075,3.5642649 104.008861,3.564739 103.946115,3.56758358 C103.83748,3.57279866 103.729781,3.58085831 103.622317,3.59034026 C103.604289,3.59176256 103.586262,3.59271075 103.568468,3.59437009 C103.45117,3.60551138 103.334575,3.61926021 103.218682,3.63537952 C103.211424,3.63632772 103.204167,3.63727591 103.196909,3.63822411 C103.075397,3.65529162 102.954587,3.67520371 102.834948,3.69772334 C102.834246,3.69796039 102.83331,3.69796039 102.832607,3.69819744 C101.371187,3.97364808 100.046965,4.64283668 98.9709182,5.5917428 C98.9681087,5.59435034 98.965065,5.59672083 98.9622555,5.59932836 C98.8779698,5.67376167 98.7955572,5.75009136 98.7145493,5.82784335 C98.7058866,5.83637711 98.6972239,5.84467381 98.6885612,5.85297052 C98.6117675,5.92740382 98.5363787,6.00349647 98.4623946,6.08077436 C98.4504541,6.09310089 98.4389819,6.10566448 98.4272756,6.11799101 C98.3558669,6.19360956 98.2858629,6.27017631 98.2174979,6.34840239 C98.204855,6.36286236 98.1924463,6.37755939 98.1800376,6.39201936 C98.1128431,6.4700084 98.0463511,6.54894563 97.9819662,6.6295422 C97.9714305,6.64281693 97.961363,6.65632871 97.9508273,6.66960344 C97.8850377,6.75304459 97.8201845,6.8371969 97.7574385,6.92300854 C97.7555655,6.92561608 97.7539266,6.92798657 97.7520536,6.9305941 C97.55726,7.19822213 97.3790895,7.47888785 97.2168395,7.76974665 C97.2025578,7.79558497 97.1871054,7.82071213 97.1730578,7.8467875 C97.136534,7.91387229 97.1023515,7.98214233 97.0677007,8.05041237 C97.044288,8.09639982 97.0201729,8.14191318 96.9976968,8.18837473 C96.9674944,8.25071855 96.9389309,8.31448467 96.9101333,8.37777668 C96.8857841,8.4313497 96.8612008,8.48492271 96.8380222,8.53920687 C96.8118,8.6001284 96.7872167,8.66152403 96.7626334,8.7231567 C96.7392207,8.78170774 96.7160421,8.84002173 96.6940342,8.89904687 C96.671558,8.95878315 96.6502525,9.01923058 96.629181,9.07967801 C96.6074072,9.14225888 96.5863358,9.20483975 96.5662009,9.26789471 C96.5472366,9.32691985 96.5287406,9.38618203 96.5111811,9.44591832 C96.4917485,9.51181787 96.4732525,9.57842856 96.4552248,9.64503926 C96.4395383,9.70335325 96.4240859,9.76190429 96.40957,9.82069238 C96.3924787,9.89062176 96.3767922,9.96102524 96.3613399,10.0316658 C96.3489311,10.0885575 96.3362883,10.1454492 96.3250502,10.202815 C96.3103002,10.2781965 96.2974232,10.3540521 96.2847804,10.4299076 C96.2756494,10.4837177 96.2658161,10.5375278 96.2578558,10.5918119 Z M11.6624252,92.4418984 L75.9979194,92.4418984 C75.9649075,92.4068152 75.9335345,92.3698355 75.9009909,92.3342782 C75.8553361,92.284498 75.8099155,92.2344807 75.7651973,92.1837523 C75.6987052,92.1083708 75.6331497,92.0320411 75.5685307,91.9547632 C75.5252172,91.9030866 75.4819037,91.8514099 75.4392927,91.7990222 C75.3746736,91.7193738 75.3114594,91.637829 75.2487134,91.5560472 C75.2089118,91.5041335 75.1688761,91.452931 75.1297769,91.4003062 C75.0646896,91.3128352 75.0019436,91.2234678 74.9391976,91.1338634 C74.9050151,91.0847943 74.8698961,91.0366734 74.8361818,90.9871302 C74.7633683,90.8797471 74.6928961,90.7702306 74.6233604,90.660003 C74.602289,90.6265791 74.580047,90.5943405 74.5592097,90.5606795 C74.4700073,90.4165539 74.3836145,90.2700578 74.3000312,90.1211912 C74.2777891,90.081604 74.2569519,90.0408316 74.2351781,90.0007704 C74.1750074,89.8907798 74.1153051,89.7805521 74.0581781,89.6684281 C74.0282099,89.60964 74.0003488,89.5499037 73.971317,89.4906415 C73.9247258,89.3951109 73.8779004,89.2993432 73.8334163,89.2021532 C73.8032139,89.1362536 73.7744163,89.0694059 73.7453846,89.0027952 C73.7048806,88.9098721 73.6646108,88.816949 73.6259799,88.7228406 C73.5974164,88.6529113 73.5700236,88.5822707 73.5423966,88.5116302 C73.5061069,88.4187071 73.4707538,88.3253099 73.4365712,88.2309645 C73.4101149,88.1584276 73.3845951,88.0854166 73.3595435,88.0121685 C73.3269998,87.917112 73.2953927,87.8213443 73.2649562,87.7251025 C73.2415435,87.6516174 73.218365,87.5778952 73.196357,87.5036989 C73.1668571,87.4048496 73.1392301,87.3050521 73.1118372,87.2050175 C73.0919364,87.1320065 73.0715674,87.0589955 73.0528373,86.9852733 C73.0259127,86.8802608 73.0013293,86.7738259 72.9769801,86.667391 C72.9610595,86.5972246 72.9439683,86.5275322 72.9289841,86.4566546 C72.9036984,86.3386044 72.8814564,86.2188948 72.8592143,86.0991851 C72.8479762,86.0387377 72.8353334,85.9792385 72.8250318,85.918554 C72.7938929,85.7374488 72.7657977,85.5551583 72.7416826,85.3709714 L21.7919251,85.3709714 L3.68338077,85.3709714 C4.43844,89.5060497 7.62982365,92.4418984 11.6624252,92.4418984 Z M120.998408,32.7899677 C120.998647,32.8098599 121.000556,32.8297522 120.99984,32.850118 C120.998408,32.9064794 120.993634,32.9621303 120.986951,33.0170708 C120.986712,33.0203861 120.986712,33.0234647 120.986235,33.0267801 C120.975971,33.1077699 120.958785,33.1863916 120.938019,33.2635925 C120.933962,33.2787485 120.929665,33.2934308 120.92513,33.30835 C120.878347,33.4655934 120.810559,33.6131276 120.72463,33.7488211 C120.716514,33.7616089 120.708399,33.77416 120.700045,33.7867111 C120.654455,33.854913 120.605285,33.9202732 120.551102,33.981134 C120.54776,33.9846862 120.54418,33.9880016 120.540838,33.9917906 C120.485939,34.0526514 120.426267,34.1087759 120.363491,34.1615851 C120.358478,34.1658477 120.354659,34.1708208 120.349647,34.1748466 C116.038893,37.7064298 112.307441,41.2448806 107.873046,46.0062306 C102.802778,51.4498371 91.7857706,58.7815489 86.0428726,60.5339606 C83.3864839,61.3445694 81.1912456,61.9366004 79.2545094,62.4594822 C75.5209096,63.4666453 72.7568714,64.2130779 69.3242606,65.8091935 L66.5163033,75.703689 C66.2938436,76.487538 65.5749072,77 64.7927178,77 C64.632079,77 64.4685759,76.9786869 64.3062662,76.9332189 C63.354129,76.6670418 62.7994119,75.6852176 63.0674615,74.7405729 L66.0950142,64.0724114 C66.1009815,64.0513351 66.1074262,64.0304956 66.1141095,64.0098929 C66.2733162,63.5189808 66.4310907,63.0273583 66.589104,62.5354989 C68.5186795,56.5263844 70.5141337,50.3124272 74.8387316,45.4144364 C84.7202875,34.2226827 104.265713,30.6427897 119.255011,31.0276098 C119.339269,31.0297412 119.421379,31.0396873 119.502295,31.0529488 C119.520435,31.0557905 119.538337,31.0588691 119.556239,31.0624213 C119.637155,31.0782877 119.716639,31.0979431 119.793259,31.1239925 C119.793736,31.1239925 119.794214,31.1242293 119.794691,31.1244661 C119.871788,31.1507523 119.945305,31.1836692 120.017151,31.2196647 C120.030995,31.2265323 120.0446,31.233163 120.058205,31.2405042 C120.128619,31.2783942 120.196885,31.3198363 120.261331,31.3662516 C120.269208,31.3719351 120.276369,31.378329 120.284007,31.3840125 C120.341293,31.4268755 120.395714,31.473054 120.447271,31.5223109 C120.459445,31.5339147 120.472095,31.5450449 120.48403,31.5571224 C120.53869,31.6120628 120.58977,31.6703187 120.636792,31.7318899 C120.646101,31.7442042 120.654694,31.7572288 120.663764,31.7697799 C120.706489,31.8287462 120.745635,31.8900806 120.780961,31.9540199 C120.785735,31.9630188 120.791225,31.9713072 120.795998,31.9803061 C120.834189,32.0527707 120.866651,32.1285507 120.894816,32.2064619 C120.896965,32.2126191 120.900545,32.2183026 120.902693,32.2244597 C120.905319,32.2318009 120.906274,32.2396157 120.90866,32.2471937 C120.959502,32.3997009 120.989815,32.5607333 120.996976,32.7279228 C120.997692,32.7487623 120.998169,32.769365 120.998408,32.7899677 Z M77.5340269,47.756511 C75.2953469,50.2920613 73.752689,53.2567157 72.4766485,56.4636291 C76.7888345,52.5955355 82.6281636,48.2464759 88.0376107,44.6611362 C91.3895441,42.4395991 97.3876024,38.6593629 103.660632,35.6411889 C101.191855,36.0456645 98.7963549,36.5581265 96.5295094,37.1757332 C88.0946578,39.4737607 81.7037145,43.0337614 77.5340269,47.756511 Z M105.24172,43.5935859 C108.084287,40.541311 110.64878,37.9761591 113.255998,35.5938264 C107.252689,37.4175187 99.0698944,41.6242541 90.0278137,47.6172653 C84.8055001,51.0785153 79.7992015,54.8284396 75.9309802,58.1760196 C74.9697728,59.0079415 74.1544054,59.7489275 73.4588607,60.4098709 C75.0136919,59.9201429 76.5859475,59.4953014 78.3143067,59.0290178 C80.2245483,58.513714 82.3894729,57.9292611 84.9897693,57.1359395 C89.6492502,55.7143547 100.307028,48.8917896 105.24172,43.5935859 Z",id:"Combined-Shape",fill:"#1F2D3D"}),r.createElement(N,{d:"M31.5,18.5 L38.5,18.5",id:"Line",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",css:L(1.5)}),r.createElement(N,{d:"M47.75,18.5 L86.25,18.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:L(.2)}),r.createElement(N,{d:"M30.9375,38.5 L72.0625,38.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:L(1)}),r.createElement(N,{d:"M31,56.5 L59,56.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:L(3)}),r.createElement(N,{d:"M31.375,72.5 L50.625,72.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:L(2)})));var R=n("../node_modules/react-github-btn/index.js");const F=j.d.div`
  width: auto;
  padding: 0;
  float: right;
  margin-right: 2px;
  margin-left: 12px;
  display: ${e=>e.showGithubLink?"display-inline":"none"};
`,W=({repository:e,...t})=>r.createElement(F,t,r.createElement(R.a,{href:"https://github.com/apache/atlas/fork","data-size":"large","aria-label":"Fork apache/atlas on GitHub"},"Fork"),r.createElement(R.a,{href:"https://github.com/apache/atlas/archive/master.zip","data-size":"large","aria-label":"Download apache/atlas on GitHub"},"Download"),r.createElement(R.a,{href:"https://github.com/apache/atlas","data-size":"large","aria-label":"Star apache/atlas on GitHub"},"Star"));var q=n("../node_modules/lodash/fp/unionBy.js"),U=n.n(q),G=n("../node_modules/lodash/fp/get.js"),V=n.n(G),K=n("../node_modules/facepaint/dist/index.es.js");const J=420,Q=920,Z=1024,X=1120,Y=Object(K.a)([`@media(min-width: ${J}px)`,`@media(min-width: ${Q}px)`,`@media(min-width: ${X}px)`]),ee=P("colors.sidebarPrimary"),te=P("colors.primary"),ne=j.d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${e=>ee(e)||te(e)};
  }

  @media screen and (max-width: ${X}px) {
    &:before {
      height: ${e=>e.showBg?"3px":0};
    }
  }

  ${P("styles.logo")};
`;ne.defaultProps={showBg:!0,theme:null};const oe=Object(j.d)("img")`
  padding: 0;
  height: 50px;
  margin: 2px 0;
`,ae=(Object(j.d)("h1")`
  margin: 5px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${P("colors.sidebarText")};
`,({showBg:e})=>{const{base:t,title:n,linkComponent:o,baseUrl:a}=Object(u.useConfig)();return o?r.createElement(ne,{showBg:e},r.createElement(o,{to:"string"===typeof t?t:"/"},r.createElement(oe,{src:a+"/images/atlas_logo.svg",alt:n}))):null});var re=n("../node_modules/react-feather/dist/icons/search.js"),se=n.n(re);const ie=P("colors.sidebarBorder","#CED4DE"),le=P("colors.sidebarText","#13161F");j.d.div`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  margin-bottom: 20px;
  border-top: 1px dotted ${ie};
  border-bottom: 1px dotted ${ie};
  opacity: 1;
`,Object(j.d)(se.a)`
  stroke: ${le};
  min-width: 20px;
  opacity: 0.5;
`,j.d.input`
  outline: none;
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${le};
`;var ue=n("../node_modules/react-feather/dist/icons/chevron-down.js"),de=n.n(ue);n("../node_modules/lodash/fp/isArray.js"),n("../node_modules/@reach/router/es/index.js");const ce=P("colors.sidebarPrimary"),pe=P("colors.primary"),me={to:"",onClick:r.MouseEventHandler},he=j.d.a`
  position: relative;
  font-size: 14px;
  padding: 0 0 5px 16px;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.2s;

  &,
  &:visited,
  &.active {
    color: ${P("colors.sidebarText")};
  }

  &.active {
    opacity: 1;
  }

  &:before {
    z-index: 1;
    position: absolute;
    display: block;
    content: "";
    top: 1px;
    left: 0;
    width: 0;
    height: 20px;
    background: ${e=>ce(e)||pe(e)};
    transition: width 0.2s;
  }

  &.active:before {
    width: 2px;
  }
`;he.defaultProps=me;Object.assign({},me,{as:null,slug:""}),j.d.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 24px;
`;const ge=({route:e,onClick:t})=>{const n=Object(u.useDocs)(),{linkComponent:o}=Object(u.useConfig)();n&&((e,t)=>{const n=t.find(t=>t.route===e),o=c()(n,"headings");o&&o.filter(e=>2===e.depth)})(e,n);return null};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const ve=j.c`
  font-weight: normal !important;
  color: #807e7e !important;
  &:hover,
  &.active {
    color: ${e=>P("colors.sidebarPrimary")(e)||P("colors.primary")(e)} !important;
  }
`,be=j.c`
  padding-left: 0;
  &:after {
    width: 1px;
  }
`,ye=j.d.div`
  position: relative;
  transition: padding 0.2s;

  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 30px;
    left: 24px;
    width: 0;
    height: calc(100% - 36px);
    border-left: 1px dashed ${P("colors.sidebarBorder")};
    transition: width 0.2s;
  }

  ${e=>e.active&&be};
`;ye.defaultProps={active:!1,theme:null};const xe=e=>Object(j.d)(e)`
  position: relative;
  display: block;
  padding: 4px 15px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${P("colors.sidebarText")};
  text-decoration: none;
  transition: color 0.2s;

  &:hover,
  &:visited {
    color: ${P("colors.sidebarText")};
  }

  &:hover,
  &.active {
    color: ${e=>P("colors.sidebarPrimary")(e)||P("colors.primary")(e)};
    font-weight: 600;
  }
  ${e=>we(e)?ve:""}
`,we=e=>{const{partiallyActive:t,to:n,children:o}=e;return t&&!"REST API,ASF".includes(o.trim())},ke=xe(j.d.a``),Ae=(e=null,t)=>{const n=e&&e.classList.contains("active"),o=t&&(e=>{if("undefined"!==typeof window)return location.pathname.slice(0,location.pathname.length-1)===e})(t);return Boolean(n||o)},Ee=(r.MouseEventHandler,r.ReactNode,r.forwardRef(({item:e,children:t,onClick:n,onActiveChange:o},a)=>{const{linkComponent:s}=Object(u.useConfig)(),[i,l]=Object(r.useState)(!1),d=Object(u.usePrevious)(i),c=Object(r.useRef)(a),p=Object(r.useMemo)(()=>xe(s),[s]),m={children:t,onClick:n};return Object(r.useEffect)(()=>{const t=Ae(c.current,e.route);d!==t&&(l(t),c&&((e,t)=>{t&&t&&!e.classList.contains("active")&&e.classList.add("active")})(c.current,t))}),r.createElement(ye,{active:i},e.route?r.createElement(p,fe({},m,{to:e.route,innerRef:c,activeClassName:"active",partiallyActive:!0})):r.createElement(ke,fe({},m,{ref:c,href:e.href||"#",target:e.href?"_blank":"_self"},!e.href&&{onClick:e=>{e.preventDefault(),m.onClick&&m.onClick(e)}})),i&&e.route&&r.createElement(ge,{route:e.route}))}));Ee.displayName="MenuLink";var Se={localStorageKeys:{ACTIVEMENU:"ACTIVEMENU",NAVPOSITION:"NAVPOSITION"},checkMenuIsOPen:e=>{const{activeMenu:t,item:n}=e;return-1!==t.findIndex(e=>e===n.name)},pagesForGithubLink:["Source Repository"]};function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Ie={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},je=j.d.div`
  display: flex;
  flex-direction: column;
`,Pe={opened:!1},Oe=j.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;Oe.defaultProps=Pe;const De=j.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;

  & svg {
    stroke: ${P("colors.sidebarText")};
  }
`;De.defaultProps=Pe;const He=e=>{const{item:t,sidebarToggle:n,handleActiveMenu:o}=e,a=Se.checkMenuIsOPen(e),s=!t.href&&t.submenu&&t.submenu.length>0,i=!t.href&&!t.route,l=e=>{e.preventDefault(),o(t)};let u="";return u=(t.submenu&&t.submenu.length)>0&&t.name!==t.submenu[0].name?r.createElement(je,null,r.createElement(Ee,Ce({item:t},i&&{onClick:l}),""+t.name,s&&r.createElement(De,{opened:a},r.createElement(de.a,{size:15}))),s&&r.createElement(Oe,{opened:a},t.submenu&&t.menu.map(e=>r.createElement("dt",{key:e.name},r.createElement(Ee,{item:e,onClick:n},""+e.name))))):r.createElement(je,null,t.submenu&&t.submenu.map(e=>r.createElement("dt",{key:e.name},r.createElement(Ee,{item:e},""+e.name)))),u};function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}He.defaultProps={item:Ie,sidebarToggle:null,collapseAll:!0},He.defaultProps={opened:!0,hasActive:!0};const ze={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},$e=j.d.div`
  display: flex;
  flex-direction: column;
`,Me={opened:!1},Le=j.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;Le.defaultProps=Me;const Ne=j.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  & svg {
    stroke: ${P("colors.sidebarText")};
  }
`;Ne.defaultProps=Me;const _e=e=>{const{item:t,sidebarToggle:n,handleActiveMenu:o,activeMenu:a}=e,s=Se.checkMenuIsOPen(e),i=s,l=!t.href&&t.menu&&t.menu.length>0,u=!t.href&&!t.route,d=e=>{e.preventDefault(),o(t)},c={handleActiveMenu:o,activeMenu:a};let p=r.createElement($e,null,r.createElement(Ee,Te({item:t},u&&{onClick:d}),` ${t.name} `,l&&r.createElement(Ne,{opened:i},r.createElement(de.a,{size:15}))),l&&r.createElement(Le,{opened:i},t.menu&&t.menu.map(e=>r.createElement(Le,{opened:i,key:e.name},r.createElement(He,Te({item:e},c))))));return l||u||(p=r.createElement($e,null,r.createElement(Ee,Te({item:t},s&&{handleToggle:d}),t.name+" "))),p};_e.defaultProps={item:ze,sidebarToggle:null,collapseAll:!0},_e.defaultProps={opened:!1,hasActive:!1};const Be={opened:!0},Re=e=>e.opened?"45deg":"0deg",Fe=j.d.div`
  position: relative;
  width: 23px;
  height: 32px;
  transform: translateX(${e=>e.opened?"-2px":"-1px"})
    translateY(${e=>e.opened?"0":"2px"})
    scale(${e=>e.opened?.8:1});
`;Fe.defaultProps=Be;const We=P("colors.sidebarBg"),qe=P("colors.sidebarPrimary"),Ue=P("colors.sidebarText"),Ge=P("colors.primary"),Ve=P("colors.background"),Ke=P("colors.text"),Je=j.d.span`
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  background: ${e=>e.opened?Ue(e):Ke(e)};
  transition: transform 0.3s, opacity 0.3s;

  &:nth-of-type(1) {
    top: -2px;
    transform: translateY(${e=>e.opened?"10px":"0px"}) rotate(${Re});
  }

  &:nth-of-type(2) {
    top: 6px;
    opacity: ${e=>e.opened?"0":"1"};
  }

  &:nth-of-type(3) {
    top: 14px;
    transform: translateY(${e=>e.opened?"-6px":"0px"}) rotate(-${Re});
  }
`;Je.defaultProps=Be;const Qe=P("radii"),Ze=j.d.button`
  cursor: pointer;
  z-index: 99;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 6px;
  width: 33px;
  height: 30px;
  top: ${e=>e.opened?"3px":"2px"};
  right: ${e=>e.opened?"-39px":"-27px"};
  transform: translateX(${e=>e.opened?"-6px":"10px"}) translateY(${e=>e.opened?"0px":"4px"});
  transition: transform 0.3s;
  outline: none;
  border: none;
  background: ${e=>e.opened?We(e):Ve(e)};
  border-radius: ${e=>e.opened?`0 0 ${Qe(e)} 0`:""+Qe(e)};

  &:before {
    position: absolute;
    content: "";
    top: -3px;
    left: 0;
    width: calc(100% + 1px);
    height: ${e=>e.opened?"3px":0};
    background: ${e=>qe(e)||Ge(e)};
  }

  ${Y({display:["block","block","block","none"]})};
`;Ze.defaultProps=Be;Object.assign({},Be,{onClick:e=>null});const Xe=({opened:e,onClick:t})=>r.createElement(Ze,{opened:e,onClick:t},r.createElement(Fe,{opened:e},r.createElement(Je,{opened:e}),r.createElement(Je,{opened:e}),r.createElement(Je,{opened:e})));function Ye(e){return e&&"object"===typeof e&&"default"in e?e.default:e}const et=Ye(n("../node_modules/lodash/fp/pipe.js")),tt=Ye(n("../node_modules/lodash/fp/omit.js")),nt=Ye(n("../node_modules/array-sort/index.js")),ot=Ye(n("../node_modules/lodash/fp/flattenDepth.js")),at=Ye(n("../node_modules/match-sorter/dist/match-sorter.esm.js")),rt=n("../node_modules/ulid/dist/index.esm.js"),st=P("colors.sidebarBg"),it=P("colors.sidebarText"),lt=P("colors.sidebarBorder"),ut=j.d.div`
  position: relative;
  width: 320px;
  min-width: 320px;
  min-height: 100vh;
  background: ${st};
  transition: transform 0.2s, background 0.3s;
  z-index: 1000;

  ${Y({position:["absolute","absolute","absolute","relative"]})};

  dl {
    padding: 0;
    margin: 0 10px;
  }

  dl a {
    font-weight: 400;
  }

  @media screen and (max-width: ${X-1}px) {
    transform: translateX(${e=>e.opened?"-100%":"0"});
    position: ${e=>e.opened?"auto":"fixed"};
  }

  ${P("styles.sidebar")};
`;ut.defaultProps={opened:!0,theme:""};j.d.div`
  position: relative;
`,j.d.div`
  position: fixed;
  top: 0px;
  right: 10px;
`;const dt=j.d.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 320px;
  height: 100%;
  max-height: 100vh;
  background: ${st};
`,ct=j.d.nav`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`,pt=j.d.div`
  flex: 1;
  opacity: 0.7;
  padding: 0 24px;
  color: ${it};
`,mt=(j.d.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${it};
  border-top: 1px dashed ${lt};
`,j.d.a`
  padding: 0;
  margin: 0;
  margin-left: 5px;
`,Object(j.d)(({width:e=100,className:t})=>r.createElement("span",null))`
  fill: ${it};
`,j.d.div`
  content: "";
  display: ${e=>e.opened?"none":"block"};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  z-index: 99;
`);const ht=(e,t)=>e.name<t.name?-1:e.name>t.name?1:0,gt=(e,t=[])=>{const n="string"!==typeof e?V()("name",e):e,o=t.findIndex(e=>e===n);return-1!==o?o:1/0},ft=e=>!e.submenu,vt=e=>{const t=(e=>"string"===typeof e?{name:e}:e)(e);return Object.assign({},t,{id:t.id||rt.ulid(),parent:V()("parent",t)||V()("parent",e),menu:Array.isArray(t.menu)?t.menu.map(vt):t.menu})},bt=et(vt,e=>e.href||e.route?tt("menu",e):e),yt=e=>t=>t.submenu===e,xt=e=>({name:e.name,route:e.route,parent:e.parent,submenu:e.submenu,menu:e.menu});function wt(e,t,n){return Array.from(new Set(e.reduce((e,n)=>{const o=V()(t)(n);return o?e.concat([o]):e},[])))}const kt=(e,t)=>t.filter(yt(e)).map(xt),At=(e,t)=>t.filter(yt(e)).map(xt),Et=e=>{const t=e.filter(ft).map(xt),n=wt(e,"menu").map((e=>t=>({name:t,menu:At(t,e)}))(e)),o=wt(e,"submenu").map(function(e){return function(t){return{name:t,submenu:kt(t,e),menu:At(t,e)}}}(e));for(var a in n)for(var r of t)if(r.name==n[a].name){n[a]=r;break}for(var a in n)for(var s in o)n[a].name==o[s].menu[0].menu&&(n[a].menu.length,n[a].menu.push(o[s]));return U()("name",n,t)},St=(e,t)=>{const n=e.map(bt),o=t.map(bt);return U()("name",n,o).map(e=>{if(!e.menu)return e;const t=o.find(t=>t.name===e.name),n=t&&t.menu;return Object.assign({},e,{menu:n?St(e.menu,n):e.menu||t.menu})})},Ct=(e,t=[])=>nt(e,((e=[])=>(t,n)=>{const o=e.map(e=>e.name||e);return function(e,t,n){return e<t?n?1:-1:e>t?n?-1:1:0}(gt(t,o),gt(n,o))})(t),ht).map(e=>{if(!e.menu)return e;const n=t.find(t=>t.name===e.name),o=n&&n.menu;return Object.assign({},e,{menu:o?Ct(e.menu,o):e.menu})}),It=e=>{const{query:t=""}=e||{},{entries:n,config:o}=Object(r.useContext)(u.doczState.context);if(!n)return null;const a=n.map(({value:e})=>e),s=Et(a),i=r.useMemo(()=>{const t=St(s,o.menu),n=Ct(t,o.menu);return a=n,(r=e&&e.filter)?a.filter(r).map(e=>e.menu?Object.assign({},e,{menu:e.menu.filter(r)}):e):a;var a,r},[n,o]);return t&&t.length>0?((e,t)=>{const n=t.map(e=>[e].concat(e.menu||[])),o=ot(2,n),a=[...new Set(o)];return at(a,e,{keys:["name"]})})(t,i):i};mt.defaultProps={opened:!1};const jt=()=>{const[e,t]=Object(r.useState)((()=>{const{localStorageKeys:e}=Se;let t=JSON.parse(localStorage.getItem(e.ACTIVEMENU));return t||(t=["Documentation"],localStorage.setItem(e.ACTIVEMENU,JSON.stringify(t))),t})()),[n,o]=Object(r.useState)(!0),[a,s]=Object(r.useState)(""),i=It({query:a}),l=Object(u.useWindowSize)().innerWidth>=X,d=Object(u.usePrevious)(l),c=Object(r.useRef)();Object(r.useEffect)(()=>{n||d||!l||(o(!0),document.documentElement.classList.remove("with-overlay"))}),Object(r.useEffect)(()=>{const{localStorageKeys:e}=Se,t=parseInt(localStorage.getItem(e.NAVPOSITION));t&&(c.current.scrollTop=t)},[]);const p=()=>{l||(o(e=>!e),(e=>{const t=e?"remove":"add";"undefined"===typeof window||l||document.documentElement.classList[t]("with-overlay")})(!n))},m=()=>{const{localStorageKeys:e}=Se;localStorage.setItem(e.NAVPOSITION,c.current.scrollTop)},h=n=>{const{localStorageKeys:o}=Se,a=JSON.parse(JSON.stringify(e)),r=a.findIndex(e=>e===n.name);-1===r?(a.push(n.name),t(a)):(a.splice(r,1),t([...a])),localStorage.setItem(o.ACTIVEMENU,JSON.stringify(a))};let g=r.createElement(r.Fragment,null,r.createElement(ut,{opened:n},r.createElement(dt,null,r.createElement(Xe,{opened:!n,onClick:p}),r.createElement(ae,{showBg:!0}),i&&0===i.length?r.createElement(pt,null,"No documents founda."):r.createElement(ct,{ref:c,onScroll:m},i&&i.map(t=>r.createElement(_e,{key:t.id,item:t,sidebarToggle:p,activeMenu:e,handleActiveMenu:h}))))),r.createElement(mt,{opened:n,onClick:p}));return a.length>0&&(g=r.createElement(r.Fragment,null,r.createElement(ut,null,r.createElement(dt,null,r.createElement(Xe,{opened:!n,onClick:p}),r.createElement(ae,{showBg:!n}),r.createElement(Ee,{item:i}),r.createElement(ct,{ref:c,onScroll:m},i&&i.map(e=>r.createElement(He,{key:e.id,item:e,sidebarToggle:p,collapseAll:Boolean(a.length)}))))))),g},Pt=j.d.div`
	display: flex;
`,Ot=j.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${P("colors.text")};
  background: ${P("colors.background")};
`,Dt=j.d.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  color: ${P("colors.primary")};
`,Ht=j.d.p`
  margin: 0;
  font-size: 18px;
`,Tt=j.d.ol`
  list-style: none;
  counter-reset: my-awesome-counter;

  & li {
    counter-increment: my-awesome-counter;
  }

  & li::before {
    content: counter(my-awesome-counter) ". ";
    color: ${P("colors.border")};
    font-weight: bold;
    font-family: "Playfair Display", serif;
    margin-right: 5px;
  }

  ol li {
    padding-left: 25px;
  }

  ${P("styles.ol")};
`;var zt=n("../node_modules/react-feather/dist/icons/edit-2.js"),$t=n.n(zt);const Mt=j.d.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	outline: none;
	border: none;
`,Lt=Object(j.d)(Mt)`
	background: transparent;
`,Nt=e=>{let{options:t}=e;const[n,o]=Object(r.useState)(!1),a=Object(r.useRef)();Object(r.useEffect)(()=>{const e=e=>{e.target.classList.contains("dropbtn")||e.target.classList.contains("dropdown-item")||!a.current.classList.contains("show")||o(!1)};return window.addEventListener("mousedown",e),()=>{window.removeEventListener("mousedown",e)}},[]);const i=j.d.div`
    > div {
      display: inline-block;
      width: 160px;
    }
    label {
      margin-right: 5px;
    }
  `,l=j.d.div`
    .dropbtn {
      background-color: #ffffff;
      color: rgb(45, 55, 71);
      padding: 5px;
      font-size: 14px;
      border: 1px solid rgb(204, 204, 204);
      cursor: pointer;
      width: 100%;
      text-align: left;
      border-radius: 4px;
      &:hover, &:focus {
        border: 1px solid rgb(55, 187, 155);
      }
    }

    .dropdown {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .dropdown-content {
      margin-top: 10px;
      display: none;
      position: absolute;
      background-color: #ffffff;
      width: 160px;
      overflow: auto;
      max-height: 300px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      .dropdown-item {
        padding: 5px 12px;
        &:hover {
          background-color: rgba(55, 187, 155, 0.1);;
        }
      }
    }

    .dropdown-content a {
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown a:hover {background-color: #ddd;}

    .show {display: block;}
    i {
      color: rgb(45, 55, 71);
      border: solid black;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 3px;
      float: right;
    }
    .up {
      margin-top: 5px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    .down {
      margin-top: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  `;return s.a.createElement(i,null,s.a.createElement(l,null,s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{className:"dropbtn",onClick:()=>o(e=>!e)},"Versions ",s.a.createElement("i",{className:""+(n?"up":"down")})),s.a.createElement("div",{ref:a,id:"myDropdown",className:"dropdown-content "+(n?"show":"")},t.map((function(e,t){return s.a.createElement("div",{className:"dropdown-item",key:t,"data-href":e.href,onClick:e=>{const t=e.currentTarget.dataset.href,n=`${window.location.origin}${t}`;window.open(n,"_blank")}},e.title)}))))))};Nt.propTypes={};var _t=Nt;const Bt=j.d.div`
        width: 160px;
	padding: 0;
	margin-right: 5px;
	float: right;
`,Rt=()=>{const{config:e}=Object(r.useContext)(u.doczState.context),{atlasVersions:t}=e;return s.a.createElement(Bt,null,s.a.createElement(_t,{options:t,style:{minHeight:"auto",padding:"0 5px",borderRadius:"5px"}}))},Ft=j.d.div`
  width: 100%;
  height: auto;
  padding: 0;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  background: rgb(255, 255, 255);
`;var Wt=e=>r.createElement(Ft,null,r.createElement(W,e),r.createElement(Rt,null));const qt=j.d.div`
  flex: 1;
  color: ${P("colors.text")};
  background: ${P("colors.background")};
  min-width: 0;
  position: relative;
  padding-top: 50px;
`,Ut=j.d.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${Y({width:["100%","100%","95%"],padding:["20px","0 30px 36px"]})}

  ${P("styles.container")};
`,Gt=Object(j.d)(Lt.withComponent("a"))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: ${P("radii")};
  border: 1px solid ${P("colors.border")};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${P("colors.text")};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${P("colors.border")};
  }

  ${Y({visibility:["hidden","hidden","visible"],top:[0,-60,32],right:[0,0,40]})};
`,Vt=Object(j.d)($t.a)`
  margin-right: 5px;
`,Kt=j.d.p`
	color: ${P("colors.text")};
	${P("styles.paragraph")};
`,Jt=j.d.div`
  display: flex;
  flex-direction: column;

  & ~ & {
    margin-top: 20px;
  }
`,Qt=j.d.div`
  display: flex;
  border-bottom: 1px solid ${P("colors.propsBg")};
`,Zt=j.d.span`
  background: ${P("colors.propsBg")};
  color: ${P("colors.primary")};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: 500;

  & ~ & {
    margin-left: 5px;
  }
`,Xt=Object(j.d)(Zt)`
  color: ${P("colors.propsText")};
  background: ${P("colors.propsBg")};
  font-weight: 400;
`,Yt=Object(j.d)(Xt)`
  background: transparent;
  padding-left: 0;
  padding-right: 0;
`,en=Object(j.d)(Xt)`
  flex: 1;
  text-align: right;
  background: transparent;
  opacity: 0.5;
`,tn=({props:e,getPropType:t})=>{const n=Object.entries(e),o=Object(u.useComponents)(),a=Object(r.useMemo)(()=>Object(j.d)(o.P||"p")`
      font-size: 16px;
      color: ${P("colors.sidebarText")};
    `,[]);return r.createElement(r.Fragment,null,n.map(([e,n])=>n.type||n.flowType?r.createElement(Jt,{key:e},r.createElement(Qt,null,r.createElement(Zt,null,e),r.createElement(Xt,null,t(n)),n.defaultValue&&r.createElement(Yt,null,"''"===n.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",n.defaultValue.value.replace(/\'/g,'"'))),n.required&&r.createElement(en,null,r.createElement("em",null,"required"))),n.description&&r.createElement(a,null,n.description)):null))},nn=j.d.div`
  border: 1px solid ${P("colors.border")};
  border-radius: 4px;
  overflow: hidden;
  background: ${P("colors.propsBg")};
  color: ${P("colors.propsText")};
`,on=j.d.div`
  padding: 8px 0;

  @media (min-width: ${"600px"}) {
    padding: O;
  }

  & + & {
    border-top: 1px solid ${P("colors.border")};
  }
`,an=j.d.div`
  min-width: 0;
  padding: 2px 15px;
  word-wrap: break-word;

  @media (min-width: ${"600px"}) {
    padding: 8px 15px;
  }
`,rn=Object(j.d)(an)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,sn=Object(j.d)(an)`
  @media (min-width: ${"600px"}) {
    flex-basis: 50%;
  }
`,ln=Object(j.d)(an)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,un=j.d.div`
  display: flex;
  flex-direction: column;
  font-family: ${P("fonts.mono")};

  @media (min-width: ${"600px"}) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`,dn=j.d.span`
  color: ${P("colors.primary")};
  font-weight: bold;
`,cn=j.d.span`
  font-size: 0.9em;
`,pn=j.d.span`
  font-size: 0.9em;
`,mn=j.d.span`
  font-size: 0.8em;
  opacity: 0.8;
`,hn=({props:e,getPropType:t})=>{const n=Object.entries(e),o=Object(u.useComponents)(),a=Object(r.useMemo)(()=>Object(j.d)(o.P||"p")`
      margin: 0;
      font-size: 16px;
      color: ${P("colors.blockquoteColor")};
      padding: 0 15px 8px 15px;
    `,[]);return r.createElement(nn,null,n.map(([e,n])=>n.type||n.flowType?r.createElement(on,{key:e},r.createElement(un,null,r.createElement(rn,null,r.createElement(dn,null,e)),r.createElement(sn,null,r.createElement(cn,null,t(n))),r.createElement(ln,null,n.defaultValue&&r.createElement(pn,null,"''"===n.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",n.defaultValue.value.replace(/\'/g,'"'))),n.required&&r.createElement(mn,null,r.createElement("strong",null,"required")))),n.description&&r.createElement(a,null,n.description)):null))},gn=j.d.div`
  margin: 20px 0;
`,fn=j.d.div`
  overflow-x: auto;
  padding: 2px;
  margin-bottom: 30px;

  ${Y({marginBottom:[20,40],maxWidth:["calc(100vw - 40px)","calc(100vw - 80px)","100%"]})};
`,vn=j.d.table`
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px ${P("colors.border")};
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: ${P("radii")};
  font-size: 14px;
  color: ${P("colors.tableColor")};

  ${Y({overflowX:["initial","initial","initial","hidden"],display:["table","table","table","table"]})}

  & thead {
    color: ${P("colors.theadColor")};
    background: ${P("colors.theadBg")};
  }

  & thead th {
    font-weight: 400;
    padding: 10px;
    text-align: left;

    &:nth-of-type(1) {
      ${Y({width:["20%","20%","20%","auto"]})};
    }

    &:nth-of-type(2) {
      ${Y({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(3) {
      ${Y({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(4) {
      ${Y({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(5) {
      ${Y({width:["20%","20%","20%","auto"]})};
    }
  }

  & tbody td {
    padding: 10px;
    line-height: 2;
    font-weight: 200;
    text-align: left;
  }

  & tbody > tr {
    display: table-row;
    border-top: 1px solid ${P("colors.border")};
  }

  ${P("styles.table")};
`,bn={a:({href:e,...t})=>{const{separator:n,linkComponent:o}=Object(u.useConfig)(),a=Object(u.useDocs)(),s=Object(r.useMemo)(()=>((e,t)=>"undefined"===typeof window?null:[location.pathname.split(e).slice(0,-1).join(e).slice(1),(t||"").replace(/^(?:\.\/)+/gi,"")].join("/"))(n,e),[n,e]),i=a&&a.find(e=>e.filepath===s),l=i?i.route:e;return l&&l.startsWith("/")?r.createElement(z,T({as:o},t,{to:l})):r.createElement(z,T({},t,{href:l}))},blockquote:D,inlineCode:H,loading:()=>r.createElement($,null,r.createElement(B,null)),notFound:()=>r.createElement(Pt,null,r.createElement(jt,null),r.createElement(Ot,null,r.createElement(Dt,null,"Page Not Found"),r.createElement(Ht,null,"Check if you changed the document route or deleted it!"))),ol:Tt,p:Kt,page:({children:e,doc:{link:t,fullpage:n,edit:o=!1}})=>{const{repository:a}=Object(u.useConfig)(),{props:s}=e,i=Se.pagesForGithubLink.toString().includes(s.doc.name),l=r.createElement(r.Fragment,null,t&&o&&r.createElement(Gt,{href:t,target:"_blank"},r.createElement(Vt,{width:14})," Edit page"),r.createElement(Wt,{showGithubLink:i}),e);return r.createElement(Pt,null,a&&r.createElement(W,{repository:a}),!n&&r.createElement(jt,null),r.createElement(qt,null,n?l:r.createElement(Ut,null,l)))},pre:()=>r.createElement("div",null),props:({title:e,isRaw:t,isToggle:n,...o})=>{const[a,s]=Object(r.useState)(!0),i=Object(u.useComponents)(),l=Object(r.useMemo)(()=>Object(j.d)(i.H3||"h3")`
      padding: 8px 0;
      position: relative;
      ${t?"":"margin-bottom: 0;"}
      ${!a||t?"border-bottom: 1px solid rgba(0, 0, 0, 0.1);":""}

      ${n?`\n        cursor: pointer;\n        padding-right: 40px;\n\n        &::after {\n          content: '';\n          position: absolute;\n          top: 50%;\n          right: 16px;\n          transform: translateY(-50%) ${a?"rotate(-135deg)":"rotate(45deg)"};\n          ${a?"":"margin-top: -2px;"}\n          width: 8px;\n          height: 8px;\n          border-bottom: 2px solid;\n          border-right: 2px solid;\n        }\n      `:""}
    `,[a]),d=n?{onClick:()=>s(e=>!e),onkeydown:()=>s(e=>!e),role:"button",tabindex:0}:{};return r.createElement(gn,null,(!!e||n)&&r.createElement(l,d,e||"Component props"),a&&r.createElement("div",null,t?r.createElement(tn,o):r.createElement(hn,o)))},table:e=>r.createElement(fn,null,r.createElement(vn,e)),ul:j.d.ul`
  list-style: none;

  & li::before {
    content: "● ";
    color: ${P("colors.border")};
    font-weight: bold;
    font-size: 0.5em;
    margin-right: 5px;
  }

  ${P("styles.ul")};

  ul li {
    padding-left: 25px;
  }
`},yn=j.b`
  @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    ${P("styles.body")};
  }

  .with-overlay {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }
`,xn={colors:o,styles:{body:j.c`
    font-family: ${P("fonts.ui")};
    font-size: 16px;
    line-height: 1.6;
  `,h1:j.c`
    margin: 40px 0 20px;
    font-family: ${P("fonts.display")};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.02em;
  `,h2:j.c`
    margin: 30px 0 15px;
    line-height: 1.4em;
    font-family: ${P("fonts.display")};
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.02em;
  `,h3:j.c`
    margin: 25px 0 10px;
    font-size: 20px;
    font-weight: 400;
  `,h4:j.c`
    margin: 25px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h5:j.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h6:j.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  `,ol:j.c`
    padding: 0;
    margin: 10px 0 10px;
  `,ul:j.c`
    padding: 0;
    margin: 10px 0 10px;
  `,playground:j.c`
    padding: 40px;
  `,code:j.c`
    margin: 0 3px;
    border-radius: 3px;
    font-family: ${P("fonts.mono")};
    padding: 2px 5px;
    font-size: 0.8em;
    border: "1px solid rgba(0, 0, 0, 0.02)";
  `,pre:j.c`
    font-family: ${P("fonts.mono")};
    font-size: 1em;
    line-height: 1.8;
  `,paragraph:j.c`
    margin: 10px 0 20px 0;
  `,table:j.c`
    overflow-y: hidden;
    width: 100%;
    font-family: ${P("fonts.mono")};
    font-size: 16px;
    overflow-x: initial;
    display: block;
  `,blockquote:j.c`
    margin: 25px 0;
    padding: 20px;
    font-style: italic;
    font-size: 16px;
  `},fonts:{display:'"Source Sans Pro", sans-serif',mono:'"Inconsolata", monospace',ui:'"Source Sans Pro", sans-serif'},radii:"2px",mode:"light",showPlaygroundEditor:!1,linesToScrollEditor:18},wn=(P("colors.sidebarBg"),P("colors.sidebarText","#13161F"),j.d.a`
	&,
	&:visited,
	&:active {
		text-decoration: none;
		color: ${P("colors.link")};
	}

	&:hover {
		color: ${P("colors.link")};
	}

	${P("styles.link")};
`),kn=j.d.div`
	position: absolute;
	margin-left: 350px;
	width: 70%;
	font-size: 10px;
	@media screen and (max-width: ${Z}px) {
		width: 90%;
		margin: 0 50px;
	}
	@media screen and (max-width: ${Q-1}px) {
		width: 90%;
		margin: 0 50px;
	}
`,An=j.d.div``,En=e=>{let{options:t,title:n,...o}=e;return r.createElement(kn,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(An,null,r.createElement(wn,{href:"https://www.apache.org/foundation/contributing"},r.createElement("img",{src:"https://www.apache.org/images/SupportApache-small.png",alt:"Support the ASF",id:"asf-logo",height:"10",width:"10"})),"Copyright \xa9 2011-2018 The Apache Software Foundation. Licensed under the"," ",r.createElement(wn,{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License, Version 2.0"),".Apache Atlas, Atlas, Apache, the Apache feather logo are trademarks of the"," ",r.createElement(wn,{href:"https://www.apache.org"},"Apache Software Foundation"),".All other marks mentioned may be trademarks or registered trademarks of their respective owners."))))};var Sn=Object(u.theme)(xn,({mode:e,codemirrorTheme:t,...n})=>({...n,mode:e,codemirrorTheme:t||"docz-"+e,colors:{...c()(a,e),...n.colors}}))(({children:e})=>r.createElement(O,null,r.createElement(yn,null),r.createElement(u.ComponentsProvider,{components:bn},e),r.createElement(En,null))),Cn={"documents/BusinessMetadata.md":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./src/documents/BusinessMetadata.md"))},"documents/ClassificationPropagation.md":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./src/documents/ClassificationPropagation.md"))},"documents/Glossary.md":function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"./src/documents/Glossary.md"))},"documents/HighAvailability.md":function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"./src/documents/HighAvailability.md"))},"documents/HighLevelArchitecture.md":function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"./src/documents/HighLevelArchitecture.md"))},"documents/Notifications.md":function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"./src/documents/Notifications.md"))},"documents/Overview.md":function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"./src/documents/Overview.md"))},"documents/RestAPI.md":function(){return Promise.all([n.e(0),n.e(35)]).then(n.bind(null,"./src/documents/RestAPI.md"))},"documents/TypeSystem.md":function(){return Promise.all([n.e(0),n.e(49)]).then(n.bind(null,"./src/documents/TypeSystem.md"))},"documents/Asf/asfinfo.md":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./src/documents/Asf/asfinfo.md"))},"documents/Downloads/Downloads.md":function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"./src/documents/Downloads/Downloads.md"))},"documents/Hook/HookFalcon.md":function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"./src/documents/Hook/HookFalcon.md"))},"documents/Hook/HookHBase.md":function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"./src/documents/Hook/HookHBase.md"))},"documents/Hook/HookHive.md":function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"./src/documents/Hook/HookHive.md"))},"documents/Hook/HookKafka.md":function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"./src/documents/Hook/HookKafka.md"))},"documents/Hook/HookSqoop.md":function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"./src/documents/Hook/HookSqoop.md"))},"documents/Hook/HookStorm.md":function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"./src/documents/Hook/HookStorm.md"))},"documents/Import-Export/ExportAPI.md":function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"./src/documents/Import-Export/ExportAPI.md"))},"documents/Import-Export/ExportHDFSAPI.md":function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"./src/documents/Import-Export/ExportHDFSAPI.md"))},"documents/Import-Export/ExportImportAudits.md":function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"./src/documents/Import-Export/ExportImportAudits.md"))},"documents/Import-Export/ImportAPIOptions.md":function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"./src/documents/Import-Export/ImportAPIOptions.md"))},"documents/Import-Export/ImportAPI.md":function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"./src/documents/Import-Export/ImportAPI.md"))},"documents/Import-Export/ImportEntityTransforms.md":function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"./src/documents/Import-Export/ImportEntityTransforms.md"))},"documents/Import-Export/ImportExportAPI.md":function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"./src/documents/Import-Export/ImportExportAPI.md"))},"documents/Import-Export/IncrementalExport.md":function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"./src/documents/Import-Export/IncrementalExport.md"))},"documents/Migration/Migration-0.8-to-1.0.md":function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"./src/documents/Migration/Migration-0.8-to-1.0.md"))},"documents/Misc/AtlasServer.md":function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"./src/documents/Misc/AtlasServer.md"))},"documents/Misc/ReplicatedAttributes.md":function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"./src/documents/Misc/ReplicatedAttributes.md"))},"documents/Misc/SoftReference.md":function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"./src/documents/Misc/SoftReference.md"))},"documents/Project-Info/IssueTracking.md":function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"./src/documents/Project-Info/IssueTracking.md"))},"documents/Project-Info/ProjectInfo.md":function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,"./src/documents/Project-Info/ProjectInfo.md"))},"documents/Project-Info/MailingLists.md":function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,"./src/documents/Project-Info/MailingLists.md"))},"documents/Project-Info/ProjectLicense.md":function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"./src/documents/Project-Info/ProjectLicense.md"))},"documents/Project-Info/SourceRepository.md":function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,"./src/documents/Project-Info/SourceRepository.md"))},"documents/Project-Info/TeamList.md":function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,"./src/documents/Project-Info/TeamList.md"))},"documents/Search/SearchAdvanced.md":function(){return Promise.all([n.e(0),n.e(36)]).then(n.bind(null,"./src/documents/Search/SearchAdvanced.md"))},"documents/Search/SearchBasic.md":function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,"./src/documents/Search/SearchBasic.md"))},"documents/Security/AtlasRangerAuthorizer.md":function(){return Promise.all([n.e(0),n.e(38)]).then(n.bind(null,"./src/documents/Security/AtlasRangerAuthorizer.md"))},"documents/Security/Authentication.md":function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,"./src/documents/Security/Authentication.md"))},"documents/Security/AtlasSimpleAuthorizer.md":function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,"./src/documents/Security/AtlasSimpleAuthorizer.md"))},"documents/Security/Security.md":function(){return Promise.all([n.e(0),n.e(42)]).then(n.bind(null,"./src/documents/Security/Security.md"))},"documents/Security/AuthorizationModel.md":function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"./src/documents/Security/AuthorizationModel.md"))},"documents/Tools/AtlasRepairIndex.md":function(){return Promise.all([n.e(0),n.e(48)]).then(n.bind(null,"./src/documents/Tools/AtlasRepairIndex.md"))},"documents/Setup/BuildInstruction.md":function(){return Promise.all([n.e(0),n.e(43)]).then(n.bind(null,"./src/documents/Setup/BuildInstruction.md"))},"documents/Setup/Configuration.md":function(){return Promise.all([n.e(0),n.e(44)]).then(n.bind(null,"./src/documents/Setup/Configuration.md"))},"documents/Setup/EclipseSetup.md":function(){return Promise.all([n.e(0),n.e(45)]).then(n.bind(null,"./src/documents/Setup/EclipseSetup.md"))},"documents/Setup/InstallationInstruction.md":function(){return Promise.all([n.e(0),n.e(46)]).then(n.bind(null,"./src/documents/Setup/InstallationInstruction.md"))},"documents/Setup/QuickStart.md":function(){return Promise.all([n.e(0),n.e(47)]).then(n.bind(null,"./src/documents/Setup/QuickStart.md"))},"documents/Whats-New/WhatsNew-1.0.md":function(){return Promise.all([n.e(0),n.e(50)]).then(n.bind(null,"./src/documents/Whats-New/WhatsNew-1.0.md"))},"documents/Whats-New/WhatsNew-2.0.md":function(){return Promise.all([n.e(0),n.e(51)]).then(n.bind(null,"./src/documents/Whats-New/WhatsNew-2.0.md"))},"documents/Whats-New/WhatsNew-2.1.md":function(){return Promise.all([n.e(0),n.e(52)]).then(n.bind(null,"./src/documents/Whats-New/WhatsNew-2.1.md"))},"documents/Whats-New/WhatsNew-2.2.md":function(){return Promise.all([n.e(0),n.e(53)]).then(n.bind(null,"./src/documents/Whats-New/WhatsNew-2.2.md"))}},In=n("./.docz/app/db.json"),jn=function(){return s.a.createElement(Sn,{linkComponent:u.Link,db:In},s.a.createElement(u.Routes,{imports:Cn}))},Pn=[],On=[],Dn=function(){return Pn.forEach((function(e){return e&&e()}))},Hn=function(){return On.forEach((function(e){return e&&e()}))},Tn=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn;Dn(),l.a.render(s.a.createElement(e,null),Tn,Hn)}(jn)},"./docz-lib/docz/dist/Playground.js":function(e,t,n){"use strict";var o=n("../node_modules/react/index.js");n("../node_modules/lodash/fp/get.js");var a=n("./docz-lib/docz/dist/chunk.js");n("../node_modules/lodash/fp/omit.js"),n("../node_modules/fast-deep-equal/index.js"),n("../node_modules/lodash/fp/merge.js"),n("../node_modules/array-sort/index.js"),n("../node_modules/lodash/fp/unionBy.js"),n("../node_modules/lodash/fp/flattenDepth.js"),n("../node_modules/lodash/fp/pipe.js"),n("../node_modules/ulid/dist/index.esm.js"),n("../node_modules/match-sorter/dist/match-sorter.esm.js"),n("../node_modules/lodash/fp/throttle.js");t.default=({className:e,style:t,wrapper:n,children:r,__scope:s,__position:i,__code:l,__codesandbox:u})=>{const d=a.useComponents();if(!d||!d.playground)return null;const c={className:e,style:t,components:d};return o.createElement(d.playground,Object.assign({},c,{component:r,wrapper:n,scope:s,position:i,code:l,codesandbox:u}))}},"./docz-lib/docz/dist/chunk.js":function(e,t,n){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=n("../node_modules/react/index.js"),r=o(n("../node_modules/lodash/fp/get.js")),s=o(n("../node_modules/lodash/fp/omit.js")),i=o(n("../node_modules/fast-deep-equal/index.js")),l=o(n("../node_modules/lodash/fp/merge.js")),u=o(n("../node_modules/array-sort/index.js")),d=o(n("../node_modules/lodash/fp/unionBy.js")),c=o(n("../node_modules/lodash/fp/flattenDepth.js")),p=o(n("../node_modules/lodash/fp/pipe.js")),m=n("../node_modules/ulid/dist/index.esm.js"),h=o(n("../node_modules/match-sorter/dist/match-sorter.esm.js")),g=o(n("../node_modules/lodash/fp/throttle.js"));const f={loading:()=>a.createElement(a.Fragment,null,"Loading"),playground:({component:e,code:t})=>a.createElement(a.Fragment,null,e,t),notFound:()=>a.createElement(a.Fragment,null,"Not found"),page:({children:e})=>a.createElement(a.Fragment,null,e)},v=a.createContext({});function b(e,t,n){return e<t?n?1:-1:e>t?n?-1:1:0}const y=function(e){var t;const n=a.createContext(e),o=new Set;return{context:n,set:e=>(e=>{o.forEach(t=>t(e))})(e),Provider:(t=class extends a.Component{constructor(){super(...arguments),this.state=this.props.initial||e||{}}static getDerivedStateFromProps(e,t){return i(e.initial,t)?null:e.initial}componentDidMount(){o.add(e=>this.setState(e))}componentWillUnmount(){o.clear()}render(){return a.createElement(n.Provider,{value:this.state},this.props.children)}},t.displayName="DoczStateProvider",t)}}({}),x=e=>{const{type:t,payload:n}=JSON.parse(e.data),o=t.startsWith("state.")&&t.split(".")[1];o&&y.set(e=>Object.assign({},e,{[o]:n}))},w=e=>!e.menu,k=e=>({name:e.name,route:e.route,parent:e.parent}),A=(e,t)=>t.filter((e=>t=>t.menu===e)(e)).map(k),E=e=>{const t=e.filter(w).map(k),n=(o=e,a="menu",Array.from(new Set(o.reduce((e,t)=>{const n=r(a)(t);return n?e.concat([n]):e},[])))).map((e=>t=>({name:t,menu:A(t,e)}))(e));var o,a;return d("name",n,t)},S=e=>{const t=(e=>"string"===typeof e?{name:e}:e)(e);return Object.assign({},t,{id:t.id||m.ulid(),parent:r("parent",t)||r("parent",e),menu:Array.isArray(t.menu)?t.menu.map(S):t.menu})},C=p(S,e=>e.href||e.route?s("menu",e):e),I=(e,t)=>{const n=e.map(C),o=t.map(C);return d("name",n,o).map(e=>{if(!e.menu)return e;const t=o.find(t=>t.name===e.name),n=t&&t.menu;return Object.assign({},e,{menu:n?I(e.menu,n):e.menu||t.menu})})},j=(e,t=[])=>{const n="string"!==typeof e?r("name",e):e,o=t.findIndex(e=>e===n);return-1!==o?o:1/0},P=(e,t)=>e.name<t.name?-1:e.name>t.name?1:0,O=(e,t=[])=>u(e,((e=[])=>(t,n)=>{const o=e.map(e=>e.name||e);return b(j(t,o),j(n,o))})(t),P).map(e=>{if(!e.menu)return e;const n=t.find(t=>t.name===e.name),o=n&&n.menu;return Object.assign({},e,{menu:o?O(e.menu,o):u(e.menu,P)})}),D="object"===typeof window,H=(e,t)=>({innerHeight:D?window.innerHeight:t,innerWidth:D?window.innerWidth:e,outerHeight:D?window.outerHeight:t,outerWidth:D?window.outerWidth:e});t.ComponentsProvider=({components:e={},children:t})=>a.createElement(v.Provider,{value:Object.assign({},f,e)},t),t.doczState=y,t.isFn=e=>"function"===typeof e,t.useComponents=()=>a.useContext(v),t.useConfig=()=>{const e=a.useContext(y.context),{linkComponent:t,transform:n,config:o,themeConfig:r={}}=e,s=l(r,o?o.themeConfig:{}),i=n?n(s):s;return Object.assign({},o,{linkComponent:t,themeConfig:i})},t.useDataServer=e=>{a.useEffect(()=>{if(!e)return;const t=new WebSocket(e);return t.onmessage=x,()=>t.close()},[])},t.useDocs=()=>{const{entries:e=[]}=a.useContext(y.context),t=e.map(({value:e})=>e);return u(t,(e,t)=>b(e.name,t.name))},t.useMenus=e=>{const{query:t=""}=e||{},{entries:n,config:o}=a.useContext(y.context);if(!n)return null;const r=n.map(({value:e})=>e),s=E(r),i=a.useMemo(()=>{const t=I(s,o.menu),n=O(t,o.menu);return a=n,(r=e&&e.filter)?a.filter(r).map(e=>e.menu?Object.assign({},e,{menu:e.menu.filter(r)}):e):a;var a,r},[n,o]);return t&&t.length>0?((e,t)=>{const n=t.map(e=>[e].concat(e.menu||[])),o=c(2,n),a=[...new Set(o)];return h(a,e,{keys:["name"]})})(t,i):i},t.usePrevious=(e,t)=>{const n=a.useRef(t);return a.useEffect(()=>{n.current=e}),n.current},t.useWindowSize=(e=300,t=1/0,n=1/0)=>{const[o,r]=a.useState(H(n,n)),s=g(e,()=>r(H(n,n)));return a.useEffect(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[]),o}},"./docz-lib/docz/dist/index.js":function(e,t,n){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),r=o(n("../node_modules/@loadable/component/dist/loadable.esm.js")),s=o(n("../node_modules/lodash/fp/get.js")),i=n("../node_modules/tslib/tslib.es6.js"),l=n("./docz-lib/docz/dist/chunk.js"),u=o(n("../node_modules/lodash/fp/omit.js")),d=n("../node_modules/@reach/router/es/index.js"),c=o(n("../node_modules/lodash/fp/first.js")),p=o(n("../node_modules/capitalize/index.js"));n("../node_modules/fast-deep-equal/index.js"),n("../node_modules/lodash/fp/merge.js"),n("../node_modules/array-sort/index.js"),n("../node_modules/lodash/fp/unionBy.js"),n("../node_modules/lodash/fp/flattenDepth.js"),n("../node_modules/lodash/fp/pipe.js"),n("../node_modules/ulid/dist/index.esm.js"),n("../node_modules/match-sorter/dist/match-sorter.esm.js"),n("../node_modules/lodash/fp/throttle.js");var m=n("../node_modules/@mdx-js/react/dist/esm.js");let h=n("../node_modules/hash-source/src/dist/createHashSource.js").default();const g=r(()=>Promise.resolve(n("./docz-lib/docz/dist/Playground.js"))),f=e=>{const[t,n]=a.useState(!0),[o,r]=a.useState(null),[s,u]=a.useState({});a.useEffect(()=>{const{getInitialProps:t}=e;t&&l.isFn(t)&&(n(!0),t(e).then(e=>{n(!1),r(null),u(e)}).catch(e=>{n(!1),r(e),u({})}))},[]);const{as:d,getInitialProps:c}=e,p=i.__rest(e,["as","getInitialProps"]);return a.createElement(d,Object.assign({},p,{data:Object.assign({},s,{loading:t,error:o})}))},v=(e,t,n)=>{const o=n.loading;return r(async()=>{const n=s(e,t),{default:o,getInitialProps:r}=await n();return e=>a.createElement(f,Object.assign({},e,{as:o||"div",getInitialProps:r}))},{fallback:a.createElement(o,null)})},b=e=>{const{asyncComponent:t,path:n,entry:o}=e,r=i.__rest(e,["asyncComponent","path","entry"]),s=l.useComponents().page,u=t,d=Object.assign({},r,{doc:o});return s?a.createElement(s,Object.assign({},d),a.createElement(u,Object.assign({},d))):a.createElement(u,Object.assign({},d))},y=a.forwardRef((e,t)=>{const n=u(["activeClassName","partiallyActive"],e),o=a.useCallback(({isCurrent:e})=>e?{className:n.className+" active"}:{},[n.className]);return a.createElement(d.Link,Object.assign({},n,{getProps:o,ref:t}))});y.displayName="Link";const x=/(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/,w=e=>{switch(e.name.toLowerCase()){case"instanceof":return`Class(${e.value})`;case"enum":return e.computed?e.value:e.value?e.value.map(e=>""+e.value).join(" \u2502 "):e.raw;case"union":return e.value?e.value.map(e=>""+w(e)).join(" \u2502 "):e.raw;case"array":return e.raw;case"arrayof":return`Array<${w(e.value)}>`;case"custom":if(-1!==e.raw.indexOf("function")||-1!==e.raw.indexOf("=>"))return"Custom(Function)";if(-1!==e.raw.toLowerCase().indexOf("objectof")){const t=e.raw.match(x);return t&&t[1]?`ObjectOf(${p(t[1])})`:"ObjectOf"}return"Custom";case"bool":return"Boolean";case"func":return"Function";case"shape":const t=e.value,n={};return Object.keys(t).forEach(e=>{n[e]=w(t[e])}),JSON.stringify(n,null,2);default:return p(e.name)}},k=e=>w(e),A=e=>{const t=s("name",e.flowType||e.type);if(!t)return null;const n=t.startsWith('"')||"enum"===t,o=p(n?"enum":t),a=s("type.value",e);return o?n&&"string"===typeof a||!e.flowType&&!n&&!a||e.flowType&&!e.flowType.elements?o:e.flowType?k(e.flowType):k(e.type):null},E=({location:e})=>{setTimeout(()=>{if(e&&e.hash){const t=decodeURI(e.hash).substring(1),n=document.getElementById(t);n&&n.scrollIntoView()}})};t.ComponentsProvider=l.ComponentsProvider,t.doczState=l.doczState,t.useComponents=l.useComponents,t.useConfig=l.useConfig,t.useDataServer=l.useDataServer,t.useDocs=l.useDocs,t.useMenus=l.useMenus,t.usePrevious=l.usePrevious,t.useWindowSize=l.useWindowSize,t.AsyncRoute=b,t.Link=y,t.Playground=e=>"undefined"!==typeof window?a.createElement(a.Suspense,{fallback:null},a.createElement(g,Object.assign({},e))):null,t.Props=({title:e,isToggle:t,isRaw:n,of:o})=>{const r=l.useComponents(),{props:i}=a.useContext(l.doczState.context),u=r.props,d=s("__filemeta.filename",o),p=s("__filemeta.name",o)||o.displayName||o.name,m=i&&i.length>0&&i.find(e=>d?e.key===d:e.key.includes(p+".")),h=s("value",m)||[],g=c(h),f=h.find(e=>e.displayName===p),v=s("props",f||g);return v&&u?a.createElement(u,{title:e,isRaw:n,isToggle:t,props:v,getPropType:A}):null},t.Routes=({imports:e})=>{const t=l.useComponents(),{entries:n}=a.useContext(l.doczState.context),o=t.notFound,r=a.useMemo(()=>d.createHistory(h),[]);return a.useEffect(()=>{r.listen(E)},[]),a.createElement(m.MDXProvider,{components:t},a.createElement(d.LocationProvider,{history:r},a.createElement(d.Router,null,a.createElement(o,{default:!0}),n&&n.map(({key:o,value:r})=>{const s={path:o,entries:n,components:t},i=v(o,e,t);return a.createElement(b,Object.assign({},s,{entry:r,key:r.id,path:r.route,asyncComponent:i}))}))))},t.loadRoute=v,t.theme=function(e,t=(e=>e)){return n=>{const o=a.memo(o=>{const{linkComponent:r}=o,{db:s,children:i,wrapper:u=a.Fragment}=o,d=Object.assign({},s,{themeConfig:e,transform:t,linkComponent:r});return a.createElement(l.doczState.Provider,{initial:d},a.createElement(u,null,a.createElement(n,null,i)))});return o.displayName=n.displayName||"DoczTheme",o}}},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.36f732bbf8c7eaee188d.js.map