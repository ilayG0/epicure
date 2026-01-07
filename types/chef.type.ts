import { Restaurant } from "./restaurant.type";

export type Chef = {
  id: number;
  name: string;
  image: string;
  description: string;
  restaurants: Restaurant[]; 
};