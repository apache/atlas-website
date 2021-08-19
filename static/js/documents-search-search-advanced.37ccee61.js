(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/documents/Search/SearchAdvanced.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("../node_modules/react/index.js"),a("../node_modules/@mdx-js/react/dist/esm.js")),l=(a("./theme/styles/styled-colors.js"),a("../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),r=a("../node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),m=["components"],s={};function d(e){var t=e.components,a=Object(n.a)(e,m);return Object(i.mdx)("wrapper",Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"advanced-search"},"Advanced Search"),Object(i.mdx)("h3",{id:"background"},Object(i.mdx)("strong",{parentName:"h3"},"Background")),Object(i.mdx)("p",null,"Advanced Search in Atlas is also referred to as DSL-based Search."),Object(i.mdx)("p",null,"Domain Specific Search (DSL) is a language with simple constructs that help users navigate Atlas data repository. The syntax loosely emulates the popular Structured Query Language (SQL) from relation database world."),Object(i.mdx)("p",null,"Benefits of DSL:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Abstracts the implementation-level database constructs. This avoids the necessity of knowing about the underlying graph database constructs."),Object(i.mdx)("li",{parentName:"ul"},"User are provided with an abstraction that helps them retrieve the data by just being aware of the types and their relationships within their dataset."),Object(i.mdx)("li",{parentName:"ul"},"Allows for a way to specify the desired output."),Object(i.mdx)("li",{parentName:"ul"},"Use of classifications is accounted for in the syntax."),Object(i.mdx)("li",{parentName:"ul"},"Provides way to group and aggregate results.")),Object(i.mdx)("p",null,"We will be using the quick start dataset in the examples that follow. This dataset is comprehensive enough to be used to to demonstrate the various features of the language."),Object(i.mdx)("p",null,"For details on the grammar, please refer to Atlas DSL Grammer on ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/apache/atlas/blob/master/repository/src/main/java/org/apache/atlas/query/antlr4/AtlasDSLParser.g4"},"Github")," (Antlr G4 format)."),Object(i.mdx)("h2",{id:"using-advanced-search"},"Using Advanced Search"),Object(i.mdx)("p",null,"Within the Atlas UI, select Advanced in the Search pane on the left."),Object(i.mdx)("p",null,"Notice that the ",Object(i.mdx)("em",{parentName:"p"},"Favorite Searches")," pane below the ",Object(i.mdx)("em",{parentName:"p"},"Search By Query")," box. Like ",Object(i.mdx)("em",{parentName:"p"},"Basic Search"),", it is possible to save the ",Object(i.mdx)("em",{parentName:"p"},"Advanced Searches")," as well."),Object(i.mdx)("h2",{id:"introduction-to-domain-specific-language"},"Introduction to Domain Specific Language"),Object(i.mdx)("p",null,"DSL uses the familiar SQL-like syntax."),Object(i.mdx)("p",null,"At a high-level a query has a ",Object(i.mdx)("em",{parentName:"p"},"from-where-select")," format. Additional keywords like ",Object(i.mdx)("em",{parentName:"p"},"grouby"),", ",Object(i.mdx)("em",{parentName:"p"},"orderby"),", ",Object(i.mdx)("em",{parentName:"p"},"limit")," can be used to added to affect the output. We will see examples of these below."),Object(i.mdx)("h3",{id:"from-clause"},"From Clause"),Object(i.mdx)("p",null,"Specifying the ",Object(i.mdx)("em",{parentName:"p"},"from")," clause is mandatory. Using the ",Object(i.mdx)("em",{parentName:"p"},"from")," keyword itself is optional. The value specified in the ",Object(i.mdx)("em",{parentName:"p"},"from")," clause acts as the source or starting point for the rest of the query to source its inputs."),Object(i.mdx)("p",null,"Example: To retrieve all entities of type ",Object(i.mdx)("em",{parentName:"p"},"DB"),":"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"DB\nfrom DB"),Object(i.mdx)("p",null,"In the absence of ",Object(i.mdx)("em",{parentName:"p"},"where")," for filtering on the source, the dataset fetched by the ",Object(i.mdx)("em",{parentName:"p"},"from")," clause is everything from the database. Based on the size of the data present in the database, there is a potential to overwhelm the server. The query processor thus adds ",Object(i.mdx)("em",{parentName:"p"},"limit")," clause with a default value set. See the section on ",Object(i.mdx)("em",{parentName:"p"},"limit")," clause for details."),Object(i.mdx)("h3",{id:"where-clause"},"Where Clause"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"where")," clause allows for filtering over the dataset. This achieved by using conditions within the where clause."),Object(i.mdx)("p",null,"A conditions is identifier followed by an operator followed by a literal. Literal must be enclosed in single or double quotes. Example, ",Object(i.mdx)("em",{parentName:"p"},'name = "Sales"'),". An identifier can be name of the property of the type specified in the ",Object(i.mdx)("em",{parentName:"p"},"from")," clause or an alias."),Object(i.mdx)("p",null,"Example: To retrieve entity of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," with a specific name say time_dim:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'time_dim'"),Object(i.mdx)("p",null,"It is possible to specify multiple conditions by combining them using ",Object(i.mdx)("em",{parentName:"p"},"and"),", ",Object(i.mdx)("em",{parentName:"p"},"or")," operators."),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table with name that can be either time_dim or customer_dim:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'time_dim' or name = 'customer_dim'"),Object(i.mdx)("p",null,"Filtering based on a list of values is done using by specifying the values in the square brackets. A value array is a list of values enclosed within square brackets. This is a simple way to specify an OR clause on an identifier."),Object(i.mdx)("p",null,"Note that having several OR clauses on the same attribute may be inefficient. Alternate way is to use the value array as shown in the example below."),Object(i.mdx)("p",null,"Example: The query in the example above can be written using a value array as shown below."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},'from Table where name = ["customer_dim", "time_dim"]'),Object(i.mdx)("p",null,"A condition that uses the LIKE operator, allows for filtering using wildcards like '*' or '?'.\nExample: To retrieve entity of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," whose name ends with '_dim':"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where name LIKE '*_dim'"),Object(i.mdx)("p",null,"Additional forms of regular expressions can also be used."),Object(i.mdx)("p",null,"Example: To retrieve ",Object(i.mdx)("em",{parentName:"p"},"DB")," whose name starts with ",Object(i.mdx)("em",{parentName:"p"},"R")," followed by has any 3 characters, followed by ",Object(i.mdx)("em",{parentName:"p"},"rt")," followed by at least 1 character, followed by none or any number of characters."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'DB where name like "R???rt?*"'),Object(i.mdx)("p",null,"Example: To find all the columns in a Table."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Column where table.name="sales_fact"'),Object(i.mdx)("p",null,"Example: To find all the Tables for a column."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table where columns.name="sales"'),Object(i.mdx)("p",null,"Example: To retrieve all the entities of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," that are tagged with ",Object(i.mdx)("em",{parentName:"p"},"Dimension")," classification and its attribute ",Object(i.mdx)("em",{parentName:"p"},"priority")," having 'high'"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},'Table where Dimension.priority = "high"'),Object(i.mdx)("h3",{id:"using-date-literals"},"Using Date Literals"),Object(i.mdx)("p",null,"Dates used in literals need to be specified using the ISO 8601 format."),Object(i.mdx)("p",null,"Dates in this format follow this notation:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"yyyy-MM-ddTHH:mm:ss.SSSZ"),". Which means, year-month-day followed by time in hour-minutes-seconds-milli-seconds. Date and time need to be separated by 'T'. It should end with 'Z'."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"yyyy-MM-dd"),". Which means, year-month-day.")),Object(i.mdx)("p",null,"Example: Date represents December 11, 2017 at 2:35 AM."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"2017-12-11T02:35:0.0Z"),Object(i.mdx)("p",null,"Example: To retrieve entity of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," created within 2017 and 2018."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where createTime < '2018-01-01' and createTime > '2017-01-01'"),Object(i.mdx)("h4",{id:"using-boolean-literals"},"Using Boolean Literals"),Object(i.mdx)("p",null,"Properties of entities of type boolean can be used within queries."),Object(i.mdx)("p",null,"Eample: To retrieve entity of type hdfs",Object(i.mdx)("em",{parentName:"p"},"path whose attribute _isFile")," is set to ",Object(i.mdx)("em",{parentName:"p"},"true")," and whose name is ",Object(i.mdx)("em",{parentName:"p"},"Invoice"),"."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},'from hdfs_path where isFile = true or name = "Invoice"'),Object(i.mdx)("p",null,"Valid values for boolean literals are 'true' and 'false'."),Object(i.mdx)("h3",{id:"existence-of-a-property"},"Existence of a Property"),Object(i.mdx)("p",null,"The has keyword can be used with or without the where clause. It is used to check existence of a property in an entity."),Object(i.mdx)("p",null,"Example: To retreive entity of type Table with a property locationUri."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table has locationUri\nfrom Table where Table has locationUri"),Object(i.mdx)("h3",{id:"select-clause"},"Select Clause"),Object(i.mdx)("p",null,"If you noticed the output displayed on the web page, it displays a tabular display, each row corresponding to an entity and columns are properties of that entity. The select clause allows for choosing the properties of entity that are of interest."),Object(i.mdx)("p",null,"Example: To retrieve entity of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," with few properties:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table select owner, name, qualifiedName"),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table for a specific table with some properties."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'customer_dim' select owner, name, qualifiedName"),Object(i.mdx)("p",null,"To display column headers that are more meaningful, aliases can be added using the 'as' clause."),Object(i.mdx)("p",null,"Example: To display column headers as 'Owner', 'Name' and 'FullName'."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"from Table select owner as Owner, name as Name, qualifiedName as FullName"),Object(i.mdx)("h4",{id:"note-about-select-clauses"},"Note About Select Clauses"),Object(i.mdx)("p",null,"Given the complexity involved in using select clauses, these are the few rules to remember when using select clauses:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Works with all immediate attributes."),Object(i.mdx)("li",{parentName:"ul"},"Works with Immediate attributes and aggregation on immediate attributes."),Object(i.mdx)("li",{parentName:"ul"},"Referred attributes cannot be mixed with immediate attributes.")),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table with name 'Sales' and display 'name' and 'owner' attribute of the referred entity DB."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"Table where name = 'abcd' select DB.name, DB.owner"),Object(i.mdx)("p",null,"Current implementation does not allow the following:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table where name = 'abcd' select DB.name, Table.name"),Object(i.mdx)("h3",{id:"classification-based-filtering"},"Classification-based Filtering"),Object(i.mdx)("p",null,"In order to retrieve entities based on classification, a query would use ",Object(i.mdx)("em",{parentName:"p"},"is")," or ",Object(i.mdx)("em",{parentName:"p"},"isa")," keywords."),Object(i.mdx)("p",null,"Example: To retrieve all entities of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," that are tagged with ",Object(i.mdx)("em",{parentName:"p"},"Dimension")," classification."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"from Table isa Dimension"),Object(i.mdx)("p",null,"Since, from is optional and ",Object(i.mdx)("em",{parentName:"p"},"is")," (or ",Object(i.mdx)("em",{parentName:"p"},"isa"),") are equivalent, the following queries yield the same results:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table is Dimension"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"is")," and ",Object(i.mdx)("em",{parentName:"p"},"isa")," clauses can also be used in ",Object(i.mdx)("em",{parentName:"p"},"where")," condition like:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"from Table where Table isa Dimension"),Object(i.mdx)("p",null,"To search for all entities having a particular classification, simply use the name of the classification."),Object(i.mdx)("p",null,"Example: To retrieve all entities that have ",Object(i.mdx)("em",{parentName:"p"},"Dimension")," classification."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"Dimension"),Object(i.mdx)("p",null,"To search for all entities having a particular classification with its attribute, add filter in where clause."),Object(i.mdx)("p",null,"Example: To retrieve all the entities that are tagged with ",Object(i.mdx)("em",{parentName:"p"},"Dimension")," classification and its attribute ",Object(i.mdx)("em",{parentName:"p"},"priority")," having 'high'"),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},'Dimension where Dimension.priority = "high"'),Object(i.mdx)("p",null,"###Non Primitive attribute Filtering\nIn the discussion so far we looked at where clauses with primitive types. This section will look at using properties that are non-primitive types."),Object(i.mdx)("h4",{id:"relationship-based-filtering"},"Relationship-based filtering"),Object(i.mdx)("p",null,"In this model, the DB is modeled such that it is aware of all the Table it contains. Table on the other hand is aware of existence of the DB but is not aware of all the other ",Object(i.mdx)("em",{parentName:"p"},"Table")," instances within the system. Each Table maintains reference of the ",Object(i.mdx)("em",{parentName:"p"},"DB")," it belongs to."),Object(i.mdx)("p",null,"Similar structure exists within the ",Object(i.mdx)("em",{parentName:"p"},"hive")," data model."),Object(i.mdx)("p",null,"Example: To retrieve all the instances of the ",Object(i.mdx)("em",{parentName:"p"},"Table")," belonging to a database named 'Sales':"),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table where db.name = "Sales"'),Object(i.mdx)("p",null,"Example: To retrieve all the instances of the ",Object(i.mdx)("em",{parentName:"p"},"Table")," belonging to a database named 'Sales' and whose column name starts with 'customer':"),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table where db.name = "Sales" and columns.name like "customer*"'),Object(i.mdx)("p",null,"The entity Column is modeled in a similar way. Each Table entity has outward edges pointing to Column entity instances corresponding to each column within the table."),Object(i.mdx)("p",null,"Example: To retrieve all the Column entities for a given Table."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table where name = "time_dim" select columns'),Object(i.mdx)("p",null,"The properties of each ",Object(i.mdx)("em",{parentName:"p"},"Column")," entity type are displayed."),Object(i.mdx)("h4",{id:"glossary-term-based-filtering"},"Glossary Term-based Filtering"),Object(i.mdx)("p",null,"In order to retrieve entities based on glossary term, a query would use ",Object(i.mdx)("em",{parentName:"p"},"hasTerm")," keyword."),Object(i.mdx)("p",null,"To search for entities having a particular glossary term, user needs to add a fully qualified name. i.e ",Object(i.mdx)("em",{parentName:"p"},"{termName}@{glossaryName}"),". In case the user adds only the term name, all the entities with particular term name will be returned, irrespective of which glossary it is in."),Object(i.mdx)("p",null,"Example: To retrieve all entities of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," having glossary term ",Object(i.mdx)("em",{parentName:"p"},"savingsAccount@Banking"),", below are the possible ways."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'from Table hasTerm "savingsAccount@Banking"\nTable hasTerm "savingsAccount@Banking"\nTable hasTerm "savingsAccount"\nTable where Table hasTerm "savingsAccount@Banking"'),Object(i.mdx)("p",null,"Example: To retrieve all entities of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," having glossary term ",Object(i.mdx)("em",{parentName:"p"},"savingsAccount@Banking")," and whose name is 'customer'."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'from Table hasTerm "savingsAccount@Banking" and name = "customer"'),Object(i.mdx)("p",null,"Example: To retrieve all entities of type ",Object(i.mdx)("em",{parentName:"p"},"Table")," having glossary term ",Object(i.mdx)("em",{parentName:"p"},"savingsAccount@Banking")," or tagged with 'Dimension' classification and whose column name starts with 'customer'."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'from Table hasTerm "savingsAccount@Banking" or Table isA Dimension and (columns.name like "customer*")'),Object(i.mdx)("h3",{id:"limit--offset-clauses"},"Limit & Offset Clauses"),Object(i.mdx)("p",null,"Often a query yields large number of results. To limit the outcome of the query, the limit and offset clauses are used."),Object(i.mdx)("p",null,"Example: To retrieve only the 5 entities from a result set."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"Column limit 5"),Object(i.mdx)("p",null,"The offset clauses retrieves results after the offset value."),Object(i.mdx)("p",null,"Example: To retrieve only 5 entities from the result set after skipping the first 10."),Object(i.mdx)(r.a,{wrapLines:!0,language:"sql",style:l.a,mdxType:"SyntaxHighlighter"},"Column limit 5 offset 10"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"limit")," and ",Object(i.mdx)("em",{parentName:"p"},"offset")," clauses are usually specified in conjunction."),Object(i.mdx)("p",null,"If no limit clause is specified in the query, a limit clause with a default limit (usually 100) is added to the query. This prevents the query from inadvertently fetching large number of results."),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"offset")," clause is useful for displaying results in a user interface where few results from the result set are showing and more results are fetched as the user advances to next page."),Object(i.mdx)("h3",{id:"ordering-results"},"Ordering Results"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"orderby")," clause allows for sorting of results. Results are sorted in ascending order by default. Only immediate attributes can be used within this clause."),Object(i.mdx)("p",null,"Ordering can be changed by using:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"ASC Sort in ascending order. This is the default. If no ordering is specified after the ",Object(i.mdx)("em",{parentName:"li"},"orderby")," clause."),Object(i.mdx)("li",{parentName:"ul"},"DESC Sort in descending order. This needs to be explicitly specified after the ",Object(i.mdx)("em",{parentName:"li"},"orderby")," clause.")),Object(i.mdx)("p",null,"Example: To retrieve the entities of type ",Object(i.mdx)("em",{parentName:"p"},"Column")," that are sorted in ascending order using the name property."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"from Column orderby name\nfrom Column orderby name asc"),Object(i.mdx)("p",null,"Example: Same results as above except that they are sorted in descending order."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"from Column orderby name desc"),Object(i.mdx)("p",null,"Example: To retrieve the entities of type ",Object(i.mdx)("em",{parentName:"p"},"Column")," filtered with name and associated with 'savingsAccount@Banking' glossary term, that are sorted in ascending order using the name property."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'from Column hasTerm "savingsAccount@Banking" and name = "customer_id" orderby name asc'),Object(i.mdx)("h3",{id:"aggregate-functions"},"Aggregate Functions"),Object(i.mdx)("p",null,"Let's look at aggregate functions:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"sum"),": Adds (sums up) a value of the property specified, within the result set."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"min"),": Finds the minimum value of the property specified, within a result set."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"max"),": Finds the maximum value of the property specified, within a result set."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"count"),": Finds the number of items specified by the group by clause.")),Object(i.mdx)("p",null,"These work only on immediate attributes."),Object(i.mdx)("p",null,"Other examples of these in the ",Object(i.mdx)("em",{parentName:"p"},"Grouping Results")," section."),Object(i.mdx)("h3",{id:"the-count-keyword"},"The count Keyword"),Object(i.mdx)("p",null,"Shows the number of items in a result set."),Object(i.mdx)("p",null,"Example: To know how may entities of a type Column."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Column select count()"),"Example: Same as above with alias.",Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Column select count() as Cols"),Object(i.mdx)("p",null,"Example: To find the number of tables in a database."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table where db.name = "Reporting" select count()'),Object(i.mdx)("p",null,"Example: To find the number of terms associated with particular type 'Table'."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Table hasTerm "savingsAccount@Banking" select count() as terms'),Object(i.mdx)("h3",{id:"the-max-keyword"},"The max Keyword"),Object(i.mdx)("p",null,"Using this keyword it is possible to retrieve the maximum value of a property for an entity."),Object(i.mdx)("p",null,"Example: Get the most recently created value of the ",Object(i.mdx)("em",{parentName:"p"},"createTime")," property of the Table entity."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table select max(createTime)"),Object(i.mdx)("h3",{id:"the-min-keyword"},"The min Keyword"),Object(i.mdx)("p",null,"Using this keyword it is possible to retrieve the minimum value of a property for an entity."),Object(i.mdx)("p",null,"Example: Get the least recently created value of the ",Object(i.mdx)("em",{parentName:"p"},"createTime")," property of the Table entity."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table select min(createTime)"),Object(i.mdx)("h3",{id:"grouping-results"},"Grouping Results"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"groupby")," clause groups results within the result using specified property."),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table such that tables belonging to an owner are together (grouped by owner)."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table groupby(owner)"),Object(i.mdx)("p",null,"While ",Object(i.mdx)("em",{parentName:"p"},"groupby")," can work without ",Object(i.mdx)("em",{parentName:"p"},"select"),", if aggregate functions are used within ",Object(i.mdx)("em",{parentName:"p"},"select")," clause, using ",Object(i.mdx)("em",{parentName:"p"},"groupby")," clause becomes mandatory as aggregate functions operate on a group."),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table such we know the most recently created entity."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table groupby(createTime) select owner, name, max(createTime)"),Object(i.mdx)("p",null,"Example: To retrieve entity of type Table such we know the oldest entity."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table groupby(createTime) select owner, name, min(createTime)"),Object(i.mdx)("p",null,"Example: To know the number of entities owned by each owner."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table groupby(owner) select owner, count()"),Object(i.mdx)("h3",{id:"using-system-attributes"},"Using System Attributes"),Object(i.mdx)("p",null,"Each type defined within Atlas gets few attributes by default. These attributes help with internal book keeping of the entities. All the system attributes are prefixed with '__' (double underscore). This helps in identifying them from other attributes.\nFollowing are the system attributes:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"__guid Each entity within Atlas is assigned a globally unique identifier (GUID for short)."),Object(i.mdx)("li",{parentName:"ul"},"__modifiedBy Name of the user who last modified the entity."),Object(i.mdx)("li",{parentName:"ul"},"__createdBy Name of the user who created the entity."),Object(i.mdx)("li",{parentName:"ul"},"__state Current state of the entity. Please see below for details."),Object(i.mdx)("li",{parentName:"ul"},"__timestamp Timestamp (date represented as integer) of the entity at the time of creation."),Object(i.mdx)("li",{parentName:"ul"},"__modificationTimestamp Timestamp (date represented as integer) of the entity at the time of last modification.")),Object(i.mdx)("h3",{id:"state-of-an-entity"},"State of an Entity"),Object(i.mdx)("p",null,"Entity within Atlas can be in the following states:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"ACTIVE This is the state of entities that when it is available and is used within the system. It can be retrieved by default by searches."),Object(i.mdx)("li",{parentName:"ul"},"DELETED When an entity is deleted, it's state is marked as DELETED. Entity in this state does not show up in search results. Explicit request needs to be made to retrieve this entity.")),Object(i.mdx)("h3",{id:"using-system-attributes-in-queries"},"Using System Attributes in Queries"),Object(i.mdx)("p",null,"Example: To retrieve all entities that are deleted."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'Asset where __state = "DELETED"'),Object(i.mdx)("p",null,"Example: To retrieve entity GUIDs."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"Table select __guid"),Object(i.mdx)("p",null,"Example: To retrieve several system attributes."),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},"hive_db select __timestamp, __modificationTimestamp, __state, __createdBy"),Object(i.mdx)("h2",{id:"advanced-search-rest-api"},"Advanced Search REST API"),Object(i.mdx)("p",null,"Relevant models for these operations:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},Object(i.mdx)("a",{parentName:"em",href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/model/discovery/AtlasSearchResult.java"},"AtlasSearchResult"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},Object(i.mdx)("a",{parentName:"em",href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/exception/AtlasBaseException.java"},"AtlasBaseException")))),Object(i.mdx)("h3",{id:"the-v2-api"},"The V2 API"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Get Results using DSL Search")),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"center"},Object(i.mdx)("strong",{parentName:"th"},Object(i.mdx)("em",{parentName:"strong"},"Example"))),Object(i.mdx)("th",{parentName:"tr",align:"center"},Object(i.mdx)("strong",{parentName:"th"},"See Examples sections below.")))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"URL")),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"api/atlas/v2/search/dsl"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"Method")),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"GET"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"URL Parameters")),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"query"),": Query conforming to DSL syntax.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"typeName"),": Type name of the entity to be retrived.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"classification"),": Classification associated with the type or query.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"limit"),": Maximum number of items in the result set.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"offset"),": Starting index of the item in the result set.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"Data Parameters")),Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"None"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"Success Response")),Object(i.mdx)("td",{parentName:"tr",align:"center"},"The JSON will correspond to ",Object(i.mdx)("a",{parentName:"td",href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/model/discovery/AtlasSearchResult.java"},"AtlasSearchResult"),".")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"Error Response")),Object(i.mdx)("td",{parentName:"tr",align:"center"},"Errors that are handled within the system will be returned as ",Object(i.mdx)("a",{parentName:"td",href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/exception/AtlasBaseException.java"},"AtlasBaseException"),".")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"},Object(i.mdx)("em",{parentName:"td"},"Method Signature")),Object(i.mdx)("td",{parentName:"tr",align:"center"},"@GET")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},'@Path("/dsl")')),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},"@Consumes(Servlets.JSON_MEDIA_TYPE)")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"center"}),Object(i.mdx)("td",{parentName:"tr",align:"center"},"@Produces(Servlets.JSON_MEDIA_TYPE)")))),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Examples")),Object(i.mdx)(r.a,{wrapLines:!0,language:"html",style:l.a,mdxType:"SyntaxHighlighter"},'curl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Table"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Column&classification=PII"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Table&classification=Dimension&limit=10&offset=2"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?query=Table%20isa%20Dimension"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?query=Table%20isa%20Dimension&limit=5&offset=2"'),Object(i.mdx)("h2",{id:"implementation-approach"},"Implementation Approach"),Object(i.mdx)("p",null,"The general approach followed in implementation of DSL within Atlas can be enumerated in following steps:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Parser parses the incoming query for syntax."),Object(i.mdx)("li",{parentName:"ul"},"Abstract syntax tree is generated by for a query that is parsed successfully."),Object(i.mdx)("li",{parentName:"ul"},"Syntax tree is 'walked' using visitor pattern."),Object(i.mdx)("li",{parentName:"ul"},"Each 'visit' within the tree adds a step in the Gremlin pipeline."),Object(i.mdx)("li",{parentName:"ul"},"When done, the generated script is executed using Gremlin Script Engine."),Object(i.mdx)("li",{parentName:"ul"},"Results generated be the query, if any, are processed and packaged in AtlasSearchResult structure.")),Object(i.mdx)("h2",{id:"differences-between-master-and-earlier-versions"},"Differences Between Master and Earlier Versions"),Object(i.mdx)("p",null,"The following clauses are no longer supported:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"path"),Object(i.mdx)("li",{parentName:"ul"},"loop")),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Antlr ",Object(i.mdx)("a",{parentName:"li",href:"https://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference"},"Book"),"."),Object(i.mdx)("li",{parentName:"ul"},"Antlr ",Object(i.mdx)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/blob/master/doc/getting-started.md"},"Quick Start"),"."),Object(i.mdx)("li",{parentName:"ul"},"Atlas DSL Grammar on ",Object(i.mdx)("a",{parentName:"li",href:"https://github.com/apache/atlas/blob/master/repository/src/main/java/org/apache/atlas/query/antlr4/AtlasDSLParser.g4"},"Github")," (Antlr G4 format).")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Search/SearchAdvanced.md"}}),d.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-search-search-advanced.36f732bbf8c7eaee188d.js.map