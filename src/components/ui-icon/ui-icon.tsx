import { h, Component, Prop, Host, Element } from '@stencil/core';
import { UiColor, UiSize } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";
import { UiIcons } from "./icon"

/**
 * @title
 * UI Icon
 * 
 * @description
 * Heading component used to provide title or headline where needed. It is a flex element and implements framework styling.
 * 
 * @usage
 *  <ui-icon class="ui-edit-layer" size="xx-large">airplay</ui-icon>
 *  <ui-icon class="ui-edit-layer" size="xx-large" icon="archive"></ui-icon>
 */
@Component({
    tag: 'ui-icon',
    styleUrl: 'ui-icon.css',
    shadow: true
})
export class UiIcon {
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
     * Material design icons are used as part of this framework. Name of the icon can be between the tag or it can be sent in as an attribute.
     * For example as attribute &lt;ui-icon icon="apps"&gt;&lt;/ui-icon&gt; or &lt;ui-icon&gt;apps&lt;/ui-icon&gt;
     * In addition to this svg of an icon can be placed within the icon tag to create an svg icon. 
     * 
     * <pre><ui-text color="danger">* CLICK NAME TO COPY TO CLIPBOARD * </ui-text></pre>
     * 
     */
    @Prop() icon: UiIcons;


    render() {
        return (
            <Host> 
                {!this.icon &&
                    <slot />
                }
                {this.icon}
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
