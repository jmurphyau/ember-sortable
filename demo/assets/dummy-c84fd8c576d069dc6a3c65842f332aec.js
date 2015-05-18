define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/sortable-group",["exports","ember-sortable/components/sortable-group"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/sortable-item",["exports","ember-sortable/components/sortable-item"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var l=a(d.toString());n["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});e["default"]=a.map(function(){})}),define("dummy/routes/application",["exports","ember"],function(e,t){"use strict";var n=t["default"].A,a=t["default"].set,r=n;e["default"]=t["default"].Route.extend({model:function(){return{items:r(["Uno","Dos","Tres","Cuatro","Cinco"])}},actions:{update:function(e,t){a(e,"items",r(t))}}})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.0.0-beta.1+canary.28d4c06a",loc:{source:null,start:{line:8,column:6},end:{line:11,column:6}}},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","handle");var a=e.createTextNode("⇕");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","item"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1+canary.28d4c06a",loc:{source:null,start:{line:7,column:4},end:{line:12,column:4}}},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","sortable-item",[],["tagName","li","model",["subexpr","@mut",[["get","item"]],[]],"group",["subexpr","@mut",[["get","group"]],[]],"handle",".handle"],0,null]],locals:["item"],templates:[e]}}();return{meta:{revision:"Ember@2.0.0-beta.1+canary.28d4c06a",loc:{source:null,start:{line:6,column:2},end:{line:13,column:2}}},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","each",[["get","model.items"]],[],0,null]],locals:["group"],templates:[e]}}(),t=function(){return{meta:{revision:"Ember@2.0.0-beta.1+canary.28d4c06a",loc:{source:null,start:{line:20,column:6},end:{line:22,column:6}}},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","item"]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@2.0.0-beta.1+canary.28d4c06a",loc:{source:null,start:{line:1,column:0},end:{line:30,column:0}}},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("Ember Sortable");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("main"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("footer"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("code"),d=e.createTextNode("\n      model.items:");e.appendChild(r,d);var d=e.createElement("br");e.appendChild(r,d);var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/jgwhite/ember-sortable");var d=e.createTextNode("View on GitHub");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[2]),1,1),a[1]=e.createMorphAt(e.childAt(t,[4,1,1]),3,3),a},statements:[["block","sortable-group",[],["tagName","ol","model",["subexpr","@mut",[["get","model"]],[]],"onChange","update"],0,null],["block","each",[["get","model.items"]],[],1,null]],locals:[],templates:[e,t]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-sortable",version:"v1.1.0"});