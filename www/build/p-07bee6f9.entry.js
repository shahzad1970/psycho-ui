import{r as t,c as e,h as n,H as i,g as o}from"./p-2c20acc8.js";import{U as r}from"./p-a76084b0.js";const s=class{constructor(n){t(this,n),this.uiInputEvent=e(this,"uiInputEvent",7)}select(t){this.uiInputEvent.emit(t)}render(){return n(i,null,n("div",{class:"row"},Object.keys(r.themePalette).map(t=>n("ui-button",{onUiClick:()=>this.select(t),background:t,round:"none",type:"base"},t))),Object.keys(r.colorPalette).map(t=>n("div",{class:"row"},[100,90,80,70,60,50,40,30,20,10].map(e=>n("ui-button",{onUiClick:()=>this.select(t+"-"+e),background:t+"-"+e,round:"none",type:"base"},t+"-"+e)))))}};s.style=":host{font-size:smaller;display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:auto;max-height:30em}.row{display:flex;flex-direction:column;flex:auto}ui-button{border:0px;box-shadow:none;flex:auto;line-height:3em;height:3em;margin:0.1em}";const l=class{constructor(e){t(this,e)}render(){return n(i,null,n("slot",null))}};l.style=':host([orientation="vertical"]){display:flex;flex-direction:column;align-content:flex-start;justify-content:flex-start}:host([orientation="horizontal"]){display:flex;flex-direction:row;align-content:center;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex:1 1 auto}:host{margin-bottom:0.15em}::slotted(ui-input-option[selected])::before{font-family:"Material Icons";content:"\\e837";margin-right:.75em;border:2px solid transparent;border-radius:1em;width:1em;height:1em;font-size:1.25em;display:flex;align-items:center;align-content:center}::slotted(ui-input-option:not([selected]))::before{font-family:"Material Icons";content:"\\e836";margin-right:.75em;border:2px solid transparent;border-radius:1em;width:1em;height:1em;font-size:1.25em;display:flex;align-items:center;align-content:center}::slotted(ui-input-option:hover)::before{content:"\\e837"}';const a=class{constructor(e){t(this,e)}render(){return n(i,null,n("slot",null),n("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return o(this)}};a.style=":host{display:inline-flex;line-height:inherit;padding:0.25em 0.5em;align-items:center;justify-content:center}";export{s as ui_input_color,l as ui_input_radio,a as ui_text}