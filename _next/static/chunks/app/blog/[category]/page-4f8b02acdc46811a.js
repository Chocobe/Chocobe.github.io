(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{2957:function(n,t,e){Promise.resolve().then(e.bind(e,2317))},2317:function(n,t,e){"use strict";e.r(t);var o=e(230),r=e(7437),i=e(2265),a=e(516),l=e(9186),s=e(4046),c=e(802);function _templateObject(){let n=(0,o._)(["\n    //\n\n    > .featuredSection {\n        padding: 40px 20px;\n\n        background-color: ",";\n\n        > .sectionContent {\n            //\n        }\n    }\n\n    > .commonSection {\n        padding: 20px;\n    }\n"]);return _templateObject=function(){return n},n}let d=c.ZP.div.withConfig({componentId:"sc-e6ecd01d-0"})(_templateObject(),n=>{let{theme:t}=n;return t.designSystemColors.type.d});function BlogCategoryPage(n){let{featuredMarkdownRendeeringDataList:t,commonMarkdownRenderingDataList:e}=n,o=(0,i.useMemo)(()=>{let n=e.map(n=>{let{category:t,slug:e,frontmatter:{title:o,description:r,thumbnail:i,createdAt:a}}=n;return{category:t,title:o,description:r,thumbnail:i,date:a.toISOString(),href:"/blog/".concat(t,"/").concat(e)}});return[...n.map(n=>({...n,title:"".concat(n.title,"-1")})),...n.map(n=>({...n,title:"".concat(n.title,"-2")})),...n.map(n=>({...n,title:"".concat(n.title,"-3")})),...n.map(n=>({...n,title:"".concat(n.title,"-4")})),...n.map(n=>({...n,title:"".concat(n.title,"-5")}))]},[e]);return(0,r.jsxs)(d,{children:[(null==t?void 0:t[0])&&(0,r.jsx)("section",{className:"featuredSection",children:(0,r.jsx)(a.Z,{variant:s.z.FEATURED,thumbnail:t[0].frontmatter.thumbnail,category:t[0].category,title:t[0].frontmatter.title,date:t[0].frontmatter.createdAt.toISOString(),description:t[0].frontmatter.description,href:"/blog/".concat(t[0].category,"/").concat(t[0].slug)})}),(0,r.jsx)("section",{className:"commonSection",children:(0,r.jsx)(l.Z,{blogPostList:o})})]})}t.default=(0,i.memo)(BlogCategoryPage)},516:function(n,t,e){"use strict";var o=e(230),r=e(7437),i=e(2265),a=e(6691),l=e.n(a),s=e(1396),c=e.n(s),d=e(4033),p=e(802),u=e(4046);function _templateObject(){let n=(0,o._)(["\n    display: flex;\n\n    border-radius: 8px;\n    overflow: hidden;\n\n    transition: all 0.18s ease;\n\n    > .thumbnailWrapper {\n        flex-shrink: 0;\n\n        width: 40%;\n        height: auto;\n\n        position: relative;\n\n        > .thumbnail {\n            object-fit: cover;\n            object-position: center;\n        }\n    }\n\n    > .cardBody {\n        flex: 1;\n        padding: 20px 16px;\n        width: 100%;\n\n        position: relative;\n\n        color: #fff;\n\n        > .hoverDecorator {\n            width: 50%;\n            height: 32px;\n\n            position: absolute;\n            top: 0;\n            right: 0;\n            transform: translate(100%, -100%);\n            transition: all 0.18s ease-in-out;\n\n            background-color: ",";\n\n            pointer-events: none;\n\n            &::after {\n                content: '';\n                width: 50%;\n                height: 50px;\n\n                display: block;\n\n                position: absolute;\n                top: 8px;\n                right: 8px;\n                transform: translate(100%, 100%);\n                transition: all 0.18s ease-in-out;\n                transition-delay: 0.09s;\n\n                background-color: ",";\n            }\n        }\n\n        > .category {\n            color: ",";\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 600;\n        }\n\n        > .title {\n            margin-top: 20px;\n\n            color: ",";\n            font-size: 24px;\n            line-height: 30px;\n            font-weight: 700;\n        }\n\n        > .date {\n            margin-top: 16px;\n\n            color: ",";\n            font-size: 14px;\n            line-height: 22px;\n            font-weight: 500;\n        }\n\n        > .description {\n            margin-top: 16px;\n\n            color: ",";\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 400;\n            white-space: pre-line;\n\n            display: -webkit-box;\n            overflow: hidden;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n        }\n\n        > .readMoreLink {\n            margin-top: 32px;\n            padding: 16px 48px;\n\n            display: none;\n\n            color: ",";\n            font-size: 18px;\n            line-height: 28px;\n            font-weight: 700;\n\n            background-color: ",";\n        }\n    }\n\n    &:not([data-variant=","]):hover {\n        box-shadow: ",";\n\n        cursor: pointer;\n\n        > .cardBody {\n            //\n\n            > .hoverDecorator {\n                transform: translate(0, 0);\n\n                &::after {\n                    transform: translate(0, 0);\n                }\n            }\n        }\n    }\n\n    &[data-variant=","] {\n        flex-flow: row-reverse;\n\n        border-radius: 0;\n\n        > .thumbnailWrapper {\n            border-radius: 8px;\n            overflow: hidden;\n\n            > .thumbnail {\n                //\n            }\n        }\n\n        > .cardBody {\n            //\n\n            > .hoverDecorator {\n                display: none;\n            }\n\n            > .category {\n                //\n            }\n\n            > .title {\n                font-size: 36px;\n                line-height: 40px;\n            }\n\n            > .date {\n                //\n            }\n\n            > .description {\n                display: -webkit-box;\n                -webkit-box-orient: vertical;\n                -webkit-line-clamp: 2;\n                overflow: hidden;\n\n                white-space: pre-line;\n            }\n\n            > .readMoreLink {\n                display: inline-block;\n            }\n        }\n\n        &:hover {\n            box-shadow: none;\n        }\n    }\n"]);return _templateObject=function(){return n},n}let h=p.ZP.div.withConfig({componentId:"sc-8e4d2087-0"})(_templateObject(),n=>{let{theme:t}=n;return t.colors["yellow-600"]},n=>{let{theme:t}=n;return t.designSystemColors.type.h},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.category},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.title},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.date},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.description},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.readMoreLink.color},n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.readMoreLink.bg},u.z.FEATURED,n=>{let{theme:t}=n;return t.designSystemColors.BlogPostCard.boxShadow},u.z.FEATURED);function BlogPostCard(n){let{className:t,variant:e=u.z.NORMAL,thumbnail:o,category:a,title:s,date:p,description:m,href:g}=n,f=(0,d.useRouter)(),x=(0,i.useCallback)(()=>{e!==u.z.FEATURED&&f.push(g)},[e,g,f]);return(0,r.jsxs)(h,{className:t,"data-variant":e,onClick:x,children:[(0,r.jsx)("figure",{className:"thumbnailWrapper",children:o&&(0,r.jsx)(l(),{className:"thumbnail",src:o,alt:s,fill:!0,priority:!0})}),(0,r.jsxs)("div",{className:"cardBody",children:[(0,r.jsx)("div",{className:"hoverDecorator"}),(0,r.jsx)("div",{className:"category",children:a}),(0,r.jsx)("div",{className:"title",children:s}),(0,r.jsxs)("div",{className:"date",children:["작성일: ",p]}),(0,r.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:m}}),(0,r.jsx)(c(),{className:"readMoreLink",href:g,children:"Read More"})]})]})}t.Z=(0,i.memo)(BlogPostCard)},4046:function(n,t,e){"use strict";e.d(t,{z:function(){return o}});let o={NORMAL:"normal",FEATURED:"featured"}},9186:function(n,t,e){"use strict";var o=e(7437),r=e(516),i=e(4440),a=e.n(i);function BlogPostCardList(n){let{style:t,className:e,blogPostList:i}=n;return(0,o.jsx)("div",{className:a()(e,"\n                    flex flex-col gap-px-20\n                ".trim()),style:{...t},children:i.map(n=>{let{className:t,variant:e,thumbnail:i,category:a,title:l,date:s,description:c,href:d}=n;return(0,o.jsx)(r.Z,{className:t,variant:e,thumbnail:i,category:a,title:l,date:s,description:c,href:d},"".concat(l,"-").concat(s))})})}t.Z=BlogPostCardList}},function(n){n.O(0,[981,396,340,971,472,744],function(){return n(n.s=2957)}),_N_E=n.O()}]);