import { h,Component, Host } from '@stencil/core';


@Component({
    tag: 'ui-doc-links',
    styleUrl: 'ui-doc-links.css',
    shadow: true
})
export class UiDocLinks {

    

    render() {
        return (
            <Host>
                <ui-button round="none" type="flat" background="base" color="grey-80" href="/ui-button.html">UI Button</ui-button>
                <ui-button round="none" type="flat" background="base" color="grey-80" href="/ui-heading.html">UI Heading</ui-button>
                <ui-button round="none" type="flat" background="base" color="grey-80" href="/ui-text.html">UI Text</ui-button>
            </Host>
        );
    }
}
