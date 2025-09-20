import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import ActivityFeed from '../components/ActivityFeed';
import OrdersTable from '../components/OrdersTable';
import Charts from '../components/Charts';
import { FaUsers, FaShoppingCart, FaDollarSign, FaTasks, FaProjectDiagram } from 'react-icons/fa';

export default function DashboardPage() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="dashboard-container" style={{ flex: 1, padding: '20px' }}>
                <div className="dashboard-header">
                    <h1 className="dashboard-title">داشبورد</h1>
                </div>

                <div className="cards-row">
                    <DashboardCard title="کاربران جدید" value="1,245" icon={<FaUsers />} bgColor="dashboard-card-users" />
                    <DashboardCard title="سفارشات" value="753" icon={<FaShoppingCart />} bgColor="dashboard-card-orders" />
                    <DashboardCard title="درآمد" value="$12,345" icon={<FaDollarSign />} bgColor="dashboard-card-revenue" />
                    <DashboardCard title="پروژه‌ها" value="23" icon={<FaProjectDiagram />} bgColor="dashboard-card-projects" />
                </div>

                <div className="charts-row">
                    <Charts type="line" title="نمودار فروش ماهانه" />
                    <Charts type="bar" title="نمودار کاربران جدید" />
                </div>

                <div className="cards-row">
                    <OrdersTable title="آخرین سفارش‌ها" />
                    <ActivityFeed title="آخرین فعالیت‌ها" />
                </div>
            </div>
        </div>
    );
}
