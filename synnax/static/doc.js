class UiDoc extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['component'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        this.isInitalized = false;
        super.connectedCallback();
        this.renderDocs();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    renderDocs() {
        if (this.isInitalized) return;
        this.isInitalized = true;
        if (this.component) {
            let c = document.createElement(this.component);
            let attrs = c.constructor.observedAttributes
            let nodeDocs = c.getDoc()
            let doc = `
                <ui-text size="x-large" bold>${nodeDocs.name}</ui-text>
                ${nodeDocs.description}

                <ui-code background="dark" size="small">
                    
                </ui-code>
            `;
            doc += `<div style="display: flex; flex-direction: row;">
                <iframe frameborder="0" allowfullscreen id="output" style="flex: 1; height: 100%;"> </iframe>
                <ui-edit-node></ui-edit-node>
            </div>`;
            doc += `<ui-text size="x-large" bold>Component Attributes</ui-text>`;

            attrs.forEach(attr => {
                doc += `
                    <ui-text size="large" bold>${attr}</ui-text>
                    ${c.getAttrDoc(attr)}

                `;
            });

            this.innerHTML = doc;
            let iframeDoc = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <title>UI TEST</title>
                <link rel="icon" href="/favicon.png">
                <link rel="apple-touch-icon" href="/favicon.png">
                <script src="/ui.js"></script>
                <style>
                    html, body {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        align-items: center;
                    }
                </style>
            </head>
            
            <body>${nodeDocs.codeExample}</body>`
            this.querySelector('iframe').contentWindow.document.write(`${iframeDoc}`);   
            setTimeout(() => {
                this.showDocs();
                let iframe = this.querySelector('iframe').contentWindow.document.body;
                let config = { attributes: true, childList: true, subtree: true };
                let observer = new MutationObserver(this.iframeChanged.bind(this));
                observer.observe(iframe, config)
                this.iframeChanged();
            }, 200);  
            

        }
    }

    iframeChanged(mutationList, observer) {

        let html = this.querySelector('iframe').contentWindow.document.body.querySelector(this.component).outerHTML;
        this.querySelector('ui-code').innerHTML = html.formatXml();
    }

    showDocs() {
        let elm = this.querySelector('iframe').contentWindow.document.body.querySelector(this.component);
        const event = new CustomEvent('UI-EDIT-NODE', {
            detail: elm,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    get component() {
        return this.getAttribute('component');
    }

    set component(value) {
        this.setAttribute('component', value);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    max-width: 900px;
                    gap: 1em;
                    align-self: center;
                }

            </style>
            <slot>ui-doc</slot>
        `
    }
}

customElements.define("ui-doc", UiDoc);