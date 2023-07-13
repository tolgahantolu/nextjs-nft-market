import Image from "next/image";

const CollectionNFT = () => {
  return (
    <div className="w-full mt-[150px] bg-zinc-500/20">
      <div className="w-full h-full py-[75px] px-[120px]">
        <h1
          data-testid="collection-nft"
          className="font-extrabold text-3xl uppercase"
        >
          collection featured nfts
        </h1>
        <div className="w-full h-full mt-10 flex justify-between items-center gap-8">
          <div className="w-full h-full flex-1 grid grid-rows-4 grid-cols-4 gap-3">
            <Image
              src={"/top-collection/top-collection-1.png"}
              width={265}
              height={272}
              alt="collection item"
              className="w-full h-full row-span-3 col-span-3"
            />
            <Image
              src={"/top-collection/top-collection-2.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-3.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-4.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <div className="mt-1 w-full h-full row-span-1 col-span-4">
              <p className="text-xl font-bold capitalize">amazing collection</p>
              <div className="mt-1 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/avatar.png"}
                    width={28}
                    height={28}
                    alt="avatar"
                  />
                  <p className="text-xs font-semibold">by Arkhan</p>
                </div>
                <div className="text-sm text-theme-light-purple font-medium border border-theme-light-purple rounded-full px-3 py-2 capitalize">
                  total 54 items
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex-1 grid grid-rows-4 grid-cols-4 gap-3">
            <Image
              src={"/top-collection/top-collection-1.png"}
              width={265}
              height={272}
              alt="collection item"
              className="w-full h-full row-span-3 col-span-3"
            />
            <Image
              src={"/top-collection/top-collection-2.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-3.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-4.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <div className="mt-1 w-full h-full row-span-1 col-span-4">
              <p className="text-xl font-bold capitalize">amazing collection</p>
              <div className="mt-1 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/avatar.png"}
                    width={28}
                    height={28}
                    alt="avatar"
                  />
                  <p className="text-xs font-semibold">by Arkhan</p>
                </div>
                <div className="text-sm text-theme-light-purple font-medium border border-theme-light-purple rounded-full px-3 py-2 capitalize">
                  total 54 items
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex-1 grid grid-rows-4 grid-cols-4 gap-3">
            <Image
              src={"/top-collection/top-collection-1.png"}
              width={265}
              height={272}
              alt="collection item"
              className="w-full h-full row-span-3 col-span-3"
            />
            <Image
              src={"/top-collection/top-collection-2.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-3.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <Image
              src={"/top-collection/top-collection-4.png"}
              width={103}
              height={85}
              alt="collection item"
              className="w-full h-full row-span-1 col-span-1"
            />
            <div className="mt-1 w-full h-full row-span-1 col-span-4">
              <p className="text-xl font-bold capitalize">amazing collection</p>
              <div className="mt-1 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/avatar.png"}
                    width={28}
                    height={28}
                    alt="avatar"
                  />
                  <p className="text-xs font-semibold">by Arkhan</p>
                </div>
                <div className="text-sm text-theme-light-purple font-medium border border-theme-light-purple rounded-full px-3 py-2 capitalize">
                  total 54 items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionNFT;
