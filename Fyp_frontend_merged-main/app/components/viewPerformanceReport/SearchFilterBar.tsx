export default function SearchFilterBar() {
  return (
    <div className="flex items-center gap-4 mb-6">

      <input
        placeholder="Search employees..."
        className="px-4 py-2 border rounded-lg w-1/3"
      />

      <select className="px-3 py-2 border rounded-lg">
        <option>All Departments</option>
        <option>Engineering</option>
        <option>Marketing</option>
        <option>Product</option>
      </select>

      <select className="px-3 py-2 border rounded-lg">
        <option>All Statuses</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Overdue</option>
      </select>
    </div>
  );
}
