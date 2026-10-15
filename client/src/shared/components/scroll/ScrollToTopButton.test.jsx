import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

let publishScroll;

vi.mock("./SmoothScroll", () => ({
  smoothScrollTo: vi.fn(() => true),
  subscribeToSmoothScroll: vi.fn((subscriber) => {
    publishScroll = subscriber;
    return () => {
      publishScroll = undefined;
    };
  }),
}));

const { default: ScrollToTopButton } = await import("./ScrollToTopButton");

afterEach(() => {
  vi.clearAllMocks();
});

describe("ScrollToTopButton", () => {
  it("updates its progress ring during Lenis scroll frames", () => {
    const { container } = render(<ScrollToTopButton />);

    act(() => publishScroll({ animatedScroll: 500, limit: 1000, progress: 0.5 }));
    expect(screen.getByRole("button", { name: "Scroll to top" })).toBeInTheDocument();

    act(() => publishScroll({ animatedScroll: 750, limit: 1000, progress: 0.75 }));

    const progressRing = container.querySelector(".eco-scroll-ring-progress");
    expect(Number(progressRing.getAttribute("stroke-dashoffset"))).toBeCloseTo(
      2 * Math.PI * 28 * 0.25
    );
  });
});
