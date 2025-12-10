// app/increments/components/StatsCards.tsx
import React from 'react';
import { Stats } from '@/app/increments/types' 
interface StatsCardsProps {
  stats: Stats;
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Pending Reviews',
      value: stats.pending,
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      icon: '!'
    },
    {
      label: 'Approved',
      value: stats.approved,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      icon: '✓'
    },
    {
      label: 'Pending Budget',
      value: `$${stats.pendingBudget.toLocaleString()}`,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      icon: '$'
    },
    {
      label: 'Approved Budget',
      value: `$${stats.approvedBudget.toLocaleString()}`,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      icon: '$'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {statItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{item.value}</p>
            </div>
            <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
              <span className={`${item.textColor} font-semibold`}>{item.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;