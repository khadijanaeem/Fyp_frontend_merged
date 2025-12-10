"use client";
/*
export default function Calendar() {
  return (
    <div className="bg-white border rounded-lg mt-4 p-4 text-center">
      <p className="text-sm font-semibold mb-3">October 2025</p>
      <div className="grid grid-cols-7 gap-1 text-xs">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="font-medium text-gray-600">{d}</div>
        ))}
        {Array.from({ length: 31 }, (_, i) => (
          <div
            key={i}
            className={`p-2 rounded-md ${i + 1 === 2 ? "bg-[#5B6FED] text-white" : "hover:bg-gray-100"}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
*/


/*
"use client";
import { useState } from "react";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export default function Calendar({ selectedDate, onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date()); // tracks the month being displayed
  const [selected, setSelected] = useState<Date | null>(selectedDate || null);

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelected(newDate);
    onDateSelect?.(newDate);
  };

  return (
    <div className="bg-white border rounded-lg mt-4 p-4 text-center">*/
      {/* Month Navigation */}
      /*
      <div className="flex justify-between items-center mb-3">
        <button onClick={handlePrevMonth} className="text-sm font-semibold">&lt;</button>
        <p className="text-sm font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </p>
        <button onClick={handleNextMonth} className="text-sm font-semibold">&gt;</button>
      </div>
*/
      {/* Weekdays */}
      /*
      <div className="grid grid-cols-7 gap-1 text-xs mb-1">
        {weekdays.map((d) => (
          <div key={d} className="font-medium text-gray-600">{d}</div>
        ))}
      </div>
*/
      {/* Days */}
      {/* Days */}
      /*
<div className="grid grid-cols-7 gap-1 text-xs">
*/
  {/* Empty slots before 1st of month */}
  /*
  {Array.from({ length: startOfMonth.getDay() }).map((_, i) => (
    <div key={`empty-${i}`} className="p-2"></div>
  ))}
*/
  {/* Actual days */}
  /*
  {Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const isSelected =
      selected &&
      selected.getDate() === day &&
      selected.getMonth() === currentMonth.getMonth() &&
      selected.getFullYear() === currentMonth.getFullYear();

    return (
      <div
        key={day}
        onClick={() => handleDateClick(day)}
        className={`p-2 rounded-md cursor-pointer ${
          isSelected ? "bg-[#5B6FED] text-white" : "hover:bg-gray-100"
        }`}
      >
        {day}
      </div>
    );
  })}
</div>
    </div>
  );
}*/
import { useState } from "react";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  events?: any[]; // ✅ added
}

export default function Calendar({ selectedDate, onDateSelect, events = [] }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selected, setSelected] = useState<Date | null>(selectedDate || null);

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const startDay = startOfMonth.getDay(); 
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelected(newDate);
    onDateSelect?.(newDate);
  };

  return (
    <div className="bg-white border rounded-lg mt-4 p-4 text-center">
      <div className="flex justify-between items-center mb-3">
        <button onClick={handlePrevMonth} className="text-sm font-semibold">&lt;</button>
        <p className="text-sm font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </p>
        <button onClick={handleNextMonth} className="text-sm font-semibold">&gt;</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 text-xs mb-1">
        {weekdays.map((d) => (
          <div key={d} className="font-medium text-gray-600">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-xs">

  {/* Empty spaces before the 1st day */}
  {Array.from({ length: startDay }).map((_, i) => (
    <div key={`empty-${i}`} className="p-2"></div>
  ))}

  {/* Actual days */}
  {Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;

    const isSelected =
      selected &&
      selected.getDate() === day &&
      selected.getMonth() === currentMonth.getMonth() &&
      selected.getFullYear() === currentMonth.getFullYear();

    return (
      <div
        key={day}
        onClick={() => handleDateClick(day)}
        className={`p-2 rounded-md cursor-pointer ${
          isSelected ? "bg-[#5B6FED] text-white" : "hover:bg-gray-100"
        }`}
      >
        {day}
      </div>
    );
  })}
</div>
    </div>
  );
}

