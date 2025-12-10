import CalendarEvents from "@/app/components/testcalender/calenderevent";

export default function CalendarPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Google Calendar</h1>
      <CalendarEvents />
    </div>
  );
}