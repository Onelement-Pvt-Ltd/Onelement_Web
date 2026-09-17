import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchTechnologies, fetchTechnology } from "@/features/technology/technologyAPI";

/**
 * Listing query — paginated.
 * ASSUMPTION (unverified): backend returns pagination as
 * { page, limit, total, totalPages }. Confirm against the real API
 * response and adjust field names in Technology.jsx if different.
 */
export const useTechnologies = (page, limit = 12) => {
  return useQuery({
    queryKey: ["technologies", page, limit],
    queryFn: () => fetchTechnologies({ page, limit }),
    placeholderData: keepPreviousData, // avoids full-page flicker when changing pages
    staleTime: 1000 * 60 * 5
  });
};

/**
 * Single technology query — TanStack Query's own cache replaces the
 * manual `cache[slug]` object that lived in technologySlice.js.
 */
export const useTechnology = (slug) => {
  return useQuery({
    queryKey: ["technology", slug],
    queryFn: () => fetchTechnology(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5
  });
};