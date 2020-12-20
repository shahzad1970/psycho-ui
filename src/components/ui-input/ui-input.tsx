import { h, Component, Host, Prop, Element, State, Event, EventEmitter, Listen } from '@stencil/core';
import { UiColor, UiSize, UiInputType, UiOrientation } from "../../utils/ui-types";
import { UiCommon } from "../../utils/ui-common"

/**
 * @title
 * UI Paragraph
 * 
 * @description
 * The HTML ui-paragraph element represents a paragraph. Paragraphs are usually represented in visual media as blocks 
 * of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs 
 * can be any structural grouping of related content, such as images or form fields.
 * 
 * @usage
 * <ui-layout type="column" padding="10px" gap="large" class="ui-edit-layer">
 *   <ui-input type="text" class="ui-edit-layer">Example input label</ui-input>
 *   <ui-input orientation="horizontal" type="text" class="ui-edit-layer">Example input label</ui-input>
 * </ui-layout>
 */

@Component({
    tag: 'ui-input',
    styleUrl: 'ui-input.css',
    shadow: true
})
export class UiInput {
    @Element() el: HTMLElement;

    /**
     * @description
     * Forground color from the UI Color Palette
     * 
     */
    @Prop({ reflect: true }) color: UiColor;

    /**
     * @description
     * Background color from the UI Color Palette
     */
    @Prop({ reflect: true }) background: UiColor;

    /**
     * @description 
     * Absolute font size 
     */
    @Prop({ reflect: true }) size: UiSize;

    /**
     * @description
     * Type of input being requested
     */

    @Prop({ reflect: true }) type: UiInputType = "text";

    /**
     * @description
     * Type of input being requested
     */

    @Prop({ reflect: true }) orientation: UiOrientation = "vertical";

    @Prop({ mutable: true })
    value: any;

    @Event()
    uiInput: EventEmitter;

    @State()
    open: boolean = false;

    inputContainer: HTMLDivElement;
    inputField: HTMLInputElement;

    private onFocus() {
        
    }

    private onBlur() {
        setTimeout(() => {
            this.open = false
        }, 200)
    }

    private getIcon() {
        switch (this.type) {
            case "search":
                return (<ui-icon>search</ui-icon>)
            case "date":
                return (<ui-icon>calendar_today</ui-icon>)
            case "color":
                return (<ui-icon>color_lens</ui-icon>)
        }
        return;
    }

    @Listen('click', { capture: true })
    onElementClick() {
        this.open = true;
        if (this.inputField) this.inputField.focus();
    }

    private getInput() {
        switch (this.type) {
            case "color":
                return (
                    <div class="input-container" ref={(el) => this.inputContainer = el}>
                        <ui-text background={this.value}>&nbsp;&nbsp;{this.value}&nbsp;&nbsp;</ui-text>
                        <input readonly ref={(el) => this.inputField = el} type="text" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()}></input>
                        {this.getIcon()}
                        <div class={this.open ? "input-options" : "input-options hide"} >
                            <ui-input-color onUiInputEvent={(e) => this.onColorValue(e)}></ui-input-color>
                        </div>
                    </div>
                )
            case "radio":
                return [
                    <ui-input-radio orientation={this.orientation}><slot name="option"></slot></ui-input-radio>
                ]
            default:
                return ( 
                    <ui-input-text></ui-input-text>                    
                )
        }
    }

    onTextInput() {
        console.log(this.inputField.value);
        this.value = this.inputField.value;
        this.uiInput.emit({ value: this.value });
    }

    onColorValue(e: CustomEvent) {
        console.log(e.detail)
        this.value = e.detail;
        this.open = false;
        this.inputField.blur();
        this.uiInput.emit({ value: e.detail });
    }

    @Listen("uiInputOptionEvent", {capture: true})
    uiInputOptionEvent(e: CustomEvent) {
        this.el.querySelectorAll("ui-input-option").forEach(el => {
            el.removeAttribute("selected");
            el.getValue().then(v => {
                if (v == e.detail.value) {
                    el.setAttribute("selected", "true");
                    this.uiInput.emit({ value: e.detail.value });
                }
            })

        })

    }


    render() {
        return (
            <Host>               
                <slot></slot>
                {this.getInput()}
                <style>
                    {UiCommon.getStyles(this)};;
                </style>
            </Host>
        );
    }
}
