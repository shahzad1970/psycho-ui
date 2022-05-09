class UiBaseElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.state = UiState.getInstance(); 
        this.collectReftags();
    }

    collectReftags() {
        this.shadowRoot.querySelectorAll("[ref]").forEach(el => {
            this[el.getAttribute("ref")] = el;
        });
    }
    getCssRules() {
        if (!this.cssRules && this.shadowRoot.querySelector("style").sheet) {
            let sheet = this.shadowRoot.querySelector("style").sheet;
            let i = sheet.insertRule(":host { }", sheet.cssRules.length);
            this.cssRules = sheet.cssRules[i];
        }

        return this.cssRules;
    }

    connectedCallback() {
        this.constructor.observedAttributes.forEach(attr => {
            this.attributeChangedCallback(attr, null, this.getAttribute(attr));
        });
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        newValue = newValue == null ?  "" : newValue.trim()
        if (name == "color") {
            setUiForgroundColor(this.getCssRules(), newValue);
        } else if (name == "background") {
            // get the parent element computed background color
            let pbackground = getComputedStyle(this.parentElement).backgroundColor;
            console.log(pbackground)
            setUiBackgroundColor(this.getCssRules(), newValue, this.hasAttribute("color"));
        } else if (name == 'accent') {
            setUiAccentColor(this.getCssRules(), newValue);
        } else if (name == "width") {
            this.getCssRules().style.width = getUiSize(newValue);
        } else if (name == "height") {
            this.getCssRules().style.height = getUiSize(newValue);
        } else if (name == "gap") {
            this.getCssRules().style.gap = getUiSize(newValue);
        } else if (name == "flex") {
            this.getCssRules().style.flex = newValue;
        } else if (name == "padding") {
            this.getCssRules().style.padding = newValue;
        } else if (name == "margin") {
            this.getCssRules().style.margin = newValue;
        } else if (name == "size") {
            this.getCssRules().style.fontSize = getUiSize(newValue);
        } else if (name == "bold") {
            this.getCssRules().style.fontWeight = this.hasAttribute('bold') ? "bold" : null;
        } else if (name == "elevation") {
            setUiBoxShadow(this.getCssRules(), newValue);
        } else if (name == "align") {
            this.getCssRules().style.alignItems =  newValue;
        } else if (name == "justify") {
            this.getCssRules().style.justifyContent = newValue;
        } else if (name == "ripple") {
            if (this.hasAttribute(name)) {
                if (!this.rippleElement) {
                    this.rippleElement = document.createElement('ui-ripple');
                    this.shadowRoot.appendChild(this.rippleElement);
                }
            } else {
                this.rippleElement.remove();
                this.rippleElement = null;
            }
        } else if (name == 'dev') {
            if (!this.dev) {
                this.dev = document.createElement("ui-edit-node");
                this.appendChild(this.dev);
            } else {
                this.dev.remove();
            }
        }
    }

    getDoc() {
        return UiComponentDocumentation.getInstance().getComponentDoc(this.nodeName); 
    }

    getAttrDoc(attr) {
        return UiComponentDocumentation.getInstance().getComponentAttributeDoc(attr);
    }

}
class UiComponentDocumentation {
    constructor() {

    }
    static getInstance() {
        if (!UiComponentDocumentation.instance) {
            UiComponentDocumentation.instance = new UiComponentDocumentation();
        }
        return UiComponentDocumentation.instance;
    }
 
    static components = {
        "ui-app": {
            "name": "App",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app background="base">
    <ui-app-header elevation="xx-small">
        <ui-button fab round size="large" onclick="setState('ui-app-navigation', 'toggle')">
            <ui-icon>menu</ui-icon>
        </ui-button>
    </ui-app-header>
    <ui-app-navigation elevation="xx-small" gap="small" open>
        <ui-button>
            Navigation
        </ui-button>
    </ui-app-navigation>
    <ui-app-main>
    </ui-app-main>
</ui-app>`
        },


        "ui-button": {
            "name": "Button",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app>
    <ui-app-main align="center" justify="center">
<ui-button background="primary-light">
    Example Button
</ui-button>
    </ui-app-main>
</ui-app>
    
`
        },

        "ui-input": {
            "name": "Input",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app background="base">
    <ui-app-main align="center" justify="center">
<ui-input type="select">
    Input label
    <ui-input-option value="THISISONE" label="ONE">One</ui-input-option>
    <ui-input-option>Two</ui-input-option>
    <ui-input-option>Three</ui-input-option>
    <ui-input-option>Four</ui-input-option>
    <ui-input-option>One</ui-input-option>
    <ui-input-option>Two</ui-input-option>
    <ui-input-option>Three</ui-input-option>
    <ui-input-option>Four</ui-input-option>
</ui-input>
    </ui-app-main>
</ui-app>
    
`
        }

    }

    static attributes = {
        "color":       `Set the front color of the component should be selected from the color palette, 
                        but can also be set to a custom color using any standard CSS color value.`,
        "size":        `Set the font size of the component should be selected from the size palette, however can also be set to a custom size using any standard CSS font size value.`,
        "background": `Set the background color of the component should be selected from the color palette, however can also be set to a custom color using any standard CSS color value.`,
    }

    getComponentDoc(name) {
        return UiComponentDocumentation.components[name.toLowerCase()];
    }

    getComponentAttributeDoc(name) {
        return UiComponentDocumentation.attributes[name.toLowerCase()];
    }
} 
class UiAppHeader extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1em;
                    padding: 0.5em 1em;
                    position: sticky;
                    top: 0;
                    z-index: 500;
                }


            </style>

            <slot>Header Container</slot>
  
        `
    }
}

customElements.define("ui-app-header", UiAppHeader);
class UiAppMain extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'align', 'justify'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener('load', this.handleRouteChange.bind(this));
        window.addEventListener('popstate', this.handleRouteChange.bind(this));
        this.state.on("color", this.colorChanged.bind(this));
    }

    colorChanged(value) {
        console.log("Color changed", value);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('load', this.handleRouteChange.bind(this));
        window.removeEventListener('popstate', this.handleRouteChange.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    handleRouteChange(e) {

        let path = window.location.pathname;
        if (path.startsWith('/app/doc/')) {
            let c = path.substring(9);
            this.innerHTML = `<ui-doc component="${c}"></ui-doc>`;
        }
        return false;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1em;
                    overflow: auto;
                    padding: 1.5em;
                }

            </style>
            <slot>App Main Container</slot>
        `
    }
}

customElements.define("ui-app-main", UiAppMain);
class UiAppNavigation extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation', 'gap', 'width', 'open'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    stateChangedCallback(name, oldValue, newValue) {
        console.log("State Changed", name, oldValue, newValue);
        if (name == "ui-app-navigation") {
            this.open = !this.open;
        }
    }

    get open() {
        return this.hasAttribute("open");
    }

    set open(value) {
        if (value) {
            this.setAttribute("open", "");
        } else {
            this.removeAttribute("open");
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: none;
                    flex-direction: column;
                    overflow-y: auto;
                    padding: 1em 0em;
                    gap: 0.5em;
           
                }
                ::slotted(ui-button) {
                    line-height: 2.5em;
                }
                :host([open]) {
                    display: flex;
                }
            </style>
            <slot>Navigation Component</slot>
        `
    }
}

