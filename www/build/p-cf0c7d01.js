class f{constructor(){this.fontSizeMap={"xx-small":"0.65rem","x-small":"0.75rem",small:"0.9rem",medium:"1rem",large:"1.5rem","x-large":"2rem","xx-large":"2.5rem",larger:"larger",smaller:"smaller"},this.colorPalette={grey:["#242526","#313336","#3f4145","#53565a","#72767a","#8e9399","#acb0b5","#d0d4d9","#edf0f2","#f8f9f9"],red:["#471819","#691518","#8f0e13","#b50d12","#de1b21","#fa5056","#fc9094","#fcc7c9","#fce8e9","#fff5f5"],pink:["#451726","#661430","#8c0e38","#b30c44","#db1a5b","#f74f87","#fa8eb2","#fcc7d9","#fce8ef","#fcf5f7"],purple:["#371c52","#4d2378","#642b9e","#7e40bd","#9557d4","#b277ed","#cda3f7","#e2cdf7","#f2ebfa","#faf7fc"],indigo:["#222261","#2b2b94","#3939bd","#4f4fdb","#6666e3","#8787fa","#adadff","#d1d1ff","#ededff","#f7f7ff"],navy:["#001238","#001e60","#00308a","#0047bb","#005bed","#4289f5","#8cb6f5","#c0d7fa","#e6f0ff","#f5f8fc"],blue:["#0c2b3b","#093d57","#064e73","#066594","#0d7db5","#239cd9","#53bff5","#b0def5","#e1f2fa","#f2f9fc"],teal:["#082e2b","#06403b","#07524b","#056960","#038277","#0aa396","#1ec7b9","#abe0dc","#d7f5f2","#edfaf9"],mint:["#0a2e1e","#094028","#075433","#097a49","#12995f","#27b875","#48d597","#abe0c9","#daf5e9","#edfaf3"],green:["#1e2b0a","#283d09","#344f0b","#3f6605","#4e8003","#689e18","#8cc63f","#c6dba7","#e4f2ce","#f2fae6"],yellow:["#36240c","#4d310b","#663e07","#854e03","#a66102","#c97d12","#e6a243","#f5cc93","#faecd9","#fff8ed"],orange:["#3d1e14","#5e2413","#80280d","#a6310d","#c94218","#e8663f","#f2997e","#f5ccbf","#fce9e3","#faf6f5"]},this.themePalette={"primary-dark":{bg:"#001E60",fg:"#ffffff"},"primary-light":{bg:"#0047BB",fg:"#ffffff"},"secondary-dark":{bg:"#097A49",fg:"#ffffff"},"secondary-light":{bg:"#48D597",fg:"#000000"},success:{bg:"#097A49",fg:"#ffffff"},info:{bg:"#0047BB",fg:"#ffffff"},danger:{bg:"#B50D12",fg:"#ffffff"},warning:{bg:"#A66102",fg:"#ffffff"},base:{bg:"#ffffff",fg:"#000000"},dark:{bg:"#000000",fg:"#ffffff"}}}static getInstance(){return f.instance||(f.instance=new f),f.instance}getColorPalette(f){let e=f.split("-")[0],r=(100-f.split("-")[1])/10;return{bg:this.colorPalette[e][r],fg:r<5?"#ffffff":"#000000"}}getColor(f){return this.themePalette[f]?this.themePalette[f]:this.getColorPalette(f)}getCss(f,e,r){let a=":host {";if(f&&(a+="font-size: "+this.fontSizeMap[f]+";"),r){let f=this.getColor(r);a+="background-color: "+f.bg+";",e||(a+="color: "+f.fg+";",a+="border-color: "+this.convertHex(f.fg,20)+";",a+="outline-color: "+this.convertHex(f.fg,20)+";")}return e&&(a+="color: "+this.getColor(e).bg+";",a+="border-color: "+this.convertHex(this.getColor(e).bg,20)+";",a+="outline-color: "+this.convertHex(this.getColor(e).bg,20)+";"),a+"}"}getStyle(f,e,r,a){if(HTMLElement.prototype.attachShadow)return this.getCss(f,e,r);if(a.style.fontSize=this.fontSizeMap[f],r){let f=this.getColor(r);e||(a.style.color=f.fg,a.style.borderColor=this.convertHex(f.fg,20),a.style.outlineColor=this.convertHex(f.fg,20)),a.style.backgroundColor=f.bg}return e&&(a.style.color=this.getColor(e).bg,a.style.borderColor=this.convertHex(this.getColor(e).bg,20),a.style.outlineColor=this.convertHex(this.getColor(e).bg,20)),""}convertHex(f,e){return f=f.replace("#",""),"rgba("+parseInt(f.substring(0,2),16)+","+parseInt(f.substring(2,4),16)+","+parseInt(f.substring(4,6),16)+","+e/100+")"}}const e=f.getInstance();export{e as U};