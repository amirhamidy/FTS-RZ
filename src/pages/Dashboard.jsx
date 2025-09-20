import React from "react";
import { UsersGroupIcon, ChartIcon, SettingsIcon } from "../icons";

export default function DashboardPage() {
    const stats = [
        { title: "کاربران", value: 1280, icon: <UsersGroupIcon />, bgColor: "one-cs-bg" },
        { title: "سفارشات", value: 560, icon: <ChartIcon />, bgColor: "two-cs-bg" },
        { title: "درآمد", value: "$12,400", icon: <ChartIcon />, bgColor: "three-cs-bg" },
        { title: "پروژه‌ها", value: 24, icon: <SettingsIcon />, bgColor: "for-cs-bg" },
    ];

    return (
        <div className="DASH-container">
            <div className="DASH-header"><h1 className="DASH-title">داشبورد</h1></div>
            <div className="DASH-cards-row">{stats.map((stat, i) => (
                <div key={i} className={`DASH-card ${stat.bgColor}`}>
                    <div className="DASH-card-icon text-white">{stat.icon}</div>
                    <div className="DASH-card-content">
                        <h5 className="DASH-card-title text-white">{stat.title}</h5>
                        <p className="DASH-card-value text-white">{stat.value}</p>
                    </div>
                </div>
            ))}</div>
            <div className="DASH-main-row">
                <div className="DASH-left-column">
                    <CustomChart type="line" title="نمودار خطی (فروش)" />
                    <CustomChart type="bar" title="نمودار ستونی (درآمد)" />
                    <CustomChart type="pie" title="نمودار دایره‌ای" />
                </div>
                <div className="DASH-right-column">
                    <OrdersTable title="سفارشات اخیر" />
                    <ActivityFeed title="فعالیت کاربران" />
                </div>
            </div>
        </div>
    );
}
