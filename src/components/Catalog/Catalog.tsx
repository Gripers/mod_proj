import styles from "./Catalog.module.scss";

import dynamic from "next/dynamic";

import { catalog_db } from "@/db/catalog.db";
import { default_carousel_config } from "@/carousel-config/default-carousel.config";
import Card from "../Card/Card";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Catalog = () => {
  return (
    <section id="container" className={styles.cnt}>
      <h1>КАТАЛОГ</h1>
      <OwlCarousel id="cus_carousel" {...default_carousel_config}>
        {catalog_db?.map((c) => (
          <Card key={c?.id} obj={c} type="category" />
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Catalog;
