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