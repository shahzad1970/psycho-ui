import { h, Component, Host, Prop, Method, Element } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";

@Component({
    tag: 'ui-app-navigation',
    styleUrl: 'ui-app-navigation.css',
    shadow: true
})
export class UiNavigation {
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


    @Method()
    async toggle() {
        
        const bodyElm = this.el.parentElement.querySelector("ui-app-body") as HTMLUiAppNavigationElement;

        if (this.el.style.visibility != 'visible') {
            this.el.style.visibility = 'visible';
            bodyElm.style.marginLeft = this.el.clientWidth + "px";
        } else {
            this.el.style.visibility = 'hidden';
            bodyElm.style.marginLeft = null;
        }
    }

    render() {
        return (
            <Host>
                <slot />
                <style id="ui-style">
                    {UiCommon.getCss(this.size, this.color, this.background)}
                </style>
            </Host>
        );
    }


}
