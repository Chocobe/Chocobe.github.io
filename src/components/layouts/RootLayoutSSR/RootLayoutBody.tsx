'use client';

// react
import {
    memo,
    CSSProperties,
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledRootLayoutBodyRoot = styled.div`
    height: 0;
    min-height: 100%;
`;

type TRootLayoutBodyProps = PropsWithChildren<{
    className?: string;
    style?: CSSProperties
}>;

function RootLayoutBody(props: TRootLayoutBodyProps) {
    const {
        className,
        style,
        children,
    } = props;

    return (
        <StyledRootLayoutBodyRoot
            className={className}
            style={style}>
            {children}
        </StyledRootLayoutBodyRoot>
    );
}

export default memo(RootLayoutBody);
