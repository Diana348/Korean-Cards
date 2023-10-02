import React, { useState } from "react";
import { useParams } from "react-router-dom";
import wordsArray from "../../data/data";
import WordRow from "../../components/ui/WordRow";

const WordsCategoryPage = (props) => {
  const { category } = useParams();
  const [words, setWords] = useState(
    wordsArray.filter((elem) => elem.type === category)
  );
  return (
    <div className="mainWordsTable">
      {words.map((word) => (
        <WordRow key={word.word} word={word} />
      ))}
    </div>
  );
};

export default WordsCategoryPage;
