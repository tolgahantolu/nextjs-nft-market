import { render, screen } from "@testing-library/react";
import CollectionNFT from "./CollectionNFT";

describe("CollectionNFT Component", () => {
  beforeEach(() => {
    render(<CollectionNFT />);
  });

  test("should have a 'collection featured nfts' text and the text should be in the document.", () => {
    const collectionNFT = screen.getByTestId("collection-nft");
    expect(collectionNFT).toBeInTheDocument();
    expect(collectionNFT).toHaveTextContent(/Collection Featured NFTs/i);
  });
});
