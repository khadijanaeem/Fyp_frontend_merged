// app/questionnaire/components/QuestionnaireHeader.tsx
import React from 'react';
import { Questionnaire } from '@/app/models/questionnaire/types';

interface QuestionnaireHeaderProps {
  questionnaire: Questionnaire;
}

const QuestionnaireHeader: React.FC<QuestionnaireHeaderProps> = ({ questionnaire }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Questionnaire</h1>
      <p className="text-gray-600 mt-2">Manage feedback forms</p>
      
      <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-semibold text-gray-900">{questionnaire.title}</h2>
        <p className="text-gray-600 mt-1">{questionnaire.description}</p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span>Generated on {questionnaire.generatedDate}</span>
          <span>•</span>
          <span>{questionnaire.questionCount} questions</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireHeader;