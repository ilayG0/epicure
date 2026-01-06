import { Restaurant } from "@/types/restaurant.type";

export const restaurants :  Restaurant[]= [
  {
    id: 1,
    name: "Claro",
    imageUrl: "/assets/images/claro.png",
    chef: "Ran Shmueli",
    rating: 4,
  },
  {
    id: 2,
    name: "Lumina",
    imageUrl: "/assets/images/lumina.png",
    chef: "Meir Adoni",
    rating: 3,
  },
  {
    id: 3,
    name: "Tiger Lilly",
    imageUrl: "/assets/images/tiger-lily.png",
    chef: "Yanir Green",
    rating: 4,
  },
];

export const signatureDishes = [
  {
    id: 1,
    name: "Pad Ki Mao",
    imageUrl: "/assets/images/pad-ki-mao.png",
    dietaryTagId: [1],
    ingredients:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    price: 88,
  },
  {
    id: 2,
    name: "Garganzo Frito",
    imageUrl: "/assets/images/garbanzo-frito.png",
    dietaryTagId: [1],
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    price: 98,
  },
  {
    id: 3,
    name: "Smoked Pizza",
    imageUrl: "/assets/images/smoked-pizza.png",
    dietaryTagId: [3],
    ingredients: `Basil dough, cashew "butter", demi-glace, bison & radish`,
    price: 65,
  },
];

export const icons = [
  { id: 1, name: "Spicy", imageUrl: "/assets/icons/spicy.png" },
  { id: 2, name: "Vegitarian", imageUrl: "/assets/icons/vegitarian.png" },
  { id: 3, name: "Vegan", imageUrl: "/assets/icons/vegan.png" },
];

export const chefs = [
  {
    id: 1,
    name: "Yossi Shitrit",
    description:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    restaurants: [4, 5, 6],
  },
];

export const about = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
 turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.
`;
