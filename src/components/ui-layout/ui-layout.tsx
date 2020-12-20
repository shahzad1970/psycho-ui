import { h, Component, Host, Element, Prop } from '@stencil/core';
import { UiColor, UiSize, UiLayoutType, UiAlign, UiElevation } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common";


@Component({
    tag: 'ui-layout',
    styleUrl: 'ui-layout.css',
    shadow: true
})
export class UiLayout {
    @Element() el: HTMLElement;

    /**
     * @description
     * Set forground color to selected palette color.
     */
    @Prop({ reflect: true }) color: UiColor;

    /**
     * @description
     * Background color from the UI Color Palette. When only background is present then background will be color and forground
     * will be either white or black. If color attribute is also present then forground color will be set to color attribute.
     */
    @Prop({ reflect: true }) background: UiColor;

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop({ reflect: true }) size: UiSize;

    /**
     * @description
     * Layout type, default is "row" can also be "column"
     */
    @Prop({ reflect: true }) type: UiLayoutType = "row";

    /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop({ reflect: true }) align: UiAlign;

        /**
     * @description
     * Absolute-size keywords, based on the user's default font size (which is medium).
     */
    @Prop({ reflect: true }) justify: UiAlign;

    /**
     * @description
     * Amount of gap between the row items or column items;
     */
    @Prop({ reflect: true }) gap: UiSize;

    /**
     * @description
     * Max width of the column or row, should really only be used on a column type layout. 
     * any CSS unit of measurement can be used. 
     */
    @Prop({ reflect: true }) width: string;

    /**
     * @description
     * Max width of the column or row, should really only be used on a column type layout. 
     * any CSS unit of measurement can be used. 
     */
    @Prop({ reflect: true }) height: string;

    @Prop({ reflect: true }) padding: string;

    @Prop({ reflect: true }) margin: string;

    /**
     * @description
     * Elevation from the page by adding a border
     */
    
    @Prop({ reflect: true }) elevation: UiElevation="none";



    styleBuilder() {
        let style = {};
        if (this.width) {
            style["max-width"] = this.width;
            style["min-width"] = this.width;
        }
        if (this.height) {
            style["max-height"] = this.height;
            style["min-height"] = this.height;
        }
        if (this.gap) {
            const children = [];
            this.el.childNodes.forEach(n => {
                if (n.nodeType == 1) children.push(n as HTMLElement);
            })
            children.forEach((n, i) => {
                if (n.nodeType == 1) {
                    const elm = n as HTMLElement;
                    let size = "calc(" + UiCommon.fontSizeMap[this.gap] + " / 2)";
                    if (this.type == "row") {
                        elm.style.marginRight = "calc(" + UiCommon.fontSizeMap[this.gap] + " / 2)";;
                        elm.style.marginBottom = "calc(" + UiCommon.fontSizeMap[this.gap] + " / 2)";;
                        this.el.style.marginRight = "calc(-" + UiCommon.fontSizeMap[this.gap] + " / 2)";;
                    } else if (this.type == "column") {
                        if (children.length - 1 != i) {
                            elm.style.marginBottom = size;
                        }
                    }
                }
            })
        }
        return style;
    }

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
