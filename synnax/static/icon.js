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
                    90% {
                      visibility: hidden;
                    }
                    100% {
                      visibility: visible;
                    }
                }
            </style>
            <slot>image</slot>
        `
    }
}

customElements.define("ui-icon", UiIcon);