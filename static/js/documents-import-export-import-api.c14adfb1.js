(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/documents/Import-Export/ImportAPI.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),d=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l={},s="wrapper";function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(m.mdx)(s,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"import-api"},"Import API"),Object(m.mdx)("p",null,"The general approach is:"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Consumer makes a ZIP file available for import operation. See details below for the 2 flavors of the API."),Object(m.mdx)("li",{parentName:"ul"},"The API if successful, will return the results of the operation."),Object(m.mdx)("li",{parentName:"ul"},"Error will be returned on failure of the call.")),Object(m.mdx)("h3",{id:"import-zip-file-using-post"},"Import ZIP File Using POST"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"Title")),Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"Import API")))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Example")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"See Examples sections below.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Description")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Provide the contents of the file to be imported in the request body.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"URL")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"api/atlas/admin/import"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Method")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"POST"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"URL Parameters")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"None"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Data Parameters")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"None"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Success Response")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"!AtlasImporResult")," is returned as JSON. See details below.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Error Response")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Errors that are handled within the system will be returned as ",Object(m.mdx)("em",{parentName:"td"},"!AtlasBaseException"),".")))),Object(m.mdx)("h3",{id:"import-zip-file-available-on-server"},"Import ZIP File Available on Server"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"Title")),Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"Import API")))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Example")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"See Examples sections below.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Description")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Provide the path of the file to be imported.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"URL")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"api/atlas/admin/importfile"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Method")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"POST"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"URL Parameters")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"None"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Data Parameters")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"None"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Success Response")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"!AtlasImporResult")," is returned as JSON. See details below.")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Error Response")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Errors that are handled within the system will be returned as ",Object(m.mdx)("em",{parentName:"td"},"!AtlasBaseException"),".")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",{parentName:"td"},"Notes")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"The file to be imported needs to be present on the server at the location specified by the ",Object(m.mdx)("em",{parentName:"td"},"FILENAME")," parameter.")))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Method Signature for Import")),Object(m.mdx)(d.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'@POST\n@Path("/import")\n@Produces("application/json; charset=UTF-8")\n@Consumes("multipart/form-data")'),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Method Signature for Import File")),Object(m.mdx)(d.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'@POST\n@Path("/importfile")\n@Produces("application/json; charset=UTF-8")\n@Consumes("application/json")'),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Import Options"),"\nPlease see ",Object(m.mdx)("a",Object.assign({parentName:"p"},{href:"#/ImportAPIOptions"}),"here")," for the available options during import process."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"AtlasImportResult Response"),"\nThe API will return the results of the import operation in the format defined by the ",Object(m.mdx)("em",{parentName:"p"},"AtlasImportResult"),":"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("em",{parentName:"li"},"AtlasImportParameters"),": This contains a collection of name value pair of the options that are applied during the import operation."),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("em",{parentName:"li"},"Metrics"),": Operation metrics. These include details on the number of types imported, number of entities imported, etc."),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("em",{parentName:"li"},"Processed Entities"),": Contains list of GUIDs for the entities that were processed."),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("em",{parentName:"li"},"Operation Status"),": Overall status of the operation. Values are ",Object(m.mdx)("em",{parentName:"li"},"SUCCESS"),", PARTIAL",Object(m.mdx)("em",{parentName:"li"},"SUCCESS, _FAIL"),".")),Object(m.mdx)("h3",{id:"examples-using-curl-calls"},"Examples Using CURL Calls"),Object(m.mdx)("p",null,"The call below performs Import of ",Object(m.mdx)("em",{parentName:"p"},"!QuickStart")," database using POST."),Object(m.mdx)(d.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: multipart/form-data"\n            -H "Cache-Control: no-cache"\n            -F request=@importOptions.json\n            -F data=@quickStartDB.zip\n            "http://localhost:21000/api/atlas/admin/import"'),Object(m.mdx)("p",null,"The ",Object(m.mdx)("em",{parentName:"p"},"request")," parameter is optional. If import has to be run without any options use:"),Object(m.mdx)(d.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: multipart/form-data"\n            -H "Cache-Control: no-cache"\n            -F data=@quickStartDB.zip\n            "http://localhost:21000/api/atlas/admin/import"'),Object(m.mdx)("p",null,"The call below performs Import of ",Object(m.mdx)("em",{parentName:"p"},"QuickStart")," database using a ZIP file available on server."),Object(m.mdx)(d.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'curl -X POST -u adminuser:password -H "Cache-Control: no-cache" -d ./importOptions.json\n"http://localhost:21000/api/atlas/admin/importFile" > quickStartDB-import-result.json'),Object(m.mdx)("p",null,"Below is the ",Object(m.mdx)("em",{parentName:"p"},"AtlasImportResult")," JSON for an import that contains ",Object(m.mdx)("em",{parentName:"p"},"hive_db"),"."),Object(m.mdx)("p",null,"The ",Object(m.mdx)("em",{parentName:"p"},"processedEntities")," contains the ",Object(m.mdx)("em",{parentName:"p"},"guids")," of all the entities imported."),Object(m.mdx)("p",null,"The ",Object(m.mdx)("em",{parentName:"p"},"metrics")," contain a breakdown of the types and entities imported along with the operation performed on them viz. ",Object(m.mdx)("em",{parentName:"p"},"created")," or ",Object(m.mdx)("em",{parentName:"p"},"updated"),"."),Object(m.mdx)(d.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "request": {\n        "options": {}\n    },\n    "userName": "admin",\n    "clientIpAddress": "10.0.2.2",\n    "hostName": "10.0.2.15",\n    "timeStamp": 1491285622823,\n    "metrics": {\n        "duration": 9143,\n        "typedef:enum": 0,\n        "typedef:struct": 0,\n        "entity:hive_column:created": 461,\n        "entity:hive_storagedesc:created": 20,\n        "entity:hive_process:created": 12,\n        "entity:hive_db:created": 5,\n        "entity:hive_table:created": 20,\n        "entity:hdfs_path:created": 2,\n        "typedef:entitydef": 0,\n        "typedef:classification": 3\n    },\n    "processedEntities": [\n        "2c4aa713-030b-4fb3-98b1-1cab23d9ac81",\n        "e4aa71ed-70fd-4fa7-9dfb-8250a573e293",\n       ...\n        "ea0f9bdb-1dfc-4e48-9848-a006129929f9",\n        "b5e2cb41-3e7d-4468-84e1-d87c320e75f9"\n    ],\n    "operationStatus": "SUCCESS"\n}'))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ImportAPI.md"}}),i.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-import-api.49a70ba37e0b2d9bb1bc.js.map