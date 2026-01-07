import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./hamburger-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white md:px-30 md:py-1">
      <nav className="flex items-center justify-between px-5 h-11.5 contain-content">
        <HamburgerMenu />
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center justify-center pl-20 md:pl-0 "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full ">
              <Image
                src="/assets/icons/epicure-icon.svg"
                alt="Epicure logo"
                width={34}
                height={34}
                className="md:w-7 md:h-8"
              />
            </div>
          </Link>

          <h1 className="hidden md:block md:pl-2 md:text-[27px]">EPICURE</h1>

          <Link href="/restaurants" className="hidden md:block md:pl-6 hover:opacity-70 ">
            Restaurants
          </Link>

          <Link href="/chefs" className="hidden md:block md:pl-6 hover:opacity-70 ">
            Chefs
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <button type="button" aria-label="Search">
            <Image
              src="/assets/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </button>

          <button type="button" aria-label="Account">
            <Image
              src="/assets/icons/profile-icon.svg"
              alt="Account"
              width={20}
              height={20}
            />
          </button>

          <button type="button" aria-label="Cart">
            <Image
              src="/assets/icons/shopping-bag-icon.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
