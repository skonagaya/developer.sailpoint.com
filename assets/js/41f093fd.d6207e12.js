"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30467],{91677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=n(87462),a=(n(67294),n(3905)),o=n(64648),r=n(53438);const i={id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/personal-access-tokens",id:"api/beta/personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",source:"@site/products/idn/api/beta/personal-access-tokens.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/personal-access-tokens",permalink:"/idn/api/beta/personal-access-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Password Sync Group by ID",permalink:"/idn/api/beta/delete-password-sync-group"},next:{title:"List Personal Access Tokens",permalink:"/idn/api/beta/list-personal-access-tokens"}},d={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement personal access token (PAT) functionality.\nWith this functionality in place, users can use PATs as an alternative to passwords for authentication in IdentityNow."),(0,a.kt)("p",null,"PATs embed user information into the client ID and secret.\nThis replaces the API clients' need to store and provide a username and password to establish a connection, improving IdentityNow organizations' integration security."),(0,a.kt)("p",null,"In IdentityNow, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens.\nThey must then provide a description about the token's purpose.\nThey can then select 'Create Token' at the bottom of the page to generate and view the Secret and Client ID."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/generate_tokens.html"},"Managing Personal Access Tokens")," for more information about PATs."),(0,a.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},64648:(e,t,n)=>{n.d(t,{Z:()=>k});var s=n(67294),a=n(86010),o=n(53438),r=n(39960),i=n(13919),c=n(95999);const l={cardContainer:"cardContainer_vsuU",cardTitle:"cardTitle_V0Y7",cardDescription:"cardDescription_CHEO"};function d(e){let{href:t,children:n}=e;return s.createElement(r.default,{href:t,className:(0,a.default)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:r}=e;return s.createElement(d,{href:t},s.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:o},n," ",o),r&&s.createElement("p",{className:(0,a.default)("text--truncate",l.cardDescription),title:r},r))}function u(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?s.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(m,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return s.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return s.createElement(f,e);const r=(0,o.MN)(t);return s.createElement("section",{className:(0,a.default)("row",n)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(h,{item:e})))))}}}]);