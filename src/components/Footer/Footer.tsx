import styles from './Footer.module.scss';

import Link from 'next/link';

import { Size, useWindowSize } from '@/hooks/useWindowSize';
import FooterMob from '../FooterMob/FooterMob';

const Footer = () => {
  const size: Size = useWindowSize();

  return (
    <footer className={styles.footer}>
      {size?.width! < 960 ? (
        <FooterMob />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div>
              <p>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
              <p>ГОРЯЧАЯ ЛИНИЯ</p>
              <b>+998 (95) 199-37-37</b>
              <p>Будни: с 9:00 до 19:00 (Ташкентское время)</p>
            </div>
            <div>
              <p>ОБРАТНАЯ СВЯЗЬ</p>
              <button>КОНТАКТНАЯ ФОРМА</button>
              <p>Cвяжитесь с нами по контактной форме</p>
            </div>
            <div>
              <p>УЗНАТЬ БОЛЬШЕ</p>
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <div>
              <p>ИНТЕРНЕТ МАГАЗИН</p>
              <ul>
                <li>
                  <Link href='/support-ason'>Центр поддержки Ason</Link>
                </li>
                <li>
                  <Link href='/'>Статус заказа по номеру</Link>
                </li>
                <li>
                  <Link href='/'>Оплата</Link>
                </li>
                <li>
                  <Link href='/'>Условия возврата</Link>
                </li>
                <li>
                  <Link href='/'>Условия доставки</Link>
                </li>
                <li>
                  <Link href='/'>Как выбрать размер</Link>
                </li>
                <li>
                  <Link href='/'>Как оформить заказ</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>МАГАЗИНЫ</p>
              <ul>
                <li>
                  <Link href='/'>Центр поддержки Ason</Link>
                </li>
                <li>
                  <Link href='/'>Статус заказа по номеру</Link>
                </li>
                <li>
                  <Link href='/'>Оплата</Link>
                </li>
                <li>
                  <Link href='/'>Условия возврата</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>МОЙ АККАУНТ</p>
              <ul>
                <li>
                  <Link href='/'>Центр поддержки Ason</Link>
                </li>
                <li>
                  <Link href='/'>Статус заказа по номеру</Link>
                </li>
                <li>
                  <Link href='/'>Оплата</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>НОВОСТИ</p>
              <p>
                Вы хотите получать больше уведомлений об акциях и продажах?
                Подпишитесь на нашу ссылку
              </p>
              <form>
                <input type='text' placeholder='@' />
                <div className={styles.minbox}>
                  <input type='checkbox' />
                  <p>Принимаю условия подписки</p>
                </div>
                <button type='submit'>ПОДПИСАТЬСЯ</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
