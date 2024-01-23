"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[49512],{20882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={id:"webservices-before-provisioning-rule",title:"Web Services Before Operation Rule",pagination_label:"Web Services Before Operation Rule",sidebar_label:"Web Services Before Operation Rule",sidebar_class_name:"webServicesBeforeOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes before a web-service operation call.",slug:"/docs/rules/connector-rules/webservices-before-provisioning-rule",tags:["Rules"]},a=void 0,l={unversionedId:"docs/identity-now/rules/connector-rules/webservices-before-provisioning-rule",id:"docs/identity-now/rules/connector-rules/webservices-before-provisioning-rule",title:"Web Services Before Operation Rule",description:"This rule calculates attributes before a web-service operation call.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/web_services_before_operation_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/webservices-before-provisioning-rule",permalink:"/idn/docs/rules/connector-rules/webservices-before-provisioning-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/web_services_before_operation_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"webservices-before-provisioning-rule",title:"Web Services Before Operation Rule",pagination_label:"Web Services Before Operation Rule",sidebar_label:"Web Services Before Operation Rule",sidebar_class_name:"webServicesBeforeOperationRule",keywords:["cloud","rules","webservices"],description:"This rule calculates attributes before a web-service operation call.",slug:"/docs/rules/connector-rules/webservices-before-provisioning-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Web Services After Operation Rule",permalink:"/idn/docs/rules/connector-rules/webservices-after-provisioning-rule"},next:{title:"IdentityNow Rule Utility",permalink:"/idn/docs/rules/rule-utility"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This rule calculates attributes before a web-service operation call."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:n(25089).Z,width:"1525",height:"618"})),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,r.kt)("td",{parentName:"tr",align:null},"Application whose data file is being processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provisioningPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"Provisioning plan used to update the payload of the http request. The provisioning plan has an account request that defines the operation to be performed on the account. An account request can contain multiple attributes requests. Each attribute request represents an operation on a single account attribute. This argument enables the user to update the body/payload or URL attributes of an endpoint object using the provisioningPlan information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestEndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.webservices.EndPoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Current request information. It contains the header, body, context url, method type, response attribute map, and successful response code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restClient"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.webservices.WebServicesClient"),(0,r.kt)("td",{parentName:"tr",align:null},"WebServicesClient (HttpClient) object that enables the user to call the Web Services API target system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldResponseMap"),(0,r.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,r.kt)("td",{parentName:"tr",align:null},"Response object returned from earlier endpoint configuration of the same operation type, like Account Aggregation, Get Object, etc.")))),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EndPoint / Map"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.webservices.EndPoint / sailpoint.connector.webservices.Map"),(0,r.kt)("td",{parentName:"tr",align:null},"The rule allows the user to return the endpoint object (requestEndPoint) or a map. The map can hold ",(0,r.kt)("strong",{parentName:"td"},"updatedEndPoint")," and ",(0,r.kt)("strong",{parentName:"td"},"connectorStateMap")," keys where the value expected are ",(0,r.kt)("strong",{parentName:"td"},"Endpoint")," (requestEndPoint) and ",(0,r.kt)("strong",{parentName:"td"},"connectorStateMap")," object respectively. The ",(0,r.kt)("strong",{parentName:"td"},"connectorStateMap")," object is a map that contains a key and a value for the attribute that must be updated in the application by the rule.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceBeforeOperationRule">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="WebServiceBeforeOperationRule">\n  <Description>This rule is used by the  Web Services connector before performing any operation like testconnection, aggregation etc.</Description>\n  <Source><![CDATA[\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Map;\nimport connector.common.JsonUtil;\nimport connector.common.Util;\nimport sailpoint.connector.webservices.EndPoint;\nimport sailpoint.connector.webservices.WebServicesClient;\nimport sailpoint.object.Application;\nimport sailpoint.object.ProvisioningPlan;\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\n\n        Map body = requestEndPoint.getBody();\n        String jsonBody = (String) body.get("jsonBody");\n        log.info("Rule - Modify Body: running");\n\n        try {\n\n            Map jsonMap = JsonUtil.toMap(jsonBody);\n            if (jsonMap != null) {\n                Object roleEntry = jsonMap.get("webSiteAndRole");\n                String role = "";\n                if (roleEntry != null && roleEntry instanceof ArrayList) {\n                    ArrayList rolesArray = (ArrayList) roleEntry;\n                    if (rolesArray.size() > 0) {\n                        role = (String) rolesArray.get(0);\n                    }\n                } else if (roleEntry != null) {\n                    role = (String) roleEntry;\n                }\n\n                jsonMap.remove("webSiteAndRole");\n                jsonMap.put("webSiteAndRole", role);\n\n                log.info("Rule - Modify Body: setting webSiteAndRole = " + role);\n                String webID = "";\n                if (provisioningPlan != null) {\n                    log.info("Rule - Modify Body: plan is not null");\n                    for (AccountRequest accReq : Util.iterate(provisioningPlan.getAccountRequests())) {\n                        log.info("Rule - Modify Body: iterating over account requests");\n                        for (ProvisioningPlan.AttributeRequest attReq : Util.iterate(accReq.getAttributeRequests())) {\n                            log.info("Rule - Modify Body: iterating over attribute requests");\n                            String attrName = attReq.getName();\n                            String value = null;\n                            if (attrName != null && "webId".equalsIgnoreCase(attrName)) {\n                                webID = (String) attReq.getValue();\n                                log.info("Rule - Modify Body: setting webID = " + webID);\n                            }\n                        }\n                    }\n                } else {\n                    log.info("Rule - Modify Body: plan is null");\n                }\n\n                if (!"".equals(webID)) {\n                    jsonMap.put("webID", webID);\n                }\n\n                // Add in any other missing fields that are required\n                if (!jsonMap.containsKey("webLogonEmail")) {\n                    jsonMap.put("webLogonEmail", "");\n                }\n                if (!jsonMap.containsKey("taxID")) {\n                    jsonMap.put("taxID", "");\n                }\n                if (!jsonMap.containsKey("taxIdType")) {\n                    jsonMap.put("taxIdType", "");\n                }\n                if (!jsonMap.containsKey("actorLogonId")) {\n                    jsonMap.put("actorLogonId", "");\n                }\n\n                String finalBody = JsonUtil.render(jsonMap);\n                body.put("jsonBody", finalBody);\n                requestEndPoint.setBody(body);\n            }\n        } catch (Exception ex) {\n            log.error("Rule - Modify Body: " + ex);\n        }\n\n        return requestEndPoint;\u200b\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h2",{id:"attach-to-source"},"Attach to Source"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules/connector-rules#webservicebeforeoperation-rule"},"Attaching Connector-Related Rules to Sources")," for details on how to attach your rule to your source."))}d.isMDXComponent=!0},25089:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);