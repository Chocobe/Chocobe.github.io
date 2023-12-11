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

    // FIXME: 실제 markdown file 추가 후, 아래 주석 해제
    // const featuredList = markdownFileDataList
    //     .filter(({ frontmatter }) => frontmatter.featured);

    // FIXME: 실제 markdown file 추가 후, 아래 주석 해제
    // const commonList = markdownFileDataList
    //     .filter(({ frontmatter }) => !frontmatter.featured);

    return (
        <BlogCategoryPage 
            featuredMarkdownRendeeringDataList={markdownFileDataList}
            commonMarkdownRenderingDataList={markdownFileDataList} />
        // FIXME: 실제 markdown file 추가 후, 아래 주석 해제
        // <BlogCategoryPage 
        //     featuredMarkdownRendeeringDataList={featuredList}
        //     commonMarkdownRenderingDataList={commonList} />
    );
}

export default BlogCategoryPageSSR;
