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
                    width: 100%;
                    height: 100%;
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
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }

                :host([top]) .ui-modal {
                    left: 50%;
                    top: 1em;
                    transform: translateX(-50%) translateY(0%);
                }

                :host([bottom]) .ui-modal {
                    left: 50%;
                    bottom: 1em;
                    transform: translateX(-50%) translateY(0%);
                }

                :host([left]) .ui-modal {
                    left: 1em;
                    bottom: 50%;
                    transform: translateX(0%) translateY(50%)
                }
                
                :host([right]) .ui-modal {
                    right: 1em;
                    bottom: 50%;
                    transform: translateX(0%) translateY(50%)
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