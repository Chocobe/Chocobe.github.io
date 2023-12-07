// node
import fs from 'node:fs/promises';

const MARKDOWN_ROOT_DIR = 'src/markdown';

export const readMarkdownDir = async (
    type: 'file' | 'dir',
    category: string = ''
) => {
    const categoryPath = `${MARKDOWN_ROOT_DIR}/${category}`;
    const nameListInPath = await fs.readdir(categoryPath);

    const dirNameList = nameListInPath.filter(name => {
        const isFile = /^.+\..*$/.test(name);

        switch (type) {
            case 'file': 
                return isFile;
            case 'dir': 
                return !isFile;
            default: 
                throw new Error('readMarkdownDir() 호출 시, type 은 "file" 또는 "dir" 만 가능합니다.');
        }
    });

    return dirNameList;
};

const hasFirstSlashChar = (value: string) => {
    return /^\/.*/.test(value);
};

export const readMarkdownFile = (filePathInMarkdown: string) => {
    const filePath = hasFirstSlashChar(filePathInMarkdown)
        ? `${MARKDOWN_ROOT_DIR}${filePathInMarkdown}`
        : `${MARKDOWN_ROOT_DIR}/${filePathInMarkdown}`;

    return fs.readFile(filePath, 'utf-8');
};
