import Image from "next/image";
import SearchBar from "./ui/search-bar";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[280px] md:h-[565px]">
        <Image
          src="/assets/images/hero-picture.svg"
          alt="Epicure background"
          fill
          priority
          className="object-cover object-[75%_center]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full border border-black/15 bg-white/88 px-3 py-3">
            <h1 className="text-center font-light leading-snug tracking-widest">
              Epicure works with the top{" "}
              <span className="block md:inline">
                chef restaurants in Tel Aviv
              </span>
            </h1>

            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
