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
    @Prop({reflect: false}) color: UiColor;

    /**
     * Background color from the UI Color Palette
     */
    @Prop({reflect: false}) background: UiColor;

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
                <ui-button round="fab" type="base" onClick={() => this.navigation()} size="medium">
                    <ui-icon size="larger">menu</ui-icon>
                </ui-button>
                <img src={this.src}></img>
                <slot />
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
