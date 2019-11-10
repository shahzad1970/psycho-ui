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


    onClickCopyText(e: Event) {
        const target = e.target as HTMLUiTextElement;
        const el = document.createElement('textarea');
        el.value = target.textContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

    }

    nextIconPage(total) {
        console.log(total)
        this.iconPage+=50;
        if (this.iconPage > total) {
            this.iconPage = total - 50;
        }
    }

    backIconPage(total) {
        console.log(total)
        this.iconPage-=50;
        if (this.iconPage < 0) {
            this.iconPage = 0;
        }
    }

    render() {
        return (
            <Host>
                <slot></slot>
                {this.doc.components.filter(c => c.tag == this.tag).map(c => {
                    return [
                        <ui-heading size="xx-large">
                            {c.docsTags.filter(t => t.name == "title").map(t => t.text)}
                        </ui-heading>,
                        <ui-paragraph>
                            {c.docsTags.filter(t => t.name == "description").map(t => t.text)}
                        </ui-paragraph>,
                        <ui-heading size="x-large">Interactive Demo</ui-heading>,
                        <ui-paragraph>This demo lets you preview the web component, its variations, and configuration options.
                        Click on an element to bring up attribute editor.</ui-paragraph>,
                        <div class="play">
                            <div class="play-code" ref={(e) => this.codeElement = e}
                                innerHTML={c.docsTags.filter(t => t.name == "usage").map(t => t.text)[0]}
                                onClick={(e) => this.select(e)}></div>

                            <div class="play-attrs">
                                {this.selectedNodes.length > 0 &&
                                    <ui-playground-attrs elements={this.selectedNodes} docs={this.doc.components}></ui-playground-attrs>
                                }
                            </div>

                        </div>,
                        <ui-code language="xml" ref={r => this.codeView = r}></ui-code>, <br></br>,
                        <ui-heading size="x-large">Component Properties</ui-heading>,
                        <ui-paragraph>
                            Psycho UI Web components are driven by attributes. In order to reduce psychological fatigue of developers, attribute
                            naming and usage has been kept to a minimum so that a developer can easy remember attributes and attribute values.
                        </ui-paragraph>,
                        <div style={{ "margin-top": "1.5em" }}>
                            {c.props.map(p => {
                                return [
                                    <ui-heading size="large" type="underline">{p.name}</ui-heading>,
                                    <ui-paragraph innerHTML={p.docsTags.filter(t => t.name == "description").map(t => t.text)[0]}>
                                    </ui-paragraph>,
                                    <ui-heading size="large" background="base">Allowed values</ui-heading>,
                                    <div class="prop">
                                        {p.values.map(val =>
                                            <div class="propval">
                                                {p.name == "icon" &&
                                                    <div class="icon-container">
                                                        <ui-icon>{val.value}</ui-icon>
                                                        <ui-text title="click to copy text" background="blue-20" onClick={(e) => this.onClickCopyText(e)}>{val.value ? val.value : val.type}</ui-text>
                                                    </div>
                                                }
                                                {p.name != "icon" &&
                                                    <ui-text background="blue-20">{val.value ? val.value : val.type}</ui-text>
                                                }

                                            </div>
                                        )}

                                    </div>
                                ]
                            })}
                        </div>
                    ]
                })
                }
            </Host >
        );
    }
}
