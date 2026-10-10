import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import axe from "axe-core";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("provides a recovery path and prevents indexing", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /this page has moved beyond the grid/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home page/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
    await waitFor(() =>
      expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
        "content",
        "noindex, nofollow",
      ),
    );

    const accessibility = await axe.run(document.body, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(accessibility.violations).toEqual([]);
  });
});
