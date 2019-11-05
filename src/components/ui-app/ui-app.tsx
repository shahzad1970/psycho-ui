import { h, Component, Host, Prop, Element } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

@Component({
    tag: 'ui-app',
    styleUrl: 'ui-app.css'
})
export class UiApp  {
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


    componentDidLoad() {
        const navElm = this.el.querySelector("ui-app-navigation") as HTMLUiAppNavigationElement;
        if (navElm) navElm.toggle();
    }

    render() {
        return (
            <Host>
                <slot />
                <style>
                    {UiCommon.getStyle(this.size, this.color, this.background, this.el)}
                </style>
            </Host>
        );

    }
}
