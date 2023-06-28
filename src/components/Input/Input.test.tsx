import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  beforeEach(() => {
    render(<Input />);
  });

  test("data should update on change", () => {
    const searchIcon = screen.getByTestId(/search-icon/i);
    fireEvent.click(searchIcon);

    const input: HTMLInputElement = screen.getByTestId(/search-input/i);
    expect(input.value).toEqual("");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toEqual("test");
  });
});
