(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/documents/HighLevelArchitecture.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o=a("./theme/components/shared/Img/index.js"),i={},r="wrapper";function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(r,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"architecture"},"Architecture"),Object(s.mdx)("h2",{id:"introduction"},"Introduction"),Object(s.mdx)("h2",{id:"atlas-high-level-architecture---overview"},"Atlas High Level Architecture - Overview"),Object(s.mdx)(o.a,{src:"/images/twiki/architecture.png",width:"800",mdxType:"Img"}),Object(s.mdx)("p",null,"The components of Atlas can be grouped under the following major categories:"),Object(s.mdx)("h3",{id:"core"},"Core"),Object(s.mdx)("p",null,"Atlas core includes the following components:"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Type System"),": Atlas allows users to define a model for the metadata objects they want to manage. The model is composed\nof definitions called \u2018types\u2019. Instances of \u2018types\u2019 called \u2018entities\u2019 represent the actual metadata objects that are\nmanaged. The Type System is a component that allows users to define and manage the types and entities. All metadata\nobjects managed by Atlas out of the box (like Hive tables, for e.g.) are modelled using types and represented as\nentities. To store new types of metadata in Atlas, one needs to understand the concepts of the type system component."),Object(s.mdx)("p",null,"One key point to note is that the generic nature of the modelling in Atlas allows data stewards and integrators to\ndefine both technical metadata and business metadata. It is also possible to define rich relationships between the\ntwo using features of Atlas."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Graph Engine"),": Internally, Atlas persists metadata objects it manages using a Graph model. This approach provides great\nflexibility and enables efficient handling of rich relationships between the metadata objects. Graph engine component is\nresponsible for translating between types and entities of the Atlas type system, and the underlying graph persistence model.\nIn addition to managing the graph objects, the graph engine also creates the appropriate indices for the metadata\nobjects so that they can be searched efficiently. Atlas uses the JanusGraph to store the metadata objects."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Ingest / Export"),": The Ingest component allows metadata to be added to Atlas. Similarly, the Export component exposes\nmetadata changes detected by Atlas to be raised as events. Consumers can consume these change events to react to\nmetadata changes in real time."),Object(s.mdx)("h3",{id:"integration"},"Integration"),Object(s.mdx)("p",null,"Users can manage metadata in Atlas using two methods:"),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"API"),": All functionality of Atlas is exposed to end users via a REST API that allows types and entities to be created,\nupdated and deleted. It is also the primary mechanism to query and discover the types and entities managed by Atlas."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Messaging"),": In addition to the API, users can choose to integrate with Atlas using a messaging interface that is\nbased on Kafka. This is useful both for communicating metadata objects to Atlas, and also to consume metadata change\nevents from Atlas using which applications can be built. The messaging interface is particularly useful if one wishes\nto use a more loosely coupled integration with Atlas that could allow for better scalability, reliability etc. Atlas\nuses Apache Kafka as a notification server for communication between hooks and downstream consumers of metadata\nnotification events. Events are written by the hooks and Atlas to different Kafka topics."),Object(s.mdx)("h3",{id:"metadata-sources"},"Metadata sources"),Object(s.mdx)("p",null,"Atlas supports integration with many sources of metadata out of the box. More integrations will be added in future\nas well. Currently, Atlas supports ingesting and managing metadata from the following sources:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"#/HookHBase"}),"HBase")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"#/HookHive"}),"Hive")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"#/HookSqoop"}),"Sqoop")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"#/HookStorm"}),"Storm")),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"#/HookKafka"}),"Kafka"))),Object(s.mdx)("p",null,"The integration implies two things:\nThere are metadata models that Atlas defines natively to represent objects of these components.\nThere are components Atlas provides to ingest metadata objects from these components\n(in real time or in batch mode in some cases)."),Object(s.mdx)("h3",{id:"applications"},"Applications"),Object(s.mdx)("p",null,"The metadata managed by Atlas is consumed by a variety of applications for satisfying many governance use cases."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Atlas Admin UI"),": This component is a web based application that allows data stewards and scientists to discover\nand annotate metadata. Of primary importance here is a search interface and SQL like query language that can be\nused to query the metadata types and objects managed by Atlas. The Admin UI uses the REST API of Atlas for\nbuilding its functionality."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Tag Based Policies"),": ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"http://ranger.apache.org/"}),"Apache Ranger")," is an advanced security management solution\nfor the Hadoop ecosystem having wide integration with a variety of Hadoop components. By integrating with Atlas,\nRanger allows security administrators to define metadata driven security policies for effective governance.\nRanger is a consumer to the metadata change events notified by Atlas."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/HighLevelArchitecture.md"}}),d.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),s=(a("./theme/utils/theme.js"),a("./theme/styles/responsive.js"),a("./docz-lib/docz/dist/index.js"));t.a=e=>{const{src:t,width:a,height:o}=e,{baseUrl:i}=Object(s.useConfig)();return n.createElement("div",null,n.createElement("img",{src:`${i}${t}`,height:`${o||"auto"}`,width:`${a||"100%"}`}))}}}]);
//# sourceMappingURL=documents-high-level-architecture.1cc75c28407cd292bd9d.js.map