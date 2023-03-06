import styles from "./Product.module.scss";

import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";

import { sneakers_db } from "@/db/sneakers.db";
import { Product } from "@/types/product.type";

const Product = () => {
  const { query } = useRouter();
  const { addItem, getItem, removeItem } = useCart();

  const singleProduct = (): Product => {
    return sneakers_db?.find((s) => s?.id === query?.id)!;
  };

  const addToCart = () => addItem(singleProduct());
  const removeFromCart = () => removeItem(singleProduct()?.id);

  return (
    <div id="container" className={styles.product}>
      <div className={styles.top__wrapper}>
        <div className={styles.left}>
          <Image src={singleProduct()?.image} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <p>{singleProduct()?.title}</p>
            <h4>{singleProduct()?.name}</h4>
            <h3>{singleProduct()?.price} UZS</h3>
            <div className={styles.sizes}>
              <h4>РАЗМЕРЫ</h4>
              <div className={styles.wrapper}>
                <button>
                  RUS <br /> EUR
                </button>
                {singleProduct()?.sizes?.map((size) => (
                  <button key={size?.id}>
                    {size?.rus} <br /> {size?.eur}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.color}>
              <h4>ЦВЕТ</h4>
              <div className={styles.wrapper}>
                {singleProduct()?.colors?.map((color) => (
                  <input
                    key={color?.id}
                    type="radio"
                    name={color?.color}
                    style={{ backgroundColor: color?.color }}
                  />
                ))}
              </div>
            </div>
            {getItem(String(singleProduct()?.id)) ? (
              <button className={styles.cart__btn} onClick={removeFromCart}>
                УБРАТЬ ИЗ КОРЗИНЫ
              </button>
            ) : (
              <button className={styles.cart__btn} onClick={addToCart}>
                ДОБАВИТЬ В КОРЗИНУ
              </button>
            )}
          </div>
          <hr />
          <div className={styles.bottom}>
            <div className={styles.order}>
              <div>
                <p>
                  <b>СТАНДАРТНАЯ </b>ДОСТАВКА
                </p>
                <p>
                  <b>БЕСПЛАТНО </b>2-4 рабочих дня
                </p>
              </div>
              <div>
                <p>
                  <b>ЭКСПРЕСС </b>ДОСТАВКА
                </p>
                <p>
                  <b>70_000 UZS </b>1-2 рабочих дня
                </p>
              </div>
            </div>
            <hr />
            <div className={styles.data__wrapper}>
              <div>
                <p>ЦВЕТ</p>
                <p>Фиолетовый</p>
              </div>
              <div>
                <p>МАТЕРИАЛ</p>
                <p>Джерси</p>
              </div>
              <div>
                <p>СОСТАВ</p>
                <p>Полиэстер 100%</p>
              </div>
              <div>
                <p>УХОД</p>
                <p>Ручная стирка</p>
              </div>
              <div>
                <p>СТРАНА</p>
                <p>Италия</p>
              </div>
            </div>
            <div className={styles.questions}>
              <p>ОСТАЛИСЬ ВОПРОСЫ?</p>
              <button>НАПИСАТЬ НАМ</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom__wrapper}></div>
    </div>
  );
};

export default Product;
