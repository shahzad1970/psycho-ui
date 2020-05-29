import { h, Component, Host, Prop, State, Element, Listen } from '@stencil/core';
import componentDoc from './doc.json';
import { JsonDocs } from './doc'


@Component({
    tag: 'ui-playground',
    styleUrl: 'ui-playground.css',
    shadow: true
})
export class UiPlayground {
    @Element() el: HTMLElement;

    @Prop() tag: string;

    @State() selectedNodes: HTMLElement[] = [];
    @State() iconPage: number = 0;

    doc: JsonDocs = componentDoc as any;

    codeElement: HTMLElement;

    codeView: HTMLUiCodeElement;

    componentDidLoad() {
        const elm = this.codeElement.querySelector(".ui-edit-layer") as HTMLElement;
        elm.click();
    }

    select(e: any) {

        const element = e.target as HTMLElement;
        if (!element.classList.contains("ui-edit-layer")) return;
        this.codeElement.querySelectorAll(".nodeFocus").forEach(el => {
            el.classList.remove("nodeFocus");
        })

        let layers: HTMLElement[] = [];
        this.selectedNodes = [];
        if (element.classList.contains("ui-edit-layer")) {
            layers.push(element);
        }

        element.querySelectorAll(".ui-edit-layer").forEach(el => {
            layers.push(el as HTMLElement);
        })
        setTimeout(() => {
            this.selectedNodes = [...layers];
        }, 200);
    }

    @Listen("updatePlaygroundCode", { capture: true })
    updateCodeView() {
        this.codeView.setCode(this.codeElement.innerHTML);
    }

    nextIconPage(total) {
        console.log(total)
        this.iconPage += 50;
        if (this.iconPage > total) {
            this.iconPage = total - 50;
        }
    }

    backIconPage(total) {
        console.log(total)
        this.iconPage -= 50;
        if (this.iconPage < 0) {
            this.iconPage = 0;
        }
    }

    render() {
        return (
            <Host>
                <slot></slot>
                {this.doc.components.filter(c => c.tag == this.tag).map(c => {
                    return (

                        <ui-layout type="column" gap="small">
                            <ui-heading size="x-large">
                                {c.docsTags.filter(t => t.name == "title").map(t => t.text)}
                            </ui-heading>
                            <ui-paragraph>
                                {c.docsTags.filter(t => t.name == "description").map(t => t.text)}
                            </ui-paragraph>
                            <ui-heading size="x-large">Interactive Demo</ui-heading>
                            <ui-paragraph>This demo lets you preview the web component, its variations, and configuration options.
                                    Click on an element to bring up attribute editor.</ui-paragraph>

                            <ui-layout gap="xx-large" type="column" background="grey-20">
                                <ui-layout gap="large" type="column" align="start" ref={(e) => this.codeElement = e}
                                    innerHTML={c.docsTags.filter(t => t.name == "usage").map(t => t.text)[0]}
                                    onClick={(e) => this.select(e)}>
                                </ui-layout>
                                 <ui-code language="xml" ref={r => this.codeView = r}></ui-code>
                            </ui-layout>
                            <ui-heading size="x-large">Component Properties</ui-heading>
                            <ui-paragraph>
                                Psycho UI Web components are driven by attributes. In order to reduce psychological fatigue of developers, attribute
                                naming and usage has been kept to a minimum so that a developer can easy remember attributes and attribute values.
                           </ui-paragraph>

                            {c.props.map(p => {
                                return [
                                    <ui-heading size="large" type="underline">{p.name}</ui-heading>,
                                    <ui-paragraph innerHTML={p.docsTags.filter(t => t.name == "description").map(t => t.text)[0]}>
                                    </ui-paragraph>,
                                    <ui-heading size="medium" background="base">Allowed values</ui-heading>,
                                    <ui-playground-values prop={p}></ui-playground-values>
                                ]
                            })}

                        </ui-layout>
                    )
                })
                }
                 {this.selectedNodes.length > 0 &&
                    <ui-playground-attrs background="grey-80" elements={this.selectedNodes} docs={this.doc.components}></ui-playground-attrs>
                 }
            </Host >
        );
    }
}
