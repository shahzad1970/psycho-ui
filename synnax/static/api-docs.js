class UiComponentDocumentation {
    constructor() {

    }
    static getInstance() {
        if (!UiComponentDocumentation.instance) {
            UiComponentDocumentation.instance = new UiComponentDocumentation();
        }
        return UiComponentDocumentation.instance;
    }
 
    static components = {
        "ui-app": {
            "name": "App",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app background="base">
    <ui-app-header elevation="xx-small">
        <ui-button fab round size="large" onclick="setState('ui-app-navigation', 'toggle')">
            <ui-icon>menu</ui-icon>
        </ui-button>
    </ui-app-header>
    <ui-app-navigation elevation="xx-small" gap="small" open>
        <ui-button>
            Navigation
        </ui-button>
    </ui-app-navigation>
    <ui-app-main>
    </ui-app-main>
</ui-app>`
        },


        "ui-button": {
            "name": "Button",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app>
    <ui-app-main align="center" justify="center">
<ui-button background="primary-light">
    Example Button
</ui-button>
    </ui-app-main>
</ui-app>
    
`
        },

        "ui-input": {
            "name": "Input",
            "description": `
                <ui-text>The app component (<ui-text color="primary-light" bold> ui-app </ui-text>) is the root of the application. It is the only component that can be added to the body tag of a page.</ui-text>
                <ui-text>App component uses CSS Grid layout with three areas. 
                At the top is the header (<ui-text color="primary-light" bold> ui-header </ui-text>) application header bar. 
                Below the header are app navagation on the left (<ui-text color="primary-light" bold> ui-navagation </ui-text>) and to the right of this
                is the app main container  (<ui-text color="primary-light" bold> ui-main </ui-text>). </ui-text>
            `,
            'codeExample': `
<ui-app background="base">
    <ui-app-main align="center" justify="center">
<ui-input type="select">
    Input label
    <ui-input-option value="THISISONE" label="ONE">One</ui-input-option>
    <ui-input-option>Two</ui-input-option>
    <ui-input-option>Three</ui-input-option>
    <ui-input-option>Four</ui-input-option>
    <ui-input-option>One</ui-input-option>
    <ui-input-option>Two</ui-input-option>
    <ui-input-option>Three</ui-input-option>
    <ui-input-option>Four</ui-input-option>
</ui-input>
    </ui-app-main>
</ui-app>
    
`
        }

    }

    static attributes = {
        "color":       `Set the front color of the component should be selected from the color palette, 
                        but can also be set to a custom color using any standard CSS color value.`,
        "size":        `Set the font size of the component should be selected from the size palette, however can also be set to a custom size using any standard CSS font size value.`,
        "background": `Set the background color of the component should be selected from the color palette, however can also be set to a custom color using any standard CSS color value.`,
    }

    getComponentDoc(name) {
        return UiComponentDocumentation.components[name.toLowerCase()];
    }

    getComponentAttributeDoc(name) {
        return UiComponentDocumentation.attributes[name.toLowerCase()];
    }
} 