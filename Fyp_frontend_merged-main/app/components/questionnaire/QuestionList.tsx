// app/questionnaire/components/QuestionList.tsx
import React from 'react';
import { Questionnaire } from '@/app/models/questionnaire/types';
import QuestionPreview from './QuestionPreview';

interface QuestionListProps {
  questionnaire: Questionnaire;
}

const QuestionList: React.FC<QuestionListProps> = ({ questionnaire }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Questions Preview ({questionnaire.questionCount} questions)
      </h3>
      
      <div className="space-y-4">
        {questionnaire.questions.map((question, index) => (
          <QuestionPreview
            key={question.id}
            question={question}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;