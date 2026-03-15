const BlogHero = ({ blog }) => (
  <div
    className="h-[60vh] bg-cover bg-center relative flex items-end"
    style={{ backgroundImage: `url(${blog.coverImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 pb-10 text-white">
      <p className="uppercase text-sm text-[#9fe870]">
        {blog.category}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mt-3">
        {blog.title}
      </h1>
    </div>
  </div>
);
export default BlogHero;