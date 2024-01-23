"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83306],{86126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"account-profile-attribute-generator-template",title:"Account Profile Attribute Generator (from Template)",pagination_label:"Account Profile Attribute Generator (from Template)",sidebar_label:"Account Profile Attribute Generator (from Template)",sidebar_class_name:"accountProfileAttributeGeneratorTemplate",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values.",slug:"/docs/rules/cloud-rules/account-profile-attribute-generator-template",tags:["Rules"]},l="Account Profile Attribute Generator (from Template)",o={unversionedId:"docs/identity-now/rules/cloud-rules/account-profile-attribute-generator-template",id:"docs/identity-now/rules/cloud-rules/account-profile-attribute-generator-template",title:"Account Profile Attribute Generator (from Template)",description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values.",source:"@site/products/idn/docs/identity-now/rules/cloud-rules/account_profile_attribute_generator_from_template.md",sourceDirName:"docs/identity-now/rules/cloud-rules",slug:"/docs/rules/cloud-rules/account-profile-attribute-generator-template",permalink:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator-template",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/cloud-rules/account_profile_attribute_generator_from_template.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"account-profile-attribute-generator-template",title:"Account Profile Attribute Generator (from Template)",pagination_label:"Account Profile Attribute Generator (from Template)",sidebar_label:"Account Profile Attribute Generator (from Template)",sidebar_class_name:"accountProfileAttributeGeneratorTemplate",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values.",slug:"/docs/rules/cloud-rules/account-profile-attribute-generator-template",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Account Profile Attribute Generator",permalink:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator"},next:{title:"Before Provisioning Rule",permalink:"/idn/docs/rules/cloud-rules/before-provisioning-rule"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-profile-attribute-generator-from-template"},"Account Profile Attribute Generator (from Template)"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This rule generates complex account attribute values during provisioning, e.g. when creating an account. The rule's configuration comes from a template of values. You would typically use this rule when you are creating an account to generate attributes like usernames."),(0,r.kt)("p",null,"In the following example, the template is ",(0,r.kt)("inlineCode",{parentName:"p"},"${firstname}.${lastname}${uniqueCounter}"),", which is pulled in by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Unique LDAP Attribute")," rule and used to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"firstname"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lastname")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueCounter")," placeholders."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "name": "userName",\n      "transform": {\n        "type": "rule",\n        "attributes": {\n          "name": "Create Unique LDAP Attribute"\n        }\n      },\n      "attributes": {\n        "template": "${firstname}.${lastname}${uniqueCounter}",\n        "cloudMaxUniqueChecks": "50",\n        "cloudMaxSize": "20",\n        "cloudRequired": "true"\n      },\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    }\n')),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the IdentityNow cloud, and it has read-only access to IdentityNow data models, but it does not have access to on-premise sources or connectors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:n(62430).Z,width:"1594",height:"635"})),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.log4j.Logger"),(0,r.kt)("td",{parentName:"tr",align:null},"Logger to log statements. ",(0,r.kt)("em",{parentName:"td"},"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idn"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.server.IdnRuleUtil"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the IdentityNow data model including identities or account information via helper methods as described in ",(0,r.kt)("a",{parentName:"td",href:"/idn/docs/rules/rule-utility"},"IdnRuleUtil"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Identity"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to identity object representing the identity being calculated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Field"),(0,r.kt)("td",{parentName:"tr",align:null},"Field object used to get information about the attribute being generated.")))),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"java.lang.Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Value returned for the account attribute.")))),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGeneratorFromTemplate">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule language="beanshell" name="Generate Username" type="AttributeGeneratorFromTemplate">\n  <Description>This will generate a username.</Description>\n  <Source><![CDATA[\nimport java.util.Iterator;\nimport sailpoint.object.*;\nimport java.util.ArrayList;\nimport java.util.List;\nimport org.apache.commons.lang.StringUtils;\n\npublic String generateUniqueUsername ( String loginId, int iteration)\n{\n  switch ( iteration )\n  {\n    case 0:\n      username = StringUtils.left(loginId, prefixLength) + suffix;\n      break;\n    // Default: add numbers until we get a unique username\n    default:\n      username = StringUtils.left(loginId, prefixLength - String.valueOf(iteration).length()).toString();\n      username = username + iteration + suffix;\n      break;\n  }\n\n  if ( isUnique ( username) )\n    return username;\n  else\n    return generateUniqueUsername ( loginId, ( iteration + 1 ));\n}\n\npublic boolean isUnique ( String username )\n{\n  return !idn.accountExistsByDisplayName(application.getName(), username);\n}\n\nint MAX_LENGTH = 20;\nString suffix =  field.getStringAttribute("template");\nString loginId = identity.getAttribute("loginId");\nint prefixLength = MAX_LENGTH - suffix.length();\n\nif (StringUtils.isBlank(loginId))\n  return null;\nelse\n  return generateUniqueUsername( loginId, 0);\n\n  ]]></Source>\n</Rule>\n')))}d.isMDXComponent=!0},62430:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);