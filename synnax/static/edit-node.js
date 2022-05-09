class UiEditNode extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ["color", 'size', 'background', 'elevation'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        window.addEventListener('UI-EDIT-NODE', this.handleNodeEdit.bind(this));
        this.shadowRoot.addEventListener('input', this.onUserInput.bind(this));
    }

    onUserInput(ev) {
        if (ev.target.name == 'content') {
            this.playElement.innerHTML = ev.target.value;
            return;
        }

        if (ev.target.type == 'checkbox') {
            if (ev.target.checked) {
                this.playElement.setAttribute(ev.target.name, 'true');
            } else {
                this.playElement.removeAttribute(ev.target.name);
            }
        } else {
            this.playElement.setAttribute(ev.target.name, ev.target.value);
        }
    }

    handleNodeEdit(event) {
        this.playElement = event.detail;
        this.processElement();
    }

    removeElement() {
        this.playElement.remove();
        this.innerHTML = '';
    }

    processElement() {
        let attrs = '';
        this.playElement.constructor.observedAttributes.forEach(attr => {
            attrs += ``;
            let v = this.playElement.getAttribute(attr);
            if (attr == 'color' || attr == 'background' || attr == 'accent') {
                attrs += `<ui-input background="grey-9" type="select" name="${attr}" title="element">${attr}`;
             
                Object.keys(uiColorMap).forEach(a => {
                    if (a == v) {
                        attrs += `<ui-input-option label="${a}" selected><ui-spacer background="${a}"></ui-spacer> ${a}</ui-input-option>`;
                    } else {
                        attrs += `<ui-input-option label="${a}" ><ui-spacer background="${a}"></ui-spacer> ${a}</ui-input-option>`;
                    }
                })

                attrs += `</ui-input>`;
            } else if (attr == "size" || attr == "elevation" || attr == "gap") {
                attrs += `<ui-input background="grey-9" type="select" name="${attr}" title="select">${attr}`;
         
                ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'].forEach(a => {
                    if (a == v) {
                        attrs += `<ui-input-option label="${a}" selected ><ui-icon size="${a}">format_size</ui-icon> ${a}</ui-input-option>`;
                    } else {
                        attrs += `<ui-input-option label="${a}"><ui-icon size="${a}">format_size</ui-icon> ${a}</ui-input-option>`;
                    }
                })

                attrs += `</ui-input>`;
            } else if (attr == 'ripple' || attr == 'bold' || attr == 'outline' || attr == 'fab' || attr == 'disabled' || attr == 'rounded' || attr == 'round' || attr == 'elevated' || attr == 'busy') {
                attrs += `<ui-input background="grey-9" type="checkbox" name="${attr}" value="true">${attr}</ui-input>`;
            } else {
                attrs += `<ui-input background="grey-9" type="text" name="${attr}" value="${v}">${attr}</ui-input>`;
            }
        });
  

        let attrHtml = attrs;

        this.innerHTML = attrHtml;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    get background() {
        return this.getAttribute('background');
    }

    set background(newValue) {
        this.setAttribute('background', newValue);
    }

    get elevation() {
        return this.getAttribute('elevation');
    }

    set elevation(newValue) {
        this.setAttribute('elevation', newValue);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    max-height: 350px;
                    padding: 0.5em;
                    overflow-x: hidden;
                    gap: 0.5em;
                    min-width: 18em;
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define("ui-edit-node", UiEditNode);