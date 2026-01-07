import Card from "@/components/ui/card";
import { Chef } from "@/types/chef.type";
import Image from "next/image";

export default function ChefOfTheWeek({ chef }: { chef: Chef }) {
  if (!chef) return null;

  const firstName = chef.name?.split(" ")[0] ?? "Chef";
  const chefRestaurants = chef.restaurants ?? [];

  return (
    <section className="mt-10 px-4">
      <h2 className="text-[18px] pb-4 font-light uppercase tracking-[0.2em]">
        Chef of the week:
      </h2>

      <article className="mt-3 mb-2 flex flex-col overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <Card
          key={chef.id}
          variant="chef"
          imageSrc={chef.image}
          imageAlt={chef.name}
          title={chef.name}
        />
      </article>

      <p className="text-[18px] pt-5 leading-[30px] tracker-widest">
        {chef.description}
      </p>

      <div className="mt-8">
        <h3 className="text-[16px] font-light uppercase tracking-[0.2em]">
          {firstName}&apos;s restaurants
        </h3>

        <div className="-mx-4 mt-4 overflow-x-auto pb-3">
          <div className="flex gap-4 px-4 snap-x snap-mandatory">
            {chefRestaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                variant="restaurant-chef"
                imageSrc={restaurant.imageUrl}
                imageAlt={restaurant.name}
                title={restaurant.name}
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
      </div>
    </section>
  );
}
