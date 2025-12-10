import ScorecardCard from "./ScorecardCard";
import { Employee } from "@/app/performanceReport/types";

import employees from "./performanceData";
export default function ScorecardList({ employee }:{employee:Employee}) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {employees.map((e) => (
        <ScorecardCard key={e.id} employee={e} />
      ))}
    </div>
  );
}
