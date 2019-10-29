import { h, Host, Component, Element, EventEmitter, Event, Listen, Prop } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"

@Component({
    tag: 'ui-button',
    styleUrl: 'ui-button.css',
    shadow: true
})
export class UiButton {
    @Element() el: HTMLElement;

    /**
     * Forground color from the UI Color Palette
     */
    @Prop() color: UiColor;

    /**
     * Background color from the UI Color Palette
     */
    @Prop() background: UiColor;

    /**
     * Absolute font size 
     */
    @Prop() size: UiSize;

    @Prop({ reflect: true }) type: string = "base";

    @Event() uiClick: EventEmitter;

    ripple: HTMLUiRippleElement;

    @Listen('click', { capture: true })
    onClick(e: CustomEvent) {
        this.uiClick.emit(e);
        this.ripple.toggle(e);
    }

    @Listen('mousedown', { capture: true })
    onMouseDown(e: CustomEvent) {
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
