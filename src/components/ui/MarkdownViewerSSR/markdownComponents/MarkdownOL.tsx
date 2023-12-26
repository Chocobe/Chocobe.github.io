'use client';

// react
import {
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledMarkdownOL = styled.ul`
    padding-left: 28px !important;

    list-style: decimal;
`;

function MarkdownOL(props: DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
>) {
    const {
        children,
    } = props;

    return (
        <StyledMarkdownOL>
            {children}
        </StyledMarkdownOL>
    );
}

export default MarkdownOL;
