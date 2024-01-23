"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66383],{2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(87462),i=(n(67294),n(3905));const a={id:"testing",title:"Testing",pagination_label:"Testing",sidebar_label:"Testing",sidebar_position:7,sidebar_class_name:"testing",keywords:["connectivity","connectors","testing"],description:"Testing SaaS Connectivity.",slug:"/docs/saas-connectivity/in-depth/testing",tags:["Connectivity"]},o=void 0,r={unversionedId:"docs/identity-now/saas-connectivity/in-depth/testing",id:"docs/identity-now/saas-connectivity/in-depth/testing",title:"Testing",description:"Testing SaaS Connectivity.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/testing.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/testing",permalink:"/idn/docs/saas-connectivity/in-depth/testing",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/testing.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:7,frontMatter:{id:"testing",title:"Testing",pagination_label:"Testing",sidebar_label:"Testing",sidebar_position:7,sidebar_class_name:"testing",keywords:["connectivity","connectors","testing"],description:"Testing SaaS Connectivity.",slug:"/docs/saas-connectivity/in-depth/testing",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Handling Rate Limits",permalink:"/idn/docs/saas-connectivity/in-depth/handling-rate-limits"},next:{title:"Access Intelligence Center",permalink:"/idn/docs/access-intelligence-center"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Testing Techniques",id:"testing-techniques",level:2},{value:"Test a method and evaluate the response using <code>expect</code>",id:"test-a-method-and-evaluate-the-response-using-expect",level:3},{value:"Test a method to ensure it calls another method using <code>spyOn</code>",id:"test-a-method-to-ensure-it-calls-another-method-using-spyon",level:3},{value:"Setting up Mock Services",id:"setting-up-mock-services",level:2},{value:"Define json mock objects",id:"define-json-mock-objects",level:3},{value:"Use the mock in your tests",id:"use-the-mock-in-your-tests",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"When you set up a new project, the following test files are created: ",(0,i.kt)("inlineCode",{parentName:"p"},"index.spec.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"my-client.spec.ts"),". Execute the tests immediately using npm test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run test\n\n> test-project-5@0.1.0 test\n> jest --coverage\n\n PASS  src/my-client.spec.ts\n PASS  src/index.spec.ts\n--------------|---------|----------|---------|---------|-------------------\nFile          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s\n--------------|---------|----------|---------|---------|-------------------\nAll files     |      72 |      100 |      75 |   70.83 |\n index.ts     |   56.25 |      100 |      50 |   53.33 | 29-56\n my-client.ts |     100 |      100 |     100 |     100 |\n--------------|---------|----------|---------|---------|-------------------\n\nTest Suites: 2 passed, 2 total\nTests:       7 passed, 7 total\nSnapshots:   0 total\nTime:        1.937 s\nRan all test suites.\n{"level":"INFO","message":"Running test connection"}\n')),(0,i.kt)("p",null,"You can also view the results in an html report by viewing the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"coverage/lcov-report")," folder:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account List",src:n(11044).Z,width:"828",height:"286"})," ",(0,i.kt)("img",{alt:"Account List",src:n(67756).Z,width:"845",height:"793"})),(0,i.kt)("h2",{id:"testing-techniques"},"Testing Techniques"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started"},"Jest")," is a testing framework provided for javascript that focuses on simplicity. CLI includes it when it generates the project. It is recommended to use Jest to test your code."),(0,i.kt)("p",null,"Testing your code is important because it can highlight implementation issues before they get into production. If your tests are setup with good descriptions, the tests can also help explain why certain conditions are important in the code, so if a new developer breaks a test, he or she will know what broke and why the functionality is important."),(0,i.kt)("p",null,"If you have good tests setup, then you can quickly identify and fix changes or updates that occur in dependent sources."),(0,i.kt)("p",null,"Jest provides ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/using-matchers"},"many different ways to test your code"),". Some techniques are listed below:"),(0,i.kt)("h3",{id:"test-a-method-and-evaluate-the-response-using-expect"},"Test a method and evaluate the response using ",(0,i.kt)("inlineCode",{parentName:"h3"},"expect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"it('get users populates correct fields', async () => {\n  // Execute the method\n  let res = await discourseClient.getUsers();\n\n  // Check the response, and make sure it is an array with exactly 2 elements\n  expect(res.length).toBe(2);\n\n  // Evaluate the response email and ensure it matches the expected result\n  expect(res[0].email === 'test.test@test.com');\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 4 executes the method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 7 asserts that the response is an array with 2 elements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 10 evaluates the email field in the array to ensure it matches the expected result."))),(0,i.kt)("h3",{id:"test-a-method-to-ensure-it-calls-another-method-using-spyon"},"Test a method to ensure it calls another method using ",(0,i.kt)("inlineCode",{parentName:"h3"},"spyOn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'  it(\'password is generated when not provided\', async () => {\n\n    // Create the spy for later use. We want to know details about this method.\n    const spy = jest.spyOn(DiscourseClient.prototype as any, "generateRandomPassword")\n\n    // Execute the method\n    let res = await discourseClient.createUser({ "email": "", "username": "test" })\n\n    // Validate that the internal method "generateRandomPassword" was called\n    expect(spy).toBeCalled();\n\n    // Validate the email field matches the expected result\n    expect(res.email === \'test.test@test.com\')\n  })\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 4 sets up the spy. \u201cgenerateRandomPassword\u201d is an internal method that gets called when the password is not provided.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 7 executes the method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Line 10 checks the spy to ensure that the internal method was called."))),(0,i.kt)("h2",{id:"setting-up-mock-services"},"Setting up Mock Services"),(0,i.kt)("p",null,"The easiest way to mock your client is to set up a mock service that returns data just like your service would in production so you can test all your functions and data manipulation in your unit tests."),(0,i.kt)("p",null,"Mocks help test your code without actually invoking your service and allow you to simulate the kind of response your client expects to receive. They can also help you pinpoint where failures occur in case something changes on your service. By using a mock service, you can test your entire application without connecting to your service."),(0,i.kt)("p",null,"Create a mock file Jest provides a way to set up a mock service. It stores your mock files in a folder called ","_","_","mocks","_","_",". If you name your typescript files the exact same as the files they are mocking, those mock implementations will be called instead when your unit tests are running. In the following example, a mock has been created to simulate calls to the airtable client:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/__mocks__/airtable.ts"},"airtable.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { AttributeChange, CompoundKeyType, ConnectorError, ConnectorErrorType, SimpleKeyType, StdAccountCreateInput, StdAccountDiscoverSchemaOutput } from "@sailpoint/connector-sdk"\nimport { AirtableAccount } from "../models/AirtableAccount"\nimport { AirtableEntitlement } from "../models/AirtableEntitlement"\nimport { InvalidConfigurationError } from "../errors/invalid-configuration-error"\nimport accountJson from "./account.json"\nimport entitlementJson from "./entitlement.json"\nimport schemaJson from "./schema.json"\n\nexport class AirtableClient {\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        // Following properties actually do not exist in the config -- it just serves as an example.\n        if (config.apiKey == null) {\n            throw new InvalidConfigurationError(\'token must be provided from config\')\n        }\n        if (config.airtableBase == null) {\n            throw new InvalidConfigurationError(\'airtableBase base id needed\')\n        }\n    }\n\n    async getAllAccounts(): Promise<AirtableAccount[]> {\n        const recordArray: Array<AirtableAccount> = []\n        const account = Object.assign(new AirtableAccount(), accountJson)\n        recordArray.push(account)\n        return recordArray\n    }\n\n    async changeAccount(account: AirtableAccount, changes: AttributeChange): Promise<AirtableAccount> {\n        account.updateFieldByName(changes.attribute, changes.value, changes.op)\n\n        return account\n    }\n\n    async getAllEntitlements(): Promise<AirtableEntitlement[]> {\n\n            const recordArray: Array<AirtableEntitlement> = []\n            const entitlement = Object.assign(new AirtableEntitlement(), entitlementJson)\n            recordArray.push(entitlement)\n            return recordArray\n\n    }\n\n    async getAccount(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableAccount> {\n        const id = <SimpleKeyType>identity\n\n        const account = Object.assign(new AirtableAccount(), accountJson)\n        if (id.simple.id === "1234") {\n            return account\n        } else {\n            throw new ConnectorError("Account not found", ConnectorErrorType.NotFound)\n        }\n\n    }\n\n    async getAccountSchema(): Promise<StdAccountDiscoverSchemaOutput> {\n            return schemaJson\n    }\n\n    async deleteAccount(airTableid: string): Promise<Record<string, never>> {\n        return {}\n    }\n\n    async createAccount(input: StdAccountCreateInput): Promise<AirtableAccount> {\n        return Object.assign(new AirtableAccount(), accountJson)\n    }\n\n    async getEntitlement(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableEntitlement> {\n            return Object.assign(new AirtableEntitlement(), entitlementJson)\n    }\n\n    async testConnection(): Promise<any> {\n        return {}\n    }\n}\n')),(0,i.kt)("p",null,'The method signatures are exactly the same on this mock file as the signature sin the "real" ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts"),". The only difference is that the response objects from all the calls are made without actually calling any external dependencies, so it can be run quickly in a unit test without having to make api calls to a real client"),(0,i.kt)("h3",{id:"define-json-mock-objects"},"Define json mock objects"),(0,i.kt)("p",null,"The responses are stored in directly imported json files. This helps keep the code focused on the logic and allows the response objects to be more easily generated directly from a tool like Postman without requiring any major formatting of the response. Enable this situation by setting ",(0,i.kt)("inlineCode",{parentName:"p"},'"resolveJsonModule": true')," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". The following response file is an example:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/__mocks__/account.json"},"account.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "airtableId": "1234",\n  "displayName": "Test User",\n  "email": "test@test.com",\n  "id": "1234",\n  "enabled": true,\n  "locked": false,\n  "department": "accounting",\n  "firstName": "test",\n  "lastName": "user",\n  "password": "password1234",\n  "entitlments": ["ent1", "ent2"]\n}\n')),(0,i.kt)("h3",{id:"use-the-mock-in-your-tests"},"Use the mock in your tests"),(0,i.kt)("p",null,"The mock is defined in the test file, and Jest does the rest. Jest overrides all the calls to use the methods in the ",(0,i.kt)("inlineCode",{parentName:"p"},"__mocks__")," folder."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/test/index.spec.ts"},"index.spec.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {connector} from '../src/index';\nimport {StandardCommand} from '@sailpoint/connector-sdk';\nimport {PassThrough} from 'stream';\n\n// setup your mock object\njest.mock('../src/airtable');\n")))}u.isMDXComponent=!0},11044:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/testing1-35e5b9a59e89daa364b1caa0d46ccf39.png"},67756:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/testing2-f9c4702bc532d2f2f01c62addc4c840a.png"}}]);