import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import React, { useState, useEffect } from "react";
import useDidMountEffect from "../common/hooks/useDidMountEffect";

const DEFAULT_VALUE = "";
const PAPER_ID = 1;
const SCISSORS_ID = 2;
const ROCK_ID = 3;
const RANDOM_NUMBER_DEFAULT_VALUE = 0;

const Home = () => {
  const [storeValue, setStoreValue] = useState({
    userPicked: 0,
    points: 0,
    textWinOrLose: DEFAULT_VALUE,
    isGetRandomNumber: false,
    randomNumber: RANDOM_NUMBER_DEFAULT_VALUE,
  });

  const isPaperWin =
    PAPER_ID === storeValue.userPicked && storeValue.randomNumber === ROCK_ID;

  const isScissorsWin =
    SCISSORS_ID === storeValue.userPicked &&
    storeValue.randomNumber === PAPER_ID;

  const isRockWin =
    ROCK_ID === storeValue.userPicked &&
    storeValue.randomNumber === SCISSORS_ID;

  const isPaperDraw =
    PAPER_ID === storeValue.userPicked && storeValue.randomNumber === PAPER_ID;

  const isScissorsDraw =
    SCISSORS_ID === storeValue.userPicked &&
    storeValue.randomNumber === SCISSORS_ID;

  const isRockDraw =
    ROCK_ID === storeValue.userPicked && storeValue.randomNumber === ROCK_ID;

  const isPaperLose =
    storeValue.userPicked === PAPER_ID &&
    storeValue.randomNumber === SCISSORS_ID;

  const isScissorsLose =
    storeValue.userPicked === SCISSORS_ID &&
    storeValue.randomNumber === ROCK_ID;

  const isRockLose =
    storeValue.userPicked === ROCK_ID && storeValue.randomNumber === PAPER_ID;
  const getRandomItemInt = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  useDidMountEffect(() => {
    if (storeValue.userPicked !== RANDOM_NUMBER_DEFAULT_VALUE) {
      setTimeout(() => {
        setStoreValue({ ...storeValue, randomNumber: getRandomItemInt(3) });
      }, 1000);
    }
  }, [storeValue.isGetRandomNumber]);

  useEffect(() => {
    if (isPaperLose || isScissorsLose || isRockLose) {
      return setStoreValue({
        ...storeValue,
        textWinOrLose: "Lose",
      });
    }
    if (isPaperWin || isScissorsWin || isRockWin) {
      return setStoreValue({
        ...storeValue,
        textWinOrLose: "Win",
        points: storeValue.points + 1,
      });
    }

    if (isPaperDraw || isScissorsDraw || isRockDraw) {
      return setStoreValue({
        ...storeValue,
        textWinOrLose: "Draw",
      });
    }
  }, [storeValue.randomNumber]);

  const handlePaperClick = () => {
    setStoreValue({ ...storeValue, userPicked: 1, isGetRandomNumber: true });
  };

  const handleScissorsClick = () => {
    setStoreValue({
      ...storeValue,
      userPicked: 2,
      isGetRandomNumber: true,
    });
  };

  const handleRockClick = () => {
    setStoreValue({ ...storeValue, userPicked: 3, isGetRandomNumber: true });
  };

  const handlePlayAgainClick = () => {
    setStoreValue({
      ...storeValue,
      userPicked: 0,
      isGetRandomNumber: false,
      textWinOrLose: "",
      randomNumber: 0,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <Header points={storeValue.points} />
      {!storeValue.isGetRandomNumber ? (
        <FirstStep
          onPaperClick={handlePaperClick}
          onScissorsClick={handleScissorsClick}
          onRockClick={handleRockClick}
        />
      ) : (
        <SecondStep
          hasRandomNumber={storeValue.randomNumber}
          userPicked={storeValue.userPicked}
          randomNumberPicked={storeValue.randomNumber}
          onPlayAgainClick={handlePlayAgainClick}
          textWinOrLose={storeValue.textWinOrLose}
        />
      )}
    </div>
  );
};

export default Home;
