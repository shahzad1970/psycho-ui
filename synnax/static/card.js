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