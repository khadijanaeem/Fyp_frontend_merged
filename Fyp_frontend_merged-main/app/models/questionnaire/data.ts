// app/questionnaire/data.ts
import { Questionnaire } from './types';

export const questionnaireData: Questionnaire = {
  id: '1',
  title: 'Generic Employee Performance Questionnaire',
  description: 'Annual Employee Performance Review',
  generatedDate: '8/30/2024',
  questionCount: 10,
  questions: [
    {
      id: '1',
      category: 'Technical Competency',
      question: 'How would you rate this employee\'s technical skills and job-related competencies?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['Poor', 'Basic', 'Competent', 'Advanced', 'Expert']
      }
    },
    {
      id: '2',
      category: 'Communication',
      question: 'How effectively does this employee communicate with team members and stakeholders?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['Ineffective', 'Rarely Effective', 'Sometimes Effective', 'Usually Effective', 'Highly Effective']
      }
    },
    {
      id: '3',
      category: 'Collaboration',
      question: 'How would you describe this employee\'s teamwork and collaboration?',
      type: 'options',
      options: [
        'Excellent - Actively facilitates team success',
        'Good - Works well with others',
        'Average - Adequate team participation',
        'Needs improvement - Limited collaboration'
      ]
    },
    {
      id: '4',
      category: 'Problem Solving',
      question: 'How effectively does this employee identify and solve problems?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['Rarely', 'Occasionally', 'Regularly', 'Frequently', 'Always']
      }
    },
    {
      id: '5',
      category: 'Initiative',
      question: 'How would you rate this employee\'s ability to take initiative and work independently?',
      type: 'options',
      options: [
        'Exceptional - Consistently goes above and beyond',
        'Strong - Often takes initiative without direction',
        'Satisfactory - Takes initiative when prompted',
        'Needs improvement - Rarely shows initiative'
      ]
    },
    {
      id: '6',
      category: 'Quality of Work',
      question: 'How would you describe the quality and accuracy of this employee\'s work?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['Poor', 'Below Average', 'Meets Expectations', 'Exceeds Expectations', 'Outstanding']
      }
    },
    {
      id: '7',
      category: 'Adaptability',
      question: 'How well does this employee adapt to change and new challenges?',
      type: 'options',
      options: [
        'Highly adaptable - Embraces and drives change',
        'Adaptable - Adjusts well to new situations',
        'Somewhat adaptable - Needs support with change',
        'Resistant to change - Struggles with new challenges'
      ]
    },
    {
      id: '8',
      category: 'Leadership',
      question: 'How would you rate this employee\'s leadership skills and potential?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['No demonstrated leadership', 'Emerging leader', 'Competent leader', 'Strong leader', 'Exceptional leader']
      }
    },
    {
      id: '9',
      category: 'Time Management',
      question: 'How effectively does this employee manage time and meet deadlines?',
      type: 'options',
      options: [
        'Excellent - Always meets deadlines, exceptional time management',
        'Good - Usually meets deadlines, good time management',
        'Average - Sometimes misses deadlines',
        'Needs improvement - Frequently misses deadlines'
      ]
    },
    {
      id: '10',
      category: 'Overall Performance',
      question: 'Overall, how would you rate this employee\'s performance during the review period?',
      type: 'scale',
      scale: {
        min: 1,
        max: 5,
        labels: ['Unsatisfactory', 'Needs Improvement', 'Meets Expectations', 'Exceeds Expectations', 'Outstanding']
      }
    }
  ]
};