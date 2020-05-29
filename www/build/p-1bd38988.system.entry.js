var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function l(t){try{a(n.next(t))}catch(e){o(e)}}function s(t){try{a(n["throw"](t))}catch(e){o(e)}}function a(t){t.done?i(t.value):r(t.value).then(l,s)}a((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(e){return a([t,e])}}function a(l){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=l[0]&2?r["return"]:l[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;if(r=0,o)l=[l[0]&2,o.value];switch(l[0]){case 0:case 1:o=l;break;case 4:i.label++;return{value:l[1],done:false};case 5:i.label++;r=l[1];l=[0];continue;case 7:l=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1];o=l;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(l);break}if(o[2])i.ops.pop();i.trys.pop();continue}l=e.call(t,i)}catch(s){l=[6,s];r=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-9f9ffa81.system.js","./p-a0e0f7e0.system.js"],(function(t){"use strict";var e,i,n,r,o,l;return{setters:[function(t){e=t.r;i=t.h;n=t.H;r=t.g;o=t.c},function(t){l=t.U}],execute:function(){var s="@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');:root{line-height:1.65;font-family:'Roboto', sans-serif, \"Open Sans\", Helvetica, Arial, sans-serif;font-size:16px}html,body{margin:0;width:100%;height:100%}*{-webkit-box-sizing:border-box;box-sizing:border-box}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(/static/fonts/MaterialIcons-Regular.eot);src:local('Material Icons'), local('MaterialIcons-Regular'), url(/static/fonts/MaterialIcons-Regular.woff2) format('woff2'), url(/static/fonts/MaterialIcons-Regular.woff) format('woff'), url(/static/fonts/MaterialIcons-Regular.ttf) format('truetype')}ui-app{display:block;padding-top:3.5em}";var a=t("ui_app",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){var t=this.el.querySelector("ui-app-navigation");if(t)t.toggle()};t.prototype.render=function(){return i(n,null,i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());a.style=s;var u=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1.5em 3em}";var c=t("ui_app_body",function(){function t(t){e(this,t)}t.prototype.render=function(){return i(n,null,i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());c.style=u;var p=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);height:3.5em;position:fixed;width:100%;top:0px;left:0px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;z-index:100;font-weight:500}:host(*){padding-left:1.5em;padding-right:1.5em;display:-ms-inline-flexbox;display:inline-flex}img{height:2em;-ms-flex-item-align:center;align-self:center}";var f=t("ui_app_header",function(){function t(t){e(this,t)}t.prototype.navigation=function(){var t=this.el.parentElement.querySelector("ui-app-navigation");if(t)t.toggle()};t.prototype.render=function(){var t=this;return i(n,null,i("ui-button",{round:"fab",type:"base",onClick:function(){return t.navigation()},size:"large"},i("ui-icon",null,"menu")),i("img",{src:this.src}),i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());f.style=p;var h=":host{display:-ms-flexbox;display:flex;overflow:auto;position:fixed;height:calc(100vh - 3.5em);overflow:auto;visibility:hidden;border-right:1px solid;border-color:inherit;padding-top:1.5em;padding-bottom:1.5em;z-index:100}";var d=t("ui_app_navigation",function(){function t(t){e(this,t);this.size="medium"}t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.el.parentElement.querySelector("ui-app-body");if(this.el.style.visibility!="visible"){this.el.style.visibility="visible";t.style.marginLeft=this.el.clientWidth+"px"}else{this.el.style.visibility="hidden";t.style.marginLeft=null}return[2]}))}))};t.prototype.render=function(){return i(n,null,i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());d.style=h;var g=':host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;cursor:pointer;border:0.10em solid transparent;font-weight:600;-ms-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;padding:0em 1em}:host([type="flat"]){border:0px}:host([type="outline"]){border-color:currentColor}:host([type="link"]){line-height:1em;padding:0.2em;border-radius:0px;border-left:0px;border-right:0px;border-color:transparent}:host([type="link"]:hover){border-radius:0px;border-bottom-color:currentColor}:host([round="base"]:not([type="link"])){border-radius:0.2em}:host([round="pill"]){border-radius:2em}:host([round="fab"]){line-height:1em;padding:0.33em 0.33em;border-radius:2em}:host(:hover:not([disabled]):not([type="link"])) ::before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:0.15}:host([disabled]){background-color:#dedede;color:#aaaaaa;border-color:#cccccc;text-shadow:currentColor}';var y=t("ui_button",function(){function t(t){e(this,t);this.type="base";this.disabled=false;this.round="base";this.uiClick=o(this,"uiClick",7)}t.prototype.onClick=function(){var t=this;if(this.disabled)return;if(this.href){setTimeout((function(){window.location.href=t.href}),300);return}this.uiClick.emit()};t.prototype.onMouseDown=function(t){if(this.disabled)return;this.ripple.toggle(t)};t.prototype.render=function(){var t=this;return i(n,null,i("slot",null),i("ui-ripple",{ref:function(e){return t.ripple=e}}),i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());y.style=g;var b=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";var m=t("ui_column",function(){function t(t){e(this,t);this.alignContent="start";this.justifyContent="middle";this.alignItems="start"}t.prototype.render=function(){return i(n,null,i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el),l.getPosition(this.alignContent,this.justifyContent,this.alignItems,this.flex,this.padding,this.margin,this.gap,this.alignSelf,null,null,null,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());m.style=b;var x=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;min-width:15em}:host>ui-button{-ms-flex-pack:start;justify-content:flex-start;padding-left:2em}";var w=t("ui_doc_links",function(){function t(t){e(this,t)}t.prototype.render=function(){return i(n,null,i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-button.html"},"UI Button"),i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-heading.html"},"UI Heading"),i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-icon.html"},"UI Icon"),i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-input.html"},"UI Input"),i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-paragraph.html"},"UI Paragraph"),i("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-text.html"},"UI Text"))};return t}());w.style=x;var v=":host{display:grid}";var k=t("ui_grid",function(){function t(t){e(this,t);this.alignContent="start";this.justifyContent="start";this.alignItems="stretch"}t.prototype.render=function(){return i(n,null,i("slot",null),i("style",null,l.getStyle(this.size,this.color,this.background,this.el),l.getPosition(this.alignContent,this.justifyContent,this.alignItems,this.flex,this.padding,this.margin,this.gap,this.alignSelf,this.width,this.autoFit,this.autoFill,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());k.style=v;var _=":host{font-family:'Material Icons';font-weight:normal;font-style:normal;display:-ms-inline-flexbox;display:inline-flex;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:'liga';font-feature-settings:'liga'}::slotted(*){fill:currentColor}";var C=t("ui_icon",function(){function t(t){e(this,t)}t.prototype.render=function(){return i(n,null,!this.icon&&i("slot",null),this.icon,i("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());C.style=_;var z=':host{display:block;position:absolute;border-radius:50%;width:5px;height:5px;opacity:0}:host([class~="ripple"]){position:absolute;border-radius:50%;width:5px;height:5px;-webkit-animation:rippleEffect .90s 1;animation:rippleEffect .90s 1;opacity:0}@-webkit-keyframes rippleEffect{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0.3}100%{-webkit-transform:scale(100);transform:scale(100);opacity:0}}@keyframes rippleEffect{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0.3}100%{-webkit-transform:scale(100);transform:scale(100);opacity:0}}';var I=t("ui_ripple",function(){function t(t){e(this,t);this.ripple=false}t.prototype.toggle=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,n,r;var o=this;return __generator(this,(function(l){e=t;i=e.target.getBoundingClientRect();n=e.pageX-i.x;r=e.pageY-i.y;this.el.style.backgroundColor=window.getComputedStyle(this.el).color;this.el.style.top=r+"px";this.el.style.left=n+"px";this.ripple=true;setTimeout((function(){o.ripple=false}),800);return[2]}))}))};t.prototype.render=function(){return i(n,{class:this.ripple?"ripple":""})};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());I.style=z}}}));