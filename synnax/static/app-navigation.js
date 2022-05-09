class UiAppNavigation extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation', 'gap', 'width', 'open'];
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

    stateChangedCallback(name, oldValue, newValue) {
        console.log("State Changed", name, oldValue, newValue);
        if (name == "ui-app-navigation") {
            this.open = !this.open;
        }
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
                    flex-direction: column;
                    overflow-y: auto;
                    padding: 1em 0em;
                    gap: 0.5em;
           
                }
                ::slotted(ui-button) {
                    line-height: 2.5em;
                }
                :host([open]) {
                    display: flex;
                }
            </style>
            <slot>Navigation Component</slot>
        `
    }
}

customElements.define("ui-app-navigation", UiAppNavigation);