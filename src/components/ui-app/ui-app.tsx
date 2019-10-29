import { h, Component, Host, Prop, Element } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

@Component({
    tag: 'ui-app',
    styleUrl: 'ui-app.scss'
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
                <style id="ui-style">
                    {UiCommon.getCss(this.size, this.color, this.background).replace(":host", "ui-app")}
                </style>
            </Host>
        );

    }
}
