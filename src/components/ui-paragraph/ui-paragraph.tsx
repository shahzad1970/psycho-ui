import {h, Host, Component, Prop, Element } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"


@Component({
    tag: 'ui-paragraph',
    styleUrl: 'ui-paragraph.css',
    shadow: true
})
export class UiParagraph {
    @Element() el: HTMLElement;

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
                <style>
                    {UiCommon.getStyle(this.size, this.color, this.background, this.el)}
                </style>
            </Host>
        );
    }
}
