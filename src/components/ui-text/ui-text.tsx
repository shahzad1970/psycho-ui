import { h, Prop, Component, Host, Element } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"


/**
 * @title
 * UI Text
 * 
 * @description
 * Inline text element like html span
 * 
 * @usage
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
