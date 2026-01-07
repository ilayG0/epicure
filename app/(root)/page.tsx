import Hero from "@/components/home/hero";
import PopularRestaurants from "@/components/home/popular-restaurants-section";
import { Restaurant } from "@/types/restaurant.type";
import { Dish } from "@/types/dish.type";
import { Icon } from "@/types/icon.type";
import SignatureDishes from "@/components/home/signature-dishes-section";
import IconsSection from "@/components/home/icons-section";
import AboutEpicure from "@/components/home/about-section";
import ChefOfTheWeek from "@/components/home/chef-of-the-week-section";
import { Chef } from "@/types/chef.type";

// move to a help function service
async function getRestaurants(): Promise<Restaurant[]> {
  const res = await fetch("http://localhost:3000/api/restaurants", {
    cache: "no-store",
  });
  return res.json();
}

async function getSignatureDishes(): Promise<Dish[]> {
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store",
  });
  return res.json();
}

async function getIcons(): Promise<Icon[]> {
  const res = await fetch("http://localhost:3000/api/icons", {
    cache: "no-store",
  });
  return res.json();
}

async function getAbout(): Promise<string> {
  const res = await fetch("http://localhost:3000/api/about", {
    cache: "no-store",
  });
  return res.json();
}

async function getChefOfTheWeek(): Promise<Chef> {
  const res = await fetch("http://localhost:3000/api/chefs", {
    cache: "no-store",
  });
  return res.json();
}

const Page = async () => {
  const restaurants: Restaurant[] = await getRestaurants();
  const dishes: Dish[] = await getSignatureDishes();
  const icons: Icon[] = await getIcons();
  const about: string = await getAbout();
  const chef: Chef = await getChefOfTheWeek();
  
  return (
    <>
      <Hero />
      <PopularRestaurants restaurants={restaurants} />
      <SignatureDishes dishes={dishes} />
      <IconsSection icons={icons} />
      <ChefOfTheWeek chef={chef}/>
      <AboutEpicure about={about}/>
    </>
  );
};

export default Page;
