import { StaticImageData } from "next/image";

export interface Catalog {
  id: number;
  image: StaticImageData;
  name: string;
}
