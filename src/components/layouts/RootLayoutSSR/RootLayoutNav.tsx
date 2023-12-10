'use client';

// react
import {
    useMemo,
    memo,
} from 'react';
// nextjs
import Link from 'next/link';
// styled-components
import styled from 'styled-components';

const StyledRootLayoutNavRoot = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    > .navItem {
        padding: 0 8px;

        color: ${({ theme }) => theme.designSystemColors.text[222]};
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`;

function RootLayoutNav() {
    //
    // cache
    //
    const navItemList = useMemo(() => [
        {
            name: 'Profile',
            href: '/profile',
        },
    ], []);

    return (
        <StyledRootLayoutNavRoot>
            {navItemList.map(({ name, href }) => (
                <Link
                    key={name}
                    className="navItem"
                    href={href}>
                    {name}
                </Link>
            ))}
        </StyledRootLayoutNavRoot>
    );
}

export default memo(RootLayoutNav);
