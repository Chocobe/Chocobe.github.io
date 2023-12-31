// nextjs
import { 
    Metadata,
} from 'next';
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

export const generateMetadata = async (
    props: {
        params: TBlogMarkdownParam;
    }
): Promise<Metadata> => {
    const {
        params,
    } = props;

    const markdownData = await BlogMarkdownManager.readMarkdownFileData(params);

    if (!markdownData) {
        return {};
    }

    const {
        frontmatter: {
            title,
            description,
        },
    } = markdownData;

    return {
        title: `${title} | Chocobe Frontend`,
        description,
    };
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
