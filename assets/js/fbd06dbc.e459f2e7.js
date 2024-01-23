"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20341],{99750:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>f});var a=i(87462),n=(i(67294),i(3905)),s=i(64648),c=i(53438);const l={id:"lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",custom_edit_url:null},o=void 0,r={unversionedId:"api/beta/lifecycle-states",id:"api/beta/lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",source:"@site/products/idn/api/beta/lifecycle-states.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/lifecycle-states",permalink:"/idn/api/beta/lifecycle-states",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Process identities under profile",permalink:"/idn/api/beta/sync-identity-profile"},next:{title:"Lifecycle State",permalink:"/idn/api/beta/list-lifecycle-states"}},d={},f=[],p={toc:f},m="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement and customize lifecycle state functionality.\nWith this functionality in place, administrators can view and configure custom lifecycle states for use across their organizations, which is key to controlling which users have access, when they have access, and the access they have."),(0,n.kt)("p",null,"A lifecycle state describes a user's status in a company. For example, two lifecycle states come by default with IdentityNow: 'Active' and 'Inactive.'\nWhen an active employee takes an extended leave of absence from a company, his or her lifecycle state may change to 'Inactive,' for security purposes.\nThe inactive employee would lose access to all the applications, sources, and sensitive data during the leave of absence, but when the employee returns and becomes active again, all that access would be restored.\nThis saves administrators the time that would otherwise be spent provisioning the employee's access to each individual tool, reviewing the employee's certification history, etc."),(0,n.kt)("p",null,"Administrators must define the criteria for being in each lifecycle state, and they must define how IdentityNow manages users' access to apps and sources for each lifecycle state."),(0,n.kt)("p",null,"In IdentityNow, administrators can manage lifecycle states by going to Admin > Identities > Identity Profile, selecting the identity profile whose lifecycle states they want to manage, selecting the 'Provisioning' tab, and using the left panel to select the lifecycle state they want to modify."),(0,n.kt)("p",null,"In the 'Provisioning' tab, administrators can make the following access changes to an identity profile's lifecycle state:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable/disable the lifecycle state for the identity profile.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable/disable source accounts for the identity profile's lifecycle state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add existing access profiles to grant to the identity profiles in that lifecycle state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a new access profile to grant to the identity profile in that lifecycle state."))),(0,n.kt)("p",null,"Access profiles granted in a previous lifecycle state are automatically revoked when the identity moves to a new lifecycle state.\nTo maintain access across multiple lifecycle states, administrators must grant the access profiles in each lifecycle state.\nFor example, if an administrator wants users with the 'HR Employee' identity profile to maintain their building access in both the 'Active' and 'Leave of Absence' lifecycle states, the administrator must grant the access profile for that building access to both lifecycle states."),(0,n.kt)("p",null,"During scheduled refreshes, IdentityNow evaluates lifecycle states to determine whether their assigned identities have the access defined in the lifecycle states' access profiles.\nIf the identities are missing access, IdentityNow provisions that access."),(0,n.kt)("p",null,"Administrators can also use the 'Provisioning' tab to configure email notifications for IdentityNow to send whenever an identity with that identity profile has a lifecycle state change.\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#configuring-lifecycle-state-notifications"},"Configuring Lifecycle State Notifications")," for more information on how to do so."),(0,n.kt)("p",null,"An identity's lifecycle state can have four different statuses: the lifecycle state's status can be 'Active,' it can be 'Not Set,' it can be 'Not Valid,' or it 'Does Not Match Technical Name Case.'\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#moving-identities-into-lifecycle-states"},"Moving Identities into Lifecycle States")," for more information about these different lifecycle state statuses."),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html"},"Setting Up Lifecycle States")," for more information about lifecycle states."),(0,n.kt)(s.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},64648:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(67294),n=i(86010),s=i(53438),c=i(39960),l=i(13919),o=i(95999);const r={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function d(e){let{href:t,children:i}=e;return a.createElement(c.default,{href:t,className:(0,n.default)("card padding--lg",r.cardContainer)},i)}function f(e){let{href:t,icon:i,title:s,description:c}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,n.default)("text--truncate",r.cardTitle),title:s},i," ",s),c&&a.createElement("p",{className:(0,n.default)("text--truncate",r.cardDescription),title:c},c))}function p(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?a.createElement(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const i=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return a.createElement(f,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function u(e){let{className:t}=e;const i=(0,s.jA)();return a.createElement(y,{items:i.items,className:t})}function y(e){const{items:t,className:i}=e;if(!t)return a.createElement(u,e);const c=(0,s.MN)(t);return a.createElement("section",{className:(0,n.default)("row",i)},c.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}}}]);