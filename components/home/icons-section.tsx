
import Image from "next/image";
import {Icon} from "@/types/icon.type";

export default function IconsSection({ icons }: { icons: Icon[] }) {
  return (
    <section className="mt-10 px-4 bg-epicure py-6">
      <h2 className="text-center font-light uppercase tracking-widest">
        The meaning of our icons:
      </h2>

      <div className="mt-8 flex flex-col items-center gap-10">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center gap-8"
          >
            <Image
              src={icon.imageUrl}
              alt={icon.name}
              width={60}
              height={55}
            />
            <p className="font-extralight text-[16px] leading-[20px] tracking-[1.97px]">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
