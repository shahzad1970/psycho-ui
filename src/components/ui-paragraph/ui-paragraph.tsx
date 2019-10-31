import {h, Host, Component, Prop } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"


@Component({
    tag: 'ui-paragraph',
    styleUrl: 'ui-paragraph.css',
    shadow: true
})
export class UiParagraph {
   /**
     * Forground color from the UI Color Palette
     */
    @Prop() color: UiColor;

    /**
     * Background color from the UI Color Palette
     */
    @Prop() background: UiColor;

    /**
     * Absolute font size 
     */
    @Prop() size: UiSize;
    

    render() {
        return (
            <Host>
                <slot></slot>
                <style id="ui-style">
                    {UiCommon.getCss(this.size, this.color, this.background)}
                </style>
            </Host>
        );
    }
}
