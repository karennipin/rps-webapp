import styles from "../styles/SecondSteps.module.scss";
import useGetSelectIconDisplay from "./RPSImage";

const SecondSteps = (props) => {
  const isRandomNumberNotUndefined = props.hasRandomNumber !== 0;

  return (
    <div
      className={
        isRandomNumberNotUndefined
          ? styles.stepsContainer
          : styles.stepsContainers
      }
    >
      <div className={styles.userPickItemContainer}>
        <span>YOU PICKED</span>
        {useGetSelectIconDisplay(props.userPicked)}
      </div>
      {isRandomNumberNotUndefined && (
        <button onClick={props.onPlayAgainClick}>
          <div className={styles.winOrLoseContainer}>
            <div className={styles.winOrLoseText}>
              {props.textWinOrLose === "Draw"
                ? "Draw"
                : `You ${props.textWinOrLose}`}
            </div>
            <div className={styles.buttonPlayAgain}>PLAY AGAIN</div>
          </div>
        </button>
      )}
      <div className={styles.computerItem}>
        <div className={styles.userPickItemContainer}>
          <span>THE HOUSE PICKED</span>
          {isRandomNumberNotUndefined ? (
            useGetSelectIconDisplay(props.randomNumberPicked)
          ) : (
            <div className={styles.emptyCircleWrapper}>
              <div className={styles.emptyCircle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondSteps;
