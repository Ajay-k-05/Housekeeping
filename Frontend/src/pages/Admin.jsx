import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(data);
  }, []);

  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleLogout = () => {
    // clear any admin token etc
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-800 text-white flex flex-col shadow-lg">
        <div className="text-2xl font-bold p-6 border-b border-blue-600">
          🧹 Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            📊 Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg bg-blue-600"
          >
            📅 Appointments
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            🧑‍🔧 Cleaners
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            ⚙️ Settings
          </a>
        </nav>
        <div className="p-4 border-t border-blue-600">
          <button
            onClick={handleLogout}
            className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Housekeeping Admin Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search appointments..."
              className="border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="flex items-center space-x-2 text-gray-700 font-medium">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                A
              </span>
              <span>Admin</span>
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 flex-1 overflow-x-auto">
          <div className="bg-white rounded-xl shadow-md">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Appointments</h2>
              <span className="text-sm text-gray-500">
                Total: {appointments.length}
              </span>
            </div>
            {appointments.length === 0 ? (
              <div className="p-6 text-gray-600 text-center">
                No appointments yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="py-3 px-4">#</th>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Service</th>
                      <th className="py-3 px-4">Cleaner</th>
                      <th className="py-3 px-4">Created At</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((a, i) => (
                      <tr
                        key={i}
                        className={`${
                          i % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition`}
                      >
                        <td className="py-2 px-4">{i + 1}</td>
                        <td className="py-2 px-4 font-medium">{a.name}</td>
                        <td className="py-2 px-4">{a.phone}</td>
                        <td className="py-2 px-4">{a.service}</td>
                        <td className="py-2 px-4">{a.cleaner}</td>
                        <td className="py-2 px-4 text-gray-500">
                          {a.createdAt}
                        </td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() => handleDelete(i)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs shadow-sm transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
