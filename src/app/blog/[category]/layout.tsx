// react
import {
    PropsWithChildren,
} from 'react';
// UI Components
import NavMenuList from '@/components/ui/NavMenuList/NavMenuList';

async function BlogCategoryLayout(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <div 
            className={`
                flex
                h-full
                overflow-hidden
            `.trim()}>
            <NavMenuList 
                className={`
                    h-full
                    shrink-0
                    overflow-auto
                `.trim()}
                navTitle="블로그 카테고리" />
            <div 
                className={`
                    flex-1
                    w-full h-full
                    overflow-auto
                `.trim()}>
                {children}
            </div>
        </div>
    );
}

export default BlogCategoryLayout;
