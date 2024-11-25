import React, { useState } from "react";
import { faker } from "@faker-js/faker";
// Correct default import

function TypingBox() {
  const [wordsArray, setwordsArray] = useState(() => {
    const words = [];
    for (let i = 0; i < 50; i++) {
      words.push(faker.word.noun());
    }
    return words;
  });
  return (
    <div className='p-6  w-100 text-center'>
      <div className='type-box block max-w-[1000px] h-[500px] mx-auto overflow-visible'>
        <div className='words text-[22px] flex flex-wrap'>
          {wordsArray.map((word, index) => (
            <span key={index} className='word m-[5px] pr-[2px]'>
              {word.split("").map((char, charIndex) => (
                <span key={charIndex}>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypingBox;
