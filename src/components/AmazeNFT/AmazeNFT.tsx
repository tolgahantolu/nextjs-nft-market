import { CgTranscript } from "react-icons/cg";
import { IoBarChart } from "react-icons/io5";

const AmazeNFT = () => {
  return (
    <div className="mt-[150px] bg-slate-400/70">
      <div className="flex justify-between items-start gap-8 py-[75px]">
        <h1
          data-testid="amazeNFT"
          className="flex-1 font-extrabold text-3xl uppercase"
        >
          The amazing NFT art of the world here
        </h1>
        <div className="ml-3 flex-1 flex justify-start items-start gap-3">
          <span>
            <CgTranscript size={25} />
          </span>
          <div>
            <h4
              data-testid="fast-transaction"
              className="text-lg font-semibold"
            >
              Fast Transaction
            </h4>
            <p className="text-theme-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-start items-start gap-3">
          <span>
            <IoBarChart size={25} />
          </span>
          <div>
            <h4
              data-testid="growth-transaction"
              className="text-lg font-semibold"
            >
              Growth Transaction
            </h4>
            <p className="text-theme-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazeNFT;
