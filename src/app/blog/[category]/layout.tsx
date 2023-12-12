// react
import {
    PropsWithChildren,
} from 'react';
// UI Components
import NavMenuList from '@/components/ui/NavMenuList/NavMenuList';
// styled-components
import { 
    designSystemColors,
} from '@/styles/colors';

async function BlogCategoryLayout(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <div>
            <div 
                className={`
                    w-full
                    flex items-start
                `.trim()}>
                <NavMenuList 
                    className={`
                        shrink-0
                        ml-auto
                        h-[calc(100vh-72px)]
                        sticky top-[72px]
                        overflow-auto
                    `.trim()}
                    navTitle="블로그 카테고리" />

                <div 
                    style={{
                        maxWidth: designSystemColors.light.common.maxWidth,
                    }}
                    className={`
                        flex-1
                        mr-auto
                        w-full
                        overflow-x-hidden
                    `.trim()}>
                    {children}
                </div>
            </div>

            {/* <footer className={`
                mx-auto
                w-[90%] h-[500px]
                bg-orange-700
                text-white
            `}>
                Footer
            </footer> */}
        </div>
    );
}

export default BlogCategoryLayout;
