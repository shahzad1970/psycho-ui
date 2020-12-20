
class UiCommonUtils {
    private static instance: UiCommonUtils;

    private constructor() { }

    public fontSizeMap: object = {
        'xx-small': "0.65em",
        'x-small': "0.75em",
        'small': "0.9em",
        'medium': "1em",
        'large': "1.5em",
        'x-large': "2em",
        'xx-large': "2.5em",
        'larger': "1.25em",
        'smaller': "0.75em",
    }

    public colorPalette: object = {
        'grey': ['#242526', '#313336', '#3f4145', '#53565a', '#72767a', '#8e9399', '#acb0b5', '#d0d4d9', '#edf0f2', '#f8f9f9'],
        'red': ['#471819', '#691518', '#8f0e13', '#b50d12', '#de1b21', '#fa5056', '#fc9094', '#fcc7c9', '#fce8e9', '#fff5f5'],
        'pink': ['#451726', '#661430', '#8c0e38', '#b30c44', '#db1a5b', '#f74f87', '#fa8eb2', '#fcc7d9', '#fce8ef', '#fcf5f7'],
        'purple': ['#371c52', '#4d2378', '#642b9e', '#7e40bd', '#9557d4', '#b277ed', '#cda3f7', '#e2cdf7', '#f2ebfa', '#faf7fc'],
        'indigo': ['#222261', '#2b2b94', '#3939bd', '#4f4fdb', '#6666e3', '#8787fa', '#adadff', '#d1d1ff', '#ededff', '#f7f7ff'],
        'navy': ['#001238', '#001e60', '#00308a', '#0047bb', '#005bed', '#4289f5', '#8cb6f5', '#c0d7fa', '#e6f0ff', '#f5f8fc'],
        'blue': ['#0c2b3b', '#093d57', '#064e73', '#066594', '#0d7db5', '#239cd9', '#53bff5', '#b0def5', '#e1f2fa', '#f2f9fc'],
        'teal': ['#082e2b', '#06403b', '#07524b', '#056960', '#038277', '#0aa396', '#1ec7b9', '#abe0dc', '#d7f5f2', '#edfaf9'],
        'mint': ['#0a2e1e', '#094028', '#075433', '#097a49', '#12995f', '#27b875', '#48d597', '#abe0c9', '#daf5e9', '#edfaf3'],
        'green': ['#1e2b0a', '#283d09', '#344f0b', '#3f6605', '#4e8003', '#689e18', '#8cc63f', '#c6dba7', '#e4f2ce', '#f2fae6'],
        'yellow': ['#36240c', '#4d310b', '#663e07', '#854e03', '#a66102', '#c97d12', '#e6a243', '#f5cc93', '#faecd9', '#fff8ed'],
        'orange': ['#3d1e14', '#5e2413', '#80280d', '#a6310d', '#c94218', '#e8663f', '#f2997e', '#f5ccbf', '#fce9e3', '#faf6f5'],
    }

    public themePalette: object = {
        'primary-dark': { bg: "#001E60", fg: "#ffffff" },
        'primary-light': { bg: "#0047BB", fg: "#ffffff" },
        'secondary-dark': { bg: "#097A49", fg: "#ffffff" },
        'secondary-light': { bg: "#48D597", fg: "#000000" },
        'success': { bg: "#097A49", fg: "#ffffff" },
        'info': { bg: "#0047BB", fg: "#ffffff" },
        'danger': { bg: "#B50D12", fg: "#ffffff" },
        'warning': { bg: "#A66102", fg: "#ffffff" },
        'base': { bg: "#ffffff", fg: "#000000" },
        'dark': { bg: "#000000", fg: "#ffffff" },
    }

    public static getInstance(): UiCommonUtils {
        if (!UiCommonUtils.instance) {
            UiCommonUtils.instance = new UiCommonUtils();
        }
        return UiCommonUtils.instance;
    }

    private getColorPalette(c: string) {
        let c1 = c.split("-")[0];
        let cc: any = c.split("-")[1];
        let c2 = (100 - cc) / 10;

        return {
            bg: this.colorPalette[c1][c2],
            fg: (c2 as any < 5 ? "#ffffff" : '#000000')
        };

    }

