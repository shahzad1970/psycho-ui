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
                   width: 100%;
                   height: 100%;
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
                    border-radius: 50%;
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
                    width: calc(100% + 4px);
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