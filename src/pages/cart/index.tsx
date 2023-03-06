import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";

import { useCart } from "react-use-cart";
import Image from "next/image";
import Link from "next/link";

import GoBack from "@/components/GoBack/GoBack";

import cart_ico from "@/assets/media/cart_ico.svg";
import rubbish_ico from "@/assets/media/rubbish.svg";

const Cart = () => {
  const [arr, setArr] = useState<boolean>(false);
  const { isEmpty, items, updateItemQuantity, cartTotal, removeItem } =
    useCart();

  useEffect(() => {
    setArr(true);
  }, []);

  return (
    <div id="container" className={styles.cart}>
      <GoBack />
      <div className={styles.content}>
        <h1>КОРЗИНА</h1>
        {arr ? (
          isEmpty ? (
            <div className={styles.empty}>
              <Image src={cart_ico} alt="" />
              <p>Здесь пока пусто</p>
              <p>Вы пока ничего не добавили в корзину</p>
              <div className={styles.btns}>
                <button>ВОЙТИ</button>
                <button>ПРОДОЛЖИТЬ ПОКУПКИ</button>
              </div>
            </div>
          ) : (
            <div className={styles.filled}>
              <div className={styles.left}>
                {items?.map((item) => (
                  <div key={item?.id} className={styles.card}>
                    <div className={styles.head}>
                      <Image src={item?.image} alt="" />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.flex}>
                        <div>
                          <p>{item?.name}</p>
                          <p>{item?.title}</p>
                        </div>
                        <div>
                          <button
                            className={styles.delete__btn}
                            onClick={() => removeItem(item?.id)}
                          >
                            <Image src={rubbish_ico} alt="" />
                          </button>
                        </div>
                      </div>
                      <p>{item?.category}</p>
                      <p>{item?.size}</p>
                      <p>{item?.color}</p>
                      <div className={styles.flex}>
                        <div>
                          <h2>{item?.price} UZS</h2>
                        </div>
                        <div className={styles.counter}>
                          <button
                            onClick={() =>
                              updateItemQuantity(item?.id, item?.quantity! + 1)
                            }
                          >
                            +
                          </button>
                          <span>{item?.quantity}</span>
                          <button
                            onClick={() =>
                              updateItemQuantity(item?.id, item?.quantity! - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.right}>
                <p>Всего {cartTotal} UZS</p>
                <p>Величая налоги за исключением доставки</p>
                <Link href="/order">КУПИТЬ</Link>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
