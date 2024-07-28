'use client';

// react
import {
    useMemo,
} from 'react';
// nextjs
import Link from 'next/link';
// style
import styled from 'styled-components';

const StyledThreejsPracticesRoot = styled.div`
    padding: 20px;
    width: 100%;
    height: fit-content;
    min-height: 100%;

    > .cardList {
        padding-left: 20px;

        > .card {
            /*  */

            > .cardContent {
                display: list-item;

                list-style-type: disc;

                font-size: 24px;
                line-height: 36px;
                font-weight: 500;

                > .title {
                    font-size: 24px;
                    line-height: 36px;
                    font-weight: 500;
                }
            }
        }
    }
`;

function ThreejsPractices() {
    //
    // cache
    //
    const practices = useMemo(() => [
        {
            title: '석양과 무덤지기의 집',
            path: '/threejs-practices/1',
        },
    ], []);

    return (
        <StyledThreejsPracticesRoot>
            <ul className="cardList">
                {practices.map(practice => {
                    const {
                        title,
                        path
                    } = practice;

                    return (
                        <li
                            key={title}
                            className="card">
                            <Link 
                                className="cardContent"
                                href={path}>
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </StyledThreejsPracticesRoot>
    );
}

export default ThreejsPractices;
