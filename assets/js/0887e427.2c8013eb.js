"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86404],{16001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=r(87462),o=(r(67294),r(3905)),n=r(64648),a=r(53438);const s={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/workflows",id:"api/beta/workflows",title:"Workflows",description:"Workflows",source:"@site/products/idn/api/beta/workflows.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/workflows",permalink:"/idn/api/beta/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update Tenant-wide Reassignment Configuration settings",permalink:"/idn/api/beta/put-tenant-configuration"},next:{title:"Create Workflow",permalink:"/idn/api/beta/create-workflow"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Workflows allow administrators to create custom automation scripts directly within IdentityNow.  These automation scripts respond to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/event-triggers#how-to-get-started-with-event-triggers"},"event triggers")," and perform a series of actions to perform tasks that are either too cumbersome or not available in the IdentityNow UI.  Workflows can be configured via a graphical user interface within IdentityNow, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."),(0,o.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},64648:(e,t,r)=>{r.d(t,{Z:()=>h});var i=r(67294),o=r(86010),n=r(53438),a=r(39960),s=r(13919),c=r(95999);const l={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function d(e){let{href:t,children:r}=e;return i.createElement(a.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:n,description:a}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:n},r," ",n),a&&i.createElement("p",{className:(0,o.default)("text--truncate",l.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?i.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.xz)(t.docId??void 0);return i.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,n.jA)();return i.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return i.createElement(w,e);const a=(0,n.MN)(t);return i.createElement("section",{className:(0,o.default)("row",r)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}}}]);