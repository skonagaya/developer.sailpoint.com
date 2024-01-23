"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85740],{50934:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var c=n(87462),o=(n(67294),n(3905));const a={id:"account-list-customizer",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","Account List"],description:"Intercept the account list command.",slug:"/docs/saas-connectivity/customizers/commands/account-list",tags:["Connectivity","Connector Command"]},i=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-list-customizer",id:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-list-customizer",title:"Account List",description:"Intercept the account list command.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-list.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands",slug:"/docs/saas-connectivity/customizers/commands/account-list",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-list.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"account-list-customizer",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","Account List"],description:"Intercept the account list command.",slug:"/docs/saas-connectivity/customizers/commands/account-list",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Enable",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-enable"},next:{title:"Account Read",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-read"}},r={},m=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountListInput",id:"example-stdaccountlistinput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-list command",id:"before-account-list-command",level:3},{value:"After account-list command",id:"after-account-list-command",level:3}],l={toc:m},d="wrapper";function u(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,c.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use these commands to intercept the ",(0,o.kt)("a",{parentName:"p",href:"../../commands/account-list"},"account-list")," command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountListInput")))),(0,o.kt)("h3",{id:"example-stdaccountlistinput"},"Example StdAccountListInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"state": {"date": "1686341338871"},\n"stateful": true\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"before-account-list-command"},"Before account-list command"),(0,o.kt)("p",null,"Use this logic to implement the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountList(async (context: Context, input: StdAccountListInput) => {\n        logger.info(`Running before account list for account. State: ${input.state}`)\n        return input\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,o.kt)("h3",{id:"after-account-list-command"},"After account-list command"),(0,o.kt)("p",null,"After account-list is not available for customization at this time. If you need to modify the values of the response, it is recommended that you use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/transforms/"},"Transforms"),"."))}u.isMDXComponent=!0}}]);