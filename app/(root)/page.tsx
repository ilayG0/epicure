import Hero from "@/components/home/hero";
import PopularRestaurants from "@/components/home/popular-restaurants-section";
import { Restaurant } from "@/types/restaurant.type";
import { Dish } from "@/types/dish.type";
import SignatureDishes from "@/components/home/signature-dishes-section";

// move to a help function service 
async function getRestaurants() :Promise<Restaurant[]>{
  const res = await fetch("http://localhost:3000/api/restaurants", {
    cache: "no-store",
  });
  return res.json();
}

async function getSignatureDishes() :Promise< Dish[]>{
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store",
  });
  return res.json();
}

const Page = async () => {
  const restaurants: Restaurant[] = await getRestaurants();
  const dishes: Dish[] = await getSignatureDishes();
  return (
    <>
      <Hero />
      <PopularRestaurants restaurants={restaurants} />
      <SignatureDishes dishes={dishes}/>
    </>
  );
};

export default Page;
