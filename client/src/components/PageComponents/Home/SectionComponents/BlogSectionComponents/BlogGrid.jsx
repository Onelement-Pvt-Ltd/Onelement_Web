import { BLOG_LAYOUT } from "./BlogLayout";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import BlogCard2 from "./BlogCard2";

const BlogGrid = ({ blogs, loading }) => {
  if (loading && !blogs.length) {
    return (
      <div className="grid grid-cols-2 grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4">
        {BLOG_LAYOUT.map((item, index) => (
          <div key={index} className={item.className}>
            <BlogCardSkeleton variant={item.variant} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="
    mx-auto
    max-w-[1080px]

    grid
    grid-cols-2
    md:grid-cols-3

    grid-rows-3
    md:grid-rows-[320px_320px]
    gap-3
    md:gap-4
  "
    >
      {blogs.slice(0, 4).map((blog, index) => (
        <div
          key={blog._id}
          className={`${BLOG_LAYOUT[index].className} h-full`}
        >
          <BlogCard2 blog={blog} variant={BLOG_LAYOUT[index].variant} />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
