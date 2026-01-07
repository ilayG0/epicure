import { chefs, restaurants } from "@/app/api/mocDB";

export async function GET() {
  const chefsWithRestaurants = chefs.map((chef) => ({
    ...chef,
    restaurants: restaurants.filter((r) => chef.restaurants.includes(r.id)),
  }));

  return Response.json(chefsWithRestaurants[0]);
}
