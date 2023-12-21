'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import AllCategories from './AllCategories/AllCategories';
import AllPosts from './AllPosts/AllPosts';
import BlogPostCard, { 
    TBlogPostCardProps,
} from '@/components/ui/BlogPostCard/BlogPostCard';
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
import { 
    TBlogMarkdownFileData,
} from '@/utils/ssr/blogMarkdownManager.type';

const StyledHomePageRoot = styled.div`
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    > .featuredSection {
        padding: 40px 0;

        background-color: ${({ theme }) => theme.designSystemColors.type.d};

        > .sectionContent {
            margin-left: auto;
            margin-right: auto;

            max-width: ${({ theme }) => theme.designSystemColors.common.maxWidth};
        }
    }

    > .commonSection {
        margin-left: auto;
        margin-right: auto;
        padding: 0 ${({ theme }) => theme.designSystemColors.common.paddingX};

        width: 100%;
        max-width: ${({ theme }) => theme.designSystemColors.common.maxWidthWithPaddingX};

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

type THomePageProps = {
    featuredMarkdownFileDataList: TBlogMarkdownFileData[];
    commonMarkdownFileDataList: TBlogMarkdownFileData[];
};

function HomePage(props: THomePageProps) {
    const {
        featuredMarkdownFileDataList,
        commonMarkdownFileDataList,
    } = props;
    
    const firstFeaturedBlogPostCardProps = [featuredMarkdownFileDataList[0]]
        .reduce((_, markdownFileData) => {
            if (!markdownFileData) {
                return null;
            }

            const {
                category,
                href,
                frontmatter: {
                    title,
                    description,
                    thumbnail,
                    createdAt,
                },
            } = markdownFileData;

            return {
                category,
                title,
                description,
                thumbnail,
                href,
                date: createdAt.toISOString(),
            } as TBlogPostCardProps;
        }, {} as TBlogPostCardProps | null);

    const commonBlogPostCardPropsList: TBlogPostCardProps[] = commonMarkdownFileDataList
        .map(markdownFileData => {
            const {
                category,
                href,
                frontmatter: {
                    title,
                    description,
                    thumbnail,
                    createdAt,
                },
            } = markdownFileData;

            return {
                category,
                title,
                description,
                thumbnail,
                href,
                date: createdAt.toISOString(),
            };
        });

    return (
        <StyledHomePageRoot>
            {firstFeaturedBlogPostCardProps && (
                <section className="featuredSection">
                    <BlogPostCard 
                        className="sectionContent"
                        variant={blogPostCardVariantMapper.FEATURED}
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        category={firstFeaturedBlogPostCardProps.category}
                        title={firstFeaturedBlogPostCardProps.title}
                        date={firstFeaturedBlogPostCardProps.date}
                        description={firstFeaturedBlogPostCardProps.description}
                        href={firstFeaturedBlogPostCardProps.href} />
                </section>
            )}

            <section className="commonSection">
                <div className="sectionHeader">
                    <TbList 
                        className="sectionIcon"
                        size="20px" 
                        strokeWidth="2px" />

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
                        strokeWidth="2px" />

                    <div className="sectionTitle">
                        All Blog Posts
                    </div>
                </div>

                <AllPosts 
                    className="sectionContent"
                    blogPostList={commonBlogPostCardPropsList} />
            </section>
        </StyledHomePageRoot>
    );
}

export default memo(HomePage);
