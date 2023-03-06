import { Catalog } from "@/types/catalog.type";

import fst from "@/assets/media/image 4.jpg";
import sec from "@/assets/media/image 5.jpg";
import third from "@/assets/media/image 2.jpg";
import fourth from "@/assets/media/image 3.jpg";

export const catalog_db: Catalog[] = [
  {
    id: 1,
    image: fst,
    name: "БРЮКИ",
  },
  {
    id: 2,
    image: sec,
    name: "ВЕРХНЯЯ ОДЕЖДА",
  },
  {
    id: 3,
    image: third,
    name: "ДЖИНСЫ",
  },
  {
    id: 4,
    image: fourth,
    name: "ТУФЛИ",
  },
];
