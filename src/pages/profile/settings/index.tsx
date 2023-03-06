import styles from './Settings.module.scss';

import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Settings = () => {
  return (
    <div id='container' className={styles.profile__settings}>
      <ProfileContentLayout
        children={
          <div className={styles.content}>
            <h2>НАСТРОЙКИ</h2>
            <form>
              <div>
                <h3>УВЕДОМЛЕНИЯ</h3>
                <Switch {...label} />
              </div>
              <div>
                <h3>ПОДПИСКА НА РАССЫЛКУ</h3>
                <Switch {...label} />
              </div>
              <div className={styles.btns}>
                <button type='submit'>СОХРАНИТЬ</button>
                <button>ОТМЕНА</button>
              </div>
            </form>
          </div>
        }
      />
    </div>
  );
};

export default Settings;
