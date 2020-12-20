import { h, Component, Host, Element, Prop, State } from '@stencil/core';
import { UiColor, UiSize } from "../../../utils/ui-types";
import { UiCommon } from "../../../utils/ui-common";

/**
 * @title
 * UI Modal
 * 
 * @description
 * Table is a lightweight and opinionated component for enhancing tabular data.
 * It offers features like sticky headers, support for narrow viewport widths,
 * and table styles.
 * @usage
 *
 * <ui-modal class="ui-edit-layer">
 *  dfdsf
 * </ui-modal>
 */
@Component({
    tag: 'ui-modal-test',
    styleUrl: 'ui-modal-test.css',
    shadow: true
})
export class UiModalTest {
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
    
    @State() open:boolean = false;

    render() {
        return (
            <Host>
                <ui-button type="outline" background="primary-light">Open</ui-button>
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}