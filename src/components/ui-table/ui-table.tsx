import { Component, h, Host, Prop } from '@stencil/core';
import { UiColor, UiSize} from "../../utils/ui-types";
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
    tag: 'ui-table',
    styleUrl: 'ui-table.css',
    shadow: true
})
export class UiTable {
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
                <ui-layout class="table">
                    <slot></slot>
                </ui-layout>
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
