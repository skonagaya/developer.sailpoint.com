"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85411],{28632:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>b,contentTitle:()=>k,default:()=>x,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var t=s(87462),l=(s(67294),s(3905)),m=s(58219),p=(s(62316),s(51039)),i=s.n(p),n=(s(82723),s(9487)),r=(s(41429),s(5397)),o=s(4667),d=s(9472),c=s(42425);const u={id:"post-role",sidebar_label:"Create a new role",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVk1v4zYQ/SvEnBU7TduLgB6yiyzgopssErcXrxGMpbHEXYnUDsnYgqH/Xgwpx07sZrE9FM3BEclHzsd7M+QObEeMXlszKyGHzjp/bxuCDEpyBetOliCH90zoSaEytFGcEB4rB/kCZOhgmQHTt0DOv7NlD/kuDjVTCbnnQBkU1ngyXpaw6xpdRLvTL04s7MAVNbUoX77vCHKwqy9UeMigY/HSa3LxWLH+XVTQ5RHIedamggxabf4gU/ka8p+vMmhxezykLbZdEzd01jjL7jFaG7LxoNMDyYRWknBLHdu1bmhM3y1hUZBzcbgcMjDYnj/g2ebDaFPMVWxD547wyIw9ZKA9te7tc7B8jNsfo8lhEO+1j0vizcWVzMVpphhnytjV5aX8e8n7zbajwlOp9lDlrUL1hI2Wucg3/MfUnmd2bblFDzkEoV5iw/LONH1S35D9O0W8POVNhfxvCH6m95dzjL7DUt0n4tSFCgZXTSS1sHK6p8mP0GkN3a0hX5xStndoZqJWfpetQ/bPuL8EFc3cMMccLVMQv54LYmY8scFGPRA/Eau4R10oJh/YUKmsUcHUaMqGSkXbguJO90PBva1CEpOnnl2rlpzDilSaX2lTKV+TSvgXcrDMvXK2JV8LakPGqw1bU40MDhnImt13ZvEBRZkwHVuwi+G7yEDgBnKove9cPp3uPBk0/hZbGibGGmq7xvZEk8K2U+w0ZPCErIX9pLZneIppjaGRasKipcKe3AfzCFciQIXO6UqSLioKztuWWCJYin9FYO376OCKkImvg0SwWB4vP0jOkx/HoGcKJCiJNsIgH0GQjR8f9qU/t1/JKC+/v/U2cPoESaTQe3+4n272LByaTuwPr8p63/dP2nsq9kNFHwp68ao8l2Jdm7UVG0JWSuBPk8vJ5ZH+b2/uP6rrT7PTTNek9ouqQKNWpIJL2U5XjEJTqtaWet0r4dQGJ+3aBi7IKW1UTAWZJ83WtGS8VEGjCzIuBj7G8nE2j5kSpbVojlbOXf4vnNwdiur8SyEl0dPWT7sGtbSCpNfdqOj0ipBHRC1Czxew263Q0Z/cDINMfwvEIqPlQbdRRRnUhCVxVNhX6sWD5MvFXKwKvAmxa74udmlHacd1IQ3iTezyqBY/3T3MRXzjO6e1pexh3Mi1gxvI4TN8BsjApq4TVSbzO2jQVAErwadz5e9vUDVK3g==",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a new role' (post-role)"},k=void 0,h={unversionedId:"api/post-role",id:"api/post-role",title:"post-role",description:"Create a new role",source:"@site/products/nerm/api/post-role.api.mdx",sourceDirName:"api",slug:"/api/post-role",permalink:"/nerm/api/post-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a new role' (post-role)",tags:[],version:"current",frontMatter:{id:"post-role",sidebar_label:"Create a new role",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVk1v4zYQ/SvEnBU7TduLgB6yiyzgopssErcXrxGMpbHEXYnUDsnYgqH/Xgwpx07sZrE9FM3BEclHzsd7M+QObEeMXlszKyGHzjp/bxuCDEpyBetOliCH90zoSaEytFGcEB4rB/kCZOhgmQHTt0DOv7NlD/kuDjVTCbnnQBkU1ngyXpaw6xpdRLvTL04s7MAVNbUoX77vCHKwqy9UeMigY/HSa3LxWLH+XVTQ5RHIedamggxabf4gU/ka8p+vMmhxezykLbZdEzd01jjL7jFaG7LxoNMDyYRWknBLHdu1bmhM3y1hUZBzcbgcMjDYnj/g2ebDaFPMVWxD547wyIw9ZKA9te7tc7B8jNsfo8lhEO+1j0vizcWVzMVpphhnytjV5aX8e8n7zbajwlOp9lDlrUL1hI2Wucg3/MfUnmd2bblFDzkEoV5iw/LONH1S35D9O0W8POVNhfxvCH6m95dzjL7DUt0n4tSFCgZXTSS1sHK6p8mP0GkN3a0hX5xStndoZqJWfpetQ/bPuL8EFc3cMMccLVMQv54LYmY8scFGPRA/Eau4R10oJh/YUKmsUcHUaMqGSkXbguJO90PBva1CEpOnnl2rlpzDilSaX2lTKV+TSvgXcrDMvXK2JV8LakPGqw1bU40MDhnImt13ZvEBRZkwHVuwi+G7yEDgBnKove9cPp3uPBk0/hZbGibGGmq7xvZEk8K2U+w0ZPCErIX9pLZneIppjaGRasKipcKe3AfzCFciQIXO6UqSLioKztuWWCJYin9FYO376OCKkImvg0SwWB4vP0jOkx/HoGcKJCiJNsIgH0GQjR8f9qU/t1/JKC+/v/U2cPoESaTQe3+4n272LByaTuwPr8p63/dP2nsq9kNFHwp68ao8l2Jdm7UVG0JWSuBPk8vJ5ZH+b2/uP6rrT7PTTNek9ouqQKNWpIJL2U5XjEJTqtaWet0r4dQGJ+3aBi7IKW1UTAWZJ83WtGS8VEGjCzIuBj7G8nE2j5kSpbVojlbOXf4vnNwdiur8SyEl0dPWT7sGtbSCpNfdqOj0ipBHRC1Czxew263Q0Z/cDINMfwvEIqPlQbdRRRnUhCVxVNhX6sWD5MvFXKwKvAmxa74udmlHacd1IQ3iTezyqBY/3T3MRXzjO6e1pexh3Mi1gxvI4TN8BsjApq4TVSbzO2jQVAErwadz5e9vUDVK3g==",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a new role' (post-role)"},sidebar:"nermOpenApiSidebar",previous:{title:"Update multiple roles",permalink:"/nerm/api/patch-roles"},next:{title:"Find role by id",permalink:"/nerm/api/get-role"}},b={},g=[{value:"Request",id:"request",level:2}],y={toc:g},T="wrapper";function x(e){let{components:a,...s}=e;return(0,l.kt)(T,(0,t.Z)({},y,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Create a new role"),(0,l.kt)(i(),{method:"post",path:"/role",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Create a new role"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)(n.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,l.kt)("strong",{className:"openapi-schema__required"},"required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"role"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,example:"sponsors_role"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileRole`, `NeaccessRole`]",schema:{type:"string",enum:["NeprofileRole","NeaccessRole"]},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sponsors"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"ad_group_name"}},mdxType:"SchemaItem"})))))))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(m.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"role"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0,example:"sponsors_role"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sponsors"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"ad_group_name"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "role": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "sponsors_role",\n    "name": "Sponsors",\n    "groups": [\n      "ad_group_name"\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(d.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);