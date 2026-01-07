"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="flex h-4.5 w-4.5 flex-col justify-between"
      >
        <span className="block h-px w-full bg-black" />
        <span className="block h-px w-full bg-black" />
        <span className="block h-px w-full bg-black" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="flex flex-col items-start px-4 py-4 gap-6">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex h-6 w-6 items-center justify-center"
            >
              <Image
                src="/assets/icons/x-icon.svg"
                alt="Close"
                width={20}
                height={20}
              />
            </button>
            <Link
              href="/restaurants"
              className="block"
              onClick={() => setIsOpen(false)}
            >
             <h1> Restaurants</h1>
            </Link>
            <Link
              href="/chefs"
              className="block"
              onClick={() => setIsOpen(false)}
            >
              Chefs
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
