import styles from "./Woman.module.scss";

import dynamic from "next/dynamic";

import { woman_db } from "@/db/woman.db";
import { default_carousel_config } from "@/carousel-config/default-carousel.config";
import Card from "../Card/Card";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Woman = () => {
  return (
    <section id="container" className={styles.woman__catalog}>
      <h1>Bleib auf dem Laufen</h1>
      <OwlCarousel id="cus_carousel" {...default_carousel_config}>
        {woman_db?.map((w) => (
          <Card key={w?.id} obj={w} type="category" />
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Woman;
