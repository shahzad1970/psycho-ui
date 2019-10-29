import { h, Component } from '@stencil/core';


@Component({
    tag: 'ui-icon',
    styleUrl: 'ui-icon.css',
    shadow: true
})
export class UiIcon {
    render() {
        return (
            <slot/>
        );
    }
}
