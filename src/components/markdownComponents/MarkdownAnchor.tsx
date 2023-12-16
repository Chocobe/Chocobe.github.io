'use client';

// react
import {
    AnchorHTMLAttributes,
    DetailedHTMLProps,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledMarkdownAnchorRoot = styled.a`
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        height: 2px;

        position: absolute;
        left: 0;
        right: 100%;

        background-color: ${({ theme }) => theme.designSystemColors.MarkdownAnchor.backgroundColor};
        opacity: 1;
    }

    &::before {
        bottom: 0;

        transition: all 0.5s ease;
    }

    &::after {
        top: 0;

        transition: all 0.4s ease 0.1s;
    }

    &:hover {
        text-decoration: none !important;

        &::before {
            left: 50%;
            right: 0;
            opacity: 0;
        }

        &::after {
            left: 75%;
            right: 0;
            opacity: 0;
        }
    }
`;

type TMarkdownAnchorProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>, 
    HTMLAnchorElement
>;

function MarkdownAnchor(props: TMarkdownAnchorProps) {
    const {
        href,
        children,
    } = props;

    return (
        <StyledMarkdownAnchorRoot 
            href={href} 
            target="_blank">
            {children}
        </StyledMarkdownAnchorRoot>
    );
}

export default MarkdownAnchor;
