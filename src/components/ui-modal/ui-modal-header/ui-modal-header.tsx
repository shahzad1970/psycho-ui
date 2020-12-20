import { h, Component, Host, Element, Prop } from '@stencil/core';
import { UiColor, UiSize } from "../../../utils/ui-types";
import { UiCommon } from "../../../utils/ui-common";


@Component({
    tag: 'ui-modal-header',
    styleUrl: 'ui-modal-header.css',
    shadow: true
})
export class UiModalHeader {
    @Element() el: HTMLElement;

    /**
     * @description
     * Set forground color to selected palette color.
     */
    @Prop() color: UiColor;

    /**
     * @description
     * Background color from the UI Color Palette. When only background is present then background will be color and forground
     * will be either white or black. If color attribute is also present then forground color will be set to color attribute.
     */
    @Prop() background: UiColor;

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop() size: UiSize;

   
    render() {
        return (
            <Host>
                <ui-layout type="column" class="title"><slot></slot></ui-layout>
                <ui-button><ui-icon size="larger">close</ui-icon></ui-button>
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
