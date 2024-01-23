"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[40770],{47206:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>v,contentTitle:()=>b,default:()=>T,frontMatter:()=>h,metadata:()=>k,toc:()=>g});var s=t(87462),l=(t(67294),t(3905)),r=t(58219),m=(t(62316),t(51039)),i=t.n(m),n=(t(82723),t(9487)),p=t(41429),o=t(5397),d=t(4667),u=t(9472),c=t(42425);const h={id:"get-user-avatar",sidebar_label:"Retrieves the URL of the user avatar",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1vIzcM/SsCTy0wjp3EabcD9OCiaeGi+wEn6SXwgR7RtnZnpAlFeWMY898LauzEW6fB5mJrRFJ6j3ykdhBaYhQX/NRCCSuSu0g82aAgQwGWYsWuVTuUMCNhRxuKRtZk7mZ/m7DMyxSJDR6CBFcRynvQ3QjzAlpkbEj0q7zfgceGoARnoQCn57Yo65PLpr8fTg+Lz1SJkWB4D6AwqbUoVJjAxlJNQlAA00NyTBZK4UQFxGpNDUK5A9m2emMUdn4FBSwDNyhQQkoZBT1i09bqcn4x/sm+W1wOsLr4ZTAenV8N3p1fjQeWcDy+HOPPl0uErpvrbbENPlLUCy5GI/37lsH1Y0uVkDUHV6WAZoO1072HRFGggCp4IS8aj21buyqXY/g56iG7UxZ9OqCAlrV44noIievXqXKdc4T2o6+3fY66rgBxkpnfcQ1dpzvjl8j8htbMesxmYJLHRZ35VEEzJ3T2FibB08dl1sJ/OR3QTH1O018a2hX/7/ePeuVrrpkDR+jmPYmrl0hMvRB7rM0N8YbY5BgzUF0l9mRN8Cb5NXpbkzX0WFGOjG8i93qZSK88RTYxDcWIKzL9/sL5VRZ/738s0ZvAvDUxNCRr9fpKXsxXDn6V65fZqy3sG1ohaIOVMMwdOdw52w2fujXmVPSdmTUEa5E2lsPhTsijlw/YUHfmg6emrcOW6KwKzRBbBwVskJ0qIVN7du/5LTHVqjysGqrCSYPfZnej08BgjG6lBVBFpSihIVY2c8VXJXayzQAXhEw8SUrnfn5svtH89ziOnZ7KoaRgPxP0u3eCYr/449Amt+ELeSP6++s2JO6XoEl1fhn0RE1XT+H8bHQ2OlLjh+vZezP5ND3luiZzMJoKvVnkoZn5YlVRjAa9NU2wbrk1mtWQos6NkLiiaJw3GQz5jePgG/KimqxdRT7mdO+H6vvpbcbahigN+iPLdw7vb3DvnlX/3cO/T7fQowzbGp2272E29TI8PAwFlHn47kPnBaxDFLXvdguMdMd11+n2QyLW8s+f9ZbFYF3UtYVyiXWkV7D/MNs/DT+atz8rLzLab6Lf5i6ok35BAV9o2z9t3bwrYE1oiTPY3jCpdKQchZyMEtX0U/f+ea3V/Beg16AM",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of the user avatar' (get-user-avatar)"},b=void 0,k={unversionedId:"api/get-user-avatar",id:"api/get-user-avatar",title:"get-user-avatar",description:"Retrieves the URL of the user avatar",source:"@site/products/nerm/api/get-user-avatar.api.mdx",sourceDirName:"api",slug:"/api/get-user-avatar",permalink:"/nerm/api/get-user-avatar",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of the user avatar' (get-user-avatar)",tags:[],version:"current",frontMatter:{id:"get-user-avatar",sidebar_label:"Retrieves the URL of the user avatar",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1vIzcM/SsCTy0wjp3EabcD9OCiaeGi+wEn6SXwgR7RtnZnpAlFeWMY898LauzEW6fB5mJrRFJ6j3ykdhBaYhQX/NRCCSuSu0g82aAgQwGWYsWuVTuUMCNhRxuKRtZk7mZ/m7DMyxSJDR6CBFcRynvQ3QjzAlpkbEj0q7zfgceGoARnoQCn57Yo65PLpr8fTg+Lz1SJkWB4D6AwqbUoVJjAxlJNQlAA00NyTBZK4UQFxGpNDUK5A9m2emMUdn4FBSwDNyhQQkoZBT1i09bqcn4x/sm+W1wOsLr4ZTAenV8N3p1fjQeWcDy+HOPPl0uErpvrbbENPlLUCy5GI/37lsH1Y0uVkDUHV6WAZoO1072HRFGggCp4IS8aj21buyqXY/g56iG7UxZ9OqCAlrV44noIievXqXKdc4T2o6+3fY66rgBxkpnfcQ1dpzvjl8j8htbMesxmYJLHRZ35VEEzJ3T2FibB08dl1sJ/OR3QTH1O018a2hX/7/ePeuVrrpkDR+jmPYmrl0hMvRB7rM0N8YbY5BgzUF0l9mRN8Cb5NXpbkzX0WFGOjG8i93qZSK88RTYxDcWIKzL9/sL5VRZ/738s0ZvAvDUxNCRr9fpKXsxXDn6V65fZqy3sG1ohaIOVMMwdOdw52w2fujXmVPSdmTUEa5E2lsPhTsijlw/YUHfmg6emrcOW6KwKzRBbBwVskJ0qIVN7du/5LTHVqjysGqrCSYPfZnej08BgjG6lBVBFpSihIVY2c8VXJXayzQAXhEw8SUrnfn5svtH89ziOnZ7KoaRgPxP0u3eCYr/449Amt+ELeSP6++s2JO6XoEl1fhn0RE1XT+H8bHQ2OlLjh+vZezP5ND3luiZzMJoKvVnkoZn5YlVRjAa9NU2wbrk1mtWQos6NkLiiaJw3GQz5jePgG/KimqxdRT7mdO+H6vvpbcbahigN+iPLdw7vb3DvnlX/3cO/T7fQowzbGp2272E29TI8PAwFlHn47kPnBaxDFLXvdguMdMd11+n2QyLW8s+f9ZbFYF3UtYVyiXWkV7D/MNs/DT+atz8rLzLab6Lf5i6ok35BAV9o2z9t3bwrYE1oiTPY3jCpdKQchZyMEtX0U/f+ea3V/Beg16AM",sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of the user avatar' (get-user-avatar)"},sidebar:"nermOpenApiSidebar",previous:{title:"Delete a user",permalink:"/nerm/api/delete-user"},next:{title:"Uploads a new user avatar",permalink:"/nerm/api/post-user-avatar"}},v={},g=[{value:"Request",id:"request",level:2}],y={toc:g},f="wrapper";function T(e){let{components:a,...t}=e;return(0,l.kt)(f,(0,s.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Retrieves the URL of the user avatar"),(0,l.kt)(i(),{method:"get",path:"/users/{id}/avatar",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Retrieves the URL of the user avatar"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{type:"string",format:"url",readOnly:!0},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "url": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);