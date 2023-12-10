'use client';

// react
import {
    useCallback,
    memo,
    PropsWithChildren,
} from 'react';
// nextjs
import { 
    useRouter,
} from 'next/navigation';
// markdown
import 'github-markdown-css/github-markdown-light.css';
// styled-components
import styled from 'styled-components';

// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기
// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기
// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기

const StyledBlogSlugPageRoot = styled.div`
    flex: 1;

    padding: 20px;
    width: 100%;
    height: 100%;

    overflow: auto;

    > .markdown-body {
        //

        /* 코드 블록 */
        pre {
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }

            code {
                display: grid;

                font-size: 16px;

                span[data-line] {
                    padding: 2px 16px;
                    display: inline-block;
                }

                &[data-line-numbers] {
                    &[data-line-numbers-max-digits="2"] {
                        [data-line]::before {
                            width: 2rem;
                        }
                    }

                    &[data-line-numbers-max-digits="3"] {
                        [data-line]::before {
                            width: 3rem;
                        }
                    }

                    > [data-line]::before {
                        counter-increment: line;
                        content: counter(line);

                        display: inline-block;
                        width: 1rem;
                        margin-right: 1.5rem;
                        text-align: right;
                        color: gray;
                    }

                    span[data-line] {
                        padding: 2px 0;
                        display: inline-block;
                    }
                }
            }
        }
    }

    > .actionsWrapper {
        margin-top: 40px;

        /* width: 100%;
        height: 300px; */

        display: flex;
        justify-content: flex-end;
        align-items: center;

        /* FIXME: ChocobeButton 컴포넌트 만들면, 아래 스타일 지우기 */
        > .prevPageButton {
            padding: 4px 8px;

            color: ${({ theme }) => theme.designSystemColors.BlogSlugPage.prevPageButton.color};
            font-size: 14px;
            line-height: 22px;
            font-weight: 700;

            border-radius: 4px;
            background-color: ${({ theme }) => theme.designSystemColors.BlogSlugPage.prevPageButton.backgroundColor};
        }
    }
`;

function BlogSlugPage(props: PropsWithChildren) {
    const {
        children,
    } = props;

    //
    // hook
    //
    const router = useRouter();

    //
    // callback
    //
    const onClickGoToCategoryPage = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <StyledBlogSlugPageRoot 
            className="markdown-body">
            <div className="markdown-body">
                {children}
            </div>

            <div className="actionsWrapper">
                <button
                    className="prevPageButton"
                    onClick={onClickGoToCategoryPage}>
                    이전 페이지
                </button>
            </div>
        </StyledBlogSlugPageRoot>
    );
}

export default memo(BlogSlugPage);
