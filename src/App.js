import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./comp/Timer";
import Trivia from "./comp/Trivia";
import Start from "./comp/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Cloths",
          correct: false,
        },
        {
          text: "Medicine",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which animal is known as the 'Ship of the Desert",
      answers: [
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "camel",
          correct: true,
        },
        {
          text: "Dog",
          correct: false,
        },
        {
          text: "Tiger",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How many consonants are there in the English alphabet?",
      answers: [
        {
          text: 21,
          correct: true,
        },
        {
          text: 25,
          correct: false,
        },
        {
          text: 11,
          correct: false,
        },
        {
          text: 22,
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Name the National fruit of India?",
      answers: [
        {
          text: "Grapes",
          correct: false,
        },
        {
          text: "Banana",
          correct: false,
        },
        {
          text: "Mango",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: " Name the place known as the Roof of the World?",
      answers: [
        {
          text: "Sikkim",
          correct: false,
        },
        {
          text: "Bhutan",
          correct: false,
        },
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "Tibet",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "How many years are there in one Millenium?",
      answers: [
        {
          text: "100 Years",
          correct: false,
        },
        {
          text: "1000 Years",
          correct: true,
        },
        {
          text: "500 Years",
          correct: false,
        },
        {
          text: "300 Year",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Name the densest jungle in the world?",
      answers: [
        {
          text: "BhimaShankar",
          correct: false,
        },
        {
          text: "The Amazon rainforest",
          correct: true,
        },
        {
          text: "Nail River",
          correct: false,
        },
        {
          text: "Alaska Forest",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Name the longest river on the Earth?",
      answers: [
        {
          text: "Cold river",
          correct: false,
        },
        {
          text: "Godavari",
          correct: false,
        },
        {
          text: "Nile",
          correct: true,
        },
        {
          text: "Ganga",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which is the National Aquatic Animal of India?",
      answers: [
        {
          text: "River Dolphin",
          correct: true,
        },
        {
          text: "fish",
          correct:false,
        },
        {
          text: "whale",
          correct: false,
        },
        {
          text: "Shark",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who wrote 'Malgudi Days'?",
      answers: [
        {
          text: "Madhavan",
          correct: false,
        },
        {
          text: "R K Narayan",
          correct: true,
        },
        {
          text: "Shirvadkae",
          correct: false,
        },
        {
          text: "Patil K.S",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented Watch?",
      answers: [
        {
          text: "Paul Berger",
          correct: false,
        },
        {
          text: "Ben Stokes",
          correct: false,
        },
        {
          text: "Chris Morris",
          correct: false,
        },
        {
          text: "Peter Henlein",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: " Name the hardest substance available on Earth?",
      answers: [
        {
          text: "Silver",
          correct: false,
        },
        {
          text: "Diamond",
          correct: true,
        },
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Platinum",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the real founder of Microsoft?",
      answers: [
        {
          text: "Ratan Tata",
          correct: false,
        },
        {
          text: "Bill Gates and Paul G. Allen",
          correct: true,
        },
        {
          text: "Paul Berg and Lary Page",
          correct: false,
        },
        {
          text: "Anime Bantai",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "In 1916  Olympic Games were cancelled because of World War I?",
      answers: [
        {
          text: "True",
          correct: true,
        },
        {
          text: "false",
          correct: false,
        },
        {
          text: "Maybe",
          correct: false,
        },
        {
          text: "Focus",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Name the country known as the Land of the Rising Sun?",
      answers: [
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹1000" },
        { id: 2, amount: "₹2000" },
        { id: 3, amount: "₹5000" },
        { id: 4, amount: "₹10000" },
        { id: 5, amount: "₹20000" },
        { id: 6, amount: "₹40000" },
        { id: 7, amount: "₹80000" },
        { id: 8, amount: "₹160000" },
        { id: 9, amount: "₹320000" },
        { id: 10, amount: "₹640000" },
        { id: 11, amount: "₹1250000" },
        { id: 12, amount: "₹2500000" },
        { id: 13, amount: "₹5000000" },
        { id: 14, amount: "₹1000000" },
        { id: 15, amount: "₹70000000" },
      ].reverse(),

    []
  );

  useEffect(() => {
    questionNum > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNum - 1).amount);
  }, [moneyPyramid, questionNum]);

  return (
    <div className="App">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You Earned:{earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNum={questionNum} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNum={setQuestionNum}
                    questionNum={questionNum}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNum === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNum">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
