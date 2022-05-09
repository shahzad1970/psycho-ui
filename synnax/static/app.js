
class UiApp extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.renderCoreStyles();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', "background"];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener("contextmenu", this.showDocs.bind(this));
        window.addEventListener("input", (e) => {
            console.log(e)
        })
    }


    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("contextmenu", this.showDocs.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    showDocs(e) {
        let elm = document.elementFromPoint(e.clientX,e.clientY);

        const event = new CustomEvent('UI-EDIT-NODE', {
            detail: elm,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-areas: 'header header'
                                         'nav main';
                    grid-template-rows: min-content 1fr;
                    grid-template-columns: min-content 1fr;
                    width: 100%;
                    height: 100%;
                }

                :host > ::slotted(ui-app-header) {
                    grid-area: header;
                    align-self: start;
                }
                :host > ::slotted(ui-app-navigation) {
                    grid-area: nav;
                }
                :host > ::slotted(ui-app-main) {
                    grid-area: main;
                }
            </style>
            <slot>UI-APP</slot>
        `
    }

    renderCoreStyles() {
        let style = document.createElement("style");
        style.innerHTML = `
            :root {
                font-size: 14px;
            }

            body {
                margin: 0;
                padding: 0;
                height: 100vh;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
            }

            * {
                box-sizing: border-box;
            }

        `
        document.head.appendChild(style);

        let mdIcons = document.createElement("link");
        mdIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        mdIcons.rel = "stylesheet";
        document.head.appendChild(mdIcons);
    }

}

customElements.define("ui-app", UiApp);