import styles from "./Login.module.scss";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

import { loginModalAction } from "@/store/reducers/globalSlice";
import GoBack from "@/components/GoBack/GoBack";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div id="container" className={styles.login}>
        <GoBack />
        <div className={styles.content}>
          <h1>ЛОГИН</h1>
          <div className={styles.card}>
            <h3>ЗДРАВСТВУЙТЕ</h3>
            <p>
              Чтобы воспользоваться всеми возможностями вам надо войти или
              зарегистрироваться
            </p>
            <button onClick={() => dispatch(loginModalAction(true))}>
              ВОЙТИ
            </button>
          </div>
        </div>
      </div>
      <LoginModal />
    </>
  );
};

export default Login;
