import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  fetchTechnologies,
  fetchTechnology,
  fetchRelatedTechnologies
} from "./technologyApi";

export const useTechnologies = (page, limit = 12) => {
  return useQuery({
    queryKey: ["technologies", page, limit],
    queryFn: () => fetchTechnologies({ page, limit }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5
  });
};

export const useTechnology = (slug) => {
  return useQuery({
    queryKey: ["technology", slug],
    queryFn: () => fetchTechnology(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5
  });
};

export const useRelatedTechnologies = (slug) => {
  return useQuery({
    queryKey: ["technologies", "related", slug],
    queryFn: () => fetchRelatedTechnologies(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 5
  });
};
