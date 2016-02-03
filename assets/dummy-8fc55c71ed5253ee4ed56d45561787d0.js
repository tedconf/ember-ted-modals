"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var d=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,n){var a=require("highlight.js");e["default"]=t["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,a=e.split("\n"),r=0;r<a.length;r++)t=/^\s*/.exec(a[r]),t&&("undefined"==typeof n||n>t[0].length)&&(n=t[0].length);return"undefined"!=typeof n&&n>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+n+"}","g"),"$1")),e},source:t["default"].computed("name",function(){return this._unindent((n["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){a.highlightBlock(this.get("element"))},language:t["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss"}})})}),define("dummy/components/ember-modal-dialog-positioned-container",["exports","ember-modal-dialog/components/positioned-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/modal-dialog-overlay",["exports","ember-modal-dialog/components/modal-dialog-overlay"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/modal-dialog",["exports","ember-modal-dialog/components/modal-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ted-modal-body",["exports","ember-ted-modals/components/ted-modal-body"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ted-modal-footer",["exports","ember-ted-modals/components/ted-modal-footer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ted-modal-header",["exports","ember-ted-modals/components/ted-modal-header"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ted-modal",["exports","ember-ted-modals/components/ted-modal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ted-page-header",["exports","ember-ted-docs/components/ted-page-header"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/tether-dialog",["exports","ember-modal-dialog/components/tether-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/add-modals-container",["exports","ember-modal-dialog/initializers/add-modals-container"],function(e,t){e["default"]={name:"add-modals-container",initialize:t["default"]}}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/pods/application/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/pods/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(e.childAt(t,[2]),1,1),e.insertBoundary(t,0),a},statements:[["inline","ted-page-header",[],["subheading","Ember","slim-heading","TED","strong-heading","Modals","byline","Modal components, styled and mobile-first","github","http://github.com/tedconf/ember-ted-modals"],["loc",[null,[1,0],[6,55]]]],["content","outlet",["loc",[null,[9,2],[9,12]]]]],locals:[],templates:[]}}())}),define("dummy/pods/index/controller",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({isShowingModal:!1,actions:{toggleIsShowingModal:function(){this.toggleProperty("isShowingModal")}}})}),define("dummy/pods/index/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:22,column:4},end:{line:25,column:4}},moduleName:"dummy/pods/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Would you like to present the stage on this device?");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("If you do, you can get back here by pressing the Back button.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:27,column:4},end:{line:30,column:4}},moduleName:"dummy/pods/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"href","#"),e.setAttribute(n,"class","btn btn-link");var a=e.createTextNode("Cancel");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"href","#"),e.setAttribute(n,"class","btn btn-primary pull-right");var a=e.createTextNode("Present stage");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=e.childAt(t,[3]),d=new Array(2);return d[0]=e.createElementMorph(a),d[1]=e.createElementMorph(r),d},statements:[["element","action",["toggleIsShowingModal"],[],["loc",[null,[28,18],[28,51]]]],["element","action",["presentStage"],[],["loc",[null,[29,18],[29,43]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:19,column:2},end:{line:31,column:2}},moduleName:"dummy/pods/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["inline","ted-modal-header",[],["title","Present stage","close","toggleIsShowingModal"],["loc",[null,[20,4],[20,75]]]],["block","ted-modal-body",[],[],0,null,["loc",[null,[22,4],[25,23]]]],["block","ted-modal-footer",[],[],1,null,["loc",[null,[27,4],[30,25]]]]],locals:[],templates:[e,t]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:18,column:0},end:{line:32,column:0}},moduleName:"dummy/pods/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","ted-modal",[],["close","toggleIsShowingModal"],0,null,["loc",[null,[19,2],[31,16]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:32,column:7}},moduleName:"dummy/pods/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Requirements");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("This addon requires the following addons be installed:");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("Ember CLI Sass");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createElement("a");e.setAttribute(r,"href","https://github.com/tedconf/ember-cli-ted-bootstrap");var d=e.createTextNode("Ember CLI TED Bootstrap");e.appendChild(r,d),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createElement("a");e.setAttribute(r,"href","https://github.com/yapplabs/ember-modal-dialog/");var d=e.createTextNode("Ember Modal Dialog");e.appendChild(r,d),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createTextNode("ember install ember-cli-sass\nember install ember-cli-ted-bootstrap\nember install ember-modal-dialog");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Installation");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("pre"),a=e.createTextNode("ember install ember-ted-modals");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Usage");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"class","btn btn-primary");var a=e.createTextNode("Show me a modal!");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[14]),r=new Array(2);return r[0]=e.createElementMorph(a),r[1]=e.createMorphAt(t,16,16,n),e.insertBoundary(t,null),r},statements:[["element","action",["toggleIsShowingModal"],[],["loc",[null,[16,8],[16,41]]]],["block","if",[["get","isShowingModal",["loc",[null,[18,6],[18,20]]]]],[],0,null,["loc",[null,[18,0],[32,7]]]]],locals:[],templates:[e]}}())}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/modal-dialog",["exports","ember-modal-dialog/services/modal-dialog"],function(e,t){e["default"]=t["default"]}),define("dummy/snippets",["exports"],function(e){e["default"]={}}),define("dummy/templates/components/code-snippet",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-snippet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","source",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/modal-dialog",["exports","ember-modal-dialog/templates/components/modal-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/components/ted-page-header",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:7,column:2},end:{line:11,column:2}},moduleName:"dummy/templates/components/ted-page-header.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"class","tph-Banner__link pull-right");var a=e.createTextNode("\n    GitHub\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(1);return r[0]=e.createAttrMorph(a,"href"),r},statements:[["attribute","href",["concat",[["get","github",["loc",[null,[8,13],[8,19]]]]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:24,column:0}},moduleName:"dummy/templates/components/ted-page-header.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","tph-Banner container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://tedconf.github.io/"),e.setAttribute(a,"class","tph-Banner__link");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("img");e.setAttribute(r,"class","tph-Banner__ted-logo"),e.setAttribute(r,"src","ember-ted-docs/images/ted-a8a21ac3b1ddc03b6aa53267b70944f0.png"),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","tph-Banner__slim-logo");var d=e.createTextNode("Open");e.appendChild(r,d),e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","tph-Banner__strong-logo");var d=e.createTextNode("Source");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("header");e.setAttribute(n,"class","tph-Header");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1");e.setAttribute(r,"class","tph-Header__subheading");var d=e.createComment("");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1");e.setAttribute(r,"class","tph-Header__heading");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("span");e.setAttribute(d,"class","tph-Header__slim-heading");var l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createElement("span");e.setAttribute(d,"class","tph-Header__strong-heading");var l=e.createComment("");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p");e.setAttribute(r,"class","tph-Header__text");var d=e.createComment("");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1]),r=e.childAt(a,[3]),d=new Array(6);return d[0]=e.createMorphAt(e.childAt(t,[0]),3,3),d[1]=e.createMorphAt(e.childAt(a,[1]),0,0),d[2]=e.createMorphAt(e.childAt(r,[1]),0,0),d[3]=e.createMorphAt(e.childAt(r,[2]),0,0),d[4]=e.createMorphAt(e.childAt(a,[5]),0,0),d[5]=e.createMorphAt(a,7,7),d},statements:[["block","if",[["get","github",["loc",[null,[7,8],[7,14]]]]],[],0,null,["loc",[null,[7,2],[11,9]]]],["content","subheading",["loc",[null,[16,39],[16,53]]]],["content","slim-heading",["loc",[null,[18,45],[18,61]]]],["content","strong-heading",["loc",[null,[18,109],[18,127]]]],["content","byline",["loc",[null,[20,32],[20,42]]]],["content","yield",["loc",[null,[21,4],[21,13]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/tether-dialog",["exports","ember-modal-dialog/templates/components/tether-dialog"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-ted-modals",version:"0.1.0+99925481"});