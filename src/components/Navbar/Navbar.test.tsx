import { render, screen } from "@testing-library/react";
import MockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: MemoryRouterProvider });
  });

  test("the logo should display on the screen", () => {
    const logo = screen.getByTestId("logo");

    expect(logo).toHaveTextContent("nfters");
  });

  test("text should redirect to the relevant URL", async () => {
    const marketplacePage = screen.getByText(/marketplace/i);
    expect(marketplacePage).toHaveTextContent(/marketplace/i);

    const user = userEvent.setup();
    await user.click(marketplacePage);
    expect(MockRouter.pathname).toEqual("/marketplace");
  });
});
