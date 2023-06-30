import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { IButton } from "../../../typescript";

const DUMMY_BUTTON_PROPS: IButton = {
  bgColor: "#3D00B7",
  textColor: "#fff",
  borderColor: "#3D00B7",
  content: "test",
};

describe("Button Component", () => {
  beforeEach(() => {
    render(<Button {...DUMMY_BUTTON_PROPS} />);
  });

  test("button have a text", () => {
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("test");
  });
});
