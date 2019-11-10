import{r as t,h as i,H as o,g as e,c as n}from"./p-7e9d867b.js";import{U as s}from"./p-cf0c7d01.js";const r=class{constructor(i){t(this,i)}render(){return i(o,null,i("slot",null),i("style",null,s.getStyle(this.size,this.color,this.background,this.el)))}get el(){return e(this)}static get style(){return":host{display:block;line-height:1.5em;margin-top:1em;margin-bottom:1em}"}},u=class{constructor(i){t(this,i),this.elements=[],this.docs=[],this.currentVals={},this.updatePlaygroundCode=n(this,"updatePlaygroundCode",7)}componentWillLoad(){this.selectElement(this.elements[0]),this.updatePlaygroundCode.emit()}selectElement(t){this.element&&this.element.classList.remove("nodeFocus"),t.classList.add("nodeFocus"),this.element=t,this.doc=this.docs.filter(i=>i.tag==t.localName)[0]}setAttribute(t,i){this.element.setAttribute(t,i),this.currentVals[t]=i,this.currentVals=Object.assign({},this.currentVals),this.updatePlaygroundCode.emit()}getAttribute(t){let i=this.element.getAttribute(t);""==i&&this.element.hasAttribute(t)&&(i="true"),this.currentVals[t]=i,this.currentVals=Object.assign({},this.currentVals)}removeAttribute(t){this.element.removeAttribute(t),this.currentVals[t]=null,this.currentVals=Object.assign({},this.currentVals),this.updatePlaygroundCode.emit()}getAttrInput(t){switch(this.getAttribute(t),t){case"color":return i("ui-input",{type:"color",onUiInput:t=>this.setAttribute("color",t.detail.value),value:this.currentVals.color},"Font Color | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("color")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"background":return i("ui-input",{type:"color",onUiInput:t=>this.setAttribute("background",t.detail.value),value:this.currentVals.background},"Background Color | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("background")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"disabled":return i("ui-input",{orientation:"horizontal",type:"radio",onUiInput:t=>this.setAttribute("disabled",t.detail.value)},"Disabled | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("disabled")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),i("ui-input-option",{slot:"option",value:"true",selected:this.currentVals.disabled},"True"),i("ui-input-option",{slot:"option",value:"false",selected:!this.currentVals.disabled},"False"));case"round":return i("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:t=>this.setAttribute("round",t.detail.value)},"Rounding | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("round")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter(t=>"round"==t.name).map(t=>t.values.map(t=>i("ui-input-option",{slot:"option",value:t.value,selected:this.currentVals.round==t.value},t.value))));case"size":return i("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:t=>this.setAttribute("size",t.detail.value)},"Size | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("size")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter(t=>"size"==t.name).map(t=>t.values.map(t=>i("ui-input-option",{slot:"option",value:t.value,selected:this.currentVals.size==t.value},t.value))));case"type":return i("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:t=>this.setAttribute("type",t.detail.value)},"Type | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("type")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter(t=>"type"==t.name).map(t=>t.values.map(t=>i("ui-input-option",{slot:"option",value:t.value,selected:this.currentVals.type==t.value},t.value))));case"align":return i("ui-input",{class:"input-attr",orientation:"horizontal",type:"radio",onUiInput:t=>this.setAttribute("align",t.detail.value)},"Align | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("align")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"),this.doc.props.filter(t=>"align"==t.name).map(t=>t.values.map(t=>i("ui-input-option",{slot:"option",value:t.value,selected:this.currentVals.align==t.value},t.value))));case"icon":return i("ui-input",{class:"input-attr",type:"text",onUiInput:t=>this.setAttribute("icon",t.detail.value)},"Icon | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("icon")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"));case"href":return i("ui-input",{class:"input-attr",type:"text",onUiInput:t=>this.setAttribute("href",t.detail.value)},"href | ",i("ui-button",{onUiClick:t=>{t.stopPropagation(),this.removeAttribute("href")},round:"none",type:"link",color:"secondary-light",size:"smaller"},"remove"))}}render(){if(0!=this.elements.length)return i(o,null,i("ui-heading",{background:"grey-100"},"Layers"),i("div",{class:"attrs"},this.elements.map(t=>i("ui-button",{onUiClick:()=>this.selectElement(t),round:"none",background:"grey-80"},t.localName))),i("ui-heading",{background:"grey-100"},this.doc.tag),i("div",{class:"attrs"},this.doc.props.map(t=>this.getAttrInput(t.name))))}static get style(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#000;color:#888;padding:1em}:host>*{font-size:medium;margin-bottom:.5em}.attrs{background-color:#222;padding:1em;font-size:small}.attrs>*{margin-bottom:1em;margin-right:.33em}.input-attr>ui-input-option{width:7em}.float-right{-ms-flex-item-align:end;align-self:flex-end}"}};export{r as ui_paragraph,u as ui_playground_attrs};