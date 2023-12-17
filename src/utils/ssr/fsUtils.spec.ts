import { 
    MARKDOWN_ROOT_DIR,
    readMarkdownDir,
    readMarkdownFile,
} from './fsUtils';
// mock-fs
import mock from 'mock-fs';

function initMock() {
    beforeEach(() => {
        mock({
            [`${MARKDOWN_ROOT_DIR}/jest`]: {
                'hello-1.mdx': '(jest) hello markdown file mock content',
                'world-1.mdx': '(jest) world markdown file mock content',
            },
            [`${MARKDOWN_ROOT_DIR}/nextjs`]: {
                'hello-2.mdx': '(nextjs) hello markdown file mock content',
                'world-2.mdx': '(nextjs) world markdown file mock content',
            },
        });
    });

    afterEach(mock.restore);
}

describe('fsUtils 테스트', () => {
    // beforeEach(() => {
    //     mock({
    //         [`${MARKDOWN_ROOT_DIR}/jest`]: {
    //             'hello-1.mdx': '(jest) hello markdown file mock content',
    //             'world-1.mdx': '(jest) world markdown file mock content',
    //         },
    //         [`${MARKDOWN_ROOT_DIR}/nextjs`]: {
    //             'hello-2.mdx': '(nextjs) hello markdown file mock content',
    //             'world-2.mdx': '(nextjs) world markdown file mock content',
    //         },
    //     });
    // });

    // afterEach(mock.restore);

    describe('readMarkdownDir() 테스트', () => {
        initMock();

        it('type === "dir" 는 대상경로의 모든 하위 폴더명을 반환한다.', async () => {
            const dirNameList = await readMarkdownDir('dir');

            expect(dirNameList).toEqual([
                'jest',
                'nextjs',
            ]);
        });

        it('type === "file" 은 대상경로의 모든 파일명을 반환한다. (1)', async () => {
            const mustBlankFileNameList = await readMarkdownDir('file');
            const fileNameList = await readMarkdownDir('file', `jest`);

            expect(mustBlankFileNameList).toEqual([]);
            expect(fileNameList).toEqual([
                'hello-1.mdx',
                'world-1.mdx',
            ]);
        });

        it('type === "file" 은 대상경로의 모든 파일명을 반환한다. (2)', async () => {
            const fileNameList = await readMarkdownDir('file', 'nextjs');

            expect(fileNameList).toEqual([
                'hello-2.mdx',
                'world-2.mdx',
            ]);
        });

        // TODO: toThrow() 유닛 테스트 작성하기
        // TODO: TODO: Jest Github issue 에서는 아직 고쳐지지 않은 것으로 보인다.
        // it('미지원 type 사용 시, throw Error', async () => {
        //     const run = async () => {
        //         await readMarkdownDir('dir1' as any);
        //     };
            
        //     // expect(run).toThrow('readMarkdownDir() 호출 시, type 은 "file" 또는 "dir" 만 가능합니다.');
        //     // expect(run).toThrowError();
        //     try {
        //         // waitFor(() => readMarkdownDir('dir1' as any));
        //         // await readMarkdownDir('dir1' as any);
        //         expect(run).not.toThrow();
        //     } catch(error) {
        //         //
        //     }
        // });
    });

    describe('readMarkdownFile() 테스트', () => {
        initMock();

        it('파일 내용을 읽을 수 있다. (1)', async () => {
            const fileNameList = await readMarkdownDir('file', 'jest');
            const filePathList = fileNameList.map(fileName => `jest/${fileName}`);

            const promiseList = filePathList.map(filePath => readMarkdownFile(filePath));

            const fileContentList = await Promise.all(promiseList);

            expect(fileContentList).toEqual([
                '(jest) hello markdown file mock content',
                '(jest) world markdown file mock content',
            ]);
        });

        it('파일 내용을 읽을 수 있다. (2)', async () => {
            const fileNameList = await readMarkdownDir('file', 'nextjs');
            const filePathList = fileNameList.map(fileName => `/nextjs/${fileName}`);

            const promiseList = filePathList.map(filePath => readMarkdownFile(filePath));

            const fileContentList = await Promise.all(promiseList);

            expect(fileContentList).toEqual([
                '(nextjs) hello markdown file mock content',
                '(nextjs) world markdown file mock content',
            ]);
        });
    });
});
