import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  it("keeps the form controls in a logical keyboard order", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    screen.getByLabelText("Name").focus();
    await user.tab();
    expect(screen.getByLabelText("Email")).toHaveFocus();
    await user.tab();
    expect(screen.getByLabelText("Comments")).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Send message" })).toHaveFocus();
  });

  it("submits the accessible contact form", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: "Thank you. Your message has been sent." }),
    });

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText("Name"), "Ananya Rao");
    await user.type(screen.getByLabelText("Email"), "ananya@example.com");
    await user.type(screen.getByLabelText("Comments"), "We would like to discuss a clean-energy project.");
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/contact"),
      expect.objectContaining({ method: "POST" }),
    );
    expect(await screen.findByRole("status")).toHaveTextContent("Thank you. Your message has been sent.");
  });
});
