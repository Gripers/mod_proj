import { useState, useEffect } from 'react';
import styles from './Cards.module.scss';

import Image from 'next/image';

import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

import cards_ico from '@/assets/media/card.svg';
import rubbish_ico from '@/assets/media/rubbish.svg';

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      card_num: 2313454622333015,
      exp: {
        month: 12,
        year: 27,
      },
      cvv_cvc: 233,
    },
    {
      id: 2,
      card_num: 3940454622332830,
      exp: {
        month: 3,
        year: 20,
      },
      cvv_cvc: 195,
    },
  ]);

  useEffect(() => {
    setCards([]);
  }, []);

  return (
    <div id='container' className={styles.profile__cards}>
      <ProfileContentLayout>
        <div className={styles.content}>
          {cards?.length ? (
            <div className={styles.ex}>
              <h2>МОИ КАРТЫ</h2>
              <div className={styles.cards__wrapper}>
                {cards?.map((card) => (
                  <div key={card?.id} className={styles.card__item}>
                    <h3>
                      {card?.card_num
                        ?.toString()
                        ?.replace(/\B(?=(\d{4})+(?!\d))/g, ' ')}
                    </h3>
                    <button>
                      <Image src={rubbish_ico} alt='' />
                    </button>
                  </div>
                ))}
              </div>
              <button className={styles.add_card__btn}>ДОБАВИТЬ КАРТУ</button>
            </div>
          ) : (
            <div className={styles.nothing}>
              <Image src={cards_ico} alt='' />
              <h2>У ВАС НЕ КАРТ</h2>
              <p>Чтобы быстро оформлять заказы нужно добавить карту</p>
              <button className={styles.add_card__btn}>ДОБАВИТЬ КАРТУ</button>
            </div>
          )}
        </div>
      </ProfileContentLayout>
    </div>
  );
};

export default Cards;
