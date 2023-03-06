import styles from "./Card.module.scss";

import Image from "next/image";

import { Catalog } from "@/types/catalog.type";
import { Product } from "@/types/product.type";

const Card = ({ obj, type }: { obj: any; type: string }) => {
  return type === "category" ? (
    <div className={styles.card__category}>
      <div className={styles.head}>
        <Image src={obj?.image} alt="" />
      </div>
      <div className={styles.body}>
        <p>{obj?.name}</p>
      </div>
    </div>
  ) : (
    <div className={styles.card__cloth}>
      <div className={styles.head}>
        <Image src={obj?.image} alt="" />
      </div>
      <div className={styles.body}>
        <p>{obj?.title}</p>
        <h4>{obj?.name}</h4>
        <h3>{obj?.price} UZS</h3>
      </div>
    </div>
  );
};

export default Card;
