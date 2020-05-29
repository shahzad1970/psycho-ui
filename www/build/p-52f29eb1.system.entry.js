var __awaiter=this&&this.__awaiter||function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function l(t){try{u(i.next(t))}catch(e){r(e)}}function s(t){try{u(i["throw"](t))}catch(e){r(e)}}function u(t){t.done?n(t.value):o(t.value).then(l,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(e){return u([t,e])}}function u(l){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(r=l[0]&2?o["return"]:l[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;if(o=0,r)l=[l[0]&2,r.value];switch(l[0]){case 0:case 1:r=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;o=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){n.label=l[1];break}if(l[0]===6&&n.label<r[1]){n.label=r[1];r=l;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(l);break}if(r[2])n.ops.pop();n.trys.pop();continue}l=e.call(t,n)}catch(s){l=[6,s];o=0}finally{i=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-9f9ffa81.system.js","./p-b3bcb302.system.js"],(function(t){"use strict";var e,n,i,o,r,l;return{setters:[function(t){e=t.r;n=t.h;i=t.H;o=t.g;r=t.c},function(t){l=t.U}],execute:function(){var s=':host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-weight:600;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center}:host([background]){padding:.25em 0.75em}:host([align="start"]){-ms-flex-pack:start;justify-content:flex-start}:host([align="end"]){-ms-flex-pack:end;justify-content:flex-end}:host([align="middle"]){-ms-flex-pack:center;justify-content:center}:host([type="underline"]){border-bottom:0.1em solid}:host([type="outline"]){border:0.1em solid;padding:0em 0.5em}';var u=t("ui_heading",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(i,null,n("slot",null),n("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());u.style=s;var a=':host([orientation="vertical"]){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}:host([orientation="horizontal"]){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}input{font-size:1em;background-color:transparent;border:0px;padding:0.5em 1em;-ms-flex:1;flex:1;vertical-align:center;min-width:7em;color:currentColor;outline:0px}.input-label{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;margin-right:0.5em;font-weight:600;line-height:1.25em;margin-bottom:0.15em}:host([orientation="horizontal"])>.input-label{-ms-flex-item-align:center;align-self:center}.input-container{font-size:smaller;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;min-width:10em;border:1px solid currentColor;border-color:inherit;line-height:2em;font-weight:normal;margin-bottom:0.15em}:host(:focus){border:2px solid red}:host(:hover)>.input-container{outline:1px solid currentColor;outline-offset:-2px;outline-color:inherit}.input-container>ui-icon{-ms-flex-item-align:center;align-self:center;font-size:1.75em;margin-right:0.25em}.input-options{position:absolute;top:calc(2em + 4px);right:-3px;width:calc(100% + 2px);border:2px solid;border-color:inherit;border-top:0px;background-color:rgba(255, 255, 255, 1);z-index:+1}.hide{display:none}';var c=t("ui_input",function(){function t(t){e(this,t);this.type="text";this.orientation="vertical";this.open=false;this.uiInput=r(this,"uiInput",7)}t.prototype.onFocus=function(){};t.prototype.onBlur=function(){var t=this;setTimeout((function(){t.open=false}),200)};t.prototype.getIcon=function(){switch(this.type){case"search":return n("ui-icon",null,"search");case"date":return n("ui-icon",null,"calendar_today");case"color":return n("ui-icon",null,"color_lens")}return};t.prototype.onElementClick=function(){this.open=true;if(this.inputField)this.inputField.focus()};t.prototype.getInput=function(){var t=this;switch(this.type){case"color":return n("div",{class:"input-container",ref:function(e){return t.inputContainer=e}},n("ui-text",{background:this.value},"  ",this.value,"  "),n("input",{readonly:true,ref:function(e){return t.inputField=e},type:"text",onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()}}),this.getIcon(),n("div",{class:this.open?"input-options":"input-options hide"},n("ui-input-color",{onUiInputEvent:function(e){return t.onColorValue(e)}})));case"radio":return[n("ui-input-radio",{orientation:this.orientation},n("slot",{name:"option"}))];default:return n("div",{class:"input-container",ref:function(e){return t.inputContainer=e}},n("input",{type:"text",onInput:function(){return t.onTextInput()},ref:function(e){return t.inputField=e},onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()}}),this.getIcon())}};t.prototype.onTextInput=function(){console.log(this.inputField.value);this.value=this.inputField.value;this.uiInput.emit({value:this.value})};t.prototype.onColorValue=function(t){console.log(t.detail);this.value=t.detail;this.open=false;this.inputField.blur();this.uiInput.emit({value:t.detail})};t.prototype.uiInputOptionEvent=function(t){var e=this;this.el.querySelectorAll("ui-input-option").forEach((function(n){n.removeAttribute("selected");n.getValue().then((function(i){if(i==t.detail.value){n.setAttribute("selected","true");e.uiInput.emit({value:t.detail.value})}}))}))};t.prototype.render=function(){return n(i,null,n("div",{class:"input-label"},n("slot",null)),this.getInput(),n("style",null,l.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());c.style=a;var p=":host{display:-ms-flexbox;display:flex;padding-left:1em;position:relative;overflow:hidden;cursor:pointer;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;width:90px}:host(:hover){opacity:0.8}";var f=t("ui_input_option",function(){function t(t){e(this,t);this.selected=false;this.uiInputOptionEvent=r(this,"uiInputOptionEvent",7)}t.prototype.onclick=function(){this.uiInputOptionEvent.emit({value:this.value})};t.prototype.getValue=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.value]}))}))};t.prototype.onMouseDown=function(t){this.ripple.toggle(t)};t.prototype.render=function(){var t=this;return n(i,null,n("slot",null),n("ui-ripple",{ref:function(e){return t.ripple=e}}))};return t}());f.style=p;var h=':host{display:-ms-flexbox;display:flex}:host([type="row"]){-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host([type="column"]){-ms-flex-direction:column;flex-direction:column}:host([type="row"]) ::slotted(*){-ms-flex:1 1 auto;flex:1 1 auto}:host([align="start"]){-ms-flex-align:start;align-items:flex-start}:host([align="end"]){-ms-flex-align:end;align-items:flex-end}:host([align="middle"]){-ms-flex-align:center;align-items:center}:host([justify="start"]){-ms-flex-pack:start;justify-content:flex-start}:host([justify="end"]){-ms-flex-pack:end;justify-content:flex-end}:host([justify="middle"]){-ms-flex-pack:center;justify-content:center}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){:host([type="row"]::slotted(*)){-ms-flex:1 1 auto;flex:1 1 auto;min-width:1px}}';var d=t("ui_layout",function(){function t(t){e(this,t);this.type="row"}t.prototype.styleBuilder=function(){var t=this;var e={};if(this.width){e["max-width"]=this.width;e["min-width"]=this.width}if(this.height){e["max-height"]=this.height;e["min-height"]=this.height}if(this.gap){var n=[];this.el.childNodes.forEach((function(t){if(t.nodeType==1)n.push(t)}));n.forEach((function(e,i){if(e.nodeType==1){var o=e;var r="calc("+l.fontSizeMap[t.gap]+" / 2)";if(t.type=="row"){o.style.marginRight="calc("+l.fontSizeMap[t.gap]+" / 2)";o.style.marginBottom="calc("+l.fontSizeMap[t.gap]+" / 2)";t.el.style.marginRight="calc(-"+l.fontSizeMap[t.gap]+" / 2)"}else if(t.type=="column"){if(n.length-1!=i){o.style.marginBottom=r}}}}))}return e};t.prototype.render=function(){return n(i,{style:this.styleBuilder()},n("slot",null),n("style",null,l.getStyle(this.size,this.color,this.background,this.el),";"))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return t}());d.style=h}}}));