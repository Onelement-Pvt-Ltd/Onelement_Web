
const BlogAuthorCard = ({ author }) => (
  <div className="mt-16 border-t pt-8 flex items-center gap-4">
    <img
      src={author.avatar}
      className="h-14 w-14 rounded-full object-cover"
    />
    <div>
      <p className="font-semibold text-[#0a2955]">
        {author.name}
      </p>
      <p className="text-sm text-gray-500">
        Renewable Energy Research Analyst
      </p>
    </div>
  </div>
);
export default BlogAuthorCard;