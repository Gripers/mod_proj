import styles from "./Sneakers.module.scss";

import dynamic from "next/dynamic";

import { default_carousel_config } from "@/carousel-config/default-carousel.config";
import { sneakers_db } from "@/db/sneakers.db";
import Card from "../Card/Card";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Sneakers = () => {
  return (
    <section id="container" className={styles.sneakers}>
      <h1>СНИКЕРСЫ</h1>
      <OwlCarousel id="cus_carousel" {...default_carousel_config}>
        {sneakers_db?.map((s) => (
          <Card key={s?.id} obj={s} type="cloth" />
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Sneakers;
