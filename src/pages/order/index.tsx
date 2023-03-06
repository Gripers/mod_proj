import { useState, useEffect } from "react";
import styles from "./Order.module.scss";

import { useCart } from "react-use-cart";
import Link from "next/link";
import Image from "next/image";

import GoBack from "@/components/GoBack/GoBack";

const Order = () => {
  const [arr, setArr] = useState<boolean>(false);
  const { items } = useCart();

  useEffect(() => {
    setArr(true);
  }, []);

  return (
    <div id="container" className={styles.order}>
      <GoBack />
      <div className={styles.content}>
        <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <form autoComplete="on">
              <div>
                <label htmlFor="name">ИМЯ</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="surname">ФАМИЛИЯ</label>
                <input type="text" id="surname" required />
              </div>
              <div>
                <label htmlFor="email">ЭЛЕКТРОННАЯ ПОЧТА</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="phone">ТЕЛЕФОН</label>
                <input type="text" id="phone" required />
              </div>
              <button type="submit">ДАЛЕЕ</button>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.head}>
              <p>КОЛ-ВО ТОВАРОВ - {arr ? items?.length : null}</p>
              <Link href="/cart">ИЗМЕНИТЬ</Link>
            </div>
            <div className={styles.body}>
              {arr
                ? items?.map((item) => (
                    <div key={item?.id} className={styles.card}>
                      <div className={styles.card__left}>
                        <Image src={item?.image} alt="" />
                      </div>
                      <div className={styles.card__right}>
                        <p>{item?.title}</p>
                        <p>{item?.name}</p>
                        <h2>{item?.price} UZS</h2>
                        <p>Кол-во {item?.quantity}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
