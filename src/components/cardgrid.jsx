import { Card } from "./card";
import { imageLinkArray } from "../imageLinkArray";
import { useState } from "react";

function CardGrid() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);
  const [imageArray, setImageArray] = useState(generateInitialCards());

  function generateInitialCards() {
    return imageLinkArray
      .slice(0, 10)
      .map((item) => ({
        photoId: item.link,
        text: item.text,
        key: item.key,
      }))
      .sort(() => 0.5 - Math.random());
  }

  function handleCardClick(wasClickedBefore) {
    if (wasClickedBefore) {
      // Game over - card was clicked before
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setResetCounter((prev) => prev + 1);
      setImageArray(generateInitialCards());
    } else {
      // Card wasn't clicked before - continue game
      setCurrentScore((prev) => prev + 1);
      setImageArray((prevArray) =>
        [...prevArray].sort(() => 0.5 - Math.random())
      );
    }
  }

  return (
    <div className="memory-game">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="high-score">High Score: {highScore}</div>
      <div className="cards">
        {imageArray.map((item) => (
          <Card
            key={item.key}
            photoId={item.photoId}
            text={item.text}
            tellParentClicked={handleCardClick}
            resetCards={resetCounter}
          />
        ))}
      </div>
    </div>
  );
}

export { CardGrid };
