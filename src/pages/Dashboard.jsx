import React from "react";
import { FaUsers, FaShoppingCart, FaDollarSign, FaProjectDiagram } from "react-icons/fa";
import UsersGroupIcon from "../icons/UsersGroupIcon";
import ChartIcon from "../icons/ChartIcon";
import SettingsIcon from "../icons/SettingsIcon";
import CustomChart from "../components/Charts";
import OrdersTable from "../components/OrdersTable";
import ActivityFeed from "../components/ActivityFeed";

export default function DashboardPage() {
    const stats = [
        { title: "کاربران", value: 1280, icon: <UsersGroupIcon />, bgColor: "DASH-card-users", CsBg: "one-cs-bg" },
        { title: "سفارشات", value: 560, icon: <ChartIcon />, bgColor: "DASH-card-orders", CsBg: "two-cs-bg" },
        { title: "درآمد", value: "$12,400", icon: <ChartIcon />, bgColor: "DASH-card-revenue", CsBg: "three-cs-bg" },
        { title: "پروژه‌ها", value: 24, icon: <SettingsIcon />, bgColor: "DASH-card-projects", CsBg: "for-cs-bg" },
    ];

    return (
        <div className="DASH-container">
            {/* ---------- Header ---------- */}
            <div className="DASH-header">
                <h1 className="DASH-title">داشبورد</h1>
            </div>

            {/* ---------- Stats Cards ---------- */}
            <div className="DASH-cards-row">
                {stats.map((stat, i) => (
                    <div key={i} className={`DASH-card ${stat.bgColor} ${stat.CsBg}`}>
                        <div className="DASH-card-icon text-white">{stat.icon}</div>
                        <div className="DASH-card-content">
                            <h5 className="DASH-card-title text-white">{stat.title}</h5>
                            <p className="DASH-card-value text-white">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ---------- Charts & Activity ---------- */}
            <div className="DASH-main-row">
                <div className="DASH-left-column">
                    <CustomChart type="line" title="فروش و درآمد ماهانه" />
                    <OrdersTable title="سفارشات اخیر" />
                </div>
                <div className="DASH-right-column">
                    <ActivityFeed title="فعالیت کاربران" />
                </div>
            </div>
        </div>
    );
}
