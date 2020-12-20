import { h, Component, Host, Element, Prop } from '@stencil/core';
import { UiColor, UiSize, UiAlign } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";
/**
 * @title
 * UI Table
 * 
 * @description
 * Table is a lightweight and opinionated component for enhancing tabular data.
 * It offers features like sticky headers, support for narrow viewport widths,
 * and table styles.
 * @usage
 * <ui-table class="ui-edit-layer">
 *  <ui-table-head class="ui-edit-layer">
 *   <ui-table-row class="ui-edit-layer">
 *    <ui-table-cell class="ui-edit-layer">One</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Two</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Three</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Four</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Five</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Six</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Seven</ui-table-cell>
 *   </ui-table-row>
 *  </ui-table-head>
 *  <ui-table-body class="ui-edit-layer" hover>
 *   <ui-table-row class="ui-edit-layer">
 *    <ui-table-cell class="ui-edit-layer">One</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Two</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Three</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Four</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Five</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Six</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Seven</ui-table-cell>
 *   </ui-table-row>
 *   <ui-table-row class="ui-edit-layer">
 *    <ui-table-cell class="ui-edit-layer">One</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Two</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Three</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Four</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Five</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Six</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Seven</ui-table-cell>
 *   </ui-table-row>
 *   <ui-table-row class="ui-edit-layer">
 *    <ui-table-cell class="ui-edit-layer">One</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Two</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Three</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Four</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Five</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Six</ui-table-cell>
 *    <ui-table-cell class="ui-edit-layer">Seven</ui-table-cell>
 *   </ui-table-row>
 *  </ui-table-body>
 * </ui-table>
 */
@Component({
    tag: 'ui-row',
    styleUrl: 'ui-row.css',
    shadow: true
})
export class UiRow {
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
     * Defines how each line is aligned within a flexbox/grid container. 
     * It only applies if flex-wrap: wrap is present, and if there are multiple lines 
     * of flexbox/grid items.
     */
    @Prop({ reflect: true }) alignContent: UiAlign = "start";

    /**
     * @description
     * Defines how each line is aligned within a flexbox/grid container. It only applies 
     * if flex-wrap: wrap is present, and if there are multiple lines of 
     * flexbox/grid items.
     */
    @Prop({ reflect: true }) justifyContent: UiAlign = "start";

    /**
     * @description
     * Defines how flexbox items are aligned according to the cross axis, within a line 
     * of a flexbox container.
     */
    @Prop({ reflect: true }) alignItems: UiAlign = "middle";

    /**
     * @description
     * Defines how flexbox items are aligned according to the cross axis, within a line 
     * of a flexbox container.
     */
    @Prop({ reflect: true }) alignSelf: UiAlign;

    /**
     * @description
     * Amount of gap between the row items or column items;
     */
    @Prop({ reflect: true }) flex: string;
    
    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) padding: string;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) margin: string;

    /**
     * @description
     * Flex box flex, how much to streatch
     */
    @Prop({ reflect: true }) gap: string;

    render() {
        return (
            <Host>
                <slot></slot>
                <style>
                    {UiCommon.getStyles(this)};;
                    {UiCommon.getPosition(this.alignContent, this.justifyContent,
                         this.alignItems, this.flex, this.padding, this.margin,
                          this.gap, this.alignSelf, null, null, null, this.el)}
                </style>
            </Host>
        );
    } 
} 
