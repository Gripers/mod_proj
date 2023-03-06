import { FormEvent, useState } from "react";
import styles from "./LoginModal.module.scss";

import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { loginModalAction } from "@/store/reducers/globalSlice";
import Otp from "@/components/Otp/Otp";
import ModalLayout from "../ModalLayout";

import close_ico from "@/assets/media/close.svg";

const LoginModal = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoginModalOpened } = useSelector(
    (state: RootState) => state.global
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSent(true);
  };

  return (
    <ModalLayout isOpened={isLoginModalOpened}>
      <div className={styles.modal__box}>
        <div className={styles.head}>
          <h2>ВХОД И РЕГИСТРАЦИЯ</h2>
          <button onClick={() => dispatch(loginModalAction(false))}>
            <Image src={close_ico} alt="" />
          </button>
        </div>
        {isSent ? (
          <Otp />
        ) : (
          <>
            <div className={styles.body}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="phone">Телефон</label>
                  <input type="text" id="phone" />
                </div>
                <p>На введеный вами номер придет код</p>
                <button type="submit">ОТПРАВИТЬ</button>
              </form>
            </div>
            <div className={styles.foot}>
              <button>ЧЕРЕЗ ПОЧТУ</button>
            </div>
          </>
        )}
      </div>
    </ModalLayout>
  );
};

export default LoginModal;
