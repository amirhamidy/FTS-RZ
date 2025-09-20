import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardPage from "../pages/Dashboard";

export default function Layout() {
  return (
    <div className="d-flex justify-content-between">
      <Sidebar />
      <DashboardPage/>
    </div>
  );
}
