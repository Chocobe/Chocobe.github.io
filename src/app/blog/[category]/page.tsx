// markdown
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';
// UI Components
import BlogCategoryPage from '@/components/pages/BlogCategoryPage/BlogCategoryPage';
// type
import {
    TBlogMarkdownRenderingData,
} from '@/utils/ssr/blogMarkdownManager.type';

type TBlogCategoryPageStaticParam = {
    category: string;
};

type TBlogCategoryPageProps = {
    params: TBlogCategoryPageStaticParam;
};

export const generateStaticParams = async () => {
    const categoryNameList = await BlogMarkdownManager.readCategoryNameList();

    return categoryNameList.map(category => ({
        category,
    }));
};

async function BlogCategoryPageSSR(props: TBlogCategoryPageProps) {
    const {
        params: {
            category,
        },
    } = props;

    const markdownList = await BlogMarkdownManager.instance;
    const promiseList = markdownList
        .filter(markdown => {
            return markdown.category === category;
        })
        .map(async ({ slug }) => {
            const markdownFile = await BlogMarkdownManager.readMarkdownFile({
                category,
                slug,
            });

            if (!markdownFile) {
                return null as unknown as TBlogMarkdownRenderingData;
            }

            const frontmatter = BlogMarkdownManager.readFrontmatterFromFile(markdownFile);

            return {
                category,
                slug,
                frontmatter,
            } as TBlogMarkdownRenderingData;
        })
        .filter(frontmatter => !!frontmatter);

    const blogMarkdownFrontmatterList = await Promise
        .all(promiseList);

    // TODO: BlogMarkdownManager 에서 Blog 데이터 가져오기 (node:fs)
    // TODO: BlogMarkdownManager 에서 Blog 데이터 가져오기 (node:fs)
    // TODO: BlogMarkdownManager 에서 Blog 데이터 가져오기 (node:fs)

    console.log('markdownList: ', markdownList);
    console.log('blogMarkdownFrontmatterList: ', blogMarkdownFrontmatterList);

    return (
        <BlogCategoryPage 
            featuredMarkdownRendeeringDataList={blogMarkdownFrontmatterList}
            commonMarkdownRenderingDataList={blogMarkdownFrontmatterList} />
    );
}

export default BlogCategoryPageSSR;
