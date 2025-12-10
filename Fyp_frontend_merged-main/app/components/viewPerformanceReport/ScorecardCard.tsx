import { Employee } from "@/app/performanceReport/types";
export default function ScorecardCard({ employee }: { employee: Employee }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="font-semibold text-lg">{employee.name}</h3>
      <p className="text-sm text-gray-500">{employee.role}</p>

      <div className="text-3xl font-bold mt-2 mb-2">
        {employee.overall.toFixed(1)}
      </div>

      <div className="text-gray-500 text-sm mb-4">
        Completed • Review: {employee.reviewDate}
      </div>

      <div className="space-y-1">
        <p>Technical: {employee.scores.technical}</p>
        <p>Leadership: {employee.scores.leadership}</p>
        <p>Communication: {employee.scores.communication}</p>
        <p>Adaptability: {employee.scores.adaptability}</p>
        <p>Quality: {employee.scores.quality}</p>
        <p>Innovation: {employee.scores.innovation}</p>
      </div>
    </div>
  );
}
