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