// app/increments/components/EmployeeCard.tsx
'use client';

import React from 'react';
import { Employee } from '@/app/increments/types'  

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const getStatusBadge = (status: Employee['status']) => {
    const statusConfig = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending Review' },
      approved: { bg: 'bg-green-100', text: 'text-green-800', label: 'Approved' },
      'on-hold': { bg: 'bg-red-100', text: 'text-red-800', label: 'On Hold' }
    };

    const config = statusConfig[status];
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const handleApprove = () => {
    // Implement approve logic
    console.log('Approving increment for:', employee.name);
  };

  const handleEdit = () => {
    // Implement edit logic
    console.log('Editing increment for:', employee.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {/* Employee Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{employee.name}</h3>
          <p className="text-gray-600">{employee.position}</p>
          <span className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded mt-1">
            {employee.department}
          </span>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">Performance:</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
              {employee.performanceScore}/5.0
            </span>
          </div>
          {getStatusBadge(employee.status)}
        </div>
      </div>

      {/* Salary Information */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Current Salary</p>
          <p className="text-lg font-semibold text-gray-900">
            ${employee.currentSalary.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Recommended Salary</p>
          <p className="text-lg font-semibold text-gray-900">
            ${employee.recommendedSalary.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Increment Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Increment Amount:</p>
          <p className="font-semibold text-green-600">
            +${employee.incrementAmount.toLocaleString()} ({employee.incrementPercentage}%)
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Performance Score:</p>
          <p className="font-semibold text-gray-900">{employee.performanceScore}/5.0</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Last Increment:</p>
          <p className="font-semibold text-gray-900">{employee.lastIncrement}</p>
        </div>
      </div>

      {/* Justification */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 mb-2">Justification:</p>
        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{employee.justification}</p>
      </div>

      {/* Review Date and Actions */}
      <div className="flex justify-between items-center pt-4 border-t">
        <div className="text-sm text-gray-600">
          Review Date: {employee.reviewDate}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleApprove}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Approve
          </button>
          <button 
            onClick={handleEdit}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;