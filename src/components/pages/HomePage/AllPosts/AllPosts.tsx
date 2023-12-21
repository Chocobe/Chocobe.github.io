// UI Components
import BlogPostCardList from '@/components/ui/BlogPostCardList/BlogPostCardList';
// type
import { 
    TBlogPostCardProps,
} from '@/components/ui/BlogPostCard/BlogPostCard';

type TAllPostsProps = {
    className?: string;
    blogPostList: TBlogPostCardProps[];
};

function AllPosts(props: TAllPostsProps) {
    const {
        className,
        blogPostList,
    } = props;

    return (
        <BlogPostCardList 
            className={className}
            blogPostList={blogPostList} />
    );
}

export default AllPosts;
