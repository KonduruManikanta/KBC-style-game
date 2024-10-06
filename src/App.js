/* eslint-disable no-unused-vars */

import QRCodeComponent from './components/QRCodeComponent';

import React, { useState } from 'react';

import './styles.css';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"],
        answer: "C) Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["A) Mark Twain", "B) William Shakespeare", "C) Leo Tolstoy", "D) Charles Dickens"],
        answer: "B) William Shakespeare"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["A) Mars", "B) Earth", "C) Mercury", "D) Venus"],
        answer: "C) Mercury"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["A) Gold", "B) Oxygen", "C) Silver", "D) Helium"],
        answer: "B) Oxygen"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Saturn"],
        answer: "B) Mars"
    }
];

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [playerName, setPlayerName] = useState('');
    const [message, setMessage] = useState('');
    const [correctPlayers, setCorrectPlayers] = useState([]);

    const handleAnswerClick = (selectedAnswer) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        
        if (selectedAnswer === correctAnswer) {
            setMessage(`Congratulations ${playerName}!`);
            setCorrectPlayers(prev => [...prev, playerName]);

            // Move to the next question after a short delay
            setTimeout(() => {
                setMessage('');
                setCurrentQuestionIndex(prev => prev + 1);
            }, 2000);
        } else {
            // Send feedback to player (this could be improved to handle mobile response)
            alert(`Wrong answer, ${playerName}! The correct answer was: ${correctAnswer}`);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container">
            <h1>KBC Style Game</h1>
            <QRCodeComponent />
            <div className="question">{currentQuestion ? currentQuestion.question : "Game Over!"}</div>
            {currentQuestion && (
                <ul className="answers">
                    {currentQuestion.options.map((option, index) => (
                        <li key={index} onClick={() => handleAnswerClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {message && <div className="message">{message}</div>}
            <div className="players">
                <h2>Correct Players:</h2>
                <ul>
                    {correctPlayers.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
            {!currentQuestion && <div className="message">All questions answered! Thank you for playing.</div>}
        </div>
    );
};

export default App;
