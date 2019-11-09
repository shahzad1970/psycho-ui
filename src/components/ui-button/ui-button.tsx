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
 *<ui-button class="ui-edit-layer" background="primary-dark">
 *      <ui-icon class="ui-edit-layer" size="larger">menu</ui-icon>&nbsp;&nbsp;Test Button
 * </ui-button>
 *<ui-button class="ui-edit-layer" background="primary-light">
 *      Test Button&nbsp;&nbsp;<ui-icon class="ui-edit-layer" size="x-large">menu</ui-icon> 
 * </ui-button>
 * <ui-button class="ui-edit-layer" type="flat" round="fab">
 *      <ui-icon class="ui-edit-layer">menu</ui-icon>
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
     * Set button type from supported button types. 
     */

    @Prop({ reflect: true }) type: UiButtonType = "base";

    /**
     * @description
     * This Boolean attribute prevents the user from interacting with the ui-button.
     */

    @Prop({ reflect: true }) disabled: boolean = false;

    /**
    * @description
    * Rounding button corners.
    * <ul>
    *    <li> Base : Adds slight corner rounding</li>
    *    <li> fab : Intending to creating single icon round button</li>
    *    <li> none : No rounding</li>
    *    <li> pill : same rounding as fab except has more padding to left and right</li>
    * </ul>
    */

    @Prop({ reflect: true }) round: UiRounding = "base";

    /**
     * @description
     * URL where browser will navigate to once button is clicked. If href is provided then
     * a click event will not be emitted and page will be redirect to the provided url.
     */
    @Prop() href: string;

    @Event() uiClick: EventEmitter;

    ripple: HTMLUiRippleElement;

    @Listen('click', { capture: true })
    onClick() {
        if (this.disabled) return;
        if (this.href) {
            setTimeout(() => {
                window.location.href = this.href;
            }, 300)
            
            return;
        }
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
