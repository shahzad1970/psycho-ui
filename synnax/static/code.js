class UiCode extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        // this.shadowRoot.querySelector('#code').innerHTML = this.innerHTML;
        // hljs.highlightElement(this.shadowRoot.getElementById('code'));
        this.shadowRoot.addEventListener('slotchange', this.updateHighLight.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener('slotchange', this.updateHighLight.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    updateHighLight(e) {
        let code = this.innerHTML;
        let codeText =  Prism.highlight(code, Prism.languages.html, 'html');
  
        this.shadowRoot.querySelector('#code').innerHTML = codeText;

    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    overflow: auto; 
                    padding: 1.5em;
                }


                code {
                    color: #ccc;
                    background: none;
                    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
                    font-size: 1em;
                    text-align: left;
                    white-space: pre-wrap;
                    word-spacing: normal;
                    word-break: normal;
                    word-wrap: normal;
                    line-height: 1.5;
                    -moz-tab-size: 4;
                    -o-tab-size: 4;
                    tab-size: 4;
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                
                }
                
                .token.comment,
                .token.block-comment,
                .token.prolog,
                .token.doctype,
                .token.cdata {
                    color: #999;
                }
                
                .token.punctuation {
                    color: #ccc;
                }
                
                .token.tag,
                .token.attr-name,
                .token.namespace,
                .token.deleted {
                    color: #e2777a;
                }
                
                .token.function-name {
                    color: #6196cc;
                }
                
                .token.boolean,
                .token.number,
                .token.function {
                    color: #f08d49;
                }
                
                .token.property,
                .token.class-name,
                .token.constant,
                .token.symbol {
                    color: #f8c555;
                }
                
                .token.selector,
                .token.important,
                .token.atrule,
                .token.keyword,
                .token.builtin {
                    color: #cc99cd;
                }
                
                .token.string,
                .token.char,
                .token.attr-value,
                .token.regex,
                .token.variable {
                    color: #7ec699;
                }
                
                .token.operator,
                .token.entity,
                .token.url {
                    color: #67cdcc;
                }
                
                .token.important,
                .token.bold {
                    font-weight: bold;
                }
                .token.italic {
                    font-style: italic;
                }
                
                .token.entity {
                    cursor: help;
                }
                
                .token.inserted {
                    color: green;
                }
            </style>
            <code id="code"></code>
            <div style="display: none;"><slot></slot></div>            
        `
    }
}

customElements.define("ui-code", UiCode);