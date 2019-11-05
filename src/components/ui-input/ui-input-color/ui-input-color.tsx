import { h, Component, Host, Event, EventEmitter } from '@stencil/core';
import { UiCommon } from "../../../utils/ui-common"
import { UiColor } from '../../../utils/ui-types';


@Component({
    tag: 'ui-input-color',
    styleUrl: 'ui-input-color.css',
    shadow: true
})
export class UiInputColor {

    @Event() uiInputEvent : EventEmitter;

    select(color) {
        this.uiInputEvent.emit(color);
    }
    render() {
        return (
            <Host>
                <div class="row">
                    {Object.keys(UiCommon.themePalette).map(k =>
                        <ui-button onUiClick={() => this.select(k)} background={(k) as UiColor} round="none" type="base">{(k) as UiColor}</ui-button>
                    )}

                </div>
                {Object.keys(UiCommon.colorPalette).map(k =>
                    <div class="row">
                        {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map(w =>
                            <ui-button onUiClick={() => this.select((k + "-" + w))} background={(k + "-" + w) as UiColor} round="none" type="base">{(k + "-" + w) as UiColor}</ui-button>
                        )}

                    </div>
                )}
            </Host>
        );
    }
}
