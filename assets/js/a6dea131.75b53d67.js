"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29891],{67186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={id:"rdk",title:"Rule Development Kit",pagination_label:"RDK",sidebar_label:"Rule Development Kit",sidebar_position:3,sidebar_class_name:"rdk",keywords:["rule","development","kit"],description:"The SailPoint Rule Development Kit is a project that enables you to develop rules more quickly and easily.",slug:"/tools/rule-development-kit",tags:["RDK"]},i=void 0,s={unversionedId:"tools/rule-development-kit/rdk",id:"tools/rule-development-kit/rdk",title:"Rule Development Kit",description:"The SailPoint Rule Development Kit is a project that enables you to develop rules more quickly and easily.",source:"@site/products/idn/tools/rule-development-kit/index.md",sourceDirName:"tools/rule-development-kit",slug:"/tools/rule-development-kit",permalink:"/idn/tools/rule-development-kit",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/rule-development-kit/index.md",tags:[{label:"RDK",permalink:"/idn/tags/rdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:3,frontMatter:{id:"rdk",title:"Rule Development Kit",pagination_label:"RDK",sidebar_label:"Rule Development Kit",sidebar_position:3,sidebar_class_name:"rdk",keywords:["rule","development","kit"],description:"The SailPoint Rule Development Kit is a project that enables you to develop rules more quickly and easily.",slug:"/tools/rule-development-kit",tags:["RDK"]},sidebar:"sdkSidebar",previous:{title:"Error Handling",permalink:"/idn/tools/sdk/typescript/error-handling"}},o={},u=[{value:"Start Using the Rule Development Kit",id:"start-using-the-rule-development-kit",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Clone the project",id:"clone-the-project",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Install depedencies",id:"install-depedencies",level:2},{value:"Create your new rule",id:"create-your-new-rule",level:2},{value:"Import the classes and initialize the objects the rule needs",id:"import-the-classes-and-initialize-the-objects-the-rule-needs",level:2},{value:"Write your rule logic",id:"write-your-rule-logic",level:2},{value:"Convert the rule to XML format",id:"convert-the-rule-to-xml-format",level:2},{value:"Copy over imports for the rule",id:"copy-over-imports-for-the-rule",level:3},{value:"Copy the rule logic",id:"copy-the-rule-logic",level:3},{value:"Add your return statement",id:"add-your-return-statement",level:3},{value:"Testing rules",id:"testing-rules",level:2},{value:"Create your test class",id:"create-your-test-class",level:3},{value:"Configure the logging and rule file",id:"configure-the-logging-and-rule-file",level:3},{value:"Setup the BeanShell interpreter",id:"setup-the-beanshell-interpreter",level:3},{value:"Mock the objects and return the mocked data",id:"mock-the-objects-and-return-the-mocked-data",level:3},{value:"Pass the mocked objects into the interpreter",id:"pass-the-mocked-objects-into-the-interpreter",level:3},{value:"Evaluate the rule",id:"evaluate-the-rule",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Run Maven test",id:"run-maven-test",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"start-using-the-rule-development-kit"},"Start Using the Rule Development Kit"),(0,r.kt)("p",null,"The SailPoint Rule Development Kit (RDK) is a project you can use to develop rules more quickly and easily. "),(0,r.kt)("p",null,"In SailPoint solutions, rules serve as flexible configuration frameworks implementers can leverage to preform complex or advanced configurations. To learn more about them, refer to ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules"},"Rules"),"."),(0,r.kt)("p",null,"The RDK provides you with the available classes and methods available when you're developing a rule. You can mock out these classes and run your rule locally to test your logic before submitting it for review."),(0,r.kt)("p",null,"Learn how to use the SailPoint RDK in this guide."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html"},"Java 11")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Apache Maven 3.9.3+"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.appsdeveloperblog.com/how-to-install-maven-on-mac-os/"},"Mac OS installation guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://phoenixnap.com/kb/install-maven-windows"},"Windows installation guide"))))),(0,r.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,r.kt)("p",null,"You can find the RDK and its examples in the Github repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/rule-development-kit"},"here"),"."),(0,r.kt)("p",null,"To get started, clone the project. "),(0,r.kt)("p",null,"To clone the project, you can run this command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:sailpoint-oss/rule-development-kit.git\n")),(0,r.kt)("h2",{id:"project-structure"},"Project structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u251c\u2500\u2500 main/\n\u2502   \u251c\u2500\u2500 java/\n\u2502   \u2502   \u2514\u2500\u2500 RuleName.java\n\u2502   \u2514\u2500\u2500 resources/\n\u2502       \u2514\u2500\u2500 rules/\n\u2502           \u2514\u2500\u2500 Rule - RuleType - RuleName.xml\n\u2514\u2500\u2500 test/\n    \u251c\u2500\u2500 java/\n    \u2502   \u2514\u2500\u2500 sailpoint/\n    \u2502       \u2514\u2500\u2500 RuleNameTest.java\n    \u2514\u2500\u2500 resources/\n        \u2514\u2500\u2500 log4j2.properties\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/main/java/"))," Use this folder to develop your rules before putting them into the rule XML format. Import objects as needed from ",(0,r.kt)("inlineCode",{parentName:"p"},"sailpoint.*"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/main/resources/rules/"))," Use this folder to store your rules in the XML format you would expect to upload to IdentityNow (IDN).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/test/java/sailpoint/"))," Use this folder for test classes to test your rules."))),(0,r.kt)("h2",{id:"install-depedencies"},"Install depedencies"),(0,r.kt)("p",null,"Install all the required dependencies by running Maven install in the root of the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install\n")),(0,r.kt)("p",null,"You now have all the necessary components to start writing rules locally."),(0,r.kt)("h2",{id:"create-your-new-rule"},"Create your new rule"),(0,r.kt)("p",null,"To get syntax highlighting and the features from the IDE, this guide shows how to write the rule in native Java and move it over to the XML format needed when you're storing it in IdentityNow (IDN)."),(0,r.kt)("p",null,"This guide will walk through an example of how to duplicate writing the 'Username Generator' rule that ships with the RDK."),(0,r.kt)("p",null,"Create a new Java class under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java"),", called ",(0,r.kt)("inlineCode",{parentName:"p"},"UsernameGenerator"),"."),(0,r.kt)("h2",{id:"import-the-classes-and-initialize-the-objects-the-rule-needs"},"Import the classes and initialize the objects the rule needs"),(0,r.kt)("p",null,"Each rule type has inputs provided to the rule. You can view available inputs for each rule type by clicking the rule type ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules/cloud-rules#supported-cloud-rules"},"here"),"."),(0,r.kt)("p",null,"The 'Username Generator' rule uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"AttributeGenerator")," rule type. See ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator#input"},"Attribute Generator")," for the available inputs."),(0,r.kt)("p",null,"In your IDE, import the classes needed, and initialize these inputs within your newly created class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\n\npublic class UsernameGenerator {\n    Logger log = LogManager.getLogger(UsernameGenerator.class);\n    Identity identity = new Identity();\n    Application application = new Application();\n    IdnRuleUtil idn;\n    Field field = new Field();\n}\n")),(0,r.kt)("h2",{id:"write-your-rule-logic"},"Write your rule logic"),(0,r.kt)("p",null,"You can see the completed code for the 'Username Generator' in the following code. If you want to dive deeper into how this rule was written, follow ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules/guides/your-first-rule"},"this guide"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Completed Username Generator Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\npublic class UsernameGenerator {\n    Logger log = LogManager.getLogger(UsernameGenerator.class);\n    Identity identity = new Identity();\n    Application application = new Application();\n    IdnRuleUtil idn;\n    Field field = new Field();\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n}\n'))),(0,r.kt)("h2",{id:"convert-the-rule-to-xml-format"},"Convert the rule to XML format"),(0,r.kt)("p",null,"The final step required before you can test your rule is converting it to XML format. These XML files are stored under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/main/resources/rules")," directory in the RDK. You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"AttributeGenerator")," template file ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator#template"},"here"),". "),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"Example Rule")," with the preferred name of your rule, and add a short description."),(0,r.kt)("h3",{id:"copy-over-imports-for-the-rule"},"Copy over imports for the rule"),(0,r.kt)("p",null,"Copy over the imports the rule needs. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h3",{id:"copy-the-rule-logic"},"Copy the rule logic"),(0,r.kt)("p",null,"Copy the logic of your rule inside the class you created earlier. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't include your initialized variables for the inputs to the rule. These variables will be passed into the rule during runtime.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h3",{id:"add-your-return-statement"},"Add your return statement"),(0,r.kt)("p",null,"This line calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateUsername")," function and starts to execute the rule. The result will be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"return generateUsername( identity.getFirstname(), identity.getLastname() );\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Complete XML Rule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.log4j.LogManager;\nimport org.apache.log4j.Logger;\nimport sailpoint.object.Application;\nimport sailpoint.object.Field;\nimport sailpoint.object.Identity;\nimport sailpoint.server.IdnRuleUtil;\nimport sailpoint.tools.GeneralException;\n\n\n    int MAX_USERNAME_LENGTH = 12;\n\n\n    public String generateUsername(String firstName, String lastName) throws GeneralException {\n        firstName = StringUtils.trimToNull(firstName);\n        lastName = StringUtils.trimToNull(lastName);\n        String otherName = identity.getStringAttribute("otherName");\n\n        if(firstName != null) {\n            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(lastName != null) {\n            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if(otherName != null) {\n            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");\n        }\n\n        if((firstName == null) || (lastName == null)) {\n            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );\n            return null;\n        }\n\n        if(!StringUtils.isEmpty(otherName)) {\n            firstName = otherName;\n        }\n\n        String username = null;\n        String fullName = firstName + "." + lastName;\n\n        if(fullName.length() > MAX_USERNAME_LENGTH) {\n            int firstNameLength = firstName.length();\n\n            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        } else {\n            username = fullName;\n            username = username.toLowerCase();\n            if (isUnique(username)) {\n                log.debug( "AD Create User Name | Unique username generated: " + username);\n                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                return username;\n            } else {\n                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {\n                    username = firstName + "." + lastName.charAt(lastNameLength);\n                    username = username.toLowerCase();\n                    if (isUnique(username)) {\n                        log.debug( "AD Create User Name | Unique username generated: " + username);\n                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );\n                        return username;\n                    }\n                }\n            }\n        }\n\n\n\n        return null;\n    }\n\n    public boolean isUnique(String username) throws GeneralException {\n        return !idn.accountExistsByDisplayName(application.getName(), username);\n    }\n\n    return generateUsername( identity.getFirstname(), identity.getLastname() );\n\n  ]]></Source>\n</Rule>\n'))),(0,r.kt)("p",null,"Once your rule is saved in the XML format, you can begin testing."),(0,r.kt)("h2",{id:"testing-rules"},"Testing rules"),(0,r.kt)("p",null,"Before submitting your rule for review, it's essential that you test it. You can use the RDK to do so. "),(0,r.kt)("p",null,"By default, the RDK uses the ",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"},"Mockito")," library to mock objects and return mocked results for testing your rule logic. "),(0,r.kt)("h3",{id:"create-your-test-class"},"Create your test class"),(0,r.kt)("p",null,"Create a new class at ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/test/java/sailpoint")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"UsernameGeneratorTest"),". This class will serve as your test class. "),(0,r.kt)("h3",{id:"configure-the-logging-and-rule-file"},"Configure the logging and rule file"),(0,r.kt)("p",null,"Create a logger instance with the name of your test class and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"RULE_FILENAME")," to the rule you want to test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Logger log = LogManager.getLogger(UsernameGeneratorTest.class);\n\nprivate static final String RULE_FILENAME = "src/main/resources/rules/Rule - AttributeGenerator - UsernameGenerator.xml";\n')),(0,r.kt)("h3",{id:"setup-the-beanshell-interpreter"},"Setup the BeanShell interpreter"),(0,r.kt)("p",null,"Initialize the BeanShell interpreter for evaluating the rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Interpreter i = new Interpreter();\n")),(0,r.kt)("h3",{id:"mock-the-objects-and-return-the-mocked-data"},"Mock the objects and return the mocked data"),(0,r.kt)("p",null,"Anywhere your rule uses data from IDN, you will need to mock out those objects. In the 'Username Generator' example, the objects used are ",(0,r.kt)("inlineCode",{parentName:"p"},"IdnRuleUtil"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'IdnRuleUtil idn = mock();\nwhen(idn.accountExistsByDisplayName(any(), any())).thenReturn(true).thenReturn(false);\n\nApplication application = mock(Application.class);\nwhen(application.getName()).thenReturn("applicationName");\n\nIdentity identity = mock(Identity.class);\nwhen(identity.getFirstname()).thenReturn("Tyler");\nwhen(identity.getLastname()).thenReturn("Smith");\nwhen(identity.getStringAttribute("otherName")).thenReturn("");\n')),(0,r.kt)("h3",{id:"pass-the-mocked-objects-into-the-interpreter"},"Pass the mocked objects into the interpreter"),(0,r.kt)("p",null,"Pass the variables you mocked so that when the rule uses these objects, they return your mocked values. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'i.set("log", log);\ni.set("idn", idn);\ni.set("application", application);\ni.set("identity", identity);\n')),(0,r.kt)("h3",{id:"evaluate-the-rule"},"Evaluate the rule"),(0,r.kt)("p",null,"Use BeanShell to evaluate the rule to get your rule result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String source = RuleXmlUtils.readRuleSourceFromFilePath(RULE_FILENAME);\nresult = (String) i.eval(source);\n")),(0,r.kt)("h3",{id:"assertions"},"Assertions"),(0,r.kt)("p",null,"Add assertions to your test class to validate that when your rule is given certain inputs, it returns your expected result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'assertNotNull(result);\nassertEquals(result, "tyler.s");\n')),(0,r.kt)("h3",{id:"run-maven-test"},"Run Maven test"),(0,r.kt)("p",null,"To run the test with Maven, open the terminal and in the root of the project, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mvn test -Dtest="UsernameGeneratorTest"\n')),(0,r.kt)("p",null,"Run all tests in the tests directory: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn test\n")),(0,r.kt)("p",null,"When your test runs, you will see the output of your logs. These logs can help when you're writing logic and debugging."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running sailpoint.UsernameGeneratorTest\n13:02:18.229 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Unique username generated: tyler.s\n13:02:18.233 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Exit from the  GenerateUsername Method\n13:02:18.237 [main] INFO  sailpoint.UsernameGeneratorTest - Beanshell script returned: tyler.s\n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.912 s -- in sailpoint.UsernameGeneratorTest\n[INFO] \n[INFO] Results:\n[INFO] \n[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\n[INFO] \n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  5.046 s\n[INFO] Finished at: 2023-08-01T13:02:18-04:00\n[INFO] ------------------------------------------------------------------------\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Have an issue using the RDK? Reach out to us on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/rule-development-kit/issues"},"here")),(0,r.kt)("p",null,"Discuss the tool and other rule-specific topics in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/"},"SailPoint Developer Community"),"."))}d.isMDXComponent=!0}}]);