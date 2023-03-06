import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { Size, useWindowSize } from '@/hooks/useWindowSize';
import { AppDispatch, RootState } from '@/store/store';
import { mobileDrawerAction } from '@/store/reducers/globalSlice';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

import user_ico from '@/assets/media/user.svg';
import login_ico from '@/assets/media/login.svg';
import burger_ico from '@/assets/media/bars.svg';
import heart_ico from '@/assets/media/heart.svg';
import bag_ico from '@/assets/media/cart.svg';
import search_ico from '@/assets/media/search.svg';
import close_ico from '@/assets/media/x.svg';

const Navbar = () => {
  const [cook, setCook] = useState<boolean>(false);
  const [cookies] = useCookies();
  const size: Size = useWindowSize();
  const dispatch = useDispatch<AppDispatch>();
  const { isMobileDrawerOpened } = useSelector(
    (state: RootState) => state.global
  );

  const openDrawer = () => dispatch(mobileDrawerAction(true));
  const closeDrawer = () => dispatch(mobileDrawerAction(false));

  useEffect(() => {
    setCook(true);
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <div id='container' className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.fst}>
              <Link href='/'>Помощь и контакт</Link>
            </div>
            <div className={styles.sec}>
              {cook ? (
                cookies?.isAuth ? (
                  <div>
                    <Image src={user_ico} alt='' />
                    <Link href='/profile'>riot</Link>
                  </div>
                ) : (
                  <>
                    <div>
                      <Image src={user_ico} alt='' />
                      <Link href='/login'>Регистрация</Link>
                    </div>
                    <div>
                      <Image src={login_ico} alt='' />
                      <Link href='/login'>Логин</Link>
                    </div>
                  </>
                )
              ) : null}
              <LangSwitcher />
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.fst}>
              {size?.width! < 700 ? (
                <button className={styles.burger} onClick={openDrawer}>
                  <Image src={burger_ico} alt='' />
                </button>
              ) : (
                <ul>
                  <li>
                    <Link href='/products'>ЖЕНЩИНАМ</Link>
                  </li>
                  <li>
                    <Link href='/products'>МУЖЧИНАМ</Link>
                  </li>
                  <li>
                    <Link href='/products'>ДЕТЯМ</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className={styles.sec}>
              <Link href='/'>
                <h1>MOD</h1>
              </Link>
            </div>
            <div className={styles.thrd}>
              <Link href='/profile/fav'>
                <Image src={heart_ico} alt='' />
                <p>Избранное</p>
              </Link>
              <Link href='/cart'>
                <Image src={bag_ico} alt='' />
                <p>Корзина</p>
              </Link>
            </div>
          </div>
          <div className={styles.bottom}>
            {size?.width! < 700 ? (
              <nav>
                <Link href='/products'>ЖЕНЩИНАМ</Link>
                <Link href='/products'>МУЖЧИНАМ</Link>
                <Link href='/products'>ДЕТЯМ</Link>
                <Link href='/products'>БРЕНДЫ</Link>
              </nav>
            ) : (
              <>
                <ul>
                  <li>
                    <Link href='/'>Красота</Link>
                  </li>
                  <li>
                    <Link href='/'>Обувь</Link>
                  </li>
                  <li>
                    <Link href='/'>Аксессуары</Link>
                  </li>
                  <li>
                    <Link href='/'>Одежда</Link>
                  </li>
                  <li>
                    <Link href='/'>Спорт</Link>
                  </li>
                </ul>
                <div className={styles.searchbar}>
                  <Image src={search_ico} alt='' />
                  <input type='text' placeholder='Товар, бренд или цвет' />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <DrawerComponent isOpened={isMobileDrawerOpened}>
        <div className={styles.drawer__content}>
          <div className={styles.head}>
            <button onClick={closeDrawer}>
              <Image src={close_ico} alt='' />
            </button>
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <Link href='/login'>ВХОД</Link>
              <Link href='/login'>РЕГИСТРАЦИЯ</Link>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}>
              <ul>
                <li>РУССКИЙ</li>
                <li>УЗБЕКСКИЙ</li>
              </ul>
            </div>
          </div>
        </div>
      </DrawerComponent>
    </>
  );
};

export default Navbar;
