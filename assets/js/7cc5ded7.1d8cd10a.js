"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86751],{71110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(87462),n=(a(67294),a(3905)),o=a(64648),r=a(53438);const i={id:"password-sync-groups",title:"Password Sync Groups",description:"Password Sync Groups",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/password-sync-groups",id:"api/beta/password-sync-groups",title:"Password Sync Groups",description:"Password Sync Groups",source:"@site/products/idn/api/beta/password-sync-groups.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/password-sync-groups",permalink:"/idn/api/beta/password-sync-groups",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-sync-groups",title:"Password Sync Groups",description:"Password Sync Groups",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Password Change Request Status",permalink:"/idn/api/beta/get-identity-password-change-status"},next:{title:"Get Password Sync Group List",permalink:"/idn/api/beta/get-password-sync-groups"}},p={},d=[],u={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement password sync group functionality.\nWith this functionality in place, administrators can group sources into password sync groups so that all their applications share the same password.\nThis allows users to update the password for all the applications in a sync group if they want, rather than updating each password individually."),(0,n.kt)("p",null,"A password sync group is a group of applications that shares a password.\nAdministrators create these groups by grouping the applications' sources.\nFor example, an administrator can group the ActiveDirectory, GitHub, and G Suite sources together so that all those sources' applications can also be grouped to share a password.\nA user can then update his or her password for ActiveDirectory, GitHub, Gmail, Google Drive, and Google Calendar all at once, rather then updating each one individually."),(0,n.kt)("p",null,"The following are required for administrators to create a password sync group in IdentityNow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At least two direct connect sources connected to IdentityNow and configured for Password Management.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each authentication source in a sync group must have at least one application. Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/adv_config.html#adding-and-resetting-application-passwords"},"Adding and Resetting Application Passwords")," for more information about adding applications to sources.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At least one password policy. Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/policies.html"},"Managing Password Policies")," for more information about password policies."))),(0,n.kt)("p",null,"In the Admin panel in IdentityNow, administrators can use the Password Mgmt dropdown menu to select Sync Groups.\nTo create a sync group, administrators must provide a name, choose a password policy to be enforced across the sources in the sync group, and select the sources to include in the sync group."),(0,n.kt)("p",null,"Administrators can also delete sync groups in IdentityNow, but they should know the following before they do:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Passwords related to the associated sources will become independent, so changing one will not change the others anymore.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Passwords for the sources' connected applications will also become independent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Password policies assigned to the sync group are then assigned directly to the associated sources.\nTo change the password policy for a source, administrators must edit it directly."))),(0,n.kt)("p",null,"Once the password sync group has been created, users can update the password for the group in Password Manager."),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html"},"Managing Password Sync Groups")," for more information about password sync groups."),(0,n.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},64648:(e,t,a)=>{a.d(t,{Z:()=>w});var s=a(67294),n=a(86010),o=a(53438),r=a(39960),i=a(13919),c=a(95999);const l={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function p(e){let{href:t,children:a}=e;return s.createElement(r.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},a)}function d(e){let{href:t,icon:a,title:o,description:r}=e;return s.createElement(p,{href:t},s.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:o},a," ",o),r&&s.createElement("p",{className:(0,n.default)("text--truncate",l.cardDescription),title:r},r))}function u(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?s.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return s.createElement(d,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(m,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,o.jA)();return s.createElement(w,{items:a.items,className:t})}function w(e){const{items:t,className:a}=e;if(!t)return s.createElement(g,e);const r=(0,o.MN)(t);return s.createElement("section",{className:(0,n.default)("row",a)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(h,{item:e})))))}}}]);