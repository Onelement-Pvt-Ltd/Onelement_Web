import { useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const DEFAULT_LIMIT = 6;
const SAFE_TEXT = /^[A-Za-z0-9 &-]{1,60}$/;

const parseList = (params, key, validator, max) => {
  const values = params.getAll(key).flatMap((value) => value.split(","));
  return [...new Set(values.map((value) => value.trim()).filter(validator))].slice(0, max);
};

const parsePage = (value) => {
  if (!/^[1-9]\d{0,5}$/.test(value || "")) return 1;
  return Math.min(Number(value), 100000);
};

const toParams = (filters) => {
  const next = new URLSearchParams();
  if (filters.categories.length) next.set("category", filters.categories.join(","));
  if (filters.years.length) next.set("year", filters.years.join(","));
  if (filters.months.length && filters.years.length) next.set("month", filters.months.join(","));
  if (filters.page > 1) next.set("page", String(filters.page));
  return next;
};

export const useBlogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(() => ({
    categories: parseList(searchParams, "category", (value) => SAFE_TEXT.test(value), 9),
    years: parseList(searchParams, "year", (value) => /^(20\d{2}|2100)$/.test(value), 20).map(Number),
    months: parseList(searchParams, "month", (value) => /^(?:[1-9]|1[0-2])$/.test(value), 12).map(Number),
    page: parsePage(searchParams.get("page")),
    limit: DEFAULT_LIMIT
  }), [searchParams]);

  useEffect(() => {
    const canonical = toParams(filters);
    if (canonical.toString() !== searchParams.toString()) {
      setSearchParams(canonical, { replace: true });
    }
  }, [filters, searchParams, setSearchParams]);

  const setFilter = useCallback((updates) => {
    setSearchParams(toParams({ ...filters, ...updates, page: 1 }), { replace: true });
  }, [filters, setSearchParams]);

  const setPage = useCallback((page) => {
    const safePage = Number.isInteger(page) && page > 0 ? Math.min(page, 100000) : 1;
    setSearchParams(toParams({ ...filters, page: safePage }));
  }, [filters, setSearchParams]);

  const clearAll = useCallback(() => setSearchParams({}, { replace: true }), [setSearchParams]);

  return { filters, setFilter, setPage, clearAll };
};
