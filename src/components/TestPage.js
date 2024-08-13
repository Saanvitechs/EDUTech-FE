import React, { useState, useEffect, useCallback } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import './TestPage.css';

const TestPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [testContent, setTestContent] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(12); // 20 minutes
  const [responses, setResponses] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubmit = useCallback(() => {
    console.log("Test submitted with responses:", responses);
    // Logic to send responses to the backend or save them
    navigate('/thank-you');
  }, [responses, navigate]);

  useEffect(() => {
    const tests = {
        1: {
                        id: 1,
                        name: "IBPS Clerk 2023 Prelims - 1",
                        questions: [
                          {
                            id: 1,
                            text: "As per the passage, humidity index or humidex:",
                            options: [
                              "is a warning system to determine threats",
                              "is a method of calculation used to determine temperatures in different timezones",
                              "is a flawed method of calculation",
                              "is a method used to determine how much discomfort a person might experience in the heat",
                              "is a method used in weather forecasting"
                            ],
                          },
                          {
                            id: 2,
                            text: "What is the capital of France?",
                            options: [
                              "Paris",
                              "London",
                              "Berlin",
                              "Madrid"
                            ],
                          },
                          {
                            id: 3,
                            text: "Which planet is known as the Red Planet?",
                            options: [
                              "Mars",
                              "Venus",
                              "Jupiter",
                              "Saturn"
                            ],
                          },
                          {
                            id: 4,
                            text: "What is the boiling point of water?",
                            options: [
                              "90°C",
                              "100°C",
                              "110°C",
                              "120°C"
                            ],
                          },
                          {
                            id: 5,
                            text: "Which is the largest ocean on Earth?",
                            options: [
                              "Atlantic Ocean",
                              "Indian Ocean",
                              "Arctic Ocean",
                              "Pacific Ocean"
                            ],
                          },
                          {
                            id: 6,
                            text: "Who wrote 'Hamlet'?",
                            options: [
                              "Charles Dickens",
                              "William Shakespeare",
                              "Mark Twain",
                              "Leo Tolstoy"
                            ],
                          },
                          {
                            id: 7,
                            text: "Which element has the chemical symbol 'O'?",
                            options: [
                              "Osmium",
                              "Oxygen",
                              "Oganesson",
                              "Oxygenium"
                            ],
                          },
                          {
                            id: 8,
                            text: "How many continents are there on Earth?",
                            options: [
                              "5",
                              "6",
                              "7",
                              "8"
                            ],
                          },
                          {
                            id: 9,
                            text: "What is the chemical formula for water?",
                            options: [
                              "H2O",
                              "CO2",
                              "O2",
                              "NaCl"
                            ],
                          },
                          {
                            id: 10,
                            text: "Which country is known as the Land of the Rising Sun?",
                            options: [
                              "China",
                              "Japan",
                              "South Korea",
                              "Thailand"
                            ],
                          },
                        ],
                      },
                      2: {
                        id: 2,
                        name: "IBPS Clerk 2023 Prelims - 2",
                        questions: [
                          {
                            id: 1,
                            text: "What is the capital of Germany?",
                            options: [
                              "Berlin",
                              "Paris",
                              "London",
                              "Rome"
                            ],
                          },
                          {
                            id: 2,
                            text: "Which one of the following is a mammal?",
                            options: [
                              "Shark",
                              "Salmon",
                              "Dolphin",
                              "Octopus"
                            ],
                          },
                        ],
                      },
                      3: {
                        id: 3,
                        name: "IBPS Clerk 2023 Prelims - 3",
                        questions: [
                          {
                            id: 1,
                            text: "Which planet is known as the Red Planet?",
                            options: [
                              "Mars",
                              "Venus",
                              "Jupiter",
                              "Saturn"
                            ],
                          },
                          {
                            id: 2,
                            text: "What is the boiling point of water?",
                            options: [
                              "90°C",
                              "100°C",
                              "110°C",
                              "120°C"
                            ],
                          },
                        ],
                      },
                    };
    setTestContent(tests[testId]);

    const timerInterval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timerInterval);
          handleSubmit();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [testId, handleSubmit]);

  const handleOptionChange = (questionId, option) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleClearResponse = () => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [testContent.questions[currentQuestionIndex].id]: undefined,
    }));
  };

  const handleMarkForReview = () => {
    const questionId = testContent.questions[currentQuestionIndex].id;
    setMarkedForReview(prevState => ({
      ...prevState,
      [questionId]: true,
    }));
    handleNextQuestion();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % testContent.questions.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? testContent.questions.length - 1 : prevIndex - 1
    );
  };

  if (!testContent) {
    return <p>Loading test...</p>;
  }

  const currentQuestion = testContent.questions[currentQuestionIndex];

  return (
    <div className="test-page">
      <div className="timer-top-left">
        <div className="timer">
          Time Left: {formatTime(timeRemaining)}
        </div>
      </div>

      <header className="test-header">
        <div className="test-title">
          <h1>{testContent.name}</h1>
        </div>
      </header>

      <div className="test-body">
        <div className="question-area">
          <h3>Question No. {currentQuestion.id}</h3>
          <p className="question-text">{currentQuestion.text}</p>
          <form>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="option">
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={responses[currentQuestion.id] === option}
                    onChange={() => handleOptionChange(currentQuestion.id, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
        </div>
        <div className="question-navigation-area">
          {testContent.questions.map((q, index) => (
            <div
              key={q.id}
              className={`question-box ${responses[q.id] ? 'answered' : ''} ${markedForReview[q.id] ? 'marked' : ''}`}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {q.id}
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-area">
        <div className="question-navigation">
          <button onClick={handlePreviousQuestion}>Previous</button>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
        <div className="actions">
          <button className="mark-button" onClick={handleMarkForReview}>Mark for Review & Next</button>
          <button className="clear-button" onClick={handleClearResponse}>Clear Response</button>
          <button className="save-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
