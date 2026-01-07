"use client";

import Image from "next/image";

export default function AboutEpicure({
  about,
}: {
  about: string;
}) {
  return (
    <section className="mt-10 px-4 bg-epicure pt-7 pb-7">
      <div className="flex flex-col items-start gap-2">
        <Image
          src="/assets/images/epicure-logo.svg"
          alt="Epicure logo"
          width={100}
          height={95}
        />
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <Image
          src="/assets/images/google-btn.svg"
          alt="Epicure logo"
          width={180}
          height={55}
        />
        <Image
          src="/assets/images/apple-btn.svg"
          alt="Epicure logo"
          width={180}
          height={55}
        />
      </div>
      <div className="mt-12">
        <h2 className=" uppercase tracking-[0.2em] pb-5 ">
          About us:
        </h2>
        <p className="text-[18px] leading-[30px] tracking-widest">
          {about}
        </p>
      </div>
    </section>
  );
}