customElements.define("ui-app-navigation", UiAppNavigation);
class UiState {
    constructor() {
        this.state = {};
        this.subscribers = {};
    }

    static getInstance() {
        if (!UiState.instance) {
            UiState.instance = new UiState();
        }
        return UiState.instance;
    }

    get(key) {
        return this.state[key];
    }

    set(key, value) {
        this.state[key] = value;
        if (this.subscribers[key]) {
            this.subscribers[key].forEach(callback => {
                callback(value);
            });
        }
    }
    on(key, callback) {
        if (!this.subscribers[key]) this.subscribers[key] = [];
        if (this.subscribers[key].includes(callback)) return;
        this.subscribers[key].push(callback);
    }

}

class UiApp extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.renderCoreStyles();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', "background"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener("contextmenu", this.showDocs.bind(this));
        window.addEventListener("input", (e) => {
            console.log(e)
        })
    }


    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("contextmenu", this.showDocs.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    showDocs(e) {
        let elm = document.elementFromPoint(e.clientX,e.clientY);

        const event = new CustomEvent('UI-EDIT-NODE', {
            detail: elm,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-areas: 'header header'
                                         'nav main';
                    grid-template-rows: min-content 1fr;
                    grid-template-columns: min-content 1fr;
                    width: 100%%;
                    height: 100%%;
                }

                :host > ::slotted(ui-app-header) {
                    grid-area: header;
                    align-self: start;
                }
                :host > ::slotted(ui-app-navigation) {
                    grid-area: nav;
                }
                :host > ::slotted(ui-app-main) {
                    grid-area: main;
                }
            </style>
            <slot>UI-APP</slot>
        `
    }

    renderCoreStyles() {
        let style = document.createElement("style");
        style.innerHTML = `
            :root {
                font-size: 14px;
            }

            body {
                margin: 0;
                padding: 0;
                height: 100vh;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
            }

            * {
                box-sizing: border-box;
            }

        `
        document.head.appendChild(style);

        let mdIcons = document.createElement("link");
        mdIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        mdIcons.rel = "stylesheet";
        document.head.appendChild(mdIcons);
    }

}

customElements.define("ui-app", UiApp);
class UiBadge extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background', "top", "bottom", "left", "right", "round", "rounded", "outline"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        
        // Set parent element to position relative;
        this.parentNode.getCssRules().style.position = "relative";
        this.parentNode.getCssRules().style.overflow = "visible";

        super.connectedCallback();
        
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    background-color: inherit;
                    line-height: 1em;
                    padding: 0.25em;
                }

                :host([round]) {
                    border-radius: 1.25em;
                    padding: 0.25em 0.5em;
                }

                :host([rounded]) {
                    border-radius: 0.25em;
                }

                :host([outline]) {
                    border: 1px solid var(--ui-color-accent);
                }

                :host([top][right]) {
                    top: 0;
                    right: 0;
                    position: absolute;
                    transform:  scale(0.8) translate(1em, -1em);
                }
                :host([bottom][right]) {
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    transform:  scale(0.8) translate(1em, 1em);
                }

                :host([top][left]) {
                    top: 0;
                    left: 0;
                    position: absolute;
                    transform:  scale(0.8) translate(-1em, -1em);
                }
                :host([bottom][left]) {
                    bottom: 0;
                    left: 0;
                    position: absolute;
                    transform:  scale(0.8) translate(-1em, 1em);
                }

            </style>
            <slot>image</slot>
        `
    }
}

customElements.define("ui-badge", UiBadge);
class UiButton extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation', 'fab', 'disabled', 'rounded', "round", 'outline', "busy", "gap",'href', "align", "justify", 'ripple'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        if (!this.ripple ) {
            this.ripple = true;
        }
        super.connectedCallback();
        this.addEventListener('click', this.clickHandler.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    clickHandler(e) {
        if (this.hasAttribute('href')) {
            let href = this.getAttribute('href');
            if (href.startsWith('/app/doc/')) {
                history.pushState({id: href}, href, href);
                window.dispatchEvent(new CustomEvent('popstate', {detail: href}));
            }
        }
        return false;
    }

    get ripple() {
        return this.hasAttribute('ripple');
    }

    set ripple(value) {
        this.setAttribute('ripple', true);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    padding: 0px 1em;
                    line-height: 2em;
                    gap: 0.5em;
                    font-size: inherit;
                    border: 1px solid transparent;
                    overflow: hidden;
                    flex-wrap: nowrap;
                    min-width: 2em;
                    min-height: 1em;
                    position: relative;
                }
                :host([disabled]) {
                    cursor: not-allowed;
                    pointer-events: none;
                    
                }
                
                :host([disabled])::before {
                    border-radius: inherit;
                    bottom: 0;
                    content: "";
                    display: block;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background-color: currentColor;
                    opacity: 0.2;
                }

                :host(:hover)::before {
                    border-radius: inherit;
                    bottom: 0;
                    content: "";
                    display: block;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background-color: currentColor;
                    opacity: 0.15;
                }

                :host(:not([fab])[rounded]) {
                    border-radius: 0.20em;
                }

                :host(:not([fab])[round]) {
                    border-radius: 2em;
                }

                :host([fab]) {
                    width: 2em;
                    height: 2em;
                    padding: 0;
                }

                :host([fab][round]) {
                    border-radius: 50%%;
                }

                :host([fab][rounded]) {
                    border-radius: 0.15em;
                }

                :host([outline]) {
                    border: 1px solid currentColor;
                }
               
                :host([busy]) >  .spinner {
                    display: block;
                }

                .spinner {
                    border: .15em solid currentColor; /* Light grey */
                    border-top: .15em solid transparent; /* Blue */
                    border-radius: 50%%;
                    height: 0.75em;
                    width: 0.75em;
                    animation: spin 2s linear infinite;
                    display: none;
                  }
                  
                  @keyframes spin {
                    0%% { transform: rotate(0deg); }
                    100%% { transform: rotate(360deg); }
                  }

            </style>
            <div class="spinner"></div>
            <slot>Button</slot>
        
        `
    }
}

customElements.define("ui-button", UiButton);
class UiCardBody extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    padding: 0.5em 1em;
                    overflow-y: auto;
                }
            </style>
            <slot>Card</slot>
        `
    }
}

customElements.define("ui-card-body", UiCardBody);
class UiCardFooter extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background', "bordered", "align", "justify"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    gap: 1em;
                    justify-content: flex-end;
                    align-items: center;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                    padding: 0.5em 1em;
                }
                :host([bordered]) {
                    border-top: 1px solid var(--ui-color-shadow);
                }
            </style>
            <slot>Card</slot>
        `
    }
}

customElements.define("ui-card-footer", UiCardFooter);
class UiCardHeader extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background', "elevation", "bordered"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    gap: 1em;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                    padding: 0.5em 1em;
                }
                :host([bordered]) {
                    border-bottom: 1px solid var(--ui-color-shadow);
                }
            </style>
            <slot>Card</slot>
        `
    }
}

