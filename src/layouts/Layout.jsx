import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout-container row">
      <div className={`sidebar-wrapper col-md-3 ${sidebarOpen ? 'active' : ''}`}>
        <Sidebar />
      </div>
      <div className="dashboard-wrapper px-0 col-md-9">
        <button className="btn btn-sm mb-3 d-lg-none" onClick={toggleSidebar}>
          {sidebarOpen ? 'بستن منو' : 'باز کردن منو'}
        </button>
        <Outlet />
      </div>
    </div>
  );
}
