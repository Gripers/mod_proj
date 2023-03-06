import styles from "./GoBack.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";

import arrow_ico from "@/assets/media/arrow.svg";

const GoBack = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <div className={styles.goback}>
      <Image src={arrow_ico} alt="" />
      <p onClick={goBack}>НАЗАД</p>
    </div>
  );
};

export default GoBack;
