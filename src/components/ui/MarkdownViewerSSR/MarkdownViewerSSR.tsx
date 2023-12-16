// markdown
import { 
    MDXRemote,
} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from '@/styles/codeBlockThemes/moonlight-2.json';
// UI Components
import MarkdownAnchor from '@/markdownComponents/MarkdownAnchor/MarkdownAnchor';
import MarkdownStrong from '@/markdownComponents/MarkdownAnchor/MarkdownStrong';

type TMarkdownViewerSSRProps = {
    markdown: string | null;
};

function MarkdownViewerSSR(props: TMarkdownViewerSSRProps) {
    const {
        markdown,
    } = props;

    if (!markdown) {
        return null;
    }

    return (
        <MDXRemote
            options={{
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm,
                    ],
                    rehypePlugins: [
                        [rehypePrettyCode as any, {
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
                strong: MarkdownStrong,
            }}
            source={markdown} />
    );
}

export default MarkdownViewerSSR;
