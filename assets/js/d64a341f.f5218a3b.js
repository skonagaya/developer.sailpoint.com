"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[79115],{12507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/docs/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},s=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/source-data-read",id:"docs/identity-now/saas-connectivity/connector-commands/source-data-read",title:"Source Data Read",description:"Read source data.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/source-data-read.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/source-data-read",permalink:"/idn/docs/saas-connectivity/commands/source-data-read",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/source-data-read.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/docs/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Source Data Discover",permalink:"/idn/docs/saas-connectivity/commands/source-data-discover"},next:{title:"Test Connection",permalink:"/idn/docs/saas-connectivity/commands/test-connection"}},i={},d=[{value:"Example StdSourceDataReadInput",id:"example-stdsourcedatareadinput",level:3},{value:"Example StdSourceDataReadOutput",id:"example-stdsourcedatareadoutput",level:3},{value:"Description",id:"description",level:2}],u={toc:d},l="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("td",{parentName:"tr",align:"center"},"StdSourceDataReadInput")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,r.kt)("td",{parentName:"tr",align:"center"},"StdSourceDataReadOutput")))),(0,r.kt)("h3",{id:"example-stdsourcedatareadinput"},"Example StdSourceDataReadInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "sourceDataKey": "name",\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n')),(0,r.kt)("h3",{id:"example-stdsourcedatareadoutput"},"Example StdSourceDataReadOutput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n    {\n        key: 'id',\n        label: 'Id',\n        subLabel: 'Airtable Base Id'\n    },\n    {\n        key: 'name',\n        label: 'Name',\n        subLabel: 'Airtable Source Table Name'\n    }\n]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Use the source data read command to query a source in IdentityNow and return a set of data. This data is typically used to populate a dropdown menu for selection purposes. This functionality is typically useful for IdentityNow forms, but it can be used for any type of implementation that requires you to get other information from a source, information that is not normally retrieved from identites or entitlements."),(0,r.kt)("p",null,"This is a simple example of the source data read command. It is implemented to retrieve the base ID name. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceDataKey")," is required, the ",(0,r.kt)("inlineCode",{parentName:"p"},"source data read")," command should return it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n")),(0,r.kt)("p",null,"You can optionally use ",(0,r.kt)("inlineCode",{parentName:"p"},"input.queryInput.query")," to make the list searchable. One way you could do this is to import a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AlaSQL/alasql"},"alasql")," and allow the user to implement a search on the dataset. This example from Airtable shows how you could use the source data read command to get accounts and allow a search to be performed with the Airtable API: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else if (input.sourceDataKey === 'accounts' && input.queryInput?.query) {\n        let accounts = await airtable.queryAccounts(input.queryInput.query)\n        let result: StdSourceDataReadOutput = []\n        for (let account of accounts) {\n            result.push({ key: account.id, label: account.displayName, subLabel: account.email })\n        }\n        res.send(result)\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n\n// airtable.ts implementation of queryAccounts:\n\nasync queryAccounts(query: string): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view',\n        filterByFormula: `SEARCH(LOWER(\"${query}\"), LOWER(displayName)) > 0`\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n\n")),(0,r.kt)("p",null,'Now, if the source system sends a command like the following, the system will only get results that contain the name "Adam":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    "type": "std:source-data:read",\n    "input": {\n        "queryInput": {\n            "query": "Adam"\n        }\n    },\n')))}p.isMDXComponent=!0}}]);