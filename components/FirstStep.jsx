import Image from "next/image";
import styles from "../styles/FirstStep.module.scss";
const FirstStep = (props) => {
  return (
    <div className={styles.firstStepContainer}>
      <div className={styles.triangleContainer}>
        <Image
          src="/bg-triangle.svg"
          width={450}
          height={260}
          className={styles.triangle}
          layout="responsive"
        />
      </div>
      <div className={styles.paperAndScissorsContainer}>
        <button onClick={props.onPaperClick}>
          <div className={styles.paperWrapper}>
            <div className={styles.paper}>
              <Image src="/icon-paper.svg" width={55} height={75} />
            </div>
          </div>
        </button>
        <button onClick={props.onScissorsClick}>
          <div className={styles.scissorsWrapper}>
            <div className={styles.scissors}>
              <Image src="/icon-scissors.svg" width={55} height={75} />
            </div>
          </div>
        </button>
      </div>
      <div className={styles.rockContainer}>
        <button onClick={props.onRockClick}>
          <div className={styles.rockWrapper}>
            <div className={styles.rock}>
              <Image src="/icon-rock.svg" width={55} height={75} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
