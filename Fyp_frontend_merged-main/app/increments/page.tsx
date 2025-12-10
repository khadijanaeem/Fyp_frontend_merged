// app/increments/page.tsx
import Sidebar from "../components/Sidebar/Sidebar"  

import Navbar from "../components/Navbar3";
import React from 'react';
import StatsCards from '../components/increments/StatsCards';
import FiltersSection from '../components/increments/FiltersSection';
import EmployeeCard from '../components/increments/EmployeeCard';
import StatusSummary from '../components/increments/StatusSummary';
import { Employee, Stats } from './types';

const incrementsPage = () => {
  const employees: Employee[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      currentSalary: 120000,
      recommendedSalary: 132000,
      incrementAmount: 12000,
      incrementPercentage: 10,
      performanceScore: 4.3,
      lastIncrement: '9/1/2023',
      status: 'pending',
      reviewDate: '9/1/2024',
      justification: 'Exceptional performance with score of 4.3/5. Consistently exceeds expectations and demonstrates strong leadership.'
    },
    {
      id: '2',
      name: 'David Rodriguez',
      position: 'Marketing Specialist',
      department: 'Marketing',
      currentSalary: 75000,
      recommendedSalary: 82500,
      incrementAmount: 7500,
      incrementPercentage: 10,
      performanceScore: 4.1,
      lastIncrement: '9/1/2023',
      status: 'pending',
      reviewDate: '9/1/2024',
      justification: 'Outstanding performance with score of 4.1/5. Strong contributions to marketing campaigns and team collaboration.'
    }
  ];

  const stats: Stats = {
    pending: 5,
    approved: 2,
    onHold: 1,
    pendingBudget: 38750,
    approvedBudget: 20500
  };
  
  return (
    <div className="min-h-screenbg-[#F5F6FF]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Responsive margin for sidebar */}
        <div className="pt-15 flex-1 lg:ml-64 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
            {/* Page Title - Responsive spacing */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Increments</h2>
              <p className="text-gray-600 mt-1 lg:mt-2">Salary decisions</p>
            </div>

            {/* Rest of the components */}
            <StatsCards stats={stats} />
            <FiltersSection />
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Showing {employees.length} of {employees.length} employees</p>
              {/* Responsive grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
                {employees.map((employee) => (
                  <EmployeeCard key={employee.id} employee={employee} />
                ))}
              </div>
            </div>

            <StatusSummary stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default incrementsPage;