customElements.define("ui-card-header", UiCardHeader);
class UiCard extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background', "elevation", "flex", "width", "height", "bordered", "rounded"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-areas: 'header'
                                         'body'
                                         'footer';
                    grid-template-rows: min-content 1fr min-content;
                    grid-template-columns: 1fr;
                }

                ::slotted(ui-card-header) {
                    grid-area: header;
                }

                ::slotted(ui-card-body) {
                    grid-area: body;
                }

                ::slotted(ui-card-footer) {
                    grid-area: footer;
                }
                :host([bordered]) {
                    border: 1px solid var(--ui-color-shadow);
                }

                :host([rounded]) {
                    border-radius: 1em;
                }
         
            </style>
            <slot>Card</slot>
        `
    }
}

customElements.define("ui-card", UiCard);
/* PrismJS 1.25.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */
;
Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%%]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


class UiCode extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        // this.shadowRoot.querySelector('#code').innerHTML = this.innerHTML;
        // hljs.highlightElement(this.shadowRoot.getElementById('code'));
        this.shadowRoot.addEventListener('slotchange', this.updateHighLight.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener('slotchange', this.updateHighLight.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    updateHighLight(e) {
        let code = this.innerHTML;
        let codeText =  Prism.highlight(code, Prism.languages.html, 'html');
  
        this.shadowRoot.querySelector('#code').innerHTML = codeText;

    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    overflow: auto; 
                    padding: 1.5em;
                }


                code {
                    color: #ccc;
                    background: none;
                    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
                    font-size: 1em;
                    text-align: left;
                    white-space: pre-wrap;
                    word-spacing: normal;
                    word-break: normal;
                    word-wrap: normal;
                    line-height: 1.5;
                    -moz-tab-size: 4;
                    -o-tab-size: 4;
                    tab-size: 4;
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                
                }
                
                .token.comment,
                .token.block-comment,
                .token.prolog,
                .token.doctype,
                .token.cdata {
                    color: #999;
                }
                
                .token.punctuation {
                    color: #ccc;
                }
                
                .token.tag,
                .token.attr-name,
                .token.namespace,
                .token.deleted {
                    color: #e2777a;
                }
                
                .token.function-name {
                    color: #6196cc;
                }
                
                .token.boolean,
                .token.number,
                .token.function {
                    color: #f08d49;
                }
                
                .token.property,
                .token.class-name,
                .token.constant,
                .token.symbol {
                    color: #f8c555;
                }
                
                .token.selector,
                .token.important,
                .token.atrule,
                .token.keyword,
                .token.builtin {
                    color: #cc99cd;
                }
                
                .token.string,
                .token.char,
                .token.attr-value,
                .token.regex,
                .token.variable {
                    color: #7ec699;
                }
                
                .token.operator,
                .token.entity,
                .token.url {
                    color: #67cdcc;
                }
                
                .token.important,
                .token.bold {
                    font-weight: bold;
                }
                .token.italic {
                    font-style: italic;
                }
                
                .token.entity {
                    cursor: help;
                }
                
                .token.inserted {
                    color: green;
                }
            </style>
            <code id="code"></code>
            <div style="display: none;"><slot></slot></div>            
        `
    }
}

