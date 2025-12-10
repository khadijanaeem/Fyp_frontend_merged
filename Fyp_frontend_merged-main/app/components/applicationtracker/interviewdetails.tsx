export default function InterviewDetails() {
  return (
    <div className="mt-8 border-[#E0E7FF] rounded-xl p-6 bg-[#E0E7FF]">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-black text-lg flex items-center gap-2">
          Interview Call
        </h4>
        <span className="text-sm font-medium bg-blue-100 text-[#5B6FED] px-3 py-1 rounded-lg">
          In Progress
        </span>
      </div>

      <p className="text-gray-600 mb-4">
        Interview scheduled - Join the meeting
      </p>

      <div className="bg-white p-4 rounded-xl border">
        <p className="text-sm text-gray-700 mb-1">
          <strong>Interview Schedule:</strong>
        </p>
        <p className="text-sm text-gray-600">October 25, 2025</p>
        <p className="text-sm text-gray-600 mb-2">2:00 PM - 3:00 PM EST</p>

        <p className="text-sm text-gray-700 mb-1">
          <strong>Meeting Link:</strong>
        </p>
        <a
          href="https://meet.google.com/abc-defg-hij"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline text-sm"
        >
          https://meet.google.com/abc-defg-hij
        </a>
      </div>
    </div>
  );
}
