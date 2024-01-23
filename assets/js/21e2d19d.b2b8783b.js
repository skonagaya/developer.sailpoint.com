"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[5249],{84534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={id:"jdbc-buildmap-rule",title:"JDBC BuildMap Rule",pagination_label:"JDBC BuildMap Rule",sidebar_label:"JDBC BuildMap Rule",sidebar_class_name:"jdbcBuildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/docs/rules/connector-rules/jdbc-buildmap-rule",tags:["Rules"]},i=void 0,u={unversionedId:"docs/identity-now/rules/connector-rules/jdbc-buildmap-rule",id:"docs/identity-now/rules/connector-rules/jdbc-buildmap-rule",title:"JDBC BuildMap Rule",description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/jdbc_build_map_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/jdbc-buildmap-rule",permalink:"/idn/docs/rules/connector-rules/jdbc-buildmap-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/jdbc_build_map_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"jdbc-buildmap-rule",title:"JDBC BuildMap Rule",pagination_label:"JDBC BuildMap Rule",sidebar_label:"JDBC BuildMap Rule",sidebar_class_name:"jdbcBuildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/docs/rules/connector-rules/jdbc-buildmap-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Before and After Operations",permalink:"/idn/docs/rules/connector-rules/before-and-after-rule-operations"},next:{title:"JDBC Provision Rule",permalink:"/idn/docs/rules/connector-rules/jdbc-provisioning-rule"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data."),(0,l.kt)("h2",{id:"execution"},"Execution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rule Execution",src:a(25089).Z,width:"1525",height:"618"})),(0,l.kt)("h2",{id:"input"},"Input"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"java.sql.ResultSet"),(0,l.kt)("td",{parentName:"tr",align:null},"Current ResultSet from the JDBC Connector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection"),(0,l.kt)("td",{parentName:"tr",align:null},"java.sql.Connection"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference to the current SQL connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,l.kt)("td",{parentName:"tr",align:null},"Map that can be used to store and share data between executions of this rule during a single aggregation run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"application"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute value of the identity attribute before the rule runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference to the schema object for the delimited file source being read.")))),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,l.kt)("td",{parentName:"tr",align:null},"Map of names/values representing a row of data from the JDBC resource.")))),(0,l.kt)("h2",{id:"template"},"Template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCBuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCBuildMap">\n  <Description>\nThis basic rule performs the default mapping and then replaces the \u201cstatus\u201d value read from the database with a\nBoolean \u201cinactive\u201d attribute in the map.\n</Description>\n  <Source><![CDATA[\n\n     import sailpoint.connector.*;\n\n     Map map = JDBCConnector.buildMapFromResultSet(result, schema);\n\n     String status = (String) map.get("status");\n\n     if( "inactive".equals(status) ) {\n\n          map.put("inactive", true);\n\n     } else {\n\n          map.put("inactive", false);\n\n     }\n\n     map.remove("status");\n\n     return map;\n\n\n  ]]></Source>\n</Rule>\n')),(0,l.kt)("h2",{id:"attach-to-source"},"Attach to Source"),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"/idn/docs/rules/connector-rules#jdbcbuildmap-rule"},"Attaching Connector-Related Rules to Sources")," for details on how to attach your rule to your source."))}c.isMDXComponent=!0},25089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);