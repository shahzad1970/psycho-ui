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