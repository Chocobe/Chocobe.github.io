// // UI Components
import BlogPostCard from './BlogPostCard';
// jest
import {
    render,
    screen,
    // renderHook,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
// styled-components
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

const setup = (
    initialProps: Parameters<typeof BlogPostCard>[0]
) => {
    const renderElement = (props: typeof initialProps) => {
        return (
            <ThemeProvider theme={theme('light')}>
                <div data-testid="test-BlogPostCard">
                    <BlogPostCard 
                        {...props} />
                </div>
            </ThemeProvider>
        );
    };

    const { rerender } = render(renderElement(initialProps));

    return {
        initialProps,
        renderElement,
        rerender,
    };
};

describe('<BlogPostCard /> 테스트', () => {
    beforeEach(() => {
        mockRouter.push('/');
    });

    it('DOM 에 렌더링 된다.', () => {
        setup({
            category: 'category-01',
            title: '테스트 제목',
            date: new Date('2024-01-06').toISOString(),
            description: '테스트 설명',
            href: '/test-blog-post-card',
        });

        const $card = screen.getByTestId('test-BlogPostCard');

        expect($card).toBeInTheDocument();
    });

    it('props 가 정상적으로 반영된다.', () => {
        setup({
            category: 'category-01',
            title: '테스트 제목',
            date: new Date('2024-01-06').toISOString(),
            description: '테스트 설명',
            href: '/test-blog-post-card',
        });

        const $card = screen.getByTestId('test-BlogPostCard');

        expect($card).toHaveTextContent('category-01');
        expect($card).toHaveTextContent('테스트 제목');
        expect($card).toHaveTextContent('2024년 01월 06일');
        expect($card).toHaveTextContent('테스트 설명');
    });

    it('click 시, href 경로로 페이지 이동한다.', async () => {
        setup({
            className: 'card-classname',
            category: 'category-01',
            title: '테스트 제목',
            date: new Date('2024-01-06').toISOString(),
            description: '테스트 설명',
            href: '/test-blog-post-card',
        });

        const $card = screen
            .getByTestId('test-BlogPostCard')
            .querySelector('.card-classname')!;

        await userEvent.click($card);

        expect(mockRouter).toMatchObject({
            pathname: '/test-blog-post-card',
        });
    });

    it('variant 가 `featured` 일 경우, click 으로 페이지 이동 안함', async () => {
        setup({
            className: 'card-classname',
            variant: 'featured',
            category: 'category-01',
            title: '테스트 제목',
            date: new Date('2024-01-06').toISOString(),
            description: '테스트 설명',
            href: '/test-blog-post-card',
        });

        const $card = screen
            .getByTestId('test-BlogPostCard')
            .querySelector('.card-classname')!;

        await userEvent.click($card);

        expect(mockRouter).toMatchObject({
            pathname: '/',
        });
    });
});