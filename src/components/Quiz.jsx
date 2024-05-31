'use client'
import React, { useState } from 'react'
import quiz from '../../Data/data';

const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2); 
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container flex flex-col gap-[40px] text-white items-center justify-center sm:px-10px">
      {showScore ? (
        <div className="score-section flex flex-col gap-5">
            <p className='h2 text-[36px] sm:text-[25px]'>You scored {score} out of {quiz.length * 2}</p>
            <button onClick={handleRetakeQuiz} className="border p-2 rounded-lg mt-4 btn">
              Retake Quiz
            </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count center">
              <span className='text-[50px] sm:text-[40px]'>Question {currentQuestion + 1}</span><span className='text-[50px] sm:text-[40px]'>/{quiz.length}</span>
            </div>
            <div className="question-text text-2xl">{quiz[currentQuestion].question}</div>
          </div>
          <div className="answer-section grid grid-cols-2 gap-3 sm:grid-cols-1 sm:w-full">
            {quiz[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option === quiz[currentQuestion].answer)} className='border p-2 rounded-lg lg:w-full'>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz2;
