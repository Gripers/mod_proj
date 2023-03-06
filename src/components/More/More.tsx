import styles from "./More.module.scss";

import Image from "next/image";
import Link from "next/link";

import pic from "@/assets/media/Rectangle 19.jpg";

const More = () => {
  return (
    <section id="container" className={styles.more__clothes}>
      <h1>ЕЩЕ БОЛЬШЕ ТОВАРОВ!</h1>
      <p>Самые низкие цены на товар</p>
      <div className={styles.image__box}>
        <Image src={pic} alt="" />
        <div className={styles.overbox}>
          <h3>Nuenhenen der Wotnche</h3>
          <h3>ЛЕГКИЕ КУРТКИ И ВЕТРОВКИ</h3>
          <Link href="/">Подробнее</Link>
        </div>
      </div>
    </section>
  );
};

export default More;
