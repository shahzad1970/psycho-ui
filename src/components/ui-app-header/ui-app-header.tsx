import { h, Component, Host, Prop, Element } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

@Component({
    tag: 'ui-app-header',
    styleUrl: 'ui-app-header.css',
    shadow: true
})
export class UiAppHeader {
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

    @Prop() src: string;

    navigation() {
        const navElm = this.el.parentElement.querySelector("ui-app-navigation") as HTMLUiAppNavigationElement;
        if ( navElm ) navElm.toggle();
    }

    render() {
        return (
            <Host>
                <ui-button type="fab" onClick={() => this.navigation()} size="x-large">
                    <ui-icon>menu</ui-icon>
                </ui-button>
                <img src={this.src}></img>
                <slot />
                <style id="ui-style">
                    {UiCommon.getCss(this.size, this.color, this.background)}
                </style>
            </Host>
        );
    }
}
