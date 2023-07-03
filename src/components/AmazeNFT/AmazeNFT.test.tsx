import { render, screen } from "@testing-library/react";
import AmazeNFT from "./AmazeNFT";

describe("AmazeNFT Component", () => {
  beforeEach(() => {
    render(<AmazeNFT />);
  });

  test("should have a title", () => {
    const amazeNFT = screen.getByTestId("amazeNFT");
    expect(amazeNFT).toHaveTextContent(
      /The amazing NFT art of the world here/i
    );
  });

  test("should have a 'Fast Transaction' text", () => {
    const fastTransaction = screen.getByTestId("fast-transaction");
    expect(fastTransaction).toHaveTextContent(/fast Transaction/i);
  });

  test("should have a 'Growth Transaction' text", () => {
    const growthTransaction = screen.getByTestId("growth-transaction");
    expect(growthTransaction).toHaveTextContent(/growth transaction/i);
  });
});
