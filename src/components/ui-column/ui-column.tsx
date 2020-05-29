import { h, Component, Host, Element, Prop } from '@stencil/core';
import { UiColor, UiSize, UiAlign } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

@Component({
    tag: 'ui-column',
    styleUrl: 'ui-column.css',
    shadow: true
})
export class UiColumn {
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

    /**
     * @description
     * Defines how each line is aligned within a flexbox/grid container. 
     * It only applies if flex-wrap: wrap is present, and if there are multiple lines 
     * of flexbox/grid items.
     */
    @Prop({ reflect: true }) alignContent: UiAlign = "start";

    /**
     * @description
     * Defines how each line is aligned within a flexbox/grid container. It only applies 
     * if flex-wrap: wrap is present, and if there are multiple lines of 
     * flexbox/grid items.
     */
    @Prop({ reflect: true }) justifyContent: UiAlign = "middle";

    /**
     * @description
     * Defines how flexbox items are aligned according to the cross axis, within a line 
     * of a flexbox container.
     */
    @Prop({ reflect: true }) alignItems: UiAlign = "start";

    
    /**
     * @description
     * Defines how flexbox items are aligned according to the cross axis, within a line 
     * of a flexbox container.
     */
    @Prop({ reflect: true }) alignSelf: UiAlign;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) flex: string;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) padding: string;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) margin: string;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) gap: string;
    
    render() {
        return (
            <Host>
                <slot></slot>
                <style>
                    {UiCommon.getStyle(this.size, this.color, this.background, this.el)}

                    {UiCommon.getPosition(this.alignContent, this.justifyContent,
                         this.alignItems, this.flex, this.padding, this.margin, 
                         this.gap, this.alignSelf, null, null, null, this.el)}
                </style>
            </Host>
        );
    } 
}
