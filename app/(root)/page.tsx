import Hero from "@/components/home/hero";
import PopularRestaurants from "@/components/home/popular-restaurants-section";
import { Restaurant } from "@/types/restaurant.type";

async function getRestaurants() :Promise<Restaurant[]>{
  const res = await fetch("http://localhost:3000/api/restaurants", {
    cache: "no-store",
  });
  return res.json();
}
const Page = async () => {
  const restaurants: Restaurant[] = await getRestaurants();
  return (
    <>
      <Hero />
      <PopularRestaurants restaurants={restaurants} />
    </>
  );
};

export default Page;
