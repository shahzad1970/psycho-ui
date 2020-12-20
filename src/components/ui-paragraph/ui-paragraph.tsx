import {h, Host, Component, Prop, Element } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"


/**
 * @title
 * Paragraph
 * 
 * @description
 * The HTML ui-paragraph element represents a paragraph. Paragraphs are usually represented in visual media as blocks 
 * of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs 
 * can be any structural grouping of related content, such as images or form fields.
 * 
 * @usage
 * <ui-paragraph class="ui-edit-layer">
 *      "The only question before us is whether a state may lawfully demand production by a third 
 *       party of the President's
 *      personal financial records for use in a grand jury investigation 
 *      while the President is in office," wrote the judges, adding: "We hold that any presidential 
 *      immunity from state criminal process does not bar the enforcement of a subpoena."
 * </ui-paragraph>
 */

@Component({
    tag: 'ui-paragraph',
    styleUrl: 'ui-paragraph.css',
    shadow: true
})
export class UiParagraph {
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
    

    render() {
        return (
            <Host>
                <slot></slot>
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
