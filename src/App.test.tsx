import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "./App";
import { posts } from "./data/posts";

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Blog app", () => {
  it("shows one card per post on /posts", () => {
    renderAt("/posts");
    expect(screen.getAllByRole("article")).toHaveLength(posts.length);
  });

  it("likes one post without changing the others", async () => {
    const user = userEvent.setup();
    renderAt("/posts");

    const likeButtons = screen.getAllByRole("button", { name: /like/i });
    await user.click(likeButtons[0]);

    expect(likeButtons[0]).toHaveAttribute("aria-pressed", "true");
    expect(likeButtons[1]).toHaveAttribute("aria-pressed", "false");
  });

  it("opens a post by its id and shows a message for a missing id", () => {
    renderAt("/posts/999");
    expect(screen.getByRole("heading", { name: "Post not found" })).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown URL", () => {
    renderAt("/banana");
    expect(screen.getByRole("heading", { name: /404/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to Home" })).toBeInTheDocument();
  });
});