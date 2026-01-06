import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="mt-4 w-full">
      <label className="flex items-center gap-3 rounded-sm border border-black/55 px-3 py-1">
        <Image
          src="/assets/icons/search-icon.svg"
          alt="Search"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          className="px-1.5 w-full bg-transparent tracking-wider"
        />
      </label>
    </form>
  );
};

export default SearchBar;
