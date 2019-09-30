(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/documents/Project-Info/TeamList.md":function(e,t,o){"use strict";o.r(t);var a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),r=o.n(n),s=o("./node_modules/@mdx-js/react/dist/index.es.js"),l=o("./node_modules/axios/index.js"),i=o.n(l),c=o("./node_modules/xml2js/lib/xml2js.js");const d=o("./node_modules/styled-components/dist/styled-components.browser.esm.js").d.div`
  > table {
    font-family: "Inconsolata", monospace;
    font-size: 14px;
    display: table;
    table-layout: auto;
    color: #13161f;
    width: 100%;
    padding: 0;
    box-shadow: 0 0 0 1px #529d8b;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    border-style: hidden;
    border-radius: 2px;
    overflow-y: hidden;
    overflow-x: initial;
  }
  > table tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  > table tr > td {
    padding: 15px;
    line-height: 2;
    font-weight: 200;
  }
  > table > thead {
    color: #7d899c;
    background: #f5f6f7;
  }
  > table > tbody tr {
    display: table-row;
    border-top: 1px solid #529d8b;
  }
  > table > thead > tr > th {
    font-weight: 400;
    padding: 15px;
  }
`;class m extends n.Component{constructor(e){super(e),this.state={isLoading:!0,displayData:[]},this.fetchData()}fetchData(){i.a.get("https://raw.githubusercontent.com/apache/atlas/master/pom.xml").then(e=>{Object(c.parseString)(e.data,(e,t)=>{const o=t.project.developers[0].developer,a=o.length;let n=[];const r=Object.keys(o[0]);for(var s=0;s<a;s++){const e={};r.map(t=>e[t]=o[s][t]),n.push(e)}this.setState({displayData:n,isLoading:!1})})}).catch(e=>{console.log("fetching data from pom.xml is failed.")})}render(){const{displayData:e,isLoading:t}=this.state;return r.a.createElement(d,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Organization"),r.a.createElement("th",null,"Roles"),r.a.createElement("th",null,"Time Zone"))),r.a.createElement("tbody",null,t?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},"loading...")):0===e.length?"Not found":e.map((e,t)=>r.a.createElement("tr",{key:e.id.toString()},r.a.createElement("td",null,e.id.toString()),r.a.createElement("td",null,e.name.toString()),r.a.createElement("td",null,e.email.toString()),r.a.createElement("td",null,e.organization.toString()),r.a.createElement("td",null,e.roles.map(e=>e.role.toString())),r.a.createElement("td",null,e.timezone.toString()))))))}}o.d(t,"default",function(){return h});var u={},p="wrapper";function h(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.mdx)(p,Object.assign({},u,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"the-team"},"The Team"),Object(s.mdx)("h4",{id:"a-successful-project-requires-many-people-to-play-many-roles-some-members-write-code-or-documentation-while-others-are-valuable-as-testers-submitting-patches-and-suggestions"},"A successful project requires many people to play many roles. Some members write code or documentation, while others are valuable as testers, submitting patches and suggestions."),Object(s.mdx)("h4",{id:"the-team-is-comprised-of-members-and-contributors-members-have-direct-access-to-the-source-of-a-project-and-actively-evolve-the-code-base-contributors-improve-the-project-through-submission-of-patches-and-suggestions-to-the-members-the-number-of-contributors-to-the-project-is-unbounded-get-involved-today-all-contributions-to-the-project-are-greatly-appreciated"},"The team is comprised of Members and Contributors. Members have direct access to the source of a project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. Get involved today. All contributions to the project are greatly appreciated."),Object(s.mdx)("h2",{id:"members"},"Members"),Object(s.mdx)("h4",{id:"the-following-is-a-list-of-developers-with-commit-privileges-that-have-directly-contributed-to-the-project-in-one-way-or-another"},"The following is a list of developers with commit privileges that have directly contributed to the project in one way or another."),Object(s.mdx)(m,{mdxType:"TeamList"}))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Project-Info/TeamList.md"}}),h.isMDXComponent=!0},1:function(e,t){},2:function(e,t){}}]);
//# sourceMappingURL=documents-project-info-team-list.1cc75c28407cd292bd9d.js.map