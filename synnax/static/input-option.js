class UiInputOption extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background','value', 'label', "selected"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        this.setAttribute("slot", "options");
        if (!this.hasAttribute("size")) this.setAttribute("size", "smaller");
        super.connectedCallback();
        this.addEventListener('mousedown', this.onlick.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mousedown', this.onlick.bind(this));
    }

    onlick(e) {
       if (this.parentElement.nodeName == "UI-INPUT") {
            this.parentElement.querySelectorAll("ui-input-option").forEach(e => e.removeAttribute("selected"));
            this.setAttribute("selected", "true");
        }
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get label() {
        return this.getAttribute("label");
    }

    set label(value) {
        this.setAttribute("label", value);
    }

    get selected() {
        return this.hasAttribute("selected");
    }

    set selected(value) {
        if (value) {
            this.setAttribute("selected", "");
        } else {
            this.removeAttribute("selected");
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    gap: 1em;
                    padding: 0.5em 1em;
                    opacity: 0.7;
                }
                :host(:hover) {
                    background-color: var(--ui-color-highlight);
                }

                :host([selected]) {
                    background-color: var(--ui-color-highlight);
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define("ui-input-option", UiInputOption);