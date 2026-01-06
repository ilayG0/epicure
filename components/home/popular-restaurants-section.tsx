import Card from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant.type";
import Image from "next/image";

export default function PopularRestaurants({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  return (
    <section className="mt-10 px-4">
      <h2 className="font-light uppercase tracking-widest">
        Popular restaurant in epicure:
      </h2>

      <div className="-mx-4 mt-4 overflow-x-auto pb-3">
        <div className="flex gap-6 px-4 snap-x snap-mandatory">
          {restaurants.map((restaurant) => (
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
