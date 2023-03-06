import { useState } from "react";
import styles from "./Otp.module.scss";

import OtpInput from "react-otp-input";

import CountDown from "../CountDown";

const Otp = () => {
  const [otp, setOtp] = useState<string>();

  return (
    <div className={styles.otp}>
      <form>
        <CountDown minutes={5} />
        <OtpInput
          containerStyle={styles.otp__input}
          value={otp}
          onChange={(otp: string) => setOtp(otp)}
          numInputs={4}
        />
        <button type="submit">ВОЙТИ</button>
      </form>
      <button>ОТПРАВИТЬ ЕЩЕ РАЗ</button>
    </div>
  );
};

export default Otp;
