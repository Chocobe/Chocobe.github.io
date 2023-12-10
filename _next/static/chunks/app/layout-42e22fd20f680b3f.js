(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9254:function(e,n,a){Promise.resolve().then(a.t.bind(a,1813,23)),Promise.resolve().then(a.bind(a,6962)),Promise.resolve().then(a.bind(a,179)),Promise.resolve().then(a.bind(a,9248)),Promise.resolve().then(a.t.bind(a,8165,23))},6962:function(e,n,a){"use strict";a.r(n);var r=a(230),f=a(7437),t=a(2265),o=a(802);function _templateObject(){let e=(0,r._)(["\n    height: 0;\n    min-height: 100%;\n"]);return _templateObject=function(){return e},e}let l=o.ZP.div.withConfig({componentId:"sc-6cb25f84-0"})(_templateObject());function RootLayoutBody(e){let{className:n,style:a,children:r}=e;return(0,f.jsx)(l,{className:n,style:a,children:r})}n.default=(0,t.memo)(RootLayoutBody)},179:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return g}});var r=a(230),f=a(7437),t=a(2265),o=a(1396),l=a.n(o),d=a(802);function _templateObject(){let e=(0,r._)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n\n    > .navItem {\n        padding: 0 8px;\n\n        color: ",";\n        font-size: 16px;\n        line-height: 24px;\n        font-weight: 500;\n    }\n"]);return _templateObject=function(){return e},e}let i=d.ZP.nav.withConfig({componentId:"sc-4612defa-0"})(_templateObject(),e=>{let{theme:n}=e;return n.designSystemColors.text[222]});function RootLayoutNav(){let e=(0,t.useMemo)(()=>[{name:"Profile",href:"/profile"}],[]);return(0,f.jsx)(i,{children:e.map(e=>{let{name:n,href:a}=e;return(0,f.jsx)(l(),{className:"navItem",href:a,children:n},n)})})}var c=(0,t.memo)(RootLayoutNav);function RootLayoutHeader_templateObject(){let e=(0,r._)(["\n    position: sticky;\n    top: 0;\n    z-index: 1;\n\n    background-color: ",";\n\n    > .innerWrapper {\n        margin: 0 auto;\n        padding: 24px 20px 20px;\n        width: 100%;\n        max-width: 1200px;\n\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n\n        > .logoLink {\n            display: flex;\n            justify-content: center;\n            align-items: flex-end;\n            gap: 4px;\n\n            > .chocobe {\n                padding: 8px 4px 0;\n                color: ",";\n                font-size: 28px;\n                line-height: 20px;\n                font-weight: 600;\n\n                background-color: ",";\n            }\n\n            > .fe-blog {\n                position: relative;\n\n                color: ",";\n                font-size: 16px;\n                line-height: 16px;\n                font-weight: 600;\n\n                &::before {\n                    content: '';\n                    width: 4px;\n                    height: 4px;\n\n                    display: block;\n\n                    position: absolute;\n                    bottom: 2px;\n                    right: -6px;\n\n                    border-radius: 50%;\n                    background-color: ",";\n                }\n            }\n        }\n\n        > .headerActionsWrapper {\n            display: flex;\n            justify-content: flex-end;\n        }\n    }\n"]);return RootLayoutHeader_templateObject=function(){return e},e}let b=d.ZP.header.withConfig({componentId:"sc-2b4c7cfd-0"})(RootLayoutHeader_templateObject(),e=>{let{theme:n}=e;return n.designSystemColors.type.b},e=>{let{theme:n}=e;return n.designSystemColors.text.fff},e=>{let{theme:n}=e;return n.designSystemColors.type.a},e=>{let{theme:n}=e;return n.designSystemColors.text["222"]},e=>{let{theme:n}=e;return n.designSystemColors.type.a});function RootLayoutHeader(e){let{className:n}=e;return(0,f.jsx)(b,{className:n,children:(0,f.jsxs)("div",{className:"innerWrapper",children:[(0,f.jsx)(c,{}),(0,f.jsxs)(l(),{className:"logoLink",href:"/",children:[(0,f.jsx)("span",{className:"chocobe",children:"Chocobe"}),(0,f.jsx)("span",{className:"fe-blog",children:"FE Blog"})]})]})})}var g=(0,t.memo)(RootLayoutHeader)},9248:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return styledComponents_StyledComponentsProvider}});var r=a(7437),f=a(2265),t=a(4033),o=a(802);function StyledComponentsRegistry(e){let{children:n}=e,[a]=(0,f.useState)(()=>new o.qH);return(0,t.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,r.jsx)(r.Fragment,{children:e})}),(0,r.jsx)(r.Fragment,{children:n})}var l=a(230);function _templateObject(){let e=(0,l._)(['\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n\n        font-family: "Pretendard Variable", sans-serif;\n    }\n\n    body {\n        width: 100vw;\n        height: 100vh;\n\n        overflow: hidden;\n    }\n']);return _templateObject=function(){return e},e}let d=(0,o.vJ)(_templateObject()),i={light:{text:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)",iconActive:"rgba(255, 255, 255, 1)",iconInactive:"rgba(255, 255, 255, 0.5)",fff:"#fff",222:"#222",333:"#333"},type:{a:"#00AAA1",b:"#E8F3F3",c:"#DFF1F0",d:"#F2F8F7",e:"#D9D9D9",f:"#2B2C2E",g:"#ffffff",h:"#009189"},HomePage:{labelColor:"#232536"},BlogSlugPage:{prevPageButton:{color:"#fff",backgroundColor:"#009189"}},BlogCategoryCard:{borderColor:"#D9D9D9",category:"#232536",description:"#6D6E76",iconWrapper:"#FBF6EA",icon:"#232536",decoratorGreen:"#fff",decoratorYellow:"#fff",hover:{borderColor:"transparent",category:"#fff",description:"#eee",iconWrapper:"#fff",icon:"#009189",decoratorGreen:"#009189",decoratorYellow:"#FFD050"}},BlogPostCard:{category:"#592EA9",title:"#232536",date:"#4C4C4C",description:"#6D6E76",boxShadow:"3px 6px 12px 0 rgba(0, 0, 0, 0.5)",readMoreLink:{color:"#fff",bg:"#009189"}},NavMenuList:{borderColor:"#EEEEEE"},NavMenuItem:{color:"#6D6E76",borderColor:"#EEEEEE",decorator:"#ffffff00",hover:{color:"#333333"},active:{color:"#009189",decorator:"#FFD050"}}}};var c={"red-50":"#ffebee","red-100":"#ffcdd2","red-200":"#ef9a9a","red-300":"#e57373","red-400":"#ef5350","red-500":"#f44336","red-600":"#e53935","red-700":"#d32f2f","red-800":"#c62828","red-900":"#b71c1c","red-a100":"#ff8a80","red-a200":"#ff5252","red-a400":"#ff1744","red-a700":"#d50000","pink-50":"#fce4ec","pink-100":"#f8bbd0","pink-200":"#f48fb1","pink-300":"#f06292","pink-400":"#ec407a","pink-500":"#e91e63","pink-600":"#d81b60","pink-700":"#c2185b","pink-800":"#ad1457","pink-900":"#880e4f","pink-a100":"#ff80ab","pink-a200":"#ff4081","pink-a400":"#f50057","pink-a700":"#c51162","purple-50":"#f3e5f5","purple-100":"#e1bee7","purple-200":"#ce93d8","purple-300":"#ba68c8","purple-400":"#ab47bc","purple-500":"#9c27b0","purple-600":"#8e24aa","purple-700":"#7b1fa2","purple-800":"#6a1b9a","purple-900":"#4a148c","purple-a100":"#ea80fc","purple-a200":"#e040fb","purple-a400":"#d500f9","purple-a700":"#aa00ff","deep-purple-50":"#ede7f6","deep-purple-100":"#d1c4e9","deep-purple-200":"#b39ddb","deep-purple-300":"#9575cd","deep-purple-400":"#7e57c2","deep-purple-500":"#673ab7","deep-purple-600":"#5e35b1","deep-purple-700":"#512da8","deep-purple-800":"#4527a0","deep-purple-900":"#311b92","deep-purple-a100":"#b388ff","deep-purple-a200":"#7c4dff","deep-purple-a400":"#651fff","deep-purple-a700":"#6200ea","indigo-50":"#e8eaf6","indigo-100":"#c5cae9","indigo-200":"#9fa8da","indigo-300":"#7986cb","indigo-400":"#5c6bc0","indigo-500":"#3f51b5","indigo-600":"#3949ab","indigo-700":"#303f9f","indigo-800":"#283593","indigo-900":"#1a237e","indigo-a100":"#8c9eff","indigo-a200":"#536dfe","indigo-a400":"#3d5afe","indigo-a700":"#304ffe","blue-50":"#e3f2fd","blue-100":"#bbdefb","blue-200":"#90caf9","blue-300":"#64b5f6","blue-400":"#42a5f5","blue-500":"#2196f3","blue-600":"#1e88e5","blue-700":"#1976d2","blue-800":"#1565c0","blue-900":"#0d47a1","blue-a100":"#82b1ff","blue-a200":"#448aff","blue-a400":"#2979ff","blue-a700":"#2962ff","light-blue-50":"#e1f5fe","light-blue-100":"#b3e5fc","light-blue-200":"#81d4fa","light-blue-300":"#4fc3f7","light-blue-400":"#29b6f6","light-blue-500":"#03a9f4","light-blue-600":"#039be5","light-blue-700":"#0288d1","light-blue-800":"#0277bd","light-blue-900":"#01579b","light-blue-a100":"#80d8ff","light-blue-a200":"#40c4ff","light-blue-a400":"#00b0ff","light-blue-a700":"#0091ea","cyan-50":"#e0f7fa","cyan-100":"#b2ebf2","cyan-200":"#80deea","cyan-300":"#4dd0e1","cyan-400":"#26c6da","cyan-500":"#00bcd4","cyan-600":"#00acc1","cyan-700":"#0097a7","cyan-800":"#00838f","cyan-900":"#006064","cyan-a100":"#84ffff","cyan-a200":"#18ffff","cyan-a400":"#00e5ff","cyan-a700":"#00b8d4","teal-50":"#e0f2f1","teal-100":"#b2dfdb","teal-200":"#80cbc4","teal-300":"#4db6ac","teal-400":"#26a69a","teal-500":"#009688","teal-600":"#00897b","teal-700":"#00796b","teal-800":"#00695c","teal-900":"#004d40","teal-a100":"#a7ffeb","teal-a200":"#64ffda","teal-a400":"#1de9b6","teal-a700":"#00bfa5","green-50":"#e8f5e9","green-100":"#c8e6c9","green-200":"#a5d6a7","green-300":"#81c784","green-400":"#66bb6a","green-500":"#4caf50","green-600":"#43a047","green-700":"#388e3c","green-800":"#2e7d32","green-900":"#1b5e20","green-a100":"#b9f6ca","green-a200":"#69f0ae","green-a400":"#00e676","green-a700":"#00c853","light-green-50":"#f1f8e9","light-green-100":"#dcedc8","light-green-200":"#c5e1a5","light-green-300":"#aed581","light-green-400":"#9ccc65","light-green-500":"#8bc34a","light-green-600":"#7cb342","light-green-700":"#689f38","light-green-800":"#558b2f","light-green-900":"#33691e","light-green-a100":"#ccff90","light-green-a200":"#b2ff59","light-green-a400":"#76ff03","light-green-a700":"#64dd17","lime-50":"#f9fbe7","lime-100":"#f0f4c3","lime-200":"#e6ee9c","lime-300":"#dce775","lime-400":"#d4e157","lime-500":"#cddc39","lime-600":"#c0ca33","lime-700":"#afb42b","lime-800":"#9e9d24","lime-900":"#827717","lime-a100":"#f4ff81","lime-a200":"#eeff41","lime-a400":"#c6ff00","lime-a700":"#aeea00","yellow-50":"#fffde7","yellow-100":"#fff9c4","yellow-200":"#fff59d","yellow-300":"#fff176","yellow-400":"#ffee58","yellow-500":"#ffeb3b","yellow-600":"#fdd835","yellow-700":"#fbc02d","yellow-800":"#f9a825","yellow-900":"#f57f17","yellow-a100":"#ffff8d","yellow-a200":"#ffff00","yellow-a400":"#ffea00","yellow-a700":"#ffd600","amber-50":"#fff8e1","amber-100":"#ffecb3","amber-200":"#ffe082","amber-300":"#ffd54f","amber-400":"#ffca28","amber-500":"#ffc107","amber-600":"#ffb300","amber-700":"#ffa000","amber-800":"#ff8f00","amber-900":"#ff6f00","amber-a100":"#ffe57f","amber-a200":"#ffd740","amber-a400":"#ffc400","amber-a700":"#ffab00","orange-50":"#fff3e0","orange-100":"#ffe0b2","orange-200":"#ffcc80","orange-300":"#ffb74d","orange-400":"#ffa726","orange-500":"#ff9800","orange-600":"#fb8c00","orange-700":"#f57c00","orange-800":"#ef6c00","orange-900":"#e65100","orange-a100":"#ffd180","orange-a200":"#ffab40","orange-a400":"#ff9100","orange-a700":"#ff6d00","deep-orange-50":"#fbe9e7","deep-orange-100":"#ffccbc","deep-orange-200":"#ffab91","deep-orange-300":"#ff8a65","deep-orange-400":"#ff7043","deep-orange-500":"#ff5722","deep-orange-600":"#f4511e","deep-orange-700":"#e64a19","deep-orange-800":"#d84315","deep-orange-900":"#bf360c","deep-orange-a100":"#ff9e80","deep-orange-a200":"#ff6e40","deep-orange-a400":"#ff3d00","deep-orange-a700":"#dd2c00","brown-50":"#efebe9","brown-100":"#d7ccc8","brown-200":"#bcaaa4","brown-300":"#a1887f","brown-400":"#8d6e63","brown-500":"#795548","brown-600":"#6d4c41","brown-700":"#5d4037","brown-800":"#4e342e","brown-900":"#3e2723","grey-50":"#fafafa","grey-100":"#f5f5f5","grey-200":"#eeeeee","grey-300":"#e0e0e0","grey-400":"#bdbdbd","grey-500":"#9e9e9e","grey-600":"#757575","grey-700":"#616161","grey-800":"#424242","grey-900":"#212121","blue-grey-50":"#eceff1","blue-grey-100":"#cfd8dc","blue-grey-200":"#b0bec5","blue-grey-300":"#90a4ae","blue-grey-400":"#78909c","blue-grey-500":"#607d8b","blue-grey-600":"#546e7a","blue-grey-700":"#455a64","blue-grey-800":"#37474f","blue-grey-900":"#263238",white:"#ffffff",black:"#000000"},styles_theme=e=>({colors:c,designSystemColors:i[e]}),styledComponents_StyledComponentsProvider=e=>{let{children:n}=e;return(0,r.jsxs)(StyledComponentsRegistry,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(o.f6,{theme:styles_theme("light"),children:n})]})}},8165:function(){},1813:function(e){e.exports={style:{fontFamily:"'__PretendardFont_7bb6ba', '__PretendardFont_Fallback_7bb6ba'"},className:"__className_7bb6ba"}}},function(e){e.O(0,[981,396,971,472,744],function(){return e(e.s=9254)}),_N_E=e.O()}]);