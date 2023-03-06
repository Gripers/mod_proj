import styles from './ProfileBar.module.scss';

import { useRouter } from 'next/router';
import Select, { SingleValue } from 'react-select';
import Link from 'next/link';
import Image from 'next/image';

import { Size, useWindowSize } from '@/hooks/useWindowSize';
import arrow_ico from '@/assets/media/arrow_p.svg';

type Selector = { label: string; value: string };

const ProfileBar = () => {
  const router = useRouter();
  const size: Size = useWindowSize();

  const options = [
    { value: '/profile', label: 'МОИ ДАННЫЕ' },
    { value: '/profile/cards', label: 'МОИ КАРТЫ' },
    { value: '/profile/orders', label: 'МОИ ЗАКАЗЫ' },
    { value: '/profile/addresses', label: 'МОИ АДРЕСА' },
    { value: '/profile/fav', label: 'ИЗБРАННЫЕ' },
    { value: '/profile/settings', label: 'НАСТРОЙКИ' },
  ];

  return (
    <>
      {size?.width! < 700 ? (
        <Select
          options={options}
          // @ts-ignore
          value={JSON.parse(localStorage.getItem('val'))}
          onChange={(value: SingleValue<Selector>) => {
            localStorage.setItem('val', JSON.stringify(value));
            router.push(value?.value!);
          }}
          placeholder='...'
        />
      ) : (
        <ul className={styles.profile__sidebar}>
          <li>
            <Link
              href='/profile'
              className={router.pathname === '/profile' ? styles.active : ''}
            >
              <h3>МОИ ДАННЫЕ</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
          <li>
            <Link
              href='/profile/cards'
              className={
                router.pathname === '/profile/cards' ? styles.active : ''
              }
            >
              <h3>МОИ КАРТЫ</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
          <li>
            <Link
              href='/profile/orders'
              className={
                router.pathname === '/profile/orders' ? styles.active : ''
              }
            >
              <h3>МОИ ЗАКАЗЫ</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
          <li>
            <Link
              href='/profile/addresses'
              className={
                router.pathname === '/profile/addresses' ? styles.active : ''
              }
            >
              <h3>МОИ АДРЕСА</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
          <li>
            <Link
              href='/profile/fav'
              className={
                router.pathname === '/profile/fav' ? styles.active : ''
              }
            >
              <h3>ИЗБРАННЫЕ</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
          <li>
            <Link
              href='/profile/settings'
              className={
                router.pathname === '/profile/settings' ? styles.active : ''
              }
            >
              <h3>НАСТРОЙКИ</h3>
              <Image src={arrow_ico} alt='' />
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileBar;
