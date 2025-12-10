// 'use client'
// import Sidebar from "../components/Sidebar/Sidebar"  
// import Navbar from "../components/Navbar2";
// //import Participants from "../components/schedulemeeting/Participant";
// //import Calendar from "../components/schedulemeeting/Calender";
// //import TimeSlots from "../components/schedulemeeting/Timeslots";
// //import Participants from "../components/schedulemeeting/participant";
// //import TimeSlots from "../components/schedulemeeting/timeslots";
// //import Calendar from "../components/schedulemeeting/calender";
// /*import Participants from "../components/schedulemeeting/Participants";
// import Calendar from "../components/schedulemeeting/Calender";
// import TimeSlots from "../components/schedulemeeting/Timeslots";
// export default function SchedulePage() {
//   return (
//     <div className="flex bg-[#F7F8FC] min-h-screen">
//       <Sidebar />
// */
//       {/* Main Content */}
//       /*
//       <div className="flex-1">
//         <Navbar />
//         <div className="p-6">
//           <Participants />
//           <Calendar />
//           <TimeSlots />
//         </div>
//       </div>
//     </div>
//   );
// }
// */
// /*
// import { useState } from "react";
// import Participants from "../components/schedulemeeting/Participants";
// import Calendar from "../components/schedulemeeting/Calender";
// import TimeSlots from "../components/schedulemeeting/Timeslots";

// export default function SchedulePage() {
//   const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);

//   return (
//     <div className="flex bg-[#F7F8FC] min-h-screen">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <div className="p-6">
//           <Participants onSelect={setSelectedParticipants} />
//           <Calendar />
//           <TimeSlots participants={selectedParticipants} />
//         </div>
//       </div>
//     </div>
//   );
// }

// */





// /*
// import Participants from "../components/schedulemeeting/Participants";
// import Calendar from "../components/schedulemeeting/Calender";
// import TimeSlots from "../components/schedulemeeting/Timeslots";


// export default function SchedulePage() {
//   return (
//     <div className="flex bg-[#F7F8FC] min-h-screen">
//       <Sidebar />
// */
//       {/* Main Content */}
//       /*
//       <div className="flex-1">
//         <Navbar />
//         <div className="p-6">
//           <Participants />
//           <Calendar />
//           <TimeSlots />
//         </div>
//       </div>
//     </div>
//   );
// }
// */

// // SchedulePage.tsx



// /*
// import { useState } from "react";
// import Participants from "../components/schedulemeeting/Participants";
// import Calendar from "../components/schedulemeeting/Calender";
// import TimeSlots from "../components/schedulemeeting/Timeslots";
// export default function SchedulePage() {
//   const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
//   const [events, setEvents] = useState([]);

//   // ⬇ Fetch events from Google Calendar API
//   useEffect(() => {
//     async function loadEvents() {
//       try {
//         const res = await fetch("/api/calendar/events");
//         const data = await res.json();
//         setEvents(data);
//       } catch (err) {
//         console.error("Failed to load events", err);
//       }
//     }

//     loadEvents();
//   }, []);

//   return (
//     <div className="flex bg-[#F7F8FC] min-h-screen">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />
//         <div className="p-6">
// */
//           {/* Participants */}
//           /*
//           <Participants onSelect={setSelectedParticipants} />
// */
//           {/* Pass events to calendar so days with meetings highlight */}
//           /*
//           <Calendar events={events} />
// */
//           {/* Pass selected participants */}
//           /*
//           <TimeSlots participants={selectedParticipants} />
//         </div>
//       </div>
//     </div>
//   );
// }*/


// import { useState, useEffect } from "react";
// import Participants from "../components/schedulemeeting/Participants";
// import Calendar from "../components/schedulemeeting/Calender";
// import TimeSlots from "../components/schedulemeeting/Timeslots";


// export default function SchedulePage() {
//   const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
//   const [events, setEvents] = useState<any[]>([]);
// const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   useEffect(() => {
//     async function loadEvents() {
//       try {
//         const res = await fetch("/api/calender/events");
//         const data = await res.json();
//         setEvents(data);
//       } catch (err) {
//         console.error("Failed to load events", err);
//       }
//     }

//     loadEvents();
//   }, []);

//   return (
//     <div className="flex bg-[#F7F8FC] min-h-screen">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />
//         <div className="p-6">

//           <Participants onSelect={setSelectedParticipants} />

//           {/* Pass events to calendar */}
//           {/*<Calendar events={events} />*/}
//           <Calendar
//   events={events}
//   onDateSelect={(date) => setSelectedDate(date)}
// />

//           <TimeSlots
//   participants={selectedParticipants}
//   selectedDate={selectedDate}
// />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar"  
import Navbar from "../components/Navbar3";
import Participants from "../components/schedulemeeting/Participants";
import Calendar from "../components/schedulemeeting/Calender";
import TimeSlots from "../components/schedulemeeting/Timeslots";

export default function SchedulePage() {
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/calender/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events", err);
      }
    }

    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>

      {/* Main Content with proper sidebar spacing */}
      <div className="pt-15 ml-64 w-[calc(100%-16rem)]">
        {/* Navbar */}
        <Navbar />
        
        {/* Content */}
        <div className="p-6">
          <Participants onSelect={setSelectedParticipants} />

          <Calendar
            events={events}
            onDateSelect={(date) => setSelectedDate(date)}
          />

          <TimeSlots
            participants={selectedParticipants}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
}