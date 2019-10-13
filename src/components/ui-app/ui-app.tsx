import { h, Component, Host, Prop } from '@stencil/core';
import {UiColor} from "../../utils/ui-types"


@Component({
    tag: 'ui-app',
    styleUrl: 'ui-app.scss'
})
export class UiApp {

    /**
     * Set forground color
     */
    @Prop() color: UiColor;

    /**
     * Set background color
     */
    @Prop() background: UiColor;


    render() {
        return (
            <Host class={{
                [`ui-fg-${this.color}`]  : this.color != undefined,
                [`ui-bg-${this.background}`]  : this.background != undefined,
            }}>
            
                <slot/>
            </Host>
        );

    }
}
