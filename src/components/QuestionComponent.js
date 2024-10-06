import React, { useState } from 'react';

const QuestionComponent = ({ question, players, setCurrentQuestionIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === question.answer) {
      setResultMessage('Congratulations! You got it right!');
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setResultMessage('');
      }, 2000);
    } else {
      alert('Wrong answer! Try again.');
    }
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              value={option.charAt(0)} // A, B, C, or D
              checked={selectedAnswer === option.charAt(0)}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
      {resultMessage && <h3>{resultMessage}</h3>}
    </div>
  );
};

export default QuestionComponent;
