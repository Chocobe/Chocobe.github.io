// UI Components
import MarkdownAnchor from './MarkdownAnchor';
// jest
import { 
    render,
    screen,
} from '@testing-library/react';
// styled-components
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

const renderMarkdownAnchor = (
    props: Parameters<typeof MarkdownAnchor>[0]
) => {
    const {
        href,
        children,
    } = props;

    render((
        <ThemeProvider theme={theme('light')}>
            <MarkdownAnchor href={href}>
                {children}
            </MarkdownAnchor>
        </ThemeProvider>
    ));
};

describe('<MarkdownAnchor /> 테스트', () => {
    it('DOM 에 렌더링 된다.', () => {
        renderMarkdownAnchor({
            href: '#',
            children: 'Hello MarkdownAnchor Component',
        });

        const $anchor = screen.getByRole('link');

        expect($anchor).toBeInTheDocument();
    });

    it('`tag body` 가 렌더링 된다.', () => {
        renderMarkdownAnchor({
            href: '#',
            children: 'Hello MarkdownAnchor Component',
        });

        const $anchor = screen.getByRole('link');

        expect($anchor).toHaveTextContent('Hello MarkdownAnchor Component');
    });

    it('`href` 가 반영된다.', () => {
        renderMarkdownAnchor({
            href: 'https://github.com/Chocobe',
            children: 'Hello MarkdownAnchor Component',
        });

        const $anchor = screen.getByRole('link');

        expect($anchor).toHaveAttribute('href', 'https://github.com/Chocobe');
    });
});
