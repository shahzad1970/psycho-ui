import { h, Host, Component, Element, EventEmitter, Event, Listen, Prop } from '@stencil/core';
import { UiColor, UiSize, UiButtonType, UiRounding } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"

/**
 * @title
 * UI Button web component
 * 
 * @description
 * Ui Button provides a clickable element, which can be used anywhere a mouse click interaction is required. Ui-button replaces 
 * the need for a html button / link. This component should be used for all mouse click needs in an application.
 * 
 * @usage
 * <ui-button id="edit">Test Button</ui-button>
 * <ui-button id="edit" type="flat" round="fab"><ui-icon>menu</ui-icon></ui-button>
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
    onClick(e: CustomEvent) {
        if (this.disabled) return;
        this.uiClick.emit(e);
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
                <style id="ui-style">
                    {UiCommon.getCss(this.size, this.color, this.background)}
                </style>
            </Host>
        );
    }
}
