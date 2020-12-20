import { h, Component, Prop, Host, State } from '@stencil/core';
import { JsonDocsProp } from '../doc';


@Component({
    tag: 'ui-playground-values',
    styleUrl: 'ui-playground-values.css',
    shadow: true
})
export class UiPlaygroundValues {

    @Prop() prop: JsonDocsProp;

    @State() page = 0;

    @State() search = "";

    onClickCopyText(e: Event) {
        const target = e.target as HTMLUiTextElement;
        const el = document.createElement('textarea');
        el.value = target.textContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

    }

    onNextPage() {
        this.page += 50;
        const len = this.prop.values.filter(p => p.value.indexOf(this.search) != -1).length;
        if (this.page > len - 1) this.page = len - 50;
    }

    onPreviousPage() {
        this.page -= 50;
        if (this.page < 0) this.page = 0;
    }
    onSearch(e: CustomEvent) {
        this.page = 0;
        this.search = e.detail.value;
    }

    render() {
        return (
            <Host>
                {this.prop.name == "icon" && [

                    <ui-layout type="column" align="end" height="4em">
                        <ui-input type="search" onUiInput={(e) => this.onSearch(e)}></ui-input>
                    </ui-layout>,
                    <ui-layout type="row" gap="xx-small">
                        {this.prop.values.filter(p => p.value.indexOf(this.search) != -1).slice(this.page, this.page + 60).map(val =>
                            <ui-layout type="column" justify="end" height="120px" width="200px" background="grey-10">
                                <ui-layout type="column" justify="middle" align="middle" height="90px" width="120px">
                                    <ui-icon color="grey-80" size="x-large">{val.value}</ui-icon>
                                </ui-layout>
                                <ui-button round="none" background="grey-20" color="grey-60" type="flat" size="xx-small" title={val.value + " (click to copy)"} onClick={(e) => this.onClickCopyText(e)}>{val.value ? val.value : val.type}</ui-button>

                            </ui-layout>

                        )}
                    </ui-layout>,

                    <ui-layout type="column" justify="end" align="end" height="5em">
                        <ui-layout gap="large"> 
                        {this.page != this.prop.values.length && [
                            <ui-button type="outline" onUiClick={() => this.onPreviousPage()} background="base">Back</ui-button>,
                            <ui-button type="outline" onUiClick={() => this.onNextPage()} background="base">Next</ui-button>
                        ]}
                        </ui-layout>
                    </ui-layout>
                ]}

                {this.prop.name != "icon" &&
                    <ui-layout type="row" gap="xx-small" align="start">
                        {this.prop.values.map(val =>
                            <ui-layout width="8em" justify="middle" align="middle" type="column" background="blue-20">
                                <ui-text size="small">{val.value ? val.value : val.type}</ui-text>
                            </ui-layout>
                        )}
                    </ui-layout>
                }
            </Host>
        );
    }
}
