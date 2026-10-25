import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import axe from "axe-core";
import MobileMenu from "./MobileMenu";

const menus = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    subMenu: [{ name: "Teams", path: "/teams" }],
  },
];

describe("MobileMenu", () => {
  it("opens accessibly, closes with Escape and returns focus", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <MobileMenu Menus={menus} />
      </MemoryRouter>,
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    expect(screen.getByRole("dialog", { name: /mobile navigation/i })).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("button", { name: /close navigation/i })).toHaveFocus());

    const accessibility = await axe.run(document.body, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(accessibility.violations).toEqual([]);

    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
});
