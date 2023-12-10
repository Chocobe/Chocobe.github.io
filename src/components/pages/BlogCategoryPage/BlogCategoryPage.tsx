'use client';

// react
import {
    useMemo,
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
    TBlogMarkdownRenderingData,
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
    featuredMarkdownRendeeringDataList: TBlogMarkdownRenderingData[];
    commonMarkdownRenderingDataList: TBlogMarkdownRenderingData[];
};

function BlogCategoryPage(props: TBlogCategoryPageProps) {
    const {
        featuredMarkdownRendeeringDataList,
        commonMarkdownRenderingDataList,
    } = props;

    //
    // cache
    //
    const mockCommonMarkdownRenderingData = useMemo(() => {
        const rr = commonMarkdownRenderingDataList.map<TBlogPostCardProps>(data => {
            const {
                category,
                slug,
                frontmatter: {
                    title,
                    description,
                    thumbnail,
                    createdAt,
                },
            } = data;

            return {
                category,
                title,
                description,
                thumbnail,
                date: createdAt.toISOString(),
                href: `/blog/${category}/${slug}`,
            };
        });

        return [
            ...rr.map(ff => ({
                ...ff,
                title: `${ff.title}-1`,
            })),
            ...rr.map(ff => ({
                ...ff,
                title: `${ff.title}-2`,
            })),
            ...rr.map(ff => ({
                ...ff,
                title: `${ff.title}-3`,
            })),
            ...rr.map(ff => ({
                ...ff,
                title: `${ff.title}-4`,
            })),
            ...rr.map(ff => ({
                ...ff,
                title: `${ff.title}-5`,
            })),
        ];
    }, [commonMarkdownRenderingDataList]);

    return (
        <StyledBlogCategoryPageRoot>
            {featuredMarkdownRendeeringDataList?.[0] && (
                <section className="featuredSection">
                    <BlogPostCard
                        variant={blogPostCardVariantMapper.FEATURED}
                        thumbnail={featuredMarkdownRendeeringDataList[0].frontmatter.thumbnail}
                        category={featuredMarkdownRendeeringDataList[0].category}
                        title={featuredMarkdownRendeeringDataList[0].frontmatter.title}
                        date={featuredMarkdownRendeeringDataList[0].frontmatter.createdAt.toISOString()}
                        description={featuredMarkdownRendeeringDataList[0].frontmatter.description} 
                        href={`/blog/${featuredMarkdownRendeeringDataList[0].category}/${featuredMarkdownRendeeringDataList[0].slug}`} />
                </section>
            )}

            <section className="commonSection">
                <BlogPostCardList 
                    blogPostList={mockCommonMarkdownRenderingData} />
            </section>
        </StyledBlogCategoryPageRoot>
    );
}

export default memo(BlogCategoryPage);
