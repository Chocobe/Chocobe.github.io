'use client';

// react
import {
    useCallback,
    memo, 
} from 'react';
// nextjs
import Image from 'next/image';
import Link from 'next/link';
import { 
    useRouter,
} from 'next/navigation';
// dayjs
import dayjs from 'dayjs';
// styled-components
import styled from 'styled-components';
// type
import { 
    blogPostCardVariantMapper,
    TBlogPostCardVariant, 
} from './blogPostCard.type';

const StyledBlogPostCardRoot = styled.div`
    display: flex;

    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.designSystemColors.BlogPostCard.boxShadow};
    overflow: hidden;

    transition: all 0.18s ease;

    > .thumbnailWrapper {
        flex-shrink: 0;

        width: 40%;
        height: auto;

        position: relative;

        > .thumbnail {
            object-fit: cover;
            object-position: center;
        }
    }

    > .cardBody {
        flex: 1;
        padding: 20px 16px;
        width: 100%;

        position: relative;

        color: #fff;

        > .hoverDecorator {
            width: 50%;
            height: 32px;

            position: absolute;
            top: 0;
            right: 0;
            transform: translate(100%, -100%);
            transition: all 0.18s ease-in-out;

            background-color: ${({ theme }) => theme.colors['yellow-600']};

            pointer-events: none;

            &::after {
                content: '';
                width: 50%;
                height: 50px;

                display: block;

                position: absolute;
                top: 8px;
                right: 8px;
                transform: translate(100%, 100%);
                transition: all 0.18s ease-in-out;
                transition-delay: 0.09s;

                background-color: ${({ theme }) => theme.designSystemColors.type.h};
            }
        }

        > .category {
            color: ${({ theme }) => theme.designSystemColors.BlogPostCard.category};
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
        }

        > .title {
            margin-top: 20px;

            color: ${({ theme }) => theme.designSystemColors.BlogPostCard.title};
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
        }

        > .date {
            margin-top: 16px;

            color: ${({ theme }) => theme.designSystemColors.BlogPostCard.date};
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
        }

        > .description {
            margin-top: 16px;

            color: ${({ theme }) => theme.designSystemColors.BlogPostCard.description};
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            white-space: pre-line;

            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        > .readMoreLink {
            margin-top: 32px;
            padding: 16px 48px;

            display: none;

            color: ${({ theme }) => theme.designSystemColors.BlogPostCard.readMoreLink.color};
            font-size: 18px;
            line-height: 28px;
            font-weight: 700;

            background-color: ${({ theme }) => theme.designSystemColors.BlogPostCard.readMoreLink.bg};
        }
    }

    &:not([data-variant=${blogPostCardVariantMapper.FEATURED}]):hover {
        box-shadow: ${({ theme }) => theme.designSystemColors.BlogPostCard.hover.boxShadow};

        cursor: pointer;

        > .cardBody {
            //

            > .hoverDecorator {
                transform: translate(0, 0);

                &::after {
                    transform: translate(0, 0);
                }
            }
        }
    }

    &[data-variant=${blogPostCardVariantMapper.FEATURED}] {
        flex-flow: row-reverse;

        border-radius: 0;
        box-shadow: none;

        > .thumbnailWrapper {
            border-radius: 8px;
            overflow: hidden;

            > .thumbnail {
                //
            }
        }

        > .cardBody {
            //

            > .hoverDecorator {
                display: none;
            }

            > .category {
                //
            }

            > .title {
                font-size: 36px;
                line-height: 40px;
            }

            > .date {
                //
            }

            > .description {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;

                white-space: pre-line;
            }

            > .readMoreLink {
                display: inline-block;
            }
        }

        &:hover {
            box-shadow: none;
        }
    }
`;

export type TBlogPostCardProps = {
    className?: string;

    variant?: TBlogPostCardVariant;
    thumbnail?: string;

    category: string;
    title: string;
    date: string;
    description: string;

    href: string;
};

function BlogPostCard(props: TBlogPostCardProps) {
    const {
        className,

        variant = blogPostCardVariantMapper.NORMAL,
        thumbnail,
        category,

        title,
        date,
        description,

        href,
    } = props;

    const router = useRouter();

    //
    // callback
    //
    const onClick = useCallback(() => {
        if (variant === blogPostCardVariantMapper.FEATURED) {
            return;
        }

        router.push(href);
    }, [variant, href, router]);

    return (
        <StyledBlogPostCardRoot
            className={className}
            data-variant={variant}
            onClick={onClick}>
            <figure className="thumbnailWrapper">
                {thumbnail && (
                    <Image
                        className="thumbnail"
                        src={thumbnail}
                        alt={title}
                        fill
                        priority />
                )}
            </figure>

            <div className="cardBody">
                <div className="hoverDecorator" />

                <div className="category">
                    {category}
                </div>

                <div className="title">
                    {title}
                </div>

                <div className="date">
                    작성일: {dayjs(date).format('YYYY년 MM월 DD일')}
                </div>

                <div
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }} />

                <Link
                    className="readMoreLink"
                    href={href}>
                    Read More
                </Link>
            </div>
        </StyledBlogPostCardRoot>
    );
}

export default memo(BlogPostCard);
