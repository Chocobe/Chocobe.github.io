'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import AllCategories from './AllCategories/AllCategories';
import AllPosts from './AllPosts/AllPosts';
import BlogPostCard from '@/components/ui/BlogPostCard/BlogPostCard';
// icons
import {
    TbList,
} from '@icons';
// styled-components
import styled from 'styled-components';
// type
import { 
    blogPostCardVariantMapper,
} from '@/components/ui/BlogPostCard/blogPostCard.type';

const StyledHomePageRoot = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    > .featuredSection {
        padding: 40px 0;

        background-color: ${({ theme }) => theme.designSystemColors.type.d};

        > .sectionContent {
            margin-left: auto;
            margin-right: auto;

            max-width: 980px;
        }
    }

    > .commonSection {
        margin-left: auto;
        margin-right: auto;
        padding: 0 40px;

        width: 100%;
        max-width: calc(980px + (40px * 2));

        > .sectionHeader {
            display: flex;
            align-items: flex-start;
            gap: 4px;

            border-bottom: 4px solid ${({ theme }) => theme.designSystemColors.type.e};

            > .sectionIcon {
                //
            }

            > .sectionTitle {
                color: ${({ theme }) => theme.designSystemColors.HomePage.labelColor};
                font-size: 18px;
                line-height: 24px;
                font-weight: 700;
            }
        }

        > .sectionContent {
            margin-top: 8px;
        }
    }
`;

function HomePage() {
    return (
        <StyledHomePageRoot>
            <section className="featuredSection">
                <BlogPostCard 
                    className="sectionContent"
                    variant={blogPostCardVariantMapper.FEATURED}
                    thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                    title="BlogPostCard - featured 구현 중"
                    date={'2023-12-06'}
                    description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />
            </section>

            <section className="commonSection">
                <div className="sectionHeader">
                    <TbList 
                        className="sectionIcon"
                        size="20px" 
                        strokeWidth="2px"/>

                    <div className="sectionTitle">
                        All Categories
                    </div>
                </div>

                <AllCategories className="sectionContent" />
            </section>

            <section className="commonSection">
                <div className="sectionHeader">
                    <TbList 
                        className="sectionIcon"
                        size="20px" 
                        strokeWidth="2px"/>

                    <div className="sectionTitle">
                        All Blog Posts
                    </div>
                </div>

                <AllPosts className="sectionContent" />
            </section>
        </StyledHomePageRoot>
    );
}

export default memo(HomePage);
