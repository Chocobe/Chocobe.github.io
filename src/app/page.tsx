// UI Components
import HomePage from '@/components/pages/HomePage/HomePage';
import BlogMarkdownManager from '@/utils/ssr/BlogMarkdownManager';

async function HomePageSSR() {
    const categoryNameList = await BlogMarkdownManager.readCategoryNameList();

    const promiseList = categoryNameList.map(async categoryName => {
        return await BlogMarkdownManager
            .instance
            .readMarkdownFileDataList(categoryName);
    });

    const markdownFileDataList = await Promise
        .all(promiseList)
        .then(list => list.reduce((total, subList) => [
            ...total,
            ...subList,
        ], []));

    const featuredList = markdownFileDataList
        .filter(({ frontmatter }) => frontmatter.featured);

    const commonList = markdownFileDataList
        .filter(({ frontmatter }) => !frontmatter.featured);

    return (
        <HomePage
            featuredMarkdownFileDataList={featuredList}
            commonMarkdownFileDataList={commonList} />
    );
}

export default HomePageSSR;
