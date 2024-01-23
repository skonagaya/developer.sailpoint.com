"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[48628],{86816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(87462),n=(i(67294),i(3905)),c=i(56405);const r={id:"access-intelligence-center-audit-er-diagram",title:"Access Intelligence Center Audit ER Diagram",pagination_label:"Access Intelligence Center Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center Audit ER Diagram",slug:"/docs/aic-audit-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},s="Access Intelligence Center Audit ER Diagram",o={unversionedId:"docs/identity-now/access-intelligence-center/access-intelligence-center-audit-er-diagram",id:"docs/identity-now/access-intelligence-center/access-intelligence-center-audit-er-diagram",title:"Access Intelligence Center Audit ER Diagram",description:"Access Intelligence Center Audit ER Diagram",source:"@site/products/idn/docs/identity-now/access-intelligence-center/audit-er-diagram.md",sourceDirName:"docs/identity-now/access-intelligence-center",slug:"/docs/aic-audit-er-diagram",permalink:"/idn/docs/aic-audit-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/access-intelligence-center/audit-er-diagram.md",tags:[{label:"AccessIntelligenceCenter",permalink:"/idn/tags/access-intelligence-center"},{label:"AIC",permalink:"/idn/tags/aic"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:2,frontMatter:{id:"access-intelligence-center-audit-er-diagram",title:"Access Intelligence Center Audit ER Diagram",pagination_label:"Access Intelligence Center Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center Audit ER Diagram",slug:"/docs/aic-audit-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},sidebar:"idnDocs",previous:{title:"Access Intelligence Center ER Diagram",permalink:"/idn/docs/aic-er-diagram"},next:{title:"Access Intelligence Center Videos",permalink:"/idn/docs/aic-videos"}},d={},l=[],g={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-intelligence-center-audit-er-diagram"},"Access Intelligence Center Audit ER Diagram"),(0,n.kt)(c.Z,{diagram:'erDiagram AUDIT { varchar ID PK "The primary key" varchar ID "Unique ID of Audit Event" String POD "the pod" String ORG "Customer organization" varchar TENANT_ID "Unique ID of customer organization" Timestamp CREATED "Date Audit Event Created" String ACTION "The action taken related to the Audit Event" String TYPE "The type of Audit Event, example SSO, ROLE, USER_MANAGER, etc." String ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name" String TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name" String STACK "Which internal service was associated with the Audit Event" String TRACKING_NUMBER "Internal tracking ID number associated with the Audit Event" String IP_ADDRESS "IP Address related to Audit Event if available" String DETAILS "Any additional details related to the Audit Event" String SOURCE_NAME "Name of the Source associated with the Audit Event" String ACCOUNT_NAME "Name of Account associated with the Audit Event" String HOST_NAME "Host Name related to Audit Event if available" String INFO "Any additional info that might be available" String ERROR "Any error messages associated with the Audit Event" varchar SOURCE_ID "The ID of the source associated with the Audit Event" String OPERATION "What operation took place on the Audit Event, examples include SETUP, UPDATE, REQUEST, etc." String STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc." String TECHNICAL_NAME "The underlying technical Audit Event name" String NAME "The friendly name description of the Audit Event" Timestamp SYNC_DATE "Date Audit Event Synced" }',mdxType:"MermaidViewer"}))}m.isMDXComponent=!0},56405:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(67294),n=i(57273),c=i(44996);const r={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function s(e){let{children:t,diagram:i}=e;n.Z.contentLoaded();const[s,o]=a.useState(0),[d,l]=a.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[g,u]=a.useState({x:0,y:0}),[m,A]=a.useState(!1);function h(e){e.screenX?(l({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:g.x,offsetY:g.y}),u({x:g.x,y:g.y})):(l({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:g.x,offsetY:g.y}),u({x:g.x,y:g.y}))}function E(e){l({cursor:"grab",clickX:0,clickY:0})}function p(e){"grabbing"===d.cursor&&(e.screenX?u({x:d.clickX-e.screenX+d.offsetX,y:d.clickY-e.screenY+d.offsetY}):u({x:d.clickX-e.changedTouches[0].screenX+d.offsetX,y:d.clickY-e.changedTouches[0].screenY+d.offsetY}))}let f,v;return a.useEffect((()=>{let e=!1;return setTimeout((()=>{e||A(!0)}),100),()=>{e=!0}})),!0===m?(v=a.createElement("div",null),f=a.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-g.y+"px",left:-g.x+"px",width:"calc(100% + "+s+"px)",maxHeight:"1000px"}},i)):(v=a.createElement("div",null,"Diagram Loading ..."),f=a.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-g.y+"px",left:-g.x+"px",width:"calc(100% + "+s+"px)",maxHeight:"1000px"}},i)),a.createElement("div",null,a.createElement("img",{className:r.zoomIn,onClick:e=>{o(s+300)},src:(0,c.default)("/icons/magnifying-glass-plus-regular.svg")}),a.createElement("img",{className:r.zoomIn,onClick:e=>function(e){o(0),l({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),u({x:0,y:0})}(e),src:(0,c.default)("/icons/house-regular.svg")}),a.createElement("img",{className:r.zoomIn,onClick:e=>{o(s-300)},src:(0,c.default)("/icons/magnifying-glass-minus-regular.svg")}),a.createElement("div",{style:{cursor:d.cursor},className:r.mermaidContainer,onMouseMove:e=>p(e),onTouchMove:e=>p(e),onMouseDown:e=>h(e),onTouchStart:e=>h(e),onMouseUp:e=>E(),onTouchEnd:e=>E(),onMouseLeave:e=>E()},v,f))}}}]);