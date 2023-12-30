import BlogMarkdownManager from './BlogMarkdownManager';
// mock-fs
import mock from 'mock-fs';
import { MARKDOWN_ROOT_DIR } from './fsUtils';

const createMarkdownContent = (
    frontmatter: {
        id: string;
        title: string;
        isFeatured: boolean;
        createdAt: string;
    },
    content: string
) => {
    const frontmatterStr = Object
        .entries(frontmatter)
        .filter(([key]) => key !== 'modifiedHistories')
        .reduce((result, [key, value]) => {
            return result.concat(`\n${key}: ${value}`);
        }, '');

    return `---${frontmatterStr}\n---\n${content}`;
};

const initMock = () => {
    beforeEach(() => {
        mock({
            [`${MARKDOWN_ROOT_DIR}/category-1`]: {
                '1-file.mdx': createMarkdownContent({
                    id: 'id-1',
                    title: 'title 1',
                    isFeatured: false,
                    createdAt: '2023-12-30 12:13:00',
                }, 'content 1'),
                '2-file.mdx': createMarkdownContent({
                    id: 'id-2',
                    title: 'title 2',
                    isFeatured: false,
                    createdAt: '2023-12-30 12:13:00',
                }, 'content 2'),
            },
            [`${MARKDOWN_ROOT_DIR}/category-2`]: {
                '3-file.mdx': createMarkdownContent({
                    id: 'id-3',
                    title: 'title 3',
                    isFeatured: false,
                    createdAt: '2023-12-30 12:13:00',
                }, 'content 3'),
                '4-file.mdx': createMarkdownContent({
                    id: 'id-4',
                    title: 'title 4',
                    isFeatured: false,
                    createdAt: '2023-12-30 12:13:00',
                }, 'content 4'),
                'not-mdx-file.pdf': 'not mdx file content',
            },
        });
    });

    afterEach(mock.restore);
};

describe('BlogMarkdownManager 테스트', () => {
    initMock();

    it('BlogMarkdownManager 는 Singleton class 이다.', async () => {
        const instance = BlogMarkdownManager.instance;

        expect(instance instanceof BlogMarkdownManager).toBeTruthy();
    });

    it('readCategoryNameList() 로 전체 카테고리 목록을 조회할 수 있다.', async () => {
        const categoryNameList = await BlogMarkdownManager.readCategoryNameList();

        expect(categoryNameList).toEqual([
            'category-1',
            'category-2',
        ]);
    });

    it('readMarkdownFile() 로 특정 mdx 파일을 가져올 수 있다.', async () => {
        const markdownFile = await BlogMarkdownManager.readMarkdownFile({
            category: 'category-1',
            slug: '1-file',
        });

        expect(markdownFile).toEqual('---\nid: id-1\ntitle: title 1\nisFeatured: false\ncreatedAt: 2023-12-30 12:13:00\n---\ncontent 1');
    });

    it('readMarkdownFile() 에 params 를 넘겨주지 않으면, null 반환', async () => {
        const markdownFile = await BlogMarkdownManager.readMarkdownFile();

        expect(markdownFile).toBeNull();
    });

    it('readMarkdownFrontmatter() 로 frontmatter 정보를 가져올 수 있다.', async () => {
        const markdownFile = await BlogMarkdownManager.readMarkdownFile({
            category: 'category-1',
            slug: '1-file',
        });

        const frontmatter = BlogMarkdownManager.readMarkdownFrontmatter(markdownFile as string);
        const parsedFrontmatter = {
            ...frontmatter,
            createdAt: frontmatter.createdAt.toISOString(),
        };

        expect(parsedFrontmatter).toEqual({
            id: 'id-1',
            title: 'title 1',
            createdAt: '2023-12-30T12:13:00.000Z',
            isFeatured: false,
        });
    });

    it('readMarkdownFileData() 로 Markdown File 전체 정보를 알 수 있다.', async () => {
        const markdownFile = await BlogMarkdownManager.readMarkdownFileData({
            category: 'category-1',
            slug: '1-file',
        });

        expect(markdownFile).toEqual({
            category: 'category-1',
            slug: '1-file',
            href: '/blog/category-1/1-file',
            frontmatter: {
                id: 'id-1',
                title: 'title 1',
                createdAt: new Date('2023-12-30T12:13:00.000Z'),
                isFeatured: false,
            },
            markdownFile: '---\nid: id-1\ntitle: title 1\nisFeatured: false\ncreatedAt: 2023-12-30 12:13:00\n---\ncontent 1',
        });
    });

    it('readMarkdownFileDataList() 로 카테고리 하위에 속한 Markdown 파일 정보를 조회할 수 있다.', async () => {
        const markdownFileList = await BlogMarkdownManager.instance.readMarkdownFileDataList('category-1');

        expect(markdownFileList).toHaveLength(2);
        expect(markdownFileList).toEqual([
            {
                category: 'category-1',
                slug: '1-file',
                href: '/blog/category-1/1-file',
                frontmatter: {
                    id: 'id-1',
                    title: 'title 1',
                    createdAt: new Date('2023-12-30T12:13:00.000Z'),
                    isFeatured: false,
                },
                markdownFile: '---\nid: id-1\ntitle: title 1\nisFeatured: false\ncreatedAt: 2023-12-30 12:13:00\n---\ncontent 1',
            },
            {
                category: 'category-1',
                slug: '2-file',
                href: '/blog/category-1/2-file',
                frontmatter: {
                    id: 'id-2',
                    title: 'title 2',
                    createdAt: new Date('2023-12-30T12:13:00.000Z'),
                    isFeatured: false,
                },
                markdownFile: '---\nid: id-2\ntitle: title 2\nisFeatured: false\ncreatedAt: 2023-12-30 12:13:00\n---\ncontent 2',
            },
        ]);
    });

    it('blogMarkdownParamList 로 전체 Markdown params 를 가져올 수 있다.', async () => {
        const markdownParamList = await BlogMarkdownManager
            .instance
            .blogMarkdownParamList;

        expect(markdownParamList).toHaveLength(4);
    });
});
