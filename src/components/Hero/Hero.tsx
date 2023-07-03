import Image from "next/image";
import { IHero } from "../../../typescript";
import { DUMMY_HERO_DATA } from "../../constants";
import { Button } from "../index";

const Hero = () => {
  return (
    <div className="flex justify-between pt-[100px]">
      <div className="flex-1">
        <h1
          data-testid="hero-title"
          className="uppercase mb-4 font-extrabold text-[40px] leading-[45px]"
        >
          discover, and collect digital art nfts
        </h1>
        <p className="text-theme-gray mb-8 text-xl leading-8">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <span data-testid="explore-button">
          <Button
            bgColor="theme-dark-purple"
            textColor="theme-white"
            borderColor="theme-dark-purple"
            content="Explore Now"
          />
        </span>
        <div className="flex items-center justify-start gap-4 mt-8">
          {DUMMY_HERO_DATA.map(({ name, data }: IHero, i: React.Key) => (
            <p key={i} className="flex flex-col">
              <span className="font-bold text-4xl tracking-tighter">
                {data}
              </span>
              <span className="block capitalize text-theme-gray text-sm -mt-2">
                {name}
              </span>
            </p>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="relative">
          <div className="absolute right-12 z-30 scale-105">
            <Image
              src="/unsplash-1.png"
              width={400}
              height={440}
              alt="unsplash image 1"
              className="relative"
            />
            <div className="absolute top-5 left-6 text-white ">
              <p className="font-medium text-xl mb-1">Abstr Gradient NFT</p>
              <div className="flex items-center gap-2">
                <Image src="/avatar.png" width={32} height={32} alt="avatar" />
                <span>Arkhan17</span>
              </div>
            </div>
            <Image
              src="/auction.png"
              width={100}
              height={100}
              alt="auction"
              className="absolute bottom-32 -left-12"
            />
            <Image
              src="/rectangle.png"
              width={350}
              height={75}
              alt="rectangle"
              className="absolute bottom-5 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="absolute -right-2 z-20 scale-90">
            <Image
              src="/unsplash-2.png"
              width={400}
              height={440}
              alt="unsplash image 2"
            />
          </div>
          <div className="absolute -right-14 z-10 scale-75">
            <Image
              src="/unsplash-3.png"
              width={400}
              height={440}
              alt="unsplash image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
