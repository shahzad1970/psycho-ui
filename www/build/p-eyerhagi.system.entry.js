System.register(["./p-1ca6f7f9.system.js","./p-7c785270.system.js"],(function(t){"use strict";var e,n,i,r,o,u;return{setters:[function(t){e=t.r;n=t.h;i=t.H;r=t.g;o=t.c},function(t){u=t.U}],execute:function(){var l=t("ui_paragraph",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(i,null,n("slot",null),n("style",null,u.getStyle(this.size,this.color,this.background,this.el)))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{display:block;line-height:1.5em;margin-top:1em;margin-bottom:1em}"},enumerable:true,configurable:true});return t}());var a=t("ui_playground_attrs",function(){function t(t){e(this,t);this.elements=[];this.docs=[];this.currentVals={};this.updatePlaygroundCode=o(this,"updatePlaygroundCode",7)}t.prototype.componentWillLoad=function(){this.selectElement(this.elements[0]);this.updatePlaygroundCode.emit()};t.prototype.selectElement=function(t){if(this.element)this.element.classList.remove("nodeFocus");t.classList.add("nodeFocus");this.element=t;this.doc=this.docs.filter((function(e){return e.tag==t.localName}))[0]};t.prototype.setAttribute=function(t,e){this.element.setAttribute(t,e);this.currentVals[t]=e;this.currentVals=Object.assign({},this.currentVals);this.updatePlaygroundCode.emit()};t.prototype.getAttribute=function(t){var e=this.element.getAttribute(t);if(e==""&&this.element.hasAttribute(t))e="true";this.currentVals[t]=e;this.currentVals=Object.assign({},this.currentVals)};t.prototype.removeAttribute=function(t){this.element.removeAttribute(t);this.currentVals[t]=null;this.currentVals=Object.assign({},this.currentVals);this.updatePlaygroundCode.emit()};t.prototype.getAttrInput=function(t){var e=this;this.getAttribute(t);switch(t){case"color":return n("ui-input",{type:"color",onUiInput:function(t){return e.setAttribute("color",t.detail.value)},value:this.currentVals["color"]},"Font Color | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("color")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"background":return n("ui-input",{type:"color",onUiInput:function(t){return e.setAttribute("background",t.detail.value)},value:this.currentVals["background"]},"Background Color | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("background")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"disabled":return n("ui-input",{orientation:"horizontal",type:"radio",onUiInput:function(t){return e.setAttribute("disabled",t.detail.value)}},"Disabled | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("disabled")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),n("ui-input-option",{slot:"option",value:"true",selected:this.currentVals["disabled"]},"True"),n("ui-input-option",{slot:"option",value:"false",selected:!this.currentVals["disabled"]},"False"));case"round":return n("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:function(t){return e.setAttribute("round",t.detail.value)}},"Rounding | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("round")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter((function(t){return t.name=="round"})).map((function(t){return t.values.map((function(t){return n("ui-input-option",{slot:"option",value:t.value,selected:e.currentVals["round"]==t.value},t.value)}))})));case"size":return n("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:function(t){return e.setAttribute("size",t.detail.value)}},"Size | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("size")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter((function(t){return t.name=="size"})).map((function(t){return t.values.map((function(t){return n("ui-input-option",{slot:"option",value:t.value,selected:e.currentVals["size"]==t.value},t.value)}))})));case"type":return n("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:function(t){return e.setAttribute("type",t.detail.value)}},"Type | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("type")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter((function(t){return t.name=="type"})).map((function(t){return t.values.map((function(t){return n("ui-input-option",{slot:"option",value:t.value,selected:e.currentVals["type"]==t.value},t.value)}))})));case"align":return n("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:function(t){return e.setAttribute("align",t.detail.value)}},"Align | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("align")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter((function(t){return t.name=="align"})).map((function(t){return t.values.map((function(t){return n("ui-input-option",{slot:"option",value:t.value,selected:e.currentVals["align"]==t.value},t.value)}))})));case"icon":return n("ui-input",{class:"input-attr",type:"text",onUiInput:function(t){return e.setAttribute("icon",t.detail.value)}},"Icon | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("icon")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"href":return n("ui-input",{class:"input-attr",type:"text",onUiInput:function(t){return e.setAttribute("href",t.detail.value)}},"href | ",n("ui-button",{onUiClick:function(t){t.stopPropagation();e.removeAttribute("href")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"))}};t.prototype.render=function(){var t=this;if(this.elements.length==0)return;return n(i,null,n("ui-heading",{background:"grey-100"},"Layers"),n("div",{class:"attrs"},this.elements.map((function(e){return n("ui-button",{onUiClick:function(){return t.selectElement(e)},round:"none",background:"grey-80"},e.localName)}))),n("ui-heading",{background:"grey-100"},this.doc.tag),n("div",{class:"attrs"},this.doc.props.map((function(e){return t.getAttrInput(e.name)}))))};Object.defineProperty(t,"style",{get:function(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#000;color:#888;padding:1em;min-width:30em}:host>*{font-size:medium;margin-bottom:.5em}.attrs{background-color:#222;padding:1em;font-size:small}.attrs>*{margin-bottom:1em;margin-right:.33em}.input-attr>ui-input-option{width:7em}.float-right{-ms-flex-item-align:end;align-self:flex-end}"},enumerable:true,configurable:true});return t}())}}}));