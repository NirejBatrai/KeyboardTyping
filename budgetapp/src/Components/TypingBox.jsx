import React, { useState, useEffect, useRef } from "react";

const getCloud =
  `Life is a journey filled with surprises. Every moment offers a chance to grow and learn. Embrace challenges as opportunities to discover your strengths. Stay positive, work hard, and believe in yourself. Surround yourself with supportive people, and never stop pursuing your dreams. Each step forward brings endless possibilities.`.split(
    " "
  );
// .sort(() => (Math.random() > 0.5 ? 1 : -1));

// Timer function
function Timer({ startCounting }) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (startCounting) {
      interval = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup the interval when the component unmounts or `startCounting` changes
  }, [startCounting]);

  return <p>Time Elapsed: {timeElapsed}s</p>;
}

function Word(props) {
  const { text, active, correct, userInput } = props;

  const rerender = useRef(0);

  useEffect(() => {
    rerender.current += 1;
  });

  if (correct === true) {
    return (
      <span className='font-bold text-green-500 '>
        {text}({rerender.current}){" "}
      </span>
    );
  }
  if (correct === false) {
    return (
      <span className='font-bold text-red-500 '>
        {text}({rerender.current}){" "}
      </span>
    );
  }

  Word = React.memo(Word);

  if (active) {
    return (
      <span className='font-bold px-2 py-1 rounded-md'>
        {text.split("").map((char, index) => {
          const isCorrect = userInput[index] === char;
          const isExtra = index >= userInput.length;

          const isCurrentChar = index === userInput.length;

          return (
            <span key={index} className='relative'>
              <span
                className={`${
                  isExtra
                    ? "text-gray-500"
                    : isCorrect
                    ? "text-black"
                    : "text-red-500"
                }`}
              >
                {char}
              </span>
              {isCurrentChar && (
                <span className='absolute -left-1 top-0 text-white animate-pulse-fast'>
                  |
                </span>
              )}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <span>
      {text}({rerender.current})
    </span>
  );
}

function TypingBox() {
  const [userInput, setUserInput] = useState("");

  const [startCounting, setStartCounting] = useState(false);

  const cloud = useRef(getCloud);
  const [activeWordIndex, setactiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  function processInput(value) {
    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      //user has finsihed this word
      setactiveWordIndex((index) => index + 1);
      setUserInput("");

      //correct word
      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return (
    <div className='p-6 w-1/2 text-center'>
      <Timer startCounting={startCounting} />
      {/* Input Box */}
      <div className='mt-10 mb-11'>
        <p className='flex flex-wrap gap-1 text-3xl font-mono justify-center'>
          {cloud.current.map((word, index) => {
            return (
              <Word
                key={index}
                text={word}
                active={index === activeWordIndex}
                correct={correctWordArray[index]}
                userInput={index === activeWordIndex ? userInput : ""}
              />
            );
          })}
        </p>
        <input
          type='text'
          className='w-[80%] max-w-[600px] p-4 text-lg bg-gray-900 text-white rounded-lg focus:outline-none border border-gray-600  mt-11'
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TypingBox;
