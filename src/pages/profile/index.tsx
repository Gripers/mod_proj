import styles from './Profile.module.scss';

import Image from 'next/image';

import ProfileContentLayout from '@/components/ProfileContentLayout/ProfileContentLayout';

import avatar from '@/assets/media/avatar.jpg';

const Profile = () => {
  return (
    <div id='container'>
      <ProfileContentLayout>
        <div className={styles.profile__content}>
          <h2>МОИ ДАННЫЕ</h2>
          <p>Сохраняйте понравившиеся Вам товары и проверяйте их наличие</p>
          <p>
            Из обзора учетной записи пользователя можно просматривать последние
            операции и редактировать данные учетной записи пользователя.
            Выберите одну из приведенных ниже ссылок, чтобы просмотреть или
            отредактировать информацию.
          </p>
          <form>
            <div>
              <label htmlFor='name_surname'>ИМЯ И ФАМИЛИЯ</label>
              <input type='text' id='name_surname' />
            </div>
            <div>
              <label htmlFor='gender'>ПОЛ</label>
              <input type='text' id='gender' />
            </div>
            <div>
              <label htmlFor='phone'>ТЕЛЕФОН</label>
              <input type='text' id='phone' />
            </div>
            <div>
              <label htmlFor='date'>ДАТА РОЖДЕНИЯ</label>
              <input type='date' id='date' />
            </div>
            <div>
              <label htmlFor='email'>EMAIL</label>
              <input type='email' id='email' />
            </div>
            <div>
              <label htmlFor='city'>ГОРОД</label>
              <input type='text' id='city' />
            </div>
            <div className={styles.avatar}>
              <div className={styles.avatar__left}>
                <Image src={avatar} alt='' />
              </div>
              <div className={styles.avatar__right}>
                <label>
                  <input type='file' />
                  ЗАГРУЗИТЬ ДРУГОЕ
                </label>
                <button>УДАЛИТЬ</button>
              </div>
            </div>
            <div className={styles.btns}>
              <button type='submit'>СОХРАНИТЬ</button>
              <button>ОТМЕНА</button>
            </div>
          </form>
        </div>
      </ProfileContentLayout>
    </div>
  );
};

export default Profile;
