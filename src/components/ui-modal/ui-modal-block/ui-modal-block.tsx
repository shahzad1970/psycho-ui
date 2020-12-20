import { Component, h, Host, Prop } from '@stencil/core';


@Component({
    tag: 'ui-modal-block',
    styleUrl: 'ui-modal-block.css',
    shadow: true
})
export class UiModalBlock {

    @Prop() active: boolean = false;
    
    render() {
        return (
            <Host>
            </Host>
        );
    }
}
