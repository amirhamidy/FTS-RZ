import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardPage from '../pages/Dashboard';
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout-container">
      <div className={`sidebar-wrapper ${sidebarOpen ? 'active' : ''}`}>
        <Sidebar />
      </div>
      <div className="dashboard-wrapper">
        <button className="btn btn-sm mb-3 d-lg-none" onClick={toggleSidebar}>
          {sidebarOpen ? 'بستن منو' : 'باز کردن منو'}
        </button>
        <DashboardPage />
      </div>
    </div>
  );
}
