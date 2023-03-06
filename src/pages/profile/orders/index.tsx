import { useState, useEffect } from 'react';
import styles from './Orders.module.scss';

import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

const Orders = () => {
  const [orders, setOrders] = useState();

  //   useEffect(() => {
  //     setOrders([]);
  //   }, []);

  return (
    <div id='container' className={styles.profile__orders}>
      <ProfileContentLayout>
        <div className={styles.content}></div>
      </ProfileContentLayout>
    </div>
  );
};

export default Orders;
