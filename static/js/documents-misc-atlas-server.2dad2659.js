(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/documents/Misc/AtlasServer.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),m=a("./theme/components/shared/Img/index.js"),l={},d="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"atlas-server-entity-type"},"Atlas Server Entity Type"),Object(r.mdx)("h4",{id:"background"},"Background"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("em",{parentName:"p"},"AtlasServer")," entity type is special entity type in following ways:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Gets created during Export or Import operation."),Object(r.mdx)("li",{parentName:"ul"},"It also has special property pages that display detailed audits for export and import operations."),Object(r.mdx)("li",{parentName:"ul"},"Entities are linked to it using the new option within entity's attribute ",Object(r.mdx)("em",{parentName:"li"},Object(r.mdx)("a",Object.assign({parentName:"em"},{href:"#/SoftReference"}),"SoftReference")),".")),Object(r.mdx)("p",null,"The new type is available within the ",Object(r.mdx)("em",{parentName:"p"},"Search By Type")," dropdown in both ",Object(r.mdx)("em",{parentName:"p"},"Basic")," and ",Object(r.mdx)("em",{parentName:"p"},"Advanced")," search."),Object(r.mdx)("h4",{id:"creation"},"Creation"),Object(r.mdx)("p",null,"The entity of this type is created upon successful completion of every Export and Import operation. The entity is created with current cluster's name."),Object(r.mdx)("p",null,"The entity is also created based on export and import requests' ",Object(r.mdx)("em",{parentName:"p"},"replicatedTo")," and ",Object(r.mdx)("em",{parentName:"p"},"replicatedFrom")," parameters."),Object(r.mdx)("h4",{id:"details-within-property-page"},"Details within Property Page"),Object(r.mdx)("p",null,"The property page for ",Object(r.mdx)("em",{parentName:"p"},"AtlasServer")," entity has one additional tab 'Export/Import Audits'. This has detailed audit record for each export and/or import operation performed on current Atlas instance."),Object(r.mdx)("p",null,"The ",Object(r.mdx)("em",{parentName:"p"},"additionalInfo")," attribute property is discussed in detail below."),Object(r.mdx)(m.a,{src:"/images/markdown/atlas-server-properties.png",mdxType:"Img"}),Object(r.mdx)("h6",{id:"exportimport-audits"},"Export/Import Audits"),Object(r.mdx)("p",null,"The table has following columns:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Operation"),": EXPORT or IMPORT that denotes the operation performed on instance."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Source Server"),": For an export operation performed on this instance, the value in this column will always be the cluster name of the current Atlas instance. This is the value specified in ",Object(r.mdx)("em",{parentName:"li"},"atlas-application.properties")," by the key ",Object(r.mdx)("em",{parentName:"li"},"atlas.cluster.name"),". If not value is specified 'default' is used."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Target Server"),": If an export operation is performed with ",Object(r.mdx)("em",{parentName:"li"},"replicatedTo")," property specified in the request, that value appears here."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Operation StartTime"),": Time the operation was started."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Operation EndTIme"),": Time the operation completed."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("em",{parentName:"li"},"Tools"),": Pop-up property page that contains details of the operation.")),Object(r.mdx)(m.a,{src:"/images/markdown/atlas-server-exp-imp-audits.png",mdxType:"Img"}),Object(r.mdx)("h6",{id:"example"},"Example"),Object(r.mdx)("p",null,"The following export request will end up creating ",Object(r.mdx)("em",{parentName:"p"},"AtlasServer")," entity with ",Object(r.mdx)("em",{parentName:"p"},"clMain")," as its name. The audit record of this operation will be displayed within the property page of this entity."),Object(r.mdx)(s.a,{wrapLines:!0,language:"json",style:i.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n        { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "stocks@cl1" }}\n    ],\n    "options": {\n        "replicatedTo": "clMain"\n    }\n}'),Object(r.mdx)("h4",{id:"support-for-clusters-full-name"},"Support for Cluster's Full Name"),Object(r.mdx)("p",null,"Often times it is necessary to disambiguate the name of the cluster by specifying the location or the data center within which the Atlas instance resides."),Object(r.mdx)("p",null,"The name of the cluster can be specified by separating the location name and cluster name by '$'. For example, a clsuter name specified as 'SFO$cl1' can be a cluster in San Fancisco (SFO) data center with the name 'cl1'."),Object(r.mdx)("p",null,"The ",Object(r.mdx)("em",{parentName:"p"},"AtlasServer")," will handle this and set its name as 'cl1' and ",Object(r.mdx)("em",{parentName:"p"},"fullName")," as 'SFO@cl1'."),Object(r.mdx)("h4",{id:"additional-information"},"Additional Information"),Object(r.mdx)("p",null,"This property in ",Object(r.mdx)("em",{parentName:"p"},"AtlasServer")," is a map with key and value both as String. This can be used to store any information pertaining to this instance."),Object(r.mdx)("p",null,"Please see ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"#/IncrementalExport"}),"Incremental Export")," for and example of how this property can be used."),Object(r.mdx)("h4",{id:"rest-apis"},"REST APIs"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"th"},"Title")),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"th"},"Atlas Server API")))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Example"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"see below.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"URL"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"api/atlas/admin/server/{serverName}")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Method"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"GET")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"URL Parameters"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"name of the server")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Data Parameters"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"None")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Success Response"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"AtlasServer"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Error Response"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Errors Returned as AtlasBaseException")))),Object(r.mdx)("h6",{id:"curl"},"CURL"),Object(r.mdx)(s.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},'curl -X GET -u admin:admin -H "Content-Type: application/json" -H "Cache-Control:no-cache" http://localhost:21000/api/atlas/admin/server/cl2'),Object(r.mdx)("p",null,"Output:"),Object(r.mdx)(s.a,{wrapLines:!0,language:"json",style:i.a,mdxType:"SyntaxHighlighter"},'{\n    "guid": "f87e4fd1-bfb5-482d-9ab1-e735621b7d16",\n    "name": "cl2",\n    "qualifiedName": "cl2",\n    "additionalInfo": {\n        "nextModifiedTimestamp": "1533037289383",\n        "replicationOperation": "EXPORT",\n        "topLevelEntity": "stocks@cl1"\n    }\n}'))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Misc/AtlasServer.md"}}),c.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),r=(a("./theme/utils/theme.js"),a("./theme/styles/responsive.js"),a("./docz-lib/docz/dist/index.js"));t.a=e=>{const{src:t,width:a,height:i}=e,{baseUrl:s}=Object(r.useConfig)();return n.createElement("div",null,n.createElement("img",{src:`${s}${t}`,height:`${i||"auto"}`,width:`${a||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-misc-atlas-server.49a70ba37e0b2d9bb1bc.js.map