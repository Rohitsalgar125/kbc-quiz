import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assest/play.mp3";
import correct from "../assest/correct.mp3";
import wrong from "../assest/wrong.mp3";

const Trivia = ({ data, setStop, setQuestionNum, questionNum }) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

 

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setQuestion(data[questionNum - 1]);
  }, [data, questionNum]);

  const handleClick = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");

    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(6000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNum((prev) => prev + 1);
          setSelectAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Trivia;
