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