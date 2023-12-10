'use client';

// react
import {
    useCallback,
    memo,
} from 'react';
// icons
import { 
    IconType,
} from 'react-icons';
// styled-components
import styled from 'styled-components';

const StyledBlogCategoryCardRoot = styled.div<{
    $width: string;
}>`
    width: ${({ $width }) => $width};

    position: relative;

    border: 1px solid ${({ theme }) => theme.designSystemColors.BlogCategoryCard.borderColor};
    overflow: hidden;

    > .decoratorYellow {
        width: 45%;
        height: 35%;

        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%, -100%);
        transition: all 0.18s ease-in-out;
        transition-delay: 0.09s;

        background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.decoratorYellow};
    }

    > .decoratorGreen {
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-100%, 100%);
        transition: all 0.18s ease-in-out;

        background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.decoratorGreen};
    }

    > .content {
        padding: 16px;
        width: 100%;
        height: 100%;

        position: sticky;
        top: 0;
        left: 0;

        > .iconWrapper {
            padding: 12px;
            width: fit-content;
            height: fit-content;

            color: ${({ theme }) => theme .designSystemColors.BlogCategoryCard.icon};
            border-radius: 8px;
            background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.iconWrapper};

            transition: all 0.18s ease-in-out;
        }

        > .category {
            margin-top: 16px;

            color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.category};
            font-size: 24px;
            line-height: 36px;
            font-weight: 700;

            transition: all 0.18s ease-in-out;
        }

        > .description {
            margin-top: 8px;

            color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.description};
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
        }
    }

    &:hover {
        border-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.borderColor};

        > .decoratorYellow {
            background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.decoratorYellow};
            transform: translate(0, 0);
        }

        > .decoratorGreen {
            background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.decoratorGreen};
            transform: translate(-8px, 8px);
        }

        > .content {
            //

            > .iconWrapper {
                color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.icon};
                background-color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.iconWrapper};
            }

            > .category {
                color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.category};
            }

            > .description {
                color: ${({ theme }) => theme.designSystemColors.BlogCategoryCard.hover.description};
            }
        }
    }
`;

type TBlogCategoryCardProps = {
    className?: string;
    width?: string;

    category: string;
    displayName: string;
    description: string;
    onClick: (category: string) => void;

    IconComponent: IconType;
};

function BlogCategoryCard(props: TBlogCategoryCardProps) {
    const {
        className,
        width = '100%',

        category,
        displayName,
        description,
        onClick,

        IconComponent,
    } = props;

    //
    // callback
    //
    const onClickRoot = useCallback(() => {
        onClick(category);
    }, [category, onClick]);

    return (
        <StyledBlogCategoryCardRoot 
            className={className}
            $width={width}
            onClick={onClickRoot}>
            <div className="decoratorYellow" />
            <div className="decoratorGreen" />

            <div className="content">
                <div className="iconWrapper">
                    <IconComponent 
                        size="20px" />
                </div>

                <div className="category">
                    {displayName}
                </div>

                <div className="description">
                    {description}
                </div>
            </div>
        </StyledBlogCategoryCardRoot>
    );
}

export default memo(BlogCategoryCard);
