import { h, Host, Component, Element, State, Method } from '@stencil/core';


@Component({
    tag: 'ui-ripple',
    styleUrl: 'ui-ripple.css',
    shadow: true
})
export class UiRipple {
    @Element() el: HTMLElement;

    @State() ripple: boolean = false;

    @Method()
    async toggle(e: CustomEvent) {
        let ev = e as any;
        const pos = ev.target.getBoundingClientRect();
        const x = ev.pageX - pos.x ;
        const y = ev.pageY - pos.y;
        this.el.style.backgroundColor = window.getComputedStyle(this.el).color;
        this.el.style.top = y + "px";
        this.el.style.left = x + "px";
        this.ripple = true;
        setTimeout(() => {
            this.ripple = false;
        }, 800);
    }

    render() {
        return (
            <Host
                class={this.ripple ? "ripple" : ""}
            ></Host>
        )

    }
}
