/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getImage } from "./functions";

function Card({ photoId, text, tellParentClicked, resetCards }) {
  const [imageUrl, setImageUrl] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const imageUrlPromise = getImage(photoId);
    imageUrlPromise.then((url) => {
      setImageUrl(url);
    });
  }, [photoId]);

  // Reset clicked state when resetCards changes
  useEffect(() => {
    setClicked(false);
  }, [resetCards]);

  function handleClick() {
    tellParentClicked(clicked);
    setClicked(true);
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <img src={imageUrl} alt="" className="image" />
      <div className="card-text">{text}</div>
    </div>
  );
}

export { Card };
