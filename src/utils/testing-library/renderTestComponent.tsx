// react
import { 
    ReactElement,
} from 'react';
// jest
import { 
    render,
} from '@testing-library/react';
// styled-components
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

const renderTestComponent = (element: ReactElement) => {
    const { rerender } = render(
        <ThemeProvider theme={theme('light')}>
            {element}
        </ThemeProvider>
    );

    return {
        rerender,
    };
};

export default renderTestComponent;
