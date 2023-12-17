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

    > .contentsWrapper {
        //
    }

    > .actionsWrapper {
        margin-top: 40px;

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
        <StyledBlogSlugPageRoot>
            <div className="contentsWrapper">
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
