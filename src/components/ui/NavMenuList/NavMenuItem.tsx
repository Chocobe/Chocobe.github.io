'use client';

// react
import {
    useState,
    useEffect,
    memo,
} from 'react';
// nextjs
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
// type
import { 
    IconType,
} from 'react-icons';
import classNames from 'classnames';

const StyledNavMenuItemRoot = styled.li`
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.designSystemColors.NavMenuItem.borderColor};

    position: relative;
    overflow: hidden;

    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    > .decorator {
        width: 32px;

        position: absolute;
        top: 0;
        bottom: 100%;
        left: 16px;

        background-color: ${({ theme }) => theme.designSystemColors.NavMenuItem.decorator};

        transform-origin: top right;
        transform: rotateZ(15deg);
        transition: all 1s ease;

    }

    > .inner {
        padding: 10px;
        width: 100%;

        position: sticky;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        gap: 8px;

        > .icon {
            color: ${({ theme }) => theme.designSystemColors.NavMenuItem.color};

            transition: all 1s ease;
        }

        > .displayName {
            color: ${({ theme }) => theme.designSystemColors.NavMenuItem.color};
            font-size: 20px;
            line-height: 30px;
            font-weight: 700;

            transition: all 1s ease;
        }
    }

    &:hover {
        //

        > .decorator {
            //
        }

        > .inner {
            //

            > .icon {
                color: ${({ theme }) => theme.designSystemColors.NavMenuItem.hover.color};
            }

            > .displayName {
                color: ${({ theme }) => theme.designSystemColors.NavMenuItem.hover.color};
            }
        }
    }

    &.isSelected {
        //

        > .decorator {
            bottom: -100%;

            background-color: ${({ theme }) => theme.designSystemColors.NavMenuItem.active.decorator};
        }

        > .inner {
            //

            > .icon {
                color: ${({ theme }) => theme.designSystemColors.NavMenuItem.active.color};
            }

            > .displayName {
                color: ${({ theme }) => theme.designSystemColors.NavMenuItem.active.color};
            }
        }
    }
`;

type TNavMenuItemProps = {
    displayName: string;
    href: string;
    isSelected: boolean;
    IconComponent: IconType;
};

function NavMenuItem(props: TNavMenuItemProps) {
    const {
        displayName,
        href,
        isSelected,
        IconComponent,
    } = props;

    //
    // state
    //
    // TODO: store 설치 후, persist 로 가져오기
    // TODO: TODO: 같은 카테고리 내부에서, Post 페이지가 변경 되어도 메뉴 선택 효과가 발생하기 때문
    const [selected, setSelected] = useState(false);
    
    //
    // effect
    //
    // TODO: store 설치 후, persist 로 가져오기
    // TODO: TODO: 같은 카테고리 내부에서, Post 페이지가 변경 되어도 메뉴 선택 효과가 발생하기 때문
    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    return (
        <Link
            href={href}
            passHref
            legacyBehavior>
            <StyledNavMenuItemRoot 
                className={classNames(
                    { isSelected: selected }
                )}>
                <div className="decorator" />

                <div className="inner">
                    <IconComponent 
                        className="icon"
                        size="30px" />

                    <div className="displayName">
                        {displayName}
                    </div>
                </div>
            </StyledNavMenuItemRoot>
        </Link>
    );
}

export default memo(NavMenuItem);
