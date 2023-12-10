export type TBlogMarkdownParam = {
    category: string;
    slug: string;
};

export const blogMarkdownTagMapper = {
    JAVASCRIPT: 'javascript',
    NEXTJS: 'nextjs',
    TYPESCRIPT: 'typescript',
} as const;
export type TBlogMarkdownTag = typeof blogMarkdownTagMapper[keyof typeof blogMarkdownTagMapper];

export type TBlogMarkdownFrontmatter = {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;

    featured: boolean;
    tags?: TBlogMarkdownTag[];

    createdAt: Date;
    modifiedHistories?: Array<{
        commitMessage: string;
        modifiedAt: Date;
    }>;
};

export type TBlogMarkdownRenderingData = {
    category: string;
    slug: string;
    frontmatter: TBlogMarkdownFrontmatter;
};
