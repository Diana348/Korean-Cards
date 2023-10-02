import React, { useState } from "react";
import "./main.css";
import wordsArray from "../../../data/data";
import WordRow from "../WordRow";
import GroupsOfWords from "../GroupsOfWords";

const WordsTable = () => {
  const [data, setData] = useState(wordsArray);

  const changeWordsData = (
    id,
    wordText,
    wordTranscription,
    wordTranslation
  ) => {
    const updatedData = data.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          word: wordText,
          transcription: wordTranscription,
          translation: wordTranslation,
        };
      }
      return elem;
    });
    setData(updatedData);
  };

  return (
    <div className="mainContainer">
      <GroupsOfWords />
      <div className="mainTitle">
        <h2>Слово</h2>
        <h2>Транскрипция</h2>
        <h2>Перевод</h2>
      </div>
      <div className="mainWordsTable">
        {data.map((word) => (
          <WordRow
            key={word.word}
            word={word}
            changeTableWords={changeWordsData}
          />
        ))}
      </div>
    </div>
  );
};

export default WordsTable;
