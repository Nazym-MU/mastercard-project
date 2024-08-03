import React, { useState } from 'react';
import '../Prototype.css';
import { FaArrowRight, FaArrowLeft, FaRedo, FaPrint } from 'react-icons/fa';

const Prototype = () => {
  const [stage, setStage] = useState('intro');
  const [userRole, setUserRole] = useState('');
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const roles = [
    'Executive/Director',
    'Technical Role (Data Scientist, ML Engineer, etc.)',
    'Managerial Role (Department Head, Project Manager, etc.)',
    'Non-technical Role (Customer Support, Operations, etc.)'
  ];

  const questions = {
    'Executive/Director': [
      {
        id: 'ai_utilization',
        question: "What is the scope of your organisation's current AI technology utilisation?",
        options: [
          'We deploy AI extensively with full ethical oversight.',
          'We use AI in select departments/projects with some ethical guidelines.',
          'We are beginning to explore AI options, including ethical considerations.',
          "We use AI but haven't considered the ethical implications.",
          "We don't use AI and have no knowledge of its ethical aspects."
        ]
      },
      {
        id: 'ai_alignment',
        question: 'To what degree do AI initiatives align with the overall business strategy and goals of the company?',
        options: ['Fully aligned', 'Mostly aligned', 'Partially aligned', 'Minimally aligned', 'Not aligned']
      },
      {
        id: 'ai_budget',
        question: 'Do you have a comprehensive budget across both tech and change management for AI implementation?',
        options: [
          'Yes, for both tech and change management.',
          'Yes, but only for tech.',
          'Yes, but only for change management.',
          'No, we do not have a comprehensive budget.'
        ]
      },
      {
        id: 'data_privacy_compliance',
        question: 'What is the level of awareness of and compliance with relevant data protection and privacy regulations across the organization?',
        options: [
          'Fully aware and compliant',
          'Mostly aware and compliant',
          'Partially aware and compliant',
          'Minimally aware and compliant',
          'Not aware nor compliant'
        ]
      },
      {
        id: 'risk_management',
        question: 'Do you have a centralized function for risk management within your organization?',
        options: ['Yes', 'No']
      },
      {
        id: 'data_privacy',
        question: 'How does your organization handle data privacy and security in the context of AI?',
        options: [
          'We maintain strict data governance with regular audits and updates.',
          'We have basic data governance policies but are working to improve them.',
          'We rely on third-party tools/vendors for data governance.',
          'We handle data without specific AI-related policies.',
          "We don't have any data governance mechanisms."
        ]
      },
      {
        id: 'digitalization',
        question: 'How would you rate the level of digitalization in business processes in your organization?',
        options: [
          'AI-Lead/Transformative level',
          'Advanced',
          'Connected',
          'Emerging',
          'Initial/Basic level'
        ]
      },
      {
        id: 'ethics_committee',
        question: 'Do you have an AI ethics committee, and does every AI initiative undergo an ethical review?',
        options: ['Yes', 'No']
      }
    ],
    'Technical Role (Data Scientist, ML Engineer, etc.)': [
      {
        id: 'infrastructure',
        question: 'To what degree do you support and maintain the current software and infrastructure that you depend on yourself?',
        options: [
          'Fully supported and maintained internally',
          'Mostly supported and maintained internally',
          'Partially supported and maintained internally',
          'Minimally supported and maintained internally',
          'Not supported and maintained internally'
        ]
      },
      {
        id: 'tech_stack',
        question: 'Which of the following statements apply to your organization? (Select all that apply)',
        options: [
          'We plan to purchase local infrastructure for AI.',
          'We have local infrastructure for AI.',
          'We plan to use cloud infrastructure for AI.',
          'We plan to train/hire data engineers.',
          'We have internal data engineers.',
          'We plan to train/hire data scientists.',
          'We have internal data scientists.',
          'We plan to train/hire ML engineers.',
          'We have internal ML engineers.',
          'We plan to train/hire MLOps engineers.',
          'We have internal MLOps engineers.'
        ],
        multiple: true
      },
      {
        id: 'integration',
        question: 'How would you rate the level of integration and the maturity of integration solutions that are used across your system landscape?',
        options: [
          'Highly integrated and mature',
          'Mostly integrated and mature',
          'Partially integrated and mature',
          'Minimally integrated and mature',
          'Not integrated nor mature'
        ]
      },
      {
        id: 'ai_pitfalls',
        question: 'How is your organization addressing potential pitfalls, like hallucinations caused by large AI models?',
        options: [
          'We have strong preventive measures and routinely check for such issues.',
          'We occasionally review our models for hallucinations and inaccuracies.',
          'We rely on third-party tools/vendors without a deep understanding.',
          "We haven't encountered this issue but are interested in solutions.",
          "We aren't aware of such pitfalls."
        ]
      },
      {
        id: 'ai_products',
        question: 'Do you plan on providing AI products or services as part of your offering?',
        options: ['Yes', 'No']
      }
    ],
    'Managerial Role (Department Head, Project Manager, etc.)': [
      {
        id: 'employee_readiness',
        question: "How would you rate your employees' willingness to adopt new digital technologies and practices",
        options: ['Very willing', 'Somewhat willing', 'Neutral', 'Somewhat unwilling', 'Very unwilling']
      },
      {
        id: 'customer_readiness',
        question: "How would you rate your customers' willingness to adopt new digital technologies and practices?",
        options: ['Very willing', 'Somewhat willing', 'Neutral', 'Somewhat unwilling', 'Very unwilling']
      },
      {
        id: 'ai_training',
        question: 'Do you have AI training programs available to all employees, with specialized tracks for different roles?',
        options: ['Yes', 'No']
      },
      {
        id: 'ai_budget',
        question: 'Do you allocate an experimental budget to AI (often a percent of revenue or R&D re-allocation)?',
        options: ['Yes', 'No']
      },
      {
        id: 'ai_value_areas',
        question: 'To what degree have you identified specific business areas or processes where AI can add significant value in your business?',
        options: ['Fully identified', 'Mostly identified', 'Partially identified', 'Minimally identified', 'Not identified']
      },
      {
        id: 'change_management',
        question: 'To what degree do you have a change management plan in place to handle the organizational shifts due to AI implementation?',
        options: ['Fully in place', 'Mostly in place', 'Partially in place', 'Minimally in place', 'Not in place']
      },
      {
        id: 'ai_scalability',
        question: 'To what degree have you considered the scalability of AI solutions for future expansion?',
        options: ['Fully considered', 'Mostly considered', 'Partially considered', 'Minimally considered', 'Not considered']
      }
    ],
    'Non-technical Role (Customer Support, Operations, etc.)': [
      {
        id: 'ai_awareness',
        question: 'Are you aware of the AI tools being used in your department?',
        options: ['Yes', 'No']
      },
      {
        id: 'ai_confidence',
        question: 'Do you feel confident in using the AI tools provided for your work?',
        options: ['Very confident', 'Somewhat confident', 'Neutral', 'Somewhat unconfident', 'Very unconfident']
      },
      {
        id: 'ai_training_interest',
        question: 'Would you be interested in taking a course to improve your AI skills?',
        options: ['Yes', 'No']
      },
      {
        id: 'feedback_mechanisms',
        question: 'To what degree does your organization have mechanisms for collecting feedback on business processes (internal and external) in general?',
        options: ['Very high degree', 'High degree', 'Moderate degree', 'Low degree', 'Very low degree']
      },
      {
        id: 'ai_feedback',
        question: 'Does your organization have feedback mechanisms in place to gather stakeholder input on your AI implementations?',
        options: ['Yes', 'No']
      },
      {
        id: 'customer_impact',
        question: 'To what degree do you understand how an AI implementation will affect your customers and do you have plans to manage these impacts?',
        options: [
          'Fully understand and have plans',
          'Mostly understand and have plans',
          'Partially understand and have plans',
          'Minimally understand and have plans',
          'Do not understand nor have plans'
        ]
      }
    ]
  };

  const handleAnswer = (id, value, isMultiple) => {
    if (isMultiple) {
      const currentAnswers = answers[id] || [];
      if (currentAnswers.includes(value)) {
        setAnswers({
          ...answers,
          [id]: currentAnswers.filter((answer) => answer !== value),
        });
      } else {
        setAnswers({
          ...answers,
          [id]: [...currentAnswers, value],
        });
      }
    } else {
      setAnswers({
        ...answers,
        [id]: value,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions[userRole].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStage('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStage('intro');
    }
  };

  const handleStartOver = () => {
    setStage('intro');
    setUserRole('');
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const renderIntro = () => (
    <div className="intro">
      <h1>AI Readiness Assessment for Banks</h1>
      <p>What is your role in the bank?</p>
      <select onChange={(e) => setUserRole(e.target.value)}>
        <option value="">Select...</option>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <button onClick={() => setStage('assessment')} disabled={!userRole}>Start Assessment</button>
    </div>
  );

  const renderAssessment = () => {
    const currentQuestion = questions[userRole][currentQuestionIndex];
    return (
      <div className="assessment">
        <h2>Question {currentQuestionIndex + 1} of {questions[userRole].length}</h2>
        <div className="question">
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="option">
              <input 
                type={currentQuestion.multiple ? "checkbox" : "radio"}
                id={`${currentQuestion.id}_${index}`} 
                name={currentQuestion.id} 
                value={option}
                checked={
                  currentQuestion.multiple
                    ? (answers[currentQuestion.id] || []).includes(option)
                    :
                  answers[currentQuestion.id] === option
                }
                onChange={() => handleAnswer(currentQuestion.id, option, currentQuestion.multiple)}
              />
              <label htmlFor={`${currentQuestion.id}_${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={handleBack}><FaArrowLeft /></button>
          <button onClick={handleNext}
          disabled={!answers[currentQuestion.id] || (currentQuestion.multiple && answers[currentQuestion.id].length) === 0}><FaArrowRight /></button>
        </div>
      </div>
    );
  };

  const generateRecommendations = () => {
    return "Tailored recommendations based on your responses...";
  };

  const renderResults = () => (
    <div className="results">
      <h2>Your AI Readiness Results</h2>
      <p>Based on your responses, here are your results:</p>
      <h3>Recommendations:</h3>
      <p>{generateRecommendations()}</p>
      <div className="navigation">
        <button onClick={handleStartOver}><FaRedo /></button>
        <button onClick={() => window.print()}><FaPrint /></button>
      </div>
    </div>
  );

  return (<div className='prototype' id='prototype'>
      <div className="prototype-container">
        {stage === 'intro' && renderIntro()}
        {stage === 'assessment' && renderAssessment()}
        {stage === 'results' && renderResults()}
      </div>
    </div>
  );
};

export default Prototype;