class UiButton extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation', 'fab', 'disabled', 'rounded', "round", 'outline', "busy", "gap",'href', "align", "justify", 'ripple'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        if (!this.ripple ) {
            this.ripple = true;
        }
        super.connectedCallback();
        this.addEventListener('click', this.clickHandler.bind(this));
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    clickHandler(e) {
        if (this.hasAttribute('href')) {
            let href = this.getAttribute('href');
            if (href.startsWith('/app/doc/')) {
                history.pushState({id: href}, href, href);
                window.dispatchEvent(new CustomEvent('popstate', {detail: href}));
            }
        }
        return false;
    }

    get ripple() {
        return this.hasAttribute('ripple');
    }

    set ripple(value) {
        this.setAttribute('ripple', true);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    padding: 0px 1em;
                    line-height: 2em;
                    gap: 0.5em;
                    font-size: inherit;
                    border: 1px solid transparent;
                    overflow: hidden;
                    flex-wrap: nowrap;
                    min-width: 2em;
                    min-height: 1em;
                    position: relative;
                }
                :host([disabled]) {
                    cursor: not-allowed;
                    pointer-events: none;
                    
                }
                
                :host([disabled])::before {
                    border-radius: inherit;
                    bottom: 0;
                    content: "";
                    display: block;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background-color: currentColor;
                    opacity: 0.2;
                }

                :host(:hover)::before {
                    border-radius: inherit;
                    bottom: 0;
                    content: "";
                    display: block;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background-color: currentColor;
                    opacity: 0.15;
                }

                :host(:not([fab])[rounded]) {
                    border-radius: 0.20em;
                }

                :host(:not([fab])[round]) {
                    border-radius: 2em;
                }

                :host([fab]) {
                    width: 2em;
                    height: 2em;
                    padding: 0;
                }

                :host([fab][round]) {
                    border-radius: 50%;
                }

                :host([fab][rounded]) {
                    border-radius: 0.15em;
                }

                :host([outline]) {
                    border: 1px solid currentColor;
                }
               
                :host([busy]) >  .spinner {
                    display: block;
                }

                .spinner {
                    border: .15em solid currentColor; /* Light grey */
                    border-top: .15em solid transparent; /* Blue */
                    border-radius: 50%;
                    height: 0.75em;
                    width: 0.75em;
                    animation: spin 2s linear infinite;
                    display: none;
                  }
                  
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }

            </style>
            <div class="spinner"></div>
            <slot>Button</slot>
        
        `
    }
}

customElements.define("ui-button", UiButton);