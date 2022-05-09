class UiRipple extends UiBaseElement {

    // Custom web component constructor
    constructor() {
        super();
        this.render();
    }

    // List of attributes that this element will observe
    static get observedAttributes() {
        return ['color', 'background'];
    }

    // Called every time the element is inserted into the DOM
    connectedCallback() {
        if (!this.isConnected) return;
        super.connectedCallback();
        this.elementParent = this.parentNode.host ? this.parentNode.host : this.parentNode;
        this.elementParent.addEventListener('mousedown', this.rippleEffect.bind(this));
        this.addEventListener('animationend', this.removeEffect.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.elementParent.removeEventListener('mousedown', this.rippleEffect.bind(this));
        this.removeEventListener('animationend', this.removeEffect.bind(this));
    }
    // Called when observed attribute is changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isConnected) return;
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    rippleEffect(e) {
        let offsetInfo = this.elementParent.getBoundingClientRect();
        let maxLength = offsetInfo.width > offsetInfo.height ? offsetInfo.width : offsetInfo.height;
        let circleD = maxLength * 2;

        this.elementParent.style.position = 'relative';
        this.elementParent.style.overflow = 'hidden';
        this.style.width = circleD + 'px';
        this.style.height = circleD + 'px';
        this.style.backgroundColor = 'currentColor';
        this.style.borderRadius = '500px';
        this.style.left = ((e.pageX - offsetInfo.left) - circleD/2) + 'px';
        this.style.top = ((e.pageY - offsetInfo.top) - circleD/2) + 'px';
        this.style.animation = 'ripple 0.6s forwards cubic-bezier(0, 0, 0.2, 1)'
    }

    removeEffect(e) {
        this.elementParent.style.position = '';
        this.elementParent.style.overflow = '';
        this.style.width="";
        this.style.height="";
        this.style.backgroundColor="";
        this.style.animation='';
        this.style.borderRadius="";
        this.style.left="";
        this.style.top="";
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            :host {
                display: block;
                position: absolute;
                background-color: transparent;
                opacity: 0.4;
                width: 0;
                height: 0;
                Pointer-Events: none;
                color: inherit;
                
            }
            @keyframes ripple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                80% {
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                }
            }
            </style>
        `
    }
}

customElements.define("ui-ripple", UiRipple);