customElements.define("ui-code", UiCode);
class UiDoc extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['component'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        this.isInitalized = false;
        super.connectedCallback();
        this.renderDocs();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    renderDocs() {
        if (this.isInitalized) return;
        this.isInitalized = true;
        if (this.component) {
            let c = document.createElement(this.component);
            let attrs = c.constructor.observedAttributes
            let nodeDocs = c.getDoc()
            let doc = `
                <ui-text size="x-large" bold>${nodeDocs.name}</ui-text>
                ${nodeDocs.description}

                <ui-code background="dark" size="small">
                    
                </ui-code>
            `;
            doc += `<div style="display: flex; flex-direction: row;">
                <iframe frameborder="0" allowfullscreen id="output" style="flex: 1; height: 100%%;"> </iframe>
                <ui-edit-node></ui-edit-node>
            </div>`;
            doc += `<ui-text size="x-large" bold>Component Attributes</ui-text>`;

            attrs.forEach(attr => {
                doc += `
                    <ui-text size="large" bold>${attr}</ui-text>
                    ${c.getAttrDoc(attr)}

                `;
            });

            this.innerHTML = doc;
            let iframeDoc = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <title>UI TEST</title>
                <link rel="icon" href="/favicon.png">
                <link rel="apple-touch-icon" href="/favicon.png">
                <script src="/ui.js"></script>
                <style>
                    html, body {
                        width: 100%%;
                        height: 100%%;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        align-items: center;
                    }
                </style>
            </head>
            
            <body>${nodeDocs.codeExample}</body>`
            this.querySelector('iframe').contentWindow.document.write(`${iframeDoc}`);   
            setTimeout(() => {
                this.showDocs();
                let iframe = this.querySelector('iframe').contentWindow.document.body;
                let config = { attributes: true, childList: true, subtree: true };
                let observer = new MutationObserver(this.iframeChanged.bind(this));
                observer.observe(iframe, config)
                this.iframeChanged();
            }, 200);  
            

        }
    }

    iframeChanged(mutationList, observer) {

        let html = this.querySelector('iframe').contentWindow.document.body.querySelector(this.component).outerHTML;
        this.querySelector('ui-code').innerHTML = html.formatXml();
    }

    showDocs() {
        let elm = this.querySelector('iframe').contentWindow.document.body.querySelector(this.component);
        const event = new CustomEvent('UI-EDIT-NODE', {
            detail: elm,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    get component() {
        return this.getAttribute('component');
    }

    set component(value) {
        this.setAttribute('component', value);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    max-width: 900px;
                    gap: 1em;
                    align-self: center;
                }

            </style>
            <slot>ui-doc</slot>
        `
    }
}

customElements.define("ui-doc", UiDoc);
class UiEditNode extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener('UI-EDIT-NODE', this.handleNodeEdit.bind(this));
        this.shadowRoot.addEventListener('input', this.onUserInput.bind(this));
    }

    onUserInput(ev) {
        if (ev.target.name == 'content') {
            this.playElement.innerHTML = ev.target.value;
            return;
        }

        if (ev.target.type == 'checkbox') {
            if (ev.target.checked) {
                this.playElement.setAttribute(ev.target.name, 'true');
            } else {
                this.playElement.removeAttribute(ev.target.name);
            }
        } else {
            this.playElement.setAttribute(ev.target.name, ev.target.value);
        }
    }

    handleNodeEdit(event) {
        this.playElement = event.detail;
        this.processElement();
    }

    removeElement() {
        this.playElement.remove();
        this.innerHTML = '';
    }

    processElement() {
        let attrs = '';
        this.playElement.constructor.observedAttributes.forEach(attr => {
            attrs += ``;
            let v = this.playElement.getAttribute(attr);
            if (attr == 'color' || attr == 'background' || attr == 'accent') {
                attrs += `<ui-input background="grey-9" type="select" name="${attr}" title="element">${attr}`;
             
                Object.keys(uiColorMap).forEach(a => {
                    if (a == v) {
                        attrs += `<ui-input-option label="${a}" selected><ui-spacer background="${a}"></ui-spacer> ${a}</ui-input-option>`;
                    } else {
                        attrs += `<ui-input-option label="${a}" ><ui-spacer background="${a}"></ui-spacer> ${a}</ui-input-option>`;
                    }
                })

                attrs += `</ui-input>`;
            } else if (attr == "size" || attr == "elevation" || attr == "gap") {
                attrs += `<ui-input background="grey-9" type="select" name="${attr}" title="select">${attr}`;
         
                ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'].forEach(a => {
                    if (a == v) {
                        attrs += `<ui-input-option label="${a}" selected ><ui-icon size="${a}">format_size</ui-icon> ${a}</ui-input-option>`;
                    } else {
                        attrs += `<ui-input-option label="${a}"><ui-icon size="${a}">format_size</ui-icon> ${a}</ui-input-option>`;
                    }
                })

                attrs += `</ui-input>`;
            } else if (attr == 'ripple' || attr == 'bold' || attr == 'outline' || attr == 'fab' || attr == 'disabled' || attr == 'rounded' || attr == 'round' || attr == 'elevated' || attr == 'busy') {
                attrs += `<ui-input background="grey-9" type="checkbox" name="${attr}" value="true">${attr}</ui-input>`;
            } else {
                attrs += `<ui-input background="grey-9" type="text" name="${attr}" value="${v}">${attr}</ui-input>`;
            }
        });
  

        let attrHtml = attrs;

        this.innerHTML = attrHtml;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    get background() {
        return this.getAttribute('background');
    }

    set background(newValue) {
        this.setAttribute('background', newValue);
    }

    get elevation() {
        return this.getAttribute('elevation');
    }

    set elevation(newValue) {
        this.setAttribute('elevation', newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    max-height: 350px;
                    padding: 0.5em;
                    overflow-x: hidden;
                    gap: 0.5em;
                    min-width: 18em;
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define("ui-edit-node", UiEditNode);
class UiFlex extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'row', 'column', 'gap', "align", "justify", "height", "width"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                }

                :host([row]) {
                    flex-direction: row;
                }

                :host([column]) {
                    flex-direction: column;
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define("ui-flex", UiFlex);
class UiIcon extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'size', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    font-size: inherit;
                    font-family: 'Material Icons';
                    font-size: inherit;
                    font-weight: normal;
                    font-style: normal;
                    line-height: 1em;
                    letter-spacing: normal;
                    text-transform: none;
                    display: inline-flex;
                    align-self: center;
                    justify-content: center;
                    white-space: nowrap;
                    word-wrap: normal;
                    direction: ltr;
                    width: 1em;
                    height: 1em;
                    animation: 0.25s fadeIn;
                    animation-fill-mode: forwards;
                    visibility: hidden;
                }

                @keyframes fadeIn {
                    90%% {
                      visibility: hidden;
                    }
                    100%% {
                      visibility: visible;
                    }
                }
            </style>
            <slot>image</slot>
        `
    }
}

customElements.define("ui-icon", UiIcon);
class UiInputOption extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background','value', 'label', "selected"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        this.setAttribute("slot", "options");
        if (!this.hasAttribute("size")) this.setAttribute("size", "smaller");
        super.connectedCallback();
        this.addEventListener('mousedown', this.onlick.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mousedown', this.onlick.bind(this));
    }

    onlick(e) {
       if (this.parentElement.nodeName == "UI-INPUT") {
            this.parentElement.querySelectorAll("ui-input-option").forEach(e => e.removeAttribute("selected"));
            this.setAttribute("selected", "true");
        }
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get label() {
        return this.getAttribute("label");
    }

    set label(value) {
        this.setAttribute("label", value);
    }

    get selected() {
        return this.hasAttribute("selected");
    }

    set selected(value) {
        if (value) {
            this.setAttribute("selected", "");
        } else {
            this.removeAttribute("selected");
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    gap: 1em;
                    padding: 0.5em 1em;
                    opacity: 0.7;
                }
                :host(:hover) {
                    background-color: var(--ui-color-highlight);
                }

                :host([selected]) {
                    background-color: var(--ui-color-highlight);
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define("ui-input-option", UiInputOption);
class UiInput extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
        this.isDropdown = false;
    }



    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'accent', 'name', 'value', 'type', 'checked', 'rounded', "round", 'outline'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        
        if (!this.inputElement) {
            this.inputElement = document.createElement("input");
            this.inputElement.setAttribute("slot", "input");
            this.inputElement.setAttribute("required", true);
            this.appendChild(this.inputElement);
        }

        super.connectedCallback();
        this.inputElement.addEventListener('input', this.inputHandler.bind(this));
        this.inputElement.addEventListener('validitychange', this.inputHandler.bind(this));
        this.updateInputElement("name");
        this.updateInputElement("value");
        this.updateInputElement("type");
        this.updateInputElement("checked");
        this.inputValidity();  
        this.inputElement.addEventListener("blur", this.onBlurHandler.bind(this));   
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.inputElement.removeEventListener('input', this.inputHandler.bind(this));
        this.inputElement.removeEventListener('validitychange', this.inputHandler.bind(this));    
    }


    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
        if (["name", "value", "type", "checked"].includes(name)) {
            this.updateInputElement(name);
        }
    }

    onBlurHandler(ev) {
        if (this.type == "select") {
            let value = "";
            let rvalue = "";
            setTimeout(() => {
                this.querySelectorAll("ui-input-option").forEach(e => {
                    if (e.selected) {
                        value = e.label || e.innerText;
                        rvalue = e.value;
                    } 
                    e.style.display = "flex";
                });
                this.value = value;
                this.rvalue = rvalue;
                this.dispatchEvent(new Event("input", {bubbles: true, cancelable: true, composed: true}));
            }, 100);
        }
    }

    inputHandlerWindow(ev) {
        if (this.type == "radio" && ev.target.type == "radio" && ev.target.name == this.name && ev.target.value != this.value) {
            this.checked = false;
        }
    }  

    inputHandler(ev) {
        this.inputValidity();
        if (this.type == "checkbox" || this.type == "radio") {
            this.checked = this.inputElement.checked;
        } else {
            this.value = this.inputElement.value;
        }
        if (this.type == "select") {
            ev.stopPropagation();
            this.filterOptions();
        }

    } 

    filterOptions() {
        this.querySelectorAll("ui-input-option").forEach(e => {
            let str =  e.label || e.innerText;
            if (str.toLowerCase().includes(this.value.toLowerCase())) {
                e.style.display = "flex";
            } else {
                e.style.display = "none";
            }
        });
    }

    inputValidity() {
        if (this.inputElement.checkValidity()) {
            this.setAttribute('valid', true);
        } else {
            this.removeAttribute('valid');
        }
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        if (value == null) value = "";
        this.setAttribute('value', value.trim());
        this.inputElement.value = value.trim();
    }

    get rvalue() {
        return this._rvalue;
    }

    set rvalue(value) {
        if (value == null) value = "";
        this._rvalue = value || this.value;
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        this.setAttribute('type', value);
    }

    get checked() {
        return this.hasAttribute('checked');
    }
    set checked(value) {
        if (value == true) {
            this.setAttribute('checked', true);
        } else {
            this.removeAttribute('checked');
        }
    }

    updateInputElement(name) {
        if (this.inputElement) {
            if (name == "name") {
                this.inputElement.setAttribute("name", this.name);
            } else if (name == "value") {
                if (this.value == null) this.value = "";
                this.inputElement.setAttribute("value", this.value);
            } else if (name == "type") {
                this.inputElement.setAttribute("type", this.type);
            } else if (name == "checked") {
                this.inputElement.checked = this.checked;
            }
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
               :host {
                   display: flex;
                   flex-direction: row;
                   align-items: center;
                   position: relative;
                   height: 3.5em;
                   min-height: 3.5em;
                   max-height: 3.5em;
                   min-width: 10em;
               }

               :host([outline]) {
                    border: 2px solid var(--ui-color-accent-lighten);
               }

               :host([outline]:focus-within), 
               :host([outline]:hover) {
                    border: 2px solid var(--ui-color-accent);
                }

                :host([outline]:focus-within) label,
                :host([outline]:hover) label {
                    opacity: 0.7;
                }

               :host([outline]) ::slotted(input),
               :host([outline]) label,
               :host([background]) ::slotted(input),
               :host([background]) label {
                   padding-left: 0.5em;
                   padding-right: 0.5em;
               }

               :host(:not([outline])) {
                   border-bottom: 2px solid var(--ui-color-accent-lighten);
               }

               :host(:not([outline]):hover),
               :host(:not([outline]):focus-within) {
                    border-bottom: 2px solid var(--ui-color-accent);
                }

                :host(:not([outline]):hover) label,
                :host(:not([outline]):focus-within) label {
                    opacity: 0.7;
                }

               :host([rounded]) {
                    border-radius: 0.5em;
               }

               :host([round]) {
                    border-radius: calc(3.5em / 2);
                }

                :host([round]) ::slotted(input),
                :host([round]) label {
                   padding-left: 1.5em;
                   padding-right: 1.5em;
                }

               ::slotted(input) {
                   appearance: none;
                   -webkit-appearance: none;
                   position: absolute;
                   width: 100%%;
                   height: 100%%;
                   border: none;
                   outline: none;
                   font-size: inherit;
                   background-color: transparent;
                   padding: 1.25em 0px 0px 0px;
                   margin: 0px;
                   color: currentColor;
               }
               label {
                    transition: 0.3s;
                    white-space: nowrap;
                    opacity: 0.8;
                    margin-top: -1.8em;
                    font-size: 0.8em;
               }

               svg { display: block;}

               .check, .checked, .radiocheck, .radiochecked {
                    display: none;
                    box-sizing: content-box;
                    color: var(--ui-color-accent);
                    position: relative;
                    transition: 0.3s;
                    pointer-events: none;
               }


               :host([type="checkbox"]),
               :host([type="radio"]) {
                   gap: 1em;
                   padding-left: 1em
               }
               :host([type="checkbox"]) label,
               :host([type="radio"]) label {
                    margin-top: 0px;
               }

               :host([type="checkbox"][checked]) .checked,
               :host([type="radio"][checked]) .radiochecked {
                    display: block;
               }

               :host([type="checkbox"]:not([checked])) .check,
               :host([type="radio"]:not([checked])) .radiocheck {
                    display: block;
                }
                :host([type="checkbox"]) .check::after, 
                :host([type="checkbox"]) .checked::after,
                :host([type="radio"]) .radiocheck::after,
                :host([type="radio"]) .radiochecked::after {
                    background-color: currentColor;
                    content: "";
                    position: absolute;
                    width: 2.5em;
                    height: 2.5em;
                    top: -0.5em;
                    left: -0.5em;
                    border-radius: 50%%;
                    opacity: 0.2;
                    transform: scale3d(0,0,1);
                    transition: transform .3s cubic-bezier(0,0,.2,1)
                }
                :host([type="checkbox"]:hover) .check::after, 
                :host([type="checkbox"]:hover) .checked::after,
                :host([type="radio"]:hover) .radiocheck::after,
                :host([type="radio"]:hover) .radiochecked::after {
                    transform: scaleX(1);
                }


                :host([type="color"]) ::slotted(input) {
                    padding-top: 1.70em!important;
                    padding-bottom: 0.25em!important;
                    
                }
                :host([type="color"]:hover) ::slotted(input) {
                    border-color: var(--ui-color-accent);
                }

                .dropdown {
                    position: absolute;
                    top: calc(3em + 6px);
                    left: -2px;
                    background-color: var(--ui-color-background);
                    z-index: 150;
                    width: calc(100%% + 4px);
                    display: none;
                    
                }
                .dropdown ui-card-body { 
                    padding: 0px;
                    max-height: 15em;
                    overflow-y: auto;
                }

                :host([type="select"]:focus-within) .dropdown {
                    display: block;
                }

            </style>
            <slot name="input"></slot>
            <ui-card class="dropdown" elevation="small">
                <ui-card-body>
                    <slot name="options"></slot>
                </ui-card-body>
            </ui-card>
            <div  class="check">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
            </div>
            <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </svg>
            </div>

            <div  class="radiocheck">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
            </div>
            <div class="radiochecked">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="1.5em" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
            </div>

            <label><slot></slot></label>
        `
    }
}

