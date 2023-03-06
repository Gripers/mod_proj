import styles from "./Women.module.scss";

import Image from "next/image";

import GoBack from "@/components/GoBack/GoBack";

const Women = () => {
  return (
    <div id="container" className={styles.women}>
      <GoBack />
      <div className={styles.content}>
        <h1>ВЫБЕРИТЕ КАТЕГОРИЮ</h1>
        <div className={styles.wrapper}></div>
      </div>
    </div>
  );
};

export default Women;
