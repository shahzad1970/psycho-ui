import { h, Component, Prop, Host, State } from '@stencil/core';
import { JsonDocsComponent } from '../doc'
import { UiColor } from "../../../utils/ui-types";

@Component({
    tag: 'ui-playground-attrs',
    styleUrl: 'ui-playground-attrs.css',
    shadow: true
})
export class UiPlaygroundAttrs {

    @Prop() element: HTMLElement;
    @Prop() doc: JsonDocsComponent;

    @State() currentVals: object = {};


    componentWillLoad() {
        this.doc.props.map(p => {
            this.currentVals[p.name] = this.element.getAttribute(p.name);
        });

    }


    setAttribute(name, value) {
        this.element.setAttribute(name, value);
        this.currentVals[name] = value;
        this.currentVals = { ...this.currentVals }
    }

    getAttribute(name) {
        this.currentVals[name] = this.element.getAttribute(name);
        this.currentVals = { ...this.currentVals }
    }

    removeAttribute(name) {
        this.element.removeAttribute(name);
        this.currentVals[name] = null;
        this.currentVals = { ...this.currentVals }
    }

    render() {
        if (!this.element) return;
        return (
            <Host>
                {/* <table>
                    <thead>
                        <tr>
                            <th colSpan={3}><ui-heading size="larger">{this.doc.tag}</ui-heading></th>
                        </tr>
                        <tr>
                            <th>Property</th>
                            <th>Value</th>
                            <th>Current Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.doc.props.map(p =>
                            <tr>
                                <td>{p.name}</td>
                                <td class="fullWidth">
                                    <div class="options">
                                    {p.type != "boolean" && p.values.map(val =>
                                        <ui-button onUiClick={() => this.setAttribute(p.name, val.value)} 
                                        round="none" size="small" type="outline"
                                        background={p.name == "background" || p.name == "color" ? val.value as UiColor : 'base'}>{val.value}</ui-button>
                                    )}
                                    </div>
                                </td>
                                <td>
                                   {this.currentVals[p.name] && this.currentVals!=null &&
                                        <ui-button style={{'margin-right': '1em'}} type='outline'  onUiClick={() => this.removeAttribute(p.name)} color="danger" round="fab" size="small"><ui-icon>clear</ui-icon></ui-button>
                                   }

                                    {this.currentVals[p.name]}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
                <ui-heading background="grey-100">{this.doc.tag}</ui-heading>
                {this.doc.props.map(p => {
                    return [
                        <ui-heading background="grey-10" size="small" class="prop">
                            <div>{p.name}</div>
                            <div class="input">
                                <input type="text" value={this.currentVals[p.name]} readonly></input>
                                {this.currentVals[p.name] && this.currentVals != null &&
                                    <ui-button style={{ 'margin-right': '1em' }} type='outline' onUiClick={() => this.removeAttribute(p.name)} color="danger" round="fab" size="small"><ui-icon>clear</ui-icon></ui-button>
                                }
                            </div>
                        </ui-heading>
                    ]
                })}


            </Host>
        );
    }
}
