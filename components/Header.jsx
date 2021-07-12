import styles from "../styles/components/Header.module.scss";
import Image from "next/image";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Image src="/logo.svg" width={150} height={115} />
      <div className={styles.score}>
        <div className={styles.scoreText}>SCORE</div>
        <div className={styles.count}>{props.points}</div>
      </div>
    </div>
  );
};

export default Header;
