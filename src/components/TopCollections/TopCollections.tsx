import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import Button from "../Button/Button";

const TopCollections = () => {
  return (
    <div className="w-full h-[640px] flex justify-between items-center gap-10 py-[100px] px-[120px]">
      <div className="w-3/4 h-full grid grid-rows-4 grid-cols-4 gap-4">
        {/* left side highlight item */}
        <div className="relative w-full h-full col-span-2 row-span-4 grid grid-cols-1 grid-rows-4">
          <Image
            src={"/top-collection/top-collection-1.png"}
            width={400}
            height={424}
            alt="top collection highlight"
            className="w-full h-full col-span-1 row-span-3 object-cover"
          />
          <div className="col-span-1 row-span-1 flex justify-between items-center">
            <div className="flex justify-start items-center gap-1">
              <Image
                src={"/avatar.png"}
                width={48}
                height={48}
                alt="avatar"
                className="object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold capitalize">
                  the futr abstr
                </span>
                <span className="text-sm font-medium text-theme-gray">
                  10 in stock
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-theme-gray capitalize">
                highest bid
              </span>
              <span className="text-lg font-bold text-black/80 uppercase flex items-center gap-1">
                <FaEthereum />
                0.25 eth
              </span>
            </div>
          </div>
        </div>

        {/* left side items */}
        <div className="w-full col-span-2 row-span-4 grid grid-rows-3 grid-cols-5 gap-4">
          {/* item */}
          <Image
            src={"/top-collection/top-collection-4.png"}
            width={147}
            height={147}
            alt="top collection item"
            className="w-full h-full row-span-1 col-span-2 object-cover"
          />
          <div className="row-span-1 col-span-3">
            <h4 className="text-xl font-semibold capitalize">the futr abstr</h4>
            <div className="flex justify-between items-center my-2">
              <Image
                src={"/avatar.png"}
                width={34}
                height={34}
                alt="avatar"
                className="object-cover"
              />
              <span className="text-sm border border-green-500 rounded-md text-green-500 px-2 py-1 uppercase flex items-center gap-1">
                <FaEthereum />
                0.25 eth
              </span>
              <span className="text-sm text-theme-gray">1 of 8</span>
            </div>
            <Button
              content="Place a bid"
              textColor="theme-dark-purple"
              borderColor="theme-dark-purple"
              bgColor="transparent"
            />
          </div>
          {/* item */}
          {/* item */}
          <Image
            src={"/top-collection/top-collection-3.png"}
            width={147}
            height={147}
            alt="top collection item"
            className="w-full h-full row-span-1 col-span-2 object-cover"
          />
          <div className="row-span-1 col-span-3">
            <h4 className="text-xl font-semibold capitalize">the futr abstr</h4>
            <div className="flex justify-between items-center my-2">
              <Image
                src={"/avatar.png"}
                width={34}
                height={34}
                alt="avatar"
                className="object-cover"
              />
              <span className="text-sm border border-green-500 rounded-md text-green-500 px-2 py-1 uppercase flex items-center gap-1">
                <FaEthereum />
                0.25 eth
              </span>
              <span className="text-sm text-theme-gray">1 of 8</span>
            </div>
            <Button
              content="Place a bid"
              textColor="theme-dark-purple"
              borderColor="theme-dark-purple"
              bgColor="transparent"
            />
          </div>
          {/* item */}
          {/* item */}
          <Image
            src={"/top-collection/top-collection-2.png"}
            width={147}
            height={147}
            alt="top collection item"
            className="w-full h-full row-span-1 col-span-2 object-cover"
          />
          <div className="row-span-1 col-span-3">
            <h4 className="text-xl font-semibold capitalize">the futr abstr</h4>
            <div className="flex justify-between items-center my-2">
              <Image
                src={"/avatar.png"}
                width={34}
                height={34}
                alt="avatar"
                className="object-cover"
              />
              <span className="text-sm border border-green-500 rounded-md text-green-500 px-2 py-1 uppercase flex items-center gap-1">
                <FaEthereum />
                0.25 eth
              </span>
              <span className="text-sm text-theme-gray">1 of 8</span>
            </div>
            <Button
              content="Place a bid"
              textColor="theme-dark-purple"
              borderColor="theme-dark-purple"
              bgColor="transparent"
            />
          </div>
          {/* item */}
        </div>
      </div>
      <span className="inline-block w-[2px] h-full rounded-3xl bg-[#c0c0c0]" />
      <div className="w-1/4 h-full">
        <div className="w-full h-full grid grid-rows-6 grid-cols-4 justify-between">
          <div className="row-span-1 col-span-4 max-h-20">
            <h2
              className="text-xl font-bold uppercase"
              data-testid="top-collections"
            >
              top collections over
            </h2>
            <p className="font-medium text-theme-dark-purple">Last 7 days</p>
          </div>
          {/* item 1 */}
          <div className="row-span-1 col-span-4 grid grid-rows-1 grid-cols-3 items-center gap-3 border-b border-[#c0c0c0]">
            <div className="col-span-1 flex items-center gap-2">
              <p className="font-extrabold text-xl">1</p>
              <Image
                src={"/top-collection/top-collection-avatar.png"}
                width={50}
                height={50}
                alt="collector"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="font-medium text-sm capitalize">cryptoFunks</p>
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <FaEthereum />
                </span>
                <span className="text-xs text-theme-gray">2.769.39</span>
              </div>
            </div>
            <p className="col-span-1 text-green-500 font-bold text-sm text-end">
              +26.52%
            </p>
          </div>
          {/* item 2 */}
          <div className="row-span-1 col-span-4 grid grid-rows-1 grid-cols-3 items-center gap-3 border-b border-[#c0c0c0]">
            <div className="col-span-1 flex items-center gap-2">
              <p className="font-extrabold text-xl">2</p>
              <Image
                src={"/top-collection/top-collection-avatar.png"}
                width={50}
                height={50}
                alt="collector"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="font-medium text-sm capitalize">cryptoFunks</p>
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <FaEthereum />
                </span>
                <span className="text-xs text-theme-gray">2.769.39</span>
              </div>
            </div>
            <p className="col-span-1 text-green-500 font-bold text-end">
              +26.52%
            </p>
          </div>
          {/* item 3 */}
          <div className="row-span-1 col-span-4 grid grid-rows-1 grid-cols-3 items-center gap-3 border-b border-[#c0c0c0]">
            <div className="col-span-1 flex items-center gap-2">
              <p className="font-extrabold text-xl">3</p>
              <Image
                src={"/top-collection/top-collection-avatar.png"}
                width={50}
                height={50}
                alt="collector"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="font-medium text-sm capitalize">cryptoFunks</p>
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <FaEthereum />
                </span>
                <span className="text-xs text-theme-gray">2.769.39</span>
              </div>
            </div>
            <p className="col-span-1 text-green-500 font-bold text-sm text-end">
              +26.52%
            </p>
          </div>
          {/* item 4 */}
          <div className="row-span-1 col-span-4 grid grid-rows-1 grid-cols-3 items-center gap-3 border-b border-[#c0c0c0]">
            <div className="col-span-1 flex items-center gap-2">
              <p className="font-extrabold text-xl">4</p>
              <Image
                src={"/top-collection/top-collection-avatar.png"}
                width={50}
                height={50}
                alt="collector"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="font-medium text-sm capitalize">cryptoFunks</p>
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <FaEthereum />
                </span>
                <span className="text-xs text-theme-gray">2.769.39</span>
              </div>
            </div>
            <p className="col-span-1 text-green-500 font-bold text-sm text-end">
              +26.52%
            </p>
          </div>
          {/* item 5 */}
          <div className="row-span-1 col-span-4 grid grid-rows-1 grid-cols-3 items-center gap-3 border- border-[#c0c0c0]">
            <div className="col-span-1 flex items-center gap-2">
              <p className="font-extrabold text-xl">5</p>
              <Image
                src={"/top-collection/top-collection-avatar.png"}
                width={50}
                height={50}
                alt="collector"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <p className="font-medium text-sm capitalize">cryptoFunks</p>
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <FaEthereum />
                </span>
                <span className="text-xs text-theme-gray">2.769.39</span>
              </div>
            </div>
            <p className="col-span-1 text-green-500 font-bold text-sm text-end">
              +26.52%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
