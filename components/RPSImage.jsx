import Image from "next/image";
import styles from "../styles/components/SecondSteps.module.scss";

const ROCK_ID = 3;
const SCISSORS_ID = 2;
const PAPER_ID = 1;
const RPSImage = (itemId) => {
  return (
    <>
      {itemId === PAPER_ID && (
        <div className={styles.userPickItemWrapper}>
          <div className={styles.paperWrapper}>
            <div className={styles.paper}>
              <Image src="/icon-paper.svg" width={70} height={90} />
            </div>
          </div>
        </div>
      )}
      {itemId === SCISSORS_ID && (
        <div className={styles.scissorsWrapper}>
          <div className={styles.scissors}>
            <Image src="/icon-scissors.svg" width={70} height={90} />
          </div>
        </div>
      )}
      {itemId === ROCK_ID && (
        <div className={styles.rockWrapper}>
          <div className={styles.rock}>
            <Image src="/icon-rock.svg" width={70} height={90} />
          </div>
        </div>
      )}
    </>
  );
};

export default RPSImage;
