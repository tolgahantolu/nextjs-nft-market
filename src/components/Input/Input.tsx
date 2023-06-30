import { FiSearch } from "react-icons/fi";
const Input = () => {
  return (
    <form className="relative">
      <input
        data-testid="search-input"
        type="text"
        className="rounded-3xl border border-zinc-300 pl-4 pr-9 outline-none w-60 py-2 text-sm bg-transparent placeholder-zinc-300"
        placeholder="Search"
      />
      <button
        data-testid="search-icon"
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default Input;
