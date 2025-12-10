// app/increments/types.ts
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  currentSalary: number;
  recommendedSalary: number;
  incrementAmount: number;
  incrementPercentage: number;
  performanceScore: number;
  lastIncrement: string;
  status: 'pending' | 'approved' | 'on-hold';
  reviewDate: string;
  justification: string;
}

export interface Stats {
  pending: number;
  approved: number;
  onHold: number;
  pendingBudget: number;
  approvedBudget: number;
}