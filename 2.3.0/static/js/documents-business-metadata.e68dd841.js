(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/documents/BusinessMetadata.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var s=a("../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("../node_modules/react/index.js"),a("../node_modules/@mdx-js/react/dist/esm.js")),n=a("./theme/components/shared/Img/index.js"),d=(a("./theme/styles/styled-colors.js"),["components"]),r={};function o(e){var t=e.components,a=Object(s.a)(e,d);return Object(i.mdx)("wrapper",Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"business-metadata"},"Business Metadata"),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"Atlas typesystem allows users to define a model and create entities for the metadata objects they want to manage.\nTypically, the model captures technical attributes - like name, description, create time, number of replicas, etc.; and\nmetadata objects are created and updated by processes that monitor the real objects. It is often necessary to\naugment technical attributes with additional attributes to capture business details that can help organize, search and\nmanage metadata entities. For example, a steward from marketing department can define set of attributes for a campaign,\nand add these attributes to relevant metadata objects."),Object(i.mdx)("h2",{id:"create-business-metadata"},"Create Business Metadata"),Object(i.mdx)("p",null,"Business Metadata is a type supported by Atlas typesystem - similar to entity, enum, struct, classification types. A\nbusiness metadata type can have attributes of primitive type - similar to a struct type. In addition, each business\nmetadata attribute can be associated with a number of entity-types, like hive_db/hive_table/hbase_table."),Object(i.mdx)(n.a,{src:"/images/twiki/bm-create-01.png",mdxType:"Img"}),Object(i.mdx)(n.a,{src:"/images/twiki/bm-create-02.png",mdxType:"Img"}),Object(i.mdx)("h2",{id:"add-business-attributes-on-entity-instances"},"Add business attributes on entity instances"),Object(i.mdx)("p",null,"Once a business metadata attribute is associated with an entity-type, Apache Atlas allows values to be assigned to\nentities - via UI and REST APIs."),Object(i.mdx)(n.a,{src:"/images/twiki/bm-entity-association.png",mdxType:"Img"}),Object(i.mdx)("h2",{id:"search-for-entities-using-business-attributes"},"Search for entities using business attributes"),Object(i.mdx)("p",null,"Apache Atlas enables finding entities based on values assigned to business attributes - via UI and REST APIs."),Object(i.mdx)(n.a,{src:"/images/twiki/bm-search-01.png",mdxType:"Img"}),Object(i.mdx)(n.a,{src:"/images/twiki/bm-search-02.png",mdxType:"Img"}),Object(i.mdx)("h2",{id:"authorizations"},"Authorizations"),Object(i.mdx)("p",null,"Apache Atlas authorization has been updated to enable control on who can create business-metadata, and update business\nattributes on entities. Apache Ranger authorization plugin has been updated to support policies for the same."),Object(i.mdx)(n.a,{src:"/images/twiki/bm-ranger-policies.png",mdxType:"Img"}),Object(i.mdx)("h2",{id:"rest-apis"},"REST APIs"),Object(i.mdx)("p",null,"Apache Atlas supports REST APIs to create and update business metadata, add/update business attributes on entities and\nfind entities based on business entity attributes. Please refer to REST API documentation for more details."))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/BusinessMetadata.md"}}),o.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var s=a("../node_modules/react/index.js"),i=a("./docz-lib/docz/dist/index.js");t.a=e=>{const{src:t,width:a,height:n}=e,{baseUrl:d}=Object(i.useConfig)();return s.createElement("div",null,s.createElement("img",{style:{boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",WebkitBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",MozBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"},src:`${d}${t}`,height:""+(n||"auto"),width:""+(a||"100%")}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var s=a("../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");s.a.hljs.color="#37bb9b",t.a=s.a}}]);
//# sourceMappingURL=documents-business-metadata.b185f4c5b68d73002af0.js.map