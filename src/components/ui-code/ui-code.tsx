import { h, Component, Prop, Element, Host, State, Method } from '@stencil/core';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('sql', sql);
hljs.configure({tabReplace: "   ", useBR: true})
@Component({
    tag: 'ui-code',
    styleUrl: 'ui-code.css',
    shadow: true
})
export class UiCode {
    @Element() el: HTMLElement;
    @Prop() language: 'xml' | 'java' | 'javascript' | 'typescript' | 'sql' = "xml";

    @State() code: string;

    @Method()
    async setCode(code) {
        const regex = /class="(.*?)"/gm;
        code = code.replace(regex, '');
        this.code = hljs.fixMarkup(hljs.highlight(this.language, code, true).value);
    }

    render() {
        return (
            <Host>
               <code class="hljs" innerHTML={this.code}></code>
            </Host>
        );
    }
}
