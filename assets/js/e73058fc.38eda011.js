"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[93788],{81569:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var o=t(87462),i=(t(67294),t(3905));const a={id:"common-cli-commands",title:"Common CLI Commands",pagination_label:"Common CLI Commands",sidebar_label:"Common CLI Commands",sidebar_position:3,sidebar_class_name:"commonCliCommands",keywords:["connectivity","connectors","commands","cli"],description:"These are the CLI commands most commonly used when building SaaS Connectors.",slug:"/docs/saas-connectivity/common-cli-commands",tags:["Connectivity"]},l=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/common-cli-commands",id:"docs/identity-now/saas-connectivity/common-cli-commands",title:"Common CLI Commands",description:"These are the CLI commands most commonly used when building SaaS Connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/common-cli-commands.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/common-cli-commands",permalink:"/idn/docs/saas-connectivity/common-cli-commands",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/common-cli-commands.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:3,frontMatter:{id:"common-cli-commands",title:"Common CLI Commands",pagination_label:"Common CLI Commands",sidebar_label:"Common CLI Commands",sidebar_position:3,sidebar_class_name:"commonCliCommands",keywords:["connectivity","connectors","commands","cli"],description:"These are the CLI commands most commonly used when building SaaS Connectors.",slug:"/docs/saas-connectivity/common-cli-commands",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Test, Build, and Deploy",permalink:"/idn/docs/saas-connectivity/test-build-deploy"},next:{title:"Connector Spec File",permalink:"/idn/docs/saas-connectivity/connector-spec"}},c={},r=[],m={toc:r},d="wrapper";function p(n){let{components:e,...t}=n;return(0,i.kt)(d,(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is a list of commands and their usages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Development"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a connector on your local system: ",(0,i.kt)("inlineCode",{parentName:"li"},'sail conn init "my-project"')),(0,i.kt)("li",{parentName:"ul"},"Create a customizer on your local system ",(0,i.kt)("inlineCode",{parentName:"li"},'sail conn customizers init "my-customizer-project"')),(0,i.kt)("li",{parentName:"ul"},"Test your connector or customizer locally: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run debug")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deployment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create an empty connector in your IDN Org (used to get id so you can upload): ",(0,i.kt)("inlineCode",{parentName:"li"},'sail conn create "my-project"')),(0,i.kt)("li",{parentName:"ul"},"Create an empty customizer in your IDN Org (used to get id so you can upload): ",(0,i.kt)("inlineCode",{parentName:"li"},'sail conn customizers create "my-customizer-project"')),(0,i.kt)("li",{parentName:"ul"},"Build a project: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run pack-zip")),(0,i.kt)("li",{parentName:"ul"},"Upload your connector to your IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip")),(0,i.kt)("li",{parentName:"ul"},"Upload your customizer to your IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn customizers upload -c [customizerID] -f dist/[customizer filename].zip")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exploring"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List connectors in your IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn list")),(0,i.kt)("li",{parentName:"ul"},"List customizers in your IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn customizers list")),(0,i.kt)("li",{parentName:"ul"},"List source instances in your IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn instances list")),(0,i.kt)("li",{parentName:"ul"},"List your connector tags: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn tags list -c [connectorID | connectorAlias]")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Testing and Debugging"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Test your connector on the IDN Org: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail connectors invoke [action] -c [connectorID | connectorAlias] -p config.json")),(0,i.kt)("li",{parentName:"ul"},"Get a list of actions: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn invoke -h")),(0,i.kt)("li",{parentName:"ul"},"Run read-only integration tests against your connector: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn validate -p config.json -c [connectorID | connectorAlias] -r")),(0,i.kt)("li",{parentName:"ul"},"Tail IDN Org connector logs: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn logs tail")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete a connector: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn delete -c [connectorID | connectorAlias]")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Link a customizer to your source instance: ",(0,i.kt)("inlineCode",{parentName:"li"},"sail conn customizers link -i [sourceInstanceID] -c [customizerID]"))))))}p.isMDXComponent=!0}}]);