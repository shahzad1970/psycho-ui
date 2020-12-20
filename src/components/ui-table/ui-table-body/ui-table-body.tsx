import { Component, h, Host, Prop } from '@stencil/core';
import { UiColor, UiSize} from "../../../utils/ui-types";
import { UiCommon } from "../../../utils/ui-common";

@Component({
    tag: 'ui-table-body',
    styleUrl: 'ui-table-body.css',
    shadow: true
})
export class UiTableBody {
    /**
     * @description
     * Set forground color to selected palette color.
     */
    @Prop({reflect: true}) color: UiColor;

    /**
     * @description
     * Background color from the UI Color Palette. When only background is present then background will be color and forground
     * will be either white or black. If color attribute is also present then forground color will be set to color attribute.
     */
    @Prop({reflect: true}) background: UiColor;

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop({reflect: true}) size: UiSize;
    
    /**
     * @description
     * Stripe "odd" or "even" rows, if not present then no stripe
     */
    @Prop({reflect: true}) stripe: 'odd' | 'even' | 'none' = "none";
    
    /**
     * @description
     * Hover effect on row hover.
     */
    @Prop({reflect: true}) hover: boolean = false;

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
