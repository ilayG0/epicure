import Image from "next/image";
import {CardProps} from "@/types/card.type";

export default function Card({
  variant,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  price,
  rating,
}: CardProps) {
  if (variant === "chef") {
    return (
      <article
        className={`flex flex-col overflow-hidden bg-white`}
      >
        <div className="relative h-44 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
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
    <article
      className={`w-[180px] overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]`}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#f6efe1] px-3 py-3">
        <h3 className="text-lg font-medium">{title}</h3>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-700">{subtitle}</p>
        )}

        {variant === "dish" && description && (
          <p className="mt-2 text-[11px] leading-snug text-gray-700">
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
        {price && (
          <div className="mt-2 text-xs text-gray-800">
            {price}
          </div>
        )}
      </div>
    </article>
  );
}
