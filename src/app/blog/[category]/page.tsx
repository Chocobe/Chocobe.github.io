// type
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';

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

function BlogCategoryPage(props: TBlogCategoryPageProps) {
    const {
        params: {
            category,
        },
    } = props;

    return (
        <div>
            <h1>Blog Category Page</h1>

            <p>category: {category}</p>

            <div>
                <div style={{
                    width: '200px',
                    height: '500px',
                    backgroundColor: '#ff1493',
                }}>
                    Box 1
                </div>
                <div style={{
                    width: '300px',
                    height: '800px',
                    backgroundColor: '#03a9f4',
                }}>
                    Box 2
                </div>
                <div style={{
                    width: '400px',
                    height: '1000px',
                    backgroundColor: '#006400',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    Box 3
                </div>
            </div>
        </div>
    );
}

export default BlogCategoryPage;
