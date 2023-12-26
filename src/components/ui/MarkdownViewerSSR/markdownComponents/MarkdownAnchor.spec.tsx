// UI Components
import MarkdownAnchor from './MarkdownAnchor';
// jest
import { 
    screen,
} from '@testing-library/react';
// utils
import renderTestComponent from '@/utils/testing-library/renderTestComponent';

const renderMarkdownAnchor = (
    props: Parameters<typeof MarkdownAnchor>[0]
) => {
    const {
        href,
        children,
    } = props;

    renderTestComponent(
        <MarkdownAnchor href={href}>
            {children}
        </MarkdownAnchor>
    );
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
