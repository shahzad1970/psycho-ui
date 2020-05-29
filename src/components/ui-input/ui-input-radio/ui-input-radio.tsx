import {h, Component, Host, Prop } from '@stencil/core';
import { UiOrientation } from "../../../utils/ui-types";


@Component({
    tag: 'ui-input-radio',
    styleUrl: 'ui-input-radio.css',
    shadow: true
})
export class UiInputRadio {
    @Prop({reflect: true}) orientation: UiOrientation;
    
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
