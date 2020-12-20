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
                <ui-button round="none" type="flat" href="/ui-button.html">Button</ui-button>
                <ui-button round="none" type="flat" href="/ui-heading.html">Heading</ui-button>
                <ui-button round="none" type="flat" href="/ui-icon.html">Icon</ui-button>
                <ui-button round="none" type="flat" href="/ui-input.html">Input</ui-button>
                <ui-button round="none" type="flat" href="/ui-modal.html">Modal</ui-button>
                <ui-button round="none" type="flat" href="/ui-paragraph.html">Paragraph</ui-button>
                <ui-button round="none" type="flat" href="/ui-table.html">Table</ui-button>
                <ui-button round="none" type="flat" href="/ui-text.html">Text</ui-button>
            </Host>
        );
    }
}
