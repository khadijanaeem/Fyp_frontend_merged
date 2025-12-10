// app/questionnaire/types.ts
export interface Question {
  id: string;
  category: string;
  question: string;
  type: 'scale' | 'options' | 'text';
  options?: string[];
  scale?: {
    min: number;
    max: number;
    labels?: string[];
  };
}

export interface Questionnaire {
  id: string;
  title: string;
  description: string;
  generatedDate: string;
  questionCount: number;
  questions: Question[];
}