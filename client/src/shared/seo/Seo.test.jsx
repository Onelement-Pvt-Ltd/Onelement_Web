import { render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Seo from "./Seo";

describe("Seo", () => {
  it("sets canonical, social, robots and structured metadata", async () => {
    render(
      <Seo
        title="Test Page"
        description="A production metadata test."
        path="/test-page"
        image="/test-image.png"
        structuredData={{ "@context": "https://schema.org", "@type": "WebPage" }}
      />,
    );

    await waitFor(() => expect(document.title).toBe("Test Page | Onelement Energy"));
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://onelement.in/test-page",
    );
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "A production metadata test.",
    );
    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://onelement.in/test-image.png",
    );
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "index, follow, max-image-preview:large",
    );
    expect(document.getElementById("onelement-structured-data")).toHaveTextContent(
      '"@type":"WebPage"',
    );
  });

  it("marks private pages as noindex", async () => {
    render(<Seo title="Private" path="/admin/views" noindex />);
    await waitFor(() =>
      expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
        "content",
        "noindex, nofollow",
      ),
    );
  });
});
