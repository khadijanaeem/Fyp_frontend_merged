"use client";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar3";

export default function PerformanceReport() {
  return (
    <div className="min-h-screen bg-[#F5F6FF]">
      <Navbar />
      <div className="pt-15 flex">
        <Sidebar />
        {/* Main content */}
        <div className="flex-1 lg:ml-64 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
            
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Scorecards</h1>
              <p className="text-gray-600 mt-2">Employee performance</p>
            </div>

            {/* Top Performers Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Performers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Top Performer 1 */}
                <div className="text-center p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Emma Thompson</h3>
                      <p className="text-sm text-gray-600">Product Manager</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.6</div>
                      <div className="text-sm text-gray-500">/5.0</div>
                    </div>
                  </div>
                </div>

                {/* Top Performer 2 */}
                <div className="text-center p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Michael Torres</h3>
                      <p className="text-sm text-gray-600">DevOps Engineer</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.5</div>
                      <div className="text-sm text-gray-500">/5.0</div>
                    </div>
                  </div>
                </div>

                {/* Top Performer 3 */}
                <div className="text-center p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Maria Santos</h3>
                      <p className="text-sm text-gray-600">UX Designer</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.4</div>
                      <div className="text-sm text-gray-500">/5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Scorecards Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Employee Scorecards</h2>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search employees..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Departments</option>
                  </select>
                </div>
              </div>

              <p className="text-gray-600 mb-6">Showing 8 of 8 employees</p>

              {/* Employee Scorecards Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Sarah Johnson */}
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-gray-600">Senior Software Engineer</p>
                      <p className="text-sm text-gray-500">Engineering</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.3</div>
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <span>✅</span>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Overall Performance</span>
                      <span className="text-lg font-semibold text-gray-900">86%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical:</span>
                      <span className="font-semibold">4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Communication:</span>
                      <span className="font-semibold">4.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leadership:</span>
                      <span className="font-semibold">4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collaboration:</span>
                      <span className="font-semibold">4.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adaptability:</span>
                      <span className="font-semibold">4.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Mgmt:</span>
                      <span className="font-semibold">4.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-semibold">4.6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Innovation:</span>
                      <span className="font-semibold">4.2</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div>Change: <span className="text-green-600">+0.2 from last review</span></div>
                    <div>Review: 2024-09-25</div>
                  </div>
                </div>

                {/* David Rodriguez */}
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">David Rodriguez</h3>
                      <p className="text-gray-600">Marketing Specialist</p>
                      <p className="text-sm text-gray-500">Marketing</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.1</div>
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <span>✅</span>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Overall Performance</span>
                      <span className="text-lg font-semibold text-gray-900">82%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical:</span>
                      <span className="font-semibold">4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Communication:</span>
                      <span className="font-semibold">4.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leadership:</span>
                      <span className="font-semibold">3.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collaboration:</span>
                      <span className="font-semibold">4.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adaptability:</span>
                      <span className="font-semibold">4.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Mgmt:</span>
                      <span className="font-semibold">4.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-semibold">4.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Innovation:</span>
                      <span className="font-semibold">4.0</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div>Change: <span className="text-green-600">+0.2 from last review</span></div>
                    <div>Review: 2024-09-23</div>
                  </div>
                </div>

                {/* Emma Thompson */}
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Emma Thompson</h3>
                      <p className="text-gray-600">Product Manager</p>
                      <p className="text-sm text-gray-500">Product</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">4.6</div>
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <span>✅</span>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Overall Performance</span>
                      <span className="text-lg font-semibold text-gray-900">92%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical:</span>
                      <span className="font-semibold">4.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Communication:</span>
                      <span className="font-semibold">4.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leadership:</span>
                      <span className="font-semibold">4.7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collaboration:</span>
                      <span className="font-semibold">4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adaptability:</span>
                      <span className="font-semibold">4.6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Mgmt:</span>
                      <span className="font-semibold">4.7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-semibold">4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Innovation:</span>
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div>Change: <span className="text-gray-600">0.0 from last review</span></div>
                    <div>Review: 2024-09-20</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercise Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">6</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">1</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-gray-600">Overdue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}