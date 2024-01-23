"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[74697],{31193:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var l=i(87462),n=(i(67294),i(3905));const a={id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/docs/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},o="UI Elements",s={unversionedId:"docs/identity-iq/plugin-developer-guide/chapter-5/plugin-ui-elements",id:"docs/identity-iq/plugin-developer-guide/chapter-5/plugin-ui-elements",title:"UI Elements",description:"IdentityIQ Plugin UI Elements",source:"@site/products/iiq/docs/identity-iq/plugin-developer-guide/chapter-5/index.md",sourceDirName:"docs/identity-iq/plugin-developer-guide/chapter-5",slug:"/docs/plugin-developer-guide/ui-elements",permalink:"/iiq/docs/plugin-developer-guide/ui-elements",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/iiq/docs/identity-iq/plugin-developer-guide/chapter-5/index.md",tags:[{label:"plugin",permalink:"/iiq/tags/plugin"},{label:"guide",permalink:"/iiq/tags/guide"},{label:"identityiq",permalink:"/iiq/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1706037593,formattedLastUpdatedAt:"Jan 23, 2024",sidebarPosition:5,frontMatter:{id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/docs/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},sidebar:"idnDocs",previous:{title:"Database Scripts",permalink:"/iiq/docs/plugin-developer-guide/database-scripts"},next:{title:"XML Artifacts",permalink:"/iiq/docs/plugin-developer-guide/xml-artifacts"}},r={},d=[],p={toc:d},u="wrapper";function g(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ui-elements"},"UI Elements"),(0,n.kt)("p",null,"Most plugins will have some additional UI component that will display in IdentityIQ. You can use images, CSS files, HTML templates, and JavaScript to provide the interactions and views required by the plugin. Plugins using a ",(0,n.kt)("inlineCode",{parentName:"p"},"fullPage")," element will look for a file called 'page.xhtml' in the build. "),(0,n.kt)("p",null,":::Note"),(0,n.kt)("p",null,"Any css installed with the plugin will apply to all elements in IdentityIQ. For this reason it is recommended that developers keep their css classes specific to their plugin."),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,"The 'page.xhtml' in the 'Todo' example is configured to allow for the input of a new Todo and display all current Todos in the system. The Angular controller used in 'page.xhtml' and all the functions available to the controller are defined in 'TodoModule.js' (located in the '/ui/js' folder)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Create the module.\n */\nvar todoModule = angular.module('TodoList', ['ui.bootstrap']);\n/**\n * Controller for the todo list.\n */\ntodoModule.controller('TodoController', function(todoService, pageConfigService, $q, $uibModal) {\n    var me = this,\n        promises;\n    /**\n     * @property Array The todos for a user.\n     */\n    me.todos = [];\n/***\n* Lines omitted for clarity\n***/\n/**\n * Shows the flagged users modal dialog.\n */\nme.viewFlaggedUsers = function() {\n    $uibModal.open({\n        animation: false,\n        controller: 'FlaggedUsersCtrl as ctrl',\n        templateUrl: PluginHelper.getPluginFileUrl('TodoPlugin', 'ui/html/flagged-template.html')\n    });\n};\n")),(0,n.kt)("p",null,"The 'TodoController' controller (and available methods) can then be referenced in ",(0,n.kt)("inlineCode",{parentName:"p"},"page.xhtml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ui:composition>\n    <div class="container" ng-app="TodoList" ng-controller="TodoController as ctrl">\n        <div class="row m-t" ng-if="ctrl.pageConfig.showFlagged">\n           <button class="btn btn-danger pull-right" ng-click="ctrl.viewFlaggedUsers()">Flagged Users</button>\n        </div>\n        <div class="row m-t">\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Line 2")," - shows the angular controller ",(0,n.kt)("inlineCode",{parentName:"li"},"ng-controller")," defined as 'TodoController' from ",(0,n.kt)("strong",{parentName:"li"},"line 8")," of 'TodoModule.js'."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Line 4")," - example of accessing controller method ",(0,n.kt)("inlineCode",{parentName:"li"},"viewFlaggedUsers")," from ",(0,n.kt)("strong",{parentName:"li"},"line 21")," of 'TodoModule.js'.")),(0,n.kt)("p",null,"This example demonstrates how to use the Angular concept of the modal within a plugin. In the 'Todo' plugin, if the user clicks the 'Flagged Users' button as defined on the ",(0,n.kt)("inlineCode",{parentName:"p"},"fullPage"),", it will switch context to the page defined by the ui/",(0,n.kt)("inlineCode",{parentName:"p"},"html/flagged-template.html"),", and swap the AngularJS controller to ",(0,n.kt)("inlineCode",{parentName:"p"},"FlaggedUserCtrl"),". The behavior of this modal dialogue is essentially the same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"fullPage")," 'page.xhtml' - it accesses information by the controller, which may rely on backend Java classes to produce data. Notice that to reference the .html template for the flagged users, the example uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"PluginHelper")," classes' method ",(0,n.kt)("inlineCode",{parentName:"p"},"getPluginFileUrl")," - this allows for fetching the plugin resource by a relative path as it would display in the installed .zip archive. "),(0,n.kt)("p",null,"One last aspect to remember for the ",(0,n.kt)("inlineCode",{parentName:"p"},"page.xhtml")," is the necessity to include references to the JavaScript packages the plugin will use. Use this path to reference the packages: ",(0,n.kt)("inlineCode",{parentName:"p"},"#{plugins.requestContextPath}/plugin/<Plugin Name>/path/to/js/files.js"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/angular.min.js"><\/script>\n    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/ui-bootstrap.min.js"><\/script>\n    <script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/TodoModule.js"><\/script>\n')),(0,n.kt)("p",null,"The path to the page would be the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"{serverpath}/plugins/pluginPage.jsf?pn={PluginName}"),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"PluginName")," is the name of your plugin, as specified in the manifest, and ",(0,n.kt)("inlineCode",{parentName:"p"},"serverpath")," is the path to your server."))}g.isMDXComponent=!0}}]);