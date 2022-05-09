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