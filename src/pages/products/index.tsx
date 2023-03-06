import styles from './Products.module.scss';

import Link from 'next/link';

import Filter from '@/components/Filter/Filter';
import Card from '@/components/Card/Card';
import { sneakers_db } from '@/db/sneakers.db';

const Products = () => {
  return (
    <div id='container' className={styles.products}>
      <div className={styles.categories}>
        <ul>
          <li>ОДЕЖДА</li>
          <li>ОБУВЬ</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>DAMENBEKLEIDUNG</h1>
        <div className={styles.banner}>
          <div>
            <h3>SIKSILS</h3>
            <Link href='/'>Подробнее</Link>
          </div>
        </div>
        <Filter total={sneakers_db?.length} />
        <div className={styles.wrapper}>
          {sneakers_db?.map((s) => (
            <Link href={`/products/${s?.id}`} key={s?.id}>
              <Card obj={s} type='cloth' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
