import { h, Component, Host, Element, Prop } from '@stencil/core';
import { UiColor, UiSize, UiElevation } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

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
 * <ui-button onClick="open=true" background="primary-light">
 *  Open Modal
 * </ui-button>
 * <ui-modal open={{open}}>
 *   <ui-layout>Hello<ui-layout>
 * </ui-modal>
 */
@Component({
    tag: 'ui-modal',
    styleUrl: 'ui-modal.css',
    shadow: true
})
export class UiModal {
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
    @Prop() background: UiColor = "base";

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop() size: UiSize;

    /**
     * @description
     * Block background user input them modal is open.
     */
    @Prop() block: boolean = true;
    
    /**
     * @description
     * Elevation from the page by adding a border
     */
    
    @Prop({ reflect: true }) elevation: UiElevation="small";

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
