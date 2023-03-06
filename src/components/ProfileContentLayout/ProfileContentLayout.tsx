import { ReactNode } from 'react';
import styles from './ProfileContentLayout.module.scss';

import GoBack from '../GoBack/GoBack';
import ProfileBar from '../ProfileBar/ProfileBar';

const ProfileContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.profile_content__layout}>
      <GoBack />
      <div className={styles.content}>
        <h1>ЗДРАВСТВУЙТЕ, riot</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ProfileBar />
          </div>
          <div className={styles.right}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContentLayout;