customElements.define("ui-input", UiInput);
class UiModal extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["top", "bottom", "left", "right", "open"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    get open() {
        return this.hasAttribute("open");
    }

    set open(value) {
        if (value) {
            this.setAttribute("open", "");
        } else {
            this.removeAttribute("open");
        }
    }


    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: none; 
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%%;
                    height: 100%%;
                    z-index: 900;
                    background-color: var(--ui-color-shadow);
                 
                }

                :host([bordered]) {
                    border: 1px solid var(--ui-color-shadow);
                }
                .ui-modal {
                    display: block; 
                    position: absolute;
                    z-index: 900;

                    
                }
                :host(:not([top]):not([bottom]):not([right]):not([left])) .ui-modal {
                    left: 50%%;
                    top: 50%%;
                    transform: translateX(-50%%) translateY(-50%%);
                }

                :host([top]) .ui-modal {
                    left: 50%%;
                    top: 1em;
                    transform: translateX(-50%%) translateY(0%%);
                }

                :host([bottom]) .ui-modal {
                    left: 50%%;
                    bottom: 1em;
                    transform: translateX(-50%%) translateY(0%%);
                }

                :host([left]) .ui-modal {
                    left: 1em;
                    bottom: 50%%;
                    transform: translateX(0%%) translateY(50%%)
                }
                
                :host([right]) .ui-modal {
                    right: 1em;
                    bottom: 50%%;
                    transform: translateX(0%%) translateY(50%%)
                }

                :host([top][right]) .ui-modal {
                    top: 1em;
                    right: 1em;
                    bottom: unset;
                    left: unset;
                    transform: none;
                }

                :host([top][left]) .ui-modal {
                    top: 1em;
                    right: unset;
                    bottom: unset;
                    left: 1em;
                    transform: none;
                }

                :host([bottom][right]) .ui-modal {
                    top: unset;
                    right: 1em;
                    bottom: 1em;
                    left: unset;
                    transform: none;
                }

                :host([bottom][left]) .ui-modal {
                    top: unset;
                    right: unset;
                    bottom: 1em;
                    left: 1em;
                    transform: none;
                }
 
                    
                ::slotted(ui-card) {
                    max-height: calc(100vh - 1em);
                }

                :host([open])  {
                    display: block;
                }
            </style>
            <div class="ui-modal">
                <slot>Card</slot>
            </div>
            
        `
    }
}

customElements.define("ui-modal", UiModal);
class UiRipple extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        this.elementParent = this.parentNode.host ? this.parentNode.host : this.parentNode;
        this.elementParent.addEventListener('mousedown', this.rippleEffect.bind(this));
        this.addEventListener('animationend', this.removeEffect.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.elementParent.removeEventListener('mousedown', this.rippleEffect.bind(this));
        this.removeEventListener('animationend', this.removeEffect.bind(this));
    }
    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    rippleEffect(e) {
        let offsetInfo = this.elementParent.getBoundingClientRect();
        let maxLength = offsetInfo.width > offsetInfo.height ? offsetInfo.width : offsetInfo.height;
        let circleD = maxLength * 2;

        this.elementParent.style.position = 'relative';
        this.elementParent.style.overflow = 'hidden';
        this.style.width = circleD + 'px';
        this.style.height = circleD + 'px';
        this.style.backgroundColor = 'currentColor';
        this.style.borderRadius = '500px';
        this.style.left = ((e.pageX - offsetInfo.left) - circleD/2) + 'px';
        this.style.top = ((e.pageY - offsetInfo.top) - circleD/2) + 'px';
        this.style.animation = 'ripple 0.6s forwards cubic-bezier(0, 0, 0.2, 1)'
    }

    removeEffect(e) {
        this.elementParent.style.position = '';
        this.elementParent.style.overflow = '';
        this.style.width="";
        this.style.height="";
        this.style.backgroundColor="";
        this.style.animation='';
        this.style.borderRadius="";
        this.style.left="";
        this.style.top="";
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            :host {
                display: block;
                position: absolute;
                background-color: transparent;
                opacity: 0.4;
                width: 0;
                height: 0;
                Pointer-Events: none;
                color: inherit;
                
            }
            @keyframes ripple {
                0%% {
                    transform: scale(0);
                    opacity: 1;
                }
                80%% {
                    transform: scale(1);
                }
                100%% {
                    opacity: 0;
                }
            }
            </style>
        `
    }
}

