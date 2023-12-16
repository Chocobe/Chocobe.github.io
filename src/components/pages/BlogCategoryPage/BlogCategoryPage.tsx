'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import BlogPostCard, { 
    TBlogPostCardProps,
} from '@/components/ui/BlogPostCard/BlogPostCard';
import BlogPostCardList from '@/components/ui/BlogPostCardList/BlogPostCardList';
// type
import { 
    blogPostCardVariantMapper,
} from '@/components/ui/BlogPostCard/blogPostCard.type';
import { 
    TBlogMarkdownFileData,
} from '@/utils/ssr/blogMarkdownManager.type';
// styled-components
import styled from 'styled-components';

const StyledBlogCategoryPageRoot = styled.div`
    //

    > .featuredSection {
        padding: 40px 20px;

        background-color: ${({ theme }) => theme.designSystemColors.type.d};

        > .sectionContent {
            //
        }
    }

    > .commonSection {
        padding: 20px;
    }
`;

type TBlogCategoryPageProps = {
    featuredMarkdownFileDataList: TBlogMarkdownFileData[];
    commonMarkdownFileDataList: TBlogMarkdownFileData[];
};

function BlogCategoryPage(props: TBlogCategoryPageProps) {
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
        <StyledBlogCategoryPageRoot>
            {firstFeaturedBlogPostCardProps && (
                <section className="featuredSection">
                    <BlogPostCard
                        variant={blogPostCardVariantMapper.FEATURED}
                        category={firstFeaturedBlogPostCardProps.category}
                        title={firstFeaturedBlogPostCardProps.title}
                        description={firstFeaturedBlogPostCardProps.description} 
                        thumbnail={firstFeaturedBlogPostCardProps.thumbnail}
                        href={firstFeaturedBlogPostCardProps.href}
                        date={firstFeaturedBlogPostCardProps.date} />
                </section>
            )}

            <section className="commonSection">
                <BlogPostCardList 
                    blogPostList={commonBlogPostCardPropsList} />
            </section>
        </StyledBlogCategoryPageRoot>
    );
}

export default memo(BlogCategoryPage);
