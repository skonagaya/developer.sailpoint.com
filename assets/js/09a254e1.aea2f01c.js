"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8059],{22644:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var l=t(87462),s=(t(67294),t(3905)),i=t(58219),m=(t(62316),t(51039)),r=t.n(m),o=(t(82723),t(9487)),p=(t(41429),t(5397)),n=t(4667),d=t(9472),c=t(42425);const u={id:"patch-role-profiles",sidebar_label:"Update multiple role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVttuGzcQ/RVinleS44vSLtAHJXBRBUhq2EpfFCEYcWe1TLjkhhfbgrD/XgwpWXLkuE7bfZBW5JnhmduhNmA7chiUNdMKSugwyObaarpytlaaPBRQkZdOdYyBEj52FQYSbdRBdZqEs5oGXUYLaU1wahmDdcKRTn59ozp2E3DloZwDG4hu535RgKNvkXx4Y6s1lJv0UzmqoAwuUgHsk0zgLew6rWTyOvrimc4GvGyoRX4L646gBLv8QjJAAZ3j2IIin9xaTZ8fjt3D0TlcQwEqUOv/2Y2qDjA+OGVWUEBtXYsBSohRVdAX+bQXYrekXgbvCwgqaIYclmlwCn1+OJ++s8ZnvqcnJ/z1uIaX9x3JQJXYQUWwAsUtasVrqRzwE5m3hv6soZwfJ+8prtAXPwa+s0voFzmQ86e4v8FKXGeKYiCiwaVO9KVtO02Bhv8v8alJWXnHps/x/otR6ZhL56zzD0FcPBXE1ARyBrW4IXdLTiQbMRCOQnSGKmGNiKZBU2mqBN1LSpb+p4J7vpGJjzxmNhEteY8rEnl9qcxKhIZExhdA98iJhhJurHNr4W1LoWHUHZkg7pw1q30v8p59EBYmgaGBEkaPx7EAnxLhUy2i01BCE0Lny9FoE8igCR+wpX5orKG203ZNNJS2HWGnoIBbdIr7IM/vAzxHV2PUPD8oW5L2SM9mCS4MtiTQe7Xi9HM/RR9sS45jWTA/GZ0K60RwSejITSKHMl8cbt9w9jOPQ9BDMTgojjbBoNyCoNi+/L4b9pn9SkYE/vxtbaPLr2n8udDXe8m83NXjSOLmWa3grMZfLurx+eDi9avXg/OL8elgeVbLwan8dXxWj8dY4xgOJOulBoe69TKbftEXoExtmS2XO5fg1fBkeHIwSx8ur9+LydX0uFYNid2mkGjEkkT0uV4oJXkv0FSitZWq14K7wkbPImejk+SFMiIlk8ytcta0ZAJPlFaSjE8pNKlt4P10lnLdWR9aNAc7//r6exTJZj/F/+FCzS0V6D6MOo2KBSrPzmY7ZvPvWmJRQGN94I3NZomePjrd97z8LZLj3l7shym1dgENYUUuddNXWkMJbzPzwYyPZ7iO6R79XotYLbPFRLJ+PYtdHEjF1WT29g8eie0fgtZWbOTwjrsU76CET/AJoACbVTH1Pq9vQKNZRVwxPjvm528xZxLy",sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)"},h=void 0,k={unversionedId:"api/patch-role-profiles",id:"api/patch-role-profiles",title:"patch-role-profiles",description:"Update multiple role-profile contributor relationships",source:"@site/products/nerm/api/patch-role-profiles.api.mdx",sourceDirName:"api",slug:"/api/patch-role-profiles",permalink:"/nerm/api/patch-role-profiles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)",tags:[],version:"current",frontMatter:{id:"patch-role-profiles",sidebar_label:"Update multiple role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVttuGzcQ/RVinleS44vSLtAHJXBRBUhq2EpfFCEYcWe1TLjkhhfbgrD/XgwpWXLkuE7bfZBW5JnhmduhNmA7chiUNdMKSugwyObaarpytlaaPBRQkZdOdYyBEj52FQYSbdRBdZqEs5oGXUYLaU1wahmDdcKRTn59ozp2E3DloZwDG4hu535RgKNvkXx4Y6s1lJv0UzmqoAwuUgHsk0zgLew6rWTyOvrimc4GvGyoRX4L646gBLv8QjJAAZ3j2IIin9xaTZ8fjt3D0TlcQwEqUOv/2Y2qDjA+OGVWUEBtXYsBSohRVdAX+bQXYrekXgbvCwgqaIYclmlwCn1+OJ++s8ZnvqcnJ/z1uIaX9x3JQJXYQUWwAsUtasVrqRzwE5m3hv6soZwfJ+8prtAXPwa+s0voFzmQ86e4v8FKXGeKYiCiwaVO9KVtO02Bhv8v8alJWXnHps/x/otR6ZhL56zzD0FcPBXE1ARyBrW4IXdLTiQbMRCOQnSGKmGNiKZBU2mqBN1LSpb+p4J7vpGJjzxmNhEteY8rEnl9qcxKhIZExhdA98iJhhJurHNr4W1LoWHUHZkg7pw1q30v8p59EBYmgaGBEkaPx7EAnxLhUy2i01BCE0Lny9FoE8igCR+wpX5orKG203ZNNJS2HWGnoIBbdIr7IM/vAzxHV2PUPD8oW5L2SM9mCS4MtiTQe7Xi9HM/RR9sS45jWTA/GZ0K60RwSejITSKHMl8cbt9w9jOPQ9BDMTgojjbBoNyCoNi+/L4b9pn9SkYE/vxtbaPLr2n8udDXe8m83NXjSOLmWa3grMZfLurx+eDi9avXg/OL8elgeVbLwan8dXxWj8dY4xgOJOulBoe69TKbftEXoExtmS2XO5fg1fBkeHIwSx8ur9+LydX0uFYNid2mkGjEkkT0uV4oJXkv0FSitZWq14K7wkbPImejk+SFMiIlk8ytcta0ZAJPlFaSjE8pNKlt4P10lnLdWR9aNAc7//r6exTJZj/F/+FCzS0V6D6MOo2KBSrPzmY7ZvPvWmJRQGN94I3NZomePjrd97z8LZLj3l7shym1dgENYUUuddNXWkMJbzPzwYyPZ7iO6R79XotYLbPFRLJ+PYtdHEjF1WT29g8eie0fgtZWbOTwjrsU76CET/AJoACbVTH1Pq9vQKNZRVwxPjvm528xZxLy",sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)"},sidebar:"nermOpenApiSidebar",previous:{title:"Create multiple role-profile contributor relationships",permalink:"/nerm/api/post-role-profiles"},next:{title:"Find role-profile contributor relationship by id",permalink:"/nerm/api/get-role-profile"}},b={},y=[{value:"Request",id:"request",level:2}],f={toc:y},g="wrapper";function v(e){let{components:a,...t}=e;return(0,s.kt)(g,(0,l.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update multiple role-profile contributor relationships"),(0,s.kt)(r(),{method:"patch",path:"/role_profiles",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Update multiple role-profile contributor relationships"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role_profiles"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"RoleProfiles",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role_profiles"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)(c.default,{label:"Job",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(n.Z,{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"job_status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"},mdxType:"SchemaItem"})))),(0,s.kt)(n.Z,{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.default,{mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,s.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,s.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);