import * as React from 'react';
import styles from './FooterMob.module.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Link from 'next/link';

export default function FooterMob() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.footer__mob}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls='panel1bh-content' id='panel1bh-header'>
          ИНТЕРНЕТ МАГАЗИН
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2bh-content' id='panel2bh-header'>
          МАГАЗИНЫ
        </AccordionSummary>
        <AccordionDetails>
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
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls='panel3bh-content' id='panel3bh-header'>
          МОЙ АККАУНТ
        </AccordionSummary>
        <AccordionDetails>
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
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls='panel4bh-content' id='panel4bh-header'>
          НОВОСТИ
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
