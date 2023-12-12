// UI Component
import BlogSlugPage from '@/components/pages/BlogSlugPage/BlogSlugPage';
import MarkdownViewerSSR from '@/components/ui/MarkdownViewerSSR/MarkdownViewerSSR';
// markdown
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';
// type
import { 
    TBlogMarkdownParam,
} from '@/utils/ssr/blogMarkdownManager.type';

export const generateStaticParams = () => {
    return BlogMarkdownManager
        .instance
        .blogMarkdownParamList;
};

type TBlogSlugPageProps = {
    params: TBlogMarkdownParam;
};

async function BlogSlugPageSSR(props: TBlogSlugPageProps) {
    const {
        params,
    } = props;

    const markdown = await BlogMarkdownManager.readMarkdownFile(params);

    if (!markdown) {
        return null;
    }

    return (
        <BlogSlugPage>
            <MarkdownViewerSSR
                markdown={markdown} />
        </BlogSlugPage>
    );
}

export default BlogSlugPageSSR;
