const BlogContent = ({ content }) => (
  <div className="space-y-10">
    {content.map((section, i) => (
      <div key={i}>
        <h2 className="text-2xl font-semibold text-[#0a2955]">
          {section.heading}
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {section.body}
        </p>
      </div>
    ))}
  </div>
);

export default BlogContent;