import { h, Prop, Component, Host, Element } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"


/**
 * @title
 * UI Text
 * 
 * @description
 * The <ui-text> element is a generic inline-flex container for phrasing content, 
 * which does not inherently represent anything. It can be used to group elements for styling purposes
 * using supported attribute. 
 * It should be used only when no other semantic element is appropriate. <ui-text> is very much 
 * like a <ui-layout> element, but <ui-layout> is a block-level element whereas a <ui-text> is an inline element.
 * 
 * @usage
 * <ui-layout type="column" width="600px">
 * <ui-paragraph>
 *      "The only question before us is whether a state may lawfully demand production by a third 
 *       party of the 
 * 
 *      <ui-text class="ui-edit-layer" background="primary-dark" size="larger">
 *          President's
 *      </ui-text>
 * 
 *      personal financial records for use in a grand jury investigation 
 *      while the President is in office," wrote the judges, adding: "We hold that any presidential 
 *      immunity from state 
 * 
 *      <ui-text class="ui-edit-layer" background="primary-dark" size="smaller">
 *             criminal process
 *      </ui-text>
 * 
 *       does not bar the enforcement of a subpoena."
 * </ui-paragraph>
 * </ui-layout>
 */

@Component({
    tag: 'ui-text',
    styleUrl: 'ui-text.css',
    shadow: true
})
export class UiText {
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


    render() {
        return (
            <Host>
                <slot></slot>
                <style>
                    {UiCommon.getStyle(this.size, this.color, this.background, this.el)}
                </style>
            </Host>
        );
    }
}
