import { BLOG_LAYOUT } from "./BlogLayout";
import BlogCardSkeleton from "./BlogCardSkeleton";
import BlogCard2 from "./BlogCard2";

const BlogGrid = ({ blogs, loading }) => {
  if (loading && !blogs.length) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {BLOG_LAYOUT.map((item, index) => (
          <div key={index} className={item.className}>
            <BlogCardSkeleton variant={item.variant} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[370px_370px]">
      {blogs.slice(0, 4).map((blog, index) => (
        <div
          key={blog._id || blog.slug}
          className={`${BLOG_LAYOUT[index].className} h-full`}
        >
          <BlogCard2 blog={blog} variant={BLOG_LAYOUT[index].variant} />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
