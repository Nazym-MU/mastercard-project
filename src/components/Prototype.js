import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import html2canvas from 'html2canvas';
import '../Prototype.css';

const Prototype = () => {
  const [role, setRole] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [step, setStep] = useState('role');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const roles = ['C-Suite', 'IT and Data Science', 'Risk and Compliance', 'Human Resources Manager', 'Customer Service Team', 'Marketing Manager', 'Cybersecurity Manager'];

  useEffect(() => {
    if (role) {
      axios.get(`http://localhost:3001/api/questions/${role}`)
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
    try {
      const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
        questionId,
        answer,
      }));
  
      const response = await axios.post('http://localhost:3001/api/survey', { role, responses: formattedResponses });
      setRecommendations(response.data);
      setStep('recommendations');
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  }, [role, responses]);

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

  const handleDownloadReport = useCallback(async () => {
    try {
      const content = document.getElementById('report-content');

      // Capture the content to be included in the PDF
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);

      // Add the image to the PDF
      const img = await pdfDoc.embedPng(imgData);
      page.drawImage(img, {
        x: 0,
        y: 0,
        width: page.getWidth(),
        height: page.getHeight(),
      });

      // Set font and styling
      const fontBytes = await fetch('/path-to-your-font/your-font.ttf').then(res => res.arrayBuffer());
      const font = await pdfDoc.embedFont(fontBytes);

      page.setFont(font);
      page.setFontSize(12);
      page.setTextColor(rgb(0, 0, 0));

      // Generate the PDF
      const pdfBytes = await pdfDoc.save();

      // Create a link to download the PDF
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
      link.download = 'report.pdf';
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }, []); // No need for recommendations in dependencies

  const renderQuestion = useCallback((question) => {
    switch (question.type) {
      case 'single-choice':
        return (
          <>
            {question.options.map(option => (
              <button
                key={option}
                onClick={() => handleAnswer(question.questionId, option)}
                className={responses[question.questionId] === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </>
        );
      case 'open-ended':
        return (
          <textarea
            value={responses[question.questionId] || ''}
            onChange={(e) => handleAnswer(question.questionId, e.target.value)}
            rows={4}
            cols={50}
          />
        );
      default:
        return null;
    }
  }, [responses, handleAnswer]);

  if (step === 'role') {
    return (
      <div className='prototype-container'>
        <h2>Select Your Role</h2>
        {roles.map(r => (
          <button key={r} onClick={() => handleRoleSelect(r)}>{r}</button>
        ))}
      </div>
    );
  }

  if (step === 'questions') {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return <div>Loading...</div>;

    return (
      <div className='prototype-container'>
        <h2>AI Adoption Assessment for {role}</h2>
        <div key={currentQuestion.questionId}>
          <p>{currentQuestion.text}</p>
          {renderQuestion(currentQuestion)}
        </div>
        <div>
          <button onClick={handleBack} disabled={currentQuestionIndex === 0}>Back</button>
          <button 
            onClick={handleNext} 
            disabled={!responses[currentQuestion.questionId]}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    );
  }

  if (step === 'recommendations') {
    if (!recommendations) return <div>Loading recommendations...</div>;

    return (
      <div className='prototype-container'>
        <h2>AI Maturity Assessment Summary</h2>
        <div id="report-content">
          <div>{recommendations.summary}</div>
          
          <h3>Detailed Recommendations</h3>
          {recommendations.detailedRecommendations.map((rec, index) => (
            <div key={index}>
              <h4>{rec.category}</h4>
              <p><strong>Question:</strong> {rec.question}</p>
              <p><strong>Your Answer:</strong> {rec.answer}</p>
              <p><strong>Status:</strong> {rec.status}</p>
              <p><strong>Recommendation:</strong> {rec.recommendation}</p>
            </div>
          ))}
        </div>
        <button onClick={handleDownloadReport}>Download Report</button>
      </div>
    );
  }

  return <div>Something went wrong. Please try again.</div>;
};

export default Prototype;
