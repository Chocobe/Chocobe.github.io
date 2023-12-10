// react
import {
    PropsWithChildren,
} from 'react';
// UI Components
import RootLayoutHeader from './RootLayoutHeader';
import RootLayoutBody from './RootLayoutBody';
// styled-components
import StyledComponentsProvider from '@/lib/styledComponents/StyledComponentsProvider';

function RootLayoutSSR(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <div className={`
            w-full
            h-full
            overflow-auto
        `.trim()}>
            <StyledComponentsProvider>
                <RootLayoutHeader />
                <RootLayoutBody
                    style={{
                        minHeight: 'calc(100% - 72px)',
                    }}>
                    {children}
                </RootLayoutBody>
            </StyledComponentsProvider>
        </div>
    );
}

export default RootLayoutSSR;