    getColor(c: string) {
        return this.themePalette[c] ? this.themePalette[c] : this.getColorPalette(c);
    }

    getStyles(component) {
        let css = ":host {";
        if (component.size) {
            css += "font-size: " + this.fontSizeMap[component.size] + ";";
        }

        if (component.gap) {
            css += "gap: " + this.fontSizeMap[component.gap] + ";";
        }

        if (component.background) {
            let c = this.getColor(component.background);
            css += "background-color: " + c.bg + ";";
            if (!component.color) {
                css += "color: " + c.fg + ";";
                css += "--ui-border-color: " + this.convertHex(c.fg, 20) + ";";
                css += "--ui-highlight: " + this.convertHex(c.fg, 10) + ";";
            }
        }
        if (component.color) {
            css += "color: " + this.getColor(component.color).bg + ";";
            css += "--ui-border-color: " + this.convertHex(this.getColor(component.color).bg, 20) + ";";
            css += "--ui-highlight: " + this.convertHex(this.getColor(component.color).bg, 10) + ";";
        }
        if (component.width) {
            css += "width: "+ component.width;
        }
        if (component.height) {
            css += "height: "+ component.height;
        }
        if (component.padding) {
            css += "padding: "+ component.padding;
        }
        if (component.margin) {
            css += "margin: "+ component.margin;
        }
        if (component.align) {
            css += "    align-content: " + this.getAlign(component.align) + ";";
        }
        if (component.justify) {
            css += "    justify-content: " + this.getAlign(component.justify) + ";";
        }

        switch(component.elevation) {
            case "none" : css += "    box-shadow: none;"; break;
            case "xx-small" : css += "   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);"; break;
            case "x-small" : css += "    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);"; break;
            case "small" : css += "    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);"; break;
            case "medium" : css += "    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);"; break;
            case "large" : css += "    box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);"; break;
            case "x-large" : css += "    box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);"; break;
            case "xx-large" : css += "    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);"; break;

        }

        css += "}"
        return css;
    }

    getPosition(alignContent: string, justifyContent: string, alignItems: string, flex: string,
        padding: string, margin: string, gap: string, alignSelf: string, width: string, autoFit: boolean, autoFill: boolean, el: HTMLElement) {
        let css = ":host {";
        if (alignContent) {
            css += "    align-content: " + this.getAlign(alignContent) + ";";
        }
        if (justifyContent) {
            css += "    justify-content: " + this.getAlign(justifyContent) + ";";
        }
        if (alignItems) {
            css += "    align-items: " + this.getAlign(alignItems) + ";";
        }
        if (flex) {
            css += "    flex: " + flex + ";";
        }
        if (padding) {
            css += "    padding: " + padding + ";";
        }
        if (margin) {
            css += "    margin: " + margin + ";";
        }
        if (alignSelf) {
            css += "    align-self: " + alignSelf + ";";
        }
        if (el.nodeName == "UI-GRID") {
            let eWidth = !width ? "100px" : width;
            let eGap = !gap ? "0px" : gap;
            css += " gap: " + eGap + ";";
            if (autoFit || (!autoFit && !autoFill)) {
                css += "grid-template-columns: repeat(auto-fit, minmax(" + eWidth + ", 1fr));";
            } else if (autoFill) {
                css += "grid-template-columns: repeat(auto-fill, minmax(" + eWidth + ", 1fr));";
            }

        }
        css += "}"
        if (gap) {
            css += " ::slotted(:not(:last-child)) {"
            if (el.nodeName == "UI-COLUMN") {
                css += " margin-bottom: " + gap + ";"
            }
            if (el.nodeName == "UI-ROW") {
                css += " margin-right: " + gap + ";"
            }
            css += "}"
        }
        console.log(css)
        return css;
    }

    private getAlign(val: string) {
        if (val == "start") return "flex-start";
        if (val == "end") return "flex-end";
        if (val == "middle") return "center";
    }
    private convertHex(hex, opacity) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    }
}

export const UiCommon = UiCommonUtils.getInstance();


