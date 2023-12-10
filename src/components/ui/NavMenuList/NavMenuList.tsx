'use client';

// react
import {
    memo, 
} from 'react';
// nextjs
import { 
    useParams,
} from 'next/navigation';
// UI Components
import NavMenuItem from './NavMenuItem';
// styled-components
import styled from 'styled-components';
// type
import { 
    TNavMenuItem,
} from './navMenuList.type';
import { 
    allBlogCategoryInfoList,
} from '@/components/pages/HomePage/AllCategories/allCategories.type';

const StyledNavMenuListRoot = styled.nav`
    //

    > .navTitle {
        padding: 20px 10px;

        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
    }

    > .navList {
        width: 200px;

        > .navItem {
            //
        }
    }
`;

type TNavMenuListProps = {
    className?: string;
    navTitle?: string;
};

function NavMenuList(props: TNavMenuListProps) {
    const {
        className,
        navTitle,
    } = props;

    const navItemList = allBlogCategoryInfoList.map<TNavMenuItem>((
        categoryInfo
    ) => {
        const {
            category,
            displayName,
            IconComponent,
        } = categoryInfo;

        return {
            category,
            displayName,
            href: `/blog/${category}`,
            IconComponent,
        };
    });

    //
    // hook
    //
    const params = useParams();
    const targetCategory = params.category;

    return (
        <StyledNavMenuListRoot className={className}>
            {navTitle && (
                <div className="navTitle">
                    {navTitle}
                </div>
            )}

            <ul className="navList">
                {navItemList.map(item => {
                    const {
                        category,
                        displayName,
                        href,
                        IconComponent,
                    } = item;

                    return (
                        <NavMenuItem
                            key={displayName}
                            displayName={displayName}
                            href={href}
                            isSelected={category === targetCategory}
                            IconComponent={IconComponent} />
                    );
                })}
            </ul>
        </StyledNavMenuListRoot>
    );
}

export default memo(NavMenuList);
