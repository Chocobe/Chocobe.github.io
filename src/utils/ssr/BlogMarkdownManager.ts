// utils
import { 
    readMarkdownDir, 
    readMarkdownFile,
} from './fsUtils';
import matter from 'gray-matter';
// type
import { 
    TBlogMarkdownParam,
    TBlogMarkdownFrontmatter,
    TBlogMarkdownFileData,
} from './blogMarkdownManager.type';

/**
 * * `singleton` class
 * * `src/markdown/{category}/{포스팅_파일.mdx}` 형식으로 포스팅 데이터를 관리합니다.
 * * BlogMarkdownManager.instance 로 전체 `.mdx` 를 사용할 수 있습니다.
 *
 * * static Method
 *      * `async readCategoryNameList()`: `src/markdown` 하위의 모든 `폴더명` 을 반환합니다.
 *      * `async readMarkdownFile()`: 특정 `.mdx` 파일을 반환합니다.
 *      * `readFrontmatterFromFile`: 특정 `.mdx` 파일의 `frontmatter` 데이터를 반환합니다.
 * 
 * * static Getter
 *      * `instance`: 전체 `.mdx` 반환합니다.
 */
class BlogMarkdownManager {
    private static _instance: BlogMarkdownManager;

    private _blogMarkdownParamList: Promise<TBlogMarkdownParam[]>;

    private constructor() {
        this._blogMarkdownParamList = this.generateInstance();
    }

    /**
     * `singleton` 생성 메서드 입니다.
     */
    private async generateInstance() {
        const categoryList = await BlogMarkdownManager.readCategoryNameList();

        const categoryPromiseList = categoryList
            .map(category => {
                return readMarkdownDir('file', category);
            });

        const fileNameListInCategories = await Promise.all(categoryPromiseList);

        return fileNameListInCategories.reduce((
            result,
            fileNameList,
            indexOfCategory
        ) => {
            const category = categoryList[indexOfCategory];

            const newResult = fileNameList.reduce((newResult, fileName) => {
                const slug = fileName.match(/(.+)\.mdx/)?.[1];

                if (!slug) {
                    return newResult;
                }

                return [
                    ...newResult,
                    {
                        category,
                        slug,
                    },
                ];
            }, [] as TBlogMarkdownParam[]);

            return [
                ...result,
                ...newResult,
            ];
        }, [] as TBlogMarkdownParam[]);
    }

    /**
     * `src/markdown` 하위의 모든 `폴더명` 을 반환 합니다. 
     * 
     * (전체 카테고리 이름)
     */
    static async readCategoryNameList() {
        return await readMarkdownDir('dir');
    }

    /**
     * 특정 `.mdx` 파일을 반환합니다.
     */
    static async readMarkdownFile(params?: { 
        category: string;
        slug: string;
    }) {
        if (!params) {
            return null;
        }

        const {
            category,
            slug,
        } = params;

        const filePathInMarkdown = `${category}/${slug}.mdx`;
        const markdownFile = await readMarkdownFile(filePathInMarkdown);

        return markdownFile;
    }

    /**
     * 특정 `.mdx` 파일의 `frontmatter` 데이터를 반환합니다.
     * 
     * @example 
     * const markdown = await BlogMarkdownManager
     *     .readMarkdownFile({ 
     *         slug: '...', 
     *         category: '...' 
     *      });
     * const frontmatter = BlogMarkdownManager
     *     .readFrontmatterFromFile(markdown);
     */
    static readMarkdownFrontmatter(markdown: string) {
        const frontmatter = matter(markdown).data as TBlogMarkdownFrontmatter;

        const {
            createdAt,
            modifiedHistories,
        } = frontmatter;

        return {
            ...frontmatter,
            createdAt: new Date(createdAt),
            modifiedHistories: modifiedHistories?.map(history => ({
                ...history,
                modifiedAt: new Date(history.modifiedAt),
            })),
        } as TBlogMarkdownFrontmatter;
    }

    /**
     * `.mdx` 파일 정보를 가져옵니다.
     */
    static async readMarkdownFileData(params: {
        category: string;
        slug: string;
    }) {
        const {
            category,
            slug,
        } = params;

        const markdownFile = await BlogMarkdownManager.readMarkdownFile(params);

        if (!markdownFile) {
            return null;
        }

        const frontmatter = BlogMarkdownManager.readMarkdownFrontmatter(markdownFile);
        const href = `/blog/${category}/${slug}`;

        return {
            category,
            slug,
            href,

            frontmatter,
            markdownFile,
        } as TBlogMarkdownFileData;
    }

    /**
     * 특정 `category` 하위의 모든 `.mdx` 파일 정보를 가져옵니다.
     */
    async readMarkdownFileDataList(category: string) {
        const targetParamList = await this
            ._blogMarkdownParamList
            .then(blogMarkdownParamList => {
                return blogMarkdownParamList
                    .filter(param => param.category === category);
            });

        const promiseList = targetParamList.map(async param => {
            const promise = await BlogMarkdownManager.readMarkdownFileData(param);
            return promise as TBlogMarkdownFileData;
        });

        const markdownFileDataList = await Promise.all(promiseList);

        return markdownFileDataList
            .filter(markdownFileData => !!markdownFileData);
    }

    private static initInstance() {
        if (!BlogMarkdownManager._instance) {
            BlogMarkdownManager._instance = new BlogMarkdownManager();
        }
    }

    static get instance() {
        BlogMarkdownManager.initInstance();

        return BlogMarkdownManager._instance;
    }

    get blogMarkdownParamList() {
        return BlogMarkdownManager
            ._instance
            ._blogMarkdownParamList;
    }
}

export default BlogMarkdownManager;
