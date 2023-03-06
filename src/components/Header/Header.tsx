import styles from "./Header.module.scss";

import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <h3>ЛЕГКИЕ КУРТКИ И ВЕТРОВКИ</h3>
        <Link href="/">Подробнее</Link>
      </div>
    </header>
  );
};

export default Header;
