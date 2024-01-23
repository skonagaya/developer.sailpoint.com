"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6453],{13551:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>r,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var c=e(87462),o=(e(67294),e(3905));const a={id:"account-unlock-customizer",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","Account Unlock"],description:"Intercept the account unlock command.",slug:"/docs/saas-connectivity/customizers/commands/account-unlock",tags:["Connectivity","Connector Command"]},i=void 0,u={unversionedId:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-unlock-customizer",id:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-unlock-customizer",title:"Account Unlock",description:"Intercept the account unlock command.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands",slug:"/docs/saas-connectivity/customizers/commands/account-unlock",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-unlock",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"account-unlock-customizer",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","Account Unlock"],description:"Intercept the account unlock command.",slug:"/docs/saas-connectivity/customizers/commands/account-unlock",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Read",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-read"},next:{title:"Account Update",permalink:"/idn/docs/saas-connectivity/customizers/commands/account-update"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountUnlockInput",id:"example-stdaccountunlockinput",level:3},{value:"Example StdAccountUnlockOutput",id:"example-stdaccountunlockoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-unlock command",id:"before-account-unlock-command",level:3},{value:"After account-unlock command",id:"after-account-unlock-command",level:3}],d={toc:s},m="wrapper";function r(t){let{components:n,...e}=t;return(0,o.kt)(m,(0,c.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use these commands to intercept the ",(0,o.kt)("a",{parentName:"p",href:"../../commands/account-unlock"},"account-unlock")," command."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountUnlockInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountUnlockOutput")))),(0,o.kt)("h3",{id:"example-stdaccountunlockinput"},"Example StdAccountUnlockInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,o.kt)("h3",{id:"example-stdaccountunlockoutput"},"Example StdAccountUnlockOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"before-account-unlock-command"},"Before account-unlock command"),(0,o.kt)("p",null,"Use this logic to implement the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,o.kt)("h3",{id:"after-account-unlock-command"},"After account-unlock command"),(0,o.kt)("p",null,"Use this logic to implement the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {\n        logger.info(`Running after account unlock for account ${output.identity}`)\n        return output\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}r.isMDXComponent=!0}}]);