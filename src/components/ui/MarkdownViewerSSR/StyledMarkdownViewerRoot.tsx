'use client';

// react
import { 
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const _StyledMarkdownViewerRoot = styled.div`
    //

    /* 코드 블록 */
    pre {
        counter-reset: line;

        border-radius: 8px;

        transition: all 0.18s ease-in-out;

        code {
            font-family: 'Roboto Mono', monospace !important;
            font-size: 16px;

            /* line */
            span[data-line] {
                padding: 2px 16px;
                display: inline-block;
            }

            /* line highlight */
            span[data-highlighted-line] {
                background: rgba(200, 200, 255, 0.1);
                border-left: #ff1493;
            }

            /* chars highlight */
            span[data-highlighted-chars] {
                background: rgba(200, 200, 255, 0.1);
                box-shadow: 0 0 0 4px rgb(82 82 91 / 0.5);
                border-radius: 4px;
            }

            /* line numbers */
            &[data-line-numbers] {
                &[data-line-numbers-max-digits="2"] {
                    [data-line]::before {
                        width: 2rem;
                    }
                }

                &[data-line-numbers-max-digits="3"] {
                    [data-line]::before {
                        width: 3rem;
                    }
                }

                > [data-line]::before {
                    counter-increment: line;
                    content: counter(line);

                    display: inline-block;
                    width: 1rem;
                    margin-right: 1.5rem;
                    text-align: right;
                    color: gray;
                }

                span[data-line] {
                    padding: 2px 16px 2px 0;
                    display: inline-block;
                }
            }
        }
    }

    /* 코드 블록 제목 */
    [data-rehype-pretty-code-title] {
        padding: 8px 16px;

        color: #e4e4e7;
        font-size: 14px;
        line-height: 22px;
        font-weight: 700;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: #3f3f47;

        transition: all 0.18s ease-in-out;

        & + pre {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }

    /* 코드 블록 루트 */
    [data-rehype-pretty-code-fragment] {
        background-color: transparent;
        transition: all 0.18s ease-in-out;

        &:hover {
            box-shadow: 3px 6px 12px 0 rgba(0, 0, 0, 0.5);

            [data-rehype-pretty-code-title] {
                border-radius: 0;

                & + pre {
                    border-radius: 0;
                }
            }
        }
    }

    /* 
     * <details /> 스타일 
     *
     * (MDXRemote.components.details 미지원)
     */
    details {
        padding: 12px;

        position: relative;

        border: 1px solid #eee;

        transition: all 0.28s ease-in-out;

        &::before {
            content: '';

            position: absolute;
            top: 0;
            left: 0;

            border: 8px solid #ffffff00;

            transition: all 0.28s ease-in-out;
        }

        &::after {
            content: '';

            position: absolute;
            bottom: 0;
            right: 0;

            border: 8px solid #ffffff00;

            transition: all 0.28s ease-in-out;
        }

        &[open] {
            background-color: #fffdec;

            &::before {
                border-top-color: #ff1493;
                border-left-color: #ff1493;
            }

            &::after {
                border-bottom-color: #ff1493;
                border-right-color: #ff1493;
            }
        }
    }

    /* 
     * <img /> 스타일 
     *
     * (MDXRemote.components.img 미지원)
     */
    img,
    video {
        border: 1px solid #eee;
        border-radius: 8px;

        transition: all 0.18s ease-in-out;

        &:hover {
            border-radius: 0;
            box-shadow: 3px 6px 12px 0 rgba(0, 0, 0, 0.5);
        }
    }
`;

function StyledMarkdownViewerRoot(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <_StyledMarkdownViewerRoot 
            className="markdown-body">
            {children}
        </_StyledMarkdownViewerRoot>
    );
}

export default StyledMarkdownViewerRoot;
