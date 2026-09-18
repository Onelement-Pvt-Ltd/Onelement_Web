import { CalendarDays } from "lucide-react";
import { formatDate } from "@/shared/utils/formatDate";

const BlogCardMeta = ({ author, publishedAt }) => {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={author?.avatar}
          alt={author?.name}
          className="h-9 w-9 rounded-full border border-white/20 object-cover"
        />

        <div>
          <p className="text-sm font-medium text-white">
            {author?.name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-white/80">
        <CalendarDays size={14} />
        <span>{formatDate(publishedAt)}</span>
      </div>
    </div>
  );
};

export default BlogCardMeta;
