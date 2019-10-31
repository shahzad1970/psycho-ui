import { h, Component, Host, Prop, State } from '@stencil/core';
import componentDoc from './doc.json';
import { JsonDocs } from './doc'


@Component({
    tag: 'ui-playground',
    styleUrl: 'ui-playground.css',
    shadow: true
})
export class UiPlayground {

    @Prop() tag: string;

    @State() selectedNode: HTMLElement;

    doc: JsonDocs = componentDoc as any;

    select(e: any) {
        if (this.selectedNode) {
            this.selectedNode.classList.remove("nodeFocus")
        }
        this.selectedNode = undefined;
        setTimeout(()=> {
            this.selectedNode = e.originalTarget as HTMLElement;
            this.selectedNode.classList.add("nodeFocus")
        }, 500)
   
    }

    render() {
        return (
            <Host>
                <slot></slot>
                {this.doc.components.filter(c => c.tag == this.tag).map(c => {

                    return [
                        <ui-heading size="xx-large" color="primary-dark">
                            {c.docsTags.filter(t => t.name == "title").map(t => t.text)}
                        </ui-heading>,
                        <ui-paragraph>
                            {c.docsTags.filter(t => t.name == "description").map(t => t.text)}
                        </ui-paragraph>,
                        <ui-heading size="x-large" color="primary-dark">Component Playground</ui-heading>,
                        <div class="play">
                            <div class="play-code" innerHTML={c.docsTags.filter(t => t.name == "usage").map(t => t.text)[0]} onMouseDown={(e) => this.select(e)}>

                            </div>

                            <div class="play-attrs">
                                {this.selectedNode &&
                                    <ui-playground-attrs element={this.selectedNode} doc={this.doc.components.filter(c => c.tag == this.selectedNode.localName)[0]}></ui-playground-attrs>
                                }
                            </div>
                        </div>,
                        <ui-heading size="x-large" color="primary-dark">Component Properties</ui-heading>,

                        <div>
                            {c.props.map(p => {
                                return [
                                    <ui-heading>{p.name}</ui-heading>,
                                    <ui-paragraph>
                                        {p.docsTags.filter(t => t.name == "description").map(t => t.text)}
                                    </ui-paragraph>,
                                    <div class="prop">
                                        {p.values.map(val =>
                                            <div class="propval">{val.value}</div>
                                        )}
                                    </div>

                                ]
                            }
                            )}
                        </div>
                    ]
                })}
            </Host>
        );
    }
}
