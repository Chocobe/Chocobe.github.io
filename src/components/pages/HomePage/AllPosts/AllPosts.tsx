// UI Components
import BlogPostCardList from '@/components/ui/BlogPostCardList/BlogPostCardList';

type TAllPostsProps = {
    className?: string;
};

function AllPosts(props: TAllPostsProps) {
    const {
        className,
    } = props;

    return (
        <BlogPostCardList 
            className={className}
            blogPostList={[
                {
                    thumbnail: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
                    category: 'Javascript',
                    title: 'BlogPostCard - featured 구현 중 1',
                    date: '2023-12-06',
                    description: `UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`,
                    href: '#',
                },
                {
                    thumbnail: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
                    category: 'Javascript',
                    title: 'BlogPostCard - featured 구현 중 2',
                    date: '2023-12-06',
                    description: `UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`,
                    href: '#',
                },
                {
                    thumbnail: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
                    category: 'Javascript',
                    title: 'BlogPostCard - featured 구현 중 3',
                    date: '2023-12-06',
                    description: `UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`,
                    href: '#',
                },
                {
                    thumbnail: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
                    category: 'Javascript',
                    title: 'BlogPostCard - featured 구현 중 4',
                    date: '2023-12-06',
                    description: `UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`,
                    href: '#',
                },
                {
                    thumbnail: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg',
                    category: 'Javascript',
                    title: 'BlogPostCard - featured 구현 중 5',
                    date: '2023-12-06',
                    description: `UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`,
                    href: '#',
                },
            ]}
        />
    );
}

export default AllPosts;
