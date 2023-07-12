import { render, screen } from "@testing-library/react";
import TopCollections from "./TopCollections";

describe("TopCollections Component", () => {
  beforeEach(() => {
    render(<TopCollections />);
  });

  test("should have a 'top collections over' text and the text should be in the document.", () => {
    const topCollections = screen.getByTestId("top-collections");
    expect(topCollections).toBeInTheDocument();
    expect(topCollections).toHaveTextContent(/top collections over/i);
  });
});
