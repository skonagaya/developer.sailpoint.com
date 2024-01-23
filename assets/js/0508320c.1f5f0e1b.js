"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29273],{34914:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>g,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const r={id:"campaign-generated",title:"Campaign Generated",pagination_label:"Campaign Generated",sidebar_label:"Campaign Generated",sidebar_class_name:"campaignGenerated",keywords:["event","trigger","campaign","generated","available"],description:"Triggered when a campaign finishes generating.",slug:"/docs/event-triggers/triggers/campaign-generated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},g=void 0,s={unversionedId:"docs/identity-now/event-triggers/available/campaign-generated",id:"docs/identity-now/event-triggers/available/campaign-generated",title:"Campaign Generated",description:"Triggered when a campaign finishes generating.",source:"@site/products/idn/docs/identity-now/event-triggers/available/campaign-generated.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/campaign-generated",permalink:"/idn/docs/event-triggers/triggers/campaign-generated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/campaign-generated.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"campaign-generated",title:"Campaign Generated",pagination_label:"Campaign Generated",sidebar_label:"Campaign Generated",sidebar_class_name:"campaignGenerated",keywords:["event","trigger","campaign","generated","available"],description:"Triggered when a campaign finishes generating.",slug:"/docs/event-triggers/triggers/campaign-generated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Campaign Ended",permalink:"/idn/docs/event-triggers/triggers/campaign-ended"},next:{title:"Certification Signed Off",permalink:"/idn/docs/event-triggers/triggers/certification-signed-off"}},d={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],o={toc:l},c="wrapper";function p(e){let{components:a,...r}=e;return(0,i.kt)(c,(0,n.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-context"},"Event Context"),(0,i.kt)("p",null,'The Campaign Generated events occur when a campaign has finished generating and moves to the "Preview Ready" state, which is a step before activating the campaign.'),(0,i.kt)("p",null,'When a new campaign is created, it will start in the "Generating" state.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generating",src:t(98738).Z,width:"2186",height:"355"})),(0,i.kt)("p",null,'Once the generation is complete, the campaign will move to the "Preview Ready" state, and this trigger will fire an event with the details of the campaign.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Preivew",src:t(19912).Z,width:"2174",height:"350"})),(0,i.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Immediately activate a campaign as soon as it is ready")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "campaign": {\n    "id": "2c91808576f886190176f88cac5a0010",\n    "name": "Manager Access Campaign",\n    "description": "Audit access for all employees.",\n    "created": "2021-02-16T03:04:45.815Z",\n    "modified": null,\n    "deadline": null,\n    "type": "MANAGER",\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "status": "STAGED"\n  }\n}\n')),(0,i.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}p.isMDXComponent=!0},98738:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/campaign-generated-generating-934c2f7f4f8c4fd5639accadc66a4ce0.png"},19912:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/campaign-generated-preview-3774388d3d0d95764edcb352b72e96cf.png"}}]);