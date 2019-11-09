import { h, Host, Component, Prop, Element } from '@stencil/core';
import { UiColor, UiSize, UiAlignText } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"

/**
 * @title
 * UI Heading
 * 
 * @description
 * Heading component used to provide title or headline where needed. It is a flex element and implements framework styling.
 * 
 * @usage
 * <div style="align-self: stretch; flex: 1;">
 *   <ui-heading class="ui-edit-layer" size="xx-small">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="x-small">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="small">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="medium">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="large">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="x-large">Demo Heading text</ui-heading>
 *   <ui-heading class="ui-edit-layer" size="xx-large">Demo Heading text</ui-heading>
 * </div>
 */
@Component({
    tag: 'ui-heading',
    styleUrl: 'ui-heading.css',
    shadow: true
})
export class UiHeading {
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
    @Prop({ reflect: true }) background: UiColor;

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop() size: UiSize;

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop({ reflect: true }) align: UiAlignText;

    /**
     * @description
     * Type provide two additional feature where heading can be underlined (bottom border) or outline which gives border around the heading.
     */
    @Prop({ reflect: true }) type: "underline" | "outline" | "base";


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
