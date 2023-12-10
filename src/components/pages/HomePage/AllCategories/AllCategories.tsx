'use client';

// react
import {
    useCallback,
    memo,
} from 'react';
// nextjs
import { 
    useRouter,
} from 'next/navigation';
// UI Components
import BlogCategoryCard from '@/components/ui/BlogCategoryCard/BlogCategoryCard';
// styled-components
import styled from 'styled-components';
// type
import { 
    allBlogCategoryInfoList,
} from './allCategories.type';

const StyledAllCategoriesRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    > .categoryItem {
        flex: 1;
        min-width: 300px;
        display: inline-block;
    }
`;

type TAllCategoriesProps = {
    className?: string;
};

function AllCategories(props: TAllCategoriesProps) {
    const {
        className,
    } = props;

    //
    // hook
    //
    const router = useRouter();

    //
    // callback
    //
    const onClickCategoryCard = useCallback((category: string) => {
        router.push(`/blog/${category}`);
    }, [router]);

    return (
        <StyledAllCategoriesRoot className={className}>
            {allBlogCategoryInfoList.map(info => {
                const {
                    category,
                    displayName,
                    description,
                    IconComponent,
                } = info;

                return (
                    <BlogCategoryCard
                        className="categoryItem"
                        key={category}
                        category={category}
                        displayName={displayName}
                        description={description}
                        onClick={onClickCategoryCard}
                        IconComponent={IconComponent} />
                );
            })}
        </StyledAllCategoriesRoot>
    );
}

export default memo(AllCategories);
