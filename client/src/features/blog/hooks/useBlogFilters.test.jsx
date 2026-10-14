import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { useBlogFilters } from "./useBlogFilters";

const FilterProbe = () => {
  const { invalidUrl } = useBlogFilters();
  return <span>{invalidUrl ? "invalid" : "valid"}</span>;
};

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <FilterProbe />
    </MemoryRouter>,
  );

describe("useBlogFilters URL validation", () => {
  it("accepts supported filter and page values", () => {
    renderAt("/blogs?category=Solar&year=2025&month=3&page=2");
    expect(screen.getByText("valid")).toBeInTheDocument();
  });

  it("rejects malformed or unsupported filter URLs", () => {
    renderAt("/blogs?year=not-a-year&page=0&debug=true");
    expect(screen.getByText("invalid")).toBeInTheDocument();
  });
});
