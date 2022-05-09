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