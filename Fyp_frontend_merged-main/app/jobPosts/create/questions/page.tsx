'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: string;
  text: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'url' | 'number' | 'file';
  required: boolean;
}

export default function ApplicationQuestions() {
  const router = useRouter();
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [customQuestions, setCustomQuestions] = useState<Question[]>([]);

  const commonQuestions: Question[] = [
    { id: '1', text: 'Full name?', type: 'text', required: true },
    { id: '2', text: 'Email address?', type: 'email', required: true },
    { id: '3', text: 'Phone number?', type: 'phone', required: true },
    { id: '4', text: 'GitHub Profile URL', type: 'url', required: false },
    { id: '5', text: 'Previous Experience', type: 'number', required: true },
    { id: '6', text: 'Upload your CV/Resume', type: 'file', required: true },
  ];

  const toggleQuestion = (questionId: string) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const addCustomQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      text: '',
      type: 'text',
      required: false,
    };
    setCustomQuestions([...customQuestions, newQuestion]);
  };

  const updateCustomQuestion = (id: string, field: string, value: any) => {
    setCustomQuestions(prev =>
      prev.map(q => q.id === id ? { ...q, [field]: value } : q)
    );
  };

  const removeCustomQuestion = (id: string) => {
    setCustomQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleSave = () => {
    // Save configuration
    console.log('Selected questions:', selectedQuestions);
    console.log('Custom questions:', customQuestions);
    router.push('/jobs');
  };

  // Get question type display name
  const getTypeDisplayName = (type: string) => {
    const typeMap: { [key: string]: string } = {
      'text': 'Text',
      'email': 'Email',
      'phone': 'Phone',
      'textarea': 'Text Area',
      'url': 'URL',
      'number': 'Number',
      'file': 'File Upload'
    };
    return typeMap[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Configure Application Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Select from predefined questions or add custom ones for this job posting.
          </p>

          {/* Common Questions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Select from Common Questions
            </h3>
            <div className="space-y-3">
              {commonQuestions.map((question) => (
                <div key={question.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedQuestions.includes(question.id)}
                      onChange={() => toggleQuestion(question.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <span className="block">{question.text}</span>
                      {question.id === '4' && (
                        <span className="text-xs text-gray-500">We will check your GitHub activity and projects</span>
                      )}
                      {question.id === '5' && (
                        <span className="text-xs text-gray-500">Previous professional experience in industry</span>
                      )}
                      {question.id === '6' && (
                        <span className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {getTypeDisplayName(question.type)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      question.required 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {question.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Questions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Custom Questions
            </h3>
            <div className="space-y-4">
              {customQuestions.map((question) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Question
                      </label>
                      <input
                        type="text"
                        value={question.text}
                        onChange={(e) => updateCustomQuestion(question.id, 'text', e.target.value)}
                        placeholder="Enter your question"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        value={question.type}
                        onChange={(e) => updateCustomQuestion(question.id, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="text">Text</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="textarea">Text Area</option>
                        <option value="url">URL</option>
                        <option value="number">Number</option>
                        <option value="file">File Upload</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={question.required}
                        onChange={(e) => updateCustomQuestion(question.id, 'required', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Required</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => removeCustomQuestion(question.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addCustomQuestion}
                className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
              >
                <span>+</span>
                Add Custom Question
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
            {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Application Form Preview
            </h3> */}
            <div className="space-y-4">
              {commonQuestions
                .filter(q => selectedQuestions.includes(q.id))
                .map((question) => (
                  <div key={question.id} className="p-3 bg-white rounded border">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {question.text} {question.required && <span className="text-red-500">*</span>}
                    </label>
                    {question.type === 'text' && (
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your answer"
                      />
                    )}
                    {question.type === 'email' && (
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="jawad123@example.com"
                      />
                    )}
                    {question.type === 'phone' && (
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(+92)3446789012"
                      />
                    )}
                    {question.type === 'url' && (
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://github.com/yourusername"
                      />
                    )}
                    {question.type === 'number' && (
                      <input
                        type="number"
                        min="0"
                        max="50"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    )}
                    {question.type === 'textarea' && (
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Enter your answer"
                      />
                    )}
                    {question.type === 'file' && (
                      <input
                        type="file"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.doc,.docx"
                      />
                    )}
                  </div>
                ))}
              {customQuestions.map((question) => (
                <div key={question.id} className="p-3 bg-white rounded border">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {question.text || 'Custom Question'} {question.required && <span className="text-red-500">*</span>}
                  </label>
                  {question.type === 'text' && (
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your answer"
                    />
                  )}
                  {question.type === 'email' && (
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="jawwad123@example.com"
                    />
                  )}
                  {question.type === 'phone' && (
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(+92)3446789012"
                    />
                  )}
                  {question.type === 'url' && (
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://example.com"
                    />
                  )}
                  {question.type === 'number' && (
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                    />
                  )}
                  {question.type === 'textarea' && (
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Enter your answer"
                    />
                  )}
                  {question.type === 'file' && (
                    <input
                      type="file"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-6 border-t">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}