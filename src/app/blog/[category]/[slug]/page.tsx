// markdown
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';
import { 
    MDXRemote,
} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from '@/styles/codeBlockThemes/moonlight-2.json';
// UI Component
// import StyledBlogSlugPageRoot from './page.styled';
import BlogSlugPage from '@/components/pages/BlogSlugPage/BlogSlugPage';
import MarkdownAnchor from '@/markdownComponents/MarkdownAnchor/MarkdownAnchor';
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
            <MDXRemote
                options={{
                    parseFrontmatter: true,
                    mdxOptions: {
                        remarkPlugins: [
                            remarkGfm,
                        ],
                        rehypePlugins: [
                            [rehypePrettyCode as any, {
                                grid: false,
                                theme: moonlightTheme,
                                defaultLang: {
                                    inline: 'javascript',
                                    block: 'typescript',
                                },
                            }]
                        ]
                    },
                }}
                components={{
                    a: MarkdownAnchor,
                }}
                source={markdown} />
        </BlogSlugPage>
    );
}

export default BlogSlugPageSSR;
