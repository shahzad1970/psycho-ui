import { Component, h, Host, Prop } from '@stencil/core';
import { UiColor, UiSize} from "../../../utils/ui-types";
import { UiCommon } from "../../../utils/ui-common";
@Component({
    tag: 'ui-table-head',
    styleUrl: 'ui-table-head.css',
    shadow: true
})
export class UiTableHead {
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
                <slot></slot>
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
