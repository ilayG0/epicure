import Card from "@/components/ui/card";
import { Dish } from "@/types/dish.type";
import { Restaurant } from "@/types/restaurant.type";
import Image from "next/image";

function isDish(item: Dish | Restaurant): item is Dish {
  return "ingredients" in item;
}

export default function CarouselSection({
  items,
}: {
  items: Dish[] | Restaurant[];
}) {
  let isDishes = false;
  let dishesToRender: Dish[] = [];
  let restaurantsToRender: Restaurant[] = [];

  if (!items.length) return null;

  if (isDish(items[0])) {
    isDishes = true;
    dishesToRender = items as Dish[];
  } else {
    restaurantsToRender = items as Restaurant[];
  }

  return (
    <section className="mt-10 px-4 pb-4">
      <h2 className="font-light uppercase tracking-widest">
        {isDishes ? "Signature Dish Of:" : "Popular restaurant in epicure:"}
      </h2>

      <div className="-mx-4 mt-4 overflow-x-auto pb-3">
        <div className="flex gap-6 px-4 snap-x snap-mandatory">
          {isDishes &&
            dishesToRender.map((dish) => (
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
          {!isDishes &&
            restaurantsToRender.map((restaurant) => (
              <Card
                key={restaurant.id}
                variant="restaurant"
                imageSrc={restaurant.imageUrl}
                imageAlt={restaurant.name}
                title={restaurant.name}
                subtitle={restaurant.chef}
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
