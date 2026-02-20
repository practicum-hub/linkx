import Image from "next/image";
import styles from "./userItem.module.css";

export default function UserItem() {
  return (
    <li className={styles.user}>
      <div className={styles.imgWrap}>
        <Image className={styles.img} src="/images/user.png" alt="User" fill />
        <span className={styles.online} />
      </div>

      <div className={styles.textBlock}>
        <p className={styles.name}>Anton Deulia</p>
        <p className={styles.email}>anton.deulia06@gmail.com</p>
        <p className={styles.streak}>12 Day Streak</p>
      </div>
    </li>
  );
}
