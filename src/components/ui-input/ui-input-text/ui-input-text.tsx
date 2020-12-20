import { Component, Host, h, Listen} from '@stencil/core';
import { UiCommon } from "../../../utils/ui-common"

@Component({
    tag: 'ui-input-text',
    styleUrl: 'ui-input-text.css',
    shadow: true
})
export class UiInputText {
    inputElm: HTMLInputElement;
    
    @Listen('click', { capture: true })
    onElementClick() {
        if (this.inputElm) this.inputElm.focus();
    }

    render() {
        return (
            <Host> 
               <input
                ref={(el) => this.inputElm = el}></input>

                <style>
                    {UiCommon.getStyles(this)};
                </style>
            </Host>
        );
    }
}
