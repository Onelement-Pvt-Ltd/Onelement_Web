import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection carousel", () => {
  it("cycles through the hero slides and loops with the arrow controls", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Onelement Energy" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Next hero slide" }));
    expect(
      await screen.findByRole("heading", {
        name: "Technology designed around energy, environment and industry.",
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Next hero slide" }));
    expect(
      await screen.findByRole("heading", {
        name: "Engineering a cleaner future, one step at a time.",
      }),
    ).toBeInTheDocument();
  });

  it("autoplays on mobile without rendering navigation buttons", async () => {
    const originalMatchMedia = window.matchMedia;
    vi.useFakeTimers();
    window.matchMedia = vi.fn((query) => ({
      matches: query === "(max-width: 767px)",
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }));

    try {
      render(
        <MemoryRouter>
          <HeroSection />
        </MemoryRouter>,
      );

      expect(screen.queryByRole("button", { name: "Previous hero slide" })).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Next hero slide" })).not.toBeInTheDocument();
      expect(screen.queryByRole("tablist", { name: "Choose featured story" })).not.toBeInTheDocument();

      await act(async () => {
        vi.advanceTimersByTime(7000);
      });

      expect(screen.getByRole("group", {
        name: "3 of 3: Our technologies",
      })).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: "Technology designed around energy, environment and industry.",
        }),
      ).toBeInTheDocument();
    } finally {
      window.matchMedia = originalMatchMedia;
      vi.useRealTimers();
    }
  });
});
