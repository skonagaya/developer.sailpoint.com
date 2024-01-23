"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[55550],{68767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const c={id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/docs/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},i=void 0,o={unversionedId:"docs/identity-now/event-triggers/early-access/source-account-created",id:"docs/identity-now/event-triggers/early-access/source-account-created",title:"Source Account Created",description:"Fires after a source account is created.",source:"@site/products/idn/docs/identity-now/event-triggers/early-access/source-account-created.md",sourceDirName:"docs/identity-now/event-triggers/early-access",slug:"/docs/event-triggers/triggers/source-account-created",permalink:"/idn/docs/event-triggers/triggers/source-account-created",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/early-access/source-account-created.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/idn/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/docs/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Identity Deleted",permalink:"/idn/docs/event-triggers/triggers/identity-deleted"},next:{title:"Source Account Deleted",permalink:"/idn/docs/event-triggers/triggers/source-account-deleted"}},s={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional information and links",id:"additional-information-and-links",level:2}],u={toc:d},l="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,"Source Account Created events occur after a new account is detected during an account aggregration and refresh from a source. This trigger cannot determine whether account creation happened on a source or in IdentityNow. It omits events related to IdentityNow accounts, such as the IdentityNow Admin."),(0,a.kt)("p",null,"Use this event trigger to watch for new accounts with highly privileged access, such as an account created in Active Directory Domain Admins."),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional information and links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0}}]);