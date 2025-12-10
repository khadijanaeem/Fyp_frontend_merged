import employees from "./performanceData";
export default function TopPerformers() {
  const top3 = [...employees]
    .sort((a, b) => b.overall - a.overall)
    .slice(0, 3);

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Top Performers</h2>

      <div className="grid grid-cols-3 gap-4">
        {top3.map((emp, index) => (
          <div key={emp.id} className="border p-4 rounded-lg">
            <div className="text-gray-500">{index + 1}</div>
            <div className="font-semibold">{emp.name}</div>
            <div className="text-sm text-gray-500">{emp.role}</div>
            <div className="text-2xl font-bold mt-2">
              {emp.overall.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
