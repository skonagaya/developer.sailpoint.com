"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[13800],{69886:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),r=i(64648),o=i(53438);const c={id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},s=void 0,l={unversionedId:"api/v3/public-identities-config",id:"api/v3/public-identities-config",title:"Public Identities Config",description:"Public Identities Config",source:"@site/products/idn/api/v3/public-identities-config.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/public-identities-config",permalink:"/idn/api/v3/public-identities-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get a list of public identities",permalink:"/idn/api/v3/get-public-identities"},next:{title:"Get the Public Identities Configuration",permalink:"/idn/api/v3/get-public-identity-config"}},d={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement public identity configuration functionality.\nWith this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions.\nThis can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."),(0,a.kt)("p",null,"By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager.\nHowever, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.\nAdministrators can use this API to make those necessary identity attributes public to non-administrators. "),(0,a.kt)("p",null,"For example, a non-administrator deciding whether to approve another identity's request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department.\nIf an administrator has used ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/update-public-identity-config"},"Update Public Identity Config"),' to make the "department" attribute public, the approver can see the department and make a decision without requesting any more information.'),(0,a.kt)(r.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},64648:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(67294),a=i(86010),r=i(53438),o=i(39960),c=i(13919),s=i(95999);const l={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function d(e){let{href:t,children:i}=e;return n.createElement(o.default,{href:t,className:(0,a.default)("card padding--lg",l.cardContainer)},i)}function u(e){let{href:t,icon:i,title:r,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},i," ",r),o&&n.createElement("p",{className:(0,a.default)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:i,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return n.createElement(h,e);const o=(0,r.MN)(t);return n.createElement("section",{className:(0,a.default)("row",i)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}}}]);