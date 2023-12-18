'use client';

// react
import {
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledMarkdownUL = styled.ul`
    padding-left: 28px !important;

    list-style: disc;
`;

function MarkdownUL(props: DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
>) {
    const {
        children,
    } = props;

    return (
        <StyledMarkdownUL>
            {children}
        </StyledMarkdownUL>
    );
}

export default MarkdownUL;
