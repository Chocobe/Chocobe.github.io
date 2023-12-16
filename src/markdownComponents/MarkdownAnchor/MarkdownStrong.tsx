'use client';

// react
import {
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledMarkdownStrong = styled.strong`
    /* background: linear-gradient(0deg, rgba(255,20,147,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%); */
    background: ${({ theme }) => theme.designSystemColors.MarkdownStrong.background};
`;

function MarkdownStrong(props: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
>) {
    const {
        children,
    } = props;

    return (
        <StyledMarkdownStrong>
            {children}
        </StyledMarkdownStrong>
    );
}

export default MarkdownStrong;
