// UI Components
import BlogCategoryCard from './BlogCategoryCard';
// jest
import {
    render,
    screen,
} from '@testing-library/react';
import {
    userEvent,
} from '@testing-library/user-event';
// styled-components
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';
// icon
import {
    SiJest,
} from '@icons';

const renderBlogCategoryCard = (
    initialProps: Omit<Parameters<typeof BlogCategoryCard>[0], 'onClick'>
) => {
    const fn_onClick = jest.fn();

    const renderElement = (
        props: Parameters<typeof BlogCategoryCard>[0]
    ) => (
        <ThemeProvider theme={theme('light')}>
            <BlogCategoryCard {...props} />
        </ThemeProvider>
    );

    const { rerender } = render(renderElement({
        ...initialProps,
        onClick: fn_onClick,
    }));

    return {
        initialProps,
        fn_onClick,
        renderElement,
        rerender,
    };
};

describe('<BlogCategoryCard /> 테스트', () => {
    it('DOM 에 렌더링 된다.', () => {
        renderBlogCategoryCard({
            category: 'hello-category',
            displayName: '헬로 카테고리',
            description: '설명',
            IconComponent: SiJest,
        });

        const $blogCategoryCard = screen.getByRole('listitem');

        expect($blogCategoryCard).toBeInTheDocument();
    });

    it('displayName 가 렌더링 된다.', () => {
        const { 
            initialProps,
            fn_onClick,
            renderElement,
            rerender,
        } = renderBlogCategoryCard({
            category: '카테고리',
            displayName: '출력명',
            description: '설명',
            IconComponent: SiJest,
        });

        const $blogCategoryCard = screen.getByRole('listitem');

        expect($blogCategoryCard).toHaveTextContent('출력명');

        rerender(renderElement({
            ...initialProps,
            onClick: fn_onClick,
            displayName: '변경한 출력명',
        }));

        expect($blogCategoryCard).toHaveTextContent('변경한 출력명');
    });

    it('description 이 렌더링 된다.', () => {
        const {
            initialProps,
            fn_onClick,
            renderElement,
            rerender,
        } = renderBlogCategoryCard({
            category: '카테고리',
            displayName: '출력명',
            description: '설명',
            IconComponent: SiJest,
        });

        const $blogCategoryCard = screen.getByRole('listitem');

        expect($blogCategoryCard).toHaveTextContent('설명');

        rerender(renderElement({
            ...initialProps,
            onClick: fn_onClick,
            displayName: '변경한 출력명',
        }));

        expect($blogCategoryCard).toHaveTextContent('변경한 출력명');
    });

    it('onClick() 이 정상 호출된다.', async () => {
        const {
            fn_onClick,
        } = renderBlogCategoryCard({
            category: '카테고리',
            displayName: '출력명',
            description: '설명',
            IconComponent: SiJest,
        });

        const $blogCategoryCard = screen.getByRole('listitem');

        await userEvent.click($blogCategoryCard);

        expect(fn_onClick).toHaveBeenCalledTimes(1);
        expect(fn_onClick.mock.calls[0]).toEqual([
            '카테고리',
        ]);
    });
});
