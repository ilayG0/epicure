import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="mt-4 w-full ">
      <label className="flex items-center gap-3 rounded-sm border border-black/55 px-3 py-1 md:h-[48px]">
        <Image
          src="/assets/icons/search-icon.svg"
          alt="Search"
          width={32}
          height={32}
          className="w-5 h-5 md:w-8 md:h-8"
        />
        <input
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          className="px-1.5 w-full bg-transparent tracking-wider md:text-[24px]"
        />
      </label>
    </form>
  );
};

export default SearchBar;
