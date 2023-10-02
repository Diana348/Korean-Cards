import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import wordsArray from "../../data/data";
import "./checkPage.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useParams } from "react-router-dom";

const CheckPage = () => {
  const { type } = useParams();
  const resArr = wordsArray.filter((elem) => elem.type === type);
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const setPrevSlide = () => {
    if (wordIndex === 0) {
      setWordIndex(wordsArray.length - 1);
    } else {
      setWordIndex(wordIndex - 1);
    }
    setIsFlipped(false);
  };

  const setNextSlide = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (wordIndex === wordsArray.length - 1) {
        setWordIndex(0);
      } else {
        setWordIndex(wordIndex + 1);
      }
    }, 200);
  };

  return (
    <div className="container">
      <div className="checkPage">
        <BiChevronLeft
          className="arrowLeft"
          onClick={setPrevSlide}
        ></BiChevronLeft>

        <ReactCardFlip
          className="flip-card"
          isFlipped={isFlipped}
          flipDirection="horizontal"
        >
          <div className="flip-card frontComponent">
            <p className="flip-card-word">{resArr[wordIndex].word}</p>
          </div>

          <div className="flip-card backComponent">
            <p className="flip-card-translation">
              {resArr[wordIndex].translation}
            </p>
            <p className="flip-card-transcription">
              [{resArr[wordIndex].transcription}]
            </p>
          </div>
        </ReactCardFlip>

        <BiChevronRight
          className="arrowRight"
          onClick={setNextSlide}
        ></BiChevronRight>
      </div>

      <div className="checkPageButton">
        <button className="button" onClick={handleClick}>
          Проверить ответ
        </button>
      </div>
    </div>
  );
};

export default CheckPage;
