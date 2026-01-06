import Card from "@/components/ui/card";
import { Dish } from "@/types/dish.type";
import Image from "next/image";

export default function SignatureDishes({
  dishes,
}: {
  dishes: Dish[];
}) {
  return (
    <section className="mt-10 px-4">
      <h2 className="font-light uppercase tracking-widest">
        Signature Dish Of:
      </h2>

      <div className="-mx-4 mt-4 overflow-x-auto pb-3">
        <div className="flex gap-6 px-4 snap-x snap-mandatory">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              variant="dish"
              imageSrc={dish.imageUrl}
              imageAlt={dish.name}
              title={dish.name}
              description={dish.ingredients}
              price={dish.price}
              dieteryType={dish.dietaryTag}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-4 flex items-center gap-2 text-sm tracking-[0.18em]"
      >
        <p className="font-normal">All Restaurants</p>
        <Image
          src="/assets/icons/arrow-icon.svg"
          alt=">>"
          width={22}
          height={22}
        />
      </button>
    </section>
  );
}
