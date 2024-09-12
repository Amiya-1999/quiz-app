import React, { useState } from 'react'
import QuestionList from './QuestionList';
import './Quiz.css';

function Quiz() {

  const questions = [
    {
      question: 'What is React?',
      options: ['CSS Framework', 'React Library', 'React Framework', 'Testing Tool'],
      answer: 'React Library'
    },
    {
      question: 'Who developed React?',
      options: ['Google', 'Facebook', 'Microsoft', 'Twitter'],
      answer: 'Facebook'
    },
    {
      question: 'Which of the following is used to manage state in a React app?',
      options: ['Redux', 'Bootstrap', 'Material UI', 'Jest'],
      answer: 'Redux'
    },
    {
      question: 'What is JSX?',
      options: [
        'A CSS preprocessor',
        'A JavaScript library',
        'A syntax extension for JavaScript',
        'A testing framework'
      ],
      answer: 'A syntax extension for JavaScript'
    },
    {
      question: 'Which method is used to update the state in a React component?',
      options: ['getState()', 'setState()', 'updateState()', 'changeState()'],
      answer: 'setState()'
    },
    {
      question: 'What is a React component?',
      options: [
        'A part of the UI in an application',
        'A CSS class',
        'A JavaScript function or class',
        'A testing tool'
      ],
      answer: 'A part of the UI in an application'
    },
    {
      question: 'Which of the following is NOT a React hook?',
      options: ['useState', 'useEffect', 'useFetch', 'useContext'],
      answer: 'useFetch'
    },
    {
      question: 'How does React update the UI efficiently?',
      options: [
        'By re-rendering the entire page',
        'By directly manipulating the DOM',
        'By using a virtual DOM',
        'By using a CSS library'
      ],
      answer: 'By using a virtual DOM'
    },
    {
      question: 'Which command is used to create a new React app?',
      options: [
        'npm start',
        'create-react-app',
        'npm install react',
        'npm run build'
      ],
      answer: 'create-react-app'
    },
    {
      question: 'What is the purpose of React Router?',
      options: [
        'To manage component state',
        'To handle routing in a React app',
        'To optimize performance',
        'To test components'
      ],
      answer: 'To handle routing in a React app'
    }
  ];

  const [currQnIndex, setCurrQnIndex] = useState(0);
  const [currAnswer, setCurrAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const getSelOption = (selOption) => {
    setCurrAnswer(selOption);
    if (selOption === questions[currQnIndex].answer)
      setScore(score + 1);
  }

  const handleNextQn = () => {
    setCurrQnIndex(currQnIndex + 1);
    setCurrAnswer(null);
  }

  const handleRetake = () => {
    setCurrQnIndex(0);
    setCurrAnswer(null)
    setScore(0);
  }

  return (
    <>
      <div>
        {currQnIndex < questions.length ?
          <div>
            <QuestionList question={questions[currQnIndex].question} options={questions[currQnIndex].options}
              getSelOption={getSelOption} currAnswer={currAnswer} />
            <button disabled={currAnswer === null} className={currAnswer === null ? 'button-disable' : 'button'}
              onClick={handleNextQn}>Next Question</button>
          </div> : <div className='result'>
            <h2>Result of the Quiz</h2>
            <div>Your total Score is {score}</div>
            {score >= 7 ? <div>
              <h3>CONGRATULATIONS</h3>
              <p>You Passed the exam</p>
            </div> : <div>
              <p>Ups! You did not pass the exam, as you scored less than 7</p>
              <p>You can retake the exam</p>
            </div>}
            <button onClick={handleRetake} className='retake-btn'>Retake Quiz</button>
          </div>}
      </div>
    </>
  )
}

export default Quiz;