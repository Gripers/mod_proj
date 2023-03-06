import { useState, useEffect } from 'react';
import styles from './Fav.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { default_carousel_config } from '@/carousel-config/default-carousel.config';
import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

import heart_ico from '@/assets/media/heart_ico.svg';
import x_ico from '@/assets/media/x.svg';
import cloth_fst from '@/assets/media/cloth_fst.png';
import cloth_sec from '@/assets/media/cloth_sec.png';

const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Fav = () => {
  const [fav, setFav] = useState([
    {
      id: 1,
      image: cloth_fst,
      title: 'Jack & Jones',
      name: 'ROY JAMES SA - Chinos',
      price: 25,
    },
    {
      id: 2,
      image: cloth_sec,
      title: 'Jack & Jones',
      name: 'ROY JAMES SA - Chinos',
      price: 90,
    },
  ]);

  // useEffect(() => {
  //   setFav([]);
  // }, []);

  return (
    <div id='container' className={styles.profile__fav}>
      <ProfileContentLayout
        children={
          <div className={styles.content}>
            {fav?.length ? (
              <div className={styles.ex}>
                <h2>ИЗБРАННОЕ</h2>
                {/* <OwlCarousel {...default_carousel_config}>
                  {fav?.map((item) => (
                    <div key={item?.id} className={styles.item}>
                      <div className={styles.head}>
                        <Image src={item?.image} alt='' />
                      </div>
                      <div className={styles.body}>
                        <p>$ {item?.price}</p>
                        <b>{item?.name}</b>
                        <p>{item?.title}</p>
                      </div>
                    </div>
                  ))}
                </OwlCarousel> */}
                <div className={styles.favs__wrapper}>
                  {fav?.map((item) => (
                    <div key={item?.id} className={styles.item}>
                      <div className={styles.head}>
                        <Image src={item?.image} alt='' />
                        <div className={styles.rem}>
                          <button>
                            <Image src={x_ico} alt='' />
                          </button>
                        </div>
                      </div>
                      <div className={styles.body}>
                        <p>$ {item?.price}</p>
                        <b>{item?.name}</b>
                        <p>{item?.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.nothing}>
                <Image src={heart_ico} alt='' />
                <h2>ЗДЕСЬ ПОКА ПУСТО</h2>
                <p>Вы пока ничего не добавили в избранное</p>
                <Link href='/'>ПЕРЕЙТИ В КАТАЛОГ</Link>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

export default Fav;
