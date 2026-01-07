import Image from "next/image";
import { CardProps } from "@/types/card.type";
import { cx } from "class-variance-authority";

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
  const isChef = variant === "chef";
  const isShefRestaurant = variant === "restaurant-chef";

  const articleClassName = cx(
    "flex flex-col overflow-hidden bg-white snap-start",
    isChef
      ? "min-w-[180px]"
      : "min-w-[235px] w-[180px] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
  );

  const imageWrapperClassName = cx(
    "relative w-full overflow-hidden",
    isChef ? "h-[265px] bg-black" : "h-[150px]"
  );

  const imageClassName = cx(
    "object-cover",
    isChef && "w-full h-full object-contain object-top grayscale"
  );

  const titleClassName = cx(isShefRestaurant && "pb-6");

  return (
    <article className={articleClassName}>
      <div className={imageWrapperClassName}>
        <Image src={imageSrc} alt={imageAlt} fill className={imageClassName} />
        {isChef && (
          <div className="absolute bottom-0 left-0 w-full bg-white/80 py-3 text-center">
            <h3 className="tracking-[0.18em]">{title}</h3>
          </div>
        )}
      </div>

      {!isChef && (
        <div className="flex flex-1 flex-col justify-between bg-[#f6efe1] px-3 pt-2.5">
          <div>
            <h3 className={titleClassName}>{title}</h3>

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
              <Image
                src={dieteryType}
                alt={dieteryType}
                width={30}
                height={24}
              />
            )}

            {price && (
              <div className="mt-2 flex w-9 justify-between pb-2">
                <Image
                  src="/assets/icons/shekel-icon.svg"
                  alt="₪"
                  width={10}
                  height={20}
                  className="mt-2"
                />
                <p className="font-normal">{price}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
