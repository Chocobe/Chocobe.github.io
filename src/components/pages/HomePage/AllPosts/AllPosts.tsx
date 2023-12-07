'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import BlogPostCard from '@/components/ui/BlogPostCard/BlogPostCard';
// styled-components
import styled from 'styled-components';

const StyledAllPostsRoot = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type TAllPostsProps = {
    className?: string;
};

function AllPosts(props: TAllPostsProps) {
    const {
        className,
    } = props;

    return (
        <StyledAllPostsRoot className={className}>
            <BlogPostCard 
                className="blogPost"
                thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                title="BlogPostCard - featured 구현 중"
                date={'2023-12-06'}
                description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

            <BlogPostCard 
                className="blogPost"
                thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                title="BlogPostCard - featured 구현 중"
                date={'2023-12-06'}
                description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

            <BlogPostCard 
                className="blogPost"
                thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                title="BlogPostCard - featured 구현 중"
                date={'2023-12-06'}
                description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

            <BlogPostCard 
                className="blogPost"
                thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                title="BlogPostCard - featured 구현 중"
                date={'2023-12-06'}
                description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

            <BlogPostCard 
                className="blogPost"
                thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                title="BlogPostCard - featured 구현 중"
                date={'2023-12-06'}
                description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />
        </StyledAllPostsRoot>
    );
}

export default memo(AllPosts);
