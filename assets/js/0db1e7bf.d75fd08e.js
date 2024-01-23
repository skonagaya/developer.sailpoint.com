"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58648],{22620:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>h,default:()=>T,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var s=t(87462),l=(t(67294),t(3905)),m=t(58219),i=(t(62316),t(51039)),p=t.n(i),r=(t(82723),t(9487)),o=(t(41429),t(5397)),n=t(4667),d=t(9472),c=t(42425);const u={id:"create-profile-page",sidebar_label:"Create a profile page",hide_title:!0,hide_table_of_contents:!0,api:"eJztVltv2zYU/ivEeZYvSxN3ELCHdMsAD2gTJN5eUqOgqCOLDUWqvDgRDP334pC+KLbToa/D/CBL5Hfu3znkBkyLlntp9LyEHIRF7vHOmkoqvOMrhAxKdMLKljCQw+8RwThrE4i1CeX5ykH+CPTpYJmBxW8Bnf9gyg7yTfyUFkvIvQ2YgTDao/a0xdtWSRGdmHx1ZGUDTtTYcHrzXYuQgym+ovCQQWvJZS/R0W60/q+oIMsByHkr9eokskWNLMiSmYr5eh8XvvCmVSRGC19IU38kuVfs8cW/EqEMsspY9mzsU6XM81mjg5VXxvsMNG/wnOcHEx87Fq18IuQ57aTiWC23opZrHCalMEYh10PdFVcOj1X+gR5tIzU69lyjr9HuNTPp2F5z32fgpU9pGPCpjz+ih2uNdqk+F9Mp/b22dPPSovBYsh2UecM4W3MlaS2yC/4n0n+eSBmcT3plbMM95BAol8QoXt5q1e0mzGkEh5qQ7KvoL3A6K359PxtVl1ez0eX7d+WoKGdXo2J2+e4Kp8WsuDjidJxzOzZfniPwB16y+8RTNmJB80JFDgtDRj2Of4a9RuNtBfnjKUN3Hs11bI2/SLTP3sb9Q6ho5sZaYx30yxTE1bkg5tqj1VyxB7RrtCzKsBGz6IPVWDKjWdA116XCkuGLwCjpfiq4HzcdkslTz65Zg84RXdJ6IfUqFjfhh9V9MNZ2zJkGfU2oZ9SePVujV9sK9hnQnqEzsDVxrrTc15DDJB5ok+1p9yUdbxm4mA0XCxKsghxq71uXTyYbj5prT23Uj7XR2LTKdIhjYZoJbyVksOZWEhlidAd4CrHiQRGruWhQmNNOjPDUjNw5uaIaEKmC86ZBSwEtyT8RrPRddLBAbtFeBwrocTncfqASJD+GoH1FKCiKNsKouSMIsu3Ln7sWXJgn1MzT87fOBJteY8NQte8Pd4GbXVEOIzcO1cNUPI743OxL4+x4Zh2mUZw4ZF3qypANKlZS98t4Op4O2uHTzf1Hdn03PzvzdptMcM0KZMGlbHMh0DnGdckaU8qqY1RTExwdViZYgY5JzWIqUK+lNbpB7akplBSoXQx8F8V8ETNFxGu4Huy8ddk6OjX2ffb27exwrkxaxSVNiMTbzZbou5tbbL4B1ZcZ1NQQ+SNsNgV3+LdVfU/L3wJa4tfyQOhIrwxq5CXaSL0n7Mit5OBoQW4QXAVy52Qo0NhKEteCBskPsctBz97dPiyIldvLZmNKkrGcuELPHD7DZ4AMTJpO8UZK6xtQXK9CZCIkvfT7DszR074=",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)"},h=void 0,k={unversionedId:"api/create-profile-page",id:"api/create-profile-page",title:"create-profile-page",description:"Create a profile page",source:"@site/products/nerm/api/create-profile-page.api.mdx",sourceDirName:"api",slug:"/api/create-profile-page",permalink:"/nerm/api/create-profile-page",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)",tags:[],version:"current",frontMatter:{id:"create-profile-page",sidebar_label:"Create a profile page",hide_title:!0,hide_table_of_contents:!0,api:"eJztVltv2zYU/ivEeZYvSxN3ELCHdMsAD2gTJN5eUqOgqCOLDUWqvDgRDP334pC+KLbToa/D/CBL5Hfu3znkBkyLlntp9LyEHIRF7vHOmkoqvOMrhAxKdMLKljCQw+8RwThrE4i1CeX5ykH+CPTpYJmBxW8Bnf9gyg7yTfyUFkvIvQ2YgTDao/a0xdtWSRGdmHx1ZGUDTtTYcHrzXYuQgym+ovCQQWvJZS/R0W60/q+oIMsByHkr9eokskWNLMiSmYr5eh8XvvCmVSRGC19IU38kuVfs8cW/EqEMsspY9mzsU6XM81mjg5VXxvsMNG/wnOcHEx87Fq18IuQ57aTiWC23opZrHCalMEYh10PdFVcOj1X+gR5tIzU69lyjr9HuNTPp2F5z32fgpU9pGPCpjz+ih2uNdqk+F9Mp/b22dPPSovBYsh2UecM4W3MlaS2yC/4n0n+eSBmcT3plbMM95BAol8QoXt5q1e0mzGkEh5qQ7KvoL3A6K359PxtVl1ez0eX7d+WoKGdXo2J2+e4Kp8WsuDjidJxzOzZfniPwB16y+8RTNmJB80JFDgtDRj2Of4a9RuNtBfnjKUN3Hs11bI2/SLTP3sb9Q6ho5sZaYx30yxTE1bkg5tqj1VyxB7RrtCzKsBGz6IPVWDKjWdA116XCkuGLwCjpfiq4HzcdkslTz65Zg84RXdJ6IfUqFjfhh9V9MNZ2zJkGfU2oZ9SePVujV9sK9hnQnqEzsDVxrrTc15DDJB5ok+1p9yUdbxm4mA0XCxKsghxq71uXTyYbj5prT23Uj7XR2LTKdIhjYZoJbyVksOZWEhlidAd4CrHiQRGruWhQmNNOjPDUjNw5uaIaEKmC86ZBSwEtyT8RrPRddLBAbtFeBwrocTncfqASJD+GoH1FKCiKNsKouSMIsu3Ln7sWXJgn1MzT87fOBJteY8NQte8Pd4GbXVEOIzcO1cNUPI743OxL4+x4Zh2mUZw4ZF3qypANKlZS98t4Op4O2uHTzf1Hdn03PzvzdptMcM0KZMGlbHMh0DnGdckaU8qqY1RTExwdViZYgY5JzWIqUK+lNbpB7akplBSoXQx8F8V8ETNFxGu4Huy8ddk6OjX2ffb27exwrkxaxSVNiMTbzZbou5tbbL4B1ZcZ1NQQ+SNsNgV3+LdVfU/L3wJa4tfyQOhIrwxq5CXaSL0n7Mit5OBoQW4QXAVy52Qo0NhKEteCBskPsctBz97dPiyIldvLZmNKkrGcuELPHD7DZ4AMTJpO8UZK6xtQXK9CZCIkvfT7DszR074=",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)"},sidebar:"nermOpenApiSidebar",previous:{title:"Delete a option based attribute value by id",permalink:"/nerm/api/delete-attribute-option"},next:{title:"Create a workflow page",permalink:"/nerm/api/create-workflow-page"}},g={},y=[{value:"Request",id:"request",level:2}],b={toc:y},f="wrapper";function T(e){let{components:a,...t}=e;return(0,l.kt)(f,(0,s.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Create a profile page"),(0,l.kt)(p(),{method:"post",path:"/pages/profile_pages",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Create a profile page"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"page"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The uid of the page",example:"page_uid"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"description",required:!1,schemaName:"text",qualifierMessage:void 0,schema:{type:"text",example:"Page for workflow",description:"The description of the page"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"My Page Name",description:"The name of the page"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"Determines whether the page is archived"},mdxType:"SchemaItem"})))))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(m.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"page"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The uid of the page",example:"page_uid"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"description",required:!1,schemaName:"text",qualifierMessage:void 0,schema:{type:"text",example:"Page for workflow",description:"The description of the page"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"My Page Name",description:"The name of the page"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"Determines whether the page is archived"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0,description:"The id of the form",example:"2e06b876-f456-473d-bd65-b6435e0b6b2d"},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "page": {\n    "uid": "page_uid",\n    "description": "Page for workflow",\n    "name": "My Page Name",\n    "archived": false,\n    "id": "2e06b876-f456-473d-bd65-b6435e0b6b2d"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(d.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(n.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);