customElements.define("ui-ripple", UiRipple);
class UiSpacer extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['background','width', 'height'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    font-size: 1em;
                    width: 1em;
                }
            </style>
            &nbsp;
        `
    }
}

customElements.define("ui-spacer", UiSpacer);
class UiText extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'bold', "flex", "paragraph", "nowrap"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    line-height: 1.5em;
                }

                :host([nowrap]) {
                    white-space: nowrap;
                }

                :host([paragraph]) {
                    padding-bottom: 1em;
                }
                
                :host([paragraph]:last-of-type) {
                    padding-bottom: 0;
                }

                :host([indent]) {
                    text-indent: 2em;
                }
                
            </style>
            <slot>Test Ui Text</slot>
        `
    }
}

customElements.define("ui-text", UiText);
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%%, " + v + "%%)" :
          "hsva(" + h + ", " + s + "%%, " + v + "%%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%%, " + l + "%%)" :
          "hsla(" + h + ", " + s + "%%, " + l + "%%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%%", g: mathRound(bound01(this._g, 255) * 100) + "%%", b: mathRound(bound01(this._b, 255) * 100) + "%%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%%, " + mathRound(bound01(this._g, 255) * 100) + "%%, " + mathRound(bound01(this._b, 255) * 100) + "%%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%%, " + mathRound(bound01(this._g, 255) * 100) + "%%, " + mathRound(bound01(this._b, 255) * 100) + "%%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%%, 50%%)" or "hsl 0 100%% 50%%"
//     "hsla(0, 100%%, 50%%, 1)" or "hsla 0 100%% 50%%, 1"
//     "hsv(0, 100%%, 100%%)" or "hsv 0 100%% 100%%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i %% 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) %% 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) %% 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) %% 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) %% 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) %% 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) %% 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) %% 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) %% 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) %% 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) %% 360; --results; ) {
        hsl.h = (hsl.h + part) %% 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) %% 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n %% max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);

/*
 * Color map for UI color palette
 */
