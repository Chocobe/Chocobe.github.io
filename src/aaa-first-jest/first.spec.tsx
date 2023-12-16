import Hello from './Hello';
import {
    render,
    screen,
} from '@testing-library/react';

describe('first test', () => {
    it('1 + 2 === 3', () => {
        const result = 1 + 2;

        expect(result).toBe(3);
    });

    it('Hello 컴포넌트는 "Hello World" 를 렌더링 한다.', () => {
        render(<Hello />);

        const $hello = screen.getByRole('heading', {
            level: 1,
        });

        expect($hello).toBeInTheDocument();
    });
});
