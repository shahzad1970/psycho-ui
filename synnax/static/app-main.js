class UiAppMain extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'align', 'justify'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener('load', this.handleRouteChange.bind(this));
        window.addEventListener('popstate', this.handleRouteChange.bind(this));
        this.state.on("color", this.colorChanged.bind(this));
    }

    colorChanged(value) {
        console.log("Color changed", value);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('load', this.handleRouteChange.bind(this));
        window.removeEventListener('popstate', this.handleRouteChange.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    handleRouteChange(e) {

        let path = window.location.pathname;
        if (path.startsWith('/app/doc/')) {
            let c = path.substring(9);
            this.innerHTML = `<ui-doc component="${c}"></ui-doc>`;
        }
        return false;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1em;
                    overflow: auto;
                    padding: 1.5em;
                }

            </style>
            <slot>App Main Container</slot>
        `
    }
}

customElements.define("ui-app-main", UiAppMain);