const uiColorMap = {
    'primary-dark': {
        bg: "#001E60",
        fg: "#ffffff"
    },
    'primary-light': {
        bg: "#0047BB",
        fg: "#ffffff"
    },
    'secondary-dark': {
        bg: "#097A49",
        fg: "#ffffff"
    },
    'secondary-light': {
        bg: "#48D597",
        fg: "#000000"
    },
    'success': {
        bg: "#097A49",
        fg: "#ffffff"
    },
    'info': {
        bg: "#0047BB",
        fg: "#ffffff"
    },
    'danger': {
        bg: "#B50D12",
        fg: "#ffffff"
    },
    'warning': {
        bg: "#A66102",
        fg: "#ffffff"
    },
    'base': {
        bg: "#ffffff",
        fg: "#000000"
    },
    'dark': {
        bg: "#000000",
        fg: "#ffffff"
    },
    'grey-1': {
        bg: "#242526",
        fg: "#ffffff"
    },
    'grey-2': {
        bg: "#313336",
        fg: "#ffffff"
    },
    'grey-3': {
        bg: "#3f4145",
        fg: "#ffffff"
    },
    'grey-4': {
        bg: "#53565a",
        fg: "#ffffff"
    },
    'grey-5': {
        bg: "#72767a",
        fg: "#ffffff"
    },
    'grey-6': {
        bg: "#8e9399",
        fg: "#000000"
    },
    'grey-7': {
        bg: "#acb0b5",
        fg: "#000000"
    },
    'grey-8': {
        bg: "#d0d4d9",
        fg: "#000000"
    },
    'grey-9': {
        bg: "#edf0f2",
        fg: "#000000"
    },
    'grey-10': {
        bg: "#f8f9f9",
        fg: "#000000"
    },
    'red-1': {
        bg: "#471819",
        fg: "#ffffff"
    },
    'red-2': {
        bg: "#691518",
        fg: "#ffffff"
    },
    'red-3': {
        bg: "#8f0e13",
        fg: "#ffffff"
    },
    'red-4': {
        bg: "#b50d12",
        fg: "#ffffff"
    },
    'red-5': {
        bg: "#de1b21",
        fg: "#ffffff"
    },
    'red-6': {
        bg: "#fa5056",
        fg: "#000000"
    },
    'red-7': {
        bg: "#fc9094",
        fg: "#000000"
    },
    'red-8': {
        bg: "#fcc7c9",
        fg: "#000000"
    },
    'red-9': {
        bg: "#fce8e9",
        fg: "#000000"
    },
    'red-10': {
        bg: "#fff5f5",
        fg: "#000000"
    },
    'pink-1': {
        bg: "#451726",
        fg: "#ffffff"
    },
    'pink-2': {
        bg: "#661430",
        fg: "#ffffff"
    },
    'pink-3': {
        bg: "#8c0e38",
        fg: "#ffffff"
    },
    'pink-4': {
        bg: "#b30c44",
        fg: "#ffffff"
    },
    'pink-5': {
        bg: "#db1a5b",
        fg: "#ffffff"
    },
    'pink-6': {
        bg: "#f74f87",
        fg: "#000000"
    },
    'pink-7': {
        bg: "#fa8eb2",
        fg: "#000000"
    },
    'pink-8': {
        bg: "#fcc7d9",
        fg: "#000000"
    },
    'pink-9': {
        bg: "#fce8ef",
        fg: "#000000"
    },
    'pink-10': {
        bg: "#fcf5f7",
        fg: "#000000"
    },
    'purple-1': {
        bg: "#371c52",
        fg: "#ffffff"
    },
    'purple-2': {
        bg: "#4d2378",
        fg: "#ffffff"
    },
    'purple-3': {
        bg: "#642b9e",
        fg: "#ffffff"
    },
    'purple-4': {
        bg: "#7e40bd",
        fg: "#ffffff"
    },
    'purple-5': {
        bg: "#9557d4",
        fg: "#ffffff"
    },
    'purple-6': {
        bg: "#b277ed",
        fg: "#000000"
    },
    'purple-7': {
        bg: "#cda3f7",
        fg: "#000000"
    },
    'purple-8': {
        bg: "#e2cdf7",
        fg: "#000000"
    },
    'purple-9': {
        bg: "#f2ebfa",
        fg: "#000000"
    },
    'purple-10': {
        bg: "#faf7fc",
        fg: "#000000"
    },
    'indigo-1': {
        bg: "#222261",
        fg: "#ffffff"
    },
    'indigo-2': {
        bg: "#2b2b94",
        fg: "#ffffff"
    },
    'indigo-3': {
        bg: "#3939bd",
        fg: "#ffffff"
    },
    'indigo-4': {
        bg: "#4f4fdb",
        fg: "#ffffff"
    },
    'indigo-5': {
        bg: "#6666e3",
        fg: "#ffffff"
    },
    'indigo-6': {
        bg: "#8787fa",
        fg: "#000000"
    },
    'indigo-7': {
        bg: "#adadff",
        fg: "#000000"
    },
    'indigo-8': {
        bg: "#d1d1ff",
        fg: "#000000"
    },
    'indigo-9': {
        bg: "#ededff",
        fg: "#000000"
    },
    'indigo-10': {
        bg: "#f7f7ff",
        fg: "#000000"
    },
    'navy-1': {
        bg: "#001238",
        fg: "#ffffff"
    },
    'navy-2': {
        bg: "#001e60",
        fg: "#ffffff"
    },
    'navy-3': {
        bg: "#00308a",
        fg: "#ffffff"
    },
    'navy-4': {
        bg: "#0047bb",
        fg: "#ffffff"
    },
    'navy-5': {
        bg: "#005bed",
        fg: "#ffffff"
    },
    'navy-6': {
        bg: "#4289f5",
        fg: "#000000"
    },
    'navy-7': {
        bg: "#8cb6f5",
        fg: "#000000"
    },
    'navy-8': {
        bg: "#c0d7fa",
        fg: "#000000"
    },
    'navy-9': {
        bg: "#e6f0ff",
        fg: "#000000"
    },
    'navy-10': {
        bg: "#f5f8fc",
        fg: "#000000"
    },
    'blue-1': {
        bg: "#0c2b3b",
        fg: "#ffffff"
    },
    'blue-2': {
        bg: "#093d57",
        fg: "#ffffff"
    },
    'blue-3': {
        bg: "#064e73",
        fg: "#ffffff"
    },
    'blue-4': {
        bg: "#066594",
        fg: "#ffffff"
    },
    'blue-5': {
        bg: "#0d7db5",
        fg: "#ffffff"
    },
    'blue-6': {
        bg: "#239cd9",
        fg: "#000000"
    },
    'blue-7': {
        bg: "#53bff5",
        fg: "#000000"
    },
    'blue-8': {
        bg: "#b0def5",
        fg: "#000000"
    },
    'blue-9': {
        bg: "#e1f2fa",
        fg: "#000000"
    },
    'blue-10': {
        bg: "#f2f9fc",
        fg: "#000000"
    },
    'teal-1': {
        bg: "#082e2b",
        fg: "#ffffff"
    },
    'teal-2': {
        bg: "#06403b",
        fg: "#ffffff"
    },
    'teal-3': {
        bg: "#07524b",
        fg: "#ffffff"
    },
    'teal-4': {
        bg: "#056960",
        fg: "#ffffff"
    },
    'teal-5': {
        bg: "#038277",
        fg: "#ffffff"
    },
    'teal-6': {
        bg: "#0aa396",
        fg: "#000000"
    },
    'teal-7': {
        bg: "#1ec7b9",
        fg: "#000000"
    },
    'teal-8': {
        bg: "#abe0dc",
        fg: "#000000"
    },
    'teal-9': {
        bg: "#d7f5f2",
        fg: "#000000"
    },
    'teal-10': {
        bg: "#edfaf9",
        fg: "#000000"
    },
    'mint-1': {
        bg: "#0a2e1e",
        fg: "#ffffff"
    },
    'mint-2': {
        bg: "#094028",
        fg: "#ffffff"
    },
    'mint-3': {
        bg: "#075433",
        fg: "#ffffff"
    },
    'mint-4': {
        bg: "#097a49",
        fg: "#ffffff"
    },
    'mint-5': {
        bg: "#12995f",
        fg: "#ffffff"
    },
    'mint-6': {
        bg: "#27b875",
        fg: "#000000"
    },
    'mint-7': {
        bg: "#48d597",
        fg: "#000000"
    },
    'mint-8': {
        bg: "#abe0c9",
        fg: "#000000"
    },
    'mint-9': {
        bg: "#daf5e9",
        fg: "#000000"
    },
    'mint-10': {
        bg: "#edfaf3",
        fg: "#000000"
    },
    'green-1': {
        bg: "#1e2b0a",
        fg: "#ffffff"
    },
    'green-2': {
        bg: "#283d09",
        fg: "#ffffff"
    },
    'green-3': {
        bg: "#344f0b",
        fg: "#ffffff"
    },
    'green-4': {
        bg: "#3f6605",
        fg: "#ffffff"
    },
    'green-5': {
        bg: "#4e8003",
        fg: "#ffffff"
    },
    'green-6': {
        bg: "#689e18",
        fg: "#000000"
    },
    'green-7': {
        bg: "#8cc63f",
        fg: "#000000"
    },
    'green-8': {
        bg: "#c6dba7",
        fg: "#000000"
    },
    'green-9': {
        bg: "#e4f2ce",
        fg: "#000000"
    },
    'green-10': {
        bg: "#f2fae6",
        fg: "#000000"
    },
    'yellow-1': {
        bg: "#36240c",
        fg: "#ffffff"
    },
    'yellow-2': {
        bg: "#4d310b",
        fg: "#ffffff"
    },
    'yellow-3': {
        bg: "#663e07",
        fg: "#ffffff"
    },
    'yellow-4': {
        bg: "#854e03",
        fg: "#ffffff"
    },
    'yellow-5': {
        bg: "#a66102",
        fg: "#ffffff"
    },
    'yellow-6': {
        bg: "#c97d12",
        fg: "#000000"
    },
    'yellow-7': {
        bg: "#e6a243",
        fg: "#000000"
    },
    'yellow-8': {
        bg: "#f5cc93",
        fg: "#000000"
    },
    'yellow-9': {
        bg: "#faecd9",
        fg: "#000000"
    },
    'yellow-10': {
        bg: "#fff8ed",
        fg: "#000000"
    },
    'orange-1': {
        bg: "#3d1e14",
        fg: "#ffffff"
    },
    'orange-2': {
        bg: "#5e2413",
        fg: "#ffffff"
    },
    'orange-3': {
        bg: "#80280d",
        fg: "#ffffff"
    },
    'orange-4': {
        bg: "#a6310d",
        fg: "#ffffff"
    },
    'orange-5': {
        bg: "#c94218",
        fg: "#ffffff"
    },
    'orange-6': {
        bg: "#e8663f",
        fg: "#000000"
    },
    'orange-7': {
        bg: "#f2997e",
        fg: "#000000"
    },
    'orange-8': {
        bg: "#f5ccbf",
        fg: "#000000"
    },
    'orange-9': {
        bg: "#fce9e3",
        fg: "#000000"
    },
    'orange-10': {
        bg: "#faf6f5",
        fg: "#000000"
    },
}

