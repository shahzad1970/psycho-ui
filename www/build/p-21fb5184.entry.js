import{r as t,h as e,H as i,g as s,c as o}from"./p-e3e902be.js";import{U as r}from"./p-7a4b75ea.js";const n=class{constructor(e){t(this,e)}componentDidLoad(){const t=this.el.querySelector("ui-app-navigation");t&&t.toggle()}render(){return e(i,null,e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};n.style="@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');:root{line-height:1.65;font-family:'Roboto', sans-serif, \"Open Sans\", Helvetica, Arial, sans-serif;font-size:16px}html,body{margin:0;width:100%;height:100%}*{-webkit-box-sizing:border-box;box-sizing:border-box}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(/static/fonts/MaterialIcons-Regular.eot);src:local('Material Icons'), local('MaterialIcons-Regular'), url(/static/fonts/MaterialIcons-Regular.woff2) format('woff2'), url(/static/fonts/MaterialIcons-Regular.woff) format('woff'), url(/static/fonts/MaterialIcons-Regular.ttf) format('truetype')}ui-app{display:block;padding-top:3.5em}";const l=class{constructor(e){t(this,e)}render(){return e(i,null,e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};l.style=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1.5em 3em}";const a=class{constructor(e){t(this,e)}navigation(){const t=this.el.parentElement.querySelector("ui-app-navigation");t&&t.toggle()}render(){return e(i,null,e("ui-button",{round:"fab",type:"base",onClick:()=>this.navigation(),size:"large"},e("ui-icon",null,"menu")),e("img",{src:this.src}),e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};a.style=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);height:3.5em;position:fixed;width:100%;top:0px;left:0px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;z-index:100;font-weight:500}:host(*){padding-left:1.5em;padding-right:1.5em;display:-ms-inline-flexbox;display:inline-flex}img{height:2em;-ms-flex-item-align:center;align-self:center}";const h=class{constructor(e){t(this,e),this.size="medium"}async toggle(){const t=this.el.parentElement.querySelector("ui-app-body");"visible"!=this.el.style.visibility?(this.el.style.visibility="visible",t.style.marginLeft=this.el.clientWidth+"px"):(this.el.style.visibility="hidden",t.style.marginLeft=null)}render(){return e(i,null,e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};h.style=":host{display:-ms-flexbox;display:flex;overflow:auto;position:fixed;height:calc(100vh - 3.5em);overflow:auto;visibility:hidden;border-right:1px solid;border-color:inherit;padding-top:1.5em;padding-bottom:1.5em;z-index:100}";const c=class{constructor(e){t(this,e),this.type="base",this.disabled=!1,this.round="base",this.uiClick=o(this,"uiClick",7)}onClick(){this.disabled||(this.href?setTimeout(()=>{window.location.href=this.href},300):this.uiClick.emit())}onMouseDown(t){this.disabled||this.ripple.toggle(t)}render(){return e(i,null,e("slot",null),e("ui-ripple",{ref:t=>this.ripple=t}),e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};c.style=':host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;cursor:pointer;border:0.10em solid transparent;font-weight:600;-ms-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;padding:0em 1em}:host([type="flat"]){border:0px}:host([type="outline"]){border-color:currentColor}:host([type="link"]){line-height:1em;padding:0.2em;border-radius:0px;border-left:0px;border-right:0px;border-color:transparent}:host([type="link"]:hover){border-radius:0px;border-bottom-color:currentColor}:host([round="base"]:not([type="link"])){border-radius:0.2em}:host([round="pill"]){border-radius:2em}:host([round="fab"]){line-height:1em;padding:0.33em 0.33em;border-radius:2em}:host(:hover:not([disabled]):not([type="link"])) ::before{content:\'\';position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:0.15}:host([disabled]){background-color:#dedede;color:#aaaaaa;border-color:#cccccc;text-shadow:currentColor}';const p=class{constructor(e){t(this,e),this.alignContent="start",this.justifyContent="middle",this.alignItems="start"}render(){return e(i,null,e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el),r.getPosition(this.alignContent,this.justifyContent,this.alignItems,this.flex,this.padding,this.margin,this.gap,this.alignSelf,null,null,null,this.el)))}get el(){return s(this)}};p.style=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}";const u=class{constructor(e){t(this,e)}render(){return e(i,null,e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-button.html"},"UI Button"),e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-heading.html"},"UI Heading"),e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-icon.html"},"UI Icon"),e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-input.html"},"UI Input"),e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-paragraph.html"},"UI Paragraph"),e("ui-button",{round:"none",type:"flat",background:"base",color:"grey-80",href:"/ui-text.html"},"UI Text"))}};u.style=":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;min-width:15em}:host>ui-button{-ms-flex-pack:start;justify-content:flex-start;padding-left:2em}";const d=class{constructor(e){t(this,e),this.alignContent="start",this.justifyContent="start",this.alignItems="stretch"}render(){return e(i,null,e("slot",null),e("style",null,r.getStyle(this.size,this.color,this.background,this.el),r.getPosition(this.alignContent,this.justifyContent,this.alignItems,this.flex,this.padding,this.margin,this.gap,this.alignSelf,this.width,this.autoFit,this.autoFill,this.el)))}get el(){return s(this)}};d.style=":host{display:grid}";const f=class{constructor(e){t(this,e)}render(){return e(i,null,!this.icon&&e("slot",null),this.icon,e("style",null,r.getStyle(this.size,this.color,this.background,this.el)))}get el(){return s(this)}};f.style=":host{font-family:'Material Icons';font-weight:normal;font-style:normal;display:-ms-inline-flexbox;display:inline-flex;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:'liga';font-feature-settings:'liga'}::slotted(*){fill:currentColor}";const m=class{constructor(e){t(this,e),this.ripple=!1}async toggle(t){let e=t;const i=e.target.getBoundingClientRect(),s=e.pageX-i.x,o=e.pageY-i.y;this.el.style.backgroundColor=window.getComputedStyle(this.el).color,this.el.style.top=o+"px",this.el.style.left=s+"px",this.ripple=!0,setTimeout(()=>{this.ripple=!1},800)}render(){return e(i,{class:this.ripple?"ripple":""})}get el(){return s(this)}};m.style=':host{display:block;position:absolute;border-radius:50%;width:5px;height:5px;opacity:0}:host([class~="ripple"]){position:absolute;border-radius:50%;width:5px;height:5px;-webkit-animation:rippleEffect .90s 1;animation:rippleEffect .90s 1;opacity:0}@-webkit-keyframes rippleEffect{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0.3}100%{-webkit-transform:scale(100);transform:scale(100);opacity:0}}@keyframes rippleEffect{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0.3}100%{-webkit-transform:scale(100);transform:scale(100);opacity:0}}';export{n as ui_app,l as ui_app_body,a as ui_app_header,h as ui_app_navigation,c as ui_button,p as ui_column,u as ui_doc_links,d as ui_grid,f as ui_icon,m as ui_ripple}