import { Product } from "@/types/product.type";

import fst from "@/assets/media/image 4.jpg";
import sec from "@/assets/media/image 5.jpg";
import third from "@/assets/media/image 2.jpg";
import fourth from "@/assets/media/image 3.jpg";

export const sneakers_db: Product[] = [
  {
    id: "1",
    image: fst,
    title: "JADED LONDON",
    name: "EXCLUSIVEPANELLED WIDE LEG — Jogginghose",
    price: 98_313_545,
    sizes: [
      {
        id: 1,
        rus: 34,
        eur: 34,
      },
      {
        id: 2,
        rus: 35,
        eur: 35,
      },
    ],
    colors: [
      {
        id: 1,
        color: "white",
      },
      {
        id: 2,
        color: "black",
      },
      {
        id: 3,
        color: "green",
      },
    ],
    quantity: 1,
  },
  {
    id: "2",
    image: sec,
    title: "JADED LONDON",
    name: "EXCLUSIVEPANELLED WIDE LEG — Jogginghose",
    price: 98_313_545,
    sizes: [
      {
        id: 1,
        rus: 34,
        eur: 34,
      },
      {
        id: 2,
        rus: 35,
        eur: 35,
      },
    ],
    colors: [
      {
        id: 1,
        color: "white",
      },
      {
        id: 2,
        color: "black",
      },
      {
        id: 3,
        color: "green",
      },
    ],
    quantity: 1,
  },
  {
    id: "3",
    image: third,
    title: "JADED LONDON",
    name: "EXCLUSIVEPANELLED WIDE LEG — Jogginghose",
    price: 98_313_545,
    sizes: [
      {
        id: 1,
        rus: 34,
        eur: 34,
      },
      {
        id: 2,
        rus: 35,
        eur: 35,
      },
    ],
    colors: [
      {
        id: 1,
        color: "white",
      },
      {
        id: 2,
        color: "black",
      },
      {
        id: 3,
        color: "green",
      },
    ],
    quantity: 1,
  },

  {
    id: "4",
    image: fourth,
    title: "JADED LONDON",
    name: "EXCLUSIVEPANELLED WIDE LEG — Jogginghose",
    price: 98_313_545,
    sizes: [
      {
        id: 1,
        rus: 34,
        eur: 34,
      },
      {
        id: 2,
        rus: 35,
        eur: 35,
      },
    ],
    colors: [
      {
        id: 1,
        color: "white",
      },
      {
        id: 2,
        color: "black",
      },
      {
        id: 3,
        color: "green",
      },
    ],
    quantity: 1,
  },
];
