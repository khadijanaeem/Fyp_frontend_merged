// app/questionnaire/components/ActionButtons.tsx
'use client';

import React from 'react';

const ActionButtons: React.FC = () => {
  const handleSaveDraft = () => {
    console.log('Saving draft...');
    // Implement save draft logic
  };

  const handlePublish = () => {
    console.log('Publishing questionnaire...');
    // Implement publish logic
  };

  const handlePreview = () => {
    console.log('Previewing questionnaire...');
    // Implement preview logic
  };

  return (
    <div className="flex gap-3 justify-end mt-6">
      <button
        onClick={handleSaveDraft}
        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Save as Draft
      </button>
      <button
        onClick={handlePreview}
        className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Preview
      </button>
      <button
        onClick={handlePublish}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Publish Questionnaire
      </button>
    </div>
  );
};

export default ActionButtons;