const uiSizeMap = {
    'xx-small': '0.5625em',
    'x-small': '0.625em',
    'small': '0.8333em',
    'medium': '1em',
    'large': '1.125em',
    'x-large': '1.5em',
    'xx-large': '2em',
    'xxx-large': '3em'
}

const uiSizes = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'];

function getUiSize(size) {
    return uiSizeMap[size] ? uiSizeMap[size] : size;
}

/*
 * @param {HTMLElement} element - The element to set the color on
 * @param {string} color - color name or color value
 */
function setUiForgroundColor(element, color) {
    let c = uiColorMap[color] ? uiColorMap[color].bg : color;
    element.style.color = c;
    element.style.setProperty('--ui-color-shadow', tinycolor(c).setAlpha(0.18).toRgbString());

}

/*
 * @param {HTMLElement} element - The element to set the color on
 * @param {string} color - color name or color value
 * @param {string} bgColor - background color name or color value
 */
function setUiBackgroundColor(element, color, hasColor) {
    let c = uiColorMap[color] ? uiColorMap[color].bg : color;
    element.style.setProperty('--ui-color-lighten', tinycolor(c).lighten(25).toHexString());
    element.style.setProperty('--ui-color-darken', tinycolor(c).darken(25).toHexString());
    let colors = [];

    let splitcomplement = tinycolor(c).splitcomplement();
    let monochromatic = tinycolor(c).monochromatic();
    let triad = tinycolor(c).triad();
    let tetrad = tinycolor(c).tetrad();

    colors = [splitcomplement[1].toHexString(), triad[1].toHexString(), tetrad[1].toHexString()];
    let accent = tinycolor.mostReadable(c, colors).toHexString();

    if (tinycolor.readability(c, accent) < 1.1) {
        accent = monochromatic[3].toHexString();
    }
    element.style.setProperty('--ui-color-accent', accent);
    element.style.setProperty('--ui-color-accent-lighten', tinycolor(accent).setAlpha(0.5).toRgbString());

    colors = [splitcomplement[2].toHexString(), triad[2].toHexString(), tetrad[2].toHexString(), tetrad[3].toHexString()];
    accent = tinycolor.mostReadable(c, colors).toHexString();
    if (tinycolor.readability(c, accent) < 1.1) {
        accent = monochromatic[5].toHexString();
    }
    element.style.setProperty('--ui-color-highlight', accent);
    let readable = tinycolor.mostReadable(c, ["#ffffff", "#000000"]);
    element.style.color = readable;
    element.style.setProperty('--ui-color-shadow', tinycolor("#000000").setAlpha(0.15).toRgbString());
    element.style.backgroundColor = c;
    element.style.setProperty('--ui-color-background', c);
}

function setUiAccentColor(element, color) {
    let c = uiColorMap[color] ? uiColorMap[color].bg : color;
    element.style.setProperty('--ui-color-accent', c);
    element.style.setProperty('--ui-color-accent-lighten', tinycolor(c).setAlpha(0.5).toRgbString());
}


function setUiBoxShadow(element, size) {
    switch (size) {
        case 'xx-small': {
            element.style.boxShadow = `0 1px 1px 0 var(--ui-color-shadow), 0 2px 1px -1px var(--ui-color-shadow), 0 1px 3px 0 var(--ui-color-shadow)`;
            break;
        }
        case 'x-small': {
            element.style.boxShadow = `0 2px 2px 0 var(--ui-color-shadow), 0 3px 1px -2px var(--ui-color-shadow), 0 1px 5px 0 var(--ui-color-shadow)`;
            break;
        }
        case 'small': {
            element.style.boxShadow = `0 3px 4px 0 var(--ui-color-shadow), 0 3px 3px -2px var(--ui-color-shadow), 0 1px 8px 0 var(--ui-color-shadow)`;
            break;
        }
        case 'medium': {
            element.style.boxShadow = `0 4px 5px 0 var(--ui-color-shadow), 0 1px 10px 0 var(--ui-color-shadow), 0 2px 4px -1px var(--ui-color-shadow)`;
            break;
        }
        case 'large': {
            element.style.boxShadow = `0 6px 10px 0 var(--ui-color-shadow), 0 1px 18px 0 var(--ui-color-shadow), 0 3px 5px -1px var(--ui-color-shadow)`;
            break;
        }
        case 'x-large': {
            element.style.boxShadow = `0 8px 10px 1px var(--ui-color-shadow), 0 3px 14px 2px var(--ui-color-shadow), 0 5px 5px -3px var(--ui-color-shadow)`;
            break;
        }
        case 'xx-large': {
            element.style.boxShadow = `0 9px 12px 1px var(--ui-color-shadow), 0 3px 16px 2px var(--ui-color-shadow), 0 5px 6px -3px var(--ui-color-shadow)`;
            break;
        }
        case 'xxx-large': {
            element.style.boxShadow = `0 12px 17px 2px var(--ui-color-shadow), 0 5px 22px 4px var(--ui-color-shadow), 0 7px 8px -4px var(--ui-color-shadow)`;
            break;
        }

    }
}


String.prototype.escapeHtml = function () {
    return this.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

String.prototype.formatXml = function () {
    const PADDING = ' '.repeat(2); // set desired indent size here
    const reg = /(>)(<)(\/*)/g;
    let pad = 0;
    let xml = this;
    xml = xml.replace(reg, '$1\r\n$2$3');

    return xml.split('\r\n').map((node, index) => {
        let indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/) && pad > 0) {
            pad -= 1;
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        pad += indent;

        return PADDING.repeat(pad - indent) + node + '\r\n';
    }).join('\r\n');
}

