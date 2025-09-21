import React from 'react';
import UsersGroupIcon from '../icons/UsersGroupIcon';
import ChartIcon from '../icons/ChartIcon';
import SettingsIcon from '../icons/SettingsIcon';
import AdvancedChart from '../components/Charts';
import OrdersTable from '../components/OrdersTable';
import ActivityFeed from '../components/ActivityFeed';

export default function DashboardPage() {
    const stats = [
        { title: 'کاربران', value: 1280, icon: <UsersGroupIcon /> },
        { title: 'سفارشات', value: 560, icon: <ChartIcon /> },
        { title: 'درآمد', value: '$12,400', icon: <ChartIcon /> },
        { title: 'پروژه‌ها', value: 24, icon: <SettingsIcon /> },
    ];

    return (
        <div className="panel-m-dashboard-container">
            <div className="panel-m-dashboard-header">
                <h1 className="panel-m-dashboard-title">داشبورد</h1>
            </div>

            <div className="panel-m-dashboard-cards-row">
                {stats.map((stat, i) => (
                    <div key={i} className="panel-m-dashboard-card">
                        <div className="panel-m-dashboard-card-icon">{stat.icon}</div>
                        <div className="panel-m-dashboard-card-content">
                            <h5 className="panel-m-dashboard-card-title">{stat.title}</h5>
                            <p className="panel-m-dashboard-card-value">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="panel-m-dashboard-main-row">
                <div className="panel-m-dashboard-left-column">
                    <AdvancedChart type="line" title="نمودار خطی فروش" />
                    <AdvancedChart type="bar" title="نمودار ستونی درآمد" />
                    <AdvancedChart type="pie" title="نمودار دایره‌ای مشتریان" />
                </div>
                <div className="panel-m-dashboard-right-column">
                    <OrdersTable title="سفارشات اخیر" />
                    <ActivityFeed title="فعالیت کاربران" />
                </div>
            </div>
        </div>
    );
}
