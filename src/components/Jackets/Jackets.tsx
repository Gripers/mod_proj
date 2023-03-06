import styles from "./Jackets.module.scss";

import Link from "next/link";
import Image from "next/image";

import pic from "@/assets/media/slice.jpg";

const Jackets = () => {
  return (
    <section id="container" className={styles.cnt}>
      <div className={styles.head}>
        <h1>ПУХОВИКИ И ЗИМНИЕ КУРТКИ</h1>
        <Link href="/">Посмотреть</Link>
      </div>
      <div className={styles.body}>
        <Image src={pic} alt="" />
      </div>
    </section>
  );
};

export default Jackets;
