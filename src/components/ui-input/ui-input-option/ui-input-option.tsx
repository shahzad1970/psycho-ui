import { h, Component, Event, EventEmitter, Listen, Prop, Method, Host } from '@stencil/core';


@Component({
    tag: 'ui-input-option',
    styleUrl: 'ui-input-option.css',
    shadow: true
})
export class UiInputOption {
    @Event() uiInputOptionEvent: EventEmitter;

    @Prop() value: string;
    @Prop({reflect: true}) selected: boolean = false;

    ripple: HTMLUiRippleElement;

    @Listen("click", { capture: true })
    onclick() {
        this.uiInputOptionEvent.emit({ value: this.value })
    }

    @Method()
    async getValue() {
        return this.value;
    }

    @Listen('mousedown', { capture: true })
    onMouseDown(e: CustomEvent) {
        this.ripple.toggle(e);
    }

    render() {
        return (
            <Host>
                <slot></slot>
                <ui-ripple ref={(e: HTMLUiRippleElement) => this.ripple = e}></ui-ripple>
            </Host>
        );
    }
}
