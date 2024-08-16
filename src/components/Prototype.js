import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PDFReport from './PDFReport';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Prototype.css';

const Prototype = () => {
  const [role, setRole] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [step, setStep] = useState('role');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const roles = ['C-Suite', 'IT and Data Science', 'Risk and Compliance', 'Human Resources Manager', 'Customer Service Team', 'Marketing Manager', 'Cybersecurity Manager'];


  useEffect(() => {
    if (role) {
      const apiUrl = process.env.REACT_APP_API_URL;
      axios.get(`${apiUrl}/api/questions/${encodeURIComponent(role)}`)
        .then(res => setQuestions(res.data))
        .catch(error => console.error('Error fetching questions:', error));
    }
  }, [role]);

  const handleRoleSelect = useCallback((selectedRole) => {
    setRole(selectedRole);
    setStep('questions');
    setCurrentQuestionIndex(0);
    setResponses({});
  }, []);

  const handleAnswer = useCallback((questionId, answer) => {
    setResponses(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    setStep('recommendations');
    try {
      const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
        questionId,
        answer,
      }));
  
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/api/survey`, { role, responses: formattedResponses });
      console.log("Received recommendations:", response.data);
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error submitting survey:', error);
      setStep('questions'); 
    } finally {
      setIsLoading(false);
      setLoadingProgress(0);
    }
  }, [role, responses]);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => (prev < 100 ? prev + 10 : 100));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  }, [currentQuestionIndex, questions.length, handleSubmit]);

  const handleBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const renderQuestion = useCallback((question) => {
    switch (question.type) {
      case 'single-choice':
        return (
          <div className="options-column">
            {question.options.map(option => (
              <button
                key={option}
                onClick={() => handleAnswer(question.questionId, option)}
                className={`option-button ${responses[question.questionId] === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case 'open-ended':
        return (
          <textarea
            value={responses[question.questionId] || ''}
            onChange={(e) => handleAnswer(question.questionId, e.target.value)}
            rows={4}
            style={{ width: '100%' }}
          />
        );
      default:
        return null;
    }
  }, [responses, handleAnswer]);

  if (step === 'role') {
    return (
      <div className='prototype' id='prototype'>
        <div className='prototype-container'>
          <h2>Select Your Role</h2>
          <div className="options-column">
            {roles.map(r => (
              <button key={r} onClick={() => handleRoleSelect(r)}>{r}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return <div>Loading...</div>;

    return (
      <div className='prototype' id='prototype'>
        <div className='prototype-container'>
          <h2>AI Adoption Assessment for {role}</h2>
          <div className="question">
            <p>{currentQuestion.text}</p>
            {renderQuestion(currentQuestion)}
          </div>
          <div className="navigation">
            <button onClick={handleBack} disabled={currentQuestionIndex === 0}>
              <FaChevronLeft />
            </button>
            <button 
              onClick={handleNext} 
              disabled={!responses[currentQuestion.questionId]}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'recommendations') {
    if (isLoading) {
      return (
        <div className='prototype' id='prototype'>
          <div className='prototype-container'>
            <h2>Generating Report...</h2>
            <div className="loading-bar">
              <div className="loading-progress" style={{width: `${loadingProgress}%`}}></div>
            </div>
            <p>{loadingProgress}% Complete</p>
          </div>
        </div>
      );
    }

    if (!recommendations) return <div>Loading recommendations...</div>;

    return (
      <div className='prototype' id='prototype'>
        <div className='prototype-container'>
          <h2>AI Adoption Assessment Results</h2>
          <PDFReport recommendations={recommendations} />
        </div>
      </div>
    );
  }

  return <div>Something went wrong. Please try again.</div>;
};

export default Prototype;
