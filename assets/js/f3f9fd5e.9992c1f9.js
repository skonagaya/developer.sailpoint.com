"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50559],{62802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"date-compare",title:"Date Compare",pagination_label:"Date Compare",sidebar_label:"Date Compare",sidebar_class_name:"dateCompare",keywords:["transforms","operations","date","compare"],description:"Compare two dates and return a calculated value.",slug:"/docs/transforms/operations/date-compare",tags:["Transforms","Transform Operations"]},i=void 0,s={unversionedId:"docs/identity-now/transforms/operations/date-compare",id:"docs/identity-now/transforms/operations/date-compare",title:"Date Compare",description:"Compare two dates and return a calculated value.",source:"@site/products/idn/docs/identity-now/transforms/operations/date-compare.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/date-compare",permalink:"/idn/docs/transforms/operations/date-compare",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/date-compare.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"date-compare",title:"Date Compare",pagination_label:"Date Compare",sidebar_label:"Date Compare",sidebar_class_name:"dateCompare",keywords:["transforms","operations","date","compare"],description:"Compare two dates and return a calculated value.",slug:"/docs/transforms/operations/date-compare",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Conditional",permalink:"/idn/docs/transforms/operations/conditional"},next:{title:"Date Format",permalink:"/idn/docs/transforms/operations/date-format"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,'Use the date compare transform to compare two dates and, depending on the comparison result, return one value if one date is after the other or return a different value if it is before the other. A common use case is to calculate lifecycle states (e.g., the user is "active" if the current date is greater than or equal to the user\'s hire date, etc.).'),(0,n.kt)("admonition",{title:"Other Considerations",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'In addition to explicit date values, the transform recognizes the "now" keyword that always evaluates to the exact date and time when the transform is evaluating.'),(0,n.kt)("li",{parentName:"ul"},"All dates ",(0,n.kt)("strong",{parentName:"li"},"must")," be in ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO8601 format")," in order for the date compare transform to evaluate properly."))),(0,n.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,n.kt)("p",null,"The date compare transform takes as an input the two dates to compare, denoted as ",(0,n.kt)("inlineCode",{parentName:"p"},"firstDate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"secondDate"),". The transform also requires an ",(0,n.kt)("inlineCode",{parentName:"p"},"operator")," designation so it knows which condition to evaluate for. Lastly, the transform requires both a ",(0,n.kt)("inlineCode",{parentName:"p"},"positiveCondition")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"negativeCondition")," -- the former returns if the comparison evaluates to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"; the latter returns if the comparison evaluates to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "termination_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": "now",\n    "operator": "gt",\n    "positiveCondition": "active",\n    "negativeCondition": "terminated"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Required Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"dateCompare"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"firstDate")," - This is the first date to consider (i.e., the date that would be on the left hand side of the comparison operation)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"secondDate")," - This is the second date to consider (i.e., the date that would be on the right hand side of the comparison operation)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"operator")," - This is the comparison to perform. The following values are valid:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LT"),": Strictly less than: firstDate < secondDate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LTE"),": Less than or equal to: firstDate <= secondDate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GT"),": Strictly greater than: firstDate > secondDate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GTE"),": Greater than or equal to: firstDate >= secondDate"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"positiveCondition")," - This is the value to return if the comparison is true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"negativeCondition")," - This is the value to return if the comparison is false."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process. The default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"This transform accomplishes a basic lifecycle state calculation. It compares the user's termination date with his/her HR record. If the current datetime (denoted by ",(0,n.kt)("inlineCode",{parentName:"p"},"now"),') is less than that date, the transform returns "active". If the current datetime is greater than that date, the transform returns "terminated".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "termination_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": "now",\n    "operator": "gt",\n    "positiveCondition": "active",\n    "negativeCondition": "terminated"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform compares the user\'s hire date to a fixed date in the past. If the user was hired prior to January 1, 1996, the transform returns "legacy". If the user was hired later than January 1, 1996, it returns "regular".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "hire_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": {\n      "attributes": {\n        "input": "12/31/1995",\n        "inputFormat": "M/d/yyyy",\n        "outputFormat": "ISO8601"\n      },\n      "type": "dateFormat"\n    },\n    "operator": "lte",\n    "positiveCondition": "legacy",\n    "negativeCondition": "regular"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n')))}u.isMDXComponent=!0}}]);