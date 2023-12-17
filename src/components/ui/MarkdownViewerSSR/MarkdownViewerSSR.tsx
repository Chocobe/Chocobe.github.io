// markdown
import { 
    MDXRemote,
} from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from '@/styles/codeBlockThemes/moonlight-2.json';
// UI Components
import MarkdownAnchor from '@/components/markdownComponents/MarkdownAnchor';
import MarkdownStrong from '@/components/markdownComponents/MarkdownStrong';
import MarkdownUL from '@/components/markdownComponents/MarkdownUL';
// styled-components
import StyledMarkdownViewerRoot from './StyledMarkdownViewerRoot';

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
        <StyledMarkdownViewerRoot>
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
                    ul: MarkdownUL,
                }}
                source={markdown} />
        </StyledMarkdownViewerRoot>
    );
}

export default MarkdownViewerSSR;
