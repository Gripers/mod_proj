import { useState, useEffect } from 'react';
import styles from './Addresses.module.scss';

import Image from 'next/image';

import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

import address_ico from '@/assets/media/address.svg';

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      user: 'Дильноза',
      phone: 998901233113,
      address: 'м-в Хумоюн, дом 40, Мирзо-Улугбекский р-н. Ташкент',
      default: true,
    },
    {
      id: 2,
      user: 'Дильноза',
      phone: 998901233113,
      address: 'м-в Хумоюн, дом 40, Мирзо-Улугбекский р-н. Ташкент',
      default: false,
    },
  ]);

  useEffect(() => {
    setAddresses([]);
  }, []);

  return (
    <div id='container' className={styles.profile__addresses}>
      <ProfileContentLayout>
        <div className={styles.content}>
          {addresses?.length ? (
            <div className={styles.ex}>
              <h2>МОИ АДРЕСА</h2>
              <div className={styles.addresses__wrapper}>
                {addresses?.map((address) => (
                  <div key={address?.id} className={styles.address__item}>
                    <p>
                      {address?.user} - +{address?.phone}
                    </p>
                    <b>{address?.address}</b>
                    <div>
                      <p
                        style={{
                          display: address?.default ? 'block' : 'none',
                        }}
                      >
                        ПО УМОЛЧАНИЮ
                      </p>
                      <button>РЕДАКТИРОВАТЬ</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className={styles.add__btn}>ДОБАВИТЬ АДРЕС</button>
            </div>
          ) : (
            <div className={styles.nothing}>
              <Image src={address_ico} alt='' />
              <h2>У ВАС НЕТ АДРЕСОВ</h2>
              <button className={styles.add__btn}>ДОБАВИТЬ АДРЕС</button>
            </div>
          )}
        </div>
      </ProfileContentLayout>
    </div>
  );
};

export default Addresses;
