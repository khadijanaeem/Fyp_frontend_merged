// app/increments/components/StatusSummary.tsx
import React from 'react';
import { Stats } from '@/app/increments/types'

interface StatusSummaryProps {
  stats: Stats;
}

const StatusSummary: React.FC<StatusSummaryProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="text-center">
          <span className="text-yellow-600 font-semibold">Pending: {stats.pending}</span>
        </div>
        <div className="text-center">
          <span className="text-green-600 font-semibold">Approved: {stats.approved}</span>
        </div>
        <div className="text-center">
          <span className="text-red-600 font-semibold">On Hold: {stats.onHold}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusSummary;