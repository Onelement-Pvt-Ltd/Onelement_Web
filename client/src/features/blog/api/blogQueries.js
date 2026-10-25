import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchBlogsAPI, fetchBlogMetaAPI, fetchRelatedBlogsAPI } from "./blogApi";

export const blogKeys = {
  all: ["blogs"],
  list: (filters) => [...blogKeys.all, "list", filters],
  meta: () => [...blogKeys.all, "meta"],
  related: (slug) => [...blogKeys.all, "related", slug],
};

export const useBlogsQuery = (filters) => {
  return useQuery({
    queryKey: blogKeys.list(filters),
    queryFn: () => fetchBlogsAPI(filters),
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });
};

export const useBlogMetaQuery = () => {
  return useQuery({
    queryKey: blogKeys.meta(),
    queryFn: fetchBlogMetaAPI,
    staleTime: 10 * 60 * 1000,
  });
};

export const useRelatedBlogsQuery = (slug) => {
  return useQuery({
    queryKey: blogKeys.related(slug),
    queryFn: () => fetchRelatedBlogsAPI(slug),
    enabled: Boolean(slug),
    staleTime: 5 * 60 * 1000,
  });
};
