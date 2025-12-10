// app/questionnaire/components/QuestionPreview.tsx
import React from 'react';
import { Question } from '@/app/models/questionnaire/types';

interface QuestionPreviewProps {
  question: Question;
  index: number;
}

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ question, index }) => {
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'scale':
        return (
          <div className="mt-3">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              {question.scale?.labels?.map((label, i) => (
                <span key={i}>{label}</span>
              ))}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: (question.scale?.max || 5) - (question.scale?.min || 1) + 1 }, (_, i) => (
                <button
                  key={i}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center text-sm font-medium"
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'options':
        return (
          <div className="mt-3 space-y-2">
            {question.options?.map((option, optionIndex) => (
              <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        );
      
      default:
        return (
          <textarea
            placeholder="Enter your response here..."
            className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
          />
        );
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {index + 1}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {question.category}
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            {question.question}
          </h3>
          {renderQuestionInput()}
        </div>
      </div>
    </div>
  );
};

export default QuestionPreview;