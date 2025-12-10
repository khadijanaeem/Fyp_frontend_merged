import Sidebar from   "../components/Sidebar/Sidebar" 
import Navbar from '../components/Navbar3'
export default function Shortlisted() {
  const candidates = [
    {
      initials: "SA",
      name: "Sarah Ahmed",
      role: "Frontend Developer",
      location: "San Francisco, CA",
      exp: "5 years experience",
      match: "92%",
      status: "Shortlisted",
      rating: 4.8,
    },
    {
      initials: "WG",
      name: "Waris Ghazi",
      role: "Backend Developer",
      location: "Seattle, WA",
      exp: "4 years experience",
      match: "88%",
      status: "Interview",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="pt-15 flex">
            <Sidebar />

      <div className="ml-64 p-10 w-full bg-[#F7F8FC] min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Shortlisted Candidates</h1>

        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full p-3 border rounded-xl mb-6"
        />

        <div className="space-y-6">
          {candidates.map((c, i) => (
            <div
              key={i}
              className="bg-white shadow p-6 rounded-xl flex justify-between"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-semibold text-indigo-700 text-lg">
                  {c.initials}
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{c.name}</h2>
                  <p className="text-gray-600">{c.role}</p>
                  <p className="text-gray-400">
                    {c.location} • {c.exp}
                  </p>
                  <p className="text-green-600 font-semibold mt-1">{c.match} match</p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <span className="bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  {c.status}
                </span>

                <div className="flex items-center gap-2 text-yellow-500">
                  ⭐ {c.rating}
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                    Schedule Interview
                  </button>
                  <button className="px-4 py-2 border rounded-lg">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}