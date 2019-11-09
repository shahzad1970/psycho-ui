import { h, Component, Prop, Host, State, Event, EventEmitter } from '@stencil/core';
import { JsonDocsComponent } from '../doc';

@Component({
    tag: 'ui-playground-attrs',
    styleUrl: 'ui-playground-attrs.css',
    shadow: true
})
export class UiPlaygroundAttrs {

    @Prop() elements: Array<HTMLElement> = [];
    @Prop() docs: Array<JsonDocsComponent> = [];

    @State() currentVals: object = {};
    @State() element: HTMLElement;
    @State() doc: JsonDocsComponent;

    @Event() updatePlaygroundCode: EventEmitter;

    componentWillLoad() {
        this.selectElement(this.elements[0]);
        this.updatePlaygroundCode.emit();
    }

    selectElement(element: HTMLElement) {
        if (this.element) this.element.classList.remove("nodeFocus");
        element.classList.add("nodeFocus");
        this.element = element;
        this.doc = this.docs.filter(e => e.tag == element.localName)[0];
    }

    setAttribute(name, value) {
        this.element.setAttribute(name, value);
        this.currentVals[name] = value;
        this.currentVals = { ...this.currentVals };
        this.updatePlaygroundCode.emit();
    }

    getAttribute(name) {
        let val = this.element.getAttribute(name);
        if (val == "" && this.element.hasAttribute(name)) val = "true";
        this.currentVals[name] = val;
        this.currentVals = { ...this.currentVals }
    }

    removeAttribute(name) {
        this.element.removeAttribute(name);
        this.currentVals[name] = null;
        this.currentVals = { ...this.currentVals };
        this.updatePlaygroundCode.emit();

    }

    getAttrInput(name) {
        this.getAttribute(name);

        switch (name) {
            case "color":
                return (
                    <ui-input type="color" onUiInput={(e: CustomEvent) => this.setAttribute("color", e.detail.value)} value={this.currentVals["color"]}>
                        Font Color&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("color") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                    </ui-input>
                );
            case "background":
                return (
                    <ui-input type="color" onUiInput={(e: CustomEvent) => this.setAttribute("background", e.detail.value)} value={this.currentVals["background"]}>
                        Background Color&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("background") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                    </ui-input>
                );
            case "disabled":
                return (
                    <ui-input orientation="horizontal" type="radio" onUiInput={(e: CustomEvent) => this.setAttribute("disabled", e.detail.value)}>
                        Disabled&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("disabled") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                        <ui-input-option slot="option" value={"true"} selected={this.currentVals["disabled"]}>True</ui-input-option>
                        <ui-input-option slot="option" value={"false"} selected={!this.currentVals["disabled"]}>False</ui-input-option>
                    </ui-input>
                );
            case "round":
                return (
                    <ui-input class="input-attr" orientation="horizontal" type="radio" onUiInput={(e: CustomEvent) => this.setAttribute("round", e.detail.value)}>
                        Rounding&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("round") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                        {this.doc.props.filter(p => p.name == "round").map(p => {
                            return p.values.map(v =>
                                <ui-input-option slot="option" value={v.value} selected={this.currentVals["round"] == v.value}>{v.value}</ui-input-option>
                            )

                        })}
                    </ui-input>
                );
            case "size":
                return (
                    <ui-input class="input-attr" orientation="horizontal" type="radio" onUiInput={(e: CustomEvent) => this.setAttribute("size", e.detail.value)}>
                        Size&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("size") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                        {this.doc.props.filter(p => p.name == "size").map(p => {
                            return p.values.map(v =>
                                <ui-input-option slot="option" value={v.value} selected={this.currentVals["size"] == v.value}>{v.value}</ui-input-option>
                            )

                        })}
                    </ui-input>
                );
            case "type":
                return (
                    <ui-input class="input-attr" orientation="horizontal" type="radio" onUiInput={(e: CustomEvent) => this.setAttribute("type", e.detail.value)}>
                        Type&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("type") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                        {this.doc.props.filter(p => p.name == "type").map(p => {
                            return p.values.map(v =>
                                <ui-input-option slot="option" value={v.value} selected={this.currentVals["type"] == v.value}>{v.value}</ui-input-option>
                            )
                        })}
                    </ui-input>
                );
            case "align":
                    return (
                        <ui-input class="input-attr" orientation="horizontal" type="radio" onUiInput={(e: CustomEvent) => this.setAttribute("align", e.detail.value)}>
                            Align&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("align") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                            {this.doc.props.filter(p => p.name == "align").map(p => {
                                return p.values.map(v =>
                                    <ui-input-option slot="option" value={v.value} selected={this.currentVals["align"] == v.value}>{v.value}</ui-input-option>
                                )
    
                            })}
                        </ui-input>
                    );
            case "href":
                return (
                    <ui-input class="input-attr" type="text" onUiInput={(e: CustomEvent) => this.setAttribute("href", e.detail.value)}>
                        href&nbsp;|&nbsp;<ui-button onUiClick={(e) => { e.stopPropagation(); this.removeAttribute("href") }} round="none" type="link" color="secondary-light" size="smaller">remove</ui-button>
                        
                    </ui-input>
                );
        }
    }
    render() {
        if (this.elements.length == 0) return;
        return (
            <Host>
                <ui-heading background="grey-100">Layers</ui-heading>
                <div class="attrs">
                    {this.elements.map((e) =>
                        <ui-button onUiClick={() => this.selectElement(e)} round="none" background="grey-80">{e.localName}</ui-button>
                    )}
                </div>
                <ui-heading background="grey-100">{this.doc.tag}</ui-heading>
                <div class="attrs">
                    {this.doc.props.map(p => {
                        return this.getAttrInput(p.name);
                    })}

                </div>
            </Host>
        );
    }
}
