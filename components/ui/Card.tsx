import Image from "next/image";
import { CardProps } from "@/types/card.type";

export default function Card({
  variant,
  imageSrc,
  imageAlt,
  dieteryType,
  title,
  subtitle,
  description,
  price,
  rating,
}: CardProps) {
  if (variant === "chef") {
    return (
      <article className="flex flex-col overflow-hidden bg-white min-w-[180px] snap-start">
        <div className="relative h-44 w-full">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="bg-white px-4 py-2 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
          <h3 className="text-base font-light tracking-[0.18em] uppercase">
            {title}
          </h3>
        </div>
      </article>
    );
  }
  return (
    <article className="min-w-[235px] w-[180px] snap-start overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)] flex flex-col">
      <div className="relative h-[150px] w-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-[#f6efe1] px-3 pt-2.5">
        <div>
          <h3>{title}</h3>

          {subtitle && <p>{subtitle}</p>}

          {variant === "dish" && description && (
            <p className="font-extralight text-[14px] leading-[20px] tracking-[1.97px]">
              {description}
            </p>
          )}

          {typeof rating === "number" && (
            <div className="mt-2 flex gap-1 text-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < rating ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3">
          {dieteryType && (
            <Image src={dieteryType} alt={dieteryType} width={30} height={24} />
          )}

          {price && (
            <div className="mt-2 pb-2 flex w-9 justify-between">
              <Image
                src="/assets/icons/shekel-icon.svg"
                alt="₪"
                width={10}
                height={20}
                className="mt-2"
              />
              <p className="font-normal"> {price}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
