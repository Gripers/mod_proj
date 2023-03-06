import { StaticImageData } from "next/image";

type Size = {
  id: number;
  rus: number;
  eur: number;
};

type Color = {
  id: number;
  color: string;
};

export interface Item {
  id: string;
  price: number;
  quantity: number;
  itemTotal?: number;
  [key: string]: any;
}

export interface Product extends Item {
  image: StaticImageData;
  name: string;
  title: string;
  sizes: Size[];
  colors: Color[];
}
