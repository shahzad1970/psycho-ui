import { h, Host, Component, Element, EventEmitter, Event, Listen, Prop } from '@stencil/core';
import { UiColor, UiSize, UiButtonType, UiRounding } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"

/**
 * @title
 * UI Buttons
 * 
 * @description
 * Buttons allow users to take action, and make a choice, with a single tap.
 * 
 * @usage
 * <ui-button class="ui-edit-layer">
 *      Test Button
 * </ui-button>
 * <ui-button class="ui-edit-layer" type="flat" round="fab">
 *      <ui-icon>menu</ui-icon>
 * </ui-button>
 * 
 */

@Component({
    tag: 'ui-button',
    styleUrl: 'ui-button.css',
    shadow: true
})
export class UiButton {
    @Element() el: HTMLElement;

    /**
     * @description
     * Forground color from the UI Color Palette
     * 
     *  
     */
    @Prop() color: UiColor;

    /**
     * @description
     * Background color from the UI Color Palette
     */
    @Prop() background: UiColor;

    /**
     * @description
     * Absolute font size 
     */
    @Prop() size: UiSize;


    /**
     * @description
     * Set button type from supported button types
     */

    @Prop({ reflect: true }) type: UiButtonType = "outline";

    /**
     * @description
     * Enable or disable button
     */

    @Prop({ reflect: true }) disabled: boolean = false;

    /**
    * @description
    * Enable or disable button
    */


    @Prop({ reflect: true }) round: UiRounding = "base";

    @Event() uiClick: EventEmitter;

    ripple: HTMLUiRippleElement;

    @Listen('click', { capture: true })
    onClick() {
        if (this.disabled) return;
        this.uiClick.emit();
    }

    @Listen('mousedown', { capture: true })
    onMouseDown(e: CustomEvent) {
        if (this.disabled) return;
        this.ripple.toggle(e);
    }

    render() {
        return (
            <Host> 
                <slot></slot>
                <ui-ripple ref={(e: HTMLUiRippleElement) => this.ripple = e}></ui-ripple>
                <style>
                    {UiCommon.getStyle(this.size, this.color, this.background, this.el)}
                </style>
            </Host>
        );
    }
}
