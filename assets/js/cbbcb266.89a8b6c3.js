"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39257],{17638:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(87462),o=(s(67294),s(3905));const i={id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},n=void 0,a={unversionedId:"tools/sdk/typescript/typescript-sdk-delete",id:"tools/sdk/typescript/typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to delete resources.",source:"@site/products/idn/tools/sdk/typescript/deleting-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/delete",permalink:"/idn/tools/sdk/typescript/delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/sdk/typescript/deleting-resources.md",tags:[{label:"SDK",permalink:"/idn/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:4,frontMatter:{id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},sidebar:"sdkSidebar",previous:{title:"Update a resource",permalink:"/idn/tools/sdk/typescript/update"},next:{title:"Paginate Results",permalink:"/idn/tools/sdk/typescript/paginate"}},p={},l=[],d={toc:l},c="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the SDK to delete resources."),(0,o.kt)("p",null,"Here is an example script that searches for the Workgroup created in ",(0,o.kt)("a",{parentName:"p",href:"/idn/tools/sdk/typescript/create"},"Create a resource")," by name and calls the delete method to remove it from your environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Configuration, GovernanceGroupsBetaApi, GovernanceGroupsBetaApiCreateWorkgroupRequest, GovernanceGroupsBetaApiPatchWorkgroupRequest, PublicIdentitiesApi} from "sailpoint-api-client"\n\nconst deleteWorkgroup = async () => {\n    let apiConfig = new Configuration()\n    let api = new GovernanceGroupsBetaApi(apiConfig)\n\n    let workgroup = (await api.listWorkgroups({filters: \'name eq "DB Access Governance Group"\'})).data[0]\n\n    if (workgroup.id !== undefined) {\n        let deletionStatus = (await api.deleteWorkgroup({id: workgroup.id})).status\n        console.log(deletionStatus)\n    } else {\n        console.log("Workgroup was not found, id is missing for delete request.")\n    }\n}\n\ndeleteWorkgroup()\n')),(0,o.kt)("p",null,"Run this command to compile and run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tsc src/index.ts && node src/index.js\n")),(0,o.kt)("p",null,"The deletionStatus is returned by the SDK with a value of 204."))}u.isMDXComponent=!0}}]);