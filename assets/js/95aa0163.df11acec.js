"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[48705],{16200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=i(87462),r=(i(67294),i(3905)),s=i(64648),a=i(53438);const o={id:"identity-profiles",title:"Identity Profiles",description:"Identity Profiles",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/identity-profiles",id:"api/beta/identity-profiles",title:"Identity Profiles",description:"Identity Profiles",source:"@site/products/idn/api/beta/identity-profiles.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/identity-profiles",permalink:"/idn/api/beta/identity-profiles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identity-profiles",title:"Identity Profiles",description:"Identity Profiles",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Gets a list of differences of specific accessType for the given identity between 2 snapshots",permalink:"/idn/api/beta/compare-identity-snapshots-access-type"},next:{title:"Identity Profiles list",permalink:"/idn/api/beta/list-identity-profiles"}},d={},p=[],u={toc:p},f="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(f,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement and customize identity profile functionality.\nWith this functionality in place, administrators can manage identity profiles and configure them for use by identities throughout IdentityNow."),(0,r.kt)("p",null,"Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.\nThis allows administrators to save time by applying identity profiles to any number of similar identities rather than configuring each one individually."),(0,r.kt)("p",null,"In IdentityNow, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles.\nThis list shows some details about each identity profile, along with its status. They can select an identity profile to view and modify its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings.\nAdministrators can also use this page to create new identity profiles or delete existing ones."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html"},"Creating Identity Profiles")," for more information about identity profiles."),(0,r.kt)(s.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},64648:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(67294),r=i(86010),s=i(53438),a=i(39960),o=i(13919),l=i(95999);const c={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function d(e){let{href:t,children:i}=e;return n.createElement(a.default,{href:t,className:(0,r.default)("card padding--lg",c.cardContainer)},i)}function p(e){let{href:t,icon:i,title:s,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:s},i," ",s),a&&n.createElement("p",{className:(0,r.default)("text--truncate",c.cardDescription),title:a},a))}function u(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,s.jA)();return n.createElement(h,{items:i.items,className:t})}function h(e){const{items:t,className:i}=e;if(!t)return n.createElement(y,e);const a=(0,s.MN)(t);return n.createElement("section",{className:(0,r.default)("row",i)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}}}]);