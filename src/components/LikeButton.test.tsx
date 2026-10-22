import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LikesProvider } from "../context/LikesContext";
import LikeButton from "./LikeButton";

describe("LikeButton", () => {
  it("changes from Like to Liked and back when clicked", async () => {
    const user = userEvent.setup();
    render(
      <LikesProvider>
        <LikeButton postId={1} />
      </LikesProvider>,
    );

    const button = screen.getByRole("button", { name: /like/i });
    expect(button).toHaveTextContent("Like");
    expect(button).toHaveAttribute("aria-pressed", "false");

    await user.click(button);
    expect(button).toHaveTextContent("Liked");
    expect(button).toHaveAttribute("aria-pressed", "true");

    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
  });
});