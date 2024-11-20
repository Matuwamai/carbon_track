import React from 'react';

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-green-900 text-white h-screen transition-width duration-300 fixed ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Toggle Collapse Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isSidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="mt-4 space-y-4">
        <a
          href="/admin"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700"
        >
          <span className="material-icons">dashboard</span>
          {isSidebarOpen && <span>Dashboard</span>}
        </a>
        <a
          href="/admin/companies"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700"
        >
          <span className="material-icons">business</span>
          {isSidebarOpen && <span>Manage Companies</span>}
        </a>
        <a
          href="/admin/reports"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700"
        >
          <span className="material-icons">analytics</span>
          {isSidebarOpen && <span>Reports</span>}
        </a>
        <a
          href="/admin/settings"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700"
        >
          <span className="material-icons">settings</span>
          {isSidebarOpen && <span>Settings</span>}
        </a>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
