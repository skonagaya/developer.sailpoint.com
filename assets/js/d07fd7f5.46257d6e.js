"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75231],{67080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/docs/transforms/operations/split",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/split",id:"docs/identity-now/transforms/operations/split",title:"Split",description:"Return the Nth element of a split array.",source:"@site/products/idn/docs/identity-now/transforms/operations/split.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/split",permalink:"/idn/docs/transforms/operations/split",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/split.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/docs/transforms/operations/split",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Rule",permalink:"/idn/docs/transforms/operations/rule"},next:{title:"Static",permalink:"/idn/docs/transforms/operations/static"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the split transform to use a specific character or regex string as a delimiter and convert a single incoming string into an array of values. This transform then returns the Nth element of that array. This transform is often useful when you want to split combined names into their constituent parts or when you want to simplify an ordered list of values into a single attribute."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"In addition to the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes, the split transform requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"delimiter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," attributes. These parameters, respectively, tell the transform what to use as the pattern to split the string with and which entry in the resulting array of values you want it to return."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "delimiter": ",",\n    "index": 5\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"split"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"delimiter")," - This can be either a single character or a regex expression. Transforms use it identify the break point between two substrings in the incoming data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"index")," - This is the integer value for the desired array element after the incoming data has been split into a list. The array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"throws")," - This boolean (true/false) value indicates whether an exception is thrown and returned as an output when an index is out of bounds with the resulting array (i.e., the provided ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," value is larger than the size of the array).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'true - The transform returns "IndexOutOfBoundsException".'),(0,a.kt)("li",{parentName:"ul"},"false - The transform returns null."),(0,a.kt)("li",{parentName:"ul"},'If no throws value is provided, the transform defaults to true and returns an "IndexOutOfBoundsException".')))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This transform takes the incoming attribute configured in the Identity Profile attribute UI, splits it based on the colon ",(0,a.kt)("inlineCode",{parentName:"p"},":")," character, and returns the second array element (array index 1)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "abc:123"\nOutput: "123"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "delimiter": ":",\n    "index": 1\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform takes the explicit string provided, splits it based on the space (" ") character, and returns the fourth word (array index 3).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "The quick brown fox jumped over 10 lazy dogs"\nOutput: "fox"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": "The quick brown fox jumped over 10 lazy dogs",\n    "delimiter": " ",\n    "index": 3,\n    "throws": true\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')))}m.isMDXComponent=!0}}]);