// markdown
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';
// UI Components
import BlogCategoryPage from '@/components/pages/BlogCategoryPage/BlogCategoryPage';

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

    const markdownFileDataList = await BlogMarkdownManager
        .instance
        .readMarkdownFileDataList(category);

    const featuredList = markdownFileDataList
        .filter(({ frontmatter }) => frontmatter.featured);

    const commonList = markdownFileDataList
        .filter(({ frontmatter }) => !frontmatter.featured);

    return (
        <BlogCategoryPage 
            featuredMarkdownFileDataList={featuredList}
            commonMarkdownFileDataList={commonList} />
    );
}

export default BlogCategoryPageSSR;
