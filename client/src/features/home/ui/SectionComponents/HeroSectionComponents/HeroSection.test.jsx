import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
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
});
