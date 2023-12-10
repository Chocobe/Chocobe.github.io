// react
import { 
    CSSProperties,
} from 'react';
// UI Components
import BlogPostCard from '../BlogPostCard/BlogPostCard';
// style
import classNames from 'classnames';
// type
import { 
    TBlogPostCardProps,
} from '../BlogPostCard/BlogPostCard';

type TBlogPostCardListProps = {
    style?: CSSProperties;
    className?: string;
    blogPostList: TBlogPostCardProps[];
};

function BlogPostCardList(props: TBlogPostCardListProps) {
    const {
        style,
        className,
        blogPostList,
    } = props;

    return (
        <div
            className={classNames(
                className,
                `
                    flex flex-col gap-px-20
                `.trim(),
            )}
            style={{
                ...style,
            }}>
            {blogPostList.map(blogPost => {
                const {
                    className,
                    variant,
                    thumbnail,
                    title,
                    date,
                    description,
                } = blogPost;

                return (
                    <BlogPostCard
                        key={`${title}-${date}`}
                        className={className}
                        variant={variant}
                        thumbnail={thumbnail}
                        title={title}
                        date={date}
                        description={description} />
                );
            })}
        </div>
    );
}

export default BlogPostCardList;
