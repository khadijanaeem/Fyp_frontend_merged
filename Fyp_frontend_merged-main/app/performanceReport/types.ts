export interface EmployeeScores {
  technical: number;
  leadership: number;
  communication: number;
  adaptability: number;
  quality: number;
  innovation: number;
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  overall: number;
  reviewDate: string;
  scores: EmployeeScores;
}
