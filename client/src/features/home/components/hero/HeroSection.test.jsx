import { fireEvent, render, screen } from "@testing-library/react";
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

  it("changes slides with a horizontal pointer swipe", async () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    const carousel = screen.getByLabelText("Onelement featured stories");

    fireEvent.pointerDown(carousel, {
      pointerId: 1,
      isPrimary: true,
      button: 0,
      clientX: 280,
      clientY: 220,
    });
    fireEvent.pointerMove(carousel, {
      pointerId: 1,
      isPrimary: true,
      clientX: 170,
      clientY: 222,
    });
    fireEvent.pointerUp(carousel, {
      pointerId: 1,
      isPrimary: true,
      clientX: 150,
      clientY: 222,
    });

    expect(
      await screen.findByRole("heading", {
        name: "Technology designed around energy, environment and industry.",
      }),
    ).toBeInTheDocument();
  });

  it("uses the CSS slide transition on mobile controls", async () => {
    const originalMatchMedia = window.matchMedia;
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
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <HeroSection />
        </MemoryRouter>,
      );

      await user.click(screen.getByRole("button", { name: "Next hero slide" }));

      const slide = await screen.findByRole("group", {
        name: "3 of 3: Our technologies",
      });
      expect(slide).toHaveClass("hero-mobile-slide--next");
      expect(
        screen.getByRole("heading", {
          name: "Technology designed around energy, environment and industry.",
        }),
      ).toBeInTheDocument();
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });
});
