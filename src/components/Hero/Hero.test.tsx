import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("should have a explore button", () => {
    const exploreBtn = screen.getByTestId("explore-button");
    expect(exploreBtn).toBeInTheDocument();
  });

  test("should have a title", () => {
    const title = screen.getByTestId("hero-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Discover, and collect Digital Art NFTs/i);
